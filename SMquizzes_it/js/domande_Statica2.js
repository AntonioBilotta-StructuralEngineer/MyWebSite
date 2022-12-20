// creating an array and passing the number, questions, otpions and answers
let questions = [
    {
        numb: 1,
        question: "Quali sono le forze modellate dal continuo di Cauchy?",
        answer: "Forze di volume e forze di superficie",
        options: [
            "Forze applicate e forze distribuite",
            "Forze di volume e forze di superficie",
            "Forze di volume e momenti di superficie",
            "Forze concentrate e forze di superficie"
        ]
    },
    {
        numb: 2,
        question: "Quante sono le equazioni vettoriali di equilibrio di un corpo continuo?",
        answer: "2",
        options: [
            "6",
            "3",
            "2"
        ]
    },
    {
        numb: 3,
        question: "Le equazioni di equilibrio del corpo continuo sono valide anche per un sottoinsieme del corpo. È un'affermazione ...",
        answer: "sempre vera",
        options: [
            "sempre vera",
            "moderatemente vera",
            "falsa",
            "dipende dai carichi applicati"
        ]
    },
    {
        numb: 4,
        question: "Cosa dice il Postulato di Cauchy?",
        answer: "Stabilisce che la trazione dipende solo dalla normale al piano su cui agisce",
        options: [
            "È l'assunzione di base sulla continuità dei corpi",
            "Stabilisce che la trazione è sempre continua",
            "Stabilisce che la trazione dipende solo dalla normale al piano su cui agisce"
        ]
    },
    {
        numb: 5,
        question: "Cos'è il tetraedro di Cauchy",
        answer: "Il volume elementare utilizzato per la dimostrazione dell'esistenza del tensore della tensione",
        options: [
            "Un tetraedro di riferimento per il calcolo della tensione conservato in un museo di Parigi",
            "Il volume elementare utilizzato per la dimostrazione dell'esistenza del tensore della tensione",
            "Il tetraedro da utilizzare per il calcolo della trazione",
            "Il solido di riferimento per la teoria di Cauchy"
        ]
    },
    {
        numb: 6,
        question: "La terza legge di Newton è anche nota come ...",
        answer: "principio di azione e reazione",
        options: [
            "principio di azione e reazione",
            "principio di reazione uguale e contraria",
            "principio della forza reciproca"
        ]
    },
    {
        numb: 7,
        question: "Cos'è il tensore della tensione?",
        answer: "Una trasformazione lineare che trasforma vettori di lunghezza unitaria in trazioni",
        options: [
            "La misura dello stato di sollecitazione interna del corpo",
            "La forze interne al corpo",
            "Il livello di stress interno al corpo",
            "Una trasformazione lineare che trasforma vettori di lunghezza unitaria in trazioni"
        ]
    },
    {
        numb: 8,
        question: "Il teorema della divergenza consente di calcolare con un integrale di volume ...",
        answer: "il flusso attraverso una superficie chiusa",
        options: [
            "il flusso attraverso una superficie chiusa",
            "il flusso entrante",
            "il flusso uscente"
        ]
    },
    {
        numb: 9,
        question: "Il teorema della tensione di Cauchy stabilisce tre risultati fondamentali:",
        answer: "Esistenza del tensore della tensione, equilibrio e simmetria del tensore della tensione",
        options: [
            "Equilibrio, legame deformazione-spostamenti e legge costitutiva",
            "Esistenza del tensore della tensione, equilibrio e simmetria del tensore della tensione",
            "Equilibrio, trazioni sul bordo e tensore della tensione associato"
        ]
    },
    {
        numb: 10,
        question: "Quante sono le componenti indipendenti del tensore della tensione?",
        answer: "6",
        options: [
            "9",
            "6",
            "3"
        ]
    },
    {
        numb: 11,
        question: "L'equazione di equilibrio div(sigma) + b = 0 da un punto di vista matematico rappresenta ...",
        answer: "un sistema di equazioni differenziali",
        options: [
            "un sistema lineare di equazioni",
            "un sistema non lineare di equazioni",
            "un sistema di equazioni integrali",
            "un sistema di equazioni differenziali"
        ]
    },
    {
        numb: 12,
        question: "Le componenti della tensione sulla diagonale principale del tensore sono di tipo ...",
        answer: "normale",
        options: [
            "normale",
            "tangenziale",
            "più che normale",
            "tangente"
        ]
    },
    {
        numb: 13,
        question: "Le componenti della tensione fuori dalla diagonale principale del tensore sono di tipo ...",
        answer: "tangenziale",
        options: [
            "normale",
            "più che normale",
            "tangente",
            "tangenziale"
        ]
    },
    {
        numb: 14,
        question: "Gli autovettori del tensore della tensione rappresentano ...",
        answer: "le direzioni lungo le quali la trazione ha solo una componente normale",
        options: [
            "niente di particolare",
            "le direzione di sollecitazione massima",
            "le direzioni lungo le quali la trazione ha solo una componente normale",
            "le direzioni lungo le quali le quali l'equilibrio è sicuramente rispettato"
        ]
    },
    {
        numb: 15,
        question: "Gli autovalori del tensore della tensione rappresentano le ...",
        answer: "tensioni principali",
        options: [
            "tensioni massime",
            "tensioni normali massime",
            "tensioni principali"
        ]
    }
];