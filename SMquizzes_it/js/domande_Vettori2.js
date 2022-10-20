// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Per verificare l'ortogonalità tra due vettori è utile ...",
        answer: "calcolarne il prodotto scalare",
        options: [
            "disegnarli",
            "calcolarne il prodotto vettoriale",
            "calcolarne il prodotto scalare",
            "calcolarne il prodotto triplo"
        ]
    },
    {
        numb: 2,
        question: "La base canonica è costituita da 3 vettori ...",
        answer: "Reciprocamente ortogonali e di norma canonica",
        options: [
            "Che pagano il canone TV",
            "Di lunghezza unitaria",
            "Reciprocamente ortogonali e di norma canonica",
            "Reciprocamente ortogonali e di norma unitaria",
        ]
    },
    {
        numb: 3,
        question: "Considera la base canonica formata dai vettori e1, e2 ed e3. Il prodotto vettriolae (e2 x e1) dà ...",
        answer: "-e3",
        options: [
            "e2",
            "e1",
            "-e3",
            "e3"
        ]
    },
    {
        numb: 4,
        question: "Considera la base canonica formata dai vettori e1, e2 ed e3. Il prodotto scalare tra e1 ed e3 dà ...",
        answer: "0",
        options: [
            "-1",
            "0",
            "1",
            "2"
        ]
    },
    {
        numb: 5,
        question: "Considera la base canonica formata dai vettori e1, e2 ed e3. Il prodotto triplo tra e1, e2 ed e3 dà ...",
        answer: "1",
        options: [
            "-1",
            "0",
            "1",
            "3"
        ]
    },
    {
        numb: 6,
        question: "Dati due vettori, u e v, utilizzare MATLAB per controllare l'istruzione (u . v) = (v . u) (Eseguire il controllo richiesto usando espressioni simboliche (esempio: u = [u1 u2 u3]))",
        answer: "Assolutamente vero",
        options: [
            "Assolutamente vero",
            "In qualche misura vero",
            "Leggermente vero",
            "Assolutamente non vero"
        ]
    },
    {
        numb: 7,
        question: "Dati tre vettori, u, v e w e dati anche due scalari s1 e s2, utilizzare MATLAB per controllare l'istruzione u . (s1 v + s2 w) = s1 (u . v) + s2 (u . w) (Eseguire il controllo richiesto usando espressioni simboliche (esempio: u = [u1 u2 u3])).",
        answer: "Assolutamente vero",
        options: [
            "In qualche misura vero",
            "Assolutamente vero",
            "Assolutamente non vero",
            "Leggermente vero"
        ]
    },
    {
        numb: 8,
        question: "Il prodotto scalare tra due vettori unitari che formano un angolo uguale a alfa è uguale a ...",
        answer: "cos(alpha)",
        options: [
            "1",
            "cos(0)",
            "0",
            "cos(alpha)"
        ]
    },
    {
        numb: 9,
        question: "Dati tre vettori, u, v e w, utilizzare MATLAB per verificare l'uguaglianza ux (vxw) = (u . w) v - (u . v) w (Eseguire il controllo richiesto utilizzando espressioni simboliche (esempio: u = [u1 u2 u3])).",
        answer: "Assolutamente vera",
        options: [
            "In qualche misura vera",
            "Leggermente vera",
            "Assolutamente vera",
            "Assolutamente falsa"
        ]
    },
];