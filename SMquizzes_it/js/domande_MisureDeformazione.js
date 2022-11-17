// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Siano u e v dei vettori (2x1); siano A e B delle matrici (2x2). Utilizzando variabili simboliche valutare con MATLAB quale delle seguenti relazioni è falsa",
        answer: "(A*B).' = A.'*B.'",
        options: [
            "u.'*(A*v) = (A.'*u).'*v",
            "(A*B).' = B.'*A.'",
            "(A*B).' = A.'*B.'",
            "(A*B)*u = A*(B*u)"
        ]
    },
    {
        numb: 2,
        question: "Sia R la matrice di rotazione di 60 gradi in senso antiorario nel piano. Si T una matrice (2x2) simmetrica definita in termini simbolici ad I la matrice identità. Utilizzando MATLAB si stabilisca quale delle seguenti relazioni è falsa.",
        answer: "(T*R).'*T*R.' = T^2",
        options: [
            "R.'*R = I",
            "T.' = T",
            "(T*R).'*T*R.' = T^2",
            "T*R*(T*R).' = T^2"
        ]
    },
    {
        numb: 3,
        question: "Sia F il il gradiente della trasformazione e siano U, V ed R i tensori che definiscono la sua decomposizione polare. Qual'è il modo corretto e più semplice per calcolare il tensore di Cauchy Green?",
        answer: "F.'*F",
        options: [
            "U*U",
            "F.'*F",
            "F*F",
            "(R.'*F)^2"
        ]
    },
    {
        numb: 4,
        question: "Rispetto alle base costituita dalle direzioni principali di U, la diagonale principale del tensore di Cauchy-Green contiene ...",
        answer: "il quadrato degli allungamenti principali",
        options: [
            "la somma degli allungamenti principali",
            "il trasposto degli allungamenti principali",
            "il quadrato degli allungamenti principali",
            "il quadrato degli allungamenti lungo le direzioni individuate dalla base canonica"
        ]
    },
    {
        numb: 5,
        question: "Quale delle seguenti espressioni consente di calcolare il tensore di Green-Lagrange? (C è il tensore di Cauchy, I il tensore identità, F il gradiente della trasformazione, U il tensore destro della deformazione)",
        answer: "(C - I) / 2",
        options: [
            "(C - I) / 2",
            "F*F/2",
            "C/2+I/2",
            "(F*F - I) / 2"
        ]
    },
    {
        numb: 6,
        question: "Il tensore della deformazione infinitesima è un'approssimazione del ...",
        answer: "tensore di Green-Lagrange",
        options: [
            "tensore U",
            "tensore di Cauchy-Green",
            "tensore di Green-Lagrange",
            "tensore F"
        ]
    },
    {
        numb: 7,
        question: "Che legame esiste fra il tensore della deformazione infinitesima e il gradiente dello spostamento?",
        answer: "È la parte simmetrica del gradiente",
        options: [
            "È una media del gradiente",
            "È la somma del trasposto del gradiente",
            "È un'approssimazione del gradiente",
            "È la parte simmetrica del gradiente"
        ]
    },
    {
        numb: 8,
        question: "La parte emisimmetrica del gradiente dello spostamento rappresenta ...",
        answer: "il tensore della rotazione infinitesima",
        options: [
            "il tensore della rotazione infinitesima",
            "un contributo ulteriore alla deformazione",
            "la parte emisimmetrica della deformazione",
            "un tensore emisimmetrico residuale"
        ]
    },
];