classdef Truss
    properties (SetAccess = private)
        %
        % symbolic properties
        %
        xa % current coordinates of node a
        xb % current coordinates of node b
        xe % current element coordinates                
        ge % gradient g(xe)
        Je % Jacobian J(xe)
        eps % strain eps(xe)
        N % axial force N(xe)
        
        %
        % numeric properties
        %
        a % node a global index
        b % node b global index
        Xe % reference element coordinates
        xxe % current element coordinates
        se % gradient
        Ke % Jacobian
        we % vector of connected dofs' indices
        av % who is active inside we
    end
    
    methods
        function T = Truss()
            % current configuration
            T.xa = sym('xa',[3 1],'real');
            T.xb = sym('xb',[3 1],'real');
            T.xe = [T.xa;T.xb];
            
            % eps and N
            T.eps = sym(0);
            T.N = sym(0);
        end
        
        function T = Initialize(T,D,i)
            % retrieving data
            T.a = D.C(1,i);
            T.b = D.C(2,i);
            Xa = D.X(1:3,T.a);
            Xb = D.X(1:3,T.b);
            T.Xe = [Xa; Xb];
            T.xxe = T.Xe;
            T.we = [D.W(1:3,T.a); D.W(1:3,T.b)];
            T.av = find(T.we<=size(D.AW,1));
            A = D.A(i);
            E = D.E(i);

            % reference configuration
            L = dot(Xb-Xa,Xb-Xa);
            L = sqrt(L);            

            % current configuration
            l = dot(T.xb-T.xa,T.xb-T.xa);
            l = sqrt(l);

            % strain
            T.eps = log(l/L);
            
            % strain energy
            Psi = 1/2 * E * T.eps^2 * (L*A);

            % gradient and jacobian
            T.ge = gradient(Psi,T.xe);
            T.Je = jacobian(T.ge,T.xe);
                                    
            % preliminary symbolic evaluation of N
            T.N = E*A*T.eps;
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
        
        function N = Stress(T,gx)
            lx = gx([(T.a-1)*3+1 (T.a-1)*3+2 (T.a-1)*3+3 ...
                     (T.b-1)*3+1 (T.b-1)*3+2 (T.b-1)*3+3]);
            N = double(subs(T.N,T.xe,lx));
        end
    end
end