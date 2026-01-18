var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "dedication_en",
  "level": "1",
  "url": "dedication_en.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": "  To those who study the solid mechanics   To my grandfather Giovanni  "
},
{
  "id": "acknowledgement_en",
  "level": "1",
  "url": "acknowledgement_en.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to acknowledge the MathWorks Book Program for supporting the use of MATLAB inside this book.  I would like to acknowledge the authors (Robert A. Beezer, David Farmer, Alex Jordan, Mitchel T. Keller) of PreTeXt which is the tool used to author this web book.  Finally, I would like to thank the students who attended my courses at the University of Calabria and who encouraged me to write this text.  I would also like to thank those who have reported typos and errors found in the text and any new reader who wishes to report errors using my personal email address: antonio.bilotta@unical.it  "
},
{
  "id": "preface_en",
  "level": "1",
  "url": "preface_en.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " All the book material here presented was created by using Version 9.8 of MATLAB and Version 8.5 of the Symbolic Math Toolbox . Anyway, as already pointed out in Preface, the topic How to learn the usage of MATLAB is demanded to the official learning resources that can be accessed as described below.   Onramp Tutorials . Learn the essentials of MATLAB , Simulink , and more through the Onramp tutorials created by MathWorks . These 2 to 3 hour tutorials are free and provide a hands-on learning environment with automated assessments and contextual feedback. To get started, visit https:\/\/matlabacademy.mathworks.com .   MATLAB Online . MATLAB Online allows you to access the latest version of MATLAB through your web browser, without any downloads or installations. Learn more about it here: https:\/\/www.mathworks.com\/products\/matlab-online.html .   MATLAB Live Editor . The MATLAB Live Editor allows users to combine code, output, and formatted text in a single executable document. Learn more about it here: https:\/\/www.mathworks.com\/products\/matlab\/live-editor.html .   MATLAB documentation . All the available functions are documented here: https:\/\/www.mathworks.com\/help\/matlab\/ .  The pages of this book are continually being updated and any errors corrected, also upon the kind suggestion of readers. In addition, any interested reader can send requests for clarification to my mailing address (antonio.bilotta@unical.it) and receive a prompt reply.  In order to improve the enjoyment of the proposed content, the following website is also available  solid mechanics addtional contents  edited by the author of the book and where exercises proposed in the exam with their solution, self-assessment quizzes for each chapter of the book, blogs with in-depth discussion of topics related to the solid mechanics and the solution of special problems are collected.  "
},
{
  "id": "configurations_sec_strain_chap_en",
  "level": "1",
  "url": "configurations_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.1",
  "title": "configurations",
  "body": " configurations     The object of the kinematic analysis is a continuous body which will be named with the symbol . Each point of the body occupies a position in space which, fixed an orthonormal reference triad ( ), is identified by a vector. In particular we will talk about two configurations :  the reference configuration  , which collects all the positions occupied by the points of the body before the motion;  the current configuration  , which collects all the positions occupied by the points of the body after the motion.  With respect to the chosen reference base, the positions and will be expressed using different types of notation.        Below are reported some examples of MATLAB instructions that can be used to define and manipulate vectors.   Instructions for creating row vectors.   u = [1 2 3] v = 4:6 w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % how to access to vector's components u(1) u(2) % the same as u(2) u(1,2) % access error u(2,1)     Instructions for creating column vectors (the format usually adopted to manipulate vectors in Mechanics).   u = [1; 2; 3] v = (linspace(4,6,3))' w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % how to access to vector's components k(1) k(2) % the same as k(2) k(2,1) % access error k(1,2)      "
},
{
  "id": "Kinematics_01_fig",
  "level": "2",
  "url": "configurations_sec_strain_chap_en.html#Kinematics_01_fig",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "configurations_sec_strain_chap_en-6-1-1",
  "level": "2",
  "url": "configurations_sec_strain_chap_en.html#configurations_sec_strain_chap_en-6-1-1",
  "type": "Listing",
  "number": "1.1.2",
  "title": "",
  "body": "  u = [1 2 3] v = 4:6 w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % how to access to vector's components u(1) u(2) % the same as u(2) u(1,2) % access error u(2,1)   "
},
{
  "id": "configurations_sec_strain_chap_en-6-2-1",
  "level": "2",
  "url": "configurations_sec_strain_chap_en.html#configurations_sec_strain_chap_en-6-2-1",
  "type": "Listing",
  "number": "1.1.3",
  "title": "",
  "body": "  u = [1; 2; 3] v = (linspace(4,6,3))' w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % how to access to vector's components k(1) k(2) % the same as k(2) k(2,1) % access error k(1,2)   "
},
{
  "id": "transformations_sec_strain_chap_en",
  "level": "1",
  "url": "transformations_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.2",
  "title": "transformations",
  "body": " transformations     We call motion the trasformation valid . is a vector function which, given a position relative to the reference configuration, provides the new position relative to the current configuration. The dependence between and is sometimes indicated shortly as follows We assume sufficiently regular to allow derivation up to the desired order.  It is also assumed that the motion is uniquely invertible, i.e. it is possible to write or where the symbol indicates the inverse motion that associates the current position with the position in the reference configuration.  In general the motion of a body will change the position, orientation and shape of the body. A body capable of modifying its shape will therefore be called deformable .   some basic transformations   Transformation 1 (90 degrees counterclockwise rotation)     Instructions for the definition of a MATLAB function associated with the assigned transformation and for its use.   T1 = @(X) [-X(2); X(1)]; X = [1; 2]; T1(X)      Transformation 2 (horizzontal extension)     MATLAB instructions.   T2 = @(X) [2*X(1); X(2)]; X = [1; -1]; T2(X)      Transformation 3 (vertical extension)     MATLAB instructions   T3 = @(X) [X(1); 1.5*X(2)]; v = [4; 10]; T3(v)      Transformation 4 (shear toward right)     MATLAB instructions   T4 = @(X) [X(1)+X(2); X(2)]; u = [10; -1]; T4(u)      The previous examples belong to a very important class of transformations in solid mechanics: linear transformations .       As shown in previous video, in the case in which the transformation is linear its action on the vector can be transferred through the matrix defined as follows where , and are the vectors obtained by the application of the trasformation to the vectors forming the reference basis. Therefore the transformation of any vector can be obtained in an equivalent way by applying the matrix :    evaluation of the matrix  In the case of the linear transformations already taken into consideration in the previous examples, it is easy to verify the following results.    Transformation 1   Transformation 2       Transformation 3   Transformation 4     MATLAB instructions for the creation of the matrices associated with the given transformations.   T1 = @(X) [-X(2); X(1)]; T2 = @(X) [2*X(1); X(2)]; T3 = @(X) [X(1); 1.5*X(2)]; T4 = @(X) [X(1)+X(2); X(2)]; M1 = [T1([1; 0]) T1([0; 1])] M2 = [T2([1; 0]) T2([0; 1])] M3 = [T3([1; 0]) T3([0; 1])] M4 = [T4([1; 0]) T4([0; 1])]       It is important to underline again that it is possible to identify the matrix only in the case of linear transformation. Furthermore, the reverse is also true, i.e. the existence of a matrix usable to represent a transformation implies the linearity of the transformation.   "
},
{
  "id": "Kinematics_02_fig",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#Kinematics_02_fig",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "transformations_sec_strain_chap_en-6-3-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#transformations_sec_strain_chap_en-6-3-2",
  "type": "Listing",
  "number": "1.2.2",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; X = [1; 2]; T1(X)   "
},
{
  "id": "transformations_sec_strain_chap_en-6-5-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#transformations_sec_strain_chap_en-6-5-2",
  "type": "Listing",
  "number": "1.2.3",
  "title": "",
  "body": "  T2 = @(X) [2*X(1); X(2)]; X = [1; -1]; T2(X)   "
},
{
  "id": "transformations_sec_strain_chap_en-6-7-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#transformations_sec_strain_chap_en-6-7-2",
  "type": "Listing",
  "number": "1.2.4",
  "title": "",
  "body": "  T3 = @(X) [X(1); 1.5*X(2)]; v = [4; 10]; T3(v)   "
},
{
  "id": "transformations_sec_strain_chap_en-6-9-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#transformations_sec_strain_chap_en-6-9-2",
  "type": "Listing",
  "number": "1.2.5",
  "title": "",
  "body": "  T4 = @(X) [X(1)+X(2); X(2)]; u = [10; -1]; T4(u)   "
},
{
  "id": "transformations_sec_strain_chap_en-10-5-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#transformations_sec_strain_chap_en-10-5-2",
  "type": "Listing",
  "number": "1.2.6",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; T2 = @(X) [2*X(1); X(2)]; T3 = @(X) [X(1); 1.5*X(2)]; T4 = @(X) [X(1)+X(2); X(2)]; M1 = [T1([1; 0]) T1([0; 1])] M2 = [T2([1; 0]) T2([0; 1])] M3 = [T3([1; 0]) T3([0; 1])] M4 = [T4([1; 0]) T4([0; 1])]   "
},
{
  "id": "transformations_sec_strain_chap_en-11",
  "level": "2",
  "url": "transformations_sec_strain_chap_en.html#transformations_sec_strain_chap_en-11",
  "type": "Remark",
  "number": "1.2.7",
  "title": "",
  "body": " It is important to underline again that it is possible to identify the matrix only in the case of linear transformation. Furthermore, the reverse is also true, i.e. the existence of a matrix usable to represent a transformation implies the linearity of the transformation.  "
},
{
  "id": "gradient_sec_strain_chap_en",
  "level": "1",
  "url": "gradient_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.3",
  "title": "deformation gradient",
  "body": " deformation gradient  The transformation that was introduced to describe the motion of a body is completely generic therefore it is not necessarily linear. But we will see how this feature, linearity, still plays a fundamental role because, even if generic, can be described locally through its linearization. This idea is based on the notion of differential of a function .  In order to recall, in a simple way, the idea behind the linearization operations, this process is illustrated in the following figure for a real function depending on a single variable.        where if , then it is possible to state that       A rigorous generalization of the equation would require additional instruments far beyond the introductory purposes of the present exposition. The final result is however given, result which provides the differential relative to the current configuration as a function of the differential relative to the reference configuration. For this purpose it si useful to write an expanded version of Equation  The seeken differential can formulated as follows These are a set of equations which can be expressed as multiplication between a matrix and a vector, i.e.   This result shows how the transition from to occurs through a linear transformation represented by the matrix which, for each point of the domain, contains all the information needed to characterize the deformation. is named as deformation gradient . On thsi basis the relationship between the differentials, and , can be expressed in compact form as Relationship that can be specified more precisely as follows where the dependence of on the point where the gradient is evaluated has been made explicit.  What is obtained for the transformation is also valid for its inverse , therefore the following inverse relationship can be established between the differentials and  Typically the evaluation of the gradient of the inverse transformation does not pass through the explicit writing of but is done by calculating the inverse of for which invertibility must be ensured.      It is instructive to compare this figure with the previous in order to keep enough separate the meaning of trasformation from its local representation through the deformation gradient.    evaluation of the deformation gradient (linear transformations)  In the case of Transformation 1 already discussed above, we make explicit the dependence of the individual components of on the components of : From which the following partial derivatives are obtained and therefore the deformation gradient The fact that in this case we obtain a constant gradient equal to the matrix associated with the transformation is not accidental but depends on the linearity of the transformation under consideration: inevitably, its own linearization coincides with the given transformation. A similar result would also be obtained for the other linear transformations considered in the previous examples.    evaluation of the deformation gradient (nonlinear transformations)  In the case of nonlinear transformations it is not possible to identify a matrix associated with the transformation but, locally, the gradient of the transformation behaves like a linear transformation. Consider thus, for example, the transformation defined as   The calculation of the partial derivatives gives allowing the evaluation of the deformation gradient   In order to visualize how the assigned transformation works let us consider, in the plane , three circumferences of radius , and and their configuratons obtained through the assigned nonlinear transformation. The MATLAB instructions for the calculation and plotting of the circumferences in the reference configuration and in the current one are as reported below.   N=60; angle=linspace(0,2*pi,N); radius=1.0; c1X=radius*cos(angle); c1Y=radius*sin(angle); c1x=c1X.^3; c1y=c1Y.^3; radius=0.5; c2X=radius*cos(angle); c2Y=radius*sin(angle); c2x=c2X.^3; c2y=c2Y.^3; radius=1.5; c3X=radius*cos(angle); c3Y=radius*sin(angle); c3x=c3X.^3; c3y=c3Y.^3; hold on % circumference (r=1), reference and deformed configurations plot(c1X,c1Y,'b-') plot(c1x,c1y,'b-') % circumference (r=0.5), reference and deformed configurations plot(c2X,c2Y,'r-') plot(c2x,c2y,'r-') % circumference (r=1.5), reference and deformed configurations plot(c3X,c3Y,'m-') plot(c3x,c3y,'m-')   The previous instructions allow to obtain the following figure where the three circumferences, in the reference and current configurations, are represented with the colors red for the radius , blue for the radius and magenta for the radius .     For exercise and to compare the nonlinear transformation examined with simpler linear transformations, it is suggested to perform the same calculations for the Transformations 2, 3 and 4 discussed in the previous sections.    In the previous example, the cusps on the configurations obtained by applying the transformation are worth to be discussed. Can anything be said about them? The evaluation of the gradient on the points of the circle that are mapped onto the apexes of the cusps would allow to make a hypothesis on what happens in these points. Anyway further insight on this aspect will be given in the following section regarding the determinant of the deformation gradient.     the notion of tensor  By introducing the deformation gradient we got acquainted with a category of mathematical objects which are called second order tensors or, simply, tensors , being superfluous to specify the order of the tensors that occur most often in solid mechanics. Certainly such an encounter can cause disorientation, especially if one is tempted to give a definition of the tensors in the most general form possible. Therefore, the most commonly used definition in Solid mechanics will be given, a definition which is also fairly obvious compared to what, regarding linear transformations, has been said so far.   A second order tensor, which we will usually indicate in capital and bold letters (e.g. , , , ), is a linear transformation that associates to a generic vector another vector . This mapping is usually indicated as follows and its linearity implies that for all vectors , and all scalars .     "
},
{
  "id": "Kinematics_03_fig",
  "level": "2",
  "url": "gradient_sec_strain_chap_en.html#Kinematics_03_fig",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "gradient_sec_strain_chap_en-9",
  "level": "2",
  "url": "gradient_sec_strain_chap_en.html#gradient_sec_strain_chap_en-9",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": " It is instructive to compare this figure with the previous in order to keep enough separate the meaning of trasformation from its local representation through the deformation gradient.  "
},
{
  "id": "gradient_sec_strain_chap_en-11-4-6",
  "level": "2",
  "url": "gradient_sec_strain_chap_en.html#gradient_sec_strain_chap_en-11-4-6",
  "type": "Listing",
  "number": "1.3.3",
  "title": "",
  "body": "  N=60; angle=linspace(0,2*pi,N); radius=1.0; c1X=radius*cos(angle); c1Y=radius*sin(angle); c1x=c1X.^3; c1y=c1Y.^3; radius=0.5; c2X=radius*cos(angle); c2Y=radius*sin(angle); c2x=c2X.^3; c2y=c2Y.^3; radius=1.5; c3X=radius*cos(angle); c3Y=radius*sin(angle); c3x=c3X.^3; c3y=c3Y.^3; hold on % circumference (r=1), reference and deformed configurations plot(c1X,c1Y,'b-') plot(c1x,c1y,'b-') % circumference (r=0.5), reference and deformed configurations plot(c2X,c2Y,'r-') plot(c2x,c2y,'r-') % circumference (r=1.5), reference and deformed configurations plot(c3X,c3Y,'m-') plot(c3x,c3y,'m-')   "
},
{
  "id": "nolin_transf_example",
  "level": "2",
  "url": "gradient_sec_strain_chap_en.html#nolin_transf_example",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": "  "
},
{
  "id": "gradient_sec_strain_chap_en-12",
  "level": "2",
  "url": "gradient_sec_strain_chap_en.html#gradient_sec_strain_chap_en-12",
  "type": "Remark",
  "number": "1.3.5",
  "title": "",
  "body": " In the previous example, the cusps on the configurations obtained by applying the transformation are worth to be discussed. Can anything be said about them? The evaluation of the gradient on the points of the circle that are mapped onto the apexes of the cusps would allow to make a hypothesis on what happens in these points. Anyway further insight on this aspect will be given in the following section regarding the determinant of the deformation gradient.  "
},
{
  "id": "gradient_sec_strain_chap_en-13-3",
  "level": "2",
  "url": "gradient_sec_strain_chap_en.html#gradient_sec_strain_chap_en-13-3",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": " A second order tensor, which we will usually indicate in capital and bold letters (e.g. , , , ), is a linear transformation that associates to a generic vector another vector . This mapping is usually indicated as follows and its linearity implies that for all vectors , and all scalars .  "
},
{
  "id": "displacement_sec_strain_chap_en",
  "level": "1",
  "url": "displacement_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.4",
  "title": "displacement field",
  "body": " displacement field  Another quantity widely used in the kinematic description of bodies is the difference between the current position and the reference position of the generic point known as displacement field . The relative gradient, known as displacement gradient and indicated with the symbol , is obtained in a similar way to what has already been done for the deformation gradient. Given the field the following result can be obtained   From Equation the relationship between displacement gradient and deformation can be easily obtained where , the identity tensor, is    evaluation of the displacement field and its gradient  With regard to the Transformation 1 already used in the previous examples, the displacement field and its gradient can be evaluated on the basis of the following MATLAB instructions. Bear in mind that, for the linearity of the transformations involved, the gradients are evaluated as the matrix associated to the transformation.   T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])] Grad_u = F - diag([1 1]) u1 = @(X) T1(X) - X; Grad_u = [u1([1; 0]) u1([0; 1])]     MATLAB instructions for Transformation 2.   T2 = @(X) [2*X(1); X(2)]; F = [T2([1; 0]) T2([0; 1])] Grad_u = F - diag([1 1]) u2 = @(X) T2(X) - X; Grad_u = [u2([1; 0]) u2([0; 1])]     MATLAB instructions for Transformation 3.   T3 = @(X) [X(1); 1.5*X(2)]; F = [T3([1; 0]) T3([0; 1])] Grad_u = F - diag([1 1]) u3 = @(X) T3(X) - X; Grad_u = [u3([1; 0]) u3([0; 1])]     MATLAB instructions for Transformation 4.   T4 = @(X) [X(1)+X(2); X(2)]; F = [T4([1; 0]) T4([0; 1])] Grad_u = F - diag([1 1]) u4 = @(X) T4(X) - X; Grad_u = [u4([1; 0]) u4([0; 1])]      "
},
{
  "id": "displacement_sec_strain_chap_en-4-2-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_en.html#displacement_sec_strain_chap_en-4-2-2",
  "type": "Listing",
  "number": "1.4.1",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])] Grad_u = F - diag([1 1]) u1 = @(X) T1(X) - X; Grad_u = [u1([1; 0]) u1([0; 1])]   "
},
{
  "id": "displacement_sec_strain_chap_en-4-3-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_en.html#displacement_sec_strain_chap_en-4-3-2",
  "type": "Listing",
  "number": "1.4.2",
  "title": "",
  "body": "  T2 = @(X) [2*X(1); X(2)]; F = [T2([1; 0]) T2([0; 1])] Grad_u = F - diag([1 1]) u2 = @(X) T2(X) - X; Grad_u = [u2([1; 0]) u2([0; 1])]   "
},
{
  "id": "displacement_sec_strain_chap_en-4-4-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_en.html#displacement_sec_strain_chap_en-4-4-2",
  "type": "Listing",
  "number": "1.4.3",
  "title": "",
  "body": "  T3 = @(X) [X(1); 1.5*X(2)]; F = [T3([1; 0]) T3([0; 1])] Grad_u = F - diag([1 1]) u3 = @(X) T3(X) - X; Grad_u = [u3([1; 0]) u3([0; 1])]   "
},
{
  "id": "displacement_sec_strain_chap_en-4-5-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_en.html#displacement_sec_strain_chap_en-4-5-2",
  "type": "Listing",
  "number": "1.4.4",
  "title": "",
  "body": "  T4 = @(X) [X(1)+X(2); X(2)]; F = [T4([1; 0]) T4([0; 1])] Grad_u = F - diag([1 1]) u4 = @(X) T4(X) - X; Grad_u = [u4([1; 0]) u4([0; 1])]   "
},
{
  "id": "determinant_sec_strain_chap_en",
  "level": "1",
  "url": "determinant_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.5",
  "title": "determinant of the deformation gradient",
  "body": " determinant of the deformation gradient  In previous sections tensors have been introduced as linear operators associated with linear transformations defined in the usual space . The use of the denomination linear operator instead of matrix indicates a mathematical object with a broader meaning but, in any case, the tensors share with matrices all the basic algebraic properties and operations. Therefore, in the following, speaking of matrices, some properties and operations will be resumed, such as the calculation of the determinant, placing them in the realm of the kinematic description of the bodies.       What is described in previous video lesson can be summarized as follows.  The determinant is a real number which constitutes the scale factor of the areas, in the case of 2D transformations, or of the volumes, in the case of 3D transformations.  From this perspective a null determinant is associated with transformations that scale to zero areas or volumes described in the initial space to which the transformation is applied. For example in 2D, the determinant is zero if all the points of the starting space are mapped on a line or, in the most extreme case, on a single point. In the 3D case, a transformation has zero determinant if it maps the points in a plane, in a straight line or in a single point. In these cases the columns of the matrix associated with the transformation are linearly dependent.  The determinant can also be negative because it also carries information about a possible change of orientation of the area or of the starting volume. This occurs when the transformed vectors of the basis do not respect the right hand's rule.      transformation formula of volume elements  Given the volume element belonging to the reference configuration , it is possible to evaluate the corresponding volume element relative to the current configuration . The formula is where Inequality highlights compliance with the following conditions: (i) due to the impenetrability of matter, transformations characterized by are not admissible; (ii) the volumetric transformation ratio cannot be null for any point . It is also possible to define the inverse volumetric ratio i.e. from which   Transformations characterized by will be called isochoric transformations.   calculation of the determinant of transformations and admissibility check  Considering the two-dimensional transformations considered in the previous examples, the following MATLAB instructions are given to be used for the calculation of the determinant and for the verification of the admissibility of the transformation. The instructions for plotting the value of the determinant on the domain , are also given.  MATLAB instructions for the Transformation 1.   T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])]; syms detF(X1, X2); detF(X1, X2) = det(F); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))     Similar instructions can also be identified for Transformations 2, 3 and 4 which also verify the admissibility condition, being characterized by a determinant which is constant and greater than zero.  MATLAB instructions for the transformation defined by .   syms T1(X1, X2); T1(X1, X2) = X1^3; syms T2(X1, X2); T2(X1, X2) = X2^3; syms detF(X1, X2); detF(X1,X2) = diff(T1, X1)*diff(T2, X2) - diff(T1, X2)*diff(T2, X1); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))     The result of the previous instructions provides the following plot   plotting which can be used to verify that along the coordinated axes and the transformation has zero determinant and therefore is not admissible (remember in this regard the presence of cusps in the plots shown in ).      area element transformation       The volumetric transformation can be rewritten, remembering the meaning of the triple product presented in previous video, as follows where and represent vector elements relative to the infinitesimal areas in the current configuration and in the reference configuration, respectively. is obtained by transforming the elementary segment . By taking a few simple manipulations it is easy to obtain Which gives expression known as Nanson's formula and which defines how the area element vector , belonging to the current configuration , is related to area element vector belonging to the reference configuration .   "
},
{
  "id": "determinant_sec_strain_chap_en-5-4-3-2",
  "level": "2",
  "url": "determinant_sec_strain_chap_en.html#determinant_sec_strain_chap_en-5-4-3-2",
  "type": "Listing",
  "number": "1.5.1",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])]; syms detF(X1, X2); detF(X1, X2) = det(F); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))   "
},
{
  "id": "determinant_sec_strain_chap_en-5-4-5-3",
  "level": "2",
  "url": "determinant_sec_strain_chap_en.html#determinant_sec_strain_chap_en-5-4-5-3",
  "type": "Listing",
  "number": "1.5.2",
  "title": "",
  "body": "  syms T1(X1, X2); T1(X1, X2) = X1^3; syms T2(X1, X2); T2(X1, X2) = X2^3; syms detF(X1, X2); detF(X1,X2) = diff(T1, X1)*diff(T2, X2) - diff(T1, X2)*diff(T2, X1); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))   "
},
{
  "id": "determinant_sec_strain_chap_en-5-4-6-1",
  "level": "2",
  "url": "determinant_sec_strain_chap_en.html#determinant_sec_strain_chap_en-5-4-6-1",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "polar_sec_strain_chap_en",
  "level": "1",
  "url": "polar_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.6",
  "title": "polar decomposition",
  "body": " polar decomposition       The possibility that a given linear transformation may be the result of the composition of several linear transformations and the physical consideration that the motion of a body is made up of elementary transformations such as rotation and pure deformation , lead to the following fundamental result.   polar decomposition theorem  Given the deformation gradient , there is a single polar decomposition at each point defined as follows  is the rotation tensor , then an orthogonal proper tensor, which satisfies the relationship  and are the right stretch tensor and the left stretch tensor , rispectively. These tensors are unique , positive definite and symmetric . Positive definiteness imposes that for any vector the satisfaction of the following property while symmetry implies     The application of the right polar decomposition to furnishes which shows how the vector is first stretched and after rotated. By applying the left polar decomposition it is obtained to be interpreted as a deformation sequence of followed by a rotation. What has been said is illustrated by the following figure.   In particular, we illustrate the case in which the right stretch tensor, , produces only an elongation in the horizontal direction and, subsequently, the tensor produces a rotation of 45 . It is evident that if the rotation is applied first, second and third transformation sequence in the figure, the stretch tensor cannot be the same but the left tensor must be different and equal to which allows to obtain the same final configuration.  The polar decomposition theorem therefore captures the elementary transformations, rotation and pure deformation, which make up and highlights the non-commutativity of the two transformations. Furthermore, if and therefore the transformation, in the point considered, it is a pure deformation . Conversely, if and therefore , the transformation it is a rigid rotation at the point considered.    rotation tensors  We have already repeatedly encountered the 2D tensor related to a counterclockwise rotation of which in matrix terms has the following expression It is easy for such a tensor to verify the following properties The listed properties are not specific to the particular tensor considered but are satisfied by all the rotation tensors, whatever the size of the rotation angle. In order to verify this, consider the linear transformation that rotates an assigned vector by a generic angle .       As shown in the previous video, the following result can be stated It is easy to verify that properties which define a proper orthogonal tensors . The condition just written allow to obtain relationship confirming the fact that the change in volume can only be linked to . It is also easy to verify that     positive definite tensors  If a symmetric tensor satisfies the condition then we say the tensor positive definite. From a geometric point of view, this condition can be easily interpreted as follows: each time the linear transformation is applied to any non-zero vector, the vector obtained in this way forms an angle lower than with respect the starting vector , a condition which has however very often a precise physical meaning.  On the condition of positivity, further information and insight will be provided when eigenvalues and eigenvectors will be discussed.   "
},
{
  "id": "polar_sec_strain_chap_en-5",
  "level": "2",
  "url": "polar_sec_strain_chap_en.html#polar_sec_strain_chap_en-5",
  "type": "Remark",
  "number": "1.6.1",
  "title": "",
  "body": " The application of the right polar decomposition to furnishes which shows how the vector is first stretched and after rotated. By applying the left polar decomposition it is obtained to be interpreted as a deformation sequence of followed by a rotation. What has been said is illustrated by the following figure.   In particular, we illustrate the case in which the right stretch tensor, , produces only an elongation in the horizontal direction and, subsequently, the tensor produces a rotation of 45 . It is evident that if the rotation is applied first, second and third transformation sequence in the figure, the stretch tensor cannot be the same but the left tensor must be different and equal to which allows to obtain the same final configuration.  The polar decomposition theorem therefore captures the elementary transformations, rotation and pure deformation, which make up and highlights the non-commutativity of the two transformations. Furthermore, if and therefore the transformation, in the point considered, it is a pure deformation . Conversely, if and therefore , the transformation it is a rigid rotation at the point considered.  "
},
{
  "id": "rotation_remark",
  "level": "2",
  "url": "polar_sec_strain_chap_en.html#rotation_remark",
  "type": "Remark",
  "number": "1.6.3",
  "title": "rotation tensors.",
  "body": " rotation tensors  We have already repeatedly encountered the 2D tensor related to a counterclockwise rotation of which in matrix terms has the following expression It is easy for such a tensor to verify the following properties The listed properties are not specific to the particular tensor considered but are satisfied by all the rotation tensors, whatever the size of the rotation angle. In order to verify this, consider the linear transformation that rotates an assigned vector by a generic angle .       As shown in the previous video, the following result can be stated It is easy to verify that properties which define a proper orthogonal tensors . The condition just written allow to obtain relationship confirming the fact that the change in volume can only be linked to . It is also easy to verify that   "
},
{
  "id": "polar_sec_strain_chap_en-7",
  "level": "2",
  "url": "polar_sec_strain_chap_en.html#polar_sec_strain_chap_en-7",
  "type": "Remark",
  "number": "1.6.4",
  "title": "positive definite tensors.",
  "body": " positive definite tensors  If a symmetric tensor satisfies the condition then we say the tensor positive definite. From a geometric point of view, this condition can be easily interpreted as follows: each time the linear transformation is applied to any non-zero vector, the vector obtained in this way forms an angle lower than with respect the starting vector , a condition which has however very often a precise physical meaning.  On the condition of positivity, further information and insight will be provided when eigenvalues and eigenvectors will be discussed.  "
},
{
  "id": "principal_directions_sec_strain_chap_en",
  "level": "1",
  "url": "principal_directions_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.7",
  "title": "stretch tensor <span class=\"process-math\">\\(\\tens{U}\\)<\/span> and principal directions (transformation of line elements)",
  "body": " stretch tensor and principal directions (transformation of line elements)  The identification of the prinicipal directions of the stretch tensor allows to obtain an intrinsic representation of the deformation to which a generic point of the body is subjected. The adjective intrinsec is justified because, as we will see, a simpler representation of the deformation state is obtained but, above all, independent of the reference system used.  The discussion that follows, gradually, presents the idea behind the principal directions referring to the right stretch tensor, , in a particular form: the diagonal form.  With due clarifications, what is obtained also applies to the left stretch tensor, .    Let us assume for the following diagonal form If is applied to a generic vector the following result is obtained Result that shows how in this case the application of to any vector determines only a scaling, proportional to the factor , of the length of the vector which maintains the original direction. It is easy to verify that Moreover because the unique admissible value for is   We can summarize what has been achieved as follows. Each direction is a principal direction since the transformed vectors maintain the original direction. The scaling factor , which is called principal stretch , applies to any direction on which is applied by determining one of the following effects   , the vector increases its length;   , the vector does not modify its length;   , the vector decreases its length;   , the value is not admissible because the resulting vector cannot go to zero length;   , the value is not admissible because the resulting vector cannot point in the opposite direction.            Now suppose for always a diagonal form but with coefficients not all equal to each other. In particular, let us take By applying to the following vectors we obtain Result that can be commented as follows.  All the vectors belonging to directions lying in the plane identified by the first two reference axes are simply scaled by the factor .  Vectors parallel to the third reference axis are simply scaled by the factor .  All other vectors are both scaled and change direction and the scale factor depends on both and .  Then in this case principal directions are given by all the directions belonging to the plane and by the axis.  As for the scaling factors and it can be observed as in the previous case as condition which allows to state While the positivity condition of the tensor  gives also   Therefore also in this case and assume the meaning of scale factors called principal stretches of the line elements belonging to the principal directions. For and the same considerations discussed in the previous case apply.       All the considerations made so far apply if the tensor takes the form with principal directions defined by the plane and the axis; or the form with principal directions defined by the plane and the axis.     It is now clear that the more generic diagonal form of the tensor is given by where all the coefficients on the main diagonal are generally different. In this case, avoiding repeating further considerations now obvious, the following results can be established.  Only , and axes constitute the principal directions of tensor .  The principal stretches , , and , are positive real numbers associated to , and , respectively. Under the action of the transformation, line elements belonging to principal directions maintain the original direction by changing only their length that can increase or decrease.            spectral decomposition of the stretch tensor       The diagonal form of , see , can be written as follows from which, on the basis of the discussion presented in the previous video, the following expression for can be obtained   The latter result is of fundamental importance because it allows you to express with respect to the principal directions in the more general, and also more frequent, case of principal directions not aligned with the axes of reference used in the problem under consideration.  Let the generic principal directions be noted by , and , then the spectral decomposition of tensor is The principal stretches constitute what is called the spectrum of .   Ever since we started talking about principal directions, we never mentioned the symmetry of . The symmetry of the tensor determines the mutual orthogonality of the principal directions, whatever direction they take.    The spectral form explains why, compared to the standard reference base, the matrix associated to tensor almost always loses its diagonal form. In fact, although the principal directions are always present, these in general do not coincide with the axes of the standard reference system. The loss of the diagonal form can be highlighted by a matrix writing of the spectral decomposition of the tensor Where the following notation has been adopted for the components of the prinicipal directions   Finally it is interesting to observe how the expression can be written in the following way which is how the expression assumed by the tensor is evaluated when passing from the coordinate system consisting of the principal directions to the standard coordinate system , and . The matrix used for the transformation is constructed by inserting in the columns the vectors , and .    Let be given by the following diagonal form calculate the expression assumed assuming to apply to the principal directions the following rotations    The following MATLAB instructions allow you to calculate what is required.   R1 = [cos(pi\/4) -sin(pi\/4) 0; sin(pi\/4) cos(pi\/4) 0; 0 0 1]; R2 = [cos(pi\/4) 0 -sin(pi\/4); 0 1 0; sin(pi\/4) 0 cos(pi\/4)]; u1 = R2*R1*[1; 0; 0]; u2 = R2*R1*[0; 1; 0]; u3 = R2*R1*[0; 0; 1]; lam1 = 2; lam2 = 5; lam3 = 7; U = lam1*u1*transpose(u1) + lam2*u2*transpose(u2) + ... lam3*u3*transpose(u3)     Also carry out the following calculation.   u1*transpose(u1) + u2*transpose(u2) + u3*transpose(u3)   What does the obtained result suggest?    In order to verify how the tensor acts differently on the principal directions and on the directions identified by the standard reference, consider the following plane state characterized by the following diagonal form of  Assume for the principal directions an inclination equal to and then apply the stretch tensor to the two squares, represented in the following figure. The red square has sides aligned with the standard reference, the blue square has sides aligned with the principal directions.       The application of the tensor is carried out by varying the parameter , from which the two eigenvalues of the tensor depend, between the values and .  The MATLAB instructions that can be used for calculating and displaying the deformations of the two squares starting from the initial configurations are shown below.     Q1 = [1 -1 -1 1 1; 1 1 -1 -1 1]; Q2 = [1 0 -1 0 1; 0 1 0 -1 0]; x = Q1(1,:); y = Q1(2,:); pbaspect([1 1 1]) line(x,y,'Color','red','LineWidth',2) x = Q2(1,:); y = Q2(2,:); line(x,y,'Color','blue','LineWidth',2) u1 = [1\/sqrt(2); 1\/sqrt(2)]; u2 = [-1\/sqrt(2); 1\/sqrt(2)]; syms U(lam) U(lam) = [u1 u2]*diag([1.2*lam lam])*transpose([u1 u2]); for v = 1.1:0.1:1.5 UQ1 = U(v)*Q1; x = UQ1(1,:); y = UQ1(2,:); line(x,y,'Color','red','LineWidth',2) UQ2 = U(v)*Q2; x = UQ2(1,:); y = UQ2(2,:); line(x,y,'Color','blue','LineWidth',2) end         eigenvalues and eigenvectors  Knowing the principal stretches and the principal directions, ( ), associated with them, the spectral decomposition allows to easily evaluate the tensor with respect to the reference system used.  The typical scenario is, however, reversed. That is, given the tensor , we want to evaluate the principal stretches and directions. Solving this question means calculating the eigenvalues and eigenvectors of the matrix associated with the tensor . In this section the procedure to be used in the solution of the eigenvalue problem will not be presented because this constitutes a topic that has certainly already been studied in previous courses and for which the available literature, also online, is vast. Here it was considered more important to highlight the mechanical meaning of eigenvalues and eigenvectors, meaning widely discussed in the previous sections.  In addition, MATLAB will be used to calculate the eigenvalues and eigenvectors as shown in the following example.   Let us consider the expression of obtained in previous example, i.e. calculate eigenvalues and eigenvectors by using MATLAB . The required instructions are as follows.     U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; [V, D] = eig(U)       the characteristic polynomial  The evaluation of the eigenvalues and eigenvectors associated with the tensor passes through the solution of the following cubic equation where the characteristic polynomial appears. It depends on three quantities that are called invariants of the tensor . The term invariant indicates that these values do not change as the reference system, with respect to which is represented, changes. In the following the expressions to be used for the calculation of the invariants are reported for the case regarding the tensor expressed with respect to the principal directions and for the generic case.   First invariant  where the trace of the tensor, i.e. the sum of the coefficients belonging to the main diagonal, is used.   Second invariant     Third invariant       Let us check that invariants do not change if we consider for its diagonal form or   MATLAB instructions that can be used for the required check are reported here.     lam1 = 2; lam2 = 5; lam3 = 7; I1 = lam1 + lam2 + lam3 I2 = lam1*lam2 + lam2*lam3 + lam3*lam1 I3 = lam1*lam2*lam3 U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; I1 = trace(U) I2 = 1\/2*(trace(U)^2 - trace(U*U)) I3 = det(U)        "
},
{
  "id": "principal_directions_sec_strain_chap_en-8-6",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-8-6",
  "type": "Remark",
  "number": "1.7.1",
  "title": "",
  "body": " Ever since we started talking about principal directions, we never mentioned the symmetry of . The symmetry of the tensor determines the mutual orthogonality of the principal directions, whatever direction they take.  "
},
{
  "id": "principal_directions_sec_strain_chap_en-8-7",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-8-7",
  "type": "Remark",
  "number": "1.7.2",
  "title": "",
  "body": " The spectral form explains why, compared to the standard reference base, the matrix associated to tensor almost always loses its diagonal form. In fact, although the principal directions are always present, these in general do not coincide with the axes of the standard reference system. The loss of the diagonal form can be highlighted by a matrix writing of the spectral decomposition of the tensor Where the following notation has been adopted for the components of the prinicipal directions   Finally it is interesting to observe how the expression can be written in the following way which is how the expression assumed by the tensor is evaluated when passing from the coordinate system consisting of the principal directions to the standard coordinate system , and . The matrix used for the transformation is constructed by inserting in the columns the vectors , and .  "
},
{
  "id": "principal_directions_sec_strain_chap_en-8-8-2-2",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-8-8-2-2",
  "type": "Listing",
  "number": "1.7.3",
  "title": "",
  "body": "  R1 = [cos(pi\/4) -sin(pi\/4) 0; sin(pi\/4) cos(pi\/4) 0; 0 0 1]; R2 = [cos(pi\/4) 0 -sin(pi\/4); 0 1 0; sin(pi\/4) 0 cos(pi\/4)]; u1 = R2*R1*[1; 0; 0]; u2 = R2*R1*[0; 1; 0]; u3 = R2*R1*[0; 0; 1]; lam1 = 2; lam2 = 5; lam3 = 7; U = lam1*u1*transpose(u1) + lam2*u2*transpose(u2) + ... lam3*u3*transpose(u3)   "
},
{
  "id": "principal_directions_sec_strain_chap_en-8-8-3-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-8-8-3-1",
  "type": "Listing",
  "number": "1.7.4",
  "title": "",
  "body": "  u1*transpose(u1) + u2*transpose(u2) + u3*transpose(u3)   "
},
{
  "id": "principal_directions_sec_strain_chap_en-8-9-2-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-8-9-2-1",
  "type": "Figure",
  "number": "1.7.5",
  "title": "",
  "body": "  "
},
{
  "id": "principal_directions_sec_strain_chap_en-8-9-5-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-8-9-5-1",
  "type": "Listing",
  "number": "1.7.6",
  "title": "",
  "body": "  Q1 = [1 -1 -1 1 1; 1 1 -1 -1 1]; Q2 = [1 0 -1 0 1; 0 1 0 -1 0]; x = Q1(1,:); y = Q1(2,:); pbaspect([1 1 1]) line(x,y,'Color','red','LineWidth',2) x = Q2(1,:); y = Q2(2,:); line(x,y,'Color','blue','LineWidth',2) u1 = [1\/sqrt(2); 1\/sqrt(2)]; u2 = [-1\/sqrt(2); 1\/sqrt(2)]; syms U(lam) U(lam) = [u1 u2]*diag([1.2*lam lam])*transpose([u1 u2]); for v = 1.1:0.1:1.5 UQ1 = U(v)*Q1; x = UQ1(1,:); y = UQ1(2,:); line(x,y,'Color','red','LineWidth',2) UQ2 = U(v)*Q2; x = UQ2(1,:); y = UQ2(2,:); line(x,y,'Color','blue','LineWidth',2) end   "
},
{
  "id": "principal_directions_sec_strain_chap_en-9-5-2-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-9-5-2-1",
  "type": "Listing",
  "number": "1.7.7",
  "title": "",
  "body": "  U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; [V, D] = eig(U)   "
},
{
  "id": "principal_directions_sec_strain_chap_en-9-6",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_en.html#principal_directions_sec_strain_chap_en-9-6",
  "type": "Insight",
  "number": "1.7.8",
  "title": "the characteristic polynomial.",
  "body": " the characteristic polynomial  The evaluation of the eigenvalues and eigenvectors associated with the tensor passes through the solution of the following cubic equation where the characteristic polynomial appears. It depends on three quantities that are called invariants of the tensor . The term invariant indicates that these values do not change as the reference system, with respect to which is represented, changes. In the following the expressions to be used for the calculation of the invariants are reported for the case regarding the tensor expressed with respect to the principal directions and for the generic case.   First invariant  where the trace of the tensor, i.e. the sum of the coefficients belonging to the main diagonal, is used.   Second invariant     Third invariant       Let us check that invariants do not change if we consider for its diagonal form or   MATLAB instructions that can be used for the required check are reported here.     lam1 = 2; lam2 = 5; lam3 = 7; I1 = lam1 + lam2 + lam3 I2 = lam1*lam2 + lam2*lam3 + lam3*lam1 I3 = lam1*lam2*lam3 U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; I1 = trace(U) I2 = 1\/2*(trace(U)^2 - trace(U*U)) I3 = det(U)      "
},
{
  "id": "measures_sec_strain_chap_en",
  "level": "1",
  "url": "measures_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.8",
  "title": "strain measures",
  "body": " strain measures    Cauchy-Green strain tensor  Let us consider the following product By applying the right polar decomposition it can be obtained what follows result showinig how contains only deformation contribution related to . Such a product is called right Cauchy-Green tensor and, as , is symmetric and positive definite. constitutes an important measure of strain.   One might think that, known , the simple operation allows the evaluation of . The operation is possible but not trivial because it requires the evaluation of the eigenvalues and eigenvectors of . For this reason the tensor or other derived quantities are used directly in strain measurements.   In order to illustrate the procedure described above, however, consider the following deformation gradient Starting from this expression, the following MATLAB instructions allow you to evaluate the eigenvectors and eigenvalues of .     F = [4.4623 -3.2249 -0.4874; 2.9623 1.7249 -1.9874; -1.7500 -1.0607 5.2500]; U2 = transpose(F)*F; [u, D2] = eig(U2)     The following instructions instead, evaluating the principal stretches as and the main directions by extracting them from the columns of the eigenvectors matrix returned by MATLAB , allow to calulate tensor and tensor by using It is also possible to calculate by using      u1 = u(:,1); u2 = u(:,2); u3 = u(:,3); lam1 = sqrt(D2(1,1)); lam2 = sqrt(D2(2,2)); lam3 = sqrt(D2(3,3)); U = lam1*u1*transpose(u1)+lam2*u2*transpose(u2)+lam3*u3*transpose(u3) R = F*inv(U) V = F*transpose(R)       In a similar way the left Cauchy-Green tensor can be obtained, i.e. from which    Between the two Cauchy-Green tensors, is most used in solid mechanics because it acts on the position of the point expressed in the reference configuration.    meaning of the components of  Let's apply to the gradient of the transformation what has been said in about the meaning of the matrices associated with linear transformations. That is, we express the matrix associated with as follows where the transformed basis vectors appear in the columns of . We then evaluate the matrix associated with the tensor on the basis of the definition  which gives This result allows us to establish the following for the coefficients of   For the generic coefficient of placed on the main diagonal, , we have It can therefore be seen that the generic component on the main diagonal represents the square of the norm of the transformed vector . Since the vector is of unit length, the component is therefore the square of the stretch along direction . Then the following can be established where is the stretch along the direction  . In the case of the diagonal form for the tensor this stretch coincides with the corresponding principal stretch or eigenvalue of .  For the components outside the main diagonal it is obtained instead where is the angle between and . By using , the following result can be obtained such a result shows the the generic component depends on stretches along and but, mainly, on the angle between the trasformed basis vectors and . By introducing the angle that is the angle given by the difference between the angles formed by and before and after the transformation, can be rewritten as follows and then The quantity is called shear angle or shear . When is zero, i.e. when the angle between and directions does not change, the component is zero.        Green-Lagrange strain tensor  A standard strain measure is based on the difference between the squared lengths in the current configuration and in the reference one. In particular what follows can be obtained The following tensor is so defined The name of the tensor is Green-Lagrange strain tensor (the use of the factor will become clear in the following). is symmetric but is not positive definite.   The tensor is positive definite as it is related to the square of the scale factor with which the length of the generic segment is modified. In the field of admissible deformations, this scale factor, as for areas and volumes, cannot cancel. With the Green-Lagrange tensor a measure of the elongation of the segment with respect to its initial size is introduced. This makes possible negative values of the Green-Lagrange measure when the segment shortens or null values when the segment length does not change.      strain tensors and displacement gradient  The mechanical models that will be discussed during the course are typically formulated using the displacement field as a kinematic entity which, remember, is defined as . Hence . Therefore the Green-Lagrange tensor can be expressed as Therefore, with respect to the displacement gradient, the Green-Lagrange strain tensor becomes   Also can be reformulated as follows from which    "
},
{
  "id": "measures_sec_strain_chap_en-2-3",
  "level": "2",
  "url": "measures_sec_strain_chap_en.html#measures_sec_strain_chap_en-2-3",
  "type": "Remark",
  "number": "1.8.1",
  "title": "",
  "body": " One might think that, known , the simple operation allows the evaluation of . The operation is possible but not trivial because it requires the evaluation of the eigenvalues and eigenvectors of . For this reason the tensor or other derived quantities are used directly in strain measurements.   In order to illustrate the procedure described above, however, consider the following deformation gradient Starting from this expression, the following MATLAB instructions allow you to evaluate the eigenvectors and eigenvalues of .     F = [4.4623 -3.2249 -0.4874; 2.9623 1.7249 -1.9874; -1.7500 -1.0607 5.2500]; U2 = transpose(F)*F; [u, D2] = eig(U2)     The following instructions instead, evaluating the principal stretches as and the main directions by extracting them from the columns of the eigenvectors matrix returned by MATLAB , allow to calulate tensor and tensor by using It is also possible to calculate by using      u1 = u(:,1); u2 = u(:,2); u3 = u(:,3); lam1 = sqrt(D2(1,1)); lam2 = sqrt(D2(2,2)); lam3 = sqrt(D2(3,3)); U = lam1*u1*transpose(u1)+lam2*u2*transpose(u2)+lam3*u3*transpose(u3) R = F*inv(U) V = F*transpose(R)      "
},
{
  "id": "measures_sec_strain_chap_en-2-5",
  "level": "2",
  "url": "measures_sec_strain_chap_en.html#measures_sec_strain_chap_en-2-5",
  "type": "Remark",
  "number": "1.8.4",
  "title": "",
  "body": " Between the two Cauchy-Green tensors, is most used in solid mechanics because it acts on the position of the point expressed in the reference configuration.  "
},
{
  "id": "measures_sec_strain_chap_en-2-6",
  "level": "2",
  "url": "measures_sec_strain_chap_en.html#measures_sec_strain_chap_en-2-6",
  "type": "Insight",
  "number": "1.8.5",
  "title": "meaning of the components of <span class=\"process-math\">\\(\\tens{C}\\)<\/span>.",
  "body": " meaning of the components of  Let's apply to the gradient of the transformation what has been said in about the meaning of the matrices associated with linear transformations. That is, we express the matrix associated with as follows where the transformed basis vectors appear in the columns of . We then evaluate the matrix associated with the tensor on the basis of the definition  which gives This result allows us to establish the following for the coefficients of   For the generic coefficient of placed on the main diagonal, , we have It can therefore be seen that the generic component on the main diagonal represents the square of the norm of the transformed vector . Since the vector is of unit length, the component is therefore the square of the stretch along direction . Then the following can be established where is the stretch along the direction  . In the case of the diagonal form for the tensor this stretch coincides with the corresponding principal stretch or eigenvalue of .  For the components outside the main diagonal it is obtained instead where is the angle between and . By using , the following result can be obtained such a result shows the the generic component depends on stretches along and but, mainly, on the angle between the trasformed basis vectors and . By introducing the angle that is the angle given by the difference between the angles formed by and before and after the transformation, can be rewritten as follows and then The quantity is called shear angle or shear . When is zero, i.e. when the angle between and directions does not change, the component is zero.    "
},
{
  "id": "measures_sec_strain_chap_en-3-3",
  "level": "2",
  "url": "measures_sec_strain_chap_en.html#measures_sec_strain_chap_en-3-3",
  "type": "Remark",
  "number": "1.8.6",
  "title": "",
  "body": " The tensor is positive definite as it is related to the square of the scale factor with which the length of the generic segment is modified. In the field of admissible deformations, this scale factor, as for areas and volumes, cannot cancel. With the Green-Lagrange tensor a measure of the elongation of the segment with respect to its initial size is introduced. This makes possible negative values of the Green-Lagrange measure when the segment shortens or null values when the segment length does not change.  "
},
{
  "id": "infinitesimal_sec_strain_chap_en",
  "level": "1",
  "url": "infinitesimal_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.9",
  "title": "the infinitesimal strain tensor",
  "body": " the infinitesimal strain tensor  It often happens in applications that the norm of the displacement gradient is small. In these cases the contribution appearing in the expressions of the tensor and tensor becomes negligible. Therefore the Green-Lagrange strain tensor will be coincident with the infinitesimal strain tensor  , i.e. while Cauchy tensor can be written as     infinitesimal motions  Let us start by recalling the explicit expression of the components of the displacement  and of its gradient  The following decomposition of  true for all tensor, allows to insert in a more general framework the tensor of the infinitesimal strain previously introduced and the role played by in the description of the infinitesimal motions. By infinitesimal motions we will therefore mean the motions characterized by the condition .  The symmetric part, , whose matrix expression is gives the infinitesimal strain tensor whose components are denoted as follows   The skew part, , whose matrix expression is represents the infinitesimal rotation tensor .  For a generic infinitesimal motion we have   For a rigid infinitesimal motion we have       meaning of the components of the infinitesimal strain tensor  In order to identify the meaning of the components of the tensor it is better to start with the expression of tensor with respect to the gradient of the displacement, that is from which, making the calculations, for example with the following MATLAB instructions    syms u1_X1 u1_X2 u1_X3 u2_X1 u2_X2 u2_X3 u3_X1 u3_X2 u3_X3 Du = [u1_X1 u1_X2 u1_X3;u2_X1 u2_X2 u2_X3; u3_X1 u3_X2 u3_X3] C = diag([1 1 1]) + Du + transpose(Du) + transpose(Du)*Du C(1,1) C(1,2)    the expressions of a component on the main diagonal and one outside can be obtained, i.e. For the diagonal component, using the result obtained for the diagonal component, it is possible to write From which A similar result is valid for the other components of belonging to the main diagonal.  For the off-diagonal component, by using , it can be obtained and then     infinitesimal rotations  To explain the denomination \"infinitesimal rotation\" that has been given to the skew part of the gradient of the displacement, it is convenient to discuss a transformation characterized only by a simple rotation. To this end, consider a rotation around the axis. The significant part of the transformation can be directly discussed in the plan as follows The displacement field is With this information it is possible to calculate the deformation gradient which, in the specific case, is composed only of the rotation where, as already discussed before, Moreover and then Result that highlights the decomposition of the gradient of the displacement with decomposition that, for now, is generic because no reference to infinitesimal displacements has been introduced.  To assume infinitesimal displacements implies also very small values for the angle , , i.e. and . From which Therefore in the case of infinitesimal displacements expression can be rewritten as follows      Above in the figure the obtained result is emphasized showing the difference between the vector obtained by applying  and the vector obtained applying the approximation of given by      Given a skew tensor characterized by the following matrix form it easy to verify that to apply to a vector  is equivalent to calculate the following vector or cross product where the components of are related to the components of as follows On the contrary, knowing , can be evaluated as follows   Eventually the following relationship can be stated where is the axial vector associated to the skew tensor . The adjective axial is used for the vector because it represents the rotation axis of the infinitesimal rotation.   "
},
{
  "id": "infinitesimal_sec_strain_chap_en-4",
  "level": "2",
  "url": "infinitesimal_sec_strain_chap_en.html#infinitesimal_sec_strain_chap_en-4",
  "type": "Insight",
  "number": "1.9.1",
  "title": "meaning of the components of the infinitesimal strain tensor.",
  "body": " meaning of the components of the infinitesimal strain tensor  In order to identify the meaning of the components of the tensor it is better to start with the expression of tensor with respect to the gradient of the displacement, that is from which, making the calculations, for example with the following MATLAB instructions    syms u1_X1 u1_X2 u1_X3 u2_X1 u2_X2 u2_X3 u3_X1 u3_X2 u3_X3 Du = [u1_X1 u1_X2 u1_X3;u2_X1 u2_X2 u2_X3; u3_X1 u3_X2 u3_X3] C = diag([1 1 1]) + Du + transpose(Du) + transpose(Du)*Du C(1,1) C(1,2)    the expressions of a component on the main diagonal and one outside can be obtained, i.e. For the diagonal component, using the result obtained for the diagonal component, it is possible to write From which A similar result is valid for the other components of belonging to the main diagonal.  For the off-diagonal component, by using , it can be obtained and then   "
},
{
  "id": "small_rotations_insight",
  "level": "2",
  "url": "infinitesimal_sec_strain_chap_en.html#small_rotations_insight",
  "type": "Insight",
  "number": "1.9.3",
  "title": "infinitesimal rotations.",
  "body": " infinitesimal rotations  To explain the denomination \"infinitesimal rotation\" that has been given to the skew part of the gradient of the displacement, it is convenient to discuss a transformation characterized only by a simple rotation. To this end, consider a rotation around the axis. The significant part of the transformation can be directly discussed in the plan as follows The displacement field is With this information it is possible to calculate the deformation gradient which, in the specific case, is composed only of the rotation where, as already discussed before, Moreover and then Result that highlights the decomposition of the gradient of the displacement with decomposition that, for now, is generic because no reference to infinitesimal displacements has been introduced.  To assume infinitesimal displacements implies also very small values for the angle , , i.e. and . From which Therefore in the case of infinitesimal displacements expression can be rewritten as follows      Above in the figure the obtained result is emphasized showing the difference between the vector obtained by applying  and the vector obtained applying the approximation of given by    "
},
{
  "id": "skew_tensor_insight",
  "level": "2",
  "url": "infinitesimal_sec_strain_chap_en.html#skew_tensor_insight",
  "type": "Insight",
  "number": "1.9.5",
  "title": "",
  "body": " Given a skew tensor characterized by the following matrix form it easy to verify that to apply to a vector  is equivalent to calculate the following vector or cross product where the components of are related to the components of as follows On the contrary, knowing , can be evaluated as follows   Eventually the following relationship can be stated where is the axial vector associated to the skew tensor . The adjective axial is used for the vector because it represents the rotation axis of the infinitesimal rotation.  "
},
{
  "id": "exercises_sec_strain_chap_en",
  "level": "1",
  "url": "exercises_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.10",
  "title": "exercises",
  "body": " exercises     Self assessment quiz about the topics covered in the chapter.      Consider the following two-dimensional transformation   Is the transformation linear?  Calculate the components of the deformation gradient, its determinant and its inverse.  Study the transformation over a unit square defined through the following points        Consider the following transformation   Is the transformation linear?  Calculate the components of the deformation gradient, its determinant and its inverse.  Study the transformation over a unit cube defined through the following points         Apply to the same unit cube of the previous problem the following transformations evaluating for each:  the configuration of the cube;  the components of the deformation gradient;  the ammissibility of the transformation.       Consider the following transformation     Calculate the deformation gradient and its determinant.  Is the transformation admissible for any subset of the Euclidean space?  Calculate the displacement field .       Consider the following displacement field Calculate the deformation gradient and its inverse; verify that the trasnformation is isochoric.     Consider the following transformation being , and generic constants.    Calculate tensors and .  Assuming and evaluate for which value of the strain is zero.       Suppose the following value for the deformation gradient evaluated in a point of a body Calculate tensor and right stretch tensor .     The following transformation is assigned with , and generic costants.    Study the deformation of a unit cube defined by the following points    Calculate tensors , and .  The stretches relative to the reference axes.  The stretch relative to the direction going from point to point . Hint : consider equation .       The following transformation is assigned where is a generic costant.    Study the deformation of a unit cube defined by the following points    Calculate the components of tensor .  Calculate the shear angle relative to plane and plane.  Calculate the principal stretches ( ) e the principal directions of tensor . Hint : .       Consider the following displacement field   Calculate the infinitesimal strain tensor .  Calculate the principal strains ( ) and the principal directions of .  Calculate the principal stretches ( ) and principal directions fo tensor .  Compare and oon the basis of equation .  Compare the principal directions of and the principal directions of .  Repeat the previous evaluations with respect to the same displacement field but amplified with a factor of : what considerations can be drawn?     "
},
{
  "id": "answers_sec_strain_chap_en",
  "level": "1",
  "url": "answers_sec_strain_chap_en.html",
  "type": "Section",
  "number": "1.11",
  "title": "answers to selected exercises",
  "body": " answers to selected exercises    Partial answer to exercise reported in .   % third question T = @(X) [4-2*X(1)-X(2); 2+3\/2*X(1)-X(2)\/2]; Square_0 = [0 1 1 0 0; 0 0 1 1 0]; Square=[T(Square_0(:,1)) T(Square_0(:,2)) T(Square_0(:,3)) ... T(Square_0(:,4)) T(Square_0(:,5))]; hold on plot(Square_0(1,:), Square_0(2,:), 'k-', \"LineWidth\", 4) plot(Square(1,:), Square(2,:), 'r-', \"LineWidth\", 2) ylim([0 4]) pbaspect([1 1 1])           Answer to exercise reported in .   X = sym('X', [3 1]); u = sym('u', [3 1]); u(1) = 3.5*10^(-3)*X(1) + 2.0*10^(-3)*X(2); u(2) = 1.0*10^(-3)*X(1) - 0.5*10^(-3)*X(2); u(3) = 0; Du1 = gradient(u(1), X); Du2 = gradient(u(2), X); Du3 = gradient(u(3), X); Du = [transpose(Du1); transpose(Du2); transpose(Du3)]; % first question eps = (Du + transpose(Du))\/2 % second question [epsV,epsD] = eig(eps); eps1 = eval(epsD(1,1)); eps2 = eval(epsD(2,2)); eps3 = eval(epsD(3,3)); % third question I = diag([1 1 1]); C = I + Du + transpose(Du) + transpose(Du)*Du; [cV,cD] = eig(C); lam1 = eval(sqrt(cD(1,1))); lam2 = eval(sqrt(cD(2,2))); lam3 = eval(sqrt(cD(3,3))); % fourth question (compare eigenvalues) % check that eps1 is almost equal to (lam1 - 1) % check that eps2 is almost equal to (lam2 - 1) % check that eps3 is almost equal to (lam3 - 1) % fifth question (compare eigenvectors) eval(epsV) eval(cV)      "
},
{
  "id": "answers_sec_strain_chap_en-2-1-2",
  "level": "2",
  "url": "answers_sec_strain_chap_en.html#answers_sec_strain_chap_en-2-1-2",
  "type": "Listing",
  "number": "1.11.1",
  "title": "",
  "body": "  % third question T = @(X) [4-2*X(1)-X(2); 2+3\/2*X(1)-X(2)\/2]; Square_0 = [0 1 1 0 0; 0 0 1 1 0]; Square=[T(Square_0(:,1)) T(Square_0(:,2)) T(Square_0(:,3)) ... T(Square_0(:,4)) T(Square_0(:,5))]; hold on plot(Square_0(1,:), Square_0(2,:), 'k-', \"LineWidth\", 4) plot(Square(1,:), Square(2,:), 'r-', \"LineWidth\", 2) ylim([0 4]) pbaspect([1 1 1])   "
},
{
  "id": "answers_sec_strain_chap_en-2-1-3",
  "level": "2",
  "url": "answers_sec_strain_chap_en.html#answers_sec_strain_chap_en-2-1-3",
  "type": "Figure",
  "number": "1.11.2",
  "title": "",
  "body": "  "
},
{
  "id": "answers_sec_strain_chap_en-3-1-2",
  "level": "2",
  "url": "answers_sec_strain_chap_en.html#answers_sec_strain_chap_en-3-1-2",
  "type": "Listing",
  "number": "1.11.3",
  "title": "",
  "body": "  X = sym('X', [3 1]); u = sym('u', [3 1]); u(1) = 3.5*10^(-3)*X(1) + 2.0*10^(-3)*X(2); u(2) = 1.0*10^(-3)*X(1) - 0.5*10^(-3)*X(2); u(3) = 0; Du1 = gradient(u(1), X); Du2 = gradient(u(2), X); Du3 = gradient(u(3), X); Du = [transpose(Du1); transpose(Du2); transpose(Du3)]; % first question eps = (Du + transpose(Du))\/2 % second question [epsV,epsD] = eig(eps); eps1 = eval(epsD(1,1)); eps2 = eval(epsD(2,2)); eps3 = eval(epsD(3,3)); % third question I = diag([1 1 1]); C = I + Du + transpose(Du) + transpose(Du)*Du; [cV,cD] = eig(C); lam1 = eval(sqrt(cD(1,1))); lam2 = eval(sqrt(cD(2,2))); lam3 = eval(sqrt(cD(3,3))); % fourth question (compare eigenvalues) % check that eps1 is almost equal to (lam1 - 1) % check that eps2 is almost equal to (lam2 - 1) % check that eps3 is almost equal to (lam3 - 1) % fifth question (compare eigenvectors) eval(epsV) eval(cV)   "
},
{
  "id": "refs_strain_chap_en",
  "level": "1",
  "url": "refs_strain_chap_en.html",
  "type": "References",
  "number": "1.12",
  "title": "references and suggested readings",
  "body": " references and suggested readings  Grant Sanderson, Essence of Linear Algebra .  Morton E. Gurtin, An introduction to continuum mechanics . Accademic Press, 1981. pp. 41-48, 54-56.  Oscar Gonzalez and Andrew M. Stuart, A first course in continuum mechanics . Cambridge University Press, 2008. pp. 112-128.  Gerhard A. Holzapfel, Nonlinear solid mechanics . John Wiley & Sons Ltd, Chichester, 2000. pp. 55-61, 70-78, 85-91.  "
},
{
  "id": "basics_sec_stress_chap_en",
  "level": "1",
  "url": "basics_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.1",
  "title": "the continuity hypothesis",
  "body": " the continuity hypothesis  At the basis of the continuum mechanics there is the idea of studying different physical phenomena without a precise knowledge of the internal micro-structure of the matter by adopting the so-called macroscopic point of view. In other words, all the used quantities represent an average of all the processes taking place at atomic or molecular scale.  The macroscopic systems thus defined can be effectively described using the continuous approach which assumes, for the body under examination, a continuous distribution of matter in space and time. The body is always seen as an assembly of single particles or points which have not to be confused with the point mass systems of Newtonian mechanics or the particle systems of atomic theory. Typically the point of a continuous body inside it hides an internal structure (an accumulation of molecules or atoms or an heterogeneous composition of various constituents) of sufficiently small dimensions if compared with the scale of the problem under consideration. The behavior of the point or particle is a consequence of the collective behavior of all that inside constitutes the point of the continuum.     The continuity hypothesis has important consequences.  The possibility of making a one-to-one association between the points of the body and the points of the Euclidean space region occupied by the body.  The possibility of dividing a body into smaller and smaller volume regions and of always finding the same physical characteristics as the volume decreases.  The analyticity of the functions used to describe the physical phenomenon under examination allows to formulate the fundamental laws of mechanics in terms of differential equations.  The macroscopic approach at the basis of continuum mechanics can be used in the study of solids, fluids and gases.      geometric description of the bodies  The continuity hypothesis allows to identify the body with an open subset of the Euclidean space. As already discussed in the chapter dedicated to kinematics, the body will assume different configurations. In the following we will refer to a generic configuration assumed by the body during its motion. On this configuration it is possible to calculate, for example, the volume occupied by the body      mass  Mass is a property of matter that quantifies its resistance to acceleration. According to the continuity hypothesis, the mass is assumed to be distributed continuously over the whole body. In particular we assume the existence of a scalar field denoted mass density such that A formal definition of the mass can be made as follows. Let be a point in and let a family of volumes such that if . Then If this limit exists and is positive in every point of the body then the hypothesis of continuity is verified. In addition, the limit must always be the same for any volume family having the described property.   The modern idea of the limit of a function dates back to Bolzano which, in 1817, introduced the basics of the epsilon-delta technique to define continuous functions. However, his work was not known during his lifetime. The French mathematician Augustin-Louis Cauchy, in his book of the Cours d'analyse of 1821, discussed variable quantities, infinitesimals and limits and defined the continuity of establishing that a infinitesimal variation in necessarily produces an infinitesimal variation in .  Cauchy was the first to formulate continuum mechanics in the 19th century.      forces  The mechanical interaction between parts of a body or body with the surrounding environment is described by means of forces. Two types of forces are considered: volume forces, which act within the body, and surface forces, which are exerted through a surface. For the hypothesis of continuity, as done for the mass, also the forces are postulated through the existence of vector fields that allow to calculate the resultant of all the forces acting on the body and the resultant torque, with respect to the origin, of the applied forces where is the boundary of and therefore it is a surface, and denote two vector fields which will be better described below and which represent, respectively, a bulk force density or, simply, the bulk force and a surface force density that will be called traction .      bulk force  A bulk force does not arise due to a physical contact between bodies but is the result of remote action, for example the gravitational force. We therefore assume the existence of a vector field depending on the position of the point belonging to . Similarly to what has been done for mass density, it is possible to give a formal definition of : where is the force acting on volume .    traction  Traction comes from physical contact between bodies. Contact can take place through , the boundary of the body, and in this case there will be an external traction. Or, as we will discuss more extensively in the following sections, it can take place through an ideal surface passing inside the body, in this case we will speak of an internal traction. We therefore introduce a formal definition of traction which will allow us to specify the dependence of this vector field.  Given a point of the body placed inside or on the border of , and given a family of surfaces passing through this point such that if , we assume the existence of a vector field defined as follows where is a surface force acting on the area . is called traction vector , or simply traction, depending on the position and on the family of surfaces passing through .  A suitable definition of this dependence, elaborated by Cauchy, leads to the notion of Cauchy stress tensor .    "
},
{
  "id": "macro_fig",
  "level": "2",
  "url": "basics_sec_stress_chap_en.html#macro_fig",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "basics_sec_stress_chap_en-7-3",
  "level": "2",
  "url": "basics_sec_stress_chap_en.html#basics_sec_stress_chap_en-7-3",
  "type": "Note",
  "number": "2.1.2",
  "title": "",
  "body": " The modern idea of the limit of a function dates back to Bolzano which, in 1817, introduced the basics of the epsilon-delta technique to define continuous functions. However, his work was not known during his lifetime. The French mathematician Augustin-Louis Cauchy, in his book of the Cours d'analyse of 1821, discussed variable quantities, infinitesimals and limits and defined the continuity of establishing that a infinitesimal variation in necessarily produces an infinitesimal variation in .  Cauchy was the first to formulate continuum mechanics in the 19th century.  "
},
{
  "id": "continuo_forze_fig",
  "level": "2",
  "url": "basics_sec_stress_chap_en.html#continuo_forze_fig",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "equilibrium_sec_stress_chap_en",
  "level": "1",
  "url": "equilibrium_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.2",
  "title": "equilibrium equations",
  "body": " equilibrium equations  Given the resultants defined by the expressions and , the condition of static equilibrium for a continuous body is expressed by the following equations   These conditions, for the assumption of continuity, do not apply only to the body under investigation but also to any subset extracted from the main body.   This separation, typical of solid mechanics, is performed using imaginary surfaces used to cut the starting body. In particular, see the figure above, for the two body parts thus obtained the following pairs of equations can be written and where is the action exerted on by the other part of the domain and, on the contrary, is the action exerted on by the other resulting part .  "
},
{
  "id": "continuo_in_due_fig",
  "level": "2",
  "url": "equilibrium_sec_stress_chap_en.html#continuo_in_due_fig",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "stress_sec_stress_chap_en",
  "level": "1",
  "url": "stress_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.3",
  "title": "Cauchy stress tensor tensor",
  "body": " Cauchy stress tensor tensor    Cauchy's postulate  In previous sections, the traction was formulated with a very generic dependence on the surface passing through the point . On the basis of Cauchy's postulate, fundamental for all subsequent developments, it is assumed instead where represents the normal direction to the surface identified by a vector of unit length. Therefore the absolute independence of the traction vector from other factors, such as the curvature of the surface passing through the point , is postulated. The figure below shows some surfaces passing through the point and sharing in this point the very same tangent to the surface and therefore the same normal direction.        Cauchy stress Theorem  A series of results are presented which, taken together, constitute the Cauchy stress tensor Theorem , the statement of which will be given at the end of the section.   equilibrium of Cauchy's tetrahedron       The application of Eq. assuming as subdomain the Cauchy tetrahedron illustrated in the previous video provides It has already been observed that when the volume measurement tends to zero much faster than the surface measurement . Moreover , then previous equation becomes Taking into account the geometric relationship of face with each face , and , it can be obtained what follows and finally     principle of action and reaction  If in Eq.  is assumed, the following raltionship is obtained The very same condition is true for and .    the tensor  By using Eqs. and the following result is obtained relationship showing how traction is linked to the generic normal by means of a linear transformation , see video on linear transformations in , represented by a second order tensor. Then  prende il nome di tensore della tensione di Cauchy .  The matrix form of previous relationship is where the 9 components of the stress tensor appear explicitly. These components can be visulized as follows,     i.e. each column of the matrix associated to the stress tensor, collects the components of one of the three tractions relative to the planes identified by coordinate axes.    differential form of equilibrium equations       Consider the cancellation condition of the resultant of the applied forces, equation . This equation, thanks to the , can be reformulated as follows By the divergence theorem the surface integral can be transformed thus obtaining For the continuity hypothesis, this equation must be satisfied for any subdomain of the body under examination, therefore the following differential equation is obtained to be satisfied in every point of the body . This vector equation is called indefinite equation of equilibrium or, referring to the three scalar equations relative to the vector components, indefinite equations of equilibrium .    symmetry of the tensor  The equilibrium condition regarding the resultant torque, equation , allows to establish the symmetry of the stress tensor. However, its explicit derivation is not presented here. The interested reader can find more details in the reference given at the end of the chapter.    A.-L. Cauchy   Given a body subject to some applied loads, a necessary and sufficient condition for the body to be in equilibrium (satisfaction of Eqs. and ) is that there is a tensor field such that        observations about indefinite equations of equilibrium    The equations do not completely determine the Cauchy stress tensor field for a body in equilibrium. In particular, there are 3 differential equations to calculate, for the symmetry of the tensor, the unknown components of . As will be seen in the following, this drawback will be solved by characterizing the constitutive behavior of the material of which the body is composed. Behavior to be reconstructed experimentally and referring to the average of the quantities involved. Remember that the macroscopic approach is not based on a precise description of the internal micro-structure of matter.  The boundary conditions to be associated with the differential equations will be determined by relating the unknown stress to the tractions, , assigned on the contour of the body . This relationship is established through the which provides These equations constitute the boundary conditions of the natural type for the differential problem .  At the basis of the derivation of the equations there is the hypothesis of continuity of the vector field and the hypothesis of differentiability of the tensor field . Hypotheses that allow, as seen, to pass from equations in integral form to equations in local form.      "
},
{
  "id": "surfaces_through_x_fig",
  "level": "2",
  "url": "stress_sec_stress_chap_en.html#surfaces_through_x_fig",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "stress_components_fig",
  "level": "2",
  "url": "stress_sec_stress_chap_en.html#stress_components_fig",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": "  "
},
{
  "id": "stress_sec_stress_chap_en-3-8",
  "level": "2",
  "url": "stress_sec_stress_chap_en.html#stress_sec_stress_chap_en-3-8",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": " A.-L. Cauchy   Given a body subject to some applied loads, a necessary and sufficient condition for the body to be in equilibrium (satisfaction of Eqs. and ) is that there is a tensor field such that      "
},
{
  "id": "stress_sec_stress_chap_en-3-9",
  "level": "2",
  "url": "stress_sec_stress_chap_en.html#stress_sec_stress_chap_en-3-9",
  "type": "Remark",
  "number": "2.3.4",
  "title": "observations about indefinite equations of equilibrium.",
  "body": " observations about indefinite equations of equilibrium    The equations do not completely determine the Cauchy stress tensor field for a body in equilibrium. In particular, there are 3 differential equations to calculate, for the symmetry of the tensor, the unknown components of . As will be seen in the following, this drawback will be solved by characterizing the constitutive behavior of the material of which the body is composed. Behavior to be reconstructed experimentally and referring to the average of the quantities involved. Remember that the macroscopic approach is not based on a precise description of the internal micro-structure of matter.  The boundary conditions to be associated with the differential equations will be determined by relating the unknown stress to the tractions, , assigned on the contour of the body . This relationship is established through the which provides These equations constitute the boundary conditions of the natural type for the differential problem .  At the basis of the derivation of the equations there is the hypothesis of continuity of the vector field and the hypothesis of differentiability of the tensor field . Hypotheses that allow, as seen, to pass from equations in integral form to equations in local form.    "
},
{
  "id": "stress_analysis_sec_stress_chap_en",
  "level": "1",
  "url": "stress_analysis_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.4",
  "title": "analisys of states of stress",
  "body": " analisys of states of stress    convention and meaning of the components of stress tensor  Let us consider again the figure already reported in the previous section     where the three reference planes are shown, i.e. the planes having the axes , and as outgoing normal. The components of the stress tensor refer to these planes, which are considered positive , and the figure shows these components according to the directions that are assumed to be positive. If we imagine of observing a cube, as the figure suggests, the hidden faces of the cube have the opposite directions , and as positive outgoing normal. On these planes, which are considered negative , the same stress components but of opposite sign will act. For example, the traction will act on the plane having as normal.  Consider the traction acting on the position identified by , which can also be calculated as The scalar product between this and the normal to which it refers provides which represents, see also the figure, the normal componente of traction . By calculating the scalar product between and direction  the tangential component of traction with respect direction 2 is obtained. Similarly represents the tangential component of traction with respect to direction 3.  Similar assessments can be made for the other tractions and . A summary of the meaning of the components of the stress tensor is as follows.  The components with repeated indices such as are the normal components of the stress tensor. If the sign is positive they are traction components, if it is negative they are compression components.  The components with mixed indices (simmetry always applies) constitute the tangential components of the tensor. The sign of the tangential components follows the convention indicated in the figure but, unlike the normal components, it has no particular physical meaning since the type of load does not change when the sign changes.  For each component of the tensor the second index refers to the plane's normal on which the traction acts and the first index refers to the component of the traction.    What has been discussed for the tensor components also applies to a generic normal . As established by the Cauchy tension theorem we have From which the normal component of traction can be calculated, i.e. and also the tangential component relative to a direction orthogonal to  To denote the two components, the convention, often adopted in the engineering field, which indicates the normal and tangential components with the symbols and respectively, was used. The vector , like , is a vector of unit length.        principal stresses and principal directions  What is discussed in concerning the main directions of the tensor is also largely applicable to the stress tensor . Both tensors are symmetric and the only fundamental distinction that needs to be made is that, unlike , is not defined positive . Therefore in this case the eigenvalues, which now identify the principal stress of the tensor, can also be zero or negative. However the symmetry of allows the writing of the spectral decomposition of the tensor where the principal directions  , , , constituting an orthonormal vector triad, are the eigenvectors of . , , are the principal stresses.  In the case of main directions aligned with the reference system the tensor assumes the diagonal form which identifies a state of stress described only by normal components. The sign is positive in the case of a tensile component and it is negative in the case of a compressive component. This situation is illustrated in the following figure.     If, on the other hand, the main directions are not aligned with the reference system, the tensor is characterized by the presence of tangential components.  Given a tensor the identification of the principal stresses and directions requires the calculation of the eigenvalues and eigenvectors to be carried out, as will be shown later, via MATLAB .   stress tensor invariants  Also in this case, as already discussed in the chapter dedicated to kinematics, the solution of the eigenvalue problem requires the solution of a cubic equation which can be expressed as follows where the invariants of the tensor , that is the quantities that are independent from the reference system used to represent the tensor, appear. The invariants of can be calculated with the following pairs of expressions, where each pair contains the formula to be used in the case where the tensor is expressed with respect to the principal directions and the formula to be used in the generic case.   First invariant  where the trace of the tensor, i.e the sum of the coefficients belonging to the main diagonal, is used.   Second invariant     Third invariant          basic states of stress   spheric or hydrostatic state  The state of stress which always maintains the same representation with respect to any reference system is the state characterized by principal stresses assuming the same value, that is . In this case, using Eq. , the tensor takes the following form that is whose matrix form is      Assuming positive there is an equal traction in all directions, hence the adjective spherical . On the other hand, if is negative, there is a state of compression equal in all directions, just as it happens for a body immersed in a fluid. Hence the adjective hydrostatic .    state of pure traction or compression  The following state of stress characterized by principal stresses equal to , , and principal directions identified by the axis and the plane defined by the other two axes of the triad, it is usually labeled, based on the sign of , state of pure traction or pure compression .     The adjective pure must not be misleading as it only applies to the arrangement of principal directions just described. In fact, it is sufficient to assume a different arrangement for the principal directions, for example obtained with a generic rotation around the axis , to have with From which the following matrix form of the given stress tensor   Also the following stress tensors constitute states of pure traction or compression. and     state of pure shear  In order to discuss the state of pure shear it is necessary to leave the point of view given by the main directions and speak directly of a stress state characterized by the following matrix form In a such case and always with respect to the given reference triad , , , it is possible to talk of a state of pure shear because the only non zero component of the tensor is .     The calculation of principal directions and principal stresses would show that we are in a different case from the previous ones. In fact, the calculation of the eigenvalues and eigenvectors can be carried out with the following MATLAB instructions    syms t; s = [0 t 0; t 0 0; 0 0 0]; [V, D]=eig(s)    gives and Then the principal directions are rotated of around the axis (the normalized eigenvectors are reported even if, in the case of symbolic calculation, MATLAB does not provide normalized eigenvectors).  Thus, as discussed, it would have been possible to present the case of pure shear as the stress state that occurs when the reference system is obtained by rotating the triad of the main directions of around the third axis and the principal stresses are defined by   Also the following stress states and are states of pure shear and all the previous discussion also applies, with due clarifications, to them.    "
},
{
  "id": "stress_analysis_sec_stress_chap_en-2-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-2-3",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "normal_shear_fig",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#normal_shear_fig",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_en-3-4",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-3-4",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_en-3-7",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-3-7",
  "type": "Insight",
  "number": "2.4.4",
  "title": "stress tensor invariants.",
  "body": " stress tensor invariants  Also in this case, as already discussed in the chapter dedicated to kinematics, the solution of the eigenvalue problem requires the solution of a cubic equation which can be expressed as follows where the invariants of the tensor , that is the quantities that are independent from the reference system used to represent the tensor, appear. The invariants of can be calculated with the following pairs of expressions, where each pair contains the formula to be used in the case where the tensor is expressed with respect to the principal directions and the formula to be used in the generic case.   First invariant  where the trace of the tensor, i.e the sum of the coefficients belonging to the main diagonal, is used.   Second invariant     Third invariant      "
},
{
  "id": "stress_analysis_sec_stress_chap_en-4-2-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-4-2-3",
  "type": "Figure",
  "number": "2.4.5",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_en-4-3-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-4-3-3",
  "type": "Figure",
  "number": "2.4.6",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_en-4-4-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-4-4-3",
  "type": "Figure",
  "number": "2.4.7",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_en-4-4-5",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_en.html#stress_analysis_sec_stress_chap_en-4-4-5",
  "type": "Listing",
  "number": "2.4.8",
  "title": "",
  "body": "  syms t; s = [0 t 0; t 0 0; 0 0 0]; [V, D]=eig(s)   "
},
{
  "id": "plv_sec_stress_chap_en",
  "level": "1",
  "url": "plv_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.5",
  "title": "principle of virtual work",
  "body": " principle of virtual work  Starting from equilibrium equations it is possible to reach the definition of the work deriving from the surrounding environment, external work , and the work carried out by the forces inside the body, internal work . We obtain a principle stating the equality of these two works known as the Principle of virtual work . This result is obtained by reformulating the differential equations in an integral format. An operation that can be simply interpreted as an alternative reformulation of the starting differential equations but which also leads to a result that has the important mechanical interpretation mentioned above.    from the differential formulation to the integral formulation  Let us evaluate the scalar product between Eq. and a generic vector field and let us integrate the result over the assigned body (for continuity, this operation could be carried out on any subset of ). Because Eq. must to be satisfied in each of , then where is a continuous and differentiable vector field defined on the body . As already shown in the previous video about divergence it is possible to write from which    important remark  In the previous steps the derivatives are transferred from tensor to vector . The derivatives on are made with respect to coordinates , and related to the current configuration, therefore in this context the gradient of the displacement is expressed by expression to be not confused with similar Eq. where the derivatives are performed with respect to the position coordinates, , , , of the reference configuration.   Now the starting integral equation can be rewritten as follows The first integral, by applying the divergence theorem and the Cauchy stress tensor theorem, can be written also as Then Eq. becomes Using decompostion of  and symmetry condition on , the following result is obtained Finally the following expression of the integral form of the indefinite equations of equilibrium can be formulated:      mechanical interpretation    The vector field can be interpreted both as a displacement field that the body actually undergoes under the action of the assigned loads and as a generic variation of the actual displacement field or as a virtual displacement field.  The first member of the equality represents the work done by the surrounding environment on the body , that is the external work.  The second member of the equality contains the internal work, that is the work carried out by the stress tensor .  Without the need to make any preliminary assumptions, we arrive at the definition of the kinematic counterpart on which the stress tensor does work. Thus the meaning of the symmetric part of the gradient of the displacement is widened because it comprises, as already shown in the chapter about kinematics, also the definition of the infinitesimal strain tensor.  A formal statement of the result obtained is as follows: \" Given a body, or any subset of a body, satisfying the equilibrium condition with respect to the applied loads, i.e Eq. is satisfied, then also Eq. is valid. This is the Principle of virtual work \". Moreover Eq. is not only a necessary condition but also is sufficient for satisfaction of Eq. , i.e. the statement can be reversed as follows: \" Given a body, or any subset of a body, satisfying the equivalence of the internal and external works, Eq. , then Eq. is satisfied \".  In the case of displacement field coincident with a rigid displacement field , then the condition provides and then the Principle of virtual work redices to This result establishes that the applied loads, if in equilibrium, perform zero work on any rigid motion.  In the dynamic field the vector field is a velocity field. Therefore we will not speak of works but of external power and internal power. Furthermore, the external power will equal the sum of internal power and variation of kinetic energy.     "
},
{
  "id": "plv_sec_stress_chap_en-3-3",
  "level": "2",
  "url": "plv_sec_stress_chap_en.html#plv_sec_stress_chap_en-3-3",
  "type": "Remark",
  "number": "2.5.1",
  "title": "important remark.",
  "body": " important remark  In the previous steps the derivatives are transferred from tensor to vector . The derivatives on are made with respect to coordinates , and related to the current configuration, therefore in this context the gradient of the displacement is expressed by expression to be not confused with similar Eq. where the derivatives are performed with respect to the position coordinates, , , , of the reference configuration.  "
},
{
  "id": "exercises_sec_stress_chap_en",
  "level": "1",
  "url": "exercises_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.6",
  "title": "exercises",
  "body": " exercises     Self assessment quiz about the topics covered in the chapter.      Let and be the tractions relative to two different normals and through point . Prove that only if the stress tensor relative to point is symmetric.     Given the following state of stress calculate the following:  the components of the traction vector relative to a plane through the plane passing through the given point and parallel to the plane ;  the length of and its angle with the normal to the plane;  the components of the stress tensor with respect to a new reference basis , , obatined by rotating the initial reference triad by and angle of around axis .       Consider the stress state defined as follows Calculate the components of the traction vector at the coordinate point belonging to surface with equation . Hint : the direction normal to a surface can be calculated evaluating its gradient.     Consider the tensor and calculate the principal stresses and the principal directions.     For a generic point of a body the following stress components hold For the same point, consider also the two normals   Calculate the tractions and and their normal and tangential components.  Calculate the principal stress and principal directions verifying that is one of the principal directions.       Consider a parallelepiped delimited by the plans , and , and the state of stress defined by with and generic constants. Calculate:  the principal stress and principal directions in point with coordinates ;  the traction vectors relative to the three faces intersecting at point .       Consider the body , subjected to the bulk load and surface forces applied on and defined by Calculate the value of which allows to obtain a zero value of the resultant of applied bulk and surface forces.     Consider the body , subjected to the bulk force , where is the mass density and the gravity acceleratioin. Assuming the following stress tensor field   verify the satisfaction of local equilibrium equations;  calculate the traction relative to the six faces which form the boundary of ;  check the overall balance of the body by calculating the resultant of the forces applied on .      "
},
{
  "id": "answers_sec_stress_chap_en",
  "level": "1",
  "url": "answers_sec_stress_chap_en.html",
  "type": "Section",
  "number": "2.7",
  "title": "answers to some of the proposed exercises",
  "body": " answers to some of the proposed exercises    Anwer to .   sig = @(x) ... [5*x(2)*x(3) 3*x(2)^2 0; 3*x(2)^2 0 -x(1); 0 -x(1) 0]; n = @(x) ... [2*x(1)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 2*x(2)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 1\/sqrt((2*x(1))^2+(2*x(2))^2+1)]; t = sig([1\/2; sqrt(3)\/2; -1])*n([1\/2; sqrt(3)\/2; -1])   It is noted that, as usual, the previous instructions are not the only possible way to obtain the required result.     Answer to .   x = sym('x', [3 1], 'real'); syms rho g real sig = [x(2) x(3) 0; x(3) x(1) 0; 0 0 rho*g*x(3)]; b = [0; 0; -rho*g]; % 1st question divergence(sig(1,1:3), x) + b(1) divergence(sig(2,1:3), x) + b(2) divergence(sig(3,1:3), x) + b(3) % 2nd question t1 = subs(sig, x(1), 1)*[1; 0; 0] t2 = subs(sig, x(2), 1)*[0; 1; 0] t3 = subs(sig, x(3), 1)*[0; 0; 1] t1_ = subs(sig, x(1), 0)*[-1; 0; 0] t2_ = subs(sig, x(2), 0)*[0; -1; 0] t3_ = subs(sig, x(3), 0)*[0; 0; -1] % 3th question T1 = int(int(t1, x(2), 0, 1), x(3), 0, 1) T2 = int(int(t2, x(1), 0, 1), x(3), 0, 1) T3 = int(int(t3, x(1), 0, 1), x(2), 0, 1) T1_ = int(int(t1_, x(2), 0, 1), x(3), 0, 1) T2_ = int(int(t2_, x(1), 0, 1), x(3), 0, 1) T3_ = int(int(t3_, x(1), 0, 1), x(2), 0, 1) B = int(int(int(b, x(1), 0, 1), x(2), 0, 1), x(3), 0, 1) R = T1 + T2 + T3 + T1_ + T2_ + T3_ + B      "
},
{
  "id": "answers_sec_stress_chap_en-2-1-2",
  "level": "2",
  "url": "answers_sec_stress_chap_en.html#answers_sec_stress_chap_en-2-1-2",
  "type": "Listing",
  "number": "2.7.1",
  "title": "",
  "body": "  sig = @(x) ... [5*x(2)*x(3) 3*x(2)^2 0; 3*x(2)^2 0 -x(1); 0 -x(1) 0]; n = @(x) ... [2*x(1)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 2*x(2)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 1\/sqrt((2*x(1))^2+(2*x(2))^2+1)]; t = sig([1\/2; sqrt(3)\/2; -1])*n([1\/2; sqrt(3)\/2; -1])   "
},
{
  "id": "answers_sec_stress_chap_en-3-1-2",
  "level": "2",
  "url": "answers_sec_stress_chap_en.html#answers_sec_stress_chap_en-3-1-2",
  "type": "Listing",
  "number": "2.7.2",
  "title": "",
  "body": "  x = sym('x', [3 1], 'real'); syms rho g real sig = [x(2) x(3) 0; x(3) x(1) 0; 0 0 rho*g*x(3)]; b = [0; 0; -rho*g]; % 1st question divergence(sig(1,1:3), x) + b(1) divergence(sig(2,1:3), x) + b(2) divergence(sig(3,1:3), x) + b(3) % 2nd question t1 = subs(sig, x(1), 1)*[1; 0; 0] t2 = subs(sig, x(2), 1)*[0; 1; 0] t3 = subs(sig, x(3), 1)*[0; 0; 1] t1_ = subs(sig, x(1), 0)*[-1; 0; 0] t2_ = subs(sig, x(2), 0)*[0; -1; 0] t3_ = subs(sig, x(3), 0)*[0; 0; -1] % 3th question T1 = int(int(t1, x(2), 0, 1), x(3), 0, 1) T2 = int(int(t2, x(1), 0, 1), x(3), 0, 1) T3 = int(int(t3, x(1), 0, 1), x(2), 0, 1) T1_ = int(int(t1_, x(2), 0, 1), x(3), 0, 1) T2_ = int(int(t2_, x(1), 0, 1), x(3), 0, 1) T3_ = int(int(t3_, x(1), 0, 1), x(2), 0, 1) B = int(int(int(b, x(1), 0, 1), x(2), 0, 1), x(3), 0, 1) R = T1 + T2 + T3 + T1_ + T2_ + T3_ + B   "
},
{
  "id": "refs_stress_chap_en",
  "level": "1",
  "url": "refs_stress_chap_en.html",
  "type": "References",
  "number": "2.8",
  "title": "references and suggested readings",
  "body": " references and suggested readings  Morton E. Gurtin, An introduction to continuum mechanics . Accademic Press, 1981. pp. 97-106.  Oscar Gonzalez and Andrew M. Stuart, A first course in continuum mechanics . Cambridge University Press, 2008. pp. 75-93.  "
},
{
  "id": "motivations_sec_elasticity_chap_en",
  "level": "1",
  "url": "motivations_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.1",
  "title": "motivation",
  "body": " motivation  In order to justify the need to introduce a constitutive modeling in our description of the mechanical behavior of solids under the action of the applied loads, we will consider a simple simple means only that the analytical difficulties of finding a static solution are practically non-existent but the validity of what will be discussed remains absolutely general case study and we will analyze it by using only what we have learned till now, i.e. about the kinematics and about statics.    static analysis  Consider the following body with domain delimited by the two end surfaces and and by the surface given by the other 4 faces of the prism. Let be the length of the prism having a constant section along the axis and identified by the generic surface . From a geometric point of view we will trivially have the following area and volume measurements where is the area of surface which identifies the generic section of the prism. The bulk load is zero, , and suppose that the prism is subject only to the tractions shown in the figure, tractions which are equal and opposite.      very important assumption  The geometric description just given concerns only the reference configuration to which the kinematic description of the bodies typically refers, as presented in the . The writing of equilibrium equations, see in this regard the , is instead carried out with respect to the current configuration . The following discussion should therefore take account of this situation, also requiring the introduction of further concepts that are outside the present introductory discussion on Solid Mechanics.  Therefore we introduce the hypothesis behind a linearized formulation of the elastic problem , which is the final objective of this chapter, namely that equilibrium equations can be formulated assuming  given the smallness of the displacements and deformations involved in the problem. Consequently also all operations, for example derivation and integration, will be carried out with respect to the coordinates , and related to the configuration of reference, or undeformed configuration, of the body.  Based on the data of the problem and the previous hypothesis, the static problem assumes the following formulation.  Equilibrium equations over the domain That is, for components, the following three scalar equations   Static conditions on the boundary Where      stress field assumption and solution  In Eq. the unknowns are the 6 independent components of the stress tensor while the equations available are only 3. Put in these terms the search for the solution would not even be possible. However, given the simplicity of the data of the problem, it is possible to assume a form the stress tensor field and check if all equilibrium equations, over the domain and on the boundary, are satisfied. In particular, let us consider the following form for  valid on the whole domain and with a generic constant. The satisfaction of Eq. is easily verified: The satisfaction of Eq. can be also easily verified: While imposing Eq. , or Eq. , it can be obtained what follows   Ultimately the stress field which satisfies all equilibrium quations involved is Therefore the static solution is given by a state of pure traction along the axis distributed evenly over the whole body.      kinematic analysis  Based on what we learned in and what we got as a static solution, we are able to speculate a quite plausible kinematic transformation for the problem under consideration. For example, consider what is shown in the following figure.     The represented trasnformation is where is a generic parameter to be determined. The displacement field has the following components and its gradient is   As for the kinematic description of the problem, we are unable to add anything else. So let's see if using another tool introduced in , the Principle of virtual work, it is possible to gain some kind of information on the generic parameter .     Principle of virtual work  On the basis of the displacement field adopted, the data of the problem under examination and the basic assumption , the writing of the Principle of virtual work takes the following expression where, in particular, Then introducing the static solution already found and the expression above reported of the gradient of the displacement the following result is obtained From which, evaluating the involved integrals (all with constant argument), it can be obtained what follows i.e. Therefore it is also possible to verify the equality between external and internal work but we do not draw any further information regarding the parameter.     conclusions  Previous discussion allows to draw the following conclusions.    It was possible to identify the tensor which satisfies the equilibrium equations. This result was made possible only by the problem under examination, a very particular problem which therefore does not constitute a typical situation. In general, equilibrium equations are not solvable with respect to the components of the stress tensor. .  We have identified a displacement field parameterized with respect to the parameter, a plausible field and which also verifies the Principle of virtual work.  It is not possible, at least with the tools available so far, to find a significative value for from a mechanical point of view. This parameter remains completely generic and undefined.  Even the form assumed for the transformation - has not been subject to verification and at the moment remains completely arbitrary.    The problem highlighted depends on a lack of information in the mechanical model presented so far. The missing information is as follows    What is the relationship between the deformation that the body undergoes and the stress state that arises inside it?    In the following sections this problem is presented and discussed, not in the most general terms possible, but with respect to the context already largely used for the problem examined above. That is, in the context of small displacements and small strains also known as infinitesimal displacements context. Therefore a link will be established between the Cauchy stress tensor and the infinitesimal strain tensor: It is useful to poit out that, in the case of infinitesimal displacements, the infinitesimal strain tensor constitutes an approximation of the Green-Lagrange strain tensor, see , and that in the calculation of internal work this tensor appears too. Indeed    "
},
{
  "id": "motivations_sec_elasticity_chap_en-3-3",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_en.html#motivations_sec_elasticity_chap_en-3-3",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "motivations_sec_elasticity_chap_en-3-4",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_en.html#motivations_sec_elasticity_chap_en-3-4",
  "type": "Remark",
  "number": "3.1.2",
  "title": "very important assumption.",
  "body": " very important assumption  The geometric description just given concerns only the reference configuration to which the kinematic description of the bodies typically refers, as presented in the . The writing of equilibrium equations, see in this regard the , is instead carried out with respect to the current configuration . The following discussion should therefore take account of this situation, also requiring the introduction of further concepts that are outside the present introductory discussion on Solid Mechanics.  Therefore we introduce the hypothesis behind a linearized formulation of the elastic problem , which is the final objective of this chapter, namely that equilibrium equations can be formulated assuming  given the smallness of the displacements and deformations involved in the problem. Consequently also all operations, for example derivation and integration, will be carried out with respect to the coordinates , and related to the configuration of reference, or undeformed configuration, of the body. "
},
{
  "id": "motivations_sec_elasticity_chap_en-4-3",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_en.html#motivations_sec_elasticity_chap_en-4-3",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "motivations_sec_elasticity_chap_en-6-5",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_en.html#motivations_sec_elasticity_chap_en-6-5",
  "type": "Claim",
  "number": "3.1.4",
  "title": "",
  "body": "  What is the relationship between the deformation that the body undergoes and the stress state that arises inside it?   "
},
{
  "id": "uniaxial_sec_elasticity_chap_en",
  "level": "1",
  "url": "uniaxial_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.2",
  "title": "uniaxial states",
  "body": " uniaxial states  The elastic modeling of uniaxial states, i.e. states of tension and deformation in which only one stress component and the associated strain component are present, can be carried out through a direct application of Hooke's law.   Hooke's law   Hooke's law is a law of physics which states that the force needed to extend or compress a spring by an amount scales linearly with respect to that amount, i.e.  is known as stiffness and is a parameter, characteristic of the spring, constant and positive , is the elongation that the spring undergoes (in the case of a negative the spring undergoes a shortening).      The law is named after the 17th century British physicist Robert Hooke who first made the law public in 1676 as a Latin anagram. Subsequently, in 1678, he published the solution of his anagram as: ut tensio, sic vis (the extension is proportional to the force).  In order to highlight also the concept of elastic energy stored by the spring due to the effect of elongation , consider the following mechanical scheme where all the forces acting have been highlighted (for simplicity let's suppose to carry out the experiment in the absence of gravity In fact if we also took gravity into account the nature of the resulting equation would not change. and dissipative forces) on a body of mass and constrained by a stiffness spring .     Due to the displacement measured from the equilibrium position, the body is subject to the inertia force and the elastic force directed as shown in the figure. For the balance of the system we have that is, introducing the quantity , The differential equation obtained characterizes a system which, in mechanics, is called simple harmonic oscillator . The solution of the differential equation is described by the function where and represent the initial positon and velocity. is called pulsation and is measured in .   By way of example, the MATLAB instructions that can be used for plotting the function on the basis of the following data are reported: , , and .   om = 2*pi; u0 = 1; v0 = 10; m = 10; syms t u(t) = u0*cos(om*t)+v0\/om*sin(om*t); tt=linspace(0,3,201); uu=u(tt); plot(tt,uu,'k','LineWidth',2)      The perfectly oscillating trend of the solution always with respect to the same extremes is determined by the conservation of total potential energy  given by the sum of elastic energy and kinetic energy . The total potential energy, in the absence of dissipative phenomena, always remains constant.   The following figure   is obtained with MATLAB instructions   Edef(t) = 1\/2*om^2*m*u(t)^2; Ekin(t) = 1\/2*m*diff(u,t)^2; dd=Edef(tt); kk=Ekin(tt); scale = 5*u0 \/ (Edef(0)+Ekin(0)); plot(tt,uu,'k',tt,dd*scale,'r',tt,kk*scale,'b','LineWidth',2) legend('spost.','en. def.','en. cinet.')   and it shows, in graphic form, the continuous transformation of the elastic energy of the spring into kinetic energy of the body and vice versa. The elastic energy (red color) oscillates between zero and the maximum value that occurs when the absolute value of the displacement (black color) is maximum, at the same time the velocity is zero. On the contrary, the kinetic energy (blue color) is maximum when the absolute value of the velocity is maximum, when at the same instant the displacement is zero.   To conclude, it is observed that the elastic energy acts as a potential for the elastic force of the spring as the latter can be obtained by deriving the energy, i.e.      uniaxial tensile or compressive test  The following figure illustrates the result of an uniaxial load test performed on a steel bar. The result of the test is the curve shown in the figure, a curve that represents the mechanical response , that is, the value of the stress in the material, as the applied deformation increases. It is evident how the response of the material is articulated and variable and how it is not trivial to identify a mathematical \/ numerical model capable of reproducing the result produced by the load test, a result that can be schematically summarized as follows (for steel, and in general for metallic materials, what is shown in the figure is generally assumed to be valid both under traction and compression).       The response of the material is initially linear.  There is a limit to the linear phase (Proportional limit) beyond which the response tends to remain constant by staying in the phase called yielding (Yield Point).  Then begins the strain hardening phase which ends with the achievement of the limit load (Ultimate Strength) of the material.  Once the limit load has been exceeded, the breaking point (Fracture Point) of the material is preceded by a reduction of the stress.    The focus of this chapter is however only the first phase of the response of the material, a phase that is not only linear but also elastic in the sense that Hooke's law is applicable and therefore among the only components of tension and deformation, and , present in an uniaxial condition, it is legitimate to assume that the following proportional relationship exists and that it is possible to define an elastic energy that acts as a potential for tension moreover It is also possible to carry out a complementary formulation of elastic energy, i.e. to express it with respect to stress from which   The symbol is used to denote the Young's modulus which is a specific characteristic of the material and is measurable with a load test of the type described above (trivially is given by the slope that the response curve assumes in the elastic phase). Recalling that the deformation is dimensionless the unit of measurement used for is identical to that used for the stress . Some examples of units of measurement used are the following The following table shows the value of Young's modulus for some materials used in engineering applications.   Approximate values of Young's modulus for some materials    Material      rubber      teflon      PET      wood      human bones      concrete      glass      aluminum      steel          uniaxial shear test  What has been observed for the uniaxial tensile test also occurs in the uniaxial tests which involve tangential components of stress and strain. Again there is a first part of the response that can be described trough Hooke's law. However, the proportionality coefficient changes. In particular, the relationship between the tangential stress component and the shear deformation component (see ) can be formulated as follows where the symbol is used to denote the shear modulus .  The following table shows the value of the shear modulus for some materials.   Approximate values of the shear modulus for some materials    Material      rubber      PET      aluminum      glass      titanium      iron      steel      diamond        "
},
{
  "id": "uniaxial_sec_elasticity_chap_en-3",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_en.html#uniaxial_sec_elasticity_chap_en-3",
  "type": "Insight",
  "number": "3.2.1",
  "title": "Hooke’s law.",
  "body": " Hooke's law   Hooke's law is a law of physics which states that the force needed to extend or compress a spring by an amount scales linearly with respect to that amount, i.e.  is known as stiffness and is a parameter, characteristic of the spring, constant and positive , is the elongation that the spring undergoes (in the case of a negative the spring undergoes a shortening).      The law is named after the 17th century British physicist Robert Hooke who first made the law public in 1676 as a Latin anagram. Subsequently, in 1678, he published the solution of his anagram as: ut tensio, sic vis (the extension is proportional to the force).  In order to highlight also the concept of elastic energy stored by the spring due to the effect of elongation , consider the following mechanical scheme where all the forces acting have been highlighted (for simplicity let's suppose to carry out the experiment in the absence of gravity In fact if we also took gravity into account the nature of the resulting equation would not change. and dissipative forces) on a body of mass and constrained by a stiffness spring .     Due to the displacement measured from the equilibrium position, the body is subject to the inertia force and the elastic force directed as shown in the figure. For the balance of the system we have that is, introducing the quantity , The differential equation obtained characterizes a system which, in mechanics, is called simple harmonic oscillator . The solution of the differential equation is described by the function where and represent the initial positon and velocity. is called pulsation and is measured in .   By way of example, the MATLAB instructions that can be used for plotting the function on the basis of the following data are reported: , , and .   om = 2*pi; u0 = 1; v0 = 10; m = 10; syms t u(t) = u0*cos(om*t)+v0\/om*sin(om*t); tt=linspace(0,3,201); uu=u(tt); plot(tt,uu,'k','LineWidth',2)      The perfectly oscillating trend of the solution always with respect to the same extremes is determined by the conservation of total potential energy  given by the sum of elastic energy and kinetic energy . The total potential energy, in the absence of dissipative phenomena, always remains constant.   The following figure   is obtained with MATLAB instructions   Edef(t) = 1\/2*om^2*m*u(t)^2; Ekin(t) = 1\/2*m*diff(u,t)^2; dd=Edef(tt); kk=Ekin(tt); scale = 5*u0 \/ (Edef(0)+Ekin(0)); plot(tt,uu,'k',tt,dd*scale,'r',tt,kk*scale,'b','LineWidth',2) legend('spost.','en. def.','en. cinet.')   and it shows, in graphic form, the continuous transformation of the elastic energy of the spring into kinetic energy of the body and vice versa. The elastic energy (red color) oscillates between zero and the maximum value that occurs when the absolute value of the displacement (black color) is maximum, at the same time the velocity is zero. On the contrary, the kinetic energy (blue color) is maximum when the absolute value of the velocity is maximum, when at the same instant the displacement is zero.   To conclude, it is observed that the elastic energy acts as a potential for the elastic force of the spring as the latter can be obtained by deriving the energy, i.e.   "
},
{
  "id": "uniaxial_sec_elasticity_chap_en-4-3",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_en.html#uniaxial_sec_elasticity_chap_en-4-3",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": "  "
},
{
  "id": "uniaxial_sec_elasticity_chap_en-4-7",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_en.html#uniaxial_sec_elasticity_chap_en-4-7",
  "type": "Table",
  "number": "3.2.8",
  "title": "Approximate values of Young’s modulus for some materials",
  "body": " Approximate values of Young's modulus for some materials    Material      rubber      teflon      PET      wood      human bones      concrete      glass      aluminum      steel      "
},
{
  "id": "shear_subsecuniaxial_sec_elasticity_chap_en-4",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_en.html#shear_subsecuniaxial_sec_elasticity_chap_en-4",
  "type": "Table",
  "number": "3.2.9",
  "title": "Approximate values of the shear modulus for some materials",
  "body": " Approximate values of the shear modulus for some materials    Material      rubber      PET      aluminum      glass      titanium      iron      steel      diamond      "
},
{
  "id": "multiaxial_sec_elasticity_chap_en",
  "level": "1",
  "url": "multiaxial_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.3",
  "title": "multi-axial states",
  "body": " multi-axial states    the model as a generalization of Hooke's law  The uniaxial states of traction\/compression and shear highlighted two different experimental parameters, the Young modulus and the shear modulus , usable as proportionality coefficients in the definition of the elastic relationship existing between the stress component and its strain component. In order to extend this approach to multi-axial states, the definition of elastic relationships has to be capable to describe more complex situations in which the stress components, in general, do not depend only on the corresponding strain components. Therefore the following proportionality coefficients are introduced   between the generic stress component and the generic strain component . So for each of the 9 stress components ( ) it will be necessary to define as many coefficients of proportionality as the strain components, which are also 9 ( ). Each contribution given by the generic strain component can be added together by providing There are therefore 9 proportionality coefficients for each of the 9 stress components for a total of 81 coefficients. This relationship can be expressed in compact form as like or, in tensorial form, by writing relationship that highlights a new type of linear transformation that associates the generic strain tensor with the corresponding stress tensor. In this case, the linear operator involved is given by the 4th order tensor , the tensor which internally contains the above 81 coefficients.  It is also assumed the possibility of defining elastic energy for multi-axial states as follows quantity which, as for the uniaxial case, represents half of the internal work, that is the work carried out by the stress on the strain. Elastic energy, on the basis of the constitutive relationship , can be rewritten as follows    properties of the constitutive tensor   The definition of energy, Eq. , and the condition of non-negativity of internal work imply that the constitutive tensor must necessarily be defined positive , that is and the only case which is null occurs when .  By definition of elastic potential, the relationship between generic stress component and elastic energy can be written as Further deriving this relationship and using relationship we obtain Therefore the generic coefficient of the constitutive tensor is related to the elastic energy through relationship Observing that by swapping the derivation order the result does not change followin condition is fulfilled known as major symmetry of the constitutive tensor .  The symmetry of the stress components allows to write while the symmetry condition of the strain components provides These conditions are called minor symmetries of the tensor .  The symmetry conditions described above reduce the number of effectively independent coefficients necessary to define a generic elastic tensor from 81 to 21.       experimental observation  The main phenomenon highlighted by the experimental observation of multiaxial stress \/ strain states is that the application of a load in an assigned direction determines not only a deformation along that direction but also along the directions transverse to it. This phenomenon, as shown also in the following animation, is observed in particular for the states of traction or compression and is called Poisson effect .       For simpler materials Poisson effect is modeled through the introduction of a single characteristic parameter of the material, known as the Poisson coefficient , which links the generic transverse strain to the strain relative to the direction of the applied load. For example, if a stress is applied, the strain along the direction of the load will take on a generic value while the strains in the transverse directions will be where is precisely the Poisson coefficient.     the isotropic case  The experimental parameters encountered so far are Young's modulus, , the shear modulus, and the Poisson's ratio, . It has also been said, see previous section, that the number of coefficients strictly necessary to define the constitutive tensor is equal to 21. It therefore seems that the experimental results discussed so far are very insufficient to reach a complete definition of the elastic relationship. Fortunately, most of the materials used in the usual engineering applications are isotropic . That is, they have the property that, given a block of material and any direction is chosen to cross it by means of experimental tests, the same mechanical response is always detected. For this class of materials, applicable to metals, glass, polymers, soils and, in some ways, even cement or bituminous conglomerates, the constitutive characterization can be carried out by only 2 experimental parameters .  A couple of experimental parameters, although not the only pair, is given by the pair formed by Young's modulus parameters, and Poisson's ratio, . The shear modulus depends in fact on and according to the following formula Given this, it is convenient to discuss the elastic and isotropic material behavior by keeping the strain\/stress components of the normal type and the tangential type components separate since, for isotropic materials, there is no coupling and therefore the coefficients of the type are however null.   normal components       The elastic relationship for normal components can be formulated as follows It is observed that this result constitutes the inverse form of the elastic relationship for the part relating to the normal components. To obtain the elastic coefficients that proportionally correlate the stress components to the strain components, it is better to visualize the relationship in the following matrix form and use the following MATLAB instructions to invert the highlighted matrix.   syms E ni; M = [1\/E -ni\/E -ni\/E; -ni\/E 1\/E -ni\/E; -ni\/E -ni\/E 1\/E] inv(M)   So we get Result that allows to identify the non-zero constitutive coefficients relative to the normal components of the stress tensor, that is     tangential type components  For tangential components, in addition to the absence of coupling with normal components, it is not necessary to model any reciprocal coupling, therefore for all tangential components the uniaxial law already seen in can be assumed  From which the following relationship is obtained between the tangential components of the stress and strain tensors and therefore the following non-zero constitutive coefficients    summary and Voigt notation  In the previous discussion, the elastic law was presented keeping the description of the part concerning the normal components separate from that relating to the tangential components. This certainly to better highlight the lack of certain couplings between stress components and strain components, but also for the impossibility of representing in a compact way the components of a 4th tensor such as the constitutive tensor. In fact, while for the tensors of the 2nd order the representation of all the components is realized through the associated matrix, for a 4th tensor there is no similar representation.  A summary of what described above can be obtained using the Voigt notation which uses 6-component vectors to represent 2nd order symmetric tensors, while for the corresponding 4th order tensors Corresponding in the sense of 4th order tensors which map 2nd symmetric tensors into 2nd order symmetric tensors. 6 6 matrices. Therefore the constitutive elastic law can be written as follows   For completeness, a summary of the elastic and isotropic law is also provided using the tensor format. where the non-zero components of tensor are     "
},
{
  "id": "multiaxial_sec_elasticity_chap_en-2-2-3",
  "level": "2",
  "url": "multiaxial_sec_elasticity_chap_en.html#multiaxial_sec_elasticity_chap_en-2-2-3",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "multiaxial_sec_elasticity_chap_en-4-4-3-4",
  "level": "2",
  "url": "multiaxial_sec_elasticity_chap_en.html#multiaxial_sec_elasticity_chap_en-4-4-3-4",
  "type": "Listing",
  "number": "3.3.2",
  "title": "",
  "body": "  syms E ni; M = [1\/E -ni\/E -ni\/E; -ni\/E 1\/E -ni\/E; -ni\/E -ni\/E 1\/E] inv(M)   "
},
{
  "id": "problem_sec_elasticity_chap_en",
  "level": "1",
  "url": "problem_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.4",
  "title": "the elastic problem",
  "body": " the elastic problem  The definition of the elastic law provided in the previous sections allows to formulate, in well-posed terms, the following problem known as elastic problem .   Evaluation of the displacement, stress and strain fields, , and , caused by the assigned loading conditions on a body however constrained.      Answering the question posed requires the simultaneous solution of the following equations defined on all points of the assigned body .      Equilibrium equations ( )    Strain-displacement relationship ( )    Elastic constitutive law ( )      To complete the formulation of the problem it is also necessary to assign the boundary conditions which, in general, can be of two types: static type on the part of boundary and kinematic type on the part . Note .   Static boundary conditions , defined on     Kinematic boundary conditions , defined on        motivation (reprised): the prismatic solid simply stretched  It is now possible to consider again the prismatic solid simply stretched discussed in at the beginning of this chapter.  The static solution already found, however correct because it satisfies the equations of equilibrium inside the solid and the static conditions on the contour , is On the basis of the isotropic elastic relationship , it is now possible to calculate the strain tensor whose only non-null components are therefore a constant and homogeneous strain field on the whole solid.  The strain-displacement relationship allows the determination of the displacement field. An explicit writing of Eq. , see also , gives By replacing the values of the strain components obtained in - by means of the elastic law we obtain Equations for which it is easy to verify that a solution is given by In this regard, it is observed that we say a solution since by adding to this displacement field all possible rigid motions, which in the assigned problem are not explicitly eliminated, we would always obtain the same solution in terms of stress and strain fields.   check  Based on the displacement field defined by the use the following MATLAB instructions to calculate the relative strain and stress fields.   syms t E ni; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*t\/E * X(1); u(2) = -ni*t\/E * X(2); u(3) = t\/E * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)         the prismatic solid simply bent  What has been obtained for the prismatic solid subject to uniform traction fields at the ends can be easily extended to the case in which the tractions applied to the ends have the linear trend shown in the following figure.      static analysis  The formulation of the static part of the problem is identical to that made for the prismatic solid simply stretched except for the end faces of the solid on which the applied tractions assume the following expression where represents the height of the solid along the direction and is the maximum intensity of the applied tractions.  Also in this case it is possible to proceed by assuming an attempt solution for the stress tensor and then verifying the satisfaction of the equations of equilibrium and of the boundary conditions. In particular for the following form is assumed valid on the whole domain and with a generic constant. With such an assumption the writing of balance equations provides which shows their satisfaction.  Retracing the same steps taken in for the simply stretched solid, we consider the verification or imposition of the boundary conditions. In particular, the satisfaction of Eq. is easily verified, in fact Condition gives The same result should be obtained through condition .  In conclusion, the stress field that satisfies all equilibrium equations involved is Hence the static solution is given by a state of pure traction in the direction distributed linearly along the axis . For greater convenience of subsequent developments, we will continue to use the expression , however remembering that .   Similarly to the solid simply stretched, note how the solution obtained involves only the component of the tensor. The only difference is in the shape of the solution which instead of being constant is linear along the axis.     from stress to displacement solution  To evaluate the solution in terms of displacements, the elastic constitutive law must first be used to compute the components of strain tensor and obtain the following  These values of the strain components allow to impose Eq. in the following terms Whose solution, a little less direct than the case of the simply stretched solid, provides the following result    check  Based on the displacement field defined by the , , it is possible to check the result obtained by using the following MATLAB instructions.   syms E ni k; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*k\/E * X(1) * X(2); u(2) = -k\/(2*E) * ( X(3)^2 + ni*(X(2)^2-X(1)^2) ); u(3) = k\/E * X(2) * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)         summary  A summary of the solutions found for the prismatic solids simply stretched and simply bent is given in order to highlight analogies. For each field found, stress, strain and displacement, only the non-zero components are reported.         stretched solid   bent solid                                                         "
},
{
  "id": "problem_sec_elasticity_chap_en-4",
  "level": "2",
  "url": "problem_sec_elasticity_chap_en.html#problem_sec_elasticity_chap_en-4",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "problem_sec_elasticity_chap_en-8-5-2-3",
  "level": "2",
  "url": "problem_sec_elasticity_chap_en.html#problem_sec_elasticity_chap_en-8-5-2-3",
  "type": "Listing",
  "number": "3.4.2",
  "title": "",
  "body": "  syms t E ni; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*t\/E * X(1); u(2) = -ni*t\/E * X(2); u(3) = t\/E * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)   "
},
{
  "id": "bend_problem_sub-3",
  "level": "2",
  "url": "problem_sec_elasticity_chap_en.html#bend_problem_sub-3",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "bend_problem_sub-4-6",
  "level": "2",
  "url": "problem_sec_elasticity_chap_en.html#bend_problem_sub-4-6",
  "type": "Remark",
  "number": "3.4.4",
  "title": "",
  "body": " Similarly to the solid simply stretched, note how the solution obtained involves only the component of the tensor. The only difference is in the shape of the solution which instead of being constant is linear along the axis.  "
},
{
  "id": "bend_problem_sub-6-2-5",
  "level": "2",
  "url": "problem_sec_elasticity_chap_en.html#bend_problem_sub-6-2-5",
  "type": "Listing",
  "number": "3.4.5",
  "title": "",
  "body": "  syms E ni k; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*k\/E * X(1) * X(2); u(2) = -k\/(2*E) * ( X(3)^2 + ni*(X(2)^2-X(1)^2) ); u(3) = k\/E * X(2) * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)   "
},
{
  "id": "prismatic_solutions_tab",
  "level": "2",
  "url": "problem_sec_elasticity_chap_en.html#prismatic_solutions_tab",
  "type": "Table",
  "number": "3.4.6",
  "title": "",
  "body": "     stretched solid   bent solid                                                     "
},
{
  "id": "stretched_beam_sec_elasticity_chap_en",
  "level": "1",
  "url": "stretched_beam_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.5",
  "title": "one-dimensional models: stretched beam",
  "body": " one-dimensional models: stretched beam    premise  The solution of the elastic problem under completely generic conditions poses difficulties which are difficult to overcome. Only by making appropriate simplifications, such as for previous examples regarding prismatic solids (simple geometries) and under the action of loads of a precise type, is it possible to obtain an analytical solution of the assigned problem.  The previous considerations and the need to deal with engineering problems concerning solids which, from a geometric point of view, can be modeled through one-dimensional or two-dimensional descriptions, have led to the development of various structural models. These models allow to solve, with an acceptable degree of approximation, various problems that would not be easily tackled using both analytical and numerical tools.   In the following two beam models are presented. They are obtained through a one-dimensional reduction of the solutions found for prismatic solids simply stretched and simply bent, see . In particular, we will proceed by showing how it is possible to describe the significant component of the strain, the , referring only to the centerline of the beam, known as beam axis. The component is the significant one because it constitutes the only strain component that determines the value of the internal work of the prismatic solid, in fact in the two cases examined we have that quantity that we will indicate by simply writing being clear which components we are referring to. So the main purpose is to obtain a description of the internal energy of the one-dimensional model equivalent to the internal energy of the 3D solution taken as a reference .  Furthermore, for the problems examined, the beam axis moves remaining in the plane identified by the axes and and for this reason the treatment can be carried out in the plane and then we will talk about 2D beam models In the case of the stretched beam the one-dimensional solution should be valid also in a 3D context. .     the reference given by the beam axis  In the case of the prismatic solid that is simply stretched, the beam axis deforms as shown in the Figure, that is, it undergoes a simple elongation or shortening. The figure also highlights the notation that is currently used for this one-dimensional model.     Using the beam axis as a reference, we can calculate the strain component , here simply referred to as , simply deriving the displacement variable along the axis At the moment, as in the 3D reference solution, is variable along the axis and the deformation is constant.     internal work  It is possible now to rewrite the expression of the internal work in a format that refers only to the beam axis, that is then The introduced quantity is the static entity that in the one-dimensional reduction performs the internal work on strain. is called axial force and is measured as a force, .     elastic constitutive law  The definition of the elastic law for the one-dimensional model is obtained by reworking Eq. as follows Relationship that highlights how the proportionality coefficient that defines the link between and is given by the product between the Young's modulus of the material and the cross-section area of the beam.     external work  Up to this point the one-dimensional reduction has remained strictly adherent to the 3D solution from which we started. If we continue on the same false line also for external loads you will get the following situation   that is, a beam simply subjected to two equal and opposite end forces.  With the definition of the external loads admissible for the beam model, the choice is made instead of extending the use of the model also to cases that in general are not included in the solution of the simply stretched prismatic solid. In particular, as the following Figure shows,   we introduce the load per unit of length , a generic function dependent on the abscissa , and the concetrated end forces, however expected, are generally different. The external work therefore assumes the following expression   Furthermore, unlike the reference 3D solution, the choice of the admissible loads determines for a pattern which is no longer limited to linear variability alone. The normal stress and axial strain, constant in the reference solution, also become generic functions of the type and .     virtual work principle and equilibrium equations  At this point the definition of the model is practically complete. Only the definition of equilibrium equations, which can be obtained through the virtual work principle, is missing. The principle can be formulated as follows The relationship just written, where we have neglected to make explicit the dependencies on the variable , can be manipulated by carrying out the following steps And then we get the following writing of the virtual work principle The satisfaction of this expression for any virtual displacement implies the satisfaction of the equation at each point of the beam axis and the fulfillment of the boundary conditions on the ends of the beam axis.     summary of the model     Loads   Unknowns   Internal work   External work   Strain-displacement relationship   Elastic constitutive law   Equilibrium equation   Static boundary conditions   Kinematic boundary conditions      As regards the boundary conditions, it is worth to be noted that on each end it is possible to assign either a static condition or a kinematic condition.  Equilibrium equation can be manipulated in order to obtain an expression in which the displacement appears as unknown. In particular by carrying out the following steps the following result is obtained    "
},
{
  "id": "stretched_beam_sec_elasticity_chap_en-3-3",
  "level": "2",
  "url": "stretched_beam_sec_elasticity_chap_en.html#stretched_beam_sec_elasticity_chap_en-3-3",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_sec_elasticity_chap_en-6-2-1",
  "level": "2",
  "url": "stretched_beam_sec_elasticity_chap_en.html#stretched_beam_sec_elasticity_chap_en-6-2-1",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_sec_elasticity_chap_en-6-3-1",
  "level": "2",
  "url": "stretched_beam_sec_elasticity_chap_en.html#stretched_beam_sec_elasticity_chap_en-6-3-1",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_en",
  "level": "1",
  "url": "bent_beam_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.6",
  "title": "one-dimensional models: bent beam",
  "body": " one-dimensional models: bent beam  In describing the bent beam model, we will follow the same scheme adopted in the previous section for the stretched beam. The general premise, see , is always valid, therefore the considerations underlying the one-dimensional reduction and the observations made during the presentation of the model of the stretched beam always apply without any modification. In the following discussion we take as reference a different 3D solution, i.e. the solution found for the prismatic solid simply bent, see the .    the reference given by the beam axis  Evaluating the displacement field obtained for the prismatic solid simply bent, Eqs. , and , along the beam axis it gives solution which establishes that the beam axis deforms following a parabola contained in the , plane and everything is determined only by the displacement component directed transversely to the axis.   The main goal, however, remains to describe the strain component depending on the displacement that cancels on the beam axis. The description of can however deduced by observing that which highlights the link of with the displacement component of the beam axis. On this basis we can evaluate the component obtaining which shows also how depends on component relative to beam axis.  What has been discussed can be reformulated on the basis of the notation currently used, see the figure below, in our model for a plane bent beam.   Therefore the kinematic variable of the one-dimensional model is the transverse displacement of the beam axis and the only significant strain component for the model is      internal work  The one-dimensional formulation of the internal work becomes therefore Where is the bending moment which is the static entity of the one-dimensional model, and represents the curvature , the kinematic entity work-conjugate with . The measure for is and for is .     elastic constitutive law  The definition of the elastic constitutive law for the one-dimensional model is obtained by reworking Eq. as follows and then Relationship that highlights how the proportionality coefficient that defines the link between and is given by the product between the Young's modulus of the material and the moment of inertia of the cross-section of the beam, .     external work  Also for the bent beam, as already done for the stretched beam, the model does not limit itself to treating only the external loads, shown below, related to the 3D solution taken as a reference.   Instead, an assignment of external loads of the type shown in the following figure is allowed.   We then introduce the load per unit of length , load transversal to the axis of the beam and directed as shown. On each end of the beam there is a concentrated moment and a vertical concentrated force. External work therefore takes on the following expression where the end moments perform work on the beam rotations, rotations that are related to the transverse displacement through the relationship Hence the following expression of external work follows   As a consequence of this choice, the variability of is extended beyond the quadratic pattern, while bending moment and curvature, unlike the 3D solution from which we started, can be more than constant and described by generic functions and .     virtual work principle and equilibrium equations  With respect to our bent beam model the virtual work principle can be written as where and At this point it is necessary to apply the integration by parts to internal work twice in order to extract the equations of equilibrium and the static boundary conditions. Double integration by parts provides   The equality between internal and external work therefore becomes From which the following equations are derived      summary of the model     Loads   Unknowns   Internal work   External work   Strain-displacement relationship   Elastic constitutive law   Equilibrium equations   Static boundary conditions   Kinematic boundary conditions      Also for the bent beam model the equations of the model can be used to eliminate and from the unknowns and maintain only the displacement . The following steps show how to achieve this from which    "
},
{
  "id": "bent_beam_sec_elasticity_chap_en-3-2-8",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_en.html#bent_beam_sec_elasticity_chap_en-3-2-8",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_en-3-3-1",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_en.html#bent_beam_sec_elasticity_chap_en-3-3-1",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_en-6-2-1",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_en.html#bent_beam_sec_elasticity_chap_en-6-2-1",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_en-6-2-2",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_en.html#bent_beam_sec_elasticity_chap_en-6-2-2",
  "type": "Figure",
  "number": "3.6.4",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en",
  "level": "1",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.7",
  "title": "applications of the stretched beam model",
  "body": " applications of the stretched beam model    beam simply stretched  Using Equation calculate the elastic solution for the following scheme.     Due to the absence of a distributed load, the equation to be solved becomes whose general integral is The integration constants can be evaluated by imposing the boundary conditions From which it can be obtained Then the displacement field takes the following expression which allows the evaluation of the axial force along the rod and, for example, the movement to the free end the latter coincides with the total elongation of the beam, result which can also be obtained as follows    MATLAB solution  The general integral can be calculated using the following instructions.   syms u(x) EA; ode = EA*diff(u,x,2) == 0 dsolve(ode)     The solution that also satisfies the assigned boundary conditions is obtained through the following instructions.   syms u(x) EA F l; Du = diff(u); ode = EA*diff(u,x,2) == 0; cond1 = u(0) == 0; cond2 = EA*Du(l) == F; conds = [cond1 cond2]; dsolve(ode,conds)         hyperstatic beam with discontinuity     The assigned scheme differs from the scheme considered in the previous section because the elastic solution to be evaluated does not have a single valid expression on the whole domain of the beam. The force applied inside the extension of the beam determines a discontinuity in the solution and therefore the need to study the problem on the two subdomains, and , highlighted in the figure. We then proceed by evaluating two different elastic solutions but connected by the necessary boundary conditions at the interface.  By applying the equilibrium equation to the two subdomains the following equations are obtained We thus obtain a system of 2 differential equations where the unknowns, and , are uncoupled. Unknowns that still interact in the boundary conditions. In particular, these conditions are expressed by the following equations where the latter equation is given by the static condition    The MATLAB instructions that can be used for the solution of the system of differential equations are given.   syms ua(x) ub(x) EA F l a; Dua = diff(ua); Dub = diff(ub); ode1 = EA*diff(ua,x,2) == 0; ode2 = EA*diff(ub,x,2) == 0; odes = [ode1; ode2]; cond1 = ua(0) == 0; cond2 = ub(l) == 0; cond3 = ua(a) == ub(a); cond4 = EA*Dua(a) - EA*Dub(a) == F; conds = [cond1 cond2 cond3 cond4]; sols = dsolve(odes,conds); sols.ua sols.ub      From which we obtain the following solution in terms of the unknown displacements By calculating the derivative of the obtained solutions, the axial force along the two subdomains takes the following expression      hyperstatic beam subjected to an homogeneous termal increment     The presence of the increase in temperature determines an elongation of the beam equal to where represents the thermal expansion coefficient of the material. This elongation is however prevented by the presence of the constraints therefore the beam will also be subjected to an axial force calculable by the following equation which furnishes solution showing the state of compression determined by the elongation which is not allowed. The solution in terms of displacement is identically zero along its entire beam length.     hyperstatic beam subjected to a sinusoidal distributed load     The applied load condition can be expressed as which, through Equation , gives to be satisfied in each point of the beam. The boundary conditions are    MATLAB instructions which can be used to calculate the solution are as follows.   syms u(x) EA p l; ode = EA*diff(u,x,2) + p*sin(2*pi*x\/l) == 0; cond1 = u(0) == 0; cond2 = u(l) == 0; conds = [cond1 cond2]; sol = dsolve(ode,conds) N = EA*diff(sol,x)      The displacement solution is and the axial force is    "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-2-3",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-2-3",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-2-5-2-1",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-2-5-2-1",
  "type": "Listing",
  "number": "3.7.2",
  "title": "",
  "body": "  syms u(x) EA; ode = EA*diff(u,x,2) == 0 dsolve(ode)   "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-2-5-3-1",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-2-5-3-1",
  "type": "Listing",
  "number": "3.7.3",
  "title": "",
  "body": "  syms u(x) EA F l; Du = diff(u); ode = EA*diff(u,x,2) == 0; cond1 = u(0) == 0; cond2 = EA*Du(l) == F; conds = [cond1 cond2]; dsolve(ode,conds)   "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-3-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-3-2",
  "type": "Figure",
  "number": "3.7.4",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-3-5-1-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-3-5-1-2",
  "type": "Listing",
  "number": "3.7.5",
  "title": "",
  "body": "  syms ua(x) ub(x) EA F l a; Dua = diff(ua); Dub = diff(ub); ode1 = EA*diff(ua,x,2) == 0; ode2 = EA*diff(ub,x,2) == 0; odes = [ode1; ode2]; cond1 = ua(0) == 0; cond2 = ub(l) == 0; cond3 = ua(a) == ub(a); cond4 = EA*Dua(a) - EA*Dub(a) == F; conds = [cond1 cond2 cond3 cond4]; sols = dsolve(odes,conds); sols.ua sols.ub   "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-4-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-4-2",
  "type": "Figure",
  "number": "3.7.6",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-5-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-5-2",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_en-5-4-1-3",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_en.html#stretched_beam_applications_sec_elasticity_chap_en-5-4-1-3",
  "type": "Listing",
  "number": "3.7.8",
  "title": "",
  "body": "  syms u(x) EA p l; ode = EA*diff(u,x,2) + p*sin(2*pi*x\/l) == 0; cond1 = u(0) == 0; cond2 = u(l) == 0; conds = [cond1 cond2]; sol = dsolve(ode,conds) N = EA*diff(sol,x)   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en",
  "level": "1",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.8",
  "title": "applications of the bent beam model",
  "body": " applications of the bent beam model    cantilever beam subjected to a shear force at the free end     Applying the equilibrium equation to the above scheme provides A fourth order differential equation to be solved with respect to boundary conditions which, for the present case, are kinematic conditions at the end and static conditions at the end In general at one end the conditions can be also mixed, kinematic and static. :    The following MATLAB instructions allow the calculation of the solution and its bending moment .   syms w(x) EJ F l; ode = EJ*diff(w,x,4) == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == F; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol = dsolve(ode,conds) M = -EJ*diff(sol,x,2)     the deformed configuration of the beam axis can be plotted by using the following MATLAB instructions.   syms w(x); EJ = 1; F = 1; l = 1; w(x)=F\/6\/EJ*(-x^3+3*l*x^2); np = 100; Xv = 0:1\/np:1; wv = w(Xv); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')      The expected cubic pattern is therefore obtained for the displacement and for the bending moment there is instead the following linear solution      cantilever beam subjected to a constant distributed load     In the present case differential equation gives where the applied transversal distributed load is constant. Also in this case the boundary conditions are kinematic conditions at and static conditions at :    The above equations, equilibrium and related boundary conditions, can be formulated in MATLAB as follows, allowing the calculation of the solution and of the relative bending moment . Instructions for plotting the two functions are also provided. funzioni.   syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')         supported beam subjected to a constant distributed load     The solution to the problem is obtained on the basis of the same equilibrium equation used in the previous example. It is only necessary to modify the boundary conditions which, for the supported beam, become where static and kinematic conditions are mixed at each beam end.   Similarly, the MATLAB instructions for calculating the solution change only in the part concerning boundary conditions.   syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = -EJ*D2w(0) == 0; cond3 = w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')       "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-2-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-2-2",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-2-4-1-4",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-2-4-1-4",
  "type": "Listing",
  "number": "3.8.2",
  "title": "",
  "body": "  syms w(x) EJ F l; ode = EJ*diff(w,x,4) == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == F; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol = dsolve(ode,conds) M = -EJ*diff(sol,x,2)   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-2-4-2-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-2-4-2-2",
  "type": "Listing",
  "number": "3.8.3",
  "title": "",
  "body": "  syms w(x); EJ = 1; F = 1; l = 1; w(x)=F\/6\/EJ*(-x^3+3*l*x^2); np = 100; Xv = 0:1\/np:1; wv = w(Xv); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-3-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-3-2",
  "type": "Figure",
  "number": "3.8.4",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-3-4-1-4",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-3-4-1-4",
  "type": "Listing",
  "number": "3.8.5",
  "title": "",
  "body": "  syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-4-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-4-2",
  "type": "Figure",
  "number": "3.8.6",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_en-4-4-1-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_en.html#bent_beam_applications_sec_elasticity_chap_en-4-4-1-2",
  "type": "Listing",
  "number": "3.8.7",
  "title": "",
  "body": "  syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = -EJ*D2w(0) == 0; cond3 = w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')   "
},
{
  "id": "exercises_sec_elasticity_chap_en",
  "level": "1",
  "url": "exercises_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.9",
  "title": "exercises",
  "body": " exercises      Self assessment quiz about the topics covered in the chapter.      In a spot of a thin sheet of aluminum ( , ) the only non-null strain components are and .  Analyzing the problem in the plane , calculate what follows: principal stresses and principal directions; the stress tensor with respect to a reference system inclined of 30 degrees with respect to the principal directions.        The elastic panel shown above consists of isotropic material with and as generic constituent parameters. The width of the panel coincides exactly with the width of the cavity while in the vertical direction the panel is free to deform without friction phenomena.  Under plane condition, calculate the stress state induced by the application of the load and the lowering at the top .        The elastic panel shown above consists of isotropic material with and as generic constituent parameters. The panel is placed in a cavity with perfectly smooth walls.  Under plane condition, calculate the value of the load able to match the width of the panel with the width, , of the cavity. Also calculate the lowering at the top .        Two square panels of different material are inserted into the cavity with height less than . The elastic problem is solved by assuming no friction phenomena along the cavity walls.        A block of elastic and isotropic material with and generic constituent parameters, is subject to a compression of along the axis . Stress and strain components are to be evaluated in the following cases:  contrained deformation along directions and ;  contrained deformation along only direction ;  free deformation along directions and .          Calculate the elastic solution using the stretched beam model. To this end, assume the Young's modulus beam equal to the generic value and section area equal to .  Once the solution has been obtained, construct a graphical representation of the axial force .        Calculate the elastic solution using the stretched beam model. To this end, assume the Young's modulus beam equal to the generic value and section area equal to .  Once the solution has been obtained, construct a graphical representation of the axial force .        Calculate the elastic solution using the bent beam model. To this end, assume the Young's modulus beam equal to the generic value and section moment of inertia equal to .  Once the solution has been obtained, construct a graphical representation of the displacement the bending moment .        Calculate the elastic solution using the bent beam model. To this end, assume the Young's modulus beam equal to the generic value and section moment of inertia equal to .  Once the solution has been obtained, construct a graphical representation of the displacement the bending moment .   "
},
{
  "id": "exercises_sec_elasticity_chap_en-4-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-4-1",
  "type": "Figure",
  "number": "3.9.1",
  "title": "",
  "body": "  "
},
{
  "id": "elasticity_ex_1-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#elasticity_ex_1-1",
  "type": "Figure",
  "number": "3.9.2",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_en-6-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-6-1",
  "type": "Figure",
  "number": "3.9.3",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_en-7-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-7-1",
  "type": "Figure",
  "number": "3.9.4",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_en-8-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-8-1",
  "type": "Figure",
  "number": "3.9.5",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_en-9-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-9-1",
  "type": "Figure",
  "number": "3.9.6",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_en-10-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-10-1",
  "type": "Figure",
  "number": "3.9.7",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_en-11-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_en.html#exercises_sec_elasticity_chap_en-11-1",
  "type": "Figure",
  "number": "3.9.8",
  "title": "",
  "body": "  "
},
{
  "id": "answers_sec_elasticity_chap_en",
  "level": "1",
  "url": "answers_sec_elasticity_chap_en.html",
  "type": "Section",
  "number": "3.10",
  "title": "answers to selected exercises",
  "body": " answers to selected exercises    Answer to exercise of .   % stress tensor which satisfies equilibrium conditions syms q 'real'; sig = [0 0; 0 -q]; % small strain tensor syms b s 'real'; e11 = 2*s\/(2*s+b); syms e22 'real'; eps = [e11 0; 0 e22]; % imposing elastic constitutive law syms E ni 'real'; eq1 = sig(1,1)\/E -ni*sig(2,2)\/E == eps(1,1); eq2 = sig(2,2)\/E -ni*sig(1,1)\/E == eps(2,2); % the equations can be solved with respect the unknowns q and e22 sol = solve([eq1 eq2],[q e22]); q = sol.q e22 = sol.e22 % integration of the vertical strain component syms u_2 X_2 'real'; syms u_2(X_2); ode = diff(u_2, X_2, 1) == e22; cond = u_2(0) == 0; sol = dsolve(ode,cond); u_2(X_2) = sol; % vertical lowering of the panel's top syms h 'real'; w = -u_2(h)      "
},
{
  "id": "answers_sec_elasticity_chap_en-2-1-2",
  "level": "2",
  "url": "answers_sec_elasticity_chap_en.html#answers_sec_elasticity_chap_en-2-1-2",
  "type": "Listing",
  "number": "3.10.1",
  "title": "",
  "body": "  % stress tensor which satisfies equilibrium conditions syms q 'real'; sig = [0 0; 0 -q]; % small strain tensor syms b s 'real'; e11 = 2*s\/(2*s+b); syms e22 'real'; eps = [e11 0; 0 e22]; % imposing elastic constitutive law syms E ni 'real'; eq1 = sig(1,1)\/E -ni*sig(2,2)\/E == eps(1,1); eq2 = sig(2,2)\/E -ni*sig(1,1)\/E == eps(2,2); % the equations can be solved with respect the unknowns q and e22 sol = solve([eq1 eq2],[q e22]); q = sol.q e22 = sol.e22 % integration of the vertical strain component syms u_2 X_2 'real'; syms u_2(X_2); ode = diff(u_2, X_2, 1) == e22; cond = u_2(0) == 0; sol = dsolve(ode,cond); u_2(X_2) = sol; % vertical lowering of the panel's top syms h 'real'; w = -u_2(h)   "
},
{
  "id": "refs_elasticity_chap_en",
  "level": "1",
  "url": "refs_elasticity_chap_en.html",
  "type": "References",
  "number": "3.11",
  "title": "references and suggested readings",
  "body": " references and suggested readings  Wikipedia, Hooke's law .  J. Lubliner and P. Papadopoulos, Introduction to Solid Mechanics . Springer International Publishing Switzerland 2014, 2017. pp. 247-267.  "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_en",
  "level": "1",
  "url": "description_sec_rigid_body_kinematics_chap_en.html",
  "type": "Section",
  "number": "4.1",
  "title": "basic kinematic description",
  "body": " basic kinematic description  As seen in the the description of the motion of a body in its generic point involves the deformation gradient . In turn, the gradient, by the polar decomposition theorem ( ), admits the decomposition . Assuming the hypothesis of rigid body , that is the invariance of the mutual distances of the points that make up the body, the body does not deform and therefore Furthermore, always for the rigidity hypothesis, the transformation does not apply only to a neighborhood of the point but is homogeneous and therefore assumes the same value on all points of the body. This further condition allows to express the link between infinitesimal increments in finite terms, that is where refers to the generic point and assumes the particular meaning of pole of the rigid transformation. The choice of the pole is completely indifferent and any point, inside or outside the body, leads to the same results. If we introduce the in the we get the description of the rigid motion in terms of the displacement field The latter relationship highlights how the displacement field of a rigid body is definined by two contributions each characterized by 3 degrees of freedom :  a contribution due to pure translation (3 components) shared by all points of the body, contribution given by the displacement of the pole ;  a contribution due to rotation (3 components) which instead varies for each point with respect to the vector .      linearization  The generic rotation tensor has a representation of the type, see , whose components depend nonlinearly on the rotation angle for the presence of the trigonometric functions. But it has also been seen that in the case of infinitesimal displacements, see the , the rotation tensor takes the following expression where, for 2D case, Therefore, in the case of infinitesimal displacements, the relationship becomes and then A component-wise representation provides    In tensor format the previous formulae are completely generic. Specifying formulae in the matrix format, reference was made to the two-dimensional context that will be used in subsequent applications. Eq. in particular shows that the two translation components of the pole, and , and the rotation constitute the 3 parameters necessary to describe the motion of a rigid body in the plane.  The displacement components vary from point to point on the body, but the rotation of a rigid body does not vary from point to point, however, in subsequent applications, the rotation of the body will also be denoted by indicating the pole assumed as a reference. Also notation will used to indicate the roation in point A of a body.    The following MATLAB instructions define a function for calculating the rigid displacement in the plane of an assigned point, X, with respect to a generic pole, X0. The parameters used are the translation and rotation of the body, u0 and phi0. The considered bodies are one-dimensional and identified by 2 or more points. In the example, a beam defined by 3 points is considered and its displacement is calculated assuming as pole each of these 3 points.   % generic 2D displacement field rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % geometric description of the beam syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % displacement field using A as the pole POLE = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C); % displacement field using B as the pole POLE = B; syms phiB; phi0 = phiB; u0 = sym('uB', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C); % displacement field using C as the pole POLE = C; syms phiC; phi0 = phiC; u0 = sym('uC', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C);       An alternative writing of the equation is obtained by making explicit the structure of the tensor , that is where is the angle of rotation and is a generic skew tensor, see . Furthermore, using the axial vector associated with the tensor , it can also be written     "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_en-3-3",
  "level": "2",
  "url": "description_sec_rigid_body_kinematics_chap_en.html#description_sec_rigid_body_kinematics_chap_en-3-3",
  "type": "Remark",
  "number": "4.1.1",
  "title": "",
  "body": " In tensor format the previous formulae are completely generic. Specifying formulae in the matrix format, reference was made to the two-dimensional context that will be used in subsequent applications. Eq. in particular shows that the two translation components of the pole, and , and the rotation constitute the 3 parameters necessary to describe the motion of a rigid body in the plane.  The displacement components vary from point to point on the body, but the rotation of a rigid body does not vary from point to point, however, in subsequent applications, the rotation of the body will also be denoted by indicating the pole assumed as a reference. Also notation will used to indicate the roation in point A of a body.  "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_en-3-4-1-2",
  "level": "2",
  "url": "description_sec_rigid_body_kinematics_chap_en.html#description_sec_rigid_body_kinematics_chap_en-3-4-1-2",
  "type": "Listing",
  "number": "4.1.2",
  "title": "",
  "body": "  % generic 2D displacement field rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % geometric description of the beam syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % displacement field using A as the pole POLE = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C); % displacement field using B as the pole POLE = B; syms phiB; phi0 = phiB; u0 = sym('uB', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C); % displacement field using C as the pole POLE = C; syms phiC; phi0 = phiC; u0 = sym('uC', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C);   "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_en-3-5",
  "level": "2",
  "url": "description_sec_rigid_body_kinematics_chap_en.html#description_sec_rigid_body_kinematics_chap_en-3-5",
  "type": "Remark",
  "number": "4.1.3",
  "title": "",
  "body": " An alternative writing of the equation is obtained by making explicit the structure of the tensor , that is where is the angle of rotation and is a generic skew tensor, see . Furthermore, using the axial vector associated with the tensor , it can also be written   "
},
{
  "id": "constraints_sec_rigid_body_kinematics_chap_en",
  "level": "1",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html",
  "type": "Section",
  "number": "4.2",
  "title": "constraints",
  "body": " constraints  The word constraint is used to indicate a device that limits the possibilities of movement of a system of bodies. A generic system, for example a system of rigid bodies, is described by parameters, , which are called Lagrangian coordinates of the system or degrees of freedom . In these terms, the generic constraint condition is expressed, in the most generic form, in the following way: Where, in addition to the Lagrangian coordinates, their derivatives also appear, , with respect to time.  For subsequent developments it will be sufficient to consider only fixed (time independent), bilateral (the constraint condition is expressed by the sign of equality), holonomic (independent of velocities) and frictionless (completely allow what they are not constrainig) constraints, that is Previous equation is generally nonlinear. In the following, we will operate within the framework of 1st order kinematics, therefore we will always operate with linear constraint conditions as described below for the constraints most used in the applications.    simple external constraints   roller support     The roller support dictates that the displacement of the point where it is applied can only occur in the direction orthogonal to the axis of the roller support: where In the particular case in which the axis is horizontal, or , condition gives If the axis is vertical, or , the constraint condition becames     rotation lock     This kind of device prescribes the rotation of the application point, i.e.   In the case of a rigid body, the rotation cannot vary from point to point and therefore blocking the rotation in one point means blocking it on the whole body. In other words, the point of application of the constraint has no relevance for rigid body kinematics. Anyway it is useful for subsequent developments to maintain the idea to constraint rotation in a particular point of a body.        double external constraints   pinned support     The pinned support dictates that the displacement of the application point is zero, i.e.     roller support with rotation lock     This kind of device dictates the following conditions If the axis of the device is simply horizontal the conditions are If the axis is vertical the constraining conditions are       triple external constraints   fixed support     Finally the fixed support dictates       internal constraints  The connection of two or more rigid bodies can be made by means of devices called internal constraints. By way of example, avoiding reviewing all possible cases, only one of the most recurrent cases is discussed.   internal hinge     The constraint conditions can be expressed as follows     "
},
{
  "id": "carrello_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#carrello_fig",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "doppiobipendolo_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#doppiobipendolo_fig",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "constraints_sec_rigid_body_kinematics_chap_en-4-3-3-2",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#constraints_sec_rigid_body_kinematics_chap_en-4-3-3-2",
  "type": "Warning",
  "number": "4.2.3",
  "title": "",
  "body": " In the case of a rigid body, the rotation cannot vary from point to point and therefore blocking the rotation in one point means blocking it on the whole body. In other words, the point of application of the constraint has no relevance for rigid body kinematics. Anyway it is useful for subsequent developments to maintain the idea to constraint rotation in a particular point of a body.  "
},
{
  "id": "cerniera_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#cerniera_fig",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": "  "
},
{
  "id": "bipendolo_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#bipendolo_fig",
  "type": "Figure",
  "number": "4.2.5",
  "title": "",
  "body": "  "
},
{
  "id": "incastro_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#incastro_fig",
  "type": "Figure",
  "number": "4.2.6",
  "title": "",
  "body": "  "
},
{
  "id": "cerniera_interna_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_en.html#cerniera_interna_fig",
  "type": "Figure",
  "number": "4.2.7",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_sec_rigid_body_kinematics_chap_en",
  "level": "1",
  "url": "analysis_sec_rigid_body_kinematics_chap_en.html",
  "type": "Section",
  "number": "4.3",
  "title": "kinematic analysis",
  "body": " kinematic analysis    kinematic matrix  Let us consider a system with degrees of freedom and subjected to constraint conditions. The equations expressing the prescribed constraint conditions can be written as  is a generic assigned displacement on the -th constraint, is the -th degree of freedom and is the unitary contribution to displacement give by on -th constraint. Using a matrix notation the constraint conditions can be also epxressed as follows where is the kinematic matrix of the system, , with components, is the vector of the chosen degrees of freedom and , with components, is the vector containing the assigned displacemnts.  The components of the vector can indifferently assume null or non-null values. The most recurrent case is, however, a zero assignment for all components.       kinematic classification  The linear system is used for the calculation of the Lagrangian parameters (chosen degrees of freedom) collected in vector . To this end, it is useful to define, on the basis of the solubility conditions of the system, a kinematic classification of the systems. Let , then the following cases may occur.    : determinate system;  : the system is a mechanism;  : impossible system.      degenerate system.       In the case of a degenerate system, one or more lines of the matrix are a linear combination of the others. The elimination of the dependent lines leads to a system with a lower number of equations for which the solution can be carried out by falling into one of the three cases seen for the non-degenerate system. From a mechanical point of view, this situation is not necessarily a symptom of an error but can be determined by one or more constraint conditions that can be eliminated without changing the resulting kinematics of the system.    "
},
{
  "id": "analysis_sec_rigid_body_kinematics_chap_en-2-2-19",
  "level": "2",
  "url": "analysis_sec_rigid_body_kinematics_chap_en.html#analysis_sec_rigid_body_kinematics_chap_en-2-2-19",
  "type": "Note",
  "number": "4.3.1",
  "title": "",
  "body": " The components of the vector can indifferently assume null or non-null values. The most recurrent case is, however, a zero assignment for all components.  "
},
{
  "id": "analysis_sec_rigid_body_kinematics_chap_en-3-3",
  "level": "2",
  "url": "analysis_sec_rigid_body_kinematics_chap_en.html#analysis_sec_rigid_body_kinematics_chap_en-3-3",
  "type": "Remark",
  "number": "4.3.2",
  "title": "",
  "body": " In the case of a degenerate system, one or more lines of the matrix are a linear combination of the others. The elimination of the dependent lines leads to a system with a lower number of equations for which the solution can be carried out by falling into one of the three cases seen for the non-degenerate system. From a mechanical point of view, this situation is not necessarily a symptom of an error but can be determined by one or more constraint conditions that can be eliminated without changing the resulting kinematics of the system.  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en",
  "level": "1",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html",
  "type": "Section",
  "number": "4.4",
  "title": "kinematic analysis of simple rigid body systems",
  "body": " kinematic analysis of simple rigid body systems    simply supported beam  Perform the kinematic analysis of the following beam of length equal to .     By reading the applyed constraints the following equations can be written where . Previous equations can be also expressed by the following 3 scalar equations ( ):   For the only rigid body in question, choose point as the pole, therefore the 3 Lagrangian parameters ( ) that can be used for the kinematic description of the system are:   Using the equation the constraint conditions can be expressed with respect to the chosen Lagrangian coordinates Conditions which give    Before proceeding with the solution of the system, it is possible to classify the system by calculating the rank of the kinematic matrix using the following MATLAB instructions.   syms l; A = [1 0 0; 0 1 0; 0 1 l]; rank(A)      Since the and then the system is kinematically determined. Finally, the solution of the linear system provides the values assumed by the Lagrangian parameters , and which, in this case, are identically null.      syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; 0]; linsolve(A,b)      Let us assume to modify the assigned system as follows.   In this case it is necessary to simply modify the constraint condition for the roller support placed in point , that is Therefore on the system of equations to be analyzed, the only effect is constituted by the modification of the vector of the known terms and there is no effect on the classification of the system which always remains kinematically determined (the matrix has not changed). Therefore the system of equations becomes The solution of the linear system provides the new values assumed by the Lagrangian parameters , and .      syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; l\/10]; linsolve(A,b)         L shaped beam with 3 roller supports  The assigned system is shown in the figure below.     The proposed scheme does not present any particular novelty with respect to the previous scheme and the following MATLAB instructions allow to obtain the desired solution.      % generic 2D displacement for a rigid body rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % geometric description of the beam syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % displacement description by using the point A as pole POLE = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C); % constraint equations eqns = [ uA(2) == 0, uB(2) == 0, uC(1) == 0 ]; % kinematic matrix and vector of the assigned displacements [A,d] = equationsToMatrix(eqns, [uA(1), uA(2), phiA]); % degrees of freedom, n % number of constrains, m [m,n] = size(A); % rank of A r = rank(A); % if the system is kinematically determined the solution is calculated if and(r == min(m,n), m == n) x = linsolve(A,d); end         system with three hinges  Perform the kinematic analysis of the following system.     The reading of the assigned constraint conditions gives which can be also expressed by the following scalar equations ( ):   The rigid bodies under examination are two: for the body the point is chosen as the pole and for the second body the point is chosen. Therefore the 6 Lagrangian parameters ( ) adopted for the kinematic description of the system are:   Using the equation the constraint conditions can be expressed with respect to the chosen Lagrangian coordinates, in particular: or, in matrix format,    In order to classify the system, the rank of the kinematic matrix is calculated.   syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; rank(A)      Since and then the system is kinematically determined. The solution of the linear system provides the values assumed by the Lagrangian parameters , , , , , .      syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [0; 0; 0; 0; 0; 0]; linsolve(A,b)      Also in this case the solution of a kinematically determined system with respect to a vector of the known terms which is identically null still provides the trivial solution.  A more interesting result can be obtained by assuming an assigned non-zero displacement condition on one or more degrees of constraint. For example:   In this case the matrix form of the constraint conditions provides    The solution can be calculated using the following MATLAB instructions.   syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [l\/4; 0; 0; 0; 0; 0]; linsolve(A,b)      The graphical representation of the displacement field is obtained by evaluating the displacement of the end points of the straight parts of the beams, obtaining what follows.     The following MATLAB instructions allow you to obtain a plot of the kinematics shown above.      % geometric description L = 100; A = [0; 0]; B = [2*L; 0]; C = [2*L; -L]; D = [4*L; -L]; beam1 = [A B]; beam2 = [B C D]; % function for the evaluation of the new position of a point rigidT = @(u0, X0, phi0, X) ... [X(1)+u0(1)-phi0*(X(2)-X0(2)); ... X(2)+u0(2)+phi0*(X(1)-X0(1))]; % new configuration of the first beam (pole in A) u0 = [L\/4; 0]; phi0 = 1\/4; X0 = A; TA = rigidT(u0, X0, phi0, A); TB = rigidT(u0, X0, phi0, B); beam1T = [TA TB]; % new configuration of the first beam (pole in D) u0 = [0; 0]; phi0 = -1\/4; X0 = D; TC = rigidT(u0, X0, phi0, C); TD = rigidT(u0, X0, phi0, D); beam2T = [TB TC TD]; % drawing clf x = beam1(1,:); y = beam1(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam2(1,:); y = beam2(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam1T(1,:); y = beam1T(2,:); line(x,y,'LineWidth',2,'Color','red') x = beam2T(1,:); y = beam2T(2,:); line(x,y,'LineWidth',2,'Color','red') xlim([0 4*L]) ylim([-L 0.5*L]) pbaspect([2.667 1 1])         mechanism example  Perform the kinematic analysis of the following system.     The constraint conditions assigned can be expressed as follows The corresponding set of scalar equations is ( ):   For the two rigid bodies under examination, points B and D are chosen as poles, thus the kinematics is described through the following 6 Lagrangian parameters ( ):   Always using the plane motion model represented by the equation the constraint conditions can be expressed with respect to the chosen Lagrangian coordinates obtaining the following result, Using a matrix format, the system of constraint equations can be written as    It is possible to proceed with the calculation of the rank of the matrix as follows.   syms l; A = [ 1 0 2*l 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 l; ... 0 0 0 0 1 0; ... ]; rank(A)      In the present case and therefore the system is a mechanism and characterized by infinite solutions. To describe all possible solutions, choose the rotation as parameter to be eliminated from the group of unknowns. In this way the system can be rewritten as follows    The following MATLAB instructions allow to calculate the solution we are looking for.   syms l k; A = [ 1 0 0 0 0; ... 0 1 0 0 0; ... 1 0 -1 0 0; ... 0 1 0 -1 l; ... 0 0 0 1 0; ... ]; b = [-2*l*k; 0; 0; -2*l*k; 0]; linsolve(A,b)      The obtained infinite solutions are One of these can be represented as follows      "
},
{
  "id": "trave_appoggiata_cinematica_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#trave_appoggiata_cinematica_fig",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "trave_appoggiata_cinematica_parametri_lagrangiani_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#trave_appoggiata_cinematica_parametri_lagrangiani_fig",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-2-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-2-5-1-2",
  "type": "Listing",
  "number": "4.4.3",
  "title": "",
  "body": "  syms l; A = [1 0 0; 0 1 0; 0 1 l]; rank(A)   "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-2-7-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-2-7-1-1",
  "type": "Listing",
  "number": "4.4.4",
  "title": "",
  "body": "  syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; 0]; linsolve(A,b)   "
},
{
  "id": "trave_appoggiata_cinematica_bis_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#trave_appoggiata_cinematica_bis_fig",
  "type": "Figure",
  "number": "4.4.5",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-2-9-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-2-9-1-1",
  "type": "Listing",
  "number": "4.4.6",
  "title": "",
  "body": "  syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; l\/10]; linsolve(A,b)   "
},
{
  "id": "traveL_cinematica_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#traveL_cinematica_fig",
  "type": "Figure",
  "number": "4.4.7",
  "title": "",
  "body": "  "
},
{
  "id": "traveL_cinematica_sec-4-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#traveL_cinematica_sec-4-1-1",
  "type": "Listing",
  "number": "4.4.8",
  "title": "",
  "body": "  % generic 2D displacement for a rigid body rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % geometric description of the beam syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % displacement description by using the point A as pole POLE = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLE, A); uB = rigidDispl(u0, phi0, POLE, B); uC = rigidDispl(u0, phi0, POLE, C); % constraint equations eqns = [ uA(2) == 0, uB(2) == 0, uC(1) == 0 ]; % kinematic matrix and vector of the assigned displacements [A,d] = equationsToMatrix(eqns, [uA(1), uA(2), phiA]); % degrees of freedom, n % number of constrains, m [m,n] = size(A); % rank of A r = rank(A); % if the system is kinematically determined the solution is calculated if and(r == min(m,n), m == n) x = linsolve(A,d); end   "
},
{
  "id": "arcoatrecerniere_cinematica_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_cinematica_fig",
  "type": "Figure",
  "number": "4.4.9",
  "title": "",
  "body": "  "
},
{
  "id": "arcoatrecerniere_cinematica_parametri_lagrangiani_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_cinematica_parametri_lagrangiani_fig",
  "type": "Figure",
  "number": "4.4.10",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-4-5-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-4-5-1-1",
  "type": "Listing",
  "number": "4.4.11",
  "title": "",
  "body": "  syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; rank(A)   "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-4-7-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-4-7-1-1",
  "type": "Listing",
  "number": "4.4.12",
  "title": "",
  "body": "  syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [0; 0; 0; 0; 0; 0]; linsolve(A,b)   "
},
{
  "id": "arcoatrecerniere_cinematica_bis_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_cinematica_bis_fig",
  "type": "Figure",
  "number": "4.4.13",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-4-10-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-4-10-1-2",
  "type": "Listing",
  "number": "4.4.14",
  "title": "",
  "body": "  syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [l\/4; 0; 0; 0; 0; 0]; linsolve(A,b)   "
},
{
  "id": "arcoatrecerniere_cinematica_bis_soluzione_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_cinematica_bis_soluzione_fig",
  "type": "Figure",
  "number": "4.4.15",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-4-13-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-4-13-1-1",
  "type": "Listing",
  "number": "4.4.16",
  "title": "",
  "body": "  % geometric description L = 100; A = [0; 0]; B = [2*L; 0]; C = [2*L; -L]; D = [4*L; -L]; beam1 = [A B]; beam2 = [B C D]; % function for the evaluation of the new position of a point rigidT = @(u0, X0, phi0, X) ... [X(1)+u0(1)-phi0*(X(2)-X0(2)); ... X(2)+u0(2)+phi0*(X(1)-X0(1))]; % new configuration of the first beam (pole in A) u0 = [L\/4; 0]; phi0 = 1\/4; X0 = A; TA = rigidT(u0, X0, phi0, A); TB = rigidT(u0, X0, phi0, B); beam1T = [TA TB]; % new configuration of the first beam (pole in D) u0 = [0; 0]; phi0 = -1\/4; X0 = D; TC = rigidT(u0, X0, phi0, C); TD = rigidT(u0, X0, phi0, D); beam2T = [TB TC TD]; % drawing clf x = beam1(1,:); y = beam1(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam2(1,:); y = beam2(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam1T(1,:); y = beam1T(2,:); line(x,y,'LineWidth',2,'Color','red') x = beam2T(1,:); y = beam2T(2,:); line(x,y,'LineWidth',2,'Color','red') xlim([0 4*L]) ylim([-L 0.5*L]) pbaspect([2.667 1 1])   "
},
{
  "id": "arcoatrecerniere_labile_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_labile_fig",
  "type": "Figure",
  "number": "4.4.17",
  "title": "",
  "body": "  "
},
{
  "id": "arcoatrecerniere_labile_parametri_lagrangiani_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_labile_parametri_lagrangiani_fig",
  "type": "Figure",
  "number": "4.4.18",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-5-5-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-5-5-1-1",
  "type": "Listing",
  "number": "4.4.19",
  "title": "",
  "body": "  syms l; A = [ 1 0 2*l 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 l; ... 0 0 0 0 1 0; ... ]; rank(A)   "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_en-5-7-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#analysis_examples_sec_rigid_body_kinematics_chap_en-5-7-1-2",
  "type": "Listing",
  "number": "4.4.20",
  "title": "",
  "body": "  syms l k; A = [ 1 0 0 0 0; ... 0 1 0 0 0; ... 1 0 -1 0 0; ... 0 1 0 -1 l; ... 0 0 0 1 0; ... ]; b = [-2*l*k; 0; 0; -2*l*k; 0]; linsolve(A,b)   "
},
{
  "id": "arcoatrecerniere_labile_soluzione_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_en.html#arcoatrecerniere_labile_soluzione_fig",
  "type": "Figure",
  "number": "4.4.21",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_rigid_body_kinematics_chap_en",
  "level": "1",
  "url": "exercises_sec_rigid_body_kinematics_chap_en.html",
  "type": "Section",
  "number": "4.5",
  "title": "exercises",
  "body": " exercises    Perform the previous exercises by suitably modifying the MATLAB code used for the example shown in .      Self assessment quiz about the topics covered in the chapter.    "
},
{
  "id": "refs_rigid_body_kinematics_chap_en",
  "level": "1",
  "url": "refs_rigid_body_kinematics_chap_en.html",
  "type": "References",
  "number": "4.6",
  "title": "references and suggested readings",
  "body": " references and suggested readings  ialms.net, Simulator of the motion of a rigid body in 3D .  "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "equilibrium_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.1",
  "title": "equilibrium equations",
  "body": " equilibrium equations  Equilibrium equations have already been discussed in the dedicated to continuous bodies. We could therefore proceed by particularizing the equations and to the case of systems of bodies subject to concentrated forces. Instead, we prefer to derive the equations of equilibrium autonomously by applying the principle of virtual work already discussed for continuous bodies in the .    static equilibrium conditions for a point system  Consider a system consisting of material points. By applying Newton's first law the point system will maintain its state of quiet if:  where is the concentrated force applied to -th point.     scalar form of equilibrium equations  Consider for each point of the system an arbitrary displacement , and sum the scalar product of each force with the corresponding virtual displacement introduced. By virtue of the it is possible to formulate the following scalar equation: The result obtained can be synthetically formulated as follows It is easy to realize how the reverse is also true      introduction of rigid body kinematics  If at this point we assume that the point system under examination are points belonging to a rigid body then it is possible to express the field of virtual displacements, see the equation , as follows:   Thanks to this last relationship Eq. can be rewritten as and manipulated as follows: The fulfillment of this last scalar condition for any and any requires the fulfillment of the following vector equations.      Cancellation of the resultant force of the applied forces     Cancellation of the resultant moment, or resultant torque, of the applied forces       Each of the vector equations and can be expressed in terms of three scalar equations associated with the individual components of the resultants.  The choice of the pole, of coordinates (internal or external to the body in question), is indifferent, as can be verified using another pole having coordinates, for example, . Where, in the last step, the cancellation condition of the resultant force was used.       moment of a force  Given a force applied to point identified by vector and given a pole identified by , it is possible to evaluate the moment, or torque, of with respect to the chosen pole by calculating the following vector product where is a vector orthogonal to both vectors and and its modulus is being the angle between the two vectors. The quantity takes the name of moment arm quantity that does not change if the force changes position along its line of application:    Then is the distance between the pole and the line of application of the force . It worth of notig that if or , i.e. vectors and are parallel, the moment is null.   moment of a couple Consider a generic rigid body subject to a couple of forces having a zero resultant force as shown in the following figure.   In this case it is possible to state that the body is only subjected to a torque whose intensity is being the distance between the two straight lines that support the assigned forces. Therefore, having established the origin of the torque, nothing prevents the direct assignment of a torque applied to a rigid body as an additional load acting on the body, without the need to specify the forces that produced it. In fact, these forces would in any case make a zero contribution to balance in the translation of the body. It should also be noted that the assignment of the torque does not also require the specification of an application point.   "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_en-5-5",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_en.html#equilibrium_sec_rigid_body_statics_chap_en-5-5",
  "type": "Remark",
  "number": "5.1.1",
  "title": "",
  "body": "Each of the vector equations and can be expressed in terms of three scalar equations associated with the individual components of the resultants. "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_en-5-6",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_en.html#equilibrium_sec_rigid_body_statics_chap_en-5-6",
  "type": "Remark",
  "number": "5.1.2",
  "title": "",
  "body": "The choice of the pole, of coordinates (internal or external to the body in question), is indifferent, as can be verified using another pole having coordinates, for example, . Where, in the last step, the cancellation condition of the resultant force was used. "
},
{
  "id": "force_arm_fig",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_en.html#force_arm_fig",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_en-6-3",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_en.html#equilibrium_sec_rigid_body_statics_chap_en-6-3",
  "type": "Note",
  "number": "5.1.4",
  "title": "moment of a couple.",
  "body": " moment of a couple Consider a generic rigid body subject to a couple of forces having a zero resultant force as shown in the following figure.   In this case it is possible to state that the body is only subjected to a torque whose intensity is being the distance between the two straight lines that support the assigned forces. Therefore, having established the origin of the torque, nothing prevents the direct assignment of a torque applied to a rigid body as an additional load acting on the body, without the need to specify the forces that produced it. In fact, these forces would in any case make a zero contribution to balance in the translation of the body. It should also be noted that the assignment of the torque does not also require the specification of an application point. "
},
{
  "id": "planecase_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "planecase_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.2",
  "title": "2D case",
  "body": " 2D case  If we consider the case in which there are only two non-zero components of the applied forces and of the positions of the points of space, the vector equation can be expressed only by means of two scalar equations and the vector equation boils down to one scalar equation, i.e. The condition expresses the cancellation of the sum of all the horizontal forces applied, that is the components along the axis 1 of the applied forces. The condition requires the cancellation of the sum of all the vertical forces applied, that is the components along the axis 2 of the applied forces. The condition expresses the cancellation of the sum of the moments exerted by the horizontal and vertical forces with respect to the point chosen as pole. The following figure illustrates for the case of a single force the meaning of the terms present in the equations.      The following MATLAB instructions allow to evaluate the resultants of horizontal forces, vertical forces and moments starting from the loads applied to the individual points of a rigid body.   % vector of resultants = % [horizontal; vertical; moment] R = zeros(3,1); % function for the calculation of the moment of a generic force moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; 0]; B = [L; 0]; C = [L; L\/2]; % choice of pole POLE = A; % for each point a vector, Load = [F1; F2; M], is assigned % to be summed to the resultants' vector syms F; LoadA = [F; F; 0]; R = R + LoadA; R(3) = R(3) + moment(POLE, A, LoadA); R LoadB = [-F; -F; 0]; R = R + LoadB; R(3) = R(3) + moment(POLE, B, LoadB); R LoadC = [-F; 2*F; F*L]; R = R + LoadC; R(3) = R(3) + moment(POLE, C, LoadC); R if and(and(R(1) == 0, R(2) == 0), R(3) == 0) disp('Balanced system') else disp('Out of balance system') end        "
},
{
  "id": "plane_statics_fig",
  "level": "2",
  "url": "planecase_sec_rigid_body_statics_chap_en.html#plane_statics_fig",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "planecase_sec_rigid_body_statics_chap_en-3-1-2",
  "level": "2",
  "url": "planecase_sec_rigid_body_statics_chap_en.html#planecase_sec_rigid_body_statics_chap_en-3-1-2",
  "type": "Listing",
  "number": "5.2.2",
  "title": "",
  "body": "  % vector of resultants = % [horizontal; vertical; moment] R = zeros(3,1); % function for the calculation of the moment of a generic force moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; 0]; B = [L; 0]; C = [L; L\/2]; % choice of pole POLE = A; % for each point a vector, Load = [F1; F2; M], is assigned % to be summed to the resultants' vector syms F; LoadA = [F; F; 0]; R = R + LoadA; R(3) = R(3) + moment(POLE, A, LoadA); R LoadB = [-F; -F; 0]; R = R + LoadB; R(3) = R(3) + moment(POLE, B, LoadB); R LoadC = [-F; 2*F; F*L]; R = R + LoadC; R(3) = R(3) + moment(POLE, C, LoadC); R if and(and(R(1) == 0, R(2) == 0), R(3) == 0) disp('Balanced system') else disp('Out of balance system') end   "
},
{
  "id": "constraints_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "constraints_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.3",
  "title": "constraints",
  "body": " constraints  A body or system of bodies is typically subjected to both applied loads and assigned constraint conditions. From a static point of view, the constraints are treated by representing the action exerted by the constraint in terms of forces or torques called constraint reactions . This procedure, as we will see, allows to obtain the free body diagram through which the body is represented under the action of two groups of static entities: the applied actions and the constraint reactions.  In the 2D case, in general, an applied constraint can give rise to 3 reaction components: The presence, in a point of the body, of all 3 components or only some of them depends on the type of constraint applied.    absence of constraint  It is the trivial case in which at a point there is no constraint applied, consequently it will not be possible to have any reaction component different than zero:      simple constraints   roller support     The presence of the roller support determines, from the static point of view, only a reaction force, , directed according to the axis of the roller support. Then, of the three reaction components, only the first two can be different from zero Furthermore, the direction of the reaction force is known and therefore the two components and are not independent of each other but linked by the relationship   Obviously if the roller support has a horizontal axis only can be different from zero: In the case of vertical axis     rotation lock     This constraint blocks the rotation of the body making possible only a non zero torque component. Therefore in the point of application of the constraint it is possible to have       double constraints   hinge support     The presence of the hinge support can be read as a reaction force whose direction is not known a priori, as in the case of the roller support. Therefore we will have the two reaction components, horizontal and vertical, possibly non-zero and independent     roller support with rotation lock     This device acts like a roller support and also, because of the constrained rotation, exerts a torque. Therefore the reaction components can be described as follows where   Also for this device if the axis is horizontal only can be different from zero: and in the case of vertical axis       triple constraints   fixed support     With the fixed support the constraint can react through all the three components which are independent from each other       summary  The following figures illustrate for the 2D case the graphic representation of the constraints and the possible presence of the reaction components , and .   Simple constraints.     Double constraints.     Triple constraints.    The roller support, with or without rotation lock, can be represented by an inclination different from and , in which case the rotation of the symbol also has a precise mechanical meaning in that the exerted reaction force is rotated by the same angle, giving rise to horizontal and vertical components, both possibly different from zero. The other constraints, however, give the reaction components indicated in previous figures regardless of any rotation applied in their graphic representation.     internal constraints  Unlike external constraints, internal constraints prescribe kinematic conditions at the points of contact between one or more bodies. Therefore, from a static point of view, they are treated in terms of constraint reactions exchanged by the bodies affected by the constraint condition. The figure shows one of the most recurring cases, namely the case of the internal hinge.      "
},
{
  "id": "carrello_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#carrello_statica_fig",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "doppiobipendolo_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#doppiobipendolo_statica_fig",
  "type": "Figure",
  "number": "5.3.2",
  "title": "",
  "body": "  "
},
{
  "id": "cerniera_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#cerniera_statica_fig",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": "  "
},
{
  "id": "bipendolo_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#bipendolo_statica_fig",
  "type": "Figure",
  "number": "5.3.4",
  "title": "",
  "body": "  "
},
{
  "id": "incastro_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#incastro_statica_fig",
  "type": "Figure",
  "number": "5.3.5",
  "title": "",
  "body": "  "
},
{
  "id": "statica_vicoli_semplici_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#statica_vicoli_semplici_fig",
  "type": "Figure",
  "number": "5.3.6",
  "title": "",
  "body": " Simple constraints.   "
},
{
  "id": "statica_vicoli_doppi_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#statica_vicoli_doppi_fig",
  "type": "Figure",
  "number": "5.3.7",
  "title": "",
  "body": " Double constraints.   "
},
{
  "id": "statica_vicoli_tripli_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#statica_vicoli_tripli_fig",
  "type": "Figure",
  "number": "5.3.8",
  "title": "",
  "body": " Triple constraints.   "
},
{
  "id": "constraints_sec_rigid_body_statics_chap_en-8-6",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#constraints_sec_rigid_body_statics_chap_en-8-6",
  "type": "Note",
  "number": "5.3.9",
  "title": "",
  "body": "The roller support, with or without rotation lock, can be represented by an inclination different from and , in which case the rotation of the symbol also has a precise mechanical meaning in that the exerted reaction force is rotated by the same angle, giving rise to horizontal and vertical components, both possibly different from zero. The other constraints, however, give the reaction components indicated in previous figures regardless of any rotation applied in their graphic representation. "
},
{
  "id": "statica_cerniera_interna_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_en.html#statica_cerniera_interna_fig",
  "type": "Figure",
  "number": "5.3.10",
  "title": "",
  "body": "  "
},
{
  "id": "free_body_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "free_body_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.4",
  "title": "free body diagrams",
  "body": " free body diagrams  The construction of the free body diagrams is obtained by modifying the scheme of the assigned static problem. In particular, the kinematic constraints are removed and the constraint reaction components associated with the removed constraints are introduced in their place. In this way a system, subjected only to static entities consisting of applied loads and constraint reactions, is obtained. The following video illustrates the procedure just described for some examples.          "
},
{
  "id": "analysis_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "analysis_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.5",
  "title": "static analysis",
  "body": " static analysis  The procedure used for the static analysis of body systems consists of the following operations.  Identification of the free body diagram for the system to be analyzed.  Writing of equilibrium equations that will be 3 times the number ( ) of bodies that make up the system ( ).  Static classification of the given system.  Calculation, if possible, of the constraint reaction components which will be equal in number to the degrees of kinematic constraint ( ) applied to the system.      static matrix  In static analysis the writing of equilibrium equations is the fundamental step which, in general terms, can be formalized in the following way. Consider a system characterized by equilibrium conditions, subjected to an assigned force system and constraining reaction components. The equilibrium conditions can be formulated through a linear system of the following type Where is the generic constraint reaction component (force or torque), is the force or torque component that acts on the equilibrium condition -th and is the contribution provided, for a unit value of the reaction , on the equilibrium condition -th. In matrix terms the system can be rewritten as follows: where sized , is called static matrix of the system, , sizeed , is the vector that collects the constraint reaction components (the unknowns of the system) and , sized , is the vector of the assigned external actions.     static classification  The typical use of the system is the calculation of the constraint reactions. But even in this case, as already done for the kinematic matrix, it is instructive to discuss the solution conditions of the system in order to derive mechanical considerations. Let , then the following cases may occur.    : isostatic system , the system admits a unique solution;  : hyperstatic system , the system admits infinite solutions;  : impossibile system , the system admits no solution.      degenerate system .       "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.6",
  "title": "application of static analysis to systems of bodies",
  "body": " application of static analysis to systems of bodies    cantilever beam  Consider a simple beam fixed at one end and subjected to a vertical force at the free end. The following figure shows the starting scheme and the free body diagram obtained by removing the fixed support and applying the related constraint reaction components ( ).     The analysis involves only one body, therefore it is possible to write 3 equilibrium equations ( ) which, taking as pole the end in the rotational equilibrium of the beam, can be expressed as follows Conditions which, in matrix form, give The system is evidently isostatic and the calculation of the constraint reaction components provides      supported beam  Consider a beam constrained in the manner shown in the figure and subjected to a vertical force in the middle. The same figure also shows the free body diagram obtained by removing the hinge and roller support and applying the related constraint reaction components ( ).     The presence of a single body determines the writing of 3 equations of equilibrium ( ) for which the extreme is assumed as pole for rotational equilibrium: Whose matrix form is Also in this case the simple inspection of the static matrix allows to establish the isostaticity of the system. The calculation of the constraint reaction components provides:    The MATLAB instructions that can be used for the calculation of unknown constraint reactions are reported below.   % resultants' vector = % [horizontal; vertical; torque] R = zeros(3,1); % function for the calculation of the moment moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; 0]; B = [L; 0]; C = [L\/2; 0]; % choice of pole POLE = A; % for each point the vector Load = [F1; F2; M] is assigned % and all the contribuitions are summed to R syms HA VA; LoadA = [HA; VA; 0]; R = R + LoadA; R(3) = R(3) + moment(POLE, A, LoadA); R syms VB; LoadB = [0; VB; 0]; R = R + LoadB; R(3) = R(3) + moment(POLE, B, LoadB); R syms F; CaricoC = [0; -F; 0]; R = R + LoadC; R(3) = R(3) + moment(POLE, C, LoadC); R % equilibrium equations eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % static matrix and vector of the assigned loads [B,b] = equationsToMatrix(eqns, [HA, VA, VB]); % degrees of freedom, n % constraint degrees, m [n,m] = size(B); % evaluation of the rank of B r = rank(B); % if the system is statically determined, the solution is calculated if and(r == min(m,n), m == n) x = linsolve(B,b); end HA = x(1) VA = x(2) VB = x(3)         simple frame  Consider the following simple frame subjected to a vertical force applied in the midle of the horizzontal beam. The constraints ( ) are applied at the basis of the vertical beams and their removal and the subsequent application of the constraint reaction components leads to the free body diagram shown in the figure.     Equilibrium equations ( ) are Equations which give the following matrix form of the system The system is isostatic and the linear system solution provides    The MATLAB instructions that can be used for the calculation of unknown constraint reactions are as follows.   % resultants' vector = % [horizontal; vertical; torque] R = zeros(3,1); % function for the calculation of the moment moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; 0]; B = [L; L\/2]; C = [L\/2; L]; % pole chosen POLE = C; % for each point the vector Load = [F1; F2; M] is assigned % and all the contribuitions are summed to R syms VA MA; LoadA = [0; VA; MA]; R = R + LoadA; R(3) = R(3) + moment(POLE, A, LoadA); R syms HB; LoadB = [HB; 0; 0]; R = R + LoadB; R(3) = R(3) + moment(POLE, B, LoadB); R syms F; LoadC = [0; -F; 0]; R = R + LoadC; R(3) = R(3) + moment(POLE, C, LoadC); R % equilibrium equations eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % static matrix and vector of the assigned loads [B,b] = equationsToMatrix(eqns, [VA, MA, HB]); % degrees of freedom, n % constraint degrees, m [n,m] = size(B); % evaluation of the rank of B r = rank(B); % if the system is statically determined, the solution is calculated if and(r == min(m,n), m == n) x = linsolve(B,b); end VA = x(1) MA = x(2) HB = x(3)         two bodies system  Consider the following system consisting of two bodies connected by an internal hinge. The removal of all the degrees of constraint ( ) and the subsequent application of the constraint reaction components leads to the free body diagram shown in the figure.     The system consists of two bodies ( ), allowing the writing of two groups of equations: the equilibrium equations for the body (pole in ) and those for the body (pole in ) Equations that can be rewritten through the following matrix form    The following MATLAB instructions can be used to calculate the rank of the static matrix.   syms l B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] rango = rank(B)      The calculation provides a rank equal to which verifies the condition . Being the system is isostatic. The linear system solution calculable with MATLAB       syms l F B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] f = [0; -F; -F*l; F; 0; 0] r = linsolve(B, -f)      furnishes the unique solution reported below    The previous two bodies system can be solved by using the following MATLAB instructions.   % resultants' vector = % [horizontal; vertical; torque] % for the first body R1 = zeros(3,1); % and for the second body R2 = zeros(3,1); % function for the calculation of the moment moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; L]; B = [2*L; L]; C = [4*L; 0]; D = [L; L]; E = [2*L; 0]; % choosing pole for the first body POLE = A; % point A (first body) syms HA VA; LoadA = [HA; VA; 0]; R1 = R1 + LoadA; R1(3) = R1(3) + moment(POLE, A, LoadA); % point D (first body) syms F; LoadD = [0; -F; 0]; R1 = R1 + LoadD; R1(3) = R1(3) + moment(POLE, D, LoadD); % point B (first body) syms HB VB; LoadB = [HB; VB; 0]; R1 = R1 + LoadB; R1(3) = R1(3) + moment(POLE, B, LoadB); % choosing pole for the second body POLE = B; % point B (second body) LoadB = [-HB; -VB; 0]; R2 = R2 + LoadB; R2(3) = R2(3) + moment(POLE, B, LoadB); % point E (second body) LoadE = [F; 0; 0]; R2 = R2 + LoadE; R2(3) = R2(3) + moment(POLE, E, LoadE); % point C (second body) syms HC VC; LoadC = [HC; VC; 0]; R2 = R2 + LoadC; R2(3) = R2(3) + moment(POLE, C, LoadC); % equilibrium equations eqns = [ R1(1) ==0, R1(2) == 0, R1(3)==0, R2(1) ==0, R2(2) == 0, R2(3)==0 ]; % static matrix and vector of the assigned loads [B,b] = equationsToMatrix(eqns, [HA, VA, HB, VB, HC, VC]); % degrees of freedom, n % constraint degrees, m [n,m] = size(B); % evaluation of the rank of B r = rank(B); % if the system is statically determined, the solution is calculated if and(r == min(m,n), m == n) x = linsolve(B,b); end HA = x(1) VA = x(2) HB = x(3) VB = x(4) HC = x(5) VC = x(6)       "
},
{
  "id": "statica_mensola_con_forza_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#statica_mensola_con_forza_fig",
  "type": "Figure",
  "number": "5.6.1",
  "title": "",
  "body": "  "
},
{
  "id": "statica_appoggiata_con_forza_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#statica_appoggiata_con_forza_fig",
  "type": "Figure",
  "number": "5.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_en-3-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#analysis_examples_sec_rigid_body_statics_chap_en-3-5-1-2",
  "type": "Listing",
  "number": "5.6.3",
  "title": "",
  "body": "  % resultants' vector = % [horizontal; vertical; torque] R = zeros(3,1); % function for the calculation of the moment moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; 0]; B = [L; 0]; C = [L\/2; 0]; % choice of pole POLE = A; % for each point the vector Load = [F1; F2; M] is assigned % and all the contribuitions are summed to R syms HA VA; LoadA = [HA; VA; 0]; R = R + LoadA; R(3) = R(3) + moment(POLE, A, LoadA); R syms VB; LoadB = [0; VB; 0]; R = R + LoadB; R(3) = R(3) + moment(POLE, B, LoadB); R syms F; CaricoC = [0; -F; 0]; R = R + LoadC; R(3) = R(3) + moment(POLE, C, LoadC); R % equilibrium equations eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % static matrix and vector of the assigned loads [B,b] = equationsToMatrix(eqns, [HA, VA, VB]); % degrees of freedom, n % constraint degrees, m [n,m] = size(B); % evaluation of the rank of B r = rank(B); % if the system is statically determined, the solution is calculated if and(r == min(m,n), m == n) x = linsolve(B,b); end HA = x(1) VA = x(2) VB = x(3)   "
},
{
  "id": "portale_isostatico_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#portale_isostatico_fig",
  "type": "Figure",
  "number": "5.6.4",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_en-4-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#analysis_examples_sec_rigid_body_statics_chap_en-4-5-1-2",
  "type": "Listing",
  "number": "5.6.5",
  "title": "",
  "body": "  % resultants' vector = % [horizontal; vertical; torque] R = zeros(3,1); % function for the calculation of the moment moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; 0]; B = [L; L\/2]; C = [L\/2; L]; % pole chosen POLE = C; % for each point the vector Load = [F1; F2; M] is assigned % and all the contribuitions are summed to R syms VA MA; LoadA = [0; VA; MA]; R = R + LoadA; R(3) = R(3) + moment(POLE, A, LoadA); R syms HB; LoadB = [HB; 0; 0]; R = R + LoadB; R(3) = R(3) + moment(POLE, B, LoadB); R syms F; LoadC = [0; -F; 0]; R = R + LoadC; R(3) = R(3) + moment(POLE, C, LoadC); R % equilibrium equations eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % static matrix and vector of the assigned loads [B,b] = equationsToMatrix(eqns, [VA, MA, HB]); % degrees of freedom, n % constraint degrees, m [n,m] = size(B); % evaluation of the rank of B r = rank(B); % if the system is statically determined, the solution is calculated if and(r == min(m,n), m == n) x = linsolve(B,b); end VA = x(1) MA = x(2) HB = x(3)   "
},
{
  "id": "statica_arcoatrecerniere_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#statica_arcoatrecerniere_fig",
  "type": "Figure",
  "number": "5.6.6",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_en-5-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#analysis_examples_sec_rigid_body_statics_chap_en-5-5-1-2",
  "type": "Listing",
  "number": "5.6.7",
  "title": "",
  "body": "  syms l B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] rango = rank(B)   "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_en-5-7-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#analysis_examples_sec_rigid_body_statics_chap_en-5-7-1-1",
  "type": "Listing",
  "number": "5.6.8",
  "title": "",
  "body": "  syms l F B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] f = [0; -F; -F*l; F; 0; 0] r = linsolve(B, -f)   "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_en-5-9-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_en.html#analysis_examples_sec_rigid_body_statics_chap_en-5-9-1-2",
  "type": "Listing",
  "number": "5.6.9",
  "title": "",
  "body": "  % resultants' vector = % [horizontal; vertical; torque] % for the first body R1 = zeros(3,1); % and for the second body R2 = zeros(3,1); % function for the calculation of the moment moment = @(X0, X, Load)... -Load(1)*(X(2)-X0(2))+Load(2)*(X(1)-X0(1)); % coordinates of the points on which the loads are applied syms L; A = [0; L]; B = [2*L; L]; C = [4*L; 0]; D = [L; L]; E = [2*L; 0]; % choosing pole for the first body POLE = A; % point A (first body) syms HA VA; LoadA = [HA; VA; 0]; R1 = R1 + LoadA; R1(3) = R1(3) + moment(POLE, A, LoadA); % point D (first body) syms F; LoadD = [0; -F; 0]; R1 = R1 + LoadD; R1(3) = R1(3) + moment(POLE, D, LoadD); % point B (first body) syms HB VB; LoadB = [HB; VB; 0]; R1 = R1 + LoadB; R1(3) = R1(3) + moment(POLE, B, LoadB); % choosing pole for the second body POLE = B; % point B (second body) LoadB = [-HB; -VB; 0]; R2 = R2 + LoadB; R2(3) = R2(3) + moment(POLE, B, LoadB); % point E (second body) LoadE = [F; 0; 0]; R2 = R2 + LoadE; R2(3) = R2(3) + moment(POLE, E, LoadE); % point C (second body) syms HC VC; LoadC = [HC; VC; 0]; R2 = R2 + LoadC; R2(3) = R2(3) + moment(POLE, C, LoadC); % equilibrium equations eqns = [ R1(1) ==0, R1(2) == 0, R1(3)==0, R2(1) ==0, R2(2) == 0, R2(3)==0 ]; % static matrix and vector of the assigned loads [B,b] = equationsToMatrix(eqns, [HA, VA, HB, VB, HC, VC]); % degrees of freedom, n % constraint degrees, m [n,m] = size(B); % evaluation of the rank of B r = rank(B); % if the system is statically determined, the solution is calculated if and(r == min(m,n), m == n) x = linsolve(B,b); end HA = x(1) VA = x(2) HB = x(3) VB = x(4) HC = x(5) VC = x(6)   "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.7",
  "title": "generalized section forces",
  "body": " generalized section forces  The state of internal stress of one-dimensional solids, or beams, is characterized by evaluating the generalized section forces at each point. In the plane case there are three components: axial force ( ) , shear force ( ) and bending moment ( ) . In order to come up to a simple definition of these three components, consider the following free body diagram regarding a balanced system of forces.   Suppose to separate the body into two parts by means of a plane passing through a generic point obtaining the following free body diagrams   where it is postulated that the two parts exchange, through the separation section, equal and opposite actions. However, these actions must be such as to satisfy the equilibrium equations on each obtained part. In particular, if we consider the part of length we obtain the following equations (pole for the rotation equilibrium placed in the abscissa ): System that provides the following solution for the unknown generalized section forces The same result would be obtained by applying the equilibrium equations to other part with length .   The separation process carried out can also be understood as the removal of the continuity constraint at point and the application of the \"constraint reactions\" associated with the constraint, of degree 3, removed.    The single sectioning operation must make it possible to obtain two distinct free bodies. If for this purpose one or more sectionings happen to be necessary, the obtained separated parts would lead to the formulation of hyperstatic problems.     generalized section forces sign convention  By applying the sectioning procedure twice in order to isolate a section of beam of infinitesimal length, it is possible to obtain the following diagram (where the height of the beam has also been made evident) useful for highlighting the convention currently used to define the positive sign for the generalized section forces (for clarity they are shown separately).        distributed loads  In order to complete the kinds of loads applicable to beam systems and also to make it possible to have a general treatment of the equilibrium diffrential equations presented in the next section, the case of distributed loads is discussed. To this end, consider the following scheme.     The scheme represents a cantilever beam subjected to a variable distributed load . The distributed load is measured as . The free body diagram shown at the top right of the figure allows writing the three equilibrium equations (horizontal, vertical and rotation using point as pole) providing: It is easy to realize that the integrals present in the equations have the meaning of the resultant of the applied distributed load and static moment with respect to point  where represents the centroid of the load with respect to an axis passing through , see the additional free body diagram shown at the bottom right of the figure. Therefore equilibrium equations can be rewritten as follows: Therefore in systems subjected to distributed loads it is possible to replace the latter with the respective resultants positioned in their centroids. It is observed that this substitution is correct only for the calculation of the constraint reactions and not for the calculation of the generalized cross forces which will be better described later.   Below are the MATLAB instructions for calculating the resultant and the centroid for some types of distributed load.   % constant ditributed load syms q l x; load(x, q) = q; np = 100; xv = 0:1\/np:1; qv = load(xv, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(load(x, q), x, 0, l) xq = int(load(x, q)*x, x, 0, l)\/Rq      % linear ditributed load syms q l x; load(x, q, l) = q\/l*x; np = 100; xv = 0:1\/np:1; qv = load(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(load(x, q, l), x, 0, l) xq = int(load(x, q, l)*x, x, 0, l)\/Rq      % quadratic ditributed load syms q l x; load(x, q, l) = q\/l^2*x^2; np = 100; xv = 0:1\/np:1; qv = load(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(load(x, q, l), x, 0, l) xq = int(load(x, q, l)*x, x, 0, l)\/Rq       "
},
{
  "id": "schema1_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#schema1_fig",
  "type": "Figure",
  "number": "5.7.1",
  "title": "",
  "body": "  "
},
{
  "id": "schema2_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#schema2_fig",
  "type": "Figure",
  "number": "5.7.2",
  "title": "",
  "body": "  "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_en-3",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#sollecitazioni_sec_rigid_body_statics_chap_en-3",
  "type": "Remark",
  "number": "5.7.3",
  "title": "",
  "body": " The separation process carried out can also be understood as the removal of the continuity constraint at point and the application of the \"constraint reactions\" associated with the constraint, of degree 3, removed.  "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_en-4",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#sollecitazioni_sec_rigid_body_statics_chap_en-4",
  "type": "Remark",
  "number": "5.7.4",
  "title": "",
  "body": " The single sectioning operation must make it possible to obtain two distinct free bodies. If for this purpose one or more sectionings happen to be necessary, the obtained separated parts would lead to the formulation of hyperstatic problems.  "
},
{
  "id": "convenzione_sollecitazioni_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#convenzione_sollecitazioni_fig",
  "type": "Figure",
  "number": "5.7.5",
  "title": "",
  "body": "  "
},
{
  "id": "ripartiti_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#ripartiti_fig",
  "type": "Figure",
  "number": "5.7.6",
  "title": "",
  "body": "  "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_en-6-5-1-2",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#sollecitazioni_sec_rigid_body_statics_chap_en-6-5-1-2",
  "type": "Listing",
  "number": "5.7.7",
  "title": "",
  "body": "  % constant ditributed load syms q l x; load(x, q) = q; np = 100; xv = 0:1\/np:1; qv = load(xv, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(load(x, q), x, 0, l) xq = int(load(x, q)*x, x, 0, l)\/Rq   "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_en-6-5-1-3",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#sollecitazioni_sec_rigid_body_statics_chap_en-6-5-1-3",
  "type": "Listing",
  "number": "5.7.8",
  "title": "",
  "body": "  % linear ditributed load syms q l x; load(x, q, l) = q\/l*x; np = 100; xv = 0:1\/np:1; qv = load(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(load(x, q, l), x, 0, l) xq = int(load(x, q, l)*x, x, 0, l)\/Rq   "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_en-6-5-1-4",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_en.html#sollecitazioni_sec_rigid_body_statics_chap_en-6-5-1-4",
  "type": "Listing",
  "number": "5.7.9",
  "title": "",
  "body": "  % quadratic ditributed load syms q l x; load(x, q, l) = q\/l^2*x^2; np = 100; xv = 0:1\/np:1; qv = load(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(load(x, q, l), x, 0, l) xq = int(load(x, q, l)*x, x, 0, l)\/Rq   "
},
{
  "id": "indefinte_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "indefinte_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.8",
  "title": "2D beam equilibrium differential equations",
  "body": " 2D beam equilibrium differential equations  The equilibrium equations for the beam have already been presented in and in the broader context which led to the construction of a complete 2D elastic beam model. Here the equations are obtained by other means, moreover the shear force is taken into account in a explict way.    formulation of the problem     Let us consider a beam subjected to generic loading conditions, let us assume to isolate a portion of the beam with infinitesimal length . The beam's portion thus identified is subjected to a series of actions shown in the figure and which, for clarity, are listed below:  generalized section forces, , e , relative to point along the beam axis;  generalized section forces, , e , relative to point ;  axial distributed load ;  transverse distributed load .       equilibrium conditions  The obtained scheme is essentially a free body diagram for which it is possible to impose the following equations of equilibrium (the pole used for the rotational equilibrium is placed at the abscissa ) The hypothesis of continuity of the one-dimensional solid and of the quantities defined on it, allows to use Taylor series truncated to the first order of the generalized section forces evaluated on the section and to obtain therefore where the quantities , and denote the derivatives of the generalized section forces with respect to the abscissa . Making the necessary simplifications and neglecting the term because of higher order than the first, we obtain the equilibrium differential equations for the 2D beam listed below .      Axial direction equilibrium:     Transverse direction equilibrium:     Rotational equlibrium:          general integrals  The integration of the equilibrium differential equations gives the following general integrals valid on portions of beam along which the generalized section forces are analytic in the variable : The integration constants , and are to be evaluated on the basis of the assigned boundary conditions.   and case  In order to illustrate the evaluation of the integration constants, consider the following free body diagram.     For the absence of distributed loads the general integrals give Therefore we have a constant pattern for and and linear for . By imposing the boundary conditions it can be obtained Then the analytical expression of the generalized section forces becomes The same result would have been obtained using the boundary conditions       general integrals for constant distributed loads     The diagram shows the case of a beam of which the values of the stress components at the extreme are known and is subjected to constant distributed loads. In this case the general integrals , and take the following expressions Expressions showing a linear pattern for axial and shear forces and a parabolic pattern for the bending moment.   "
},
{
  "id": "indefinite_trave_piana_fig",
  "level": "2",
  "url": "indefinte_sec_rigid_body_statics_chap_en.html#indefinite_trave_piana_fig",
  "type": "Figure",
  "number": "5.8.1",
  "title": "",
  "body": "  "
},
{
  "id": "schema1bis_fig",
  "level": "2",
  "url": "indefinte_sec_rigid_body_statics_chap_en.html#schema1bis_fig",
  "type": "Figure",
  "number": "5.8.2",
  "title": "",
  "body": "  "
},
{
  "id": "schema_generico_fig",
  "level": "2",
  "url": "indefinte_sec_rigid_body_statics_chap_en.html#schema_generico_fig",
  "type": "Figure",
  "number": "5.8.3",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.9",
  "title": "generalized section forces calculation and diagrams",
  "body": " generalized section forces calculation and diagrams  The static analysis presented in the previous sections allows to evaluate the constraint reactions for an isostatic system. Starting from this information and using general integrals , and it is possible to proceed with the calculation of the generalized section forces for beams subjected to generic forces \/ torques and at most constant distributed loads (for generic distributed loads it is necessary to use the , and ).  The calculation procedure will be illustrated by discussing some examples and using MATLAB to carry out the required calculations and display the results. Given the simplicity of the schemes considered, the explicit calculation of the constraint reactions is omitted.    Consider the following free body diagram whose satisfaction of the equilibrium conditions is easy to be checked.     It is evident from the diagram that the values assumed by the section forces for are Using the general integrals, we obtain the following expressions of the generalized section forces as a function of the abscissa placed along the axis of the beam    The latter results can be plotted using the following MATLAB instructions.   % axial force diagram syms N(x, F); N(x,F) = F; np = 100; Xv = 0:1\/np:1; Nv = N(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % shear force diagram syms T(x,F); T(x,F) = F; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M(x,F,l); M(x,F,l) = -F*l + F*x; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')      In this way we obtain the following diagrams for axial force (green), shear force (blue) and bending moment (red).       Note how the representation of the bending moment is carried out by changing the direction of the vertical axis of the diagram. This choice is used in professional practice to \"visualize\" which of the two edges of the beam, lower or upper, is under tensile condition.     Let us consider the following scheme regarding a cantilever beam subjected to a constant distributed load.     The free body diagram and the related computation of the constraint reactions provide the following result.     Information that can be used in writing general integrals , , , and obtain the following expression of the generalized section forces along the beam axis .    The latter results can be plotted using the following MATLAB instructions.   % axial force diagram syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % shear force diagram syms T(x,q,l); T(x,q,l) = -q*x+q*l; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M(x,q,l); M(x,q,l) = -q*l^2\/2 + q*l*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')              Let us consider a supported beam subjected to a distributed load.     Constraint reactions are calculated through the free body diagram as follows.     The obtained solution allows the writing of the following conditions regarding to the end of the beam from which it is easy to obtain the expression of generalized section forces along the beam:    It is now possible to plot the diagrams of obtained generalized section forces.   % axial force diagram syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % shear force diagram syms T(x,q,l); T(x,q,l) = -q*x+q*l\/2; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M(x,q,l); M(x,q,l) = q*l\/2*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')              Let us consider a supported beam subjected to a concentrated force in the middle point.     The evaluation of the constraint reactions furnishes the following result.     Compared to the previous cases, the current case is different because the force concentrated in the middle determines a discontinuity of the shear and therefore, being , also a discontinuity of the derivative of the bending moment. Therefore the general integrals , and are not directly applicable to whole beam but they must be applied separately to the and beam portions. In this way, two descriptions of and are obtained, one description valid for the portion and the other one valid for the portion.   portion, : which give    portion, : which give         % shear force diagram syms T_ac(x,F) T_cb(x,F); T_ac(x,F) = F\/2; T_cb(x,F) = -F\/2; np = 50; Xv = 0:0.5\/np:0.5; Tv_ac = T_ac(Xv, 1); Tv_cb = T_cb(Xv, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Tv_ac,'b', Xv_ac,Beam,'k', ... Xv_cb,Tv_cb,'b', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M_ac(x,F) M_cb(x,F,l); M_ac(x,F) = F\/2*x; M_cb(x,F,l) = -F\/2*x+F*l\/4; np = 50; Xv = 0:0.5\/np:0.5; Mv_ac = M_ac(Xv, 1); Mv_cb = M_cb(Xv, 1, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Mv_ac,'r', Xv_ac,Beam,'k', ... Xv_cb,Mv_cb,'r', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')            "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-4-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-4-2",
  "type": "Figure",
  "number": "5.9.1",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-4-4-1-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-4-4-1-2",
  "type": "Listing",
  "number": "5.9.2",
  "title": "",
  "body": "  % axial force diagram syms N(x, F); N(x,F) = F; np = 100; Xv = 0:1\/np:1; Nv = N(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % shear force diagram syms T(x,F); T(x,F) = F; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M(x,F,l); M(x,F,l) = -F*l + F*x; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-5-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-5-2",
  "type": "Figure",
  "number": "5.9.3",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-5-4",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-5-4",
  "type": "Figure",
  "number": "5.9.4",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-5-6-1-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-5-6-1-2",
  "type": "Listing",
  "number": "5.9.5",
  "title": "",
  "body": "  % axial force diagram syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % shear force diagram syms T(x,q,l); T(x,q,l) = -q*x+q*l; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M(x,q,l); M(x,q,l) = -q*l^2\/2 + q*l*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-6-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-6-2",
  "type": "Figure",
  "number": "5.9.6",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-6-4",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-6-4",
  "type": "Figure",
  "number": "5.9.7",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-6-6-1-1",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-6-6-1-1",
  "type": "Listing",
  "number": "5.9.8",
  "title": "",
  "body": "  % axial force diagram syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % shear force diagram syms T(x,q,l); T(x,q,l) = -q*x+q*l\/2; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M(x,q,l); M(x,q,l) = q*l\/2*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-7-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-7-2",
  "type": "Figure",
  "number": "5.9.9",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-7-4",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-7-4",
  "type": "Figure",
  "number": "5.9.10",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-7-6-1-1",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_en.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_en-7-6-1-1",
  "type": "Listing",
  "number": "5.9.11",
  "title": "",
  "body": "  % shear force diagram syms T_ac(x,F) T_cb(x,F); T_ac(x,F) = F\/2; T_cb(x,F) = -F\/2; np = 50; Xv = 0:0.5\/np:0.5; Tv_ac = T_ac(Xv, 1); Tv_cb = T_cb(Xv, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Tv_ac,'b', Xv_ac,Beam,'k', ... Xv_cb,Tv_cb,'b', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) % bending moment diagram syms M_ac(x,F) M_cb(x,F,l); M_ac(x,F) = F\/2*x; M_cb(x,F,l) = -F\/2*x+F*l\/4; np = 50; Xv = 0:0.5\/np:0.5; Mv_ac = M_ac(Xv, 1); Mv_cb = M_cb(Xv, 1, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Mv_ac,'r', Xv_ac,Beam,'k', ... Xv_cb,Mv_cb,'r', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "exercises_sec_rigid_body_statics_chap_en",
  "level": "1",
  "url": "exercises_sec_rigid_body_statics_chap_en.html",
  "type": "Section",
  "number": "5.10",
  "title": "exercises",
  "body": " exercises     Self assessment quiz about the topics covered in the chapter.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
