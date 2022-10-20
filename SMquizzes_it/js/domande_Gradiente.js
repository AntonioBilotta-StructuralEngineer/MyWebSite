// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Il gradiente della trasformazione, F, è ... ",
        answer: "",
        options: [
            "una cosa strana",
            "una trasformazione lineare",
            "espressione dei gradi della trasformazione",
            "una misura della deformazione",
        ]
    },
    {
        numb: 2,
        question: "F è una mappatura che lega ...",
        answer: "il vettore dX al vettore dx",
        options: [
            "un punto X ad un punto x",
            "un punto x ad un vettore dx",
            "il vettore dX alla sua area",
            "il vettore dX al vettore dx",
        ]
    },
    {
        numb: 3,
        question: "Quale tipo di operazione è richiesta per calcolare F?",
        answer: "Derivata parziale di ciascun componente della trasformazione rispetto a ciascuna coordinata X",
        options: [
            "Divisione di dx per dX",
            "Portare al limite il rapporto dx su dX",
            "Derivata parziale di ciascun componente della trasformazione rispetto a ciascuna coordinata X",
            "Derivata totale di x rispetto a X",
        ]
    },
    {
        numb: 4,
        question: "Perché il determinante di F è importante?",
        answer: "Ci consente di verificare l'ammissibilità della trasformazione",
        options: [
            "È facile calcolarlo",
            "Ci consente di verificare l'ammissibilità della trasformazione",
            "È necessario per risolvere il sistema lineare associato alla trasformazione",
            "Ci consente di verificare se la trasformazione è definita positiva",
        ]
    },
    {
        numb: 5,
        question: "Il determinante di F ci consente di calcolare ...",
        answer: "il fattore di scala dei volumi elementari",
        options: [
            "la soluzione del sistema lineare della trasformazione",
            "la lunghezza di dx rispetto a dX",
            "il grado di ammissibilità della trasformazione",
            "il fattore di scala dei volumi elementari",
        ]
    },
    {
        numb: 6,
        question: "Se il determinante di F è uguale a 1 la trasformazione è ...",
        answer: "isocorica",
        options: [
            "storica",
            "isocorica",
            "isogeometrica",
            "isonormale",
        ]
    },
    {
        numb: 7,
        question: "Qualifica la seguente istruzione F_ij = dx_i / dX_j (il simbolo '_' viene usato per indicare un indice di pedice)",
        answer: "Assolutamente vera",
        options: [
            "In qualche misura vera",
            "Assolutamente vera",
            "Leggermente vera",
            "Assolutamente non vera",
        ]
    },
    {
        numb: 8,
        question: "Utilizzando MATLAB valuta il determinante del tensore F associato della trasformazione x1 = -2 * X1 + 2 * X2-3 * X3, x2 = -X1 + X2 + 3 * X3, x3 = 2 * X1-X3",
        answer: "18",
        options: [
            "2*X1*X2*X3",
            "15",
            "18",
            "-18",
        ]
    },
    {
        numb: 9,
        question: "Utilizzare MATLAB per calcolare il determinante del tensore F associato alla trasformazione x1 = -2 * X1 ^ 2-3 * X3 * X2, x2 = X1 * X2 * X3, x3 = 2 * X1-X3",
        answer: "4*X1^2*X3 - 3*X2*X3^2",
        options: [
            "2*X1*X2*X3",
            "4*X1^2*X3 - 3*X2*X3^2",
            "X1^2*X3 - 5*X2*X3^2",
            "18",
        ]
    },
];