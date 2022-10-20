// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Cos'è il teorema di decomposizione polare?",
        answer: "Riguarda la decomposizione moltiplicativa del gradiente della trasformazione",
        options: [
            "È usato per cercare il polo di rotazione di una trasformazione",
            "Riguarda la decomposizione moltiplicativa del gradiente della trasformazione",
            "Riguarda l'interazione magnetica tra i poli",
            "Riguarda la decomposizione del moto rispetto ad un polo",
        ]
    },
    {
        numb: 2,
        question: "Quali sono gli ingredienti di base della decomposizione polare?",
        answer: "Tensore di rotazione, tensore destro della deformazione e tensore sinistro della deformazione",
        options: [
            "Tensore di rotazione destro, tensore di rotazione sinistro e tensore di deformazione",
            "Tensore gradiente destro e tensore gradiente sinistro",
            "Tensore delle direzioni principali e tensore di rotazione",
            "Tensore di rotazione, tensore destro della deformazione e tensore sinistro della deformazione",
        ]
    },
    {
        numb: 3,
        question: "Il tensore della rotazione è ...",
        answer: "un tensore ortogonale proprio",
        options: [
            "un tensore ortogonale proprio",
            "un tensore ortogonale",
            "un tensore destro proprio",
            "un tensore definito positivo",
        ]
    },
    {
        numb: 4,
        question: "I tensori della deformazione U e V sono ...",
        answer: "tensori definiti positivi",
        options: [
            "tensori non definiti",
            "tensori definiti e non zero",
            "tensori definiti positivi",
            "tensori ortogonali impropri",
        ]
    },
    {
        numb: 5,
        question: "Dati F = [1/4 -5/4; 2 1] e R = [0,3590 -0,9333; 0.9333 0.3590], qual è il tensore destro della deformazione, U?",
        answer: "U = [1.9564 0.4846; 0.4846 1.5257]",
        options: [
            "U = [1.9564 0.4846; 0.4846 1.5257]",
            "U = [-1.9564 0.4846; 0.4846 -1.5257]",
            "U = [2.9564 0.4846; 0.4846 1.7577]",
            "U = [1.9564 0.4846; -0.4846 1.5257]",
        ]
    },
    {
        numb: 6,
        question: "Dati F=[1/4 -5/4; 2 1] e R = [0.3590 -0.9333; 0.9333 0.3590], qual è il tensore sinistro della deformazione, V?",
        answer: "V = [1.2564 -0.2153; -0.2153 2.2256]",
        options: [
            "V = [2.9564 0.4846; 0.4846 1.7577]",
            "V = [1.2564 0.2153; 0.2153 2.2256]",
            "V = [1.2564 0.2153; 0.4846 -1.5257]",
            "V = [1.2564 -0.2153; -0.2153 2.2256]",
        ]
    },
    {
        numb: 7,
        question: "Dato F = [2 0; 0 1], qual è il tensore di rotazione relativo alla sua decomposizione polare?",
        answer: "R = [1 0; 0 1]",
        options: [
            "R = [0 0; 0 0]",
            "R = [1 -1; 1 1]",
            "R = [1 0; 0 1]",
            "R = [0 -1; 1 0]",
        ]
    },
    {
        numb: 8,
        question: "Dati F=[1/4 -5/4; 2 1] e R = [0.3590 -0.9333; 0.9333 0.3590], calcolare la matrice A = transpose(F)*F utilizzando MATLAB, quindi scegliere quale delle seguenti affermazioni è corretta.",
        answer: "",
        options: [
            "A = R*R",
            "A = U*V",
            "A = (R*U) * (V*R)",
            "A = U*U",
        ]
    },
];