// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Cos'è una forza concentrata applicata?",
        answer: "Un vettore, definito da lunghezza e direzione, con relativo punto di applicazione",
        options: [
            "Un forza molto forte applicata in un punto",
            "Una forza che sta pensando a qualcosa",
            "Un vettore, definito da lunghezza e direzione, con relativo punto di applicazione",
            "L'atto di applicazione di un vettore forza"
        ]
    },
    {
        numb: 2,
        question: "Cosa dice la prima legge di Newton?",
        answer: "Un corpo non soggetto a forze o soggetto a forze la cui risultante è nulla, permane nel suo stato di quiete o continua a muoversi di moto rettilineo uniforme",
        options: [
            "Nulla si crea, nulla si distrugge ma tutto si trasforma",
            "Un corpo non soggetto a forze o soggetto a forze la cui risultante è nulla, permane nel suo stato di quiete o continua a muoversi di moto rettilineo uniforme",
            "La forza agente su un corpo è direttamente proporzionale all'accelerazione",
            "Se un corpo esercita una forza su un secondo corpo, allora il secondo esercita sul primo una forza uguale e contraria"
        ]
    },
    {
        numb: 3,
        question: "Cos'è la risultante delle forze applicate?",
        answer: "La somma di tutte le forze applicate al sistema",
        options: [
            "La somma di tutte le forze applicate al sistema",
            "La forza di risulta applicata al sistema",
            "Il risultato di tutto ciò che accade al sistema"
        ]
    },
    {
        numb: 4,
        question: "Si F una forza applicata in X il suo momento è valutabile mediante una delle seguenti formule, quale? (notazione MATLAB)",
        answer: "cross(X-X0, F)",
        options: [
            "F*(X-X0)",
            "norm(F)*norm(X-X0)",
            "cross(X-X0, F)",
            "cross(F, X-X0)"
        ]
    },
    {
        numb: 5,
        question: "Due forze uguali ed opposte, sia F la loro l'intensità, e con rette di azione distanti di una quantità pari a b, esercitano un momento che ha intensità pari a ... (notazione MATLAB)",
        answer: "F*b",
        options: [
            "F*b",
            "cross(b, F)",
            "dot(F, b)",
            "F+b"
        ]
    },
    {
        numb: 6,
        question: "Quante sono le equazioni vettoriali di equilibrio in 3D?",
        answer: "2",
        options: [
            "6",
            "1",
            "2",
            "3"
        ]
    },
    {
        numb: 7,
        question: "Quante sono le equazioni scalari di equilibrio in 3D?",
        answer: "6",
        options: [
            "6",
            "3",
            "2",
            "1"
        ]
    },
    {
        numb: 8,
        question: "Quante sono le equazioni scalari di equilibrio in 2D?",
        answer: "3",
        options: [
            "1",
            "2",
            "3"
        ]
    },
    {
        numb: 9,
        question: "Una reazione vincolare è ...",
        answer: "l'azione statica esercitata da un vincolo",
        options: [
            "la risposta scomposta di un vincolo",
            "quello che accade se applichi un'azione ad un vincolo",
            "la forza applicata al vincolo",
            "l'azione statica esercitata da un vincolo"
        ]
    },
    {
        numb: 10,
        question: "In che relazione stanno il grado cinematico di un vincolo e il numero di reazioni vincolari ad esso associate?",
        answer: "Sono uguali",
        options: [
            "Sono diversi",
            "Sono uguali",
            "Spesso sono uguali ma il punto di applicazione del vincolo può cambiare la situazione"
        ]
    },
    {
        numb: 11,
        question: "Cos'è il diagramma di corpo libero?",
        answer: "Lo schema del corpo soggetto ai carichi applicati e alle reazioni vincolari",
        options: [
            "Lo schema di un corpo in moto libero",
            "Il corpo liberato dai vincoli applicati",
            "Il corpo soggetto a tutti i carichi applicati",
            "Lo schema del corpo soggetto ai carichi applicati e alle reazioni vincolari"
        ]
    },
    {
        numb: 12,
        question: "La matrice statica mette in relazione ...",
        answer: "reazioni vincolari e carichi applicati",
        options: [
            "forze e momenti applicati",
            "reazioni vincolari e carichi applicati",
            "carichi esterni e sollecitazioni interne"
        ]
    },
    {
        numb: 13,
        question: "Che differenza c'è fra un sistema isostatico ed uno iperstatico?",
        answer: "Il sistema iperstatico ha a disposizione infinite possibilità per realizzare l'equilibrio e quello isostatico una sola",
        options: [
            "Il sistema isostatico è meno equilibrato di quello iperstatico",
            "Il sistema iperstatico ha troppi vincoli e quello isostatico un numero equo di vincoli",
            "Il sistema iperstatico ha a disposizione infinite possibilità per realizzare l'equilibrio e quello isostatico una sola"
        ]
    }
];