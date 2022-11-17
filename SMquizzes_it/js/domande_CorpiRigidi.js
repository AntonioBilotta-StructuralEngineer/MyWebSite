// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Definizione di corpo rigido ...",
        answer: "corpo i cui punti mantengono il distanziamento iniziale",
        options: [
            "corpo i cui punti si allontanano in modo poco flessibile",
            "corpo i cui punti si deformano in modo intransigente",
            "corpo i cui punti mantengono il distanziamento iniziale",
            "corpo i cui punti non ruotano affatto"
        ]
    },
    {
        numb: 2,
        question: "A quale dei seguenti oggetti in moto applicheresti l'ipotesi di corpo rigido?",
        answer: "Palla da bowling che rotola",
        options: [
            "Busta piena d'acqua lanciata dal balcone",
            "Palla da bowling che rotola",
            "Attrezzo di bungee jumping appeso al ponte dell'Unical",
        ]
    },
    {
        numb: 3,
        question: "La cinematica di un corpo rigido è descritta da due quantità, quali?",
        answer: "Traslazione del polo e rotazione intorno al polo",
        options: [
            "Polo e rotazione propria",
            "Rotazione infinitesima e traslazione pura",
            "Rotazione intorno al polo e distanziamento dal polo",
            "Traslazione del polo e rotazione intorno al polo"
        ]
    },
    {
        numb: 4,
        question: "La rotazione rigida è ...",
        answer: "un campo di rotazione costante in ogni punto del corpo",
        options: [
            "un campo di rotazione infinitesima",
            "un campo di rotazione costante in ogni punto del corpo",
            "un campo di rotazione relativo al polo scelto",
            "il campo di rotazione tipico dei corpi rigidi"
        ]
    },
    {
        numb: 5,
        question: "Quanti gradi di libertà sono necessari per descrivere la cinematica 3D di un corpo rigido?",
        answer: "6",
        options: [
            "3",
            "3+1",
            "6",
            "5.5"
        ]
    },
    {
        numb: 6,
        question: "Quanti gradi di libertà sono necessari per descrivere la cinematica 2D di un corpo rigido?",
        answer: "3",
        options: [
            "2",
            "6",
            "4",
            "3"
        ]
    },
    {
        numb: 7,
        question: "Quanti gradi di libertà sono necessari per descrivere la cinematica 2D di un sistema composto da N corpi rigidi?",
        answer: "3*N",
        options: [
            "N",
            "N+N",
            "6*N",
            "3*N"
        ]
    },
    {
        numb: 8,
        question: "Che cos'è un vincolo cinematico?",
        answer: "un dispositivo che limita il moto di un corpo",
        options: [
            "uno dei tanti vincoli imposti di recente dal governo",
            "un'opzione del marvel cinematic universe",
            "un dispositivo che limita il moto di un corpo",
            "la connessione tra due corpi"
        ]
    },
    {
        numb: 9,
        question: "Il grado di un vincolo cinematico si riferisce a ...",
        answer: "il numero di equazioni associate al vincolo",
        options: [
            "il numero di equazioni associate al vincolo",
            "la forza del vincolo",
            "il grado di parentela o congiunzione del vincolo",
            "il numero di gradi di libertà del vincolo"
        ]
    },
    {
        numb: 10,
        question: "I gradi di vincolo imposti ad un sistema di corpi rigidi è pari alla somma dei gradi dei singoli vincoli applicati.",
        answer: "Vero",
        options: [
            "Falso",
            "Vero",
            "Opinabile",
            "Dipende"
        ]
    },
    {
        numb: 11,
        question: "Nel piano, quanti vincoli esterni di grado 3 conosci?",
        answer: "1",
        options: [
            "4",
            "2",
            "3",
            "1"
        ]
    },
    {
        numb: 12,
        question: "Quale dei seguenti vincoli è di grado 1?",
        answer: "Carrello",
        options: [
            "Cerniera",
            "Carrello",
            "Bipendolo",
            "Incastro"
        ]
    },
    {
        numb: 13,
        question: "Quale dei seguenti vincoli è di grado 2?",
        answer: "Bipendolo",
        options: [
            "Bipendolo",
            "Carrello",
            "Incastro",
            "Doppio bipendolo"
        ]
    },
    {
        numb: 14,
        question: "Un vincolo interno è ...",
        answer: "un vincolo che connette 2 o più corpi",
        options: [
            "un vincolo contenuto dentro al corpo",
            "un vincolo non chiaramente visibile",
            "un vincolo di segno opposto ad uno esterno",
            "un vincolo che connette 2 o più corpi"
        ]
    },
    {
        numb: 15,
        question: "Sia A (m x n) la matrice cinematica di un sistema di corpi rigidi. Quale delle seguenti affermazioni è vera?",
        answer: "n è pari al numero complessivo di gradi di libertà",
        options: [
            "n+m deve essere pari al rango di A",
            "m è pari al numero complessivo di gradi di libertà",
            "A è una matrice simmetrica",
            "n è pari al numero complessivo di gradi di libertà"
        ]
    },
    {
        numb: 16,
        question: "Sia A (m x n) la matrice cinematica di un sistema di corpi rigidi. Quale delle seguenti affermazioni è falsa?",
        answer: "se m == n il sistema è risolvibile",
        options: [
            "se m < n di n il sistema labile",
            "se m == n e rango(A) == m il sistema è determinato",
            "se m == n il sistema è risolvibile",
            "se m > n e rango(A) == n il sistema è impossibile"
        ]
    },

];