// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Che cos'è una trasformazione per uno studente di Meccanica dei Solidi?",
        answer: "Un'operazione di mappatura da un vettore a un altro vettore",
        options: [
            "L'alterazione genetica di una cellula derivante dall'assorbimento diretto e dall'incorporazione di materiale genetico esogeno",
            "Il processo di cambiamento di energia da una forma all'altra",
            "Un'operazione di mappatura da un vettore a un altro vettore",
            "Il processo magico di cambiamento della forma fisica"
        ]
    },
    {
        numb: 2,
        question: "Una trasformazione lineare è una mappatura che ...",
        answer: "conserva le operazioni di addizione e moltiplicazione per uno scalare",
        options: [
            "conserva le operazioni di addizione e moltiplicazione per uno scalare",
            "si applica solo alle linee",
            "preserva il prodotto scalare",
            "combina solo i vettori lineari"
        ]
    },
    {
        numb: 3,
        question: "Utilizzando MATLAB trova quale delle seguenti trasformazioni è lineare",
        answer: "T = @(X) [X(1)+X(2); X(2)-X(1)];",
        options: [
            "T = @(X) [X(1)^2; X(2)*X(1)];",
            "T = @(X) [2+X(2); X(2)+X(1)];",
            "T = @(X) [X(1)+X(2); X(2)-X(1)];",
            "T = @(X) [(X(2)+1)^2; 4*X(2)];"
        ]
    },
    {
        numb: 4,
        question: "Qual è la trasformazione associata alla matrice M = [0 -1; 4 1]?",
        answer: "T = @(X) [-X(2); X(2)+4*X(1)];",
        options: [
            "T = @(X) [-X(2); X(2)+4*X(1)];",
            "T = @(X) [X(1); 1.5*X(2)];",
            "T = @(X) [-X(2)^2; X(2)-4*X(1)];",
            "T = @(X) [X(1)+X(2); X(2)-X(1)];"
        ]
    },
];