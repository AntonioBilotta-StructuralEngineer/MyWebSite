var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "author_bio_it",
  "level": "1",
  "url": "author_bio_it.html",
  "type": "Biografia dell'autore",
  "number": "",
  "title": "Biografia dell'autore",
  "body": " Antonio Bilotta, dottore di ricerca in Meccanica computazionale dal 1999, ricopre il ruolo di professore associato di Scienza delle costruzioni presso l'Università della Calabria.  In ambito scientifico i suoi interessi riguardano l'analisi computazionale delle strutture occupandosi in particolare di: formulazioni di elementi finiti ad alte prestazioni; modellazione di strutture a comportamento elasto-plastico; formulazione di modelli di trave di tipo enhanced per l'analisi di stutture intelaiate in ambito lineare e non lineare; analisi e modellazione di problemi inversi.  In ambito didattico ha ricoperto il ruolo di docente responsabile per insegnamenti afferenti ai corsi di laurea in Ingegneria civile, Ingegneria chimica, Tecnologie per la conservazione ed il restauro dei beni culturali ed Ingegneria alimentare, quali: Scienza delle costruzioni , Calcolo anelastico delle strutture , Meccanica computazionale delle strutture , Dinamica delle strutture , Meccanica dei solidi .  Per ulteriori informazioni si acceda alla pagina web personale .  "
},
{
  "id": "dedication_it",
  "level": "1",
  "url": "dedication_it.html",
  "type": "Dedica",
  "number": "",
  "title": "Dedica",
  "body": "  A chi studia la meccanica dei solidi   A mio nonno Giovanni   "
},
{
  "id": "acknowledgement_it",
  "level": "1",
  "url": "acknowledgement_it.html",
  "type": "Ringraziamenti",
  "number": "",
  "title": "Ringraziamenti",
  "body": " Vorrei ringraziare gli autori (Robert A. Beezer, David Farmer, Alex Jordan, Mitchel T. Keller) di PreTeXt che è lo strumento utilizzato per la scrittura di questo web book.  Vorrei ringraziare MathWorks Book Program per il supporto fornito all'utilizzo di MATLAB per la realizzazione di questo libro.  Infine, vorrei ringraziare quegli studenti, frequentanti i miei corsi presso l'Università della Calabria, che hanno segnalato refusi ed errori riscontrati nel testo. Vorrei ringraziare in anticipo ogni nuovo lettore che segnalerà errori utilizzando la mia email personale antonio.bilotta@unical.it   "
},
{
  "id": "preface_it",
  "level": "1",
  "url": "preface_it.html",
  "type": "Prefazione",
  "number": "",
  "title": "Prefazione",
  "body": " Negli ultimi anni e nelle scuole d'ingegneria è divenuto ormai abbastanza consueto fornire un corso introduttivo alla Meccanica dei solidi , più nota in Italia come Scienza delle costruzioni , comprendente due tematiche abbastanza distinte: la Meccanica del continuo e la Statica . La prima studia i corpi deformabili mentre la seconda, nelle scuole di ingegneria ed architettura, abbraccia una serie di argomenti che vanno ben oltre l'equilibrio dei sistemi rigidi a cui la parola Statica si riferisce. Coprire, anche solo a livello introduttivo, ambedue le tematiche all'interno di un corso semestrale attingendo al vasto numero di testi e risorse web comunque già disponibili sulle due tematiche, darebbe luogo ad un percorso labirintico per lo studente. Studente che si troverebbe a confrontarsi con testi di Meccanica del continuo i quali, per linguaggio scelto, dedicano un'ampia parte alle basi di algebra e calcolo tensoriale o, per la parte di Statica, con testi che utilizzano un liguaggio e metodologie completamente differenti collocabili nell'ambito della Meccanica delle strutture .  Le precedenti considerazioni mi hanno indotto ad elaborare un testo, certamente ancora in fase sperimentale, il quale con un linguaggio il più possibile uniforme fosse da supporto ad un corso semestrale su due tematiche che, dal punto di vista didattico e non solo, hanno due tradizioni abbastanze distinte.  Altro aspetto centrale della proposta è costituito dal supporto scelto, ovvero un interfaccia web disponibile online. L'interfaccia web consente di utilizzare diverse modalità (testo tradizionale, brevi video lezioni, animazioni, riferimenti a risorse web, etc.) per proporre gli argomenti trattati e di utilizzare in maniera naturale strumenti digitali sia per l'elaborazione delle formulazioni sia per lo svolgimento degli esercizi.  Per quanto riguarda quest'ultimo aspetto, il testo propone l'utilizzo di MATLAB come strumento di elaborazione simbolica e numerica consentendo allo studente di concentrarsi solo sulla formulazione dei modelli e delle operazioni necessarie, delegando il loro svolgimento a MATLAB. A mio parere, l'insegnamento della Meccanica dei solidi deve sia prescindere da conoscenze da ritenere apprese in corsi precedenti, sia stimolare l'utilizzo di strumenti informatici che oramai costituiscono il bagaglio di base di qualsiasi ingegnere in termini di linguaggio computazionale da conoscere e di strumenti di calcolo automatico da sapere utilizzare nel lavoro quotidiano.  Da dove viene l'esigenza di conoscere un linguaggio computazionale e di sapere utilizzare degli strumenti di calcolo automatico? Probabilemente tale esigenza non è affatto una peculiarità della Meccanica dei solidi visto che accomuna tutte le discipline collocabili nell'alveo della matematica applicata. Ma limitiamo il nostro sguardo a ciò che ci interessa maggiormente, ovvero come svolge il suo lavoro un ingegnere. Cinquanta anni fa un neolaureato in ingegneria era bravissimo ad utilizzare un regolo calcolatore ovvero un calcolatore meccanico analogico di tipo manuale. Ma adesso grazie alla rivoluzione digitale, cominciata negli 80 con l'avvento dei primi personal computer e tuttora in atto, si ha la possibilità di tenere in una mano una potenza di calcolo che nel 1969 è stata utilizzata dalla NASA per spedire l'uomo sulla luna. A completamento di uno scenario drasticamente cambiato, la diffussione capillare di internet avvenuta nell'ultimo decennio ha fatto il resto aprendo la porta all' internet of things .   Tornando al MATLAB, acronimo di MATrix LABoratory, il software nasce La prima release commerciale è del 1984 anche se il suo inventore Cleve Moler iniziò il suo sviluppo nel 1970. espressamente come strumento per la manipolazione automatica di matrici ma negli anni si arricchito di tali e tante funzionalità che addesso è più corretto definirlo come segue: a multi-paradigm numerical computing environment and proprietary programming language developed by MathWorks (fonte Wikipedia). Quindi, essendo un argomento di per sé vastissimo, nel presente testo non viene fornita alcuna informazione sul suo utilizzo. Tali informazioni sono disponbili, sotto il formato di tutorial e di online help, sul sito del fornitore di MATLAB, fonte che conviene considerare la più attendibile ed autorevole. Le applicazioni e gli esercizi forniti in MATLAB nel testo quindi servono ad acquisire un linguaggio computazionale e ad imparare ad utilizzare uno strumento di calcolo automatico, certamente non l'unico disponibile (Maple, Mathematica, Octave, Sage, etc.), adeguati ad uno studio attuale della Meccanica dei solidi.  Il materiale qui proposto è composto dai seguenti capitoli di cui i primi tre trattano argomenti di Meccanica del continuo e i due successivi sono dedicati ai sistemi rigidi.  Il primo capitolo affronta la cinematica dei corpi deformabili definendo gli strumenti di base per la descizione della trasformazione geometrica dei corpi indipendentemente dalle cause che lo hanno prodotto. La tematica viene utilizzata come palestra per familiarizzare con tutti gli strumenti matematici necessari alla Meccanica dei solid in generale. Si evita però una descrizione sistematica, che molto spesso diventa un elenco, delle nozioni necessarie di algebra e calcolo tensoriale. Ma i singoli argomenti di algebra o calcolo vengono richiamati mantendendo il più possibile il contatto con l'argemento di cinematica per il quale il richiamo è richiesto. Come supporto di tali richiami si è scelto di utilizzare brevi video lezioni più fruibili, in prima battuta, delle descrizioni fornite nei testi di riferimento di Meccanica del continuo o Matematica a cui lo studente può sempre attingere per approfondimenti.  Nel secondo capitolo viene precisata la nozione di ipotesi di continuità alla base della Meccanica del continuo per passare, successivamente, alla trattazione dei corpi sotto l'azione di agenti esterni. Per tale via si arriva alla definizione del tensore della tensione di Cauchy e delle relative equazioni di equilibrio. Si stabilisce anche, tramite il principiio dei lavori, il legame esistente tra la descrizione statica dei corpi e la descrizione cinematica presentata nel primo capitolo.  Nel terzo capitolo si verifica che le equazioni presentate nei capitolo precedenti non bastano a risolvere il problema di un corpo deformabile, comunque vincolato, soggetto ad azioni assegnate. Occorre aggiungere al modello un'informazione ulteriore di tipo sperimentale che lega tensione e deformazione in un generico punto del corpo. A tal fine si utilizza come modello di riferimento la legge di Hooke generalizzandola per gli stati pluriassiali che in generale insorgono all'interno dei corpi. Definita quindi la formulazione generale del problema elastico, si discute anche la riduzione del modello 3D al più semplice e maneggevole modello monodimensionale di trave.  Nel quarto capitolo la cinematica presentata nel primo viene applicata ai sistemi rigidi consentendo di sperimentare in un contesto semplificato la descizione cinematica dei corpi. Vengono discussi i principali tipi di vincolo applicabili ad un corpo e si individua una procedura sistematica utilizzabile per l'analisi cinematica dei sistemi di corpi rigidi.  Il quinto capitolo è dedicato alla discussione dei sistemi rigidi da un punto di vista statico. Le relative equazioni di equilibrio, la nozione di reazione vincolare e di schema di corpo libero consentono di individuare una procedura sistematica per l'analisi statica dei sistemi di corpi rigidi.    Per concludere si osserva che l'ordine dato ai capitoli, più che una sequenza corretta di lettura, riflette la necessità di raggrupparli rispetto alle due tematiche meccanica del continuo e sistemi rigidi , tematiche non esattamente distinte ma piuttosto accesorie l'una per la comprensione dell'altra. Un ordine alternativo di lettura potrebbe essere 1, 4, 5, 2 e 3. Tale ordine, assumendo comunque come propedeutico il primo capitolo, consente di studiare le idee di base rispetto ai più semplici sistemi rigidi, capitoli 4 e 5, per arrivare poi alla formulazione del problema elastico attraverso i capitoli 2 e 3.       Antonio Bilotta  Arcavacata di Rende, Febbraio 2020   "
},
{
  "id": "MATLAB_references_frontmatter_it",
  "level": "1",
  "url": "MATLAB_references_frontmatter_it.html",
  "type": "Bibliografia",
  "number": "",
  "title": "utilizzo di MATLAB®",
  "body": " utilizzo di MATLAB  Tutto il materiale a supporto del libro è stato realizzato utilizzando la versione 9.8 di MATLAB e la versione 8.5 del Symbolic Math Toolbox . Ad ogni modo, come già sottolineato nella Prefazione, l'argomento Come apprendere l'uso di MATLAB  è delegato alle risorse ufficiali, tipicamente in lingua inglese, a cui è possibile accedere come descritto di seguito.   Onramp Tutorials . Learn the essentials of MATLAB , Simulink , and more through the Onramp tutorials created by MathWorks . These 2 to 3 hour tutorials are free and provide a hands-on learning environment with automated assessments and contextual feedback. To get started, visit https:\/\/matlabacademy.mathworks.com .   MATLAB Online . MATLAB Online allows you to access the latest version of MATLAB through your web browser, without any downloads or installations. Learn more about it here: https:\/\/www.mathworks.com\/products\/matlab-online.html .   MATLAB Live Editor . The MATLAB Live Editor allows users to combine code, output, and formatted text in a single executable document. Learn more about it here: https:\/\/www.mathworks.com\/products\/matlab\/live-editor.html .   MATLAB documentation . All the available functions are documented here: https:\/\/www.mathworks.com\/help\/matlab\/ .  "
},
{
  "id": "SMcontents_references_frontmatter_it",
  "level": "1",
  "url": "SMcontents_references_frontmatter_it.html",
  "type": "Bibliografia",
  "number": "",
  "title": "Risorse aggiuntive",
  "body": " Risorse aggiuntive  Le pagine del presente libro vengono continuamente aggiornate e gli eventuali errori corretti, anche su gentile segnalazione dei lettori. Inoltre qualsiasi lettore interessato può inviare richieste di chiarimenti al mio indirizzo di posta (antonio.bilotta@unical.it) e ricevere risposta in tempi rapidi.  Al fine di migliorare la fruizione dei contenuti proposti è anche disponibile il sito  contenuti aggiuntivi sulla meccanica dei solidi  curato dall'autore del libro e dove sono raccolti esercizi proposti in sede d'esame con relativa soluzione, quiz di autoverifica per ogni capitolo del libro, blog con approfondimenti di tematiche correlate alla meccanica dei solidi e la soluzione di problemi particolari.  "
},
{
  "id": "configurations_sec_strain_chap_it",
  "level": "1",
  "url": "configurations_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.1",
  "title": "configurazioni",
  "body": " configurazioni     L'oggetto dell'analisi cinematica è un corpo continuo che sarà denominato con il simbolo . Ciascun punto del corpo occupa nello spazio una posizione che, fissata una terna ortonormale di riferimento ( ), è individuata da un vettore. A tal riguardo parleremo di due configurazioni :  la configurazione di riferimento  , ovvero l'insieme delle posizioni occupate dai punti del corpo prima del moto;  la configurazione corrente  , ovvero l'insieme delle posizioni occupate dai punti del corpo per effetto del moto.  Rispetto alla base di riferimento scelta le posizioni and saranno esprimibili utilizzando diversi tipi di notazione.        Si riportano alcuni esempi di istruzioni MATLAB utilizzabili per definire ed utilizzare vettori.   Istruzioni per la generazione di vettori riga.   u = [1 2 3] v = 4:6 w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % accesso alle singole componenti u(1) u(2) % equivalente a u(2) u(1,2) % errore di accesso u(2,1)     Istruzioni per la generazione di vettori colonna (il formato con cui si intendono solitamente i vettori in Meccanica).   u = [1; 2; 3] v = (linspace(4,6,3))' w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % accesso alle singole componenti k(1) k(2) % equivalente a k(2) k(2,1) % errore di accesso k(1,2)      "
},
{
  "id": "Kinematics_01_fig",
  "level": "2",
  "url": "configurations_sec_strain_chap_it.html#Kinematics_01_fig",
  "type": "Figura",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "configurations_sec_strain_chap_it-6-1-1",
  "level": "2",
  "url": "configurations_sec_strain_chap_it.html#configurations_sec_strain_chap_it-6-1-1",
  "type": "Listato",
  "number": "1.1.2",
  "title": "",
  "body": "  u = [1 2 3] v = 4:6 w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % accesso alle singole componenti u(1) u(2) % equivalente a u(2) u(1,2) % errore di accesso u(2,1)   "
},
{
  "id": "configurations_sec_strain_chap_it-6-2-1",
  "level": "2",
  "url": "configurations_sec_strain_chap_it.html#configurations_sec_strain_chap_it-6-2-1",
  "type": "Listato",
  "number": "1.1.3",
  "title": "",
  "body": "  u = [1; 2; 3] v = (linspace(4,6,3))' w = u + v x = 0.5 y = 1.0 z = -2.0 k = x*u + y*v + z*w % accesso alle singole componenti k(1) k(2) % equivalente a k(2) k(2,1) % errore di accesso k(1,2)   "
},
{
  "id": "transformations_sec_strain_chap_it",
  "level": "1",
  "url": "transformations_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.2",
  "title": "trasformazioni",
  "body": " trasformazioni     Si chiamerà moto la trasformazione valida . è una funzione vettoriale che, data una posizione relativa alla configurazione di riferimento, fornisce la nuova posizione relativa alla configurazione corrente. La dipendenza fra e a volte viene indicata rapidamente come segue Si assume sufficientemente regolare da consentire la derivazione fino all'ordine desiderato.  Si assume inoltre che il moto sia invertibile in maniera unica, ovvero è possibile scrivere ovvero dove il simbolo indica il moto inverso che associa alla posizione corrente la posizione nella configurazione di riferimento.  In generale il moto di un corpo modificherà la posizione, l'orientazione e la forma del corpo. Si dirà quindi deformabile un corpo in grado di modificare la propria forma.   alcune trasformazioni di base   Trasformazione 1 (rotazione di 90 gradi in senso antiorario)     Istruzioni per la definizione della funzione MATLAB associata alla trasformazione assegnata e per il suo utilizzo.   T1 = @(X) [-X(2); X(1)]; X = [1; 2]; T1(X)      Trasformazione 2 (estensione orizzontale)     Istruzioni MATLAB .   T2 = @(X) [2*X(1); X(2)]; X = [1; -1]; T2(X)      Trasformazione 3 (estensione verticale)     Istruzioni MATLAB    T3 = @(X) [X(1); 1.5*X(2)]; v = [4; 10]; T3(v)      Trasformazione 4 (taglio a destra)     Istruzioni MATLAB    T4 = @(X) [X(1)+X(2); X(2)]; u = [10; -1]; T4(u)      Gli esempi precedenti appartengono ad una categoria di trasformazioni molto importanti nella meccanica dei solidi: le trasformazioni lineari .       Pertanto nel caso in cui la trasformazione è lineare la sua azione sul vettore è esplicabile attraverso la matrice definita come segue dove , e sono i vettori ottenuti applicando la trasformazione ai vettori della base di riferimento. Pertanto la trasformazione di qualsiasi vettore potrà essere ottenuta in modo equivalente applicando la matrice :    valutazione della matrice  Nel caso delle trasformazioni lineari già prese in considerazione negli esempi precedenti è facile verificare i seguenti risultati.    Trasformazione 1   Trasformazione 2       Trasformazione 3   Trasformazione 4     Istruzioni MATLAB per la costruzione delle matrici associate alle trasformazioni.   T1 = @(X) [-X(2); X(1)]; T2 = @(X) [2*X(1); X(2)]; T3 = @(X) [X(1); 1.5*X(2)]; T4 = @(X) [X(1)+X(2); X(2)]; M1 = [T1([1; 0]) T1([0; 1])] M2 = [T2([1; 0]) T2([0; 1])] M3 = [T3([1; 0]) T3([0; 1])] M4 = [T4([1; 0]) T4([0; 1])]       È importante sottolineare ancora che è possibile identificare la matrice solo nel caso di trasformazione lineare. Inoltre, vale anche l'inverso, ovvero l'esistenza di una matrice utilizzabile per rappresentare una trasformazione implica la linearità della trasformazione.   "
},
{
  "id": "Kinematics_02_fig",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#Kinematics_02_fig",
  "type": "Figura",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "transformations_sec_strain_chap_it-6-3-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#transformations_sec_strain_chap_it-6-3-2",
  "type": "Listato",
  "number": "1.2.2",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; X = [1; 2]; T1(X)   "
},
{
  "id": "transformations_sec_strain_chap_it-6-5-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#transformations_sec_strain_chap_it-6-5-2",
  "type": "Listato",
  "number": "1.2.3",
  "title": "",
  "body": "  T2 = @(X) [2*X(1); X(2)]; X = [1; -1]; T2(X)   "
},
{
  "id": "transformations_sec_strain_chap_it-6-7-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#transformations_sec_strain_chap_it-6-7-2",
  "type": "Listato",
  "number": "1.2.4",
  "title": "",
  "body": "  T3 = @(X) [X(1); 1.5*X(2)]; v = [4; 10]; T3(v)   "
},
{
  "id": "transformations_sec_strain_chap_it-6-9-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#transformations_sec_strain_chap_it-6-9-2",
  "type": "Listato",
  "number": "1.2.5",
  "title": "",
  "body": "  T4 = @(X) [X(1)+X(2); X(2)]; u = [10; -1]; T4(u)   "
},
{
  "id": "transformations_sec_strain_chap_it-10-5-2",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#transformations_sec_strain_chap_it-10-5-2",
  "type": "Listato",
  "number": "1.2.6",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; T2 = @(X) [2*X(1); X(2)]; T3 = @(X) [X(1); 1.5*X(2)]; T4 = @(X) [X(1)+X(2); X(2)]; M1 = [T1([1; 0]) T1([0; 1])] M2 = [T2([1; 0]) T2([0; 1])] M3 = [T3([1; 0]) T3([0; 1])] M4 = [T4([1; 0]) T4([0; 1])]   "
},
{
  "id": "transformations_sec_strain_chap_it-11",
  "level": "2",
  "url": "transformations_sec_strain_chap_it.html#transformations_sec_strain_chap_it-11",
  "type": "Osservazione",
  "number": "1.2.7",
  "title": "",
  "body": " È importante sottolineare ancora che è possibile identificare la matrice solo nel caso di trasformazione lineare. Inoltre, vale anche l'inverso, ovvero l'esistenza di una matrice utilizzabile per rappresentare una trasformazione implica la linearità della trasformazione.  "
},
{
  "id": "gradient_sec_strain_chap_it",
  "level": "1",
  "url": "gradient_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.3",
  "title": "gradiente della trasformazione",
  "body": " gradiente della trasformazione  La trasformazione che è stata introdotta per descrivere il moto di un corpo è del tutto generica pertanto non necessariamente è lineare. Ma vedremo come tale caratteristica, la linearità, gioca comunque un ruolo fondamentale perché, anche se generica, viene descritta localmente mediante una sua linearizzazione, linearizzazione che si basa sulla nozione di differenziale di una funzione .  Al fine di richiamare, in maniera semplice, l'idea che sta alla base delle operazioni di linearizzazione, tale processo viene illustrato nello schema seguente per una funzione reale dipendendente da una sola variabile.        dove se , quindi si può stabilire che       Una generalizzazione rigorosa dell'equazione richiederebbe un approfondimento che esula dalle finalità introduttive del presente trattazione. Si riporta quindi direttamente il risultato finale che fornisce il differenziale relativo alla configurazione corrente in funzione del differenziale relativo alla configurazione di riferimento. A tal fine si premette una scrittura estesa della equazione  Il differenziale cercato può essere quindi formulato come segue espressione valutabile anche come prodotto di matrice per vettore, ovvero   Tale risultato evidenzia come il passaggio da a avvenga mediante una trasformazione lineare rappresentata dalla matrice che contiene, punto per punto, tutta l'informazione necessaria per caratterizzare la deformazione. prende il nome di gradiente della trasformazione con il quale si può esprimere in forma compatta il legame fra i differenziali e  Relazione che può essere ulteriormente dettagliata come segue dove è stata esplicitata la dipendenza di dal punto in cui viene valutato il gradiente.  Quanto ottenuto per la strasformazione vale anche la sua inversa , pertanto si può stabilire il seguente legame inverso fra i differenziali e  Tipicamente la valutazione del gradiente della trasformazione inversa non passa attraverso la scrittura esplicita di ma si effettua calcolando l'inverso di per il quale deve essere assicurata l'invertibilità.      valutazione del gradiente (trasformazioni lineari)  Nel caso della Trasformazione 1 già discussa in precedenza esplicitiamo la dipendenza delle singole componenti di dalle componenti di : Da cui si ricavano le seguenti derivate parziali e quindi il gradiente della trasformazione Il fatto che in questo caso si ottenga un gradiente costante e coincidente con la matrice associata alla trasformazione non è casuale ma dipende dalla linearità della trasformazione in esame: necessariamente una sua linearizzazione coincide con la trasformazione data. Risultato analogo si otterrebbe anche per le altre trasformazioni lineari considerate negli esempi precedenti.    valutazione del gradiente (trasformazioni non lineari)  Nel caso di trasformazioni non lineari non è possibile identificare una matrice associata alla trasformazione ma, localmente, il gradiente della trasformazione si comporta come una trasformazione lineare. Si consideri, per esempio, la trasformazione così definita   Il calcolo delle derivate parziali consente la valutazione del gradiente della trasformazione   Al fine di visualizzare come agisca la trasformazione assegnata si considerano, nel dominio piano , tre circonferenze di raggio , e e su queste si applichi la trasformazione non lineare assegnata. Si riportano le istruzioni MATLAB per il calcolo e il plottaggio delle circonferenze nella configurazione di riferimento e in quella corrente.   N=60; angle=linspace(0,2*pi,N); radius=1.0; c1X=radius*cos(angle); c1Y=radius*sin(angle); c1x=c1X.^3; c1y=c1Y.^3; radius=0.5; c2X=radius*cos(angle); c2Y=radius*sin(angle); c2x=c2X.^3; c2y=c2Y.^3; radius=1.5; c3X=radius*cos(angle); c3Y=radius*sin(angle); c3x=c3X.^3; c3y=c3Y.^3; hold on % circonferenza (r=1) con deformata plot(c1X,c1Y,'b-') plot(c1x,c1y,'b-') % circonferenza (r=0.5) con deformata plot(c2X,c2Y,'r-') plot(c2x,c2y,'r-') % circonferenza (r=1.5) con deformata plot(c3X,c3Y,'m-') plot(c3x,c3y,'m-')   Istruzioni che consentono di ottenere la seguente figura dove le tre circonferenze, nelle configurazioni di riferimento e corrente, sono rappresentate con i colori rosso per il raggio , blu per il raggio e magenta per il raggio .     Per esercizio e per confrontare la trasformazione non lineare esaminata con più semplici trasformazioni lineari, si suggerisce di effetuare gli stessi calcoli per le Trasformazioni 2, 3 e 4 discusse nelle sezioni precedenti.    Nell'esempio precedente sono da segnalare le cuspidi sulle configurazioni ottenute applicando la trasformazione. Si può dire qualcosa a riguardo? La valutazione del gradiente sui punti del cerchio che vengono mappati sugli apici delle cuspidi consentirebbe di fare un ipotesi su cosa avvenga in questi punti. Elementi di valutazione su tale aspetto verranno forniti in .     la nozione di tensore  Introducendo il gradiente della deformazione abbiamo fatto conoscenza con una categoria di oggetti matematici che vengono denominati tensori del secondo ordine o, semplicemente, tensori , essendo superfluo specificare l'ordine dei tensori che ricorrono più spesso nella meccanica dei solidi. Certamente tale incontro può essere causa di disorientamento, specialmente se si cerca anche di dare una definizione dei tensori nella forma più generale possibile. Pertanto si darà la definizione più correntemente utilizzata in Meccanica dei solidi , definizione anche abbastanza scontata rispetto a quanto detto finora a proposito di trasformazioni lineari.   Un tensore del secondo ordine, che in genere indicheremo con lettere maiuscole ed in grassetto (ad esempio , , , ), è una trasformazione lineare che associa ad un generico vettore un altro vettore . Tale operazione di associazione viene indicata abitualmente come segue e la linearità della trasformazione comporta per tutti i vettori , e tutti gli scalari .     "
},
{
  "id": "Kinematics_03_fig",
  "level": "2",
  "url": "gradient_sec_strain_chap_it.html#Kinematics_03_fig",
  "type": "Figura",
  "number": "1.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "gradient_sec_strain_chap_it-10-4-6",
  "level": "2",
  "url": "gradient_sec_strain_chap_it.html#gradient_sec_strain_chap_it-10-4-6",
  "type": "Listato",
  "number": "1.3.2",
  "title": "",
  "body": "  N=60; angle=linspace(0,2*pi,N); radius=1.0; c1X=radius*cos(angle); c1Y=radius*sin(angle); c1x=c1X.^3; c1y=c1Y.^3; radius=0.5; c2X=radius*cos(angle); c2Y=radius*sin(angle); c2x=c2X.^3; c2y=c2Y.^3; radius=1.5; c3X=radius*cos(angle); c3Y=radius*sin(angle); c3x=c3X.^3; c3y=c3Y.^3; hold on % circonferenza (r=1) con deformata plot(c1X,c1Y,'b-') plot(c1x,c1y,'b-') % circonferenza (r=0.5) con deformata plot(c2X,c2Y,'r-') plot(c2x,c2y,'r-') % circonferenza (r=1.5) con deformata plot(c3X,c3Y,'m-') plot(c3x,c3y,'m-')   "
},
{
  "id": "nolin_transf_example",
  "level": "2",
  "url": "gradient_sec_strain_chap_it.html#nolin_transf_example",
  "type": "Figura",
  "number": "1.3.3",
  "title": "",
  "body": "  "
},
{
  "id": "gradient_sec_strain_chap_it-11",
  "level": "2",
  "url": "gradient_sec_strain_chap_it.html#gradient_sec_strain_chap_it-11",
  "type": "Osservazione",
  "number": "1.3.4",
  "title": "",
  "body": " Nell'esempio precedente sono da segnalare le cuspidi sulle configurazioni ottenute applicando la trasformazione. Si può dire qualcosa a riguardo? La valutazione del gradiente sui punti del cerchio che vengono mappati sugli apici delle cuspidi consentirebbe di fare un ipotesi su cosa avvenga in questi punti. Elementi di valutazione su tale aspetto verranno forniti in .  "
},
{
  "id": "gradient_sec_strain_chap_it-12-3",
  "level": "2",
  "url": "gradient_sec_strain_chap_it.html#gradient_sec_strain_chap_it-12-3",
  "type": "Definizione",
  "number": "1.3.5",
  "title": "",
  "body": " Un tensore del secondo ordine, che in genere indicheremo con lettere maiuscole ed in grassetto (ad esempio , , , ), è una trasformazione lineare che associa ad un generico vettore un altro vettore . Tale operazione di associazione viene indicata abitualmente come segue e la linearità della trasformazione comporta per tutti i vettori , e tutti gli scalari .  "
},
{
  "id": "displacement_sec_strain_chap_it",
  "level": "1",
  "url": "displacement_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.4",
  "title": "il campo di spostamento",
  "body": " il campo di spostamento  Un altra quantità molto utilizzata nella descrizione cinematica dei corpi è la differenza fra la posizione corrente la posizione di riferimento del generico punto nota come campo di spostamento . Il relativo gradiente, noto come gradiente dello spostamento e indicato con il simbolo , si ottiene in modo analogo a quanto già fatto per il gradiente della trasformazione. Ovvero dato il campo si ottiene   Dalla equazione si ricava facilmente la relazione fra gradiente dello spostamento e gradiente della trasformazione dove rappresenta il tensore identità    valutazione del campo di spostamento e del relativo gradiente  In merito alla Trasformazione 1 già utilizzata negli esempi precedenti, il campo di spostamento ed il relativo gradiente possono essere valutati sulla base delle seguenti istruzioni MATLAB . Si tenga presente che, per la linearità delle trasformazioni coinvolte, i gradienti vengono valutati come matrice associata alla trasformazione.   T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])] Grad_u = F - diag([1 1]) u1 = @(X) T1(X) - X; Grad_u = [u1([1; 0]) u1([0; 1])]     Istruzioni MATLAB per la Trasformazione 2.   T2 = @(X) [2*X(1); X(2)]; F = [T2([1; 0]) T2([0; 1])] Grad_u = F - diag([1 1]) u2 = @(X) T2(X) - X; Grad_u = [u2([1; 0]) u2([0; 1])]     Istruzioni MATLAB per la Trasformazione 3.   T3 = @(X) [X(1); 1.5*X(2)]; F = [T3([1; 0]) T3([0; 1])] Grad_u = F - diag([1 1]) u3 = @(X) T3(X) - X; Grad_u = [u3([1; 0]) u3([0; 1])]     Istruzioni MATLAB per la Trasformazione 4.   T4 = @(X) [X(1)+X(2); X(2)]; F = [T4([1; 0]) T4([0; 1])] Grad_u = F - diag([1 1]) u4 = @(X) T4(X) - X; Grad_u = [u4([1; 0]) u4([0; 1])]      "
},
{
  "id": "displacement_sec_strain_chap_it-4-2-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_it.html#displacement_sec_strain_chap_it-4-2-2",
  "type": "Listato",
  "number": "1.4.1",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])] Grad_u = F - diag([1 1]) u1 = @(X) T1(X) - X; Grad_u = [u1([1; 0]) u1([0; 1])]   "
},
{
  "id": "displacement_sec_strain_chap_it-4-3-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_it.html#displacement_sec_strain_chap_it-4-3-2",
  "type": "Listato",
  "number": "1.4.2",
  "title": "",
  "body": "  T2 = @(X) [2*X(1); X(2)]; F = [T2([1; 0]) T2([0; 1])] Grad_u = F - diag([1 1]) u2 = @(X) T2(X) - X; Grad_u = [u2([1; 0]) u2([0; 1])]   "
},
{
  "id": "displacement_sec_strain_chap_it-4-4-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_it.html#displacement_sec_strain_chap_it-4-4-2",
  "type": "Listato",
  "number": "1.4.3",
  "title": "",
  "body": "  T3 = @(X) [X(1); 1.5*X(2)]; F = [T3([1; 0]) T3([0; 1])] Grad_u = F - diag([1 1]) u3 = @(X) T3(X) - X; Grad_u = [u3([1; 0]) u3([0; 1])]   "
},
{
  "id": "displacement_sec_strain_chap_it-4-5-2",
  "level": "2",
  "url": "displacement_sec_strain_chap_it.html#displacement_sec_strain_chap_it-4-5-2",
  "type": "Listato",
  "number": "1.4.4",
  "title": "",
  "body": "  T4 = @(X) [X(1)+X(2); X(2)]; F = [T4([1; 0]) T4([0; 1])] Grad_u = F - diag([1 1]) u4 = @(X) T4(X) - X; Grad_u = [u4([1; 0]) u4([0; 1])]   "
},
{
  "id": "determinant_sec_strain_chap_it",
  "level": "1",
  "url": "determinant_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.5",
  "title": "determinante del gradiente della trasformazione",
  "body": " determinante del gradiente della trasformazione  Nelle sezioni precedenti sono state introdotti i tensori come operatori lineari associati a trasformazioni lineari definite nello spazio usuale . L'utilizzo della denominazione operatore lineare invece di matrice sta ad indicare che si parla un oggetto matematico con un significato più ampio di una matrice ma, comunque, i tensori condividono con le matrici tutte le proprietà e le operazioni algebriche di base. Pertanto nel seguito, parlando di matrici, verranno riprese alcune proprietà ed operazioni, quale ad esempio il calcolo del determinante, ricollocandole nel contesto della descrizione cinematica dei corpi.       Quanto descritto nella precedente video lezione può essere riepilogato come segue.  Il determinante è un numero reale che costituisce il fattore di scala delle aree, nel caso di trasformazioni 2D, o dei volumi, nel caso trasformazioni 3D.  Da questa prospettiva un determinante nullo è associato a trasformazioni che scalano a zero aree o volumi descritti nello spazio iniziale a cui viene applicata la trasformazione. Ad esempio in 2D, il determinante è zero se tutti i punti dello spazio di partenza sono mappati su una linea o, nel caso più estremo, su un singolo punto. Nel caso 3D, una trasformazione ha determinante nullo se mappa i punti in un piano, ovvero in una retta o in un singolo punto. In questi casi le colonne della matrice associata alla trasformazione sono linearmente dipendenti.  Il determinante può anche essere negativo perché porta con se anche l'informazione relativa ad un eventuale cambio di orientazione dell'area o del volume di partenza. Questo avviene quando i trasformati dei vettori della base non rispettano la regola della mano destra.      formula di trasformazione di elementi di volume  Dato l'elemento di volume appartenente alla configurazione di riferimento , da esso è possibile valutare il corrispondente elemento di volume relativo alla configurazione corrente . Ovvero dove La disegueglianza evidenzia il rispetto delle seguenti condizioni: (i) per l'impenetrabilità della materia non si possono ammettere trasformazioni caratterizzate da ; (ii) il rapporto di trasformazione volumetrica non può essere nullo per qualsiasi punto . È possibile definire anche il rapporto volumetrico inverso ovvero da cui si ricava   Trasformazioni caratterizzate da saranno dette trasformazioni isocoriche .   calcolo del determinate di trasformazioni e relativa verifica di ammissibilità  Per le trasformazioni bidimensionali considerate anche negli esempi precedenti si riportano le istruzioni MATLAB per il calcolo del determinante e per la verifica di ammissibità della trasformazione. Si ricava anche un plottaggio del valore del determinante sul dominio definito da , .  Istruzioni MATLAB per la Trasformazione 1.   T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])]; syms detF(X1, X2); detF(X1, X2) = det(F); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))     Analoghe istruzioni possono essere individuate anche per le Trasformazioni 2, 3 e 4 che verificano anch'esse la condizione di ammissibilità essendo caratterizzate da un determinante costante e maggiore di zero.  Istruzioni MATLAB per la trasformazione .   syms T1(X1, X2); T1(X1, X2) = X1^3; syms T2(X1, X2); T2(X1, X2) = X2^3; syms detF(X1, X2); detF(X1,X2) = diff(T1, X1)*diff(T2, X2) - diff(T1, X2)*diff(T2, X1); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))     Il risultato delle precedenti istruzioni fornisce il seguente plottaggio   con il quale si può verificare che lungo gli assi coordinati e la trasformazione ha determinante nullo e quindi non è ammissibile (si rammenti a riguardo la presenza delle cuspidi nei plottaggi mostrati in ).      formula di trasformazione di elementi di area       La trasformazione volumetrica può essere riscritta, ricordando il significato del prodotto triplo, nel modo seguente dove e rappresentano elementi vettoriali relativi a aree infinitesime, rispettivamente, nella configurazione corrente e in quella di riferimento. è il trasformato del segmento elementare . Effettuando alcuni semplici passaggi Da cui si ottiene fomula nota come Formula di Nanson e che lega l'elemento vettoriale di area appartenente alla configurazione corrente al corrispettivo elemento vettoriale di area appartenente alla configurazione di riferimento .   "
},
{
  "id": "determinant_sec_strain_chap_it-5-4-3-2",
  "level": "2",
  "url": "determinant_sec_strain_chap_it.html#determinant_sec_strain_chap_it-5-4-3-2",
  "type": "Listato",
  "number": "1.5.1",
  "title": "",
  "body": "  T1 = @(X) [-X(2); X(1)]; F = [T1([1; 0]) T1([0; 1])]; syms detF(X1, X2); detF(X1, X2) = det(F); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))   "
},
{
  "id": "determinant_sec_strain_chap_it-5-4-5-3",
  "level": "2",
  "url": "determinant_sec_strain_chap_it.html#determinant_sec_strain_chap_it-5-4-5-3",
  "type": "Listato",
  "number": "1.5.2",
  "title": "",
  "body": "  syms T1(X1, X2); T1(X1, X2) = X1^3; syms T2(X1, X2); T2(X1, X2) = X2^3; syms detF(X1, X2); detF(X1,X2) = diff(T1, X1)*diff(T2, X2) - diff(T1, X2)*diff(T2, X1); x = linspace(-5, 5, 50); y = linspace(-5, 5, 50); [X,Y] = meshgrid(x,y); surface(X,Y,detF(X,Y))   "
},
{
  "id": "determinant_sec_strain_chap_it-5-4-6-1",
  "level": "2",
  "url": "determinant_sec_strain_chap_it.html#determinant_sec_strain_chap_it-5-4-6-1",
  "type": "Figura",
  "number": "1.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "polar_sec_strain_chap_it",
  "level": "1",
  "url": "polar_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.6",
  "title": "decomposizione polare",
  "body": " decomposizione polare       La possibilità che una data trasformazione lineare possa essere il risultato della composizione di più trasformazioni lineari e la considerazione fisica che il moto di un corpo si compone di trasformazioni elementari come la rotazione e la deformazione pura , portano al seguente risultato fondamentale e formalizzabile in termini di teorema.   teorema di decomposizione polare  Dato il gradiente della deformazione , in ogni punto del corpo soggetto al moto esiste un'unica decomposizione polare definita come segue  è il tensore di rotazione , quindi un tensore ortogonale proprio, che soddisfa la relazione  e sono, rispettivamente, il tensore destro di deformazione e il tensore sinistro di deformazione . Tali tensori sono unici , definiti positivi e simmetrici . Il fatto che e siano definiti positivi impone che per qualsiasi vettore sia soddisfatta la proprietà mentre la simmetria impone che     Applicando la decomposizione polare destra alla relazione si ottiene che evidenzia come il vettore venga prima deformato e poi ruotato. Applicando invece la decomposizione polare sinistra si ottiene da interpretare come sequenza di deformazione di seguita da una rotazione. Quanto detto viene illustrato dalla seguente figura.   In particolare si illustra il caso in cui il tensore destro della deformazione, , produce soltanto un allungamento in direzione orizzonale e, a seguire, il tensore produce una rotazione di 45 . È evidente che nel caso in cui si applichi prima la rotazione, seconda e terza sequenza di trasformazioni in figura, il tensore della deformazione non può essere lo stesso ma deve essere diverso e pari la tensore sinistro il quale consente di ottenere la stessa configurazione finale.  Il teorema di decomposizione polare coglie quindi le trasformazioni elementari, rotazione e deformazione pura, che compongono e mette in evidenza la non commutatività delle due trasformazioni. Inoltre se e quindi la trasformazione, nel punto considerato, è una deformazione pura . Al contrario, e quindi la trasformazione, nel punto considerato, è una rotazione rigida .    tensori di rotazione  Abbiamo già più volte incontrato il tensore 2D relativo ad una rotazione in senso antiorario di che in termini matriciali ha la seguente espressione Per tale tensore è facile verificare le seguenti proprietà Le proprietà elencate non sono specifiche del particolare tensore considerato ma sono soddisfatte da tutti i tensori di rotazione, qualsiasi sia l'entità dell'angolo di rotazione. Al fine di verificare ciò, si consideri la trasformazione lineare che ruota di un generico angolo un vettore assegnato .       Come mostrato nel video si ottiene il seguente risultato È facile verificare le proprietà con le quali si definiscono i tensori ortogonali propri . La condizione appena scritta consente di ottenere relazione che conferma il fatto che il cambio di volume non può che essere legato unicamente alla parte della trasformazione. È anche facile verificare che     tensori definiti positivi  Se un tensore simmetrico verifica la condizione allora il tensore è definito positivo. Da un punto di vista geometrico tale condizione è facilmente interpretabile come segue: ogni volta che si applica la trasformazione lineare a qualsiasi vettore non nullo, si ottiene un vettore che forma con il vettore di partenza un angolo inferiore a , condizione che ha comunque, molto spesso, un significato fisico ben preciso.  Sulla condizione di positività verrà fornito un ulteriore approfondimento quando si parlerà di autovalori ed autovettori.    "
},
{
  "id": "polar_sec_strain_chap_it-5",
  "level": "2",
  "url": "polar_sec_strain_chap_it.html#polar_sec_strain_chap_it-5",
  "type": "Osservazione",
  "number": "1.6.1",
  "title": "",
  "body": " Applicando la decomposizione polare destra alla relazione si ottiene che evidenzia come il vettore venga prima deformato e poi ruotato. Applicando invece la decomposizione polare sinistra si ottiene da interpretare come sequenza di deformazione di seguita da una rotazione. Quanto detto viene illustrato dalla seguente figura.   In particolare si illustra il caso in cui il tensore destro della deformazione, , produce soltanto un allungamento in direzione orizzonale e, a seguire, il tensore produce una rotazione di 45 . È evidente che nel caso in cui si applichi prima la rotazione, seconda e terza sequenza di trasformazioni in figura, il tensore della deformazione non può essere lo stesso ma deve essere diverso e pari la tensore sinistro il quale consente di ottenere la stessa configurazione finale.  Il teorema di decomposizione polare coglie quindi le trasformazioni elementari, rotazione e deformazione pura, che compongono e mette in evidenza la non commutatività delle due trasformazioni. Inoltre se e quindi la trasformazione, nel punto considerato, è una deformazione pura . Al contrario, e quindi la trasformazione, nel punto considerato, è una rotazione rigida .  "
},
{
  "id": "rotation_remark",
  "level": "2",
  "url": "polar_sec_strain_chap_it.html#rotation_remark",
  "type": "Osservazione",
  "number": "1.6.3",
  "title": "tensori di rotazione.",
  "body": " tensori di rotazione  Abbiamo già più volte incontrato il tensore 2D relativo ad una rotazione in senso antiorario di che in termini matriciali ha la seguente espressione Per tale tensore è facile verificare le seguenti proprietà Le proprietà elencate non sono specifiche del particolare tensore considerato ma sono soddisfatte da tutti i tensori di rotazione, qualsiasi sia l'entità dell'angolo di rotazione. Al fine di verificare ciò, si consideri la trasformazione lineare che ruota di un generico angolo un vettore assegnato .       Come mostrato nel video si ottiene il seguente risultato È facile verificare le proprietà con le quali si definiscono i tensori ortogonali propri . La condizione appena scritta consente di ottenere relazione che conferma il fatto che il cambio di volume non può che essere legato unicamente alla parte della trasformazione. È anche facile verificare che   "
},
{
  "id": "polar_sec_strain_chap_it-7",
  "level": "2",
  "url": "polar_sec_strain_chap_it.html#polar_sec_strain_chap_it-7",
  "type": "Osservazione",
  "number": "1.6.4",
  "title": "tensori definiti positivi.",
  "body": " tensori definiti positivi  Se un tensore simmetrico verifica la condizione allora il tensore è definito positivo. Da un punto di vista geometrico tale condizione è facilmente interpretabile come segue: ogni volta che si applica la trasformazione lineare a qualsiasi vettore non nullo, si ottiene un vettore che forma con il vettore di partenza un angolo inferiore a , condizione che ha comunque, molto spesso, un significato fisico ben preciso.  Sulla condizione di positività verrà fornito un ulteriore approfondimento quando si parlerà di autovalori ed autovettori.  "
},
{
  "id": "principal_directions_sec_strain_chap_it",
  "level": "1",
  "url": "principal_directions_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.7",
  "title": "tensore di deformazione <span class=\"process-math\">\\(\\tens{U}\\)<\/span> e direzioni principali (trasformazione degli elementi di linea)",
  "body": " tensore di deformazione e direzioni principali (trasformazione degli elementi di linea)  L'individuazione delle direzioni principali del tensore di deformazione consente di ottenenere una rappresentazione intrinseca della deformazione a cui è soggetto un generico punto del corpo. L'aggettivazione intrenseca si giustifica perché, come vedremo, si ottiene una rappresentazione più semplice dello stato deformativo ma, soprattutto, indipendente dal sistema di riferimento utilizzato.  La discussione che segue, in modo graduale, presenta l'idea che sta dietro alle direzioni principali facendo riferimento al tensore destro della deformazione, , in una forma particolare: la forma diagonale.  Con le dovute precisazioni, quanto si ottiene vale anche per il tensore sinistro della deformazione, .    Si supponga per la seguente forma diagonale Se si applica ad un generico vettore si ottiene Risultato che mostra come in questo caso l'applicazione di a qualsiasi vettore determini soltanto una scalatura, proporzionale al fattore , della lunghezza del vettore che mantiene la direzione originaria. È facile verificare infatti che Inoltre dal momento che ne consegue che l'unico valore ammissibile per è   Possiamo riepilogare quanto ottenuto come segue. Ogni direzione è una direzione principale dal momento che i vettori trasformati mantengono la direzione originaria. Il fattore di scala , che prende il nome di allungamento principale , vale per qualsiasi direzione su cui viene applicato determinando sul vettore di applicazione quanto segue   , il vettore si allunga;   , il vettore non modifica la lunghezza;   , il vettore si accorcia;   , non è ammissibile perché il vettore, per l'ammissibilità della trasformazione, non può annullare la propria lunghezza;   , non è ammissibile perché il vettore, per l'ammissibilità della trasformazione, non può cambiare verso.            Si supponga adesso per sempre una forma diagonale ma con coefficienti non tutti uguali fra loro. In particolare si assuma Applicando ai seguenti tre vettori si ottiene risultato che può essere commentato come segue.  Tutti i vettori appartenenti a direzioni giacenti nel piano individuato dai i primi due assi di riferimento vengono semplicemente scalati dal fattore .  Vettori paralleli al terzo asse di riferimento vengono semplicemente scalati dal fattore .  Tutti gli altri vettori vengono sia scalati sia cambiano direzione e il fattore di scala dipende sia e sia da .  Quindi in questo caso le direzioni principali sono individuate da tutte le direzioni appartenenti al piano e dall'asse .  Per quanto riguarda i fattori di scala e si può osservare come per il precedente caso come condizione che consente di stabilire che Mentre la condizione di positività del tensore  implica anche   Quindi anche in questo caso e assumono il significato di fattori di scala denominati di allungamenti principali degli elementi di linea appartenenti alle direzioni principali. Per e valgono le stesse considerazioni discusse nel caso precedente.       Tutte le considerazioni svolte finora valgono nel caso il tensore assuma la forma con direzioni principali definite dal piano e dall'asse . Ovvero la forma con direzioni principali date dal piano e dall'asse .     È ormai chiaro che la forma diagonale più generica del tensore sia data da dove tutti i coefficienti sulla diagonale sono in generale differenti. In questo caso, evitando di ripetere ulteriori considerazioni oramai ovvie, si può stabilire quanto segue.  Solo gli assi di riferimento , e costituiscono le direzioni principali del tensore .  Gli allungamenti principali  , e sono tutti numeri reali positivi ed associati, rispettivamente, a , e . Elementi di linea appartanenti alle direzioni principali per effetto della trasformazione mantegono direzione e verso originari modificando solo la lunghezza sulla base di tali fattori di scala.             forma spettrale del tensore di deformazione       La forma diagonale del tensore , si veda la , può essere riscritta come segue relazione che suggerisce la seguente forma tensiorale per    Quest'ultimo risultato è di fondamentale importanza perché consente di esprimere rispetto alle direzioni principali nel caso più generale, e anche più frequente, di direzioni principali non allineate con gli assi di riferimento utilizzati nel problema in esame.  Se si denotano con , e le generiche direzioni principali, allora la forma spettrale del tensore è Gli allungamenti principali formano lo spettro di e le direzioni principali sono individuate dalla base ortonormale , e .   Da quando si è cominciato a parlare di direzioni principali non si è mai fatto accenno alla simmetria di . La simmetria del tensore determina la mutua ortogonalità delle direzioni principali, qualunque direzione esse assumano.    La forma spettrale spiega come mai, rispetto alla base di riferimento standard, la forma matriciale del tensore perda quasi sempre la forma diagonale. Infatti, pur essendo sempre presenti le direzioni principali, queste in generale non coincidono con gli assi del sistema di riferimento standard. La perdita della forma diagonale viene evidenziata da una scrittura matriciale del forma spettrale del tensore Dove per le componenti delle direzioni principali si è adottata la seguente notazione   Infine è interessante osservare come l'espressione possa essere scritta nel modo seguente che è la modalità con cui viene valutata l'espressione che assume il tensore quando si passa dal sistema di coordinate costituito dalle direzioni pricipali al sistema di coordinate standard , e . La matrice utilizzata per la trasformazione viene costruita inserendo nelle colonne i vettori , e .    Assumendo per la seguente forma diagonale si calcoli l'espressione che assume supponendo di applicare alle direzioni principali le seguenti rotazioni in successione    Le seguenti istruzioni MATLAB consentono di calcolare quanto richiesto.   R1 = [cos(pi\/4) -sin(pi\/4) 0; sin(pi\/4) cos(pi\/4) 0; 0 0 1]; R2 = [cos(pi\/4) 0 -sin(pi\/4); 0 1 0; sin(pi\/4) 0 cos(pi\/4)]; u1 = R2*R1*[1; 0; 0]; u2 = R2*R1*[0; 1; 0]; u3 = R2*R1*[0; 0; 1]; lam1 = 2; lam2 = 5; lam3 = 7; U = lam1*u1*transpose(u1) + lam2*u2*transpose(u2) + ... lam3*u3*transpose(u3)     Si effettui anche il seguente calcolo e si rifletta sul risultato ottenuto.   u1*transpose(u1) + u2*transpose(u2) + u3*transpose(u3)       Al fine di verificare come il tensore agisca in modo differente sulle direzioni principali e sulle direzioni individuate dal riferimento standard, si consideri il seguente stato piano caratterizzato dalla seguente forma diagonale di  Si assuma per le direzioni principali un'inclinazione di e si applichi quindi il tensore della deformazione ai due quadrati, rappresentati nella seguente figura. Il quadrato di colore rosso ha lati allineati con il riferimento standard, il quadrato di colore blu ha invece lati allineati con le direzioni principali.       L'applicazione del tensore viene effettuata facendo crescere il parametro , da cui dipendono i due autovalori del tensore, dal valore al valore .  Si riportano le istruzioni MATLAB utilizzabili per il calcolo e la visualizzazione delle deformate dei due quadrati a partire dalle configurazioni iniziali.     Q1 = [1 -1 -1 1 1; 1 1 -1 -1 1]; Q2 = [1 0 -1 0 1; 0 1 0 -1 0]; x = Q1(1,:); y = Q1(2,:); pbaspect([1 1 1]) line(x,y,'Color','red','LineWidth',2) x = Q2(1,:); y = Q2(2,:); line(x,y,'Color','blue','LineWidth',2) u1 = [1\/sqrt(2); 1\/sqrt(2)]; u2 = [-1\/sqrt(2); 1\/sqrt(2)]; syms U(lam) U(lam) = [u1 u2]*diag([1.2*lam lam])*transpose([u1 u2]); for v = 1.1:0.1:1.5 UQ1 = U(v)*Q1; x = UQ1(1,:); y = UQ1(2,:); line(x,y,'Color','red','LineWidth',2) UQ2 = U(v)*Q2; x = UQ2(1,:); y = UQ2(2,:); line(x,y,'Color','blue','LineWidth',2) end         autovalori ed autovettori  Noti gli allungamenti principali e le direzioni principali ad essi associate ( ), la forma spettrale consente di valutare facilmente il tensore rispetto al sistema di riferimento utilizzato.  Lo scenario tipico è, comunque, ribaltato. Ovvero dato il tensore si vogliono valutare gli allungamenti e le direzioni principali. Risolvere tale quesito vuol dire calcolare gli autovalori e gli autovettori della matrice associata al tensore . Nella presente sezione non verrà presentata la procedura da utilizzare nella soluzione del problema agli autovalori perché questa costituisce un argomento che sicuramente è già stato oggetto di studio in corsi precedenti e per il quale la letteratura disponibile, anche in rete, è vasta. In questa sede si è ritenuto più importante mettere in evidenza il significato meccanico di autovalori ed autovettori, significato ampiamente discusso nelle sezioni precedenti.  Inoltre per il calcolo degli autovalori ed autovettori si utilizzerà MATLAB come viene illustrato nel seguente esempio.   A partire dall'espressione di ottenuta nell'esempio precedente, ovvero si calcolino con MATLAB gli autovalori ed autovettori.     U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; [V, D] = eig(U)       il polinomio caratteristico  La valutazione degli autovalori ed autovettori associati al tensore passa attraverso la soluzione della seguente equazione cubica dove compare il polinomio caratteristico il quale dipendende da tre quantità che prendono il nome di invarianti del tensore . Il termine invariante sta ad indicare che tali valori non cambiano al variare del sistema di riferimento rispetto al quale viene rappresentato . Si riportano le espressioni da utilizzare per il calcolo degli invarianti nel caso il tensore sia espresso alle direzioni principali e nel caso generico.   Primo invariante  dove compare la traccia del tensore ovvero la somma dei coefficienti appartenenti alla diagonale principale.   Secondo invariante     Terzo invariante       Si verifichi che gli invarianti calcolati su nella forma diagonale e nella forma non cambiano.  Si riportano le istruzioni MATLAB utilizzabili per la verifica.     lam1 = 2; lam2 = 5; lam3 = 7; I1 = lam1 + lam2 + lam3 I2 = lam1*lam2 + lam2*lam3 + lam3*lam1 I3 = lam1*lam2*lam3 U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; I1 = trace(U) I2 = 1\/2*(trace(U)^2 - trace(U*U)) I3 = det(U)        "
},
{
  "id": "principal_directions_sec_strain_chap_it-8-6",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-8-6",
  "type": "Osservazione",
  "number": "1.7.1",
  "title": "",
  "body": " Da quando si è cominciato a parlare di direzioni principali non si è mai fatto accenno alla simmetria di . La simmetria del tensore determina la mutua ortogonalità delle direzioni principali, qualunque direzione esse assumano.  "
},
{
  "id": "principal_directions_sec_strain_chap_it-8-7",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-8-7",
  "type": "Osservazione",
  "number": "1.7.2",
  "title": "",
  "body": " La forma spettrale spiega come mai, rispetto alla base di riferimento standard, la forma matriciale del tensore perda quasi sempre la forma diagonale. Infatti, pur essendo sempre presenti le direzioni principali, queste in generale non coincidono con gli assi del sistema di riferimento standard. La perdita della forma diagonale viene evidenziata da una scrittura matriciale del forma spettrale del tensore Dove per le componenti delle direzioni principali si è adottata la seguente notazione   Infine è interessante osservare come l'espressione possa essere scritta nel modo seguente che è la modalità con cui viene valutata l'espressione che assume il tensore quando si passa dal sistema di coordinate costituito dalle direzioni pricipali al sistema di coordinate standard , e . La matrice utilizzata per la trasformazione viene costruita inserendo nelle colonne i vettori , e .  "
},
{
  "id": "principal_directions_sec_strain_chap_it-8-8-2-2",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-8-8-2-2",
  "type": "Listato",
  "number": "1.7.3",
  "title": "",
  "body": "  R1 = [cos(pi\/4) -sin(pi\/4) 0; sin(pi\/4) cos(pi\/4) 0; 0 0 1]; R2 = [cos(pi\/4) 0 -sin(pi\/4); 0 1 0; sin(pi\/4) 0 cos(pi\/4)]; u1 = R2*R1*[1; 0; 0]; u2 = R2*R1*[0; 1; 0]; u3 = R2*R1*[0; 0; 1]; lam1 = 2; lam2 = 5; lam3 = 7; U = lam1*u1*transpose(u1) + lam2*u2*transpose(u2) + ... lam3*u3*transpose(u3)   "
},
{
  "id": "principal_directions_sec_strain_chap_it-8-8-3-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-8-8-3-1",
  "type": "Listato",
  "number": "1.7.4",
  "title": "",
  "body": "  u1*transpose(u1) + u2*transpose(u2) + u3*transpose(u3)   "
},
{
  "id": "principal_directions_sec_strain_chap_it-8-9-2-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-8-9-2-1",
  "type": "Figura",
  "number": "1.7.5",
  "title": "",
  "body": "  "
},
{
  "id": "principal_directions_sec_strain_chap_it-8-9-5-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-8-9-5-1",
  "type": "Listato",
  "number": "1.7.6",
  "title": "",
  "body": "  Q1 = [1 -1 -1 1 1; 1 1 -1 -1 1]; Q2 = [1 0 -1 0 1; 0 1 0 -1 0]; x = Q1(1,:); y = Q1(2,:); pbaspect([1 1 1]) line(x,y,'Color','red','LineWidth',2) x = Q2(1,:); y = Q2(2,:); line(x,y,'Color','blue','LineWidth',2) u1 = [1\/sqrt(2); 1\/sqrt(2)]; u2 = [-1\/sqrt(2); 1\/sqrt(2)]; syms U(lam) U(lam) = [u1 u2]*diag([1.2*lam lam])*transpose([u1 u2]); for v = 1.1:0.1:1.5 UQ1 = U(v)*Q1; x = UQ1(1,:); y = UQ1(2,:); line(x,y,'Color','red','LineWidth',2) UQ2 = U(v)*Q2; x = UQ2(1,:); y = UQ2(2,:); line(x,y,'Color','blue','LineWidth',2) end   "
},
{
  "id": "principal_directions_sec_strain_chap_it-9-5-2-1",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-9-5-2-1",
  "type": "Listato",
  "number": "1.7.7",
  "title": "",
  "body": "  U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; [V, D] = eig(U)   "
},
{
  "id": "principal_directions_sec_strain_chap_it-9-6",
  "level": "2",
  "url": "principal_directions_sec_strain_chap_it.html#principal_directions_sec_strain_chap_it-9-6",
  "type": "Intuizione",
  "number": "1.7.8",
  "title": "il polinomio caratteristico.",
  "body": " il polinomio caratteristico  La valutazione degli autovalori ed autovettori associati al tensore passa attraverso la soluzione della seguente equazione cubica dove compare il polinomio caratteristico il quale dipendende da tre quantità che prendono il nome di invarianti del tensore . Il termine invariante sta ad indicare che tali valori non cambiano al variare del sistema di riferimento rispetto al quale viene rappresentato . Si riportano le espressioni da utilizzare per il calcolo degli invarianti nel caso il tensore sia espresso alle direzioni principali e nel caso generico.   Primo invariante  dove compare la traccia del tensore ovvero la somma dei coefficienti appartenenti alla diagonale principale.   Secondo invariante     Terzo invariante       Si verifichi che gli invarianti calcolati su nella forma diagonale e nella forma non cambiano.  Si riportano le istruzioni MATLAB utilizzabili per la verifica.     lam1 = 2; lam2 = 5; lam3 = 7; I1 = lam1 + lam2 + lam3 I2 = lam1*lam2 + lam2*lam3 + lam3*lam1 I3 = lam1*lam2*lam3 U = ... [5.2500 -1.0607 -1.7500; ... -1.0607 3.5000 -1.0607; ... -1.7500 -1.0607 5.2500]; I1 = trace(U) I2 = 1\/2*(trace(U)^2 - trace(U*U)) I3 = det(U)      "
},
{
  "id": "measures_sec_strain_chap_it",
  "level": "1",
  "url": "measures_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.8",
  "title": "misure di deformazione",
  "body": " misure di deformazione      tensore di deformazione di Cauchy-Green  Si consideri il seguente prodotto Applicando la decomposizione polare destra si ottiene risultato che mostra come il prodotto contenga solo il contributo deformativo legato ad . Tale prodotto prende il nome di tensore destro di Cauchy-Green e , come , è simmetrico e definito positivo. Esso costituisce una misura importante della deformazione.   Si potrebbe pensare che, noto , la semplice operazione consenta la valutazione di . L'operazione è possibile ma non è banale perché richiede la valutazione degli autovalori e degli autovettori di . Per tale ragione nelle misure di deformazione si utilizza direttamente il tensore o altre grandezze derivate.   Al fine di illustrare comunque la procedura sopra descritta si consideri il seguente gradiente della trasformazione A partire da tale espressione le seguenti istruzioni MATLAB consentono di valutare gli autovettori e gli autovalori di .     F = [4.4623 -3.2249 -0.4874; 2.9623 1.7249 -1.9874; -1.7500 -1.0607 5.2500]; U2 = transpose(F)*F; [u, D2] = eig(U2)     Le seguenti istruzioni invece, valutando gli allungamenti principali come e le direzioni principali estraendole dalle colonne della matrice degli autovettori restituita da MATLAB , calcolano il tensore e quindi con la relazione anche la il tensore di rotazione associato alla decomposizione polare. Si valuta anche con la relazione      u1 = u(:,1); u2 = u(:,2); u3 = u(:,3); lam1 = sqrt(D2(1,1)); lam2 = sqrt(D2(2,2)); lam3 = sqrt(D2(3,3)); U = lam1*u1*transpose(u1)+lam2*u2*transpose(u2)+lam3*u3*transpose(u3) R = F*inv(U) V = F*transpose(R)       In maniera analoga si perviene al tensore sinistro di Cauchy-Green , ovvero da cui    Tra i due tensori di Cauchy-Green, è più utilizzato nella meccanica dei solidi perché agisce sulla posizione del punto espressa nella configurazione di riferimento.    interpretazione delle componenti del tensore  Applichiamo al gradiente della trasformazione quanto detto in a proposito del significato delle matrici associate a trasformazioni lineari. Ovvero espriamo la matrice associata ad come segue dove nelle colonne di compaiono i trasformati dei vettori della base. Si valuti quindi la matrice associata al tensore sulla base della definizione  da cui si ottiene Tale risultato consente di stabilire quanto segue per i coefficienti di .  Per il generico coefficiente di collocato sulla diagonale principale, , si ha Si può constatare quindi che la generica componente sulla diagonale principale rappresenta il quadrato della norma del vettore trasformato . Dal momento che il vettore è di lunghezza unitaria, la componente è quindi il quadrato dell'allungamento lungo la direzione . Quindi si può stabilire quanto segue dove con si è indicato l' allungamento lungo la direzione . Nel caso di forma diagonale del tensore tale allungamento coincide con il corrispondente allungamento principale o autovalore di .  Per le componenti fuori dalla diagonale principale si ottiene invece dove rappresenta l'angolo formato dai vettori e . Tale relazione, utilizzando la , diventa risultato che mostra come la generica componente dipenda, oltre che dagli allungamenti lungo le direzioni ed , principalmente dall'angolo formato dai trasformati dei vettori. Tale dipendenza, introducendo l'angolo ovvero l'angolo dato dalla differenza fra gli angoli formati da ed prima e dopo la trasformazione, può essere riformulata come segue da cui La quantità prende il nome di angolo di taglio o, più semplicemente, taglio . Nei casi in cui è nullo, ovvero l'angolo formato dalle direzioni ed non varia, la componente fuori diagonale è nulla.        tensore della deformazione di Green-Lagrange  Una misura di deformazione molto utilizzata si basa sulla differenza dei quadrati delle lunghezze nella configurazione attuale ed in quella di riferimento. In particolare si ricava quanto segue Si perviene alla definizione del seguente tensore noto come tensore della deformazione di Green-Lagrange (l'utilizzo del fattore diverrà chiaro nel seguito). Il tensore è simmetrico ma non è definito positivo.   Il tensore è definito positivo in quanto correlato al quadrato del fattore di scala con il quale viene modificata la lunghezza del generico segmento . Nel campo delle deformazioni ammissibili, tale fattore di scala, come per aree e volumi, non può annullarsi. Con il tensore di Green-Lagrange si introduce una misura dell'allungamento del segmento rispetto alla sua dimensione iniziale, rendendo possibile quindi valori negativi della misura di Green-Lagrange quando il segmento si accorcia, ovvero valori nulli quando la lunghezza del segmento non cambia.      tensori della deformazione e gradiente del campo di spostamento  I modelli meccanici che verranno discussi durante il corso tipicamente vengono formulati utilizzando come ente cinematico il campo di spostamento che, si ricorda, è definito come . Da cui . Pertanto il tensore di Green-Lagrange è esprimibile come Pertanto, in termini di gradiente dello spostamento, il tensore della deformazione di Green-Lagrange ha la seguente espressione   Analogamente anche può essere espresso rispetto al gradiente dello spostamento, ovvero da cui si ottiene    "
},
{
  "id": "measures_sec_strain_chap_it-2-3",
  "level": "2",
  "url": "measures_sec_strain_chap_it.html#measures_sec_strain_chap_it-2-3",
  "type": "Osservazione",
  "number": "1.8.1",
  "title": "",
  "body": " Si potrebbe pensare che, noto , la semplice operazione consenta la valutazione di . L'operazione è possibile ma non è banale perché richiede la valutazione degli autovalori e degli autovettori di . Per tale ragione nelle misure di deformazione si utilizza direttamente il tensore o altre grandezze derivate.   Al fine di illustrare comunque la procedura sopra descritta si consideri il seguente gradiente della trasformazione A partire da tale espressione le seguenti istruzioni MATLAB consentono di valutare gli autovettori e gli autovalori di .     F = [4.4623 -3.2249 -0.4874; 2.9623 1.7249 -1.9874; -1.7500 -1.0607 5.2500]; U2 = transpose(F)*F; [u, D2] = eig(U2)     Le seguenti istruzioni invece, valutando gli allungamenti principali come e le direzioni principali estraendole dalle colonne della matrice degli autovettori restituita da MATLAB , calcolano il tensore e quindi con la relazione anche la il tensore di rotazione associato alla decomposizione polare. Si valuta anche con la relazione      u1 = u(:,1); u2 = u(:,2); u3 = u(:,3); lam1 = sqrt(D2(1,1)); lam2 = sqrt(D2(2,2)); lam3 = sqrt(D2(3,3)); U = lam1*u1*transpose(u1)+lam2*u2*transpose(u2)+lam3*u3*transpose(u3) R = F*inv(U) V = F*transpose(R)      "
},
{
  "id": "measures_sec_strain_chap_it-2-5",
  "level": "2",
  "url": "measures_sec_strain_chap_it.html#measures_sec_strain_chap_it-2-5",
  "type": "Osservazione",
  "number": "1.8.4",
  "title": "",
  "body": " Tra i due tensori di Cauchy-Green, è più utilizzato nella meccanica dei solidi perché agisce sulla posizione del punto espressa nella configurazione di riferimento.  "
},
{
  "id": "measures_sec_strain_chap_it-2-6",
  "level": "2",
  "url": "measures_sec_strain_chap_it.html#measures_sec_strain_chap_it-2-6",
  "type": "Intuizione",
  "number": "1.8.5",
  "title": "interpretazione delle componenti del tensore <span class=\"process-math\">\\(\\tens{C}\\)<\/span>.",
  "body": " interpretazione delle componenti del tensore  Applichiamo al gradiente della trasformazione quanto detto in a proposito del significato delle matrici associate a trasformazioni lineari. Ovvero espriamo la matrice associata ad come segue dove nelle colonne di compaiono i trasformati dei vettori della base. Si valuti quindi la matrice associata al tensore sulla base della definizione  da cui si ottiene Tale risultato consente di stabilire quanto segue per i coefficienti di .  Per il generico coefficiente di collocato sulla diagonale principale, , si ha Si può constatare quindi che la generica componente sulla diagonale principale rappresenta il quadrato della norma del vettore trasformato . Dal momento che il vettore è di lunghezza unitaria, la componente è quindi il quadrato dell'allungamento lungo la direzione . Quindi si può stabilire quanto segue dove con si è indicato l' allungamento lungo la direzione . Nel caso di forma diagonale del tensore tale allungamento coincide con il corrispondente allungamento principale o autovalore di .  Per le componenti fuori dalla diagonale principale si ottiene invece dove rappresenta l'angolo formato dai vettori e . Tale relazione, utilizzando la , diventa risultato che mostra come la generica componente dipenda, oltre che dagli allungamenti lungo le direzioni ed , principalmente dall'angolo formato dai trasformati dei vettori. Tale dipendenza, introducendo l'angolo ovvero l'angolo dato dalla differenza fra gli angoli formati da ed prima e dopo la trasformazione, può essere riformulata come segue da cui La quantità prende il nome di angolo di taglio o, più semplicemente, taglio . Nei casi in cui è nullo, ovvero l'angolo formato dalle direzioni ed non varia, la componente fuori diagonale è nulla.    "
},
{
  "id": "measures_sec_strain_chap_it-3-3",
  "level": "2",
  "url": "measures_sec_strain_chap_it.html#measures_sec_strain_chap_it-3-3",
  "type": "Osservazione",
  "number": "1.8.6",
  "title": "",
  "body": " Il tensore è definito positivo in quanto correlato al quadrato del fattore di scala con il quale viene modificata la lunghezza del generico segmento . Nel campo delle deformazioni ammissibili, tale fattore di scala, come per aree e volumi, non può annullarsi. Con il tensore di Green-Lagrange si introduce una misura dell'allungamento del segmento rispetto alla sua dimensione iniziale, rendendo possibile quindi valori negativi della misura di Green-Lagrange quando il segmento si accorcia, ovvero valori nulli quando la lunghezza del segmento non cambia.  "
},
{
  "id": "infinitesimal_sec_strain_chap_it",
  "level": "1",
  "url": "infinitesimal_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.9",
  "title": "tensore della deformazione infinitesima",
  "body": " tensore della deformazione infinitesima  Accade spesso nelle applicazioni che l'entità del gradiente dello spostamento sia piccola. In questi casi il contributo dipendente da e presente sia nel tensore sia nel tensore diventa trascurabile. Pertanto il tensore della deformazione di Green-Lagrange conciderà con il tensore della deformazione infinitesima   mentre il tensore di Cauchy assumerà la seguente espressione     moti infinitesimi  Come premessa si ricordano le espressione esplicite del campo di spostamento  e del relativo gradiente  La seguente decomposizione di  in generale applicabile a tutti i tensori, consente di inserire in un quadro più generale il tensore della deformazione infinitesima prima introdotto ed il ruolo giocato da nella descrizione dei moti infinitesimi. Per moti infinitesimi intenderemo quindi i moti caratterizzati dalla condizione .  La parte simmetrica, , che in forma matriciale è esprimibile come fornisce il tensore della deformazione infinitesima . La notazione utilizzata per le singole componenti del tensore è   La parte emisimmetrica, , che in forma matriciale è esprimibile come fornisce il tensore della rotazione infinitesima .  Nel caso di moto infinitesimo generico   Nel caso di moto rigido infinitesimo        interpretazione delle componenti del tensore della deformazione infinitesima  Al fine di individuare il significato delle componenti del tensore conviene richiamare l'espressione del tensore rispetto al gradiente delo spostamento, ovvero da cui, effettuando i calcoli, ad esempio con le seguenti istruzioni MATLAB     syms u1_X1 u1_X2 u1_X3 u2_X1 u2_X2 u2_X3 u3_X1 u3_X2 u3_X3 Du = [u1_X1 u1_X2 u1_X3;u2_X1 u2_X2 u2_X3; u3_X1 u3_X2 u3_X3] C = diag([1 1 1]) + Du + transpose(Du) + transpose(Du)*Du C(1,1) C(1,2)    si possono ricavare le espressioni di una componente sulla diagonale ed una fuori dalla diagonale Per la componente sulla diagonale, utilizzando il risultato ottenuto per la componente sulla diagonale di , si può scrivere Da cui si ricava Analogo risultato vale per le altre componenti di sulla diagonale.  Per la componente fuori dalla diagonale, utilizzando il risultato , si ha e quindi     rotazioni infinitesime  Per spiegare la denominazione \"rotazione infinitesima\" che è stata data alla parte emisimmetrica del gradiente dello spostamento conviene discutere in concreto una trasformazione caratterizzata solo da una semplice rotazione. A tal fine si consideri una rotazione intorno all'asse . La parte significativa della trasformazione può essere discussa direttamente nel piano con Il campo di spostamento associato è Con tali dati è possibile calcolare il gradiente della trasformazione che, nel caso specifico, è composto solo dalla rotazione dove, come già discusso nelle sezioni precedenti, Inoltre e quindi Risultato che evidenzia la decomposizione del gradiente dello spostamento con ma ancora del tutto generico e che non fa riferimento agli spostamenti infinitesimi.  Ipotizzare spostamenti infinitesimi equivale ad assumere valori dell'angolo molto piccoli, , ovvero e . Da cui deriva Pertanto nel caso di spostamenti infinitesi la relazione può essere riscritta come segue      La Figura illustra graficamente il risultato ottenuto mostrando anche in che relazione stanno il vettore ottenuto applicando  e il vettore ottenuto applicando l'approssimazione di data da      Dato un tensore emisimmetrico, la cui forma matriciale ad esso associata per definizione sarà si può verificare come la sua applicazione ad un vettore  equivalga a calcolare il seguente prodotto vettoriale dove le componenti di sono messe in corrispondenza con le componenti di nel modo seguente Quindi, noto , può essere espresso come segue   Pertanto si ha e è il vettore assiale associato al tensore emisimmetrico . L'aggettivo assiale deriva dal fatto che individua l'asse di una rotazione intorno al quale si effettua la rotazione infinitesima.   "
},
{
  "id": "infinitesimal_sec_strain_chap_it-4",
  "level": "2",
  "url": "infinitesimal_sec_strain_chap_it.html#infinitesimal_sec_strain_chap_it-4",
  "type": "Intuizione",
  "number": "1.9.1",
  "title": "interpretazione delle componenti del tensore della deformazione infinitesima.",
  "body": " interpretazione delle componenti del tensore della deformazione infinitesima  Al fine di individuare il significato delle componenti del tensore conviene richiamare l'espressione del tensore rispetto al gradiente delo spostamento, ovvero da cui, effettuando i calcoli, ad esempio con le seguenti istruzioni MATLAB     syms u1_X1 u1_X2 u1_X3 u2_X1 u2_X2 u2_X3 u3_X1 u3_X2 u3_X3 Du = [u1_X1 u1_X2 u1_X3;u2_X1 u2_X2 u2_X3; u3_X1 u3_X2 u3_X3] C = diag([1 1 1]) + Du + transpose(Du) + transpose(Du)*Du C(1,1) C(1,2)    si possono ricavare le espressioni di una componente sulla diagonale ed una fuori dalla diagonale Per la componente sulla diagonale, utilizzando il risultato ottenuto per la componente sulla diagonale di , si può scrivere Da cui si ricava Analogo risultato vale per le altre componenti di sulla diagonale.  Per la componente fuori dalla diagonale, utilizzando il risultato , si ha e quindi   "
},
{
  "id": "small_rotations_insight",
  "level": "2",
  "url": "infinitesimal_sec_strain_chap_it.html#small_rotations_insight",
  "type": "Intuizione",
  "number": "1.9.3",
  "title": "rotazioni infinitesime.",
  "body": " rotazioni infinitesime  Per spiegare la denominazione \"rotazione infinitesima\" che è stata data alla parte emisimmetrica del gradiente dello spostamento conviene discutere in concreto una trasformazione caratterizzata solo da una semplice rotazione. A tal fine si consideri una rotazione intorno all'asse . La parte significativa della trasformazione può essere discussa direttamente nel piano con Il campo di spostamento associato è Con tali dati è possibile calcolare il gradiente della trasformazione che, nel caso specifico, è composto solo dalla rotazione dove, come già discusso nelle sezioni precedenti, Inoltre e quindi Risultato che evidenzia la decomposizione del gradiente dello spostamento con ma ancora del tutto generico e che non fa riferimento agli spostamenti infinitesimi.  Ipotizzare spostamenti infinitesimi equivale ad assumere valori dell'angolo molto piccoli, , ovvero e . Da cui deriva Pertanto nel caso di spostamenti infinitesi la relazione può essere riscritta come segue      La Figura illustra graficamente il risultato ottenuto mostrando anche in che relazione stanno il vettore ottenuto applicando  e il vettore ottenuto applicando l'approssimazione di data da    "
},
{
  "id": "skew_tensor_insight",
  "level": "2",
  "url": "infinitesimal_sec_strain_chap_it.html#skew_tensor_insight",
  "type": "Intuizione",
  "number": "1.9.5",
  "title": "",
  "body": " Dato un tensore emisimmetrico, la cui forma matriciale ad esso associata per definizione sarà si può verificare come la sua applicazione ad un vettore  equivalga a calcolare il seguente prodotto vettoriale dove le componenti di sono messe in corrispondenza con le componenti di nel modo seguente Quindi, noto , può essere espresso come segue   Pertanto si ha e è il vettore assiale associato al tensore emisimmetrico . L'aggettivo assiale deriva dal fatto che individua l'asse di una rotazione intorno al quale si effettua la rotazione infinitesima.  "
},
{
  "id": "exercises_sec_strain_chap_it",
  "level": "1",
  "url": "exercises_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.10",
  "title": "esercizi",
  "body": " esercizi    Si consideri la seguente trasformazione bidimensionale   La trasformazione è lineare?  Si calcolino le componenti del gradiente della trasformazione, il suo determinante e il suo inverso.  Si studi la trasformazione di un quadrato di lato unitario definito dai seguenti punti        Si consideri la seguente trasformazione   La trasformazione è lineare?  Si calcolino le componenti del gradiente della trasformazione, il suo determinante e il suo inverso.  Si studi la trasformazione di un cubo di lato unitario definito dai seguenti punti    Si calcoli anche il campo di spostamento .       Si applichino al cubo unitario del problema precedente le seguenti trasformazioni determinando per ciascuna:  la nuova configurazione del cubo;  le componenti del gradiente della trasformazione;  l'ammissibilità della trasformazione.       Si consideri la seguente trasformazione     Si calcoli il gradiente della trasformazione e il suo determinante.  La trasformazione è ammissibile per qualsiasi sottoinsieme dello spazio euclideo?  Si calcoli anche il campo di spostamento .       Si consideri il seguente campo di spostamento Calcolare il gradiente della trasformazione ed il suo inverso; si verifichi anche che la trasformazione è isocorica.     Sia assegnata la seguente trasformazione con , e costanti generiche.    Calcolare i tensori e .  Assumendo e valutare per quale valore di la deformazione è nulla.       Si assuma per il gradiente della trasformazione relativamente ad un punto di un corpo il seguente valore Calcolare il tensore e il tensore destro della deformazione .     Sia assegnata la seguente trasformazione con , e costanti generiche.    Studiare la trasformazione di un cubo di lato unitario definito dai punti    Calcolare i tensori , e .  Gli allungamenti relativi agli assi di riferimento.  L'allungamento lungo la direzione che va dal punto al punto . Suggerimento : equazione .       Sia assegnata la seguente trasformazione dove è una costante generica.    Studiare la trasformazione di un cubo di lato unitario definito dai punti    Calcolare le componenti del tensore .  Calcolare l'angolo di taglio relativo alle direzioni e per la coppia .  Calcolare gli allungamenti ( ) e le direzioni principali del tensore . Suggerimento : si ricorda che .       Si consideri il seguente campo di spostamento   Determinare il tensore della deformazione infinitesima .  Determinare le deformazioni principali ( ) e le direzioni principali di .  Calcolare gli allungamenti ( ) e le direzioni principali del tensore .  Confrontare e sulla base dell'equazione .  Confrontare le direzioni principali di con le direzioni principali .  Ripetere le valutazioni precedenti rispetto allo stesso campo di spostamento ma amplificato con un fattore pari a : che considerazioni si possono trarre?     "
},
{
  "id": "answers_sec_strain_chap_it",
  "level": "1",
  "url": "answers_sec_strain_chap_it.html",
  "type": "Paragrafo",
  "number": "1.11",
  "title": "risposte ad alcuni degli esercizi proposti",
  "body": " risposte ad alcuni degli esercizi proposti    Risposta parziale all'esercizio della .   % terzo quesito T = @(X) [4-2*X(1)-X(2); 2+3\/2*X(1)-X(2)\/2]; Square_0 = [0 1 1 0 0; 0 0 1 1 0]; Square=[T(Square_0(:,1)) T(Square_0(:,2)) T(Square_0(:,3)) ... T(Square_0(:,4)) T(Square_0(:,5))]; hold on plot(Square_0(1,:), Square_0(2,:), 'k-', \"LineWidth\", 4) plot(Square(1,:), Square(2,:), 'r-', \"LineWidth\", 2) ylim([0 4]) pbaspect([1 1 1])             Risposta all'esercizio della .   X = sym('X', [3 1]); u = sym('u', [3 1]); u(1) = 3.5*10^(-3)*X(1) + 2.0*10^(-3)*X(2); u(2) = 1.0*10^(-3)*X(1) - 0.5*10^(-3)*X(2); u(3) = 0; Du1 = gradient(u(1), X); Du2 = gradient(u(2), X); Du3 = gradient(u(3), X); Du = [transpose(Du1); transpose(Du2); transpose(Du3)]; % primo quesito eps = (Du + transpose(Du))\/2 % secondo quesito [epsV,epsD] = eig(eps); eps1 = eval(epsD(1,1)); eps2 = eval(epsD(2,2)); eps3 = eval(epsD(3,3)); % terzo quesito I = diag([1 1 1]); C = I + Du + transpose(Du) + transpose(Du)*Du; [cV,cD] = eig(C); lam1 = eval(sqrt(cD(1,1))); lam2 = eval(sqrt(cD(2,2))); lam3 = eval(sqrt(cD(3,3))); % quarto quesito % verificare che eps1 è circa pari a lam1 - 1 % verificare che eps2 è circa pari a lam2 - 1 % verificare che eps3 è circa pari a lam3 - 1 % quinto quesito (visualizzare gli autovettori) eval(epsV) eval(cV)      "
},
{
  "id": "answers_sec_strain_chap_it-2-1-2",
  "level": "2",
  "url": "answers_sec_strain_chap_it.html#answers_sec_strain_chap_it-2-1-2",
  "type": "Listato",
  "number": "1.11.1",
  "title": "",
  "body": "  % terzo quesito T = @(X) [4-2*X(1)-X(2); 2+3\/2*X(1)-X(2)\/2]; Square_0 = [0 1 1 0 0; 0 0 1 1 0]; Square=[T(Square_0(:,1)) T(Square_0(:,2)) T(Square_0(:,3)) ... T(Square_0(:,4)) T(Square_0(:,5))]; hold on plot(Square_0(1,:), Square_0(2,:), 'k-', \"LineWidth\", 4) plot(Square(1,:), Square(2,:), 'r-', \"LineWidth\", 2) ylim([0 4]) pbaspect([1 1 1])   "
},
{
  "id": "answers_sec_strain_chap_it-2-1-3",
  "level": "2",
  "url": "answers_sec_strain_chap_it.html#answers_sec_strain_chap_it-2-1-3",
  "type": "Figura",
  "number": "1.11.2",
  "title": "",
  "body": "  "
},
{
  "id": "answers_sec_strain_chap_it-3-1-2",
  "level": "2",
  "url": "answers_sec_strain_chap_it.html#answers_sec_strain_chap_it-3-1-2",
  "type": "Listato",
  "number": "1.11.3",
  "title": "",
  "body": "  X = sym('X', [3 1]); u = sym('u', [3 1]); u(1) = 3.5*10^(-3)*X(1) + 2.0*10^(-3)*X(2); u(2) = 1.0*10^(-3)*X(1) - 0.5*10^(-3)*X(2); u(3) = 0; Du1 = gradient(u(1), X); Du2 = gradient(u(2), X); Du3 = gradient(u(3), X); Du = [transpose(Du1); transpose(Du2); transpose(Du3)]; % primo quesito eps = (Du + transpose(Du))\/2 % secondo quesito [epsV,epsD] = eig(eps); eps1 = eval(epsD(1,1)); eps2 = eval(epsD(2,2)); eps3 = eval(epsD(3,3)); % terzo quesito I = diag([1 1 1]); C = I + Du + transpose(Du) + transpose(Du)*Du; [cV,cD] = eig(C); lam1 = eval(sqrt(cD(1,1))); lam2 = eval(sqrt(cD(2,2))); lam3 = eval(sqrt(cD(3,3))); % quarto quesito % verificare che eps1 è circa pari a lam1 - 1 % verificare che eps2 è circa pari a lam2 - 1 % verificare che eps3 è circa pari a lam3 - 1 % quinto quesito (visualizzare gli autovettori) eval(epsV) eval(cV)   "
},
{
  "id": "refs_strain_chap_it",
  "level": "1",
  "url": "refs_strain_chap_it.html",
  "type": "Bibliografia",
  "number": "1.12",
  "title": "riferimenti e letture suggerite",
  "body": " riferimenti e letture suggerite  Grant Sanderson, Essence of Linear Algebra .  Morton E. Gurtin, An introduction to continuum mechanics . Accademic Press, 1981. Pagg. 41-48, 54-56.  Oscar Gonzalez and Andrew M. Stuart, A first course in continuum mechanics . Cambridge University Press, 2008. Pagg. 112-128.  Gerhard A. Holzapfel, Nonlinear solid mechanics . John Wiley & Sons Ltd, Chichester, 2000. Pagg. 55-61, 70-78, 85-91.  "
},
{
  "id": "basics_sec_stress_chap_it",
  "level": "1",
  "url": "basics_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.1",
  "title": "l’ipotesi di continuità",
  "body": " l'ipotesi di continuità  Alla base della meccanica del continuo vi è l'idea di studiare differenti fenomeni fisici senza una precisa conoscenza della micro-struttura interna della materia adottando il punto di vista, così detto, macroscopico . Ovvero si utilizzano una serie di quantità che rappresentano in forma media tutti i processi che avvengono a scala atomica o molecolare.  I sistemi macroscopici così definiti possono essere descritti in maniera efficace utilizzando l'approccio continuo che assume, per il corpo in esame, una distribuzione della materia continua nel spazio e nel tempo. Il corpo è sempre visto come un assemblaggio di singole particelle o punti da non confondere però con i sistemi di masse puntuali della meccanica Newtoniana o i sistemi di particelle della teoria atomica. Tipicamente il punto di un corpo continuo al suo interno nasconde una struttura interna (un accumulo di molecole o atomi ovvero una composizione etrogenea di vari costituenti) di dimensioni sufficientemente piccole se confrontate con la scala del problema in esame. Il comportamento del punto o particella è conseguenza del comportamento collettivo di tutto ciò che, al suo interno , costituisce il punto del continuo.     La continuità ha come conseguenze: la possibilità di effettuare una associazione uno-a-uno tra i punti del corpo e i punti della regione di spazio euclideo occupata dal corpo; la possibilità di suddividere un corpo in regioni di volume sempre più piccole e di ritrovare sempre le stesse caratteristiche fisiche al diminuire del volume.  L'analiticità delle funzioni utilizzate per descrivere il fenomeno fisico in esame consente di formulare le leggi fondamentali della meccanica in termini di equazioni differenziali.  L'approccio macroscopico alla base della meccanica del continuo è utilizzabile nello studio di solidi, fluidi e gas.    descrizione geometrica dei corpi  L'ipotesi di continuità consente di identificare il corpo con un sottoinsieme aperto dello spazio euclideo. Per quanto già discusso nel capitolo dedicato alla cinematica, il corpo assumerà diverse configurazioni, nel seguito ci riferiremo ad una generica configurazione assunta dal corpo durante il suo moto. Su tale configurazione è possibile calcolare, ad esempio, il volume occupato dal corpo      massa  La massa è una proprietà della materia che quantifica la sua resistenza all'accelerazione. In accordo con l'ipotesi di continuità si assume che la massa sia distribuita in maniera continua su tutto il corpo. In particolare si assume l'esistenza di un campo scalare denonimato densità di massa tale che Una definizione formale della massa può essere effettuata come segue. Sia un punto in e sia una famiglia di volumi tali che se . Allora Se tale limite esiste ed è positivo in ogni punto del corpo allora l'ipotesi di continuità è verificata. Inoltre il limite deve essere sempre lo stesso per qualsiasi famiglia di volumi avente la proprietà descritta.   L'idea moderna del limite di una funzione risale a Bolzano che, nel 1817, introdusse le basi della tecnica epsilon-delta per definire le funzioni continue. Tuttavia, il suo lavoro non era noto durante la sua vita. Il matematico francese Augustin-Louis Cauchy, nel suo libro della Cours d'analyse del 1821, ha discusso di quantità variabili, infinitesimi e limiti e ha definito la continuità di stabilendo che una variazione infinitesimale in produce necessariamente una variazione infinitesimale in .  Cauchy fu il primo a formulare la meccanica del continuo nel XIX secolo.      forze  L'interazione meccanica fra parti di un corpo o di un corpo con l'ambiente circostante viene descritta mediante forze. Si considerano due tipi forze: forze di volume, che agiscono all'interno del corpo, e forze di superficie, che sono esercitate attraverso una superficie. Per l'ipotesi di continuità, come fatto per la massa, anche per le forze si postula l'esistenza di campi vettoriali che consentono di calcolare la risultante di tutte le forze agenti sul corpo e il momento risultante (rispetto all'origine) delle forze agenti dove denota il contorno di e quindi una superficie, e denotano due campi vettoriali che verranno meglio descritti nel seguito e che rappresentano, rispettivamente, una densità di forza di volume o, semplicemente, forza di volume e una densità di forza di superficie che verrà chiamata trazione .      forza di volume  Le forze di volume non sorgono a causa di contatto fisico fra i corpi ma sono il risultato di un'azione a distanza, ad esempio la forza gravitazionale. Si assume quindi l'esistenza di una campo vettoriale funzione della posizione del punto appartenente a . In maniera analoga a quanto fatto per la densità di massa, è possibile dare una definizione formale di : dove è una forza a distanza agente sul volume .    trazione  La trazione deriva dal contatto fisico tra corpi. Il contatto può avvenire attraverso il contorno del corpo ed in questo caso si avrà una trazione esterna . Oppure, come discuteremo più diffusamente nel seguito, può avvenire attraverso una superficie ideale passante all'interno di un corpo, in questo caso si parlerà di trazione interna . Introduciamo quindi una definizione formale della trazione che ci consetirà di specificare la dipendenza di tale campo vettoriale.  Dato un punto del corpo posto all'interno o sulla frontiera di , e data una famiglia di superfici passanti per tale punto tali che se , si assume l'esistenza di un campo vettoriale così definito dove è una forza di superficie agente sull'area . prende il nome di vettore di trazione dipendente non solo da ma anche anche dalla famiglia di superfici passante per .  Un'opportuna definizione di tale dipendenza, elaborata da Cauchy, conduce alla nozione di tensore della tensione di Cauchy .    "
},
{
  "id": "macro_fig",
  "level": "2",
  "url": "basics_sec_stress_chap_it.html#macro_fig",
  "type": "Figura",
  "number": "2.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "basics_sec_stress_chap_it-9-3",
  "level": "2",
  "url": "basics_sec_stress_chap_it.html#basics_sec_stress_chap_it-9-3",
  "type": "Nota",
  "number": "2.1.2",
  "title": "",
  "body": " L'idea moderna del limite di una funzione risale a Bolzano che, nel 1817, introdusse le basi della tecnica epsilon-delta per definire le funzioni continue. Tuttavia, il suo lavoro non era noto durante la sua vita. Il matematico francese Augustin-Louis Cauchy, nel suo libro della Cours d'analyse del 1821, ha discusso di quantità variabili, infinitesimi e limiti e ha definito la continuità di stabilendo che una variazione infinitesimale in produce necessariamente una variazione infinitesimale in .  Cauchy fu il primo a formulare la meccanica del continuo nel XIX secolo.  "
},
{
  "id": "continuo_forze_fig",
  "level": "2",
  "url": "basics_sec_stress_chap_it.html#continuo_forze_fig",
  "type": "Figura",
  "number": "2.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "equilibrium_sec_stress_chap_it",
  "level": "1",
  "url": "equilibrium_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.2",
  "title": "equazioni di equilibrio",
  "body": " equazioni di equilibrio  Date le risultanti definite dalle espressioni e , la condizione di equilibrio statico per un corpo continuo è espressa dalle seguenti equazioni   Tali condizioni, per l'ipotesi di continuità, non valgono solo per il corpo in esame ma anche per qualsiasi sottoinsieme estratto dal corpo principale.   Tale operazione di separazione, tipica della meccanica dei solidi, viene effetuata utilizzando delle superfici immaginarie con cui viene tagliato il corpo di partenza. In particolare, si veda la figura, per le due parti di corpo così ottenute si potranno scrivere le seguenti coppie di equazioni e dove rappresenta l'azione esercitata su dall'altra parte di dominio e, al contrario, rappresenta l'azione esercitata su dall'altra parte .  "
},
{
  "id": "continuo_in_due_fig",
  "level": "2",
  "url": "equilibrium_sec_stress_chap_it.html#continuo_in_due_fig",
  "type": "Figura",
  "number": "2.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "stress_sec_stress_chap_it",
  "level": "1",
  "url": "stress_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.3",
  "title": "il tensore della tensione di Cauchy",
  "body": " il tensore della tensione di Cauchy    postulato di Cauchy  Nella precedente sezione la trazione è stata formulata esplicitando una dipendenza molto generica dalla superficie passante per il punto . In base al postulato di Cauchy, fondamentale per tutti gli sviluppi successivi, si assume invece dove rappresenta la direzione normale alla superficie individuata da un vettore di lunghezza unitaria. Pertanto viene postulata l'assoluta indipendenza del vettore trazione da fattori come la curvatura della superficie passante per il punto . Nella figura vengono mostrate alcune superfici passanti per il punto e che condividono in tale punto la stessa tangente all superficie e quindi la stessa direzione normale.        il Teorema della tensione di Cauchy  Si presentano una serie di risultati che presi tutti insieme costituiscono il Teorema della tensione di Cauchy il cui enunciato verrà dato al termine della sezione.   l'equilibrio sul tetraedro di Cauchy       L'applicazione dell'equazione assumendo come sottodominio il tetraedro di Cauchy illustrato nel video precedente fornisce Si è già osservato che quando la misura del volume tende a zero molto più rapidamente della misura della superficie . Inoltre , allora la precedente equazione diventa Tenendo conto della relazione geometrica che lega le facce , e alla faccia , si ottiene e quindi     principio di azione e reazione  Se nell'equazione si assume si ottiene La stessa condizione vale per e .    il tensore  Sulla base delle equazioni e si ottiene relazione che mostra come la trazione sia legata alla generica giacitura mediante una trasformazione lineare , si veda il video sulle trasformazioni lineari in , rappresentabile attraverso un tensore del secondo ordine. Ovvero  prende il nome di tensore della tensione di Cauchy .  In forma matriciale la precedente relazione si scrive dove compaiono in maniera esplicita le 9 componenti del tensore della tensione. Tali componenti possono essere visualizzate come segue,     ovvero ciascuna colonna della matrice associata al tensore della tensione contiene le componenti di una delle 3 trazioni agenti sulle giaciture individuate dagli assi coordinati.    forma differenziale delle equazioni di equilibrio       Si consideri la condizione di annullamento della risultante delle forze applicate, equazione . Tale equazione, grazie alla , può essere riformulata come segue Per il teorema della divergenza l'integrale di superficie può essere trasformato ottenendo quindi Tale equazione, per la continuità, deve essere soddisfatta per qualsiasi sottodominio scelto a piacere del corpo in esame, pertanto si ricava la seguente equazione differenziale da soddisfare in ogni punto del corpo . Tale equazione vettoriale viene denominata equazione indefinita di equlibrio o, riferendosi alle tre equazioni relative alle singole componenti, equazioni indefinite di equlibrio .    simmetria del tensore  La condizione di annullamento del momento risultante, equazione , consente di stabilire la simmetria del tensore della tensione. Si tralascia comunque di ricavarla in maniera esplicita e si rimanda ai riferimenti forniti in coda al capitolo.    A.-L. Cauchy   Dato un corpo soggetto a dei carichi applicati, una condizione necessaria e sufficiente affinché il corpo sia in equilibrio (soddisfacimento delle , ) è che esista un campo tensiorale tale che        osservazioni sulle equazioni indefinite di equilibrio    Le equazioni non determinano in maniera completa il campo di tensione di Cauchy per un corpo in equilibrio. In particolare si hanno 3 equazioni differenziali per determinare, per la simmetria del tensore, le componenti incognite di . Come si vedrà nel seguito tale inconveniente verrà risolto caratterizzando il comportamento costitutivo del materiale di cui è composto il corpo. Comportamento da ricostruire per via sperimentale e riferendosi alla media delle grandezze in gioco. Si ricorda che l'approccio macroscopico non si basa su una precisa descrizione della micro-struttura interna della materia.  Le condizioni al contorno da associare alle equazioni differenziali saranno determinate mettendo in relazione la tensione incognita e le trazioni assegnate, , sul contorno del corpo cui le equazioni di equilibriio si riferiscono. Tale relazione viene stabilita mediante la che fornisce Tali equazioni costituiscono le condizioni al contorno di tipo naturale per il problema differenziale .  Alla base della derivazione delle equazioni vi è l'ipotesi di continuità del campo vettoriale e l'ipotesi di differenziabilità del campo tensoriale . Ipotesi che consentono, come visto, di passare da equazioni in forma integrale ad equazioni in forma locale.      "
},
{
  "id": "surfaces_through_x_fig",
  "level": "2",
  "url": "stress_sec_stress_chap_it.html#surfaces_through_x_fig",
  "type": "Figura",
  "number": "2.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "stress_components_fig",
  "level": "2",
  "url": "stress_sec_stress_chap_it.html#stress_components_fig",
  "type": "Figura",
  "number": "2.3.2",
  "title": "",
  "body": "  "
},
{
  "id": "stress_sec_stress_chap_it-3-8",
  "level": "2",
  "url": "stress_sec_stress_chap_it.html#stress_sec_stress_chap_it-3-8",
  "type": "Teorema",
  "number": "2.3.3",
  "title": "",
  "body": " A.-L. Cauchy   Dato un corpo soggetto a dei carichi applicati, una condizione necessaria e sufficiente affinché il corpo sia in equilibrio (soddisfacimento delle , ) è che esista un campo tensiorale tale che      "
},
{
  "id": "stress_sec_stress_chap_it-3-9",
  "level": "2",
  "url": "stress_sec_stress_chap_it.html#stress_sec_stress_chap_it-3-9",
  "type": "Osservazione",
  "number": "2.3.4",
  "title": "osservazioni sulle equazioni indefinite di equilibrio.",
  "body": " osservazioni sulle equazioni indefinite di equilibrio    Le equazioni non determinano in maniera completa il campo di tensione di Cauchy per un corpo in equilibrio. In particolare si hanno 3 equazioni differenziali per determinare, per la simmetria del tensore, le componenti incognite di . Come si vedrà nel seguito tale inconveniente verrà risolto caratterizzando il comportamento costitutivo del materiale di cui è composto il corpo. Comportamento da ricostruire per via sperimentale e riferendosi alla media delle grandezze in gioco. Si ricorda che l'approccio macroscopico non si basa su una precisa descrizione della micro-struttura interna della materia.  Le condizioni al contorno da associare alle equazioni differenziali saranno determinate mettendo in relazione la tensione incognita e le trazioni assegnate, , sul contorno del corpo cui le equazioni di equilibriio si riferiscono. Tale relazione viene stabilita mediante la che fornisce Tali equazioni costituiscono le condizioni al contorno di tipo naturale per il problema differenziale .  Alla base della derivazione delle equazioni vi è l'ipotesi di continuità del campo vettoriale e l'ipotesi di differenziabilità del campo tensoriale . Ipotesi che consentono, come visto, di passare da equazioni in forma integrale ad equazioni in forma locale.    "
},
{
  "id": "stress_analysis_sec_stress_chap_it",
  "level": "1",
  "url": "stress_analysis_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.4",
  "title": "analisi dello stato di tensione",
  "body": " analisi dello stato di tensione    convenzione e significato delle componenti del tensore  Riprendiamo la figura già riportata nella sezione precedente per ribadire la convenzione adottata sui segni delle componenti del tensore.     La figura mostra i tre piani che si prendono come riferimento, ovvero i piani aventi come normale uscente gli assi , e . A tali facce, che si considerano positive , si riferiscono le componenti del tensore della tensione e la figura riporta tali componenti secondo i versi che si assumono positivi. Se immaginiamo di osservare un cubo, come suggerisce la figura, le facce nascoste del cubo hanno come normale uscente le direzioni opposte , e . Su tali facce, che si considerano negative , agiranno le stesse componenti di tensione di segno opposto. Ad esempio sulla faccia avente giacitura agirà la trazione .  Si consideri la trazione agente sulla giacitura individuata da , calcolabile anche come Il prodotto scalare fra questa e la giacitura a cui si riferisce fornisce che rappresenta, si veda anche la figura, la componente normale della trazione . Se si calcola il prodotto scalare tra e la direzione si ottiene che rappresenta la componente tangenziale della trazione lungo la direzione 2. Analogamente rappresenta la componente tangenziale della trazione lungo la direzione 3.  Le stesse valutazioni possono essere fatte per le altre trazioni e . Quanto si ottiene può essere riepilogato come segue.  Le componenti con indice ripetuto costituiscono le componenti normali del tensore. Se il segno è positivo sono componenti di trazione , se è negativo sono componenti di compressione .  Le componenti con indice misto (si ricordi la simmetria) costituiscono le componenti tangenziali del tensore. Il segno delle componenti tangenziali segue la convenzione indicata in figura ma, a differenza delle componenti normali, non ha un particolare significato fisico dal momento che il tipo di carico non cambia al cambiare del segno.  Per ogni componente del tensore il secondo indice si riferisce alla giacitura su cui agisce la trazione e il primo indice si riferisce alla componente della trazione.    Quanto discusso per le componenti del tensore vale anche per una giacitura generica . Come stabilito dal Teorema della tensione di Cauchy si ha Da cui si può calcolare la componente normale della trazione e la componente tangenziale relativa ad una direzione ortogonale ad  Per denotare le due componenti si è utilizzata la convenzione, spesso adottata in ambito ingegneristico, che indica le componenti normale e tangenziale rispettivamente con i simboli e . Il vettore , come , è un vettore di lunghezza unitaria.        tensioni principali e direzioni principali  Quanto discusso nella relativa alle direzioni principali del tensore è applicabile in larga parte anche al tensore della tensione . Ambedue i tensori sono simmetrici e l'unico fondamentale distinguo che occorre effettuare è che, a differenza di , non è definito positivo. Pertanto in questo caso gli autovalori, che individuano adesso le tensioni principali del tensore, potranno essere anche nulli o negativi. Comunque la simmetria di consente la seguente rappresentazione spettrale del tensore dove le direzioni principali  , , sono gli autovettori di , i quali costituiscono una terna ortonormale, e , , sono le tensioni principali.  Nel caso cui le direzioni principali sono allineate con il sistema di riferimento il tensore assume la semplice forma diagonale che individua uno stato tensionale descritto solo da componenti di tipo normale. Componenti di trazione se la componente è positiva, di compressione se la componente è negativa. Tale situazione viene illustrata nelle seguente figura.     Se invece le direzioni principali non sono allineate con il sistema di riferimento il tensore assume la forma generica con la presenza anche di componenti tangenziali.  Assegnato un tensore l'individuazione delle tensioni e delle direzioni principali richiede il calcolo degli autovalori e degli autovettori effetuabile, come si mostrerà in seguito, tramite MATLAB .   gli invarianti della tensione  Anche in questo caso, come già discusso nel capitolo dedicato alla cinematica, la soluzione del problema agli autovalori richiede la soluzione di una equazione cubica esprimibile come segue dove compaiono gli invarianti del tensore , ovvero le quantità che sono indipendenti dal sistema di riferimento rispetto al quale viene rappresentato . Gli invarianti di sono calcolabili con le seguenti coppie di espressioni, dove ogni coppia contiene la formula da utilizzare nel caso in cui il tensore sia espresso rispetto alle direzioni principali e la formula da utilizzare nel caso generico.   Primo invariante  dove compare la traccia del tensore ovvero la somma dei coefficienti appartenenti alla diagonale principale.   Secondo invariante     Terzo invariante          stati tensionali di base   stato sferico o idrostatico  Lo stato tensionale che mantiene sempre la stessa forma rispetto a qualsiasi sistema di riferimento è lo stato caratterizzato da tensioni principali che assumono lo stesso valore, ovvero . In tal caso, utilizzando la , il tensore assume la seguente forma ovvero La rappresentazione per componenti fornisce anche      Assumendo positivo si ha uno stato di trazione uguale in tutte le direzioni, da qui l'aggettivo sferico . Se invece è negativo si ha uno stato di compressione uguale in tutte le direzioni, proprio come avviene per un corpo immerso in un fluido. Da qui l'aggettivo idrostatico .    stato di trazione o compressione pura  Il seguente stato tensionale caratterizzato quindi da tensioni principali pari a , , e direzioni principali individuate dall'asse e dal piano definito dalgi altri due assi della terna, viene di solito etichettato, in base al segno di , stato di trazione o compressione pura .     L'aggetivazione pura non deve trarre in inganno in quanto vale solo per la disposizione delle direzioni principali appena descritta. È sufficiente infatti assumere una disposizione differente per le direzioni principali, ad esempio ottenuta con una rotazione generica intorno all'asse , per avere con Da cui deriva, per il tensore , la seguente rappresentazione per componenti   Costituiscono stati di trazione o compressione pura anche i seguenti tensori e     stato di taglio puro  Per la discussione dello stato di taglio puro occorre lasciare il punto di vista dato dalle direzioni principali e parlare direttamente di uno stato tensionale caratterizzato dalla seguente rappresentazione per componenti In tal caso, sempre relativamente al sistema di riferimento , , utilizzato, si parlerà di stato di taglio puro in quanto l'unica componente non nulla del tensore è .     Il calcolo di direzioni principali e tensioni principali mostrerebbe che ci troviamo in un caso differente dai precedenti. Infatti il calcolo degli autovalori ed autovettori, effettuabile con le seguenti istruzioni MATLAB     syms t; s = [0 t 0; t 0 0; 0 0 0]; [V, D]=eig(s)    fornisce e Quindi le direzioni principali sono ruotate di intorno all'asse (si riportano gli autovettori normalizzati anche se, nel caso di calcolo simbolico, MATLAB non fornisce autovettori normalizzati).  Per quanto discusso, sarebbe stato possibile presentare il caso di taglio puro  come lo stato tensionale che si realizza quando il sistema di riferimento è ottenuto ruotando la terna delle direzioni principali di intorno al terzo asse e le tensioni principali sono definite da   Anche i casi e rappresentano stati di taglio puro e anche ad essi, con le dovute precisazioni, si applica tutta la discussione precedente.    "
},
{
  "id": "stress_analysis_sec_stress_chap_it-2-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-2-3",
  "type": "Figura",
  "number": "2.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "normal_shear_fig",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#normal_shear_fig",
  "type": "Figura",
  "number": "2.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_it-3-4",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-3-4",
  "type": "Figura",
  "number": "2.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_it-3-7",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-3-7",
  "type": "Intuizione",
  "number": "2.4.4",
  "title": "gli invarianti della tensione.",
  "body": " gli invarianti della tensione  Anche in questo caso, come già discusso nel capitolo dedicato alla cinematica, la soluzione del problema agli autovalori richiede la soluzione di una equazione cubica esprimibile come segue dove compaiono gli invarianti del tensore , ovvero le quantità che sono indipendenti dal sistema di riferimento rispetto al quale viene rappresentato . Gli invarianti di sono calcolabili con le seguenti coppie di espressioni, dove ogni coppia contiene la formula da utilizzare nel caso in cui il tensore sia espresso rispetto alle direzioni principali e la formula da utilizzare nel caso generico.   Primo invariante  dove compare la traccia del tensore ovvero la somma dei coefficienti appartenenti alla diagonale principale.   Secondo invariante     Terzo invariante      "
},
{
  "id": "stress_analysis_sec_stress_chap_it-4-2-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-4-2-3",
  "type": "Figura",
  "number": "2.4.5",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_it-4-3-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-4-3-3",
  "type": "Figura",
  "number": "2.4.6",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_it-4-4-3",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-4-4-3",
  "type": "Figura",
  "number": "2.4.7",
  "title": "",
  "body": "  "
},
{
  "id": "stress_analysis_sec_stress_chap_it-4-4-5",
  "level": "2",
  "url": "stress_analysis_sec_stress_chap_it.html#stress_analysis_sec_stress_chap_it-4-4-5",
  "type": "Listato",
  "number": "2.4.8",
  "title": "",
  "body": "  syms t; s = [0 t 0; t 0 0; 0 0 0]; [V, D]=eig(s)   "
},
{
  "id": "plv_sec_stress_chap_it",
  "level": "1",
  "url": "plv_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.5",
  "title": "principio dei lavori virtuali",
  "body": " principio dei lavori virtuali  A partire delle equazioni indefinite di equilibrio è possibile pervenire alla definizione del lavoro derivante dall'ambiente circostante, lavoro esterno , ed il lavoro effettuato dalle forze interne al corpo, lavoro interno . Si ottiene un principio di uguaglianza dei due lavori effettuati noto come Principio dei lavori virtuali . Tale risultato viene ottenuto riformulando le equazioni differenziali in un formato integrale. Operazione che può essere interpretata come una riformulazione alternativa delle equazioni differenziali di partenza ma che porta anche ad un risultato che ha l'importante interpretazione meccanica di cui si è detto.    dalla formulazione differenziale alla formulazione integrale  Si moltiplichi scalarmente l'equazione per un campo vettoriale generico e si integri sul corpo in esame (per la continuità tale operazione potrebbe essere effettuata su qualsiasi sottoinsieme di ). Dal momento che l'equazione deve essere vera per qualsiasi , allora dove è un campo vettoriale continuo e differenziabile definito sul corpo . Per quanto già mostrato nel video sulla divergenza è possibile scrivere da cui si ricava    osservazione importante  Nei passaggi precedenti vengono trasferite derivate dal tensore al campo di spostamento . Le derivate su sono effettuate rispetto alle coordinate , e relative alla configurazione corrente, pertanto in tale contesto per gradiente dello spostamento si intende espressione da non confondere con l'equazione simile .   La equazione integrale di partenza può quindi essere riscritta come segue Il primo integrale, applicando in successione Teorema della divergenza e Teorema della tensione di Cauchy, diventa Quindi l'equazione diventa Per la decomposizione di  e la simmetria di si ha Si arriva quindi alla seguente espressione finale della forma integrale delle equazioni indefinite di equilibrio :      interpretazione meccanica    Il campo vettoriale è interpretabile sia come campo di spostamento che subisce effettivamente il corpo sotto l'azione dei carichi assegnati sia come variazione generica del campo di spostamento effettivo ovvero come campo di spostamento virtuale .  Al primo membro dell'eguaglianza compare il lavoro esercitato dall'ambiente circostante sul corpo , ovvero il lavoro esterno.  Al secondo membro dell'eguaglianza compare il lavoro interno, ovvero il lavoro effettuato dal tensore della tensione .  Senza la necessità di effettuare alcuna assunzione preliminare, si perviene alla definizione dell'ente cinematico su cui compie lavoro il tensore della tensione . Si amplia così il significato della parte simmetrica del gradiente dello spostamento che, si veda il capitolo sulla cinematica, assume anche il ruolo di tensore della deformazione infinitesima.  Quanto ottenuto è esprimibile come segue: \" Dato un corpo, o un suo sottoinsieme, in equilibrio con i carichi esterni applicati, ovverro è soddisfatta l'equazione , allora è anche valida l'equazione che costituisce il Principio dei lavori virtuali \". Inoltre l'equazione non è solo condizione necessaria per la validità del Principio dei lavori virtuali ma anche sufficiente.  Nel caso in cui il campo di spostamento coincida con un campo di spostamento rigido , allora la condizione fornisce e quindi il Principio dei lavori virtuali si riduce a Tale risultato stabilisce che i carichi applicati, se in equilibrio, compiono lavoro nullo su qualsiasi moto rigido.  In campo dinamico il campo vettoriale assume il significato di campo delle velocità. Pertanto non si parlerà di lavori ma di potenza esterna e potenza interna. Inoltre la potenza esterna eguaglierà la somma di potenza interna e variazione di energia cinetica.     "
},
{
  "id": "plv_sec_stress_chap_it-3-3",
  "level": "2",
  "url": "plv_sec_stress_chap_it.html#plv_sec_stress_chap_it-3-3",
  "type": "Osservazione",
  "number": "2.5.1",
  "title": "osservazione importante.",
  "body": " osservazione importante  Nei passaggi precedenti vengono trasferite derivate dal tensore al campo di spostamento . Le derivate su sono effettuate rispetto alle coordinate , e relative alla configurazione corrente, pertanto in tale contesto per gradiente dello spostamento si intende espressione da non confondere con l'equazione simile .  "
},
{
  "id": "exercises_sec_stress_chap_it",
  "level": "1",
  "url": "exercises_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.6",
  "title": "esercizi",
  "body": " esercizi    Siano e le trazioni relative a due giaciture distinte e passanti per . Si dimostri che soltanto se il tensore associato al punto è simmetrico.     Dato il seguente stato di tensione si calcoli quanto segue:  le componenti del vettore di trazione relativo un piano passante per il punto dato e parallelo al piano ;  la lunghezza di e l'angolo che forma con la normale al piano;  le componenti del tensore di tensione rispetto ad una nuova base ortonormale , , ottenuta ruotando di la base di partenza intorno all'asse .       Si consideri lo stato tensionale definito come segue Si calcolino le componenti del vettore di trazione nel punto di coordinate sulla superficie di equazione . Suggerimento : la normale ad una superficie si ottiene calcolandone il gradiente.     Si consideri il tensore e si calcolino le tensioni principali e le direzioni principali.     Per un generico punto di un corpo le componenti del tensore valgono Per lo stesso punto si considerino le due giaciture   Calcolare le trazioni e e le relative componenti normali e tangenziali.  Calcolare tensioni principali e direzioni principali verificando che è una delle direzioni principali.       Si consideri un parallelepipedo delimitato dai piani , e , e lo stato tensionale così definito con e costanti generiche. Si determinino:  le tensioni principali e le direzioni principali nel punto di coordinate ;  il vettore di trazione relativo alle tre facce che individuano lo spigolo di coordinate .       Si consideri il corpo , soggetto ai carichi di volume ed alle forze di superficie su definite come Si calcoli il valore di tale da annullare la somma delle risultanti delle forze di volume e di superficie.     Si consideri il corpo , soggetto alla forza di volume , essendo la densità di massa e l'accelerazione di gravità. Si assuma inoltre il seguente campo per il tensore della tensione: Si richiede quanto segue  verificare il soddisfacimento delle equazioni locali di equilibrio;  calcolare il vettore di trazione su le sei facce che definiscono ;  verificare l'equilibrio globale del corpo calcolando la risultante delle forze agenti su .      "
},
{
  "id": "answers_sec_stress_chap_it",
  "level": "1",
  "url": "answers_sec_stress_chap_it.html",
  "type": "Paragrafo",
  "number": "2.7",
  "title": "risposte ad alcuni degli esercizi proposti",
  "body": " risposte ad alcuni degli esercizi proposti    Risposta all'esercizio della .   sig = @(x) ... [5*x(2)*x(3) 3*x(2)^2 0; 3*x(2)^2 0 -x(1); 0 -x(1) 0]; n = @(x) ... [2*x(1)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 2*x(2)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 1\/sqrt((2*x(1))^2+(2*x(2))^2+1)]; t = sig([1\/2; sqrt(3)\/2; -1])*n([1\/2; sqrt(3)\/2; -1])   Si osserva che, come al solito, le precedenti istruzioni non rappresentano l'unico modo possibile per ottenere il risultato richiesto.     Risposta all'esercizio della .   x = sym('x', [3 1], 'real'); syms rho g real sig = [x(2) x(3) 0; x(3) x(1) 0; 0 0 rho*g*x(3)]; b = [0; 0; -rho*g]; % primo quesito divergence(sig(1,1:3), x) + b(1) divergence(sig(2,1:3), x) + b(2) divergence(sig(3,1:3), x) + b(3) % secondo quesito t1 = subs(sig, x(1), 1)*[1; 0; 0] t2 = subs(sig, x(2), 1)*[0; 1; 0] t3 = subs(sig, x(3), 1)*[0; 0; 1] t1_ = subs(sig, x(1), 0)*[-1; 0; 0] t2_ = subs(sig, x(2), 0)*[0; -1; 0] t3_ = subs(sig, x(3), 0)*[0; 0; -1] % terzo quesito T1 = int(int(t1, x(2), 0, 1), x(3), 0, 1) T2 = int(int(t2, x(1), 0, 1), x(3), 0, 1) T3 = int(int(t3, x(1), 0, 1), x(2), 0, 1) T1_ = int(int(t1_, x(2), 0, 1), x(3), 0, 1) T2_ = int(int(t2_, x(1), 0, 1), x(3), 0, 1) T3_ = int(int(t3_, x(1), 0, 1), x(2), 0, 1) B = int(int(int(b, x(1), 0, 1), x(2), 0, 1), x(3), 0, 1) R = T1 + T2 + T3 + T1_ + T2_ + T3_ + B      "
},
{
  "id": "answers_sec_stress_chap_it-2-1-2",
  "level": "2",
  "url": "answers_sec_stress_chap_it.html#answers_sec_stress_chap_it-2-1-2",
  "type": "Listato",
  "number": "2.7.1",
  "title": "",
  "body": "  sig = @(x) ... [5*x(2)*x(3) 3*x(2)^2 0; 3*x(2)^2 0 -x(1); 0 -x(1) 0]; n = @(x) ... [2*x(1)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 2*x(2)\/sqrt((2*x(1))^2+(2*x(2))^2+1); 1\/sqrt((2*x(1))^2+(2*x(2))^2+1)]; t = sig([1\/2; sqrt(3)\/2; -1])*n([1\/2; sqrt(3)\/2; -1])   "
},
{
  "id": "answers_sec_stress_chap_it-3-1-2",
  "level": "2",
  "url": "answers_sec_stress_chap_it.html#answers_sec_stress_chap_it-3-1-2",
  "type": "Listato",
  "number": "2.7.2",
  "title": "",
  "body": "  x = sym('x', [3 1], 'real'); syms rho g real sig = [x(2) x(3) 0; x(3) x(1) 0; 0 0 rho*g*x(3)]; b = [0; 0; -rho*g]; % primo quesito divergence(sig(1,1:3), x) + b(1) divergence(sig(2,1:3), x) + b(2) divergence(sig(3,1:3), x) + b(3) % secondo quesito t1 = subs(sig, x(1), 1)*[1; 0; 0] t2 = subs(sig, x(2), 1)*[0; 1; 0] t3 = subs(sig, x(3), 1)*[0; 0; 1] t1_ = subs(sig, x(1), 0)*[-1; 0; 0] t2_ = subs(sig, x(2), 0)*[0; -1; 0] t3_ = subs(sig, x(3), 0)*[0; 0; -1] % terzo quesito T1 = int(int(t1, x(2), 0, 1), x(3), 0, 1) T2 = int(int(t2, x(1), 0, 1), x(3), 0, 1) T3 = int(int(t3, x(1), 0, 1), x(2), 0, 1) T1_ = int(int(t1_, x(2), 0, 1), x(3), 0, 1) T2_ = int(int(t2_, x(1), 0, 1), x(3), 0, 1) T3_ = int(int(t3_, x(1), 0, 1), x(2), 0, 1) B = int(int(int(b, x(1), 0, 1), x(2), 0, 1), x(3), 0, 1) R = T1 + T2 + T3 + T1_ + T2_ + T3_ + B   "
},
{
  "id": "refs_stress_chap_it",
  "level": "1",
  "url": "refs_stress_chap_it.html",
  "type": "Bibliografia",
  "number": "2.8",
  "title": "riferimenti e letture suggerite",
  "body": " riferimenti e letture suggerite  Morton E. Gurtin, An introduction to continuum mechanics . Accademic Press, 1981. Pagg. 97-106.  Oscar Gonzalez and Andrew M. Stuart, A first course in continuum mechanics . Cambridge University Press, 2008. Pagg. 75-93.  "
},
{
  "id": "motivations_sec_elasticity_chap_it",
  "level": "1",
  "url": "motivations_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.1",
  "title": "motivazione",
  "body": " motivazione  Al fine di motivare la necessità di introdurre una modellazione costitutiva nella nostra descrizione del comportamento meccanico dei solidi sotto l'azione dei carichi applicati considereremo un caso di studio semplice ( semplice vuol dire solo che le difficoltà analitiche di ricerca di una soluzione statica sono praticamente insesistenti ma la validità di quanto discusso rimane assolutamente generale) e lo analizzeremo utilizzando gli unici strumenti di modellazione al momento a nostra disposizione, ovvero quanto presentato nel sulla cinematica dei corpi e nel sulla statica corpi.    analisi statica  Si consideri il seguente corpo con dominio delimitato dalle due superfici di estremità e e dalla superfice data dalle altre 4 facce del prisma. Sia la lunghezza del prisma avente, lungo l'asse, sezione costante ed individuata dalla generica superficie . Da un punto di vista geometrico avremo banalmente le seguenti misure di area e di volume dove per si intende l'area della superficie che individua la sezione generica del prisma. I carichi di volume siano nulli, , e si supponga che il prisma sia soggetto alle sole trazioni indicate in figura uguali ed opposte.      assunzione molto importante  La descrizione geometrica appena data riguarda solo la configurazione di riferimento a cui tipicamente si riferisce la descrizione cinematica dei corpi così come presentato nel . La scrittura delle equazioni equilibrio, si veda al riguardo il , viene invece effettuta rispetto alla configurazione corrente . La seguente discussione quindi dovrebbe tenere conto di tale situazione richiedendo anche l'introduzione di ulteriori concetti che esulano dalla presente trattazione introduttiva di Meccanica dei solidi.  Pertanto si introduce l'ipotesi alla base di una formulazione linearizzata del problema elastico , che è l'obiettivo finale del presente capitolo, ovvero che le equazioni di equilibrio possano essere formulate assumendo  vista la piccolezza degli spostamenti e delle deformazioni coinvolte nel problema. Di conseguenza anche tutte le operazioni, ad esempio la derivazione e l'integrazione, saranno svolte rispetto alle coordinate , e relative alla configurazione di riferimento, o configurazione indeformata, del corpo in esame.  Sulla base dei dati del problema e dell'ipotesi precedente, il problema statico assume la seguente formulazione.  Equazioni indefinite di equilibrio sul dominio Ovvero, per componenti, le seguenti tre equazioni scalari   Condizioni, di tipo statico, sul contorno Dove      assunzione sul campo di tensione e soluzione  Nell'equazione le incognite sono le 6 componenti indipendenti del tensore della tensione mentre le equazioni a disposizione sono soltanto 3. Posta in questi termini la ricerca della soluzione non sarebbe neanche proponibile. Comunque, data la semplicità dei dati del problema si può tentare la strada di assumere una forma per il tensore della tensione e verificare se si riescono a soddisfare tutte le equazioni di equilibrio, indefinite e sul contorno. In particolare si assuma per la forma seguente valida su tutto il dominio e con una costante generica. Si verifica facilmente il soddisfacimento delle , infatti È verificato anche il soddisfacimento della , infatti Mentre imponendo la , ugualmente con la , si ottiene   In definitiva il campo di tensione che soddisfa tutte le quazioni di equilibrio in gioco è Quindi la soluzione statica è data da uno stato di trazione pura lungo l'asse distribuito in maniera omogenea su tutto il corpo.      analisi cinematica  Sulla base di quanto appreso nel e di quanto ottenuto come soluzione statica, siamo in grado di immaginare una trasformazione abbastanza plausibile per il problema in esame. Si consideri ad esempio quanto rappresentato nella seguente figura.     La trasformazione associata è dove è un parametro generico eventualmente da determinare. Il campo di spostamento ha componenti e il gradiente associato è   Per quanto riguarda la descrizione cinematica del problema non siamo in grado di aggiungere altro. Vediamo quindi se utilizzando un altro strumento introdotto nel , ovvero il Principio dei lavori virtuali, si riesce a ricavare qualche tipo di informazione sul parametro generico .     Principio dei lavori virtuali  Sulla base del campo di spostamento adottato, i dati del problema in esame e l'assunzione di base , la scrittura del Principio dei lavori virtuali assume la seguente espressione dove, nel caso specifico, Introducendo quindi la soluzione statica già trovata e l'espressione sopra riportata del gradiente dello spostamento si ottiene Da cui, svolgendo gli integrali (tutti con argomento costante), si ricava ovvero Pertanto si riesce anche a verificare l'uguaglianza fra lavoro esterno e lavoro interno ma non traiamo nessuna informazione ulteriore relativamente al parametro .     considerazioni conclusive  Per quanto discusso sopra, per il problema in esame si possono trarre le seguenti conclusioni.    È stato possibile individuare il tensore che soddisfa le equazioni indefinite di equilibrio Tale risultato è stato reso possibile solo dal problema in esame, problema molto particolare che non costituisce quindi la norma. In generale le equazioni di equilibrio non sono risolvibili rispetto alle componenti del tensore delle tesioni. .  Si è individuato un campo di spostamento parametrizzato rispetto al parametro , campo plausibile e che verifica anche il Principio dei lavori virtuali.  Non si riesce, almeno con gli strumenti finora disponibili, a trovare per un valore significativo da un punto di vista meccanico. Tale parametro rimane del tutto generico ed indefinito.  Anche la forma assunta per la trasformazione - non è stata soggetta a verifica ed al momento rimane del tutto arbitraria.    Il problema messo in evidenza dipende da una mancanza di informazione nel modello meccanico finora presentato. L'informazione mancante è la seguente    Che legame intercorre fra la deformazione che subisce il corpo e lo stato tensionale che insorge al suo interno?    Nelle sezioni successive viene presentata e discussa tale problematica, non nei termini più generali possibili, ma rispetto al contesto in larga parte già utilizzato per il problema sopra esaminato. Ovvero nel contesto di piccoli spostamenti e piccole deformazioni overro l'ambito degli spostamenti infinitesimi . Pertanto verrà stabilito un legame tra la tensione di Cauchy e il tensore della deformazione infinitesima: Si ricorda che, per spostamenti infinitesimi, il tensore della deformazione infinitesima costituisce un'approssimazione della deformazione di Green-Lagrange, si veda la , e che nel calcolo del lavoro interno compare proprio tale tensore. Infatti    "
},
{
  "id": "motivations_sec_elasticity_chap_it-3-3",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_it.html#motivations_sec_elasticity_chap_it-3-3",
  "type": "Figura",
  "number": "3.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "motivations_sec_elasticity_chap_it-3-4",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_it.html#motivations_sec_elasticity_chap_it-3-4",
  "type": "Osservazione",
  "number": "3.1.2",
  "title": "assunzione molto importante.",
  "body": " assunzione molto importante  La descrizione geometrica appena data riguarda solo la configurazione di riferimento a cui tipicamente si riferisce la descrizione cinematica dei corpi così come presentato nel . La scrittura delle equazioni equilibrio, si veda al riguardo il , viene invece effettuta rispetto alla configurazione corrente . La seguente discussione quindi dovrebbe tenere conto di tale situazione richiedendo anche l'introduzione di ulteriori concetti che esulano dalla presente trattazione introduttiva di Meccanica dei solidi.  Pertanto si introduce l'ipotesi alla base di una formulazione linearizzata del problema elastico , che è l'obiettivo finale del presente capitolo, ovvero che le equazioni di equilibrio possano essere formulate assumendo  vista la piccolezza degli spostamenti e delle deformazioni coinvolte nel problema. Di conseguenza anche tutte le operazioni, ad esempio la derivazione e l'integrazione, saranno svolte rispetto alle coordinate , e relative alla configurazione di riferimento, o configurazione indeformata, del corpo in esame. "
},
{
  "id": "motivations_sec_elasticity_chap_it-4-3",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_it.html#motivations_sec_elasticity_chap_it-4-3",
  "type": "Figura",
  "number": "3.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "motivations_sec_elasticity_chap_it-6-5",
  "level": "2",
  "url": "motivations_sec_elasticity_chap_it.html#motivations_sec_elasticity_chap_it-6-5",
  "type": "Affermazione",
  "number": "3.1.4",
  "title": "",
  "body": "  Che legame intercorre fra la deformazione che subisce il corpo e lo stato tensionale che insorge al suo interno?   "
},
{
  "id": "uniaxial_sec_elasticity_chap_it",
  "level": "1",
  "url": "uniaxial_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.2",
  "title": "stati uniassiali",
  "body": " stati uniassiali  La modellazione elastica degli stati uniassiali, ovvero stati di tensione e deformazione in cui sono presenti soltanto una componente di tensione e la componente associata di deformazione, può essere effettuata tramite un'applicazione diretta della legge di Hooke.   legge di Hooke   La legge di Hooke è una legge della fisica che afferma che la forza necessaria per estendere o comprimere una molla di una quantità scala linearmente rispetto a tale quantità, cioè  prende il nome di rigidezza ed è un fattore costante e positivo caratteristico della molla, è l'allungamento che subisce la molla (nel caso di negativo la molla subisce un accorciamento).      La legge prende il nome dal fisico britannico del XVII secolo Robert Hooke che rese pubblica per la prima volta la legge nel 1676 come un anagramma latino. Successivamente, nel 1678, pubblicò la soluzione del suo anagramma come: ut tensio, sic vis (l'estensione è proporzionale alla forza).  Al fine di evidenziare il concetto di energia elastica immagazzinata dalla molla per effetto dell'allungamento si consideri il seguente schema meccanico dove sono state messe in evidenza tutte le forze che agiscono (per semplicità si supponga di effetuare l'esperimento in assenza di gravità In effetti se si tenesse conto anche della gravità la natura dell'equazione risultante non cambiarebbe. e di forze dissipative) su un corpo di massa e vincolato da una molla di rigidezza .     A causa dello spostamento misurato a partire dalla posizione di equilibrio, il corpo è soggetto alla forza d'inerzia e alla forza elastica dirette come indicato in figura. Per l'equilibrio del sistema si ha ovvero, introducendo la quantità , L'equazione differenziale ottenuta caratterizza un sistema che, in meccanica, viene denominato oscillatore armonico semplice . La soluzione dell'equazione differenziale è descritta dalla funzione dove e rappresentano le condizioni iniziali. prende il nome di pulsazione e viene misurata in .   A scopo esemplificativo si riportano le istruzioni MATLAB utilizzabili per il plottaggio della funzione sulla base dei seguenti dati: , , e .   om = 2*pi; u0 = 1; v0 = 10; m = 10; syms t u(t) = u0*cos(om*t)+v0\/om*sin(om*t); tt=linspace(0,3,201); uu=u(tt); plot(tt,uu,'k','LineWidth',2)      L'andamento perfettamente oscillatario della soluzione sempre rispetto agli stessi estremi viene determinato della conservazione dell' energia potenziale totale  data dalla somma di energia elastica e energia cinetica . L'energia potenziale totale, in assenza di fenomeni dissipativi, si mantiene sempre costante.   La seguente figura   ottenuta con le istruzioni MATLAB    Edef(t) = 1\/2*om^2*m*u(t)^2; Ekin(t) = 1\/2*m*diff(u,t)^2; dd=Edef(tt); kk=Ekin(tt); scale = 5*u0 \/ (Edef(0)+Ekin(0)); plot(tt,uu,'k',tt,dd*scale,'r',tt,kk*scale,'b','LineWidth',2) legend('spost.','en. def.','en. cinet.')   evidenzia in forma grafica la continua trasformazione dell'energia di deformazione della molla in energia cinetica del corpo e viceversa. Energia di deformazione (colore rosso) che oscilla fra lo zero fra il valore massimo che si ha quando il valore assoluto dello spostamento (colore nero) è massimo, allo stesso istante la velocità è nulla. Al contrario l'energia cinetica (colore blu) è massima quando il valore assoluto dello velocità è massima, quando allo stesso istante lo spostamento è nullo.   Per concludere si osserva che l'energia elastica agisce come un potenziale per la forza elastica della molla in quanto quest'ultima può essere ottenuta per derivazione dell'energia, ovvero      prova uniassiale a trazione o compressione  La seguente figura illustra il risultato di un prova di carico uniassiale effettuata su una barra di acciaio. Per risultato della prova si intende la curva riportata in figura, curva che rappresenta la risposta meccanica , ovvero il valore della tensione nel materiale, al crescere della deformazione applicata. È evidente come sia articolata e variabile la risposta del materiale e come sia non banale l'individuazione di un modello matematico\/numerico in grado di riprodurre il risultato prodotto dalla prova di carico, risultato che può essere schematicamente riepilogato come segue (per l'acciaio, e in generale per i materiali metallici, quanto riportato in figura viene generalemente assunto come valido sia in regime di trazione e sia in regime di compressione).       La risposta del materiale inizialmente è lineare.  Esiste un limite alla fase lineare (Proportional limit) superato il quale la risposta tende a mantenersi costante stazionando nella fase denominata di snervamento (Yield Point).  Successivamente comincia la fase di incrudimento (Strain Hardening) che termina con il raggiungimento del carico limite (Ultimate Strength) del materiale.  Superato il carico limite il punto di rottura (Fracture Point) del materiale è preceduto da una riduzione della tensione.    Il focus del presente capitolo è comunque soltanto la prima fase della risposta del materiale, fase che non solo è lineare ma anche elastica nel senso che è applicabile la legge di Hooke e quindi tra le uniche componenti di tensione e deformazione, e , presenti in una condizione uniassiale è legittimo assumere che intercorra il seguente legame proporzionale e che sia possibile definire un'energia elastica che agisce come potenziale per la tensione inoltre È possibile anche effettuare una formulazione complementare dell'energia elastica, ovvero esprimerla rispetto alla tensione da cui   Con il simbolo si indica il modulo di Young che è una caratteristica specifica del materiale ed è misurabile con una prova di carico del tipo descritto in precedenza (banalmente è dato dalla pendenza che la curva di risposta assume in fase elastica). Ricordando che la deformazione è adimensionale l'unità di misura utilizzata per è identica a quella utilizzata per la tensione . Alcune esempi di unità di misura utilizzati sono i seguenti Nella seguente tabella si riporta il valore del modulo di Young per alcuni materiali utilizzati nelle applicazioni ingegneristiche.   Valori approssimati del modulo di Young per alcuni materiali    Materiale      gomma      teflon      PET      legno      ossa umane      calcestruzzo      vetro      alluminio      acciaio          prova uniassiale a taglio  Quanto osservato per la prova uniassiale a trazione si verifica anche nelle prove uniassiali che coninvolgono componenti tangenziali di tensione e di deformazione. Anche in questo caso esiste una prima parte della risposta che può essere descritta con la legge di Hooke. Cambia comunque il coefficiente di proporzionalità. In particolare si ottiene che il legame tra componente di tensione tangenziale e componente di deformazione a taglio (si veda la ) può essere formulato come segue dove prende il nome di modulo a taglio .  Nella seguente tabella si riporta il valore del modulo a taglio per alcuni materiali.   Valori approssimati del modulo a taglio per alcuni materiali    Materiale      gomma      PET      alluminio      vetro      titanio      ferro      acciaio      diamante        "
},
{
  "id": "uniaxial_sec_elasticity_chap_it-3",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_it.html#uniaxial_sec_elasticity_chap_it-3",
  "type": "Intuizione",
  "number": "3.2.1",
  "title": "legge di Hooke.",
  "body": " legge di Hooke   La legge di Hooke è una legge della fisica che afferma che la forza necessaria per estendere o comprimere una molla di una quantità scala linearmente rispetto a tale quantità, cioè  prende il nome di rigidezza ed è un fattore costante e positivo caratteristico della molla, è l'allungamento che subisce la molla (nel caso di negativo la molla subisce un accorciamento).      La legge prende il nome dal fisico britannico del XVII secolo Robert Hooke che rese pubblica per la prima volta la legge nel 1676 come un anagramma latino. Successivamente, nel 1678, pubblicò la soluzione del suo anagramma come: ut tensio, sic vis (l'estensione è proporzionale alla forza).  Al fine di evidenziare il concetto di energia elastica immagazzinata dalla molla per effetto dell'allungamento si consideri il seguente schema meccanico dove sono state messe in evidenza tutte le forze che agiscono (per semplicità si supponga di effetuare l'esperimento in assenza di gravità In effetti se si tenesse conto anche della gravità la natura dell'equazione risultante non cambiarebbe. e di forze dissipative) su un corpo di massa e vincolato da una molla di rigidezza .     A causa dello spostamento misurato a partire dalla posizione di equilibrio, il corpo è soggetto alla forza d'inerzia e alla forza elastica dirette come indicato in figura. Per l'equilibrio del sistema si ha ovvero, introducendo la quantità , L'equazione differenziale ottenuta caratterizza un sistema che, in meccanica, viene denominato oscillatore armonico semplice . La soluzione dell'equazione differenziale è descritta dalla funzione dove e rappresentano le condizioni iniziali. prende il nome di pulsazione e viene misurata in .   A scopo esemplificativo si riportano le istruzioni MATLAB utilizzabili per il plottaggio della funzione sulla base dei seguenti dati: , , e .   om = 2*pi; u0 = 1; v0 = 10; m = 10; syms t u(t) = u0*cos(om*t)+v0\/om*sin(om*t); tt=linspace(0,3,201); uu=u(tt); plot(tt,uu,'k','LineWidth',2)      L'andamento perfettamente oscillatario della soluzione sempre rispetto agli stessi estremi viene determinato della conservazione dell' energia potenziale totale  data dalla somma di energia elastica e energia cinetica . L'energia potenziale totale, in assenza di fenomeni dissipativi, si mantiene sempre costante.   La seguente figura   ottenuta con le istruzioni MATLAB    Edef(t) = 1\/2*om^2*m*u(t)^2; Ekin(t) = 1\/2*m*diff(u,t)^2; dd=Edef(tt); kk=Ekin(tt); scale = 5*u0 \/ (Edef(0)+Ekin(0)); plot(tt,uu,'k',tt,dd*scale,'r',tt,kk*scale,'b','LineWidth',2) legend('spost.','en. def.','en. cinet.')   evidenzia in forma grafica la continua trasformazione dell'energia di deformazione della molla in energia cinetica del corpo e viceversa. Energia di deformazione (colore rosso) che oscilla fra lo zero fra il valore massimo che si ha quando il valore assoluto dello spostamento (colore nero) è massimo, allo stesso istante la velocità è nulla. Al contrario l'energia cinetica (colore blu) è massima quando il valore assoluto dello velocità è massima, quando allo stesso istante lo spostamento è nullo.   Per concludere si osserva che l'energia elastica agisce come un potenziale per la forza elastica della molla in quanto quest'ultima può essere ottenuta per derivazione dell'energia, ovvero   "
},
{
  "id": "uniaxial_sec_elasticity_chap_it-4-3",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_it.html#uniaxial_sec_elasticity_chap_it-4-3",
  "type": "Figura",
  "number": "3.2.7",
  "title": "",
  "body": "  "
},
{
  "id": "uniaxial_sec_elasticity_chap_it-4-7",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_it.html#uniaxial_sec_elasticity_chap_it-4-7",
  "type": "Tabella",
  "number": "3.2.8",
  "title": "Valori approssimati del modulo di Young per alcuni materiali",
  "body": " Valori approssimati del modulo di Young per alcuni materiali    Materiale      gomma      teflon      PET      legno      ossa umane      calcestruzzo      vetro      alluminio      acciaio      "
},
{
  "id": "shear_subsecuniaxial_sec_elasticity_chap_it-4",
  "level": "2",
  "url": "uniaxial_sec_elasticity_chap_it.html#shear_subsecuniaxial_sec_elasticity_chap_it-4",
  "type": "Tabella",
  "number": "3.2.9",
  "title": "Valori approssimati del modulo a taglio per alcuni materiali",
  "body": " Valori approssimati del modulo a taglio per alcuni materiali    Materiale      gomma      PET      alluminio      vetro      titanio      ferro      acciaio      diamante      "
},
{
  "id": "multiaxial_sec_elasticity_chap_it",
  "level": "1",
  "url": "multiaxial_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.3",
  "title": "stati pluriassiali",
  "body": " stati pluriassiali    il modello come generalizzazione della legge di Hooke  Gli stati uniassiali di trazione\/compressione e di taglio hanno messo in evidenzia due differenti parametri sperimentali, il modulo di Young ed il modulo a taglio , utilizzabili come coefficienti di proporzionalità nella definizione del legame elastico esistente tra componente di tensione e relativa componente di deformazione. Per estendere tale approccio agli stati pluriassiali l'articolazione del legame deve prevedere situazioni più complesse nelle quali le componenti di tensione, in generale, non dipendono soltanto dalle corrispondenti componenti di deformazione. Pertanto vengono introdotti i seguenti coefficienti di proporzionalità   tra la generica componente di tensione e la generica componente di deformazione . Quindi per ciascuna delle 9 componenti di tensione ( ) occorrerà definire tanti coefficienti di proporzionalità quante sono le componenti di deformazione, che sono anch'esse 9 ( ). Ciascun contributo dato dalla generica componentte di deformazione potrà essere sommato fornendo Si hanno quindi 9 coefficienti di proporzionalità per ognuna delle 9 componenti di tensione per un totale di 81 coefficenti. Tale legame può essere espresso in forma compatta come come oppure in forma tensoriale scrivendo relazione che mette in evidenza un nuovo tipo di trasformazione lineare che associa al generico tensore della deformazione il corrispondente tensore della tensione. In questo caso l'operatore lineare coinvolto è dato dal tensore del 4 ordine , tensore che al suo interno contiene gli 81 coefficienti di cui sopra.  Si assume inoltre la possibilità di definire anche per gli stati pluriassiali l'energia elastica come segue quantità che, come per il caso uniassiale, rappresenta la metà del lavoro interno, ovvero il lavoro effettuato dalla tensione sulla deformazione. L'energia elastica, sulla base del legame costitutivo , può essere riscritta come segue    le proprietà del tensore costitutivo   La definizione dell'energia, equazione , e la condizione di non negatività del lavoro interno implicano che il tensore costitutivo deve esssere necessariamente definito positivo , ovvero e l'unico caso il cui è nullo si verifica quando .  Per definizione di potenziale elastico, la relazione fra generica componente di tensione e l'energia elastica può essere scritta come Derivando ulteriormente tale relazione ed utilizzando la relazione si ottiene Pertanto il generico coefficiente del tensore costitutivo è legato all'energia elastica dalla relazione Osservando che scambiando l'ordine di derivazione il risultato non cambia si ottiene il soddisfacimento della condizione nota come simmetria maggiore del tensore costitutivo .  La simmetria delle componenti di tensione consente di scrivere mentre la condizione di simmetria delle componenti di deformazione fornisce Tali condizioni vengono denominate simmetrie minori del tensore .  Le condizioni di simmetria sopra descritte riducono il numero di coefficienti effettivamente indipendenti e necessari per definire un generico tensore elastico da 81 a 21.       l'osservazione sperimentale  Il fenomeno principale messo in evidenza dall'osservazione sperimentale di stati di tensione\/deformazione pluriassiali è che l'applicazione di un carico in una direzione assegnata determina non solo una deformazione lungo tale direzione ma anche lungo le direzioni trasversali ad essa. Tale fenomeno, come mostrato anche nell'animazione successiva, si osserva in particolare per gli stati di trazione o compressione e prende il nome di effetto Poisson .       Per i materiali più semplici l'effetto Poisson viene modellato attraverso l'introduzione di un unico parametro caratteristico del materiale, noto come coefficiente di Poisson , il quale lega la generica deformazione trasversale alla deformazione relativa alla direzione del carico applicato. Ad esempio, se si applica una tensione la deformazione lungo la direzione del carico assumerà un valore generico mentre le deformazioni nelle direzioni trasversali saranno dove è appunto il coefficiente di Poisson.     il caso isotropo  I parametri sperimentali del materiale finora incontrati sono il modulo di Young, , il modulo a taglio, ed il coefficiente di Poisson, . Si è anche detto, si veda la sezione precedente, che il numero di coefficienti strettamente necessario per definire il tensore costitutivo è pari a 21. Sembra quindi che le risultanze spserimentale finora discusse siano di gran lunga insufficienti per raggiugere una completa definizione del legame elastico. Fortunatamente buona parte dei materiali utilizzati nelle usuali applicazioni ingegneristiche sono isotropi . Ovvero hanno la proprieta che, dato un blocco di materiale e qualsiasi direzioni di scelga per attraversarlo mediante delle prove sperimentale, si rileva sempre la stessa risposta meccanica. Per tale classe di materiali, applicabile a metalli, vetro, polimeri, terreni e, per certi versi, anche conglomerati cementizii o bituminosi, la caratterizzazione costitutiva è effettuabile mediante solo 2 parametri sperimentali .  Una coppia di parametri sperimentali utilizzabile, anche se non l'unica coppia, è data dalla coppia di parametri modulo di Young, e coefficiente di Poisson, . Il modulo a taglio dipende infatti da e secondo la seguente formula Posto ciò conviene discutere il legame elastico ed isotropo tendendo separate le componenti di deformazione\/tesione di tipo normale e dalle componenti di tipo tangenziale visto che, per i materiali isotropi, non vi è alcuno accoppiamento e quindi i coefficienti del tipo sono comunque nulli.   componenti di tipo normale       Il legame elastico per le conponenti di tipo normale può essere formulato come segue Si osserva come tale risultato costituisca la forma inversa del legame elastico per la parte relativa alle componenti normali. Per ottenere i coefficienti elastici che legano le componenti di tensione alle componenti di deformazione, conviene visualizzare il legame nella seguente forma matriciale ed utilizzare le seguenti istruzioni MATLAB per invertire la matrice messa in evidenza.   syms E ni; M = [1\/E -ni\/E -ni\/E; -ni\/E 1\/E -ni\/E; -ni\/E -ni\/E 1\/E] inv(M)   Si ottiene quindi Risultato che consente di individuare i coefficienti costitutivi non nulli relativi alle componenti normali del tensore della tensione, ovvero     componenti di tipo tangenziale  Per le componenti di tipo tangenziale, oltre all'assenza di accoppiamento con le componenti di tipo normale, non è necessario modellare alcun accoppiamento reciproco, pertanto per tutte le componenti tangenziali vale legge uniassiale già vista nella   Da cui si ricava il seguente legame tra le componenti tangenziali di tensione e deformazione e quindi i seguenti coefficienti costitutivi non nulli    riepilogo e notazione di Voigt  Nella precedente discussione il legame elastico è stato presentato tenendo separata la descrizione della parte riguardante le componeti normali da quella relativa alle componenti tangenziali. Questo certamente per evidenziare meglio la mancanza di certi accoppiamenti tra componenti di tensione e componenti di deformazione, ma anche per l'impossibilità di rappresentare in maniera compatta le componenti di un tensore del 4 ordine come il tensore costitutivo. Infatti mentre per i tensori del 2 ordine la rappresentazione di tutte le componenti si realizza attraverso la matrice ad esso associata, per un tensore del 4 ordine non esiste una rappresentazione simile, almeno sulla carta .  Un riepilogo di quanto ottenuto sopra può essere ottenuto utilizzando la notazione di Voigt la quale per la rappresentazione dei tensori simmetrici del 2 ordine utilizza vettori a 6 componenti, e per i corrispondenti tensori Corripondenti nel senso di tensori del 4 ordine che mappano tensori simmetrici del 2 in tensori simmetrici del 2 ordine. del 4 ordine matrici 6 6. Pertanto il legame elastico ed isotropo può essere scritto come segue   Per completezza si fornisce anche un riepilogo del legame elastico ed isotropo utilizzando il formato tensoriale. dove le componenti non nulle del tensore sono     "
},
{
  "id": "multiaxial_sec_elasticity_chap_it-2-2-3",
  "level": "2",
  "url": "multiaxial_sec_elasticity_chap_it.html#multiaxial_sec_elasticity_chap_it-2-2-3",
  "type": "Figura",
  "number": "3.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "multiaxial_sec_elasticity_chap_it-4-4-3-4",
  "level": "2",
  "url": "multiaxial_sec_elasticity_chap_it.html#multiaxial_sec_elasticity_chap_it-4-4-3-4",
  "type": "Listato",
  "number": "3.3.2",
  "title": "",
  "body": "  syms E ni; M = [1\/E -ni\/E -ni\/E; -ni\/E 1\/E -ni\/E; -ni\/E -ni\/E 1\/E] inv(M)   "
},
{
  "id": "problem_sec_elasticity_chap_it",
  "level": "1",
  "url": "problem_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.4",
  "title": "il problema elastico",
  "body": " il problema elastico  La definizione del legame elastico fornita nelle precedenti sezioni consente di formulare in termini ben posti il seguente problema noto come problema elastico .   Determinazione dei campi di spostamento, , di tensione, , ed di deformazione, , indotti dalle condizioni di carico assegnate in un corpo comunque vincolato.      Dare una risposta al quesito posto richiede la soluzione simultanea delle seguenti equazioni definite su tutti i punti del corpo in esame.      Equazioni di equilibrio ( )    Legame deformazione-spostamento ( )    Legame elastico ( )      Per completare la formulazione del problema è necessario assegnare anche le condizioni al contorno che, in generale, possono essere di due tipi: di tipo statico sulla parte di contorno e di tipo cinematico sulla parte di contorno . Si osserva che .   Condizioni al contorno di tipo statico , definite su     Condizioni al contorno di tipo cinematico , definite su        motivazione di inizio capitolo: il solido prismatico semplicemente teso  A questo punto possiamo riprendere il problema del solido prismatico soggetto a trazione presentato nella all'inizio del presente capitolo.  La soluzione statica già trovata, comunque corretta perché soddisfa le equazioni di equilibrio all'interno del solido e le condizioni di tipo statico sul contorno , è Sulla base del legame elastico isotropo , è adesso possibile calcolare il tensore della deformazione le cui uniche componenti non nulle sono quindi un campo di deformazione costante e omogeneo su tutto il solido.  Il legame deformazione-spostamento consente la determinazione del campo di spostamento. Infatti la scrittura esplicita del legame, si veda la , fornisce Sostituendo i valori delle componenti di deformazione ricavate nelle - mediante il legame elastico si ottiene Equazioni per le quali è facile verificare che una soluzione è data da Al riguardo si osserva che si parla di una soluzione in quanto sommando a tale campo di spostamento tutti i possibili moti rigidi, che nel problema assegnato non sono esplicitamente eliminati, si otterrebbe sempre la stessa soluzione in termini di campi di tensione e deformazione.   verifica  Sulla base del campo di spostamento definito dalle si utilizzino le seguenti istruzioni MATLAB per calcolare i relativi campi di deformazione e di tensione.   syms t E ni; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*t\/E * X(1); u(2) = -ni*t\/E * X(2); u(3) = t\/E * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)         il solido prismatico semplicemente inflesso  Quanto ottenuto per il solido prismatico soggetto a campi di trazione uniformi alle estremità può essere facilmente esteso al caso in cui le trazioni applicate alle estremità abbiano l'andamento lineare mostrato nella figura seguente.      analisi statica  La formulazione della parte statica del problema è identica a quella fatta per il solido prismatico semplicemente teso eccetto per le facce di estremità del solido sulle quali le trazioni applicate assumono la seguente espressione dove rappresenta l'altezza del solido lungo la direzione e è l'intensità della trazione applicata sui lembi superiore ed inferiore.  Anche in questo caso si può procedere assumendo una soluzione di tentativo per il tensore della tensione per poi verificare il soddisfacimento delle equazioni di equilibrio e delle condizioni al contorno. In particolare per si assume la seguente forma valida su tutto il dominio e con una costante generica. Con tale assunzione la scrittura delle equazioni equilibrio fornisce da cui si evince il loro soddisfacimento.  Ripercorrendo gli stessi passi fatti nella per il solido semplicemente teso, si passa alla verifica o imposizione delle condizione al contorno. In particolare si verifica facilmente il soddisfacimento della , infatti La condizione fornisce Lo stesso risultato verrebbe fornito dalla condizione .  In conclusione il campo di tensione che soddisfa tutte le equazioni di equilibrio in gioco è Quindi la soluzione statica è data da uno stato di trazione pura nella direzione distribuito linearmente lungo l'asse . Per maggiore comodità degli sviluppi successivi continueremo ad utilizzare l'espressione ricordando comunque che .   Analogamente al solido semplicemente, si noti come la soluzione ottenuta coivolga solo la componente del tensore. Differisce solo la forma della soluzione che invece di essere costante è lineare lungo lasse .     dalla tensione agli spostamenti  Per risalire alla soluzione in termini di spostamenti occorre prima utilizzare il legame elastico per valutare le componenti del tensore di deformazione ed ottenere quanto segue  Tali valori delle componenti di deformazione consentono di imporre il legame deformazione-spostamento nei seguenti termini La cui soluzione, un pò meno diretta del caso del solido semplicemente teso, fornisce il seguente risultato    verifica  Sulla base del campo di spostamento definito dalle , , è possibile verificare il risultato ottenuto con le seguenti istruzioni MATLAB .   syms E ni k; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*k\/E * X(1) * X(2); u(2) = -k\/(2*E) * ( X(3)^2 + ni*(X(2)^2-X(1)^2) ); u(3) = k\/E * X(2) * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)         riepilogo  Si riporta una sintesi delle soluzioni trovate per i solidi prismatici seplicemente teso ed inflesso al fine anche di mostrare le evidenti analogie. Per ogni campo trovato, tensione, deformazione e spostamento, si riportano solo le componenenti non nulle.         solido teso   solido inflesso                                                         "
},
{
  "id": "problem_sec_elasticity_chap_it-4",
  "level": "2",
  "url": "problem_sec_elasticity_chap_it.html#problem_sec_elasticity_chap_it-4",
  "type": "Figura",
  "number": "3.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "problem_sec_elasticity_chap_it-8-5-2-3",
  "level": "2",
  "url": "problem_sec_elasticity_chap_it.html#problem_sec_elasticity_chap_it-8-5-2-3",
  "type": "Listato",
  "number": "3.4.2",
  "title": "",
  "body": "  syms t E ni; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*t\/E * X(1); u(2) = -ni*t\/E * X(2); u(3) = t\/E * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)   "
},
{
  "id": "bend_problem_sub-3",
  "level": "2",
  "url": "problem_sec_elasticity_chap_it.html#bend_problem_sub-3",
  "type": "Figura",
  "number": "3.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "bend_problem_sub-4-6",
  "level": "2",
  "url": "problem_sec_elasticity_chap_it.html#bend_problem_sub-4-6",
  "type": "Osservazione",
  "number": "3.4.4",
  "title": "",
  "body": " Analogamente al solido semplicemente, si noti come la soluzione ottenuta coivolga solo la componente del tensore. Differisce solo la forma della soluzione che invece di essere costante è lineare lungo lasse .  "
},
{
  "id": "bend_problem_sub-6-2-5",
  "level": "2",
  "url": "problem_sec_elasticity_chap_it.html#bend_problem_sub-6-2-5",
  "type": "Listato",
  "number": "3.4.5",
  "title": "",
  "body": "  syms E ni k; X = sym('X', [1 3]); u = sym('u', [1 3]); u(1) = -ni*k\/E * X(1) * X(2); u(2) = -k\/(2*E) * ( X(3)^2 + ni*(X(2)^2-X(1)^2) ); u(3) = k\/E * X(2) * X(3); Du = [transpose(gradient(u(1), X)); ... transpose(gradient(u(2), X)); transpose(gradient(u(3), X))]; symDu = 1\/2*(Du+transpose(Du)) Voigt_eps = [symDu(1,1); symDu(2,2); symDu(3,3); ... 2*symDu(2,3); 2*symDu(3,1); 2*symDu(1,2)]; Voigt_C = E\/((1+ni)*(1-2*ni))*[(1-ni) ni ni 0 0 0; ... ni (1-ni) ni 0 0 0; ... ni ni (1-ni) 0 0 0; ... 0 0 0 (1-2*ni)\/2 0 0; ... 0 0 0 0 (1-2*ni)\/2 0; ... 0 0 0 0 0 (1-2*ni)\/2]; Voigt_sig = Voigt_C*Voigt_eps; simplify(Voigt_sig)   "
},
{
  "id": "prismatic_solutions_tab",
  "level": "2",
  "url": "problem_sec_elasticity_chap_it.html#prismatic_solutions_tab",
  "type": "Tabella",
  "number": "3.4.6",
  "title": "",
  "body": "     solido teso   solido inflesso                                                     "
},
{
  "id": "stretched_beam_sec_elasticity_chap_it",
  "level": "1",
  "url": "stretched_beam_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.5",
  "title": "modelli monodimensionali: trave tesa",
  "body": " modelli monodimensionali: trave tesa    premessa  La soluzione del problema elastico sotto condizioni del tutto generiche pone difficoltà difficilmente sormontabili. Soltanto effettuando opportune semplificazioni, come ad esempio fatto per i solidi prismatici (geometrie semplici) e sotto l'azione di carichi di tipo ben preciso, si riesce ad ottenere una soluzione analitica del problema assegnato.  Le considerazioni precedenti e la necessità di affrontare ingegneristicamente problematiche strutturali riguardanti solidi che dal punto di vista geometrico sono modellabili mediante descrizioni monodimensionali o bidimensionali, hanno portato allo sviluppo di svariati modelli strutturali. Tali modelli consentono di risolvere con un grado di approssimazione accettabile diverse problematiche altrimenti non affrontabili mediante strumenti sia analitici e sia numerici.   Nel seguito vengono presentati due modelli di trave, teso ed inflesso, che costituiscono una riduzione al monodimensionale delle soluzioni trovate per i solidi prismatici semplicemte teso ed inflesso, . In particolare si procederà mostrando come sia possibile descrivere la componente significativa della deformazione, la , riferendosi solo alla linea d'asse della trave. La componente è quella significativa perché costituisce l'unica componente di deformazione che determina il valore del lavoro interno del solido prismatico, infatti nei due casi esaminati si ha che quantità che indicheremo scrivendo semplicemente essendo chiaro a quali componenti ci si riferisce. Quindi la finalità principale è ottenere una descrizione dell'energia interna del modello monodimensionale equivalente all'energia interna del soluzione 3D assunta come riferimento .  Inoltre per i problemi esaminati l'asse della trave si muove rimanendo nel piano individuato dagli assi ed e per tale motivo la trattazione può essere effettuata nel piano e si parlerà di modelli di trave piana.     il riferimento dato dalla linea d'asse  Nel caso del solido prismatico semplicemente teso l'asse della trave si deforma come indicato in Figura, ovvero subisce un semplice allungamento o accorciamento. In Figura viene anche evidenziata la notazione che correntemente si utilizza per tale modello monodimensionale.     Prendendo quindi come riferimento l'asse della trave potremo calcolare la componente di deformazione , qui indicata semplicemente come , derivando semplicemente la variabile di spostamento lungo l'asse Al momento, come nella soluzione 3D di riferimento, è variabile lungo l'asse e la deformazione è costante.     il lavoro interno  Si può adesso riscrivere l'espressione del lavoro interno in un formato che si riferisce solo alla linea d'asse della trave, ovvero e quindi La quantità introdotta è l'ente statico che nella riduzione monondimensionale compie lavoro sulla deformazione. viene denonominata sforzo normale ed ha le dimensioni di una forza, .     il legame elastico  La definizione del legame elastico per il modello monodimensionale si ottiene rielaborando la come segue Relazione che evidenzia come il coefficiente di proporzionalità che definisce il legame fra ed sia dato dal prodotto fra il modulo di Young del materiale e l'area della sezione della trave.     il lavoro esterno  Fino a questo punto la riduzione al monodimensionale è rimasta strettamente aderente alla soluzione 3d da cui si è partiti. Se si continuasse sulla stessa falsa riga anche per i carichi esterni si otterrebbe la seguente situazione   cioè una trave semplicemente soggetta a due forze di estremità uguali ed opposte.  Con la definizione dei carichi esterni ammissibili per il modello di trave si fa la scelta invece di ampliare l'utilizzo del modello anche a casi che in generale non sono compresi nella soluzione del solido prismatico semplicemente teso. In particolare, come mostra la Figura seguente,   si introduce il carico per unità di lughezza , funzione generica dipendente dall'ascissa , e le forze concetrate di estremità, comunque attese, sono in generale differenti. Il lavoro esterno assume quindi la seguente epsressione   Inoltre, a differenza della soluzione 3d di riferimento, la scelta dei carichi ammissibili determina per un andamento non non più limitato alla sola variabilità lineare. Anche lo sforzo normale e la deformazione assiale, costanti nella soluzione di riferimento, diventano anch'essi funzioni generiche del tipo e .     principio dei lavori virtuali ed equazioni di equilibrio  A questo punto la definizione del modello è praticamente completa. Manca la definizione delle equazioni di equilibrio alle quali si può arrivare attraverso il principio dei lavori virtuali formulabile come segue La relazione appena scritta, dove si è tralasciato di esplicitare le dipendenze dalla variabile , può essere manipolata effettuando i seguenti passaggi E quindi si ottiene la seguente scrittura del principio dei lavori virtuali in termini di Il soddisfacimento di tale espressione per qualsiasi spostamento virtuale implica il soddisfacimento dell'equazione in ogni punto della linea d'asse e il soddisfacimento delle condizioni al contorno sugli estremi della linea d'asse.     riepilogo del modello     Carichi   Incognite   Lavoro interno   Lavoro esterno   Legame spostamento-deformazione   Legame elastico   Equazioni di equilibrio   Eventuali condizioni al contorno di tipo statico   Eventuali condizioni al contorno di tipo cinematico      Per quanto riguarda le condizioni al contorno si precisa che su ogni estremo si può assegnare o una condizione di tipo statico o una di tipo cinematico.  Le equazioni di equilibrio possono essere manipolate al fine di ottenere un'espressione in cui compaia direttamente lo spostamento come incognita. In particolare effettuando i seguenti passaggi si ottiene    "
},
{
  "id": "stretched_beam_sec_elasticity_chap_it-3-3",
  "level": "2",
  "url": "stretched_beam_sec_elasticity_chap_it.html#stretched_beam_sec_elasticity_chap_it-3-3",
  "type": "Figura",
  "number": "3.5.1",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_sec_elasticity_chap_it-6-2-1",
  "level": "2",
  "url": "stretched_beam_sec_elasticity_chap_it.html#stretched_beam_sec_elasticity_chap_it-6-2-1",
  "type": "Figura",
  "number": "3.5.2",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_sec_elasticity_chap_it-6-3-1",
  "level": "2",
  "url": "stretched_beam_sec_elasticity_chap_it.html#stretched_beam_sec_elasticity_chap_it-6-3-1",
  "type": "Figura",
  "number": "3.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_it",
  "level": "1",
  "url": "bent_beam_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.6",
  "title": "modelli monodimensionali: trave inflessa",
  "body": " modelli monodimensionali: trave inflessa  Nel descrivere il modello di trave inflessa si segue lo stesso schema adottato nella precedente sezione per la trave tesa. Si evita quindi di ripetere le considerazioni alla base della riduzione monodimensionale e le osservazioni fatte durante la presentazione del modello della trave tesa, osservazioni che nel presente contesto continuerebbero a valere senza alcuna modifica. Nella trattazione che segue ovviamente si prende come riferimento una soluzione 3D differente ovvero la soluzione trovata per il solido prismatico semplicemnte inflesso, si veda la .    il riferimento dato dalla linea d'asse  Il campo di spostamento ottenuto per il solido prismatico inflesso, equazioni , e , lungo la linea d'asse si riduce a soluzione che stabilisce che la linea d'asse si deforma seguendo una parabola contenuta nel piano , e tutto è determinato solo dallo spostamento diretto trasversalmente all'asse.   Il principale obiettivo rimane comunque quello di descrivere la deformazione dipendendente dallo spostamento che sulla linea d'asse si annulla. La descrizione della componente è comunque recuperabile osservando che che evidenzia il legame di con lo spostamento della linea d'asse. Su tale base si può valutare la componente ottenendo relazione che evidenzia il tipo di legame fra e la componente di spostamento della linea d'asse.  Quanto discusso può essere riformulato sulla base della notazione correntemente utilizzata, si veda la Figura seguente, nel modello di trave piana inflessa.   Pertanto la variabile cinematica del modello monodimensionale è lo spostamento trasversale e l'unica componente di deformazione significativa per il modello è      il lavoro interno  La formulazione monodimensionale del lavoro interno diventa quindi e quindi Dove sono stati introdotti ovvero il momento flettente che è l'ente statico del modello monondimensionale e che rappresenta la curvatura , ente cinematico su cui compie lavoro . Dimensionalmente è e è .     il legame elastico  La definizione del legame elastico per il modello monodimensionale si ottiene rielaborando la come segue e quindi Relazione che evidenzia come il coefficiente di proporzionalità che definisce il legame fra ed sia dato dal prodotto fra il modulo di Young del materiale ed il momento d'inerzia della sezione della trave, .     il lavoro esterno  Anche per la trave inflessa, come già fatto per la trave tesa, il modello non si limita a trattare solo i carichi esterni relativi alla soluzione 3D presa come riferimento, carichi raffigurati qui di seguito.   Si ammette invece un'assegnazione dei carichi esterni del tipo mostrato in nella seguente Figura.   Si introduce quindi il carico per unità di lughezza , carico trasversale all'asse della trave e diretto come indicato in Figura. Su ciascuno estremo della trave si ha una coppia concentrata ed una forza concentrata verticale. Il lavoro esterno assume quindi la seguente espressione dove le coppie di estremità compiono lavoro sulle rotazioni della trave, rotazioni che sono legate allo spostamento trasversale mediante la relazione Da cui si ricava la seguente espressione del lavoro esterno   In conseguenza di tale scelta la variabilità di viene estesa oltre l'andamento quadratico, mentre momento flettente e curvatura, a differenza della soluzione 3D da cui si è partiti, possono essere più che costanti e descritti dalle funzioni generiche e .     principio dei lavori virtuali ed equazioni di equilibrio  Per il nostro modello di trave inflessa il principio dei lavori è formulabile come segue Dove e A questo punto occorre applicare due volte l'integrazione per parti al lavoro interno al fine di estrarre le equazioni di equilibrio e le condizioni al contorno di tipo statico. La doppia integrazione per parti fornisce   L'uguaglianza fra lavoro interno e lavoro esterno diventa pertanto Da cui si ricavano le seguenti equazioni      riepilogo del modello     Carichi   Incognite   Lavoro interno   Lavoro esterno   Legame spostamento-deformazione   Legame elastico   Equazioni di equilibrio   Eventuali condizioni al contorno di tipo statico   Eventuali condizioni al contorno di tipo cinematico      Anche per il modello di trave inflessa le equazioni del modello possono essere utilizzate per eliminare dalle incognite e e mantenere solo lo spostamento . I seguenti passaggi mostrano come ottenere tale risultato da cui    "
},
{
  "id": "bent_beam_sec_elasticity_chap_it-3-2-8",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_it.html#bent_beam_sec_elasticity_chap_it-3-2-8",
  "type": "Figura",
  "number": "3.6.1",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_it-3-3-1",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_it.html#bent_beam_sec_elasticity_chap_it-3-3-1",
  "type": "Figura",
  "number": "3.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_it-6-2-1",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_it.html#bent_beam_sec_elasticity_chap_it-6-2-1",
  "type": "Figura",
  "number": "3.6.3",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_sec_elasticity_chap_it-6-2-2",
  "level": "2",
  "url": "bent_beam_sec_elasticity_chap_it.html#bent_beam_sec_elasticity_chap_it-6-2-2",
  "type": "Figura",
  "number": "3.6.4",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it",
  "level": "1",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.7",
  "title": "applicazioni del modello di trave tesa",
  "body": " applicazioni del modello di trave tesa    trave semplicemente tesa  Utilizzando l'equazione si calcoli la soluzione elastica per il seguente schema.     Per l'assenza di carico ripartito l'equazione da risolvere diventa che ha come integrale generale Le costanti di integrazione sono valutabili imponendo le condizioni al contorno Da cui si ottiene Quindi il campo di spostamento assume la seguente espressione con cui è possibile valutare lo sforzo normale lungo l'asta e, ad esempio, lo spostamento all'estremo libero quest'ultimo coincide con l'allungamento totale dell'asta valutabile anche come segue    soluzione tramite MATLAB  L'integrale generale può essere calcolato utilizzando le seguenti istruzioni.   syms u(x) EA; ode = EA*diff(u,x,2) == 0 dsolve(ode)     La soluzione che verifica anche le condizioni al contorno assegnate si ottiene invece con le seguenti istruzioni.   syms u(x) EA F l; Du = diff(u); ode = EA*diff(u,x,2) == 0; cond1 = u(0) == 0; cond2 = EA*Du(l) == F; conds = [cond1 cond2]; dsolve(ode,conds)         trave iperstatica con discontinuità     Lo schema assegnato si differenzia dallo schema considerato nella sezione precedente perché la soluzione elastica da valutare non ha un'unica espressione valida sul tutto il dominio della trave. La forza applicata all'interno dell'estensione della trave determina una discontinuità nella soluzione e quindi la necessità di studiare il problema sui due sottodimini, e , evidenziati in Figura. Si procede quindi valutando due soluzioni elastiche differenti ma connesse dalle necessarie condizioni al contorno all'interfaccia.  L'equazione di equilibrio, , applicata ai due sottodomini della trave sono formulabili come segue Si ottiene quindi un sistema di 2 equazioni differenziali dove le incognite, e , sono disaccopiate. Incognite che comunque interagiscono nelle condizioni al contorno. In particolare tali condizioni sono espresse dalle seguenti equazioni dove l'ultima equazione deriva dalla condizione di tipo statico    Si riportano le istruzioni MATLAB utilizzabili per la soluzione del sistema di equazioni differenziali.   syms ua(x) ub(x) EA F l a; Dua = diff(ua); Dub = diff(ub); ode1 = EA*diff(ua,x,2) == 0; ode2 = EA*diff(ub,x,2) == 0; odes = [ode1; ode2]; cond1 = ua(0) == 0; cond2 = ub(l) == 0; cond3 = ua(a) == ub(a); cond4 = EA*Dua(a) - EA*Dub(a) == F; conds = [cond1 cond2 cond3 cond4]; sols = dsolve(odes,conds); sols.ua sols.ub      Da cui si ottiene la seguente soluzione in termini di spostamenti incogniti Per derivazione si ottiene la soluzione in termini di sforzi normali sui due domini      trave iperstatica soggetta ad un incremento termico omogeneo     La presenza dell'incremento di temperatura determina un allungamento della trave pari a dove rappresenta il coefficiente di dilatazione termica del materiale. Tale allungamento è comunque impedito dalla presenza dei vincoli pertanto la trave sarà anche soggetta ad uno sforzo normale calcolabile dalla seguente equazione da cui si ottiene soluzione che mostra lo stato di compressione determinato dall'allungamento impedito. La soluzione in termini di spostamento è identicamente nulla su tutto la lunghezza.     trave iperstatica soggetta a carico ripartito sinusoidale     La condizione di carico mostrata in Figura può essere descritta come segue da cui, tramite l'equazione , si ricava da soddisfare in ogni punto della trave. Le condizioni al contorno sono    Seguono le istruzione MATLAB per il calcolo della soluzione .   syms u(x) EA p l; ode = EA*diff(u,x,2) + p*sin(2*pi*x\/l) == 0; cond1 = u(0) == 0; cond2 = u(l) == 0; conds = [cond1 cond2]; sol = dsolve(ode,conds) N = EA*diff(sol,x)      Si ottiene così la soluzione in termini di spostamento e di sforzo normale    "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-2-3",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-2-3",
  "type": "Figura",
  "number": "3.7.1",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-2-5-2-1",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-2-5-2-1",
  "type": "Listato",
  "number": "3.7.2",
  "title": "",
  "body": "  syms u(x) EA; ode = EA*diff(u,x,2) == 0 dsolve(ode)   "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-2-5-3-1",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-2-5-3-1",
  "type": "Listato",
  "number": "3.7.3",
  "title": "",
  "body": "  syms u(x) EA F l; Du = diff(u); ode = EA*diff(u,x,2) == 0; cond1 = u(0) == 0; cond2 = EA*Du(l) == F; conds = [cond1 cond2]; dsolve(ode,conds)   "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-3-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-3-2",
  "type": "Figura",
  "number": "3.7.4",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-3-5-1-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-3-5-1-2",
  "type": "Listato",
  "number": "3.7.5",
  "title": "",
  "body": "  syms ua(x) ub(x) EA F l a; Dua = diff(ua); Dub = diff(ub); ode1 = EA*diff(ua,x,2) == 0; ode2 = EA*diff(ub,x,2) == 0; odes = [ode1; ode2]; cond1 = ua(0) == 0; cond2 = ub(l) == 0; cond3 = ua(a) == ub(a); cond4 = EA*Dua(a) - EA*Dub(a) == F; conds = [cond1 cond2 cond3 cond4]; sols = dsolve(odes,conds); sols.ua sols.ub   "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-4-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-4-2",
  "type": "Figura",
  "number": "3.7.6",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-5-2",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-5-2",
  "type": "Figura",
  "number": "3.7.7",
  "title": "",
  "body": "  "
},
{
  "id": "stretched_beam_applications_sec_elasticity_chap_it-5-4-1-3",
  "level": "2",
  "url": "stretched_beam_applications_sec_elasticity_chap_it.html#stretched_beam_applications_sec_elasticity_chap_it-5-4-1-3",
  "type": "Listato",
  "number": "3.7.8",
  "title": "",
  "body": "  syms u(x) EA p l; ode = EA*diff(u,x,2) + p*sin(2*pi*x\/l) == 0; cond1 = u(0) == 0; cond2 = u(l) == 0; conds = [cond1 cond2]; sol = dsolve(ode,conds) N = EA*diff(sol,x)   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it",
  "level": "1",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.8",
  "title": "applicazioni del modello di trave inflessa",
  "body": " applicazioni del modello di trave inflessa    mensola soggetta ad una forza all'estremità     L'applicazione dell'equazione di equilibrio allo schema sopra riportato fornisce Equazione differenziale del 4 ordine a cui occorre associare le condizioni al contorno che, nel caso in esame, sono di tipo cinematico all'estremo e di tipo statico all'estremo :    Le seguenti istruzioni MATLAB consentono il calcolo della soluzione e del relativo momento flettente .   syms w(x) EJ F l; ode = EJ*diff(w,x,4) == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == F; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol = dsolve(ode,conds) M = -EJ*diff(sol,x,2)     Lo spostamento dell'asse della trave può essere visualizzato con le seguenti istruzioni MATLAB .   syms w(x); EJ = 1; F = 1; l = 1; w(x)=F\/6\/EJ*(-x^3+3*l*x^2); np = 100; Xv = 0:1\/np:1; wv = w(Xv); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')      Per lo spostamento si ottiene quindi l'atteso andamento cubico e per il momento flettente si ha invece il seguente andamento lineare      mensola soggetta a carico ripartito costante     Per lo schema assegnato l'equazione differenziale fornisce dove il carico ripartito ha un valore costante. Anche in questo caso le condizioni al contorno sono di tipo cinematico all'estremo e di tipo statico all'estremo :    Le sopra elencate equazioni, di equilibrio e relative condizioni al contorno, sono formulabili in MATLAB come segue consentendo il calcolo della soluzione e del relativo momento flettente . Si forniscono anche le istruzioni per il plottaggio delle due funzioni.   syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')         trave appoggiata soggetta a carico ripartito costante     La soluzione del problema si ottiene sulla base della stessa equazione di equilibrio utilizzata nell'esempio precedente. Occore modificare soltanto le condizioni al contorno che per la trave appoggiata diventano    Analogamente anche le istruzioni MATLAB per il calcolo della soluzione si modificano solo nella parte riguardante le condizioni al contorno.   syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = -EJ*D2w(0) == 0; cond3 = w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')       "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-2-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-2-2",
  "type": "Figura",
  "number": "3.8.1",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-2-4-1-4",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-2-4-1-4",
  "type": "Listato",
  "number": "3.8.2",
  "title": "",
  "body": "  syms w(x) EJ F l; ode = EJ*diff(w,x,4) == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == F; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol = dsolve(ode,conds) M = -EJ*diff(sol,x,2)   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-2-4-2-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-2-4-2-2",
  "type": "Listato",
  "number": "3.8.3",
  "title": "",
  "body": "  syms w(x); EJ = 1; F = 1; l = 1; w(x)=F\/6\/EJ*(-x^3+3*l*x^2); np = 100; Xv = 0:1\/np:1; wv = w(Xv); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-3-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-3-2",
  "type": "Figura",
  "number": "3.8.4",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-3-4-1-4",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-3-4-1-4",
  "type": "Listato",
  "number": "3.8.5",
  "title": "",
  "body": "  syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = D1w(0) == 0; cond3 = -EJ*D3w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')   "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-4-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-4-2",
  "type": "Figura",
  "number": "3.8.6",
  "title": "",
  "body": "  "
},
{
  "id": "bent_beam_applications_sec_elasticity_chap_it-4-4-1-2",
  "level": "2",
  "url": "bent_beam_applications_sec_elasticity_chap_it.html#bent_beam_applications_sec_elasticity_chap_it-4-4-1-2",
  "type": "Listato",
  "number": "3.8.7",
  "title": "",
  "body": "  syms w(x) EJ q l; ode = -EJ*diff(w,x,4) + q == 0; D1w = diff(w,x,1); D2w = diff(w,x,2); D3w = diff(w,x,3); cond1 = w(0) == 0; cond2 = -EJ*D2w(0) == 0; cond3 = w(l) == 0; cond4 = -EJ*D2w(l) == 0; conds = [cond1 cond2 cond3 cond4]; sol(x,EJ,q,l) = dsolve(ode,conds) M(x,EJ,q,l) = -EJ*diff(sol,x,2) np = 100; Xv = 0:1\/np:1; wv = sol(Xv,1,1,1); Beam = zeros(1, np+1); plot(Xv,wv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse') Mv = M(Xv,1,1,1); plot(Xv,Mv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'YDir','reverse')   "
},
{
  "id": "exercises_sec_elasticity_chap_it",
  "level": "1",
  "url": "exercises_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.9",
  "title": "esercizi",
  "body": " esercizi     In un punto di un foglio sottile di alluminio ( , ) le uniche componenti non nulle di deformazione sono e .  Analizzando il problema nel piano si calcoli quanto segue: tensioni principali e direzioni principali; il tensore della tensione rispetto ad un riferimento inclinato di 30 rispetto alle direzioni principali.        Il pannello elastico mostrato in Figura è costituito da materiale isotropo con parametri costitutivi e generici. La larghezza del pannello coincide esattamente con la larghezza della cavità mentre in direzione verticale il pannello è libero di deformarsi senza che insorgano fenomeni di attrito.  In condizioni piane, si calcoli lo stato tensionale indotto dall'applicazione del carico e l'abbassamento in sommità .        Il pannello elastico mostrato in Figura è costituito da materiale isotropo con parametri costitutivi e generici. Il pannello è appoggiato in una cavità con pareti perfettamente lisce.  In condizioni piane, si calcoli il valore del carico in grado di far coincidere la larghezza del pannello con la larghezza, , della cavità. Si calcoli anche l'abbassamento in sommità .        Due pannelli quadrati di materiale differente vengono inseriti nella cavità di altezza minore di . Si risolva il problema elastico assumendo assenti fenomeni di attrito lungo le pareti della cavità.        Un blocco di materiale elastico ed isotropo con parametri costitutivi e generici, sia soggetto ad una compressione pari a lungo l'asse . Si valutino le componenti di tensione e di deformazione nei seguenti casi:  deformazioni impedite lungo le direzioni ed ;  deformazione impedita solo lungo la direzione ;  deformazioni libere lungo le direzioni ed .          Si calcoli la soluzione elastica utilizzando il modello di trave tesa. A tal fine si assuma per le caratteristiche della trave modulo di Young pari al valore generico e area della sezione pari ad .  A soluzione ottenuta, costruire una rappresentazione grafica dello sforzo normale .        Si calcoli la soluzione elastica utilizzando il modello di trave tesa. A tal fine si assuma per le caratteristiche della trave modulo di Young pari al valore generico e area della sezione pari ad .  A soluzione ottenuta, costruire una rappresentazione grafica dello sforzo normale .        Si calcoli la soluzione elastica utilizzando il modello di trave inflessa. A tal fine si assuma per le caratteristiche della trave modulo di Young pari al valore generico e momento d'inerzia della sezione pari ad .  A soluzione ottenuta, costruire una rappresentazione grafica dello spostamento trasversale e del momento flettente .        Si calcoli la soluzione elastica utilizzando il modello di trave inflessa. A tal fine si assuma per le caratteristiche della trave modulo di Young pari al valore generico e momento d'inerzia della sezione pari ad .  A soluzione ottenuta, costruire una rappresentazione grafica dello spostamento trasversale e del momento flettente .   "
},
{
  "id": "exercises_sec_elasticity_chap_it-3-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-3-1",
  "type": "Figura",
  "number": "3.9.1",
  "title": "",
  "body": "  "
},
{
  "id": "elasticity_ex_1-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#elasticity_ex_1-1",
  "type": "Figura",
  "number": "3.9.2",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_it-5-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-5-1",
  "type": "Figura",
  "number": "3.9.3",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_it-6-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-6-1",
  "type": "Figura",
  "number": "3.9.4",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_it-7-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-7-1",
  "type": "Figura",
  "number": "3.9.5",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_it-8-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-8-1",
  "type": "Figura",
  "number": "3.9.6",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_it-9-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-9-1",
  "type": "Figura",
  "number": "3.9.7",
  "title": "",
  "body": "  "
},
{
  "id": "exercises_sec_elasticity_chap_it-10-1",
  "level": "2",
  "url": "exercises_sec_elasticity_chap_it.html#exercises_sec_elasticity_chap_it-10-1",
  "type": "Figura",
  "number": "3.9.8",
  "title": "",
  "body": "  "
},
{
  "id": "answers_sec_elasticity_chap_it",
  "level": "1",
  "url": "answers_sec_elasticity_chap_it.html",
  "type": "Paragrafo",
  "number": "3.10",
  "title": "risposte ad alcuni degli esercizi proposti",
  "body": " risposte ad alcuni degli esercizi proposti    Risposta all'esercizio riportato nella .   % tensore della tensione che soddisfa le equazioni di equilibrio syms q 'real'; sig = [0 0; 0 -q]; % tensore della deformazione syms b s 'real'; e11 = 2*s\/(2*s+b); syms e22 'real'; eps = [e11 0; 0 e22]; % legame elastico syms E ni 'real'; eq1 = sig(1,1)\/E -ni*sig(2,2)\/E == eps(1,1); eq2 = sig(2,2)\/E -ni*sig(1,1)\/E == eps(2,2); % equazioni che possono essere risolte rispetto alle incognite q e e22 sol = solve([eq1 eq2],[q e22]); q = sol.q e22 = sol.e22 % integrazione della componente veriticale di deformazione syms u_2 X_2 'real'; syms u_2(X_2); ode = diff(u_2, X_2, 1) == e22; cond = u_2(0) == 0; sol = dsolve(ode,cond); u_2(X_2) = sol; % abbassamento verticale w syms h 'real'; w = -u_2(h)      "
},
{
  "id": "answers_sec_elasticity_chap_it-2-1-2",
  "level": "2",
  "url": "answers_sec_elasticity_chap_it.html#answers_sec_elasticity_chap_it-2-1-2",
  "type": "Listato",
  "number": "3.10.1",
  "title": "",
  "body": "  % tensore della tensione che soddisfa le equazioni di equilibrio syms q 'real'; sig = [0 0; 0 -q]; % tensore della deformazione syms b s 'real'; e11 = 2*s\/(2*s+b); syms e22 'real'; eps = [e11 0; 0 e22]; % legame elastico syms E ni 'real'; eq1 = sig(1,1)\/E -ni*sig(2,2)\/E == eps(1,1); eq2 = sig(2,2)\/E -ni*sig(1,1)\/E == eps(2,2); % equazioni che possono essere risolte rispetto alle incognite q e e22 sol = solve([eq1 eq2],[q e22]); q = sol.q e22 = sol.e22 % integrazione della componente veriticale di deformazione syms u_2 X_2 'real'; syms u_2(X_2); ode = diff(u_2, X_2, 1) == e22; cond = u_2(0) == 0; sol = dsolve(ode,cond); u_2(X_2) = sol; % abbassamento verticale w syms h 'real'; w = -u_2(h)   "
},
{
  "id": "refs_elasticity_chap_it",
  "level": "1",
  "url": "refs_elasticity_chap_it.html",
  "type": "Bibliografia",
  "number": "3.11",
  "title": "riferimenti e letture suggerite",
  "body": " riferimenti e letture suggerite  Wikipedia, Hooke's law .  J. Lubliner and P. Papadopoulos, Introduction to Solid Mechanics . Springer International Publishing Switzerland 2014, 2017. Pagg. 247-267.  "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_it",
  "level": "1",
  "url": "description_sec_rigid_body_kinematics_chap_it.html",
  "type": "Paragrafo",
  "number": "4.1",
  "title": "descrizione cinematica di base",
  "body": " descrizione cinematica di base  Come visto nella la descrizione del moto di un corpo nell'intorno di un suo generico punto viene effettuata mediante il gradiente della trasformazione . A sua volta il gradiente, per il teorema di decomposzione polare ( ), ammette la decomposizione . Assumendo l'ipotesi di corpo rigido , ovvero l'invarianza delle distanze reciproche dei punti che compongono il corpo, il corpo non si deforma e quindi Inoltre, sempre per l'ipotesi di rigidità, la trasformazione non vale solo per un intorno del punto ma è omogena e quindi assume lo stesso valore su tutti i punti del corpo. Tale ulteriore condizione consente di esprimere il legame fra incrementi infinitesimi in termini finiti, ovvero dove si riferisce al generico punto e assume il significato particolare di polo rispetto al quale si descrive la trasformazione rigida. La scelta del polo è completamente indifferente e qualsiasi polo, interno o esterno al corpo, conduce ai medesimi risultati. Se si introduce nella il legame si ottiene la descrisione del moto rigido in termini di spostamenti La relazione evidenzia come il campo di spostamento per un corpo rigido sia definito da due contributi ciascuno caratterizzato da 3 gradi di libertà :  un contributo di traslazione pura (3 componenti) condiviso da tutti i punti del corpo, contributo dato dallo spostamento del polo ;  un contributo di rotazione (3 componenti) che invece varia per ogni punto in ragione del vettore .      linearizzazione  Il generico tensore di rotazione ha una rappresentazione del tipo, si veda il , espressione non lineare per la presenza delle funzioni trigonometriche. Ma si è anche visto che nel caso di spostamenti infinitesimi, si veda l' , il tensore di rotazione assume la seguente espressione dove Pertanto, nel caso di spostamenti infinitesimi, la relazione diventa e quindi La rappresentazione per componenti fornisce    Nel formato tensoriale le formule precedenti sono del tutto generiche. Nello specificare le formule nel formato matriciale si è fatto riferimento al contesto bidimensionale che sarà utilizzato nelle applicazioni successive. Dalla formula in particolare si evince che le due traslazioni del polo, e , e la rotazione costituiscono i 3 parametri necessari per descrivere il moto di un corpo rigido nel piano.  Anche se non necessario - le componenti di spostamento variano da punto a punto sul corpo, ma la rotazione di un corpo rigido non varia da punto a punto - nelle applicazioni successive si tenderà a denotare anche la rotazione del corpo con un simbolo del tipo indicando quindi a pedice il polo preso come riferimento.    Le seguenti istruzioni MATLAB definiscono una funzione per il calcolo dello spostamento rigido nel piano di un punto assegnato, X, rispetto ad un polo generico, X0, ed ai parametri che definiscono la traslazione e la rotazione di un corpo, u0 e phi0. Il corpo in questione è mondimensionale, quindi di tipo trave, ed è individuato da 2 o più punti. Nell'esempio si considera una trave definita da 3 punti e se ne calcola lo spostamento assumendo come polo ciascuno di questi 3 punti.   % campo di spostamento generico nel piano rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % descrizione geometrica della trave syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % campo di spostamento assumendo come polo il punto A POLO = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C); % campo di spostamento assumendo come polo il punto B POLO = B; syms phiB; phi0 = phiB; u0 = sym('uB', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C); % campo di spostamento assumendo come polo il punto C POLO = C; syms phiC; phi0 = phiC; u0 = sym('uC', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C);       Una scrittura alternativa dell'equazione si ottiene esplicitando la struttura del tensore , ovvero dove è l'angolo di rotazione e è un generico tensore emisimmetrico, si veda al riguardo l' . Inoltre, utilizzando il vettore assiale associato al tensore , si può anche scrivere     "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_it-3-3",
  "level": "2",
  "url": "description_sec_rigid_body_kinematics_chap_it.html#description_sec_rigid_body_kinematics_chap_it-3-3",
  "type": "Osservazione",
  "number": "4.1.1",
  "title": "",
  "body": " Nel formato tensoriale le formule precedenti sono del tutto generiche. Nello specificare le formule nel formato matriciale si è fatto riferimento al contesto bidimensionale che sarà utilizzato nelle applicazioni successive. Dalla formula in particolare si evince che le due traslazioni del polo, e , e la rotazione costituiscono i 3 parametri necessari per descrivere il moto di un corpo rigido nel piano.  Anche se non necessario - le componenti di spostamento variano da punto a punto sul corpo, ma la rotazione di un corpo rigido non varia da punto a punto - nelle applicazioni successive si tenderà a denotare anche la rotazione del corpo con un simbolo del tipo indicando quindi a pedice il polo preso come riferimento.  "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_it-3-4-1-2",
  "level": "2",
  "url": "description_sec_rigid_body_kinematics_chap_it.html#description_sec_rigid_body_kinematics_chap_it-3-4-1-2",
  "type": "Listato",
  "number": "4.1.2",
  "title": "",
  "body": "  % campo di spostamento generico nel piano rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % descrizione geometrica della trave syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % campo di spostamento assumendo come polo il punto A POLO = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C); % campo di spostamento assumendo come polo il punto B POLO = B; syms phiB; phi0 = phiB; u0 = sym('uB', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C); % campo di spostamento assumendo come polo il punto C POLO = C; syms phiC; phi0 = phiC; u0 = sym('uC', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C);   "
},
{
  "id": "description_sec_rigid_body_kinematics_chap_it-3-5",
  "level": "2",
  "url": "description_sec_rigid_body_kinematics_chap_it.html#description_sec_rigid_body_kinematics_chap_it-3-5",
  "type": "Osservazione",
  "number": "4.1.3",
  "title": "",
  "body": " Una scrittura alternativa dell'equazione si ottiene esplicitando la struttura del tensore , ovvero dove è l'angolo di rotazione e è un generico tensore emisimmetrico, si veda al riguardo l' . Inoltre, utilizzando il vettore assiale associato al tensore , si può anche scrivere   "
},
{
  "id": "constraints_sec_rigid_body_kinematics_chap_it",
  "level": "1",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html",
  "type": "Paragrafo",
  "number": "4.2",
  "title": "vincoli",
  "body": " vincoli  Il termine vincolo viene utilizzato per indicare un dispositivo che limita le possibilità di movimento di un sistema di corpi. Un generico sistema, ad esempio un sistema di corpi rigidi, viene descritto mediante parametri, , che prendono il nome di coordinate lagrangiane del sistema . In questi termini, la generica condizione di vincolo viene espressa, nella forma più generica, nel modo seguente: Dove compaiono, oltre alle coordinate lagrangiane, anche le loro derivate, , rispetto al tempo.  Per gli sviluppi successivi è sufficiente considerare solo vincoli fissi (indipendenti dal tempo), bilateri (la condizione di vincolo si esprime mediante il segno di uguaglianza) e non monolateri (espressi mediante i segni di disegueglianza), olonomi (indipendenti dalle velocità) e non sclerolonomi (dipendenti dalle velocità) e privi di attrito (consentono completamente ciò che non vincolano), ovvero La relazione appena scritta è in generale non lineare. Nel seguito si opererà nell'ambito di una cinematica del I ordine pertanto si opererà sempre con condizioni di vincolo di tipo lineare come di seguito descritto per i vincoli maggiormente utilizzati nelle applicazioni.    vincoli esterni semplici   carrello     Il carrello impone che lo spostamento del punto in cui è applicato può avvenire solo in direzione ortogonale all'asse del carrello: dove Nei casi particolari in cui l'asse del carrello è orizzontale, oppure , allora la condizione fornisce Se invece l'asse è verticale, oppure , la condizione vincolare diviene     doppio bipendolo     Il doppio bipendolo impone che la rotazione del punto di applicazione sia nulla, ovvero   Nel caso di corpo rigido la rotazione non può variare da punto a punto e, pertanto, bloccare la rotazione in un punto vuol dire bloccarla su tutto il corpo. Detto in altro parole, per la cinematica di corpo rigido il punto di applicazione del vincolo non ha nessuna rilevanza.        vincoli esterni doppi   cerniera o appoggio     La cerniera impone che nel punto di applicazione il vettore spostamento sia nullo     bipendolo     Il bipendolo impone le condizioni Nel caso in cui l'asse del bipendolo sia orizzontale o verticale vale quanto già detto per il carrello.      vincoli esterni tripli   incastro     Infine l'incastro impone       vincoli interni  L'articolazione di due o più corpi rigidi può essere effettuata mediante dei dispositivi detti vincoli interni. A scopo esemplificativo, evitando di passare in rassegna tutti i possibili casi, si discute solo uno dei casi più ricorrenti.   cerniera interna     La presenza del vincolo interno è esprimibile mediante la condizione     "
},
{
  "id": "carrello_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#carrello_fig",
  "type": "Figura",
  "number": "4.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "doppiobipendolo_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#doppiobipendolo_fig",
  "type": "Figura",
  "number": "4.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "constraints_sec_rigid_body_kinematics_chap_it-4-3-3-2",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#constraints_sec_rigid_body_kinematics_chap_it-4-3-3-2",
  "type": "Attenzione",
  "number": "4.2.3",
  "title": "",
  "body": " Nel caso di corpo rigido la rotazione non può variare da punto a punto e, pertanto, bloccare la rotazione in un punto vuol dire bloccarla su tutto il corpo. Detto in altro parole, per la cinematica di corpo rigido il punto di applicazione del vincolo non ha nessuna rilevanza.  "
},
{
  "id": "cerniera_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#cerniera_fig",
  "type": "Figura",
  "number": "4.2.4",
  "title": "",
  "body": "  "
},
{
  "id": "bipendolo_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#bipendolo_fig",
  "type": "Figura",
  "number": "4.2.5",
  "title": "",
  "body": "  "
},
{
  "id": "incastro_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#incastro_fig",
  "type": "Figura",
  "number": "4.2.6",
  "title": "",
  "body": "  "
},
{
  "id": "cerniera_interna_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_kinematics_chap_it.html#cerniera_interna_fig",
  "type": "Figura",
  "number": "4.2.7",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_sec_rigid_body_kinematics_chap_it",
  "level": "1",
  "url": "analysis_sec_rigid_body_kinematics_chap_it.html",
  "type": "Paragrafo",
  "number": "4.3",
  "title": "analisi cinematica",
  "body": " analisi cinematica    matrice cinematica  Si consideri un sistema rigido caratterizzato da coordinate lagrangiane e soggetto ad condizioni di vincolo. Le equazioni di vincolo corrispondente sono esprimibili nel modo seguente  è il generico cedimento assegnato sul vincolo -esimo, è l'incremento della coordinata lagrangiana -esima e è il contributo di spostamento fornito per un incremento unitario della coordinata sul vincolo -esimo. In termini matriciali le condizioni vincolari sono esprimibili come segue dove , di dimensioni , è la matrice cinematica del sistema, , di dimensione , è il vettore che raccoglie le coordinate lagrangiane e , di dimensione , è il vettore dei cedimenti assegnati.  Le componenti del vettore possono assumere indifferentemente valori nulli o non nulli. Il caso tipico è comunque il caso di cedimento assegnato nullo.       classificazione cinematica  Il sistema lineare viene utilizzato per il calcolo dei parametri lagrangiani . A tal fine è utile definire, sulla base delle condizioni di solvibilità del sistema, una classificazione cinematica dei stistemi. Sia , allora possono verificarsi i seguenti casi.    : sistema determinato;  : sistema labile;  : sistema impossibile.      sistema degenere.       Nel caso di sistema degenere una o più righe della matrice sono combinazione lineare delle altre. L'eliminazione delle righe dipendenti conduce ad un sistema con un numero inferiore di equazioni per il quale si può procedere con la soluzione ricadendo in uno dei tre casi visti per il sistema non degenere. Da un punto di vista meccanico tale situazione non necessariamente è sintomo di un errore ma può essere determinata da uno o più gradi di vincolo eliminabili senza modificare le condizioni cinematiche applicate al sistema.     "
},
{
  "id": "analysis_sec_rigid_body_kinematics_chap_it-2-2-19",
  "level": "2",
  "url": "analysis_sec_rigid_body_kinematics_chap_it.html#analysis_sec_rigid_body_kinematics_chap_it-2-2-19",
  "type": "Nota",
  "number": "4.3.1",
  "title": "",
  "body": " Le componenti del vettore possono assumere indifferentemente valori nulli o non nulli. Il caso tipico è comunque il caso di cedimento assegnato nullo.  "
},
{
  "id": "analysis_sec_rigid_body_kinematics_chap_it-3-3",
  "level": "2",
  "url": "analysis_sec_rigid_body_kinematics_chap_it.html#analysis_sec_rigid_body_kinematics_chap_it-3-3",
  "type": "Osservazione",
  "number": "4.3.2",
  "title": "",
  "body": " Nel caso di sistema degenere una o più righe della matrice sono combinazione lineare delle altre. L'eliminazione delle righe dipendenti conduce ad un sistema con un numero inferiore di equazioni per il quale si può procedere con la soluzione ricadendo in uno dei tre casi visti per il sistema non degenere. Da un punto di vista meccanico tale situazione non necessariamente è sintomo di un errore ma può essere determinata da uno o più gradi di vincolo eliminabili senza modificare le condizioni cinematiche applicate al sistema.  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it",
  "level": "1",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html",
  "type": "Paragrafo",
  "number": "4.4",
  "title": "applicazione dell’analisi cinematica ai sistemi di corpi rigidi",
  "body": " applicazione dell'analisi cinematica ai sistemi di corpi rigidi    trave appoggiata  Si effettui l'analisi cinematica della seguente trave di lunghezza pari a .     La lettura delle condizioni di vincolo assegnate fornisce dove . Le condizioni sono riscrivibili mediante le seguenti 3 equazioni scalari ( ):   Per l'unico corpo rigido in esame si scelga come polo il punto , pertanto i 3 parametri lagrangiani ( ) utilizzabili per la descrizione cinematica del sistema sono:   Utilizzando l'equazione le condizioni di vincolo possono essere espresse rispetto alle coordinate lagrangiane scelte Condizioni che, espresse in forma matriciale, forniscono:    Prima di procedere con la soluzione del sistema è possibile classificare il sistema calcolando il rango della matrice cinematica mediante le seguenti istruzioni MATLAB .   syms l; A = [1 0 0; 0 1 0; 0 1 l]; rank(A)      Dal momento che il e allora il sistema è cinematicamente determinato. La soluzione del sistema lineare fornisce infine i valori assunti dai parametri lagrangiani , e i quali in questo caso sono identicamente nulli.      syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; 0]; linsolve(A,b)      Si supponga di modificare il problema assegnato nel modo seguente.   In tal caso occorre modificare semplicemente la condizione vincolare per il carrello posto nel punto ovvero Pertanto sul sistema di equazioni da analizzare l'unico effetto è costituito solo dalla modifica del vettore dei termini noti e non si ha nessun effetto sulla classificazione del sistema che resta sempre cinematicamente determinato (la matrice non è cambiata!). Pertanto il sistema di equazioni diventa La soluzione del sistema lineare fornisce i nuovi valori assunti dai parametri lagrangiani , e .   Le istruzioni MATLAB utilizzabili in questo caso sono le seguenti.   syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; l\/10]; linsolve(A,b)         trave ad L \"appoggiata\"  Si effettui l'analisi cinematica del seguente sistema.     Lo schema proposto non presenta nessuna novità particolare rispetto allo schema precedente, pertanto si presenta una sua soluzione sulla base delle seguenti istruzioni MATLAB .      % campo di spostamento generico nel piano rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % descrizione geometrica della trave syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % campo di spostamento assumendo come polo il punto A POLO = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C); % equazioni di vincolo eqns = [ uA(2) == 0, uB(2) == 0, uC(1) == 0 ]; % matrice cinematica e vettore degli spostamenti assegnati [A,d] = equationsToMatrix(eqns, [uA(1), uA(2), phiA]); % gradi di libertà, n % gradi di vincolo, m [m,n] = size(A); % calcolo del rango di A r = rank(A); % se il sistema è cinematicamente determinato si calcola la soluzione if and(r == min(m,n), m == n) x = linsolve(A,d); end         arco a tre cerniere  Si effettui l'analisi cinematica del seguente sistema.     La lettura delle condizioni di vincolo assegnate fornisce In termini di singole equazioni scalari si ottiene ( ):   I corpi rigidi in esame sono due: per il corpo si sceglie come polo il punto e per il secondo corpo si sceglie il punto . Pertanto i 6 parametri lagrangiani ( ) utilizzabili per la descrizione cinematica del sistema sono:   Utilizzando l'equazione le condizioni di vincolo possono essere espresse rispetto alle coordinate lagrangiane scelte, in particolare: In forma matriciale si ottiene    Al fine di classificare il sistema si calcola il rango della matrice cinematica.   syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; rank(A)      Dal momento che il e allora il sistema è cinematicamente determinato. La soluzione del sistema lineare fornisce i valori assunti dai parametri lagrangiani , , , , , .      syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [0; 0; 0; 0; 0; 0]; linsolve(A,b)      Anche in questo caso la soluzione di un sistema cinematicamente determinato rispetto ad un vettore dei termini noti identicamente nullo fornisce ancora la soluzione banale.  Si può ottenere un risultato più interessante assumendo una condizione di spostamento assegnato non nullo su uno o più gradi di vincolo. Ad esempio:   In tal caso la forma matriciale delle condizioni vincolari fornisce    La soluzione può essere calcolata utilizzando le seguenti istruzioni MATLAB .   syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [l\/4; 0; 0; 0; 0; 0]; linsolve(A,b)      La rappresentazione grafica del campo di spostamento si ottiene valutando lo spostamento dei punti posti alle estremità dei tratti rettilinei ottenendo quanto segue.     Le seguenti istruzioni MATLAB consentono di ottenere un plottaggio della cinematica sopra illustrata.      % definizione della geometria L = 100; A = [0; 0]; B = [2*L; 0]; C = [2*L; -L]; D = [4*L; -L]; beam1 = [A B]; beam2 = [B C D]; % funzione per il calcolo della posizione di punto rigidT = @(u0, X0, phi0, X) ... [X(1)+u0(1)-phi0*(X(2)-X0(2)); ... X(2)+u0(2)+phi0*(X(1)-X0(1))]; % nuova configurazione della prima trave (polo in A) u0 = [L\/4; 0]; phi0 = 1\/4; X0 = A; TA = rigidT(u0, X0, phi0, A); TB = rigidT(u0, X0, phi0, B); beam1T = [TA TB]; % nuova configurazione della seconda trave (polo in D) u0 = [0; 0]; phi0 = -1\/4; X0 = D; TC = rigidT(u0, X0, phi0, C); TD = rigidT(u0, X0, phi0, D); beam2T = [TB TC TD]; % plottaggio clf x = beam1(1,:); y = beam1(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam2(1,:); y = beam2(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam1T(1,:); y = beam1T(2,:); line(x,y,'LineWidth',2,'Color','red') x = beam2T(1,:); y = beam2T(2,:); line(x,y,'LineWidth',2,'Color','red') xlim([0 4*L]) ylim([-L 0.5*L]) pbaspect([2.667 1 1])         esempio di schema labile  Si effettui l'analisi cinematica del seguente sistema.     Le condizioni di vincolo assegnate sono esprimibili nel modo seguente Le equazioni scalari deducibili sono ( ):   Per i due corpi rigidi in esame si scelgono come poli i punti B e D riferendo quindi la cinematica ai seguenti 6 parametri lagrangiani ( ):   Utilizzando sempre il modello di moto piano rappresentato dall'equazione le condizioni di vincolo possono essere espresse rispetto alle coordinate lagrangiane scelte ottenendo quanto segue, La scrittura matriciale del sistema di equazioni di vincolo fornisce    Si può quindi procedere con il calcolo del rango della matrice nel modo seguente.   syms l; A = [ 1 0 2*l 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 l; ... 0 0 0 0 1 0; ... ]; rank(A)      In questo caso il e pertanto il sistema è labile e caratterizzato da infinite soluzioni. Per descrivere tutte le soluzioni possibili si scelga come parametro la rotazione che viene eliminata dal gruppo delle incognite da calcolare. In tal modo il sistema può essere riscritto come segue    Le seguenti istruzioni MATLAB consentono di calcolare la soluzione cercata.   syms l k; A = [ 1 0 0 0 0; ... 0 1 0 0 0; ... 1 0 -1 0 0; ... 0 1 0 -1 l; ... 0 0 0 1 0; ... ]; b = [-2*l*k; 0; 0; -2*l*k; 0]; linsolve(A,b)      Le infinite soluzioni calcolate sono Una di queste è rappresentabile come segue        esercizi proposti  Si svolgano gli esercizi precedenti modificando opportunamente il codice MATLAB utilizzato per l'esempio riportato nella .   "
},
{
  "id": "trave_appoggiata_cinematica_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#trave_appoggiata_cinematica_fig",
  "type": "Figura",
  "number": "4.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "trave_appoggiata_cinematica_parametri_lagrangiani_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#trave_appoggiata_cinematica_parametri_lagrangiani_fig",
  "type": "Figura",
  "number": "4.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-2-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-2-5-1-2",
  "type": "Listato",
  "number": "4.4.3",
  "title": "",
  "body": "  syms l; A = [1 0 0; 0 1 0; 0 1 l]; rank(A)   "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-2-7-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-2-7-1-1",
  "type": "Listato",
  "number": "4.4.4",
  "title": "",
  "body": "  syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; 0]; linsolve(A,b)   "
},
{
  "id": "trave_appoggiata_cinematica_bis_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#trave_appoggiata_cinematica_bis_fig",
  "type": "Figura",
  "number": "4.4.5",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-2-9-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-2-9-1-2",
  "type": "Listato",
  "number": "4.4.6",
  "title": "",
  "body": "  syms l; A = [1 0 0; 0 1 0; 0 1 l]; b = [0; 0; l\/10]; linsolve(A,b)   "
},
{
  "id": "traveL_cinematica_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#traveL_cinematica_fig",
  "type": "Figura",
  "number": "4.4.7",
  "title": "",
  "body": "  "
},
{
  "id": "traveL_cinematica_sec-4-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#traveL_cinematica_sec-4-1-1",
  "type": "Listato",
  "number": "4.4.8",
  "title": "",
  "body": "  % campo di spostamento generico nel piano rigidDispl = ... @(u0, phi0, X0, X)... [u0(1)-phi0*(X(2)-X0(2));... u0(2)+phi0*(X(1)-X0(1))]; % descrizione geometrica della trave syms l; A = [0; 0]; B = [l; 0]; C = [l; l\/2]; % campo di spostamento assumendo come polo il punto A POLO = A; syms phiA; phi0 = phiA; u0 = sym('uA', [2 1]); uA = rigidDispl(u0, phi0, POLO, A); uB = rigidDispl(u0, phi0, POLO, B); uC = rigidDispl(u0, phi0, POLO, C); % equazioni di vincolo eqns = [ uA(2) == 0, uB(2) == 0, uC(1) == 0 ]; % matrice cinematica e vettore degli spostamenti assegnati [A,d] = equationsToMatrix(eqns, [uA(1), uA(2), phiA]); % gradi di libertà, n % gradi di vincolo, m [m,n] = size(A); % calcolo del rango di A r = rank(A); % se il sistema è cinematicamente determinato si calcola la soluzione if and(r == min(m,n), m == n) x = linsolve(A,d); end   "
},
{
  "id": "arcoatrecerniere_cinematica_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_cinematica_fig",
  "type": "Figura",
  "number": "4.4.9",
  "title": "",
  "body": "  "
},
{
  "id": "arcoatrecerniere_cinematica_parametri_lagrangiani_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_cinematica_parametri_lagrangiani_fig",
  "type": "Figura",
  "number": "4.4.10",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-4-5-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-4-5-1-1",
  "type": "Listato",
  "number": "4.4.11",
  "title": "",
  "body": "  syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; rank(A)   "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-4-7-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-4-7-1-1",
  "type": "Listato",
  "number": "4.4.12",
  "title": "",
  "body": "  syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [0; 0; 0; 0; 0; 0]; linsolve(A,b)   "
},
{
  "id": "arcoatrecerniere_cinematica_bis_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_cinematica_bis_fig",
  "type": "Figura",
  "number": "4.4.13",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-4-10-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-4-10-1-2",
  "type": "Listato",
  "number": "4.4.14",
  "title": "",
  "body": "  syms l; A = [ 1 0 0 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 0; ... 0 0 0 1 0 l; ... 0 0 0 0 1 2*l ... ]; b = [l\/4; 0; 0; 0; 0; 0]; linsolve(A,b)   "
},
{
  "id": "arcoatrecerniere_cinematica_bis_soluzione_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_cinematica_bis_soluzione_fig",
  "type": "Figura",
  "number": "4.4.15",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-4-13-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-4-13-1-1",
  "type": "Listato",
  "number": "4.4.16",
  "title": "",
  "body": "  % definizione della geometria L = 100; A = [0; 0]; B = [2*L; 0]; C = [2*L; -L]; D = [4*L; -L]; beam1 = [A B]; beam2 = [B C D]; % funzione per il calcolo della posizione di punto rigidT = @(u0, X0, phi0, X) ... [X(1)+u0(1)-phi0*(X(2)-X0(2)); ... X(2)+u0(2)+phi0*(X(1)-X0(1))]; % nuova configurazione della prima trave (polo in A) u0 = [L\/4; 0]; phi0 = 1\/4; X0 = A; TA = rigidT(u0, X0, phi0, A); TB = rigidT(u0, X0, phi0, B); beam1T = [TA TB]; % nuova configurazione della seconda trave (polo in D) u0 = [0; 0]; phi0 = -1\/4; X0 = D; TC = rigidT(u0, X0, phi0, C); TD = rigidT(u0, X0, phi0, D); beam2T = [TB TC TD]; % plottaggio clf x = beam1(1,:); y = beam1(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam2(1,:); y = beam2(2,:); line(x,y,'LineWidth',2,'Color','black') x = beam1T(1,:); y = beam1T(2,:); line(x,y,'LineWidth',2,'Color','red') x = beam2T(1,:); y = beam2T(2,:); line(x,y,'LineWidth',2,'Color','red') xlim([0 4*L]) ylim([-L 0.5*L]) pbaspect([2.667 1 1])   "
},
{
  "id": "arcoatrecerniere_labile_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_labile_fig",
  "type": "Figura",
  "number": "4.4.17",
  "title": "",
  "body": "  "
},
{
  "id": "arcoatrecerniere_labile_parametri_lagrangiani_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_labile_parametri_lagrangiani_fig",
  "type": "Figura",
  "number": "4.4.18",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-5-5-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-5-5-1-1",
  "type": "Listato",
  "number": "4.4.19",
  "title": "",
  "body": "  syms l; A = [ 1 0 2*l 0 0 0; ... 0 1 0 0 0 0; ... 1 0 0 -1 0 0; ... 0 1 2*l 0 -1 l; ... 0 0 0 0 1 0; ... ]; rank(A)   "
},
{
  "id": "analysis_examples_sec_rigid_body_kinematics_chap_it-5-7-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#analysis_examples_sec_rigid_body_kinematics_chap_it-5-7-1-2",
  "type": "Listato",
  "number": "4.4.20",
  "title": "",
  "body": "  syms l k; A = [ 1 0 0 0 0; ... 0 1 0 0 0; ... 1 0 -1 0 0; ... 0 1 0 -1 l; ... 0 0 0 1 0; ... ]; b = [-2*l*k; 0; 0; -2*l*k; 0]; linsolve(A,b)   "
},
{
  "id": "arcoatrecerniere_labile_soluzione_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_kinematics_chap_it.html#arcoatrecerniere_labile_soluzione_fig",
  "type": "Figura",
  "number": "4.4.21",
  "title": "",
  "body": "  "
},
{
  "id": "refs_rigid_body_kinematics_chap_it",
  "level": "1",
  "url": "refs_rigid_body_kinematics_chap_it.html",
  "type": "Bibliografia",
  "number": "4.5",
  "title": "riferimenti e letture suggerite",
  "body": " riferimenti e letture suggerite  ialms.net, Simulatore del moto di un corpo rigido in 3D .  "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "equilibrium_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.1",
  "title": "equazioni di equilibrio",
  "body": " equazioni di equilibrio  Di equazioni di equilibrio si è già parlato nel dedicato ai corpi continui. Si potrebbe quindi procedere particolarizzando le equazioni e al caso di sistemi di corpi soggetti a forze di tipo puntuale. Si preferisce invece ricavare le equazioni di equilibrio in maniera autonoma attraverso l'applicazione del principio dei lavori virtuali già discusso per i corpi continui nella .    condizioni di equilibrio statico per un sistema di punti  Si consideri un sistema costituito da punti materiali. Applicando la prima legge di Newton il sistema di punti manterrà il proprio stato di quiete se:       forma scalare delle equazioni di equilibrio  Si consideri per ciascun punto del sistema uno spostamento arbitrario , e si sommi il prodotto scalare di ogni forza per il corrispondente spostamento introdotto. In virtù della è possibile formulare la seguente equazione scalare: Quanto detto può essere formulato sinteticamente come segue È facile rendersi conto come sia vero anche l'inverso ovvero      introduzione della cinematica di corpo rigido  Se a questo punto si assume che il sistema di punti in esame siano punti appartenenti ad un corpo rigido allora è possibile esprimere il campo di spostamenti virtuali, si veda l'equazione , nel modo seguente:   Grazie a quest'ultima relazione la può essere riscritta come e manipolata come segue: Il soddisfacimento di quest'ultima condizione scalare per qualsiasi e qualsiasi richiede il soddisfacimento delle seguenti equazioni vettoriali.      Annullamento della risultante delle forze applicate     Annullamento del momento risultante delle forze applicate       Ciascuna delle equazioni vettoriali e è esprimibile nei termini di tre equazioni scalari associate alle singole componenti dei vettori risultante e momento risultante.  La scelta del polo, di coordinate (interno o esterno al corpo in esame), è indifferente, come si può verificare utilizzando un altro polo avente coordinate, ad esempio, . Dove, nell'ultimo passaggio, è stata utilizzata la condizione di annullamento della risultante.       momento di una forza  Data una forza applicata al punto di coordinate e dato un polo individuato dalle coordinate , è possibile valutare il momento di rispetto al polo scelto calcolando il seguente prodotto vettoriale dove è un vettore ortogonale ad ambedue i vettori e ed ha modulo essendo l'angolo compreso fra i due vettori. La quantità prende il nome di braccio quantità che non cambia se la forza scorre lungo la sua retta di applicazione:    Quindi è la distanza fra il polo e la retta di applicazione della forza . Si osserva anche che se oppure , ovvero i vettori e sono paralleli, il momento è nullo.   definizione di una coppia Si consideri un generico corpo rigido soggetto a due forze aventi risultante nulla così come mostrato nella seguente figura.   In questo caso si potrà dire che il corpo è soggetto soltanto ad una coppia avente modulo essendo la distanza fra le due rette che sostengono le forze assegnate. Stabilita quindi l'origine dell'ente statico coppia, nulla vieta l'assegnazione diretta di una coppia applicata ad un corpo rigido come ulteriore carico agente sul corpo, senza la necessità di specificare le forze che l'hanno prodotta. Infatti tali forze darebbero comunque un contributo nullo all'equilibrio alla traslazione del corpo. Si fa notare inoltre che l'assegnazione della coppia non richiede anche la specifica di un punto di applicazione.   "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_it-5-5",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_it.html#equilibrium_sec_rigid_body_statics_chap_it-5-5",
  "type": "Osservazione",
  "number": "5.1.1",
  "title": "",
  "body": "Ciascuna delle equazioni vettoriali e è esprimibile nei termini di tre equazioni scalari associate alle singole componenti dei vettori risultante e momento risultante. "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_it-5-6",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_it.html#equilibrium_sec_rigid_body_statics_chap_it-5-6",
  "type": "Osservazione",
  "number": "5.1.2",
  "title": "",
  "body": "La scelta del polo, di coordinate (interno o esterno al corpo in esame), è indifferente, come si può verificare utilizzando un altro polo avente coordinate, ad esempio, . Dove, nell'ultimo passaggio, è stata utilizzata la condizione di annullamento della risultante. "
},
{
  "id": "force_arm_fig",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_it.html#force_arm_fig",
  "type": "Figura",
  "number": "5.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "equilibrium_sec_rigid_body_statics_chap_it-6-3",
  "level": "2",
  "url": "equilibrium_sec_rigid_body_statics_chap_it.html#equilibrium_sec_rigid_body_statics_chap_it-6-3",
  "type": "Nota",
  "number": "5.1.4",
  "title": "definizione di una coppia.",
  "body": " definizione di una coppia Si consideri un generico corpo rigido soggetto a due forze aventi risultante nulla così come mostrato nella seguente figura.   In questo caso si potrà dire che il corpo è soggetto soltanto ad una coppia avente modulo essendo la distanza fra le due rette che sostengono le forze assegnate. Stabilita quindi l'origine dell'ente statico coppia, nulla vieta l'assegnazione diretta di una coppia applicata ad un corpo rigido come ulteriore carico agente sul corpo, senza la necessità di specificare le forze che l'hanno prodotta. Infatti tali forze darebbero comunque un contributo nullo all'equilibrio alla traslazione del corpo. Si fa notare inoltre che l'assegnazione della coppia non richiede anche la specifica di un punto di applicazione. "
},
{
  "id": "planecase_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "planecase_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.2",
  "title": "il caso piano",
  "body": " il caso piano  Se si considera il caso in cui siano soltanto due le componenti non nulle delle forze applicate e delle posizioni dei punti dello spazio, l'equazione vettoriale è esprimibile solo mediante due equazioni scalari e l'equazione vettoriale si riduce ad una sola equazione scalare. Ovvero La condizione esprime l'annullamento della somma di tutte le forze orizzontali applicate, ovvero le componenti lungo l'asse 1 delle forze applicate. La condizione impone l'annullamento della somma di tutte le forze verticali applicate, ovvero le componenti lungo l'asse 2 delle forze applicate. La condizione esprime l'annullamento della somma dei momenti esercitati dalle forze orizzontali e verticali rispetto al punto scelto come polo. La seguente figura illustra per il caso di una singola forza il significato dei termini presenti nelle equazioni.      Le seguenti istruzioni MATLAB consentono di valutare le risultanti delle forze orizzontali, delle forze verticali e dei momenti a partire dai carichi applicati sui singoli punti di un corpo rigido.   % vettore delle risultanti = % [orizzontale; verticale; momento] R = zeros(3,1); % funzione per il calcolo del momento momento = @(X0, X, Carico)... -Carico(1)*(X(2)-X0(2))+Carico(2)*(X(1)-X0(1)); % coordinate dei punti sui quali sono applicati i carichi syms L; A = [0; 0]; B = [L; 0]; C = [L; L\/2]; % scelta del polo POLO = A; % per ogni punto si assegna il vettore Carico = [F1; F2; M] % e si sommano i contributi alla risultante syms F; CaricoA = [F; F; 0]; R = R + CaricoA; R(3) = R(3) + momento(POLO, A, CaricoA); R CaricoB = [-F; -F; 0]; R = R + CaricoB; R(3) = R(3) + momento(POLO, B, CaricoB); R CaricoC = [-F; 2*F; F*L]; R = R + CaricoC; R(3) = R(3) + momento(POLO, C, CaricoC); R if and(and(R(1) == 0, R(2) == 0), R(3) == 0) disp('Sistema equilibrato') else disp('Sistema non equilibrato') end        "
},
{
  "id": "plane_statics_fig",
  "level": "2",
  "url": "planecase_sec_rigid_body_statics_chap_it.html#plane_statics_fig",
  "type": "Figura",
  "number": "5.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "planecase_sec_rigid_body_statics_chap_it-3-1-2",
  "level": "2",
  "url": "planecase_sec_rigid_body_statics_chap_it.html#planecase_sec_rigid_body_statics_chap_it-3-1-2",
  "type": "Listato",
  "number": "5.2.2",
  "title": "",
  "body": "  % vettore delle risultanti = % [orizzontale; verticale; momento] R = zeros(3,1); % funzione per il calcolo del momento momento = @(X0, X, Carico)... -Carico(1)*(X(2)-X0(2))+Carico(2)*(X(1)-X0(1)); % coordinate dei punti sui quali sono applicati i carichi syms L; A = [0; 0]; B = [L; 0]; C = [L; L\/2]; % scelta del polo POLO = A; % per ogni punto si assegna il vettore Carico = [F1; F2; M] % e si sommano i contributi alla risultante syms F; CaricoA = [F; F; 0]; R = R + CaricoA; R(3) = R(3) + momento(POLO, A, CaricoA); R CaricoB = [-F; -F; 0]; R = R + CaricoB; R(3) = R(3) + momento(POLO, B, CaricoB); R CaricoC = [-F; 2*F; F*L]; R = R + CaricoC; R(3) = R(3) + momento(POLO, C, CaricoC); R if and(and(R(1) == 0, R(2) == 0), R(3) == 0) disp('Sistema equilibrato') else disp('Sistema non equilibrato') end   "
},
{
  "id": "constraints_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "constraints_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.3",
  "title": "vincoli",
  "body": " vincoli  Un corpo o un sistema di corpi tipicamente è soggetto sia ai carichi applicati sia a delle assegnate condizioni di vincolo. Da un punto di vista statico i vincoli vengono trattati rappresentando l’azione esercitata dal vincolo in termini di forze o coppie denominate reazioni vincolari . Tale procedura, come vedremo, consente di ottenere il diagramma di corpo libero mediante il quale il corpo viene rappresentato sotto l'azione di due gruppi di enti statici: le azioni applicate e le reazioni vincolari.  Nel caso piano, in generale, un vincolo applicato può dar luogo a 3 componenti di reazione: Dove e sono le componenti di una forza di reazione, , appartenente al piano di lavoro. La presenza, in un punto del corpo, di tutte e 3 le componenti o soltanto di alcune di queste dipende dal tipo di vincolo applicato.    assenza di vincolo  È il caso banale in cui in un punto non vi è alcun vincolo applicato, di conseguenza non sarà possibile l'insorgere di componenti di reazione differenti da zero:      vincoli semplici   carrello     La presenza del carrello determina, dal punto di vista statico, soltanto una forza di reazione, , diretta secondo l'asse del carrello. Quindi delle tre componenti di reazione solo le prime due possono essere diverse da zero Inoltre è nota la direzione della forza di reazione e quindi le due componenti e non sono fra loro indipendenti ma legate dalla relazione   Ovviamente nel caso cui il carrello abbia asse orizzontale solo può essere diversa da zero: Nel caso di asse verticale invece     doppio bipendolo     Il doppio bipendolo vincola la rotazione di corpo rigido del corpo rendendo possibile, dal punto di vista statico, solo l'insorgere della componente coppia della reazione vincolare. Pertanto si avrà       vincoli doppi   cerniera     La presenza della cerniera rende possibile, come nel caso del carrello, la presenza di una forza di reazione, , la cui direzione non è nota a priori. Pertanto avremo le due componenti di reazione, orizzontale e verticale, eventualmente non nulle e indipendenti     bipendolo     Il bipendolo per le componenti orizzontale e verticale si comporta come il carrello. Il vincolo ulteriore sulla rotazione determina anche la presenza della componte coppia. Pertanto si avrà dove   Anche per il bipendolo se l'asse è orizzontale solo può essere diversa da zero: e nel caso di asse verticale invece       vincoli tripli   incastro     L'incastro determina l'insorgere di una reazione vicolare avente le 3 componenti tutte eventualmente non nulle e indipendenti       riepilogo  Le figure successive illustrano per il caso piano la rappresentazione grafica dei vincoli e l'eventuale presenza delle componenti di reazione , e .   Vincoli semplici.     Vincoli doppi.     Vincoli tripli.    I vincoli \"carrello\" e \"bipendolo\" possono essere rappresentati mediante un'inclinazione differente da e , in tal caso la rotazione del simbolo ha anche un preciso significato meccanico in quanto la forza da essi esercitata è ruotata dello stesso angolo, dando luogo a componenti orizzontale e verticale eventualmente ambedue diverse da zero. Gli altri vincoli invece esercitano comunque le componenti di reazione indicate nelle figure indipendentemente da una eventuale rotazione applicata nella loro rappresentazione grafica.     vincoli interni  I vincoli interni prescrivono, a differenza dai vincoli esterni, condizioni cinematiche nei punti di contatto tra uno o più corpi. Pertanto, da un punto di vista statico, vengono trattati in termini di reazioni vincolari scambiate dai corpi interessati dalla condizione di vincolo. In figura viene illustrato uno dei casi più ricorrenti, ovvero il caso della cerniera interna.      "
},
{
  "id": "carrello_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#carrello_statica_fig",
  "type": "Figura",
  "number": "5.3.1",
  "title": "",
  "body": "  "
},
{
  "id": "doppiobipendolo_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#doppiobipendolo_statica_fig",
  "type": "Figura",
  "number": "5.3.2",
  "title": "",
  "body": "  "
},
{
  "id": "cerniera_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#cerniera_statica_fig",
  "type": "Figura",
  "number": "5.3.3",
  "title": "",
  "body": "  "
},
{
  "id": "bipendolo_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#bipendolo_statica_fig",
  "type": "Figura",
  "number": "5.3.4",
  "title": "",
  "body": "  "
},
{
  "id": "incastro_statica_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#incastro_statica_fig",
  "type": "Figura",
  "number": "5.3.5",
  "title": "",
  "body": "  "
},
{
  "id": "statica_vicoli_semplici_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#statica_vicoli_semplici_fig",
  "type": "Figura",
  "number": "5.3.6",
  "title": "",
  "body": " Vincoli semplici.   "
},
{
  "id": "statica_vicoli_doppi_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#statica_vicoli_doppi_fig",
  "type": "Figura",
  "number": "5.3.7",
  "title": "",
  "body": " Vincoli doppi.   "
},
{
  "id": "statica_vicoli_tripli_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#statica_vicoli_tripli_fig",
  "type": "Figura",
  "number": "5.3.8",
  "title": "",
  "body": " Vincoli tripli.   "
},
{
  "id": "constraints_sec_rigid_body_statics_chap_it-8-6",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#constraints_sec_rigid_body_statics_chap_it-8-6",
  "type": "Nota",
  "number": "5.3.9",
  "title": "",
  "body": "I vincoli \"carrello\" e \"bipendolo\" possono essere rappresentati mediante un'inclinazione differente da e , in tal caso la rotazione del simbolo ha anche un preciso significato meccanico in quanto la forza da essi esercitata è ruotata dello stesso angolo, dando luogo a componenti orizzontale e verticale eventualmente ambedue diverse da zero. Gli altri vincoli invece esercitano comunque le componenti di reazione indicate nelle figure indipendentemente da una eventuale rotazione applicata nella loro rappresentazione grafica. "
},
{
  "id": "statica_cerniera_interna_fig",
  "level": "2",
  "url": "constraints_sec_rigid_body_statics_chap_it.html#statica_cerniera_interna_fig",
  "type": "Figura",
  "number": "5.3.10",
  "title": "",
  "body": "  "
},
{
  "id": "free_body_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "free_body_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.4",
  "title": "diagrammi di corpo libero",
  "body": " diagrammi di corpo libero  La costruzione dei diagrammi di corpo libero avviene modificando lo schema del problema statico assegnato. In particolare vengono rimossi i vincoli cinematici e al loro posto vengono introdotte le componenti di reazione vincolare associate ai vincoli rimossi. Si ottiene così un sistema di corpi soggetto solo agli enti statici costituiti da carichi applicati e reazioni vincolari. Il video successivo illustra per alcuni esempi la procedura appena descritta.          "
},
{
  "id": "analysis_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "analysis_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.5",
  "title": "analisi statica",
  "body": " analisi statica  La procedura utilizzata per l'analisi statica dei sistemi di corpi è composta dalle seguenti operazioni.  Individuazione del diagramma di corpo libero per il sistema di corpi da analizzare.  Scrittura delle equazioni di equilibrio che saranno in numero pari a 3 volte il numero ( ) di corpi che costituiscono il sistema ( ).  Classificazione statica del sistema.  Calcolo, se possibile, delle componenti di reazione vincolare che saranno in numero pari ai gradi di vincolo cinematico ( ) applicati al sistema di corpi.      matrice statica  Nell'analisi statica la scrittura delle equazioni di equilibrio è il passaggio fondamentale che in termini generali può essere formalizzato nel modo seguente. Si consideri un sistema caratterizzato da condizioni di equilibrio, soggetto ad un sistema di forze assegnato e ad componenti di reazione vincolare. Le condizioni di equilibrio possono essere formulate mediante un sistema lineare del seguente tipo Dove è la generica componente di reazione vincolare (forza o coppia), è la componente di forza o coppia che agisce sulla condizione di equilibrio -esima e è il contributo fornito, per un valore unitario della reazione , sulla condizione di equilibrio -esimo. In termini matriciali il sistema può essere riscritto come segue: dove , di dimensioni , prende il nome di matrice statica del sistema, , di dimensione , è il vettore che raccoglie le componenti di reazione vincolare (le incognite del sistema) e , di dimensione , è il vettore delle azioni esterne assegnate.     classificazione statica  L'utilizzo tipico del sistema è il calcolo delle reazioni vincolari . Ma anche in questo caso, come già fatto per la matrice cinematica, è istruttivo discutere la solvibilità del sistema per ricavarne considerazioni di tipo meccanico. Sia , allora possono verificarsi i seguenti casi.    : sistema isostatico , il sistema ammette una soluzione unica;  : sistema iperstatico , il sistema ammette infinite soluzioni;  : sistema ipostatico o impossibile , il sistema non ammette soluzioni.      sistema degenere .       "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.6",
  "title": "applicazione dell’analisi statica ai sistemi di corpi",
  "body": " applicazione dell'analisi statica ai sistemi di corpi    mensola  Si consideri una semplice trave incastrata ad un estremità e soggetta ad una forza verticale all'estremo libero. Nella figura successiva viene illustrato lo schema di partenza e il diagramma di corpo libero ottenuto rimuovendo l'incastro ed applicando le relative componenti di reazione vincolare ( ).     L'analisi coinvolge solo un corpo rigido, pertanto è possibile scrivere 3 equazioni di equilibrio ( ) che, assumendo come polo per l'equilibrio alla rotazione l'estremo della trave, sono esprimibili come segue Condizioni esprimibili in forma matriciale ottenendo Il sistema è evidentemente isostatico e il calcolo delle componenti di reazione vincolare fornisce      trave appoggiata  Si consideri una trave vincolata nella maniera indicata in figura e soggetta ad una forza verticale in mezzeria. La stessa figura riporta anche il diagramma di corpo libero ottenuto rimuovendo la cerniera e il carrello facendo seguire l'applicazione delle relative componenti di reazione vincolare ( ).     La presenza di un solo corpo rigido determina la scrittura di 3 equazioni di equilibrio ( ) per le quali si assume l'estremo come polo per l'equilibrio alla rotazione: Condizioni esprimibili in forma matriciale come Anche in questo caso la semplice ispezione della matrice statica consente di stabilire l'isostaticità del sistema. Il calcolo delle componenti di reazione vincolare fornisce:    Si riportano le istruzioni MATLAB utilizzabili per il calcolo delle reazioni vincolari incognite.   % vettore delle risultanti = % [orizzontale; verticale; momento] R = zeros(3,1); % funzione per il calcolo del momento momento = @(X0, X, Carico)... -Carico(1)*(X(2)-X0(2))+Carico(2)*(X(1)-X0(1)); % coordinate dei punti sui quali sono applicati i carichi syms L; A = [0; 0]; B = [L; 0]; C = [L\/2; 0]; % scelta del polo POLO = A; % per ogni punto si assegna il vettore Carico = [F1; F2; M] % e si sommano i contributi alla risultante syms HA VA; CaricoA = [HA; VA; 0]; R = R + CaricoA; R(3) = R(3) + momento(POLO, A, CaricoA); R syms VB; CaricoB = [0; VB; 0]; R = R + CaricoB; R(3) = R(3) + momento(POLO, B, CaricoB); R syms F; CaricoC = [0; -F; 0]; R = R + CaricoC; R(3) = R(3) + momento(POLO, C, CaricoC); R % equazioni di equilibrio eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % matrice statica e vettore dei carichi assegnati [B,b] = equationsToMatrix(eqns, [HA, VA, VB]); % gradi di libertà, n % gradi di vincolo, m [n,m] = size(B); % calcolo del rango di B r = rank(B); % se il sistema è staticamente determinato si calcola la soluzione if and(r == min(m,n), m == n) x = linsolve(B,b); end HA = x(1) VA = x(2) VB = x(3)         portale  Si consideri il seguente portale soggetto ad una forza verticale applicata nella mezzeria del traverso. I vincoli ( ) sono applicati al piede dei ritti e la loro rimozione e la successiva applicazione delle componenti di reazione vincolare conduce al diagramma di corpo libero riportato in figura insieme allo schema assegnato.     Le equazioni di equilibrio ( ) sono Equazioni che corrispondono alla seguente forma matriciale del sistema Il sistema è isostatico e la soluzione del sistema lineare fornisce    Si riportano le istruzioni MATLAB utilizzabili per il calcolo delle reazioni vincolari incognite.   % vettore delle risultanti = % [orizzontale; verticale; momento] R = zeros(3,1); % funzione per il calcolo del momento momento = @(X0, X, Carico)... -Carico(1)*(X(2)-X0(2))+Carico(2)*(X(1)-X0(1)); % coordinate dei punti sui quali sono applicati i carichi syms L; A = [0; 0]; B = [L; L\/2]; C = [L\/2; L]; % scelta del polo POLO = C; % per ogni punto si assegna il vettore Carico = [F1; F2; M] % e si sommano i contributi alla risultante syms VA MA; CaricoA = [0; VA; MA]; R = R + CaricoA; R(3) = R(3) + momento(POLO, A, CaricoA); R syms HB; CaricoB = [HB; 0; 0]; R = R + CaricoB; R(3) = R(3) + momento(POLO, B, CaricoB); R syms F; CaricoC = [0; -F; 0]; R = R + CaricoC; R(3) = R(3) + momento(POLO, C, CaricoC); R % equazioni di equilibrio eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % matrice statica e vettore dei carichi assegnati [B,b] = equationsToMatrix(eqns, [VA, MA, HB]); % gradi di libertà, n % gradi di vincolo, m [n,m] = size(B); % calcolo del rango di B r = rank(B); % se il sistema è staticamente determinato si calcola la soluzione if and(r == min(m,n), m == n) x = linsolve(B,b); end VA = x(1) MA = x(2) HB = x(3)         sistema a due corpi  Si consideri il seguente sistema costituito da due corpi connessi mediante una cerniera interna. La rimozione di tutti i gradi di vincolo ( ) e la successiva applicazione delle componenti di reazione vincolare conduce al diagramma di corpo libero riportato in figura insieme allo schema assegnato.     Il sistema è costituito da due corpi ( ), consentendo la scrittura di due gruppi di equazioni: le equazioni di equilibrio per il corpo (polo in ) e quelle per il corpo (polo in ) Equazioni riscrivibili nella seguente forma matriciale    Per il calcolo del rango della matrice statica si possono utilizzare le seguenti istruzioni MATLAB .   syms l B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] rango = rank(B)      Il calcolo fornisce un rango pari a che verifica la condizione . Essendo il sistema è isostatico. La soluzione del sistema lineare calcolabile con MATLAB       syms l F B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] f = [0; -F; -F*l; F; 0; 0] r = linsolve(B, -f)      fornisce infine l'unica soluzione possibile di seguito riportata.    "
},
{
  "id": "statica_mensola_con_forza_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#statica_mensola_con_forza_fig",
  "type": "Figura",
  "number": "5.6.1",
  "title": "",
  "body": "  "
},
{
  "id": "statica_appoggiata_con_forza_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#statica_appoggiata_con_forza_fig",
  "type": "Figura",
  "number": "5.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_it-3-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#analysis_examples_sec_rigid_body_statics_chap_it-3-5-1-2",
  "type": "Listato",
  "number": "5.6.3",
  "title": "",
  "body": "  % vettore delle risultanti = % [orizzontale; verticale; momento] R = zeros(3,1); % funzione per il calcolo del momento momento = @(X0, X, Carico)... -Carico(1)*(X(2)-X0(2))+Carico(2)*(X(1)-X0(1)); % coordinate dei punti sui quali sono applicati i carichi syms L; A = [0; 0]; B = [L; 0]; C = [L\/2; 0]; % scelta del polo POLO = A; % per ogni punto si assegna il vettore Carico = [F1; F2; M] % e si sommano i contributi alla risultante syms HA VA; CaricoA = [HA; VA; 0]; R = R + CaricoA; R(3) = R(3) + momento(POLO, A, CaricoA); R syms VB; CaricoB = [0; VB; 0]; R = R + CaricoB; R(3) = R(3) + momento(POLO, B, CaricoB); R syms F; CaricoC = [0; -F; 0]; R = R + CaricoC; R(3) = R(3) + momento(POLO, C, CaricoC); R % equazioni di equilibrio eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % matrice statica e vettore dei carichi assegnati [B,b] = equationsToMatrix(eqns, [HA, VA, VB]); % gradi di libertà, n % gradi di vincolo, m [n,m] = size(B); % calcolo del rango di B r = rank(B); % se il sistema è staticamente determinato si calcola la soluzione if and(r == min(m,n), m == n) x = linsolve(B,b); end HA = x(1) VA = x(2) VB = x(3)   "
},
{
  "id": "portale_isostatico_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#portale_isostatico_fig",
  "type": "Figura",
  "number": "5.6.4",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_it-4-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#analysis_examples_sec_rigid_body_statics_chap_it-4-5-1-2",
  "type": "Listato",
  "number": "5.6.5",
  "title": "",
  "body": "  % vettore delle risultanti = % [orizzontale; verticale; momento] R = zeros(3,1); % funzione per il calcolo del momento momento = @(X0, X, Carico)... -Carico(1)*(X(2)-X0(2))+Carico(2)*(X(1)-X0(1)); % coordinate dei punti sui quali sono applicati i carichi syms L; A = [0; 0]; B = [L; L\/2]; C = [L\/2; L]; % scelta del polo POLO = C; % per ogni punto si assegna il vettore Carico = [F1; F2; M] % e si sommano i contributi alla risultante syms VA MA; CaricoA = [0; VA; MA]; R = R + CaricoA; R(3) = R(3) + momento(POLO, A, CaricoA); R syms HB; CaricoB = [HB; 0; 0]; R = R + CaricoB; R(3) = R(3) + momento(POLO, B, CaricoB); R syms F; CaricoC = [0; -F; 0]; R = R + CaricoC; R(3) = R(3) + momento(POLO, C, CaricoC); R % equazioni di equilibrio eqns = [ R(1) ==0, R(2) == 0, R(3)==0 ]; % matrice statica e vettore dei carichi assegnati [B,b] = equationsToMatrix(eqns, [VA, MA, HB]); % gradi di libertà, n % gradi di vincolo, m [n,m] = size(B); % calcolo del rango di B r = rank(B); % se il sistema è staticamente determinato si calcola la soluzione if and(r == min(m,n), m == n) x = linsolve(B,b); end VA = x(1) MA = x(2) HB = x(3)   "
},
{
  "id": "statica_arcoatrecerniere_fig",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#statica_arcoatrecerniere_fig",
  "type": "Figura",
  "number": "5.6.6",
  "title": "",
  "body": "  "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_it-5-5-1-2",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#analysis_examples_sec_rigid_body_statics_chap_it-5-5-1-2",
  "type": "Listato",
  "number": "5.6.7",
  "title": "",
  "body": "  syms l B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] rango = rank(B)   "
},
{
  "id": "analysis_examples_sec_rigid_body_statics_chap_it-5-7-1-1",
  "level": "2",
  "url": "analysis_examples_sec_rigid_body_statics_chap_it.html#analysis_examples_sec_rigid_body_statics_chap_it-5-7-1-1",
  "type": "Listato",
  "number": "5.6.8",
  "title": "",
  "body": "  syms l F B = [ 1 0 1 0 0 0; 0 1 0 1 0 0; 0 0 0 2*l 0 0; 0 0 -1 0 1 0; 0 0 0 -1 0 1; 0 0 l 0 0 2*l ] f = [0; -F; -F*l; F; 0; 0] r = linsolve(B, -f)   "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.7",
  "title": "sollecitazioni",
  "body": " sollecitazioni  Lo stato di sforzo interno dei solidi mono-dimensionali, o travi, viene caratterizzato valutando in ogni punto le componenti della sollecitazione. Nel caso piano le componenti di sollecitazione sono tre: sforzo normale ( ) , taglio ( ) e momento flettente ( ) . Al fine di arrivare in maniera semmplice ad una definizione delle sollecitazioni, si consideri il seguente diagramma di corpo libero relativo ad un sistema equilibrato di forze.   Si immagini di separare il corpo in due parti mediante un piano passante per un generico punto ottenendo i seguenti diagrammi di corpo libero   dove si è postulato che le due parti si scambino, attraverso la sezione di separazione, delle azioni uguali ed opposte. Tali azioni dovranno essere comunque tali da soddisfare le equazioni di equilibrio su ciascuna parte ottenuta. In particolare, se si considera il tratto di lunghezza si ottengono le seguenti equazioni (polo per l'equilibrio alla rotazione posto nell'ascissa ): Sistema che fornisce la seguente soluzione per le componenti, incognite, di sollecitazione Lo stesso risultato si otterrebbe applicando le equazioni di equilibrio al tratto di lunghezza .   Il procedimento di separazione effetuato può anche essere inteso come la rimozione del vincolo di continuità nel punto e l'applicazione delle \"reazioni vincolari\" associate al vincolo, di grado 3, rimosso.    La singola operazione di sezionamento deve consentire di ottenere due corpi liberi distinti. Se a tal fine fosse neccessario effettuare altri sezionamenti allora per le parti separate si otterrebbe un problema iperstatico.     convenzione sul segno delle sollecitazioni  Applicando la procedura di sezionamento due volte al fine di isolare un tratto di trave di lunghezza infinitesima è possibile ottenere il seguente schema (dove è stato reso evidente anche l'altezza della trave) utile ad evidenziare la convenzione correntemente utilizzata per definire le sollecitazioni di segno positivo (per maggiore chiarezza le sollecitazioni sono raprresentate separatamente).        carichi ripartiti  Al fine di completare la casistica dei carichi applicabili agli schemi di travi e di rendere anche possibile la trattazione generale delle equazioni indefinite di equilibrio presentate nella sezione successiva, viene discusso il caso dei carichi ripartiti. Al tal fine si consideri il seguente schema.     Lo schema rappresenta una trave incastrata ad una estremità e soggetta ad un carico ripartito variabile . L'unità di misura del carico ripartito è , per cui si parlerà di carico ripartito per unità di lunghezza. Il diagramma di corpo libero riportato in alto a destra nella figura consente la scrittura delle tre equazioni di equilibrio (orizzontale, verticale e rotazione intorno al punto ) fornendo: È facile rendersi conto che gli integrali presenti nelle equazioni hanno il significato di risultante del carico applicato e momento statico rispetto al punto  dove rappresenta il baricentro del carico rispetto ad un'asse passante per , si veda l'ulteriore schema di corpo libero riportato in basso a destra nella figura. Pertanto le equazioni di equilibrio possono essere riscritte nel modo seguente: Quindi nei sistemi soggetti a carichi ripartiti è possibile sostituire questi ultimi con le rispettive risultanti posizionate nei baricentri. Si osserva che tale sostituzione è corretta solo per il calcolo delle reazioni vincolari e non per il calcolo delle sollecitazioni che verrà meglio descritto in seguito.   Nel seguito vengono riportate le istruzioni MATLAB per il calcolo della risultante e del baricentro per alcune tipologie di carico ripartito.   % carico ripartito costante syms q l x; carico(x, q) = q; np = 100; xv = 0:1\/np:1; qv = carico(xv, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(carico(x, q), x, 0, l) xq = int(carico(x, q)*x, x, 0, l)\/Rq      % carico ripartito lineare syms q l x; carico(x, q, l) = q\/l*x; np = 100; xv = 0:1\/np:1; qv = carico(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(carico(x, q, l), x, 0, l) xq = int(carico(x, q, l)*x, x, 0, l)\/Rq      % carico ripartito parabolico syms q l x; carico(x, q, l) = q\/l^2*x^2; np = 100; xv = 0:1\/np:1; qv = carico(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(carico(x, q, l), x, 0, l) xq = int(carico(x, q, l)*x, x, 0, l)\/Rq       "
},
{
  "id": "schema1_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#schema1_fig",
  "type": "Figura",
  "number": "5.7.1",
  "title": "",
  "body": "  "
},
{
  "id": "schema2_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#schema2_fig",
  "type": "Figura",
  "number": "5.7.2",
  "title": "",
  "body": "  "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_it-3",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#sollecitazioni_sec_rigid_body_statics_chap_it-3",
  "type": "Osservazione",
  "number": "5.7.3",
  "title": "",
  "body": " Il procedimento di separazione effetuato può anche essere inteso come la rimozione del vincolo di continuità nel punto e l'applicazione delle \"reazioni vincolari\" associate al vincolo, di grado 3, rimosso.  "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_it-4",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#sollecitazioni_sec_rigid_body_statics_chap_it-4",
  "type": "Osservazione",
  "number": "5.7.4",
  "title": "",
  "body": " La singola operazione di sezionamento deve consentire di ottenere due corpi liberi distinti. Se a tal fine fosse neccessario effettuare altri sezionamenti allora per le parti separate si otterrebbe un problema iperstatico.  "
},
{
  "id": "convenzione_sollecitazioni_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#convenzione_sollecitazioni_fig",
  "type": "Figura",
  "number": "5.7.5",
  "title": "",
  "body": "  "
},
{
  "id": "ripartiti_fig",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#ripartiti_fig",
  "type": "Figura",
  "number": "5.7.6",
  "title": "",
  "body": "  "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_it-6-5-1-2",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#sollecitazioni_sec_rigid_body_statics_chap_it-6-5-1-2",
  "type": "Listato",
  "number": "5.7.7",
  "title": "",
  "body": "  % carico ripartito costante syms q l x; carico(x, q) = q; np = 100; xv = 0:1\/np:1; qv = carico(xv, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(carico(x, q), x, 0, l) xq = int(carico(x, q)*x, x, 0, l)\/Rq   "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_it-6-5-1-3",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#sollecitazioni_sec_rigid_body_statics_chap_it-6-5-1-3",
  "type": "Listato",
  "number": "5.7.8",
  "title": "",
  "body": "  % carico ripartito lineare syms q l x; carico(x, q, l) = q\/l*x; np = 100; xv = 0:1\/np:1; qv = carico(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(carico(x, q, l), x, 0, l) xq = int(carico(x, q, l)*x, x, 0, l)\/Rq   "
},
{
  "id": "sollecitazioni_sec_rigid_body_statics_chap_it-6-5-1-4",
  "level": "2",
  "url": "sollecitazioni_sec_rigid_body_statics_chap_it.html#sollecitazioni_sec_rigid_body_statics_chap_it-6-5-1-4",
  "type": "Listato",
  "number": "5.7.9",
  "title": "",
  "body": "  % carico ripartito parabolico syms q l x; carico(x, q, l) = q\/l^2*x^2; np = 100; xv = 0:1\/np:1; qv = carico(xv, 1, 1); plot(xv,qv,'r','LineWidth',2) Rq = int(carico(x, q, l), x, 0, l) xq = int(carico(x, q, l)*x, x, 0, l)\/Rq   "
},
{
  "id": "indefinte_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "indefinte_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.8",
  "title": "equazioni indefinite di equilibrio per la trave piana",
  "body": " equazioni indefinite di equilibrio per la trave piana  Le equazioni indefinite di equilibrio per la trave sono già state trattate nella e nella nel contesto più ampio che ha portato alla costruzione di un modello completo di trave piana elastica. In questa sede le equazioni vengono ricavate per altra via e l'unica differenza consiste nell'esplicitazione della componente di sollecitazione data dal taglio.    formulazione del problema     All'interno di una trave soggetta a condizioni di carico generiche, si supponga di isolare un tratto di trave di lunghezza infinitesima . Il tratto di trave così individuato è soggetto ad una serie di azioni illustrate nella figura successiva e che, per chiarezza, vengono di seguito elencate:  le componenti di sollecitazione, , e , relative all'ascissa ;  le componenti di sollecitazione, , e , relative all'ascissa ;  il carico assiale ripartito per unità di lunghezza ;  il carico trasversale ripartito per unità di lunghezza .       condizioni di equilibrio  Lo schema ottenuto è essenzialmente un diagramma di corpo libero per il quale è possibile imporre le seguenti equazioni di equilibrio (il polo utilizzato per l'equilibrio alla rotazione è posto all'ascissa ) L'ipotesi di continuità del solido mono-dimensionale e delle grandezze su di esso definite, consente di effettuare uno sviluppo in serie di Taylor troncato al primo ordine delle sollecitazioni valutate sulla sezione e di ottenere quindi dove le quantità , e indicano le derivate delle sollecitazioni rispetto all'ascissa . Facendo le dovute semplificazioni e trascurando il termine perché di ordine superiore al primo, si ottengono le equazioni indefinite di equilibrio per la trave piana di seguito elencate.      Equilibrio in direzione assiale:     Equilibrio in direzione trasversale:     Equilibrio alla rotazione:          integrali generali  L'integrazione delle equazioni indefinite di equilibrio fornisce i seguenti integrali generali validi su tratti di trave lungo i quali le sollecitazioni sono analitiche nella variabile : Le costanti di integrazione , e sono da valutare sulla base delle condizioni al contorno assegnate.   caso e  Al fine di illustrare la valutazione delle costanti di integrazione si consideri il seguente diagramma di corpo libero.     Per l'assenza di carichi ripartiti gli integrali generali forniscono Quindi si ha un andamento costante per e e lineare per . Imponendo le condizioni al contorno si ottiene Quindi l'espressione analitica delle componenti di sollecitazione diventa Si sarebbe ottenuto lo stesso risultato utilizzando le condizioni al contorno       integrali generali per carichi ripartiti costanti     Lo schema riporta il caso di una trave di cui sono noti i valori delle componenti di sollecitazione all'estremo ed è soggetta a carichi ripartiti costanti. In tal caso gli integrali generali , e assumono le seguenti espressioni Espressioni che evidenziano un andamento lineare per sforzo normale e taglio e parabolico per il momento flettente.   "
},
{
  "id": "indefinite_trave_piana_fig",
  "level": "2",
  "url": "indefinte_sec_rigid_body_statics_chap_it.html#indefinite_trave_piana_fig",
  "type": "Figura",
  "number": "5.8.1",
  "title": "",
  "body": "  "
},
{
  "id": "schema1bis_fig",
  "level": "2",
  "url": "indefinte_sec_rigid_body_statics_chap_it.html#schema1bis_fig",
  "type": "Figura",
  "number": "5.8.2",
  "title": "",
  "body": "  "
},
{
  "id": "schema_generico_fig",
  "level": "2",
  "url": "indefinte_sec_rigid_body_statics_chap_it.html#schema_generico_fig",
  "type": "Figura",
  "number": "5.8.3",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it",
  "level": "1",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html",
  "type": "Paragrafo",
  "number": "5.9",
  "title": "calcolo e diagrammi delle sollecitazioni",
  "body": " calcolo e diagrammi delle sollecitazioni  L'analisi statica presentata nelle sezioni precedenti consente di valutare le reazioni vincolari per un sistema isostatico. A partire da questa informazione e utilizzando gli integrali generali , e è possibile procedere con il calcolo delle sollecitazioni per sistemi di travi soggetti a forze\/coppie generiche e carichi ripartiti al più costanti (per carichi ripartiti di tipo generico occorre utilizzare le , e ).  La procedura di calcolo delle sollecitazioni verrà illustrata discutendo alcuni esempi ed utilizzando MATLAB per lo svolgimento dei calcoli richiesti e la visualizzazione dei risultati. Data la semplicità degli schemi considerati il calcolo esplicito delle reazioni vincolari viene omesso.    Si consideri il seguente schema di corpo di libero di cui è facile verificare il soddisfacimento delle condizioni di equilibrio.     Risultano chiari dallo schema i valori assunti dalle sollecitazioni per , ovvero Utilizzando quindi gli integrali generali si ottenendo le seguenti espressioni delle componenti di sollecitazione in funzione dell'ascissa posta lungo l'asse della trave    Le sollecitazioni così ottenute possono essere visualizzate utilizzando le seguenti istruzioni MATLAB .   % diagramma dello sforzo normale syms N(x, F); N(x,F) = F; np = 100; Xv = 0:1\/np:1; Nv = N(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del taglio syms T(x,F); T(x,F) = F; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M(x,F,l); M(x,F,l) = -F*l + F*x; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')      Si ottengono in tal modo i seguenti grafici relativi a sforzo normale (verde), taglio (blu) e momento flettente (rosso).       Si noti come la rappresentazione del momento flettente venga effettuata cambiando il verso dell'asse verticale del diagramma. Tale scelta viene utilizzata nella pratica professionale per \"visualizzare\" quale dei due lembi della trave, inferiore o superiore, è soggetto a trazione.     Si consideri il seguente schema relativo ad una mensola soggetta ad un carico ripartito.     Lo schema di corpo libero e il relativo calcolo delle reazioni vincolari forniscono il seguente risultato.     Informazione utilizzabile nella scrittura degli integrali generali , , , ed ottenere la seguente espressione delle sollecitazioni lungo l'asse della trave.    Le sollecitazioni così ottenute possono essere visualizzate utilizzando le seguenti istruzioni MATLAB .   % diagramma dello sforzo normale syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del taglio syms T(x,q,l); T(x,q,l) = -q*x+q*l; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M(x,q,l); M(x,q,l) = -q*l^2\/2 + q*l*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')              Si consideri la seguente trave appoggiata soggetta ad un carico ripartito.     Lo schema di corpo libero e il relativo calcolo delle reazioni vincolari forniscono il seguente risultato.     La soluzione ottenuta dal calcolo delle reazioni vincolari consente la scrittura delle seguenti condizioni relative all'estremo della trave condizioni che consentono di esprimere le componenti di sollecitazione lungo l'asse della trave:    Le istruzioni MATLAB da utilizzare per diagrammare le componenti di sollecitazione sono formulabili come di seguto riportato.   % diagramma dello sforzo normale syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del taglio syms T(x,q,l); T(x,q,l) = -q*x+q*l\/2; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M(x,q,l); M(x,q,l) = q*l\/2*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')              Si consideri la seguente trave appoggiata soggetta ad una forza concentrata in mezzeria.     Si riporta anche in questo caso il diagramma di corpo libero utilizzato per il calcolo delle reazioni vincolari insieme al risultato ottenuto dal calcolo.     Rispetto ai casi precedenti, il caso in esame è comunque differente poiché la forza concentrata in mezzeria determina una discontinuità del taglio e quindi, essendo , anche una discontinuità della derivata del momento flettente. Pertanto gli integrali generali , e non sono applicabili direttamente al tratto di trave ma devono essere applicati separatamente ai tratti di trave e . In tal modo si ottengono due rappresentazioni delle sollecitazioni e , una rappresentazione valida per il tratto ed un'altra per il tratto .  Tratto , : Da cui si ottiene   Tratto , : Da cui si ottiene         % diagramma del taglio syms T_ac(x,F) T_cb(x,F); T_ac(x,F) = F\/2; T_cb(x,F) = -F\/2; np = 50; Xv = 0:0.5\/np:0.5; Tv_ac = T_ac(Xv, 1); Tv_cb = T_cb(Xv, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Tv_ac,'b', Xv_ac,Beam,'k', ... Xv_cb,Tv_cb,'b', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M_ac(x,F) M_cb(x,F,l); M_ac(x,F) = F\/2*x; M_cb(x,F,l) = -F\/2*x+F*l\/4; np = 50; Xv = 0:0.5\/np:0.5; Mv_ac = M_ac(Xv, 1); Mv_cb = M_cb(Xv, 1, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Mv_ac,'r', Xv_ac,Beam,'k', ... Xv_cb,Mv_cb,'r', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')            "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-4-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-4-2",
  "type": "Figura",
  "number": "5.9.1",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-4-4-1-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-4-4-1-2",
  "type": "Listato",
  "number": "5.9.2",
  "title": "",
  "body": "  % diagramma dello sforzo normale syms N(x, F); N(x,F) = F; np = 100; Xv = 0:1\/np:1; Nv = N(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del taglio syms T(x,F); T(x,F) = F; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M(x,F,l); M(x,F,l) = -F*l + F*x; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-5-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-5-2",
  "type": "Figura",
  "number": "5.9.3",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-5-4",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-5-4",
  "type": "Figura",
  "number": "5.9.4",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-5-6-1-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-5-6-1-2",
  "type": "Listato",
  "number": "5.9.5",
  "title": "",
  "body": "  % diagramma dello sforzo normale syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del taglio syms T(x,q,l); T(x,q,l) = -q*x+q*l; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M(x,q,l); M(x,q,l) = -q*l^2\/2 + q*l*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-6-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-6-2",
  "type": "Figura",
  "number": "5.9.6",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-6-4",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-6-4",
  "type": "Figura",
  "number": "5.9.7",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-6-6-1-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-6-6-1-2",
  "type": "Listato",
  "number": "5.9.8",
  "title": "",
  "body": "  % diagramma dello sforzo normale syms N(x); N(x) = 0; np = 100; Xv = 0:1\/np:1; Nv = N(Xv); Beam = zeros(1, np+1); plot(Xv,Nv,'g',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del taglio syms T(x,q,l); T(x,q,l) = -q*x+q*l\/2; np = 100; Xv = 0:1\/np:1; Tv = T(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Tv,'b',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M(x,q,l); M(x,q,l) = q*l\/2*x - q*l*x^2\/2; np = 100; Xv = 0:1\/np:1; Mv = M(Xv, 1, 1); Beam = zeros(1, np+1); plot(Xv,Mv,'r',Xv,Beam,'k','LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-7-2",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-7-2",
  "type": "Figura",
  "number": "5.9.9",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-7-4",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-7-4",
  "type": "Figura",
  "number": "5.9.10",
  "title": "",
  "body": "  "
},
{
  "id": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-7-6-1-1",
  "level": "2",
  "url": "calcolo_sollecitazioni_sec_rigid_body_statics_chap_it.html#calcolo_sollecitazioni_sec_rigid_body_statics_chap_it-7-6-1-1",
  "type": "Listato",
  "number": "5.9.11",
  "title": "",
  "body": "  % diagramma del taglio syms T_ac(x,F) T_cb(x,F); T_ac(x,F) = F\/2; T_cb(x,F) = -F\/2; np = 50; Xv = 0:0.5\/np:0.5; Tv_ac = T_ac(Xv, 1); Tv_cb = T_cb(Xv, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Tv_ac,'b', Xv_ac,Beam,'k', ... Xv_cb,Tv_cb,'b', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) % diagramma del momento flettente syms M_ac(x,F) M_cb(x,F,l); M_ac(x,F) = F\/2*x; M_cb(x,F,l) = -F\/2*x+F*l\/4; np = 50; Xv = 0:0.5\/np:0.5; Mv_ac = M_ac(Xv, 1); Mv_cb = M_cb(Xv, 1, 1); Xv_ac = Xv; Xv_cb = 0.5:0.5\/np:1; Beam = zeros(1, np+1); plot(Xv_ac,Mv_ac,'r', Xv_ac,Beam,'k', ... Xv_cb,Mv_cb,'r', Xv_cb,Beam,'k', 'LineWidth',2) set(gca, 'Ylim', [-1 1]) set(gca, 'YDir','reverse')   "
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
