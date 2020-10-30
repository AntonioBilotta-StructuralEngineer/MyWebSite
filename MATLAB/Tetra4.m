classdef Tetra4
    properties (SetAccess = private)
        %
        % symbolic fields
        %
        x1 % current coordinates of node 1
        x2 % current coordinates of node 2
        x3 % current coordinates of node 3
        x4 % current coordinates of node 4
        xe % current element coordinates                
        ge % gradient g(xe)
        Je % Jacobian J(xe)
        Fe % deformation gradient F(xe)
        Se % second Piola-Kirchhof stress tensor S(C)
        Ce % tensor C
        
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
        function T = Tetra4()
            % current configuration
            T.x1 = sym('x1',[3 1],'real');
            T.x2 = sym('x2',[3 1],'real');
            T.x3 = sym('x3',[3 1],'real');
            T.x4 = sym('x4',[3 1],'real');
            T.xe = [T.x1;T.x2;T.x3;T.x4];
            
            % tensor C
            T.Ce = sym('C', [3 3], 'real');
        end
        
        function T = Initialize(T,D,i)
            % retrieving data
            T.n1 = D.C(1,i);
            T.n2 = D.C(2,i);
            T.n3 = D.C(3,i);
            T.n4 = D.C(4,i);
            X1 = D.X(1:3,T.n1);
            X2 = D.X(1:3,T.n2);
            X3 = D.X(1:3,T.n3);
            X4 = D.X(1:3,T.n4);
            T.Xe = [X1; X2; X3; X4];
            T.xxe = T.Xe;
            T.we = [D.W(1:3,T.n1); D.W(1:3,T.n2); D.W(1:3,T.n3); D.W(1:3,T.n4)];
            T.av = find(T.we<=size(D.AW,1));
            lam = D.lam(i);
            mi = D.mi(i);
                        
            % reference configuration
            dXdzeta = [X1 X2 X3 X4];
            A = [1 1 1 1;dXdzeta];
            V = det(A)/6;
            iA = inv(A);
            dzetadX = iA(1:4,2:4);

            % current configuration
            dxdzeta = [T.x1 T.x2 T.x3 T.x4];

            % tensors F and C
            T.Fe = dxdzeta*dzetadX;            
            C = T.Fe.'*T.Fe;
            
            % invariants
            I1 = trace(C);
            J = T.Fe(1,1)*det(T.Fe([2 3],[2 3]));
            J = J-T.Fe(1,2)*det(T.Fe([2 3],[1 3]));
            J = J+T.Fe(1,3)*det(T.Fe([2 3],[1 2]));

            % strain energy
            Psi = (mi/2*(I1-3)-mi*log(J)+lam/2*log(J)^2) * V;

            % gradient and jacobian
            T.ge = gradient(Psi,T.xe);
            T.Je = jacobian(T.ge,T.xe);
                                    
            % preliminary symbolic evaluation of S(C)
            I1 = trace(T.Ce);
            I3 = det(T.Ce);
            Psi = mi/2*(I1-3)-mi*log(sqrt(I3))+lam/2*log(sqrt(I3))^2;
            T.Se = reshape(2*gradient(Psi,T.Ce(:)),3,3);
        end
        
        function T = CurrentPosition(T,ax)
            T.xxe(T.av) = ax(T.we(T.av));
        end

        function T = Compute(T)
            T.se = double(subs(T.ge,T.xe,T.xxe));
            T.Ke = double(subs(T.Je,T.xe,T.xxe));
        end
        
        function [we,ge,Je] = GetJg(T)
            we = T.we(T.av);
            ge = T.se(T.av);
            Je = T.Ke(T.av, T.av);
        end
        
        function sig = Stress(T,gx)
            lx = gx([(T.n1-1)*3+1 (T.n1-1)*3+2 (T.n1-1)*3+3 ...
                     (T.n2-1)*3+1 (T.n2-1)*3+2 (T.n2-1)*3+3 ...
                     (T.n3-1)*3+1 (T.n3-1)*3+2 (T.n3-1)*3+3 ...
                     (T.n4-1)*3+1 (T.n4-1)*3+2 (T.n4-1)*3+3]);
            F = double(subs(T.Fe,T.xe,lx));
            C = F.'*F;
            sig = F*double(subs(T.Se,T.Ce,C))*F.'/det(F);
        end
    end
end