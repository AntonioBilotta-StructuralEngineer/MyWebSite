classdef PF4
    properties (Constant)
        nG = 4;
        xiG = [[-0.577350269189626; -0.577350269189626]...
               [ 0.577350269189626; -0.577350269189626]...
               [ 0.577350269189626;  0.577350269189626]...
               [-0.577350269189626;  0.577350269189626]];
        wG = [1 1 1 1];        
    end
    
    properties (SetAccess = private)
        %
        % symbolic fields
        %
        x1 % current coordinates of node 1
        x2 % current coordinates of node 2
        x3 % current coordinates of node 3
        x4 % current coordinates of node 4
        xe % current element coordinates
        ge % gradient g(xe) (nGP times)
        Je % Jacobian J(xe) (nGP times)
        Fe % plane deformation gradient F(xe) (nGP times)
        Se % plane second Piola-Kirchhof stress tensor S(C)
        Se33 % S33 component
        Ce % plane tensor C
        
        %
        % numeric fields
        %
        n1 % node 1 global index
        n2 % node 2 global index
        n3 % node 3 global index
        n4 % node 4 global index
        Xe % reference element coordinates
        xxe % current element coordinates
        se % gradient
        Ke % Jacobian
        we % vector of connected dofs' indices
        av % who is active inside we
    end
    
    methods
        function PF = PF4()
            % current element coordinates
            PF.x1 = sym('x1',[2 1],'real');
            PF.x2 = sym('x2',[2 1],'real');
            PF.x3 = sym('x3',[2 1],'real');
            PF.x4 = sym('x4',[2 1],'real');
            PF.xe = [PF.x1;PF.x2;PF.x3;PF.x4];            
        end
        
        function PF = Initialize(PF,D,i)
            % retrieving data
            PF.n1 = D.C(1,i);
            PF.n2 = D.C(2,i);
            PF.n3 = D.C(3,i);
            PF.n4 = D.C(4,i);
            X1 = D.X(1:2,PF.n1);
            X2 = D.X(1:2,PF.n2);
            X3 = D.X(1:2,PF.n3);
            X4 = D.X(1:2,PF.n4);
            PF.Xe = [X1; X2; X3; X4];
            PF.xxe = PF.Xe;
            PF.we = [D.W(1:2,PF.n1); D.W(1:2,PF.n2); D.W(1:2,PF.n3); D.W(1:2,PF.n4)];
            PF.av = find(PF.we<=size(D.AW,1));
            lam = D.lam(i);
            mi = D.mi(i);
            th = D.th(i);
                        
            % gradient and Jacobian
            PF.ge = sym(zeros(8,1,PF.nG));
            PF.Je = sym(zeros(8,8,PF.nG));
            PF.Fe = sym(zeros(2,2,PF.nG));
            for g=1:PF.nG
                % reference configuration
                v1 = -(1-PF.xiG(2,g))/4*X1 + (1-PF.xiG(2,g))/4*X2 +...
                      (1+PF.xiG(2,g))/4*X3 - (1+PF.xiG(2,g))/4*X4;
                v2 = -(1-PF.xiG(1,g))/4*X1 - (1+PF.xiG(1,g))/4*X2 +...
                      (1+PF.xiG(1,g))/4*X3 + (1-PF.xiG(1,g))/4*X4;
                dXdxi = [v1 v2];
                A = det(dXdxi);
                dxidX = inv(dXdxi);

                % current configuration
                v1 = -(1-PF.xiG(2,g))/4*PF.x1 + (1-PF.xiG(2,g))/4*PF.x2 +...
                      (1+PF.xiG(2,g))/4*PF.x3 - (1+PF.xiG(2,g))/4*PF.x4;
                v2 = -(1-PF.xiG(1,g))/4*PF.x1 - (1+PF.xiG(1,g))/4*PF.x2 +...
                      (1+PF.xiG(1,g))/4*PF.x3 + (1-PF.xiG(1,g))/4*PF.x4;
                dxdxi = [v1 v2];
    
                % plane tensors                
                F = dxdxi*dxidX;
                PF.Fe(:,:,g) = F;
                C = F.'*F;
    
                % invariants 
                I1 = trace(C);
                J = det(F);

                % strain energy
                Psi = (mi/2*(I1-2)-mi*log(J)+lam/2*log(J)^2) * A*PF.wG(g)*th;

                % symbolic derivatives
                PF.ge(:,1,g) = gradient(Psi,PF.xe);
                PF.Je(:,:,g) = jacobian(PF.ge(:,1,g),PF.xe);
            end
            
            % preliminary symbolic evaluation of S(C)
            PF.Ce = sym('C', [2 2], 'real');
            PF.Se = sym(zeros(2,2));
            I1 = trace(PF.Ce);
            I3 = det(PF.Ce);
            Psi = mi/2*(I1-2)-mi*log(sqrt(I3))+lam/2*log(sqrt(I3))^2;
            PF.Se = reshape(2*gradient(Psi,PF.Ce(:)),2,2);
            PF.Se33 = lam*log(I3)/2;
        end
        
        function PF = CurrentPosition(PF,ax)
            PF.xxe(PF.av) = ax(PF.we(PF.av));
        end

        function PF = Compute(PF)
            PF.se = zeros(8,1);
            PF.Ke = zeros(8,8);
            for g=1:PF.nG
                PF.se = PF.se + double(subs(PF.ge(:,1,g),PF.xe,PF.xxe));
                PF.Ke = PF.Ke + double(subs(PF.Je(:,:,g),PF.xe,PF.xxe));
            end
        end
        
        function [we,ge,Je] = GetJg(PF)
            we = PF.we(PF.av);
            ge = PF.se(PF.av);
            Je = PF.Ke(PF.av, PF.av);
        end

        function sig = Stress(PF,gx)
            lx = gx([(PF.n1-1)*2+1 (PF.n1-1)*2+2 (PF.n2-1)*2+1 (PF.n2-1)*2+2 ...
                     (PF.n3-1)*2+1 (PF.n3-1)*2+2 (PF.n4-1)*2+1 (PF.n4-1)*2+2 ]);
            sig = zeros(3,3,PF.nG);
            for g=1:PF.nG
                F = double(subs(PF.Fe(:,:,g),PF.xe,lx));
                C = F.'*F;
                sig(1:2,1:2,g) = F*double(subs(PF.Se,PF.Ce,C))*F.'/det(F);
                sig(3,3,g) = subs(PF.Se33,PF.Ce,C)/det(F);
            end
        end
    end
end