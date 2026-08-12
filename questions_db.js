// Banca Dati delle 39 Domande e Risposte d'Esame reali (Principi Contabili Internazionali)
const qaDatabase = [
    {
        id: 1,
        standard: "Conceptual Framework",
        professors: ["Ferri", "Zampella", "Allini"],
        question: "Conceptual Framework: obiettivi principali, destinatari del bilancio e stewardship.",
        answer: `
            <h5>Obiettivo del Bilancio (Financial Reporting)</h5>
            Fornire informazioni economico-finanziarie sull'entità che siano <strong>utili ai primary users</strong> (investitori, finanziatori e altri creditori) per assumere decisioni relative all'allocazione delle risorse.
            <h5>I Destinatari (Primary Users)</h5>
            I soggetti esterni che non possono richiedere informazioni direttamente all'entità:
            <ul>
                <li><strong>Investitori</strong> (soci, azionisti).</li>
                <li><strong>Finanziatori</strong> (banche, istituti di credito).</li>
                <li><strong>Altri creditori</strong> (fornitori).</li>
            </ul>
            <h5>Stewardship (Valutazione della Gestione)</h5>
            Riguarda la responsabilità del management per l'uso efficiente ed efficace delle risorse dell'azienda. Il bilancio serve agli investitori per valutare l'operato del management, permettendo decisioni sul loro mandato o remunerazione.
        `
    },
    {
        id: 2,
        standard: "Conceptual Framework",
        professors: ["Ferri", "Spanò", "Spagnuolo", "Zampella", "Allini"],
        question: "Quali sono le caratteristiche qualitative dell'informazione contabile nel Conceptual Framework?",
        answer: `
            Le caratteristiche qualitative si dividono in:
            <h5>1. Caratteristiche Fondamentali</h5>
            <ul>
                <li><strong>Relevance (Significatività)</strong>: Capacità di influenzare le decisioni degli utilizzatori. Ha valore predittivo e/o di conferma.</li>
                <li><strong>Faithful Representation (Rappresentazione Fedele)</strong>: Rappresenta la sostanza economica dell'operazione. Deve essere <strong>Completa</strong>, <strong>Neutrale</strong> e <strong>Senza errori</strong>.</li>
            </ul>
            <h5>2. Caratteristiche di Miglioramento</h5>
            <ul>
                <li><strong>Comparabilità</strong>: Identificare analogie e differenze nel tempo e nello spazio.</li>
                <li><strong>Verificabilità</strong>: Consenso indipendente sulla fedeltà della rappresentazione.</li>
                <li><strong>Tempestività</strong>: Disponibilità in tempo per influenzare le decisioni.</li>
                <li><strong>Comprensibilità</strong>: Presentazione chiara e concisa.</li>
            </ul>
        `
    },
    {
        id: 3,
        standard: "Conceptual Framework",
        professors: ["Spanò", "Ginesti", "Allini"],
        question: "Qual è la definizione di Attività e Passività e come si differenzia dal passato?",
        answer: `
            Nel 2018 lo IASB ha aggiornato le definizioni per eliminare l'incertezza sulla probabilità di flussi futuri:
            <h5>1. Attività (Asset)</h5>
            <ul>
                <li><strong>In passato</strong>: Risorsa controllata da cui ci si attende che affluiranno benefici futuri.</li>
                <li><strong>Oggi</strong>: Una <strong>risorsa economica attuale controllata</strong> dall'entità come risultato di eventi passati. Una risorsa economica è un <strong>diritto</strong> che ha il potenziale di produrre benefici.</li>
            </ul>
            <h5>2. Passività (Liability)</h5>
            <ul>
                <li><strong>In passato</strong>: Obbligazione attuale la cui estinzione comporterà uscita di risorse.</li>
                <li><strong>Oggi</strong>: Un'<strong>obbligazione attuale</strong> a <strong>trasferire una risorsa economica</strong> come risultato di eventi passati.</li>
            </ul>
        `
    },
    {
        id: 4,
        standard: "Conceptual Framework",
        professors: ["Ferri", "Spanò", "Zampella"],
        question: "Prudenza vs Conservatism: spiegazione concettuale e differenze in ambito IAS/IFRS.",
        answer: `
            <h5>Prudenza (Prudence)</h5>
            Intesa come <strong>cautela nell'emettere stime in condizioni di incertezza</strong>. Non devono essere sopravvalutate le attività/ricavi né sottovalutate le passività/costi. È <strong>neutrale</strong>: non ammette asimmetrie sistematiche, per non distorcere la rappresentazione fedele.
            <h5>Conservativismo (Conservatism)</h5>
            Comporta una <strong>valutazione asimmetrica</strong> (perdite previste rilevate subito, utili solo se realizzati tramite scambio). Negli IFRS questo approccio è considerato <strong>negativo</strong> perché viola la neutralità e riduce la significatività dell'informazione contabile.
        `
    },
    {
        id: 5,
        standard: "IAS 1",
        professors: ["Ferri", "Spanò", "Maffei", "Zampella", "Casciello", "Allini"],
        question: "Cos'è l'OCI (Other Comprehensive Income)? Spiega il concetto di Recycling ed elenca le voci.",
        answer: `
            <h5>Other Comprehensive Income (OCI)</h5>
            La sezione del Conto Economico Complessivo che accoglie utili/perdite non realizzati derivanti dalla valutazione al Fair Value. La somma di utile netto e OCI forma il **Total Comprehensive Income**.
            <h5>Le 5 Voci Principali:</h5>
            <ol>
                <li>Rivalutazioni delle immobilizzazioni materiali (IAS 16) e immateriali (IAS 38).</li>
                <li>Utili/perdite attuariali su piani a benefici definiti (TFR - IAS 19).</li>
                <li>Utili/perdite da conversione di bilanci in valuta estera (IAS 21).</li>
                <li>Variazioni di Fair Value delle attività finanziarie valutate al FVTOCI (IFRS 9).</li>
                <li>Quota efficace delle variazioni di Fair Value degli strumenti di copertura (Cash Flow Hedge - IFRS 9).</li>
            </ol>
            <h5>Recycling (Riclassificazione)</h5>
            Spostamento delle voci da OCI a utile netto (P&L) al momento della vendita o estinzione dell'attività. **Non è ammesso per le rivalutazioni (IAS 16/38) e gli strumenti di equity FVTOCI**. È ammesso per titoli di debito FVTOCI e cash flow hedge.
        `
    },
    {
        id: 6,
        standard: "IAS 7",
        professors: ["Ferri", "Spagnuolo", "Ginesti", "Zampella", "Meucci", "Casciello"],
        question: "IAS 7: le 3 aree del Rendiconto Finanziario e differenza tra metodo diretto e indiretto.",
        answer: `
            <h5>Le 3 Aree del Rendiconto</h5>
            <ol>
                <li><strong>Attività Operativa</strong>: Flussi legati alle operazioni principali (incassi clienti, pagamenti fornitori).</li>
                <li><strong>Attività di Investimento</strong>: Acquisto o vendita di immobilizzazioni (CAPEX, titoli).</li>
                <li><strong>Attività di Finanziamento</strong>: Flussi legati a capitale proprio e debiti finanziari (dividendi, rimborsi).</li>
            </ol>
            <h5>Metodo Diretto vs Indiretto</h5>
            <ul>
                <li><strong>Metodo Diretto</strong>: Elenca analiticamente le categorie di incassi e pagamenti lordi.</li>
                <li><strong>Metodo Indiretto</strong>: Rettifica l'Utile Netto aggiungendo i costi non monetari (ammortamenti, accantonamenti), svalutazioni, sottraendo ricavi non monetari (plusvalenze) ed eliminando le variazioni del Capitale Circolante Netto (CCN).</li>
            </ul>
        `
    },
    {
        id: 7,
        standard: "IAS 16",
        professors: ["Ferri", "Spanò", "Spagnuolo", "Casciello", "Allini"],
        question: "IAS 16: Cost Model vs Revaluation Model. Registrazioni contabili.",
        answer: `
            <h5>Cost Model vs Revaluation Model</h5>
            <ul>
                <li><strong>Cost Model</strong>: Attività iscritta al costo storico meno ammortamenti accumulati ed impairment.</li>
                <li><strong>Revaluation Model</strong>: Attività iscritta al Fair Value alla data di rivalutazione.</li>
            </ul>
            <h5>Contabilizzazione Rivalutazione iniziale di €15.000</h5>
            <table class="journal-table">
                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>
                <tr><td>Impianti (Attivo SP)</td><td>15.000</td><td></td></tr>
                <tr><td>Riserva di Rivalutazione (Patrimonio Netto - OCI)</td><td></td><td>15.000</td></tr>
            </table>
            La riserva di rivalutazione non può essere riciclata a P&L, ma può essere trasferita direttamente a utili portati a nuovo alla dismissione del cespite.
        `
    },
    {
        id: 8,
        standard: "IAS 38",
        professors: ["Ferri", "Spagnuolo", "Maffei", "Ginesti", "Zampella"],
        question: "IAS 38: trattamento dei costi di Ricerca e Sviluppo. Differenze con gli OIC.",
        answer: `
            <h5>Ricerca vs Sviluppo</h5>
            <ul>
                <li><strong>Fase di Ricerca</strong>: Costi sempre spesati a Conto Economico (CE) al sostenimento.</li>
                <li><strong>Fase di Sviluppo</strong>: Capitalizzati solo se si dimostra la fattibilità tecnica, l'intenzione e la capacità di completare l'asset, l'esistenza di benefici futuri e la stima attendibile dei costi.</li>
            </ul>
            <h5>Differenze IAS 38 vs OIC 24</h5>
            <ul>
                <li><strong>Avviamento</strong>: IAS 38 vieta l'ammortamento (impairment annuale). OIC 24 impone l'ammortamento (max 10-20 anni).</li>
                <li><strong>Costi di impianto e ampliamento</strong>: IAS 38 li spesa a CE. OIC 24 ne consente la capitalizzazione.</li>
                <li><strong>Costi di pubblicità</strong>: IAS 38 li spesa sempre. OIC 24 ne consente la capitalizzazione se pluriennali.</li>
            </ul>
        `
    },
    {
        id: 9,
        standard: "IAS 36",
        professors: ["Ferri", "Spanò", "Zampella", "Meucci", "Allini"],
        question: "Cos'è l'Impairment Test secondo lo IAS 36? Determinazione del Recoverable Amount.",
        answer: `
            Verifica per accertare che un'attività non sia iscritta a un valore superiore al valore recuperabile.
            <h5>Quando si effettua?</h5>
            In presenza di indicatori di perdita (*red flags*). Obbligatoriamente ogni anno per Goodwill ed intangibili a vita utile indefinita.
            <h5>Recoverable Amount (Valore Recuperabile)</h5>
            Il <strong>maggiore</strong> tra:
            <ol>
                <li><strong>Fair Value al netto dei costi di dismissione</strong>: prezzo di uscita di mercato meno costi di vendita.</li>
                <li><strong>Value in Use (Valore d'Uso)</strong>: valore attuale dei flussi di cassa futuri attesi generati dall'uso.</li>
            </ol>
            Se valore contabile > valore recuperabile, si registra una svalutazione (*Impairment Loss*) a CE.
        `
    },
    {
        id: 10,
        standard: "IAS 36",
        professors: ["Ferri", "Spanò", "Meucci", "Allini"],
        question: "IAS 36: cos'è una CGU? Come si alloca la svalutazione di gruppo e l'avviamento?",
        answer: `
            <h5>Cash Generating Unit (CGU)</h5>
            Il più piccolo gruppo identificabile di attività che genera flussi di cassa ampiamente indipendenti.
            <h5>Ripartizione della svalutazione della CGU</h5>
            Se il valore contabile della CGU supera il suo valore recuperabile, la svalutazione si ripartisce:
            <ol>
                <li><strong>In primo luogo al Goodwill</strong> allocato alla CGU, fino ad azzerarlo (non ripristinabile).</li>
                <li><strong>Successivamente alle altre attività</strong> della CGU pro-quota, in proporzione al loro valore contabile.</li>
            </ol>
            *Limite*: Nessun bene può essere svalutato al di sotto del massimo tra il proprio Fair Value netto, il valore d'uso e zero.
        `
    },
    {
        id: 11,
        standard: "IFRS 16",
        professors: ["Ferri", "Spanò", "Spagnuolo", "Maffei", "Ginesti", "Zampella", "Allini"],
        question: "IFRS 16: contabilizzazione del leasing per il lessee e impatto sugli indici finanziari.",
        answer: `
            Modello unico di contabilizzazione per il conduttore (*lessee*):
            <h5>Rilevazione Iniziale</h5>
            Iscrizione nello SP di un **Diritto d'Uso (ROU Asset)** all'attivo e di una **Passività finanziaria (Lease Liability)** al passivo, calcolata come valore attuale dei canoni futuri.
            <h5>Ammortamento e Interessi</h5>
            Il ROU si ammortizza a quote costanti a CE. La Lease Liability si riduce per la quota capitale del canone paid, mentre gli interessi maturati vanno a CE come oneri finanziari.
            <h5>Impatto sugli Indici (Key Ratios)</h5>
            <ul>
                <li><strong>EBITDA aumenta</strong>: i canoni operativi diventano ammortamento e interessi (esclusi dall'EBITDA).</li>
                <li><strong>Leverage (Debito) aumenta</strong>: iscrizione del debito finanziario dello SP.</li>
                <li><strong>Asset Turnover diminuisce</strong>: incremento dell'attivo di bilancio.</li>
            </ul>
        `
    },
    {
        id: 12,
        standard: "IFRS 15",
        professors: ["Ferri", "Spanò", "Maffei", "Zampella", "Casciello", "Allini"],
        question: "IFRS 15: quali sono le 5 fasi (5 steps) per il riconoscimento dei ricavi da contratti con i clienti?",
        answer: `
            Il ricavo è rilevato al trasferimento del controllo di beni o servizi.
            <h5>Il Modello a 5 Step:</h5>
            <ol>
                <li><strong>Identificare il contratto</strong>: accordo approvato con sostanza commerciale.</li>
                <li><strong>Identificare le Performance Obligations (PO)</strong>: le singole promesse di beni/servizi distinti.</li>
                <li><strong>Determinare il prezzo della transazione</strong>: il corrispettivo atteso (include variabili, sconti, ecc.).</li>
                <li><strong>Allocare il prezzo alle Performance Obligations</strong>: in proporzione ai prezzi stand-alone di vendita.</li>
                <li><strong>Rilevare il ricavo</strong>: quando l'entità soddisfa la PO (in un momento preciso *point in time* o nel corso del tempo *over time*).</li>
            </ol>
        `
    },
    {
        id: 13,
        standard: "IFRS 3",
        professors: ["Ferri", "Spanò", "Spagnuolo", "Maffei", "Allini"],
        question: "IFRS 3: determinazione del Goodwill (Avviamento) e processo di Purchase Price Allocation (PPA).",
        answer: `
            Le aggregazioni sono contabilizzate col metodo dell'acquisizione:
            <h5>PPA (Purchase Price Allocation)</h5>
            Rilevazione al Fair Value di tutte le attività identificabili (anche non precedentemente iscritte, es. marchi interni) e passività della società target alla data di acquisizione.
            <h5>Calcolo Goodwill (Avviamento)</h5>
            $$\\text{Goodwill} = \\text{Prezzo di acquisto} + \\text{Valore minoranze (NCI)} - \\text{Fair Value attività nette acquisite}$$
            L'avviamento è un'attività a vita utile indefinita: non si ammortizza, ma si effettua l'impairment test annuale (IAS 36).
        `
    },
    {
        id: 14,
        standard: "IFRS 9",
        professors: ["Ferri", "Spanò", "Ginesti", "Zampella", "Meucci", "Casciello", "Allini"],
        question: "Classificazione delle attività finanziarie (IFRS 9): SPPI e Business Model test.",
        answer: `
            Le attività finanziarie sono classificate in 3 categorie basate su due test:
            <h5>1. SPPI Test (Solely Payments of Principal and Interest)</h5>
            Verifica se i flussi contrattuali sono composti solo da capitale e interessi (es. prestiti ordinari).
            <h5>2. Business Model Test</h5>
            Determina l'obiettivo di gestione:
            <ul>
                <li><strong>Hold to Collect</strong>: incassare flussi contrattuali (scadenza). Classificato al <strong>Costo Ammortizzato</strong>.</li>
                <li><strong>Hold to Collect & Sell</strong>: incassare e vendere. Classificato al <strong>FVTOCI</strong> (variazioni a OCI).</li>
                <li><strong>Trading / Speculativo / SPPI Fallito</strong>: Classificato al <strong>FVTPL</strong> (variazioni a CE).</li>
            </ul>
        `
    },
    {
        id: 15,
        standard: "IFRS 9",
        professors: ["Ferri", "Ginesti", "Zampella", "Allini"],
        question: "Modello Expected Credit Loss (ECL) ed i 3 stadi dell'impairment (IFRS 9).",
        answer: `
            Il modello per rilevare le perdite sui crediti basato su stime attese future ($ECL = PD \\times LGD \\times ED$):
            <h5>I 3 Stadi dell'Impairment</h5>
            <ol>
                <li><strong>Stage 1 (Sani)</strong>: Rischio non aumentato. Svalutazione pari alle perdite attese a 12 mesi. Interessi calcolati su valore contabile lordo.</li>
                <li><strong>Stage 2 (Rischio Aumentato)</strong>: Aumento significativo del rischio (es. ritardo > 30gg). Svalutazione pari a perdite attese a vita (lifetime ECL). Interessi su valore lordo.</li>
                <li><strong>Stage 3 (Deteriorati)</strong>: Evidenza di perdita (es. ritardo > 90gg). Svalutazione lifetime ECL. Interessi calcolati su valore netto (Gross - Fondo svalutazione).</li>
            </ol>
        `
    },
    {
        id: 16,
        standard: "IAS 37",
        professors: ["Ferri", "Spanò", "Spagnuolo", "Maffei", "Allini"],
        question: "IAS 37: accantonamenti (provisions) vs passività potenziali. Requisiti di iscrizione.",
        answer: `
            Un accantonamento (*provision*) è una passività di ammontare o scadenza incerti.
            <h5>Requisiti di Iscrizione (nello SP)</h5>
            <ol>
                <li>Obbligazione attuale (legale o implicita) derivante da eventi passati.</li>
                <li>Probabile deflusso di risorse economiche (probabilità > 50%).</li>
                <li>Stima attendibile dell'importo.</li>
            </ol>
            <h5>Passività Potenziali (Contingent Liabilities)</h5>
            Se l'obbligo è solo *possibile* (probabilità < 50%) o non stimabile attendibilmente, non si iscrive alcuna passività nello SP, ma si fornisce informativa nelle Note al Bilancio (disclosure).
        `
    },
    {
        id: 17,
        standard: "IFRS 9",
        professors: ["Ferri", "Spanò", "Maffei", "Ginesti", "Zampella", "Allini"],
        question: "Hedge Accounting: differenza tra Fair Value Hedge e Cash Flow Hedge.",
        answer: `
            Copertura di rischi finanziari tramite strumenti derivati:
            <h5>1. Fair Value Hedge</h5>
            Copre variazioni di Fair Value di attività/passività in bilancio (es. tasso fisso). Le variazioni del derivato ed dell'elemento coperto vanno entrambe a **Conto Economico (P&L)** per compensarsi.
            <h5>2. Cash Flow Hedge</h5>
            Copre la variabilità di flussi futuri (es. tasso variabile, transazioni future). La **quota efficace** di variazione del derivato va a **OCI** (Riserva CF Hedge), mentre la quota inefficace va a P&L. La riserva OCI viene riciclata a P&L quando l'operazione coperta si realizza.
        `
    },
    {
        id: 18,
        standard: "IAS 33",
        professors: ["Ferri", "Spagnuolo", "Zampella", "Allini"],
        question: "IAS 33: com'è strutturato il calcolo dell'EPS Base e dell'EPS Diluito?",
        answer: `
            L'Utile per Azione (*Earnings Per Share*):
            <h5>Basic EPS (EPS Base)</h5>
            $$\\text{Basic EPS} = \\frac{\\text{Utile Netto} - \\text{Dividendi Privilegiati}}{\\text{Media Ponderata Azioni Ordinari in Circolazione}}$$
            La media tiene conto delle fluttuazioni di capitale ponderate nel tempo.
            <h5>Diluted EPS (EPS Diluito)</h5>
            $$\\text{Diluted EPS} = \\frac{\\text{Utile Netto Rettificato}}{\\text{Media Ponderata Azioni} + \\text{Azioni potenziali da conversione}}$$
            Si considerano le azioni potenziali solo se hanno effetto diluitivo (riducono l'EPS).
        `
    },
    {
        id: 19,
        standard: "Conceptual Framework",
        professors: ["Ferri"],
        question: "Perché in dottrina straniera c'è il modello patrimonialista?",
        answer: `
            La dottrina straniera adotta una <strong>concezione patrimonialista</strong> (*balance-sheet view*), contrapposta a quella redditualista (*income view*) tipica del codice civile italiano.
            <h5>Motivi:</h5>
            <ul>
                <li><strong>Primato dello Stato Patrimoniale</strong>: I costi e i ricavi sono considerati variazioni di attività e passività. L'utile d'esercizio è una conseguenza della variazione del patrimonio netto.</li>
                <li><strong>Orientamento al mercato</strong>: Gli investitori esteri richiedono informazioni sul valore attuale delle risorse (Fair Value) piuttosto che sul costo storico ammortizzato per determinare il reddito distribuibile.</li>
            </ul>
        `
    },
    {
        id: 20,
        standard: "IAS 2",
        professors: ["Ferri"],
        question: "IAS 2: Come avviene la valutazione delle rimanenze e quali sono i metodi consentiti?",
        answer: `
            Le rimanenze sono valutate al **minore tra il costo storico e il valore netto di realizzo (LCNRV)**.
            <h5>Formule di costo ammesse:</h5>
            <ul>
                <li><strong>FIFO (First-In, First-Out)</strong>: si assume che i primi beni acquistati siano i primi venduti.</li>
                <li><strong>Costo Medio Ponderato (CMP)</strong>: media ponderata dei costi di acquisto.</li>
            </ul>
            <strong style="color:var(--red);">Il metodo LIFO è vietato dallo IAS 2</strong> perché non rappresenta fedelmente il flusso fisico delle merci e tende a sottostimare il valore in magazzino in regimi di inflazione.
        `
    },
    {
        id: 21,
        standard: "IFRS 9",
        professors: ["Ferri", "Zampella"],
        question: "IFRIC 23: come si gestisce l'incertezza sui trattamenti fiscali delle imposte?",
        answer: `
            L'interpretazione **IFRIC 23** disciplina il trattamento fiscale incerto ai fini dello IAS 12.
            <h5>Valutazione:</h5>
            L'impresa deve presumere che l'autorità fiscale esaminerà i trattamenti avendo piena conoscenza dei fatti.
            <ul>
                <li>Se è probabile (>50%) che l'autorità accetterà il trattamento: si applica la dichiarazione presentata.</li>
                <li>Se non è probabile (&le;50%): l'effetto dell'incertezza si stima col metodo del <strong>valore più probabile</strong> (esito binario) o del <strong>valore atteso</strong> (gamma di esiti ponderati).</li>
            </ul>
        `
    },
    {
        id: 22,
        standard: "IAS 1",
        professors: ["Ferri"],
        question: "Cos'è l'incoerenza dell'OCI (OCI asymmetry) e cosa specifica lo IAS 1 sul prospetto OCI?",
        answer: `
            L'incoerenza deriva dal fatto che alcuni utili/perdite non realizzati sono rilevati in OCI, mentre altri analoghi a P&L.
            <h5>Classificazione dello IAS 1:</h5>
            Lo IAS 1 impone di dividere le voci OCI in:
            <ol>
                <li><strong>Voci che non saranno riclassificate a P&L (No Recycling)</strong>: rivalutazioni IAS 16/38, utili/perdite attuariali IAS 19, Fair Value di strumenti di equity FVTOCI.</li>
                <li><strong>Voci riclassificabili a P&L (Recycling)</strong>: differenze di conversione cambi (IAS 21), titoli di debito FVTOCI, quota efficace cash flow hedge.</li>
            </ol>
        `
    },
    {
        id: 23,
        standard: "Conceptual Framework",
        professors: ["Ferri", "Zampella"],
        question: "Chi è Begoña e quali sono le implicazioni contabili del caso/seminario analizzato?",
        answer: `
            Begoña Giner è una nota accademica. Il suo seminario si concentra sulla **volatilità di bilancio generata dagli IFRS**.
            <h5>Implicazioni contabili:</h5>
            <ul>
                <li><strong>Volatilità del patrimonio netto</strong>: l'imputazione a OCI delle variazioni di Fair Value e delle differenze attuariali (IAS 19) stabilizza il conto economico ma crea forti oscillazioni sul patrimonio netto.</li>
                <li><strong>Disclosure qualitativa</strong>: l'importanza di spiegare dettagliatamente le stime soggettive (Livello 3 IFRS 13) per evitare la perdita di fiducia degli investitori.</li>
            </ul>
        `
    },
    {
        id: 24,
        standard: "IAS 38",
        professors: ["Ferri"],
        question: "Cosa si intende per 'Messina' o marchio registrato internamente? Come si contabilizza?",
                answer: `
            Il caso "Messina" riguarda il trattamento contabile dei marchi storici e delle testate create internamente.
            <h5>Regola dello IAS 38:</h5>
            <strong>È vietata la capitalizzazione dei marchi generati internamente</strong> (IAS 38.63). Essi non soddisfano il criterio dell'identificabilità (non separabili dal goodwill interno) e non hanno un costo stimabile attendibilmente. I costi promozionali e di sviluppo del brand vanno spesati a Conto Economico.
            <br>*Nota: Se acquistati a titolo oneroso o acquisiti in una aggregazione (IFRS 3), si iscrivono invece al Fair Value.*
        `
    },
    {
        id: 25,
        standard: "IFRS 9",
        professors: ["Spanò"],
        question: "Seminario Zaccaria: quali sono i temi principali affrontati relativi ai principi contabili?",
        answer: `
            Il seminario affronta le sfide applicative degli IFRS nel contesto finanziario italiano.
            <h5>Temi principali:</h5>
            <ul>
                <li><strong>Calcolo dell'ECL (IFRS 9) per le PMI</strong>: difficoltà per le banche italiane di stimare modelli di default attendibili per imprese minori.</li>
                <li><strong>Rivalutazioni immobiliari e patrimonio</strong>: utilizzo del revaluation model (IAS 16) da parte delle holding industriali per incrementare il valore patrimoniale degli asset.</li>
            </ul>
        `
    },
    {
        id: 26,
        standard: "Conceptual Framework",
        professors: ["Spanò"],
        question: "Cos'è la manutenzione del capitale (Capital Maintenance) ed i due concetti del Framework?",
        answer: `
            Concetto che definisce come un'impresa misura la conservazione del proprio capitale per calcolare il profitto:
            <h5>1. Manutenzione del Capitale Finanziario</h5>
            Il profitto è conseguito solo se il patrimonio netto nominale (o in potere d'acquisto) a fine periodo supera quello iniziale.
            <h5>2. Manutenzione del Capitale Fisico</h5>
            Il profitto è conseguito solo se la capacità produttiva fisica a fine periodo supera quella iniziale. Richiede la valutazione al costo corrente di sostituzione.
        `
    },
    {
        id: 27,
        standard: "Conceptual Framework",
        professors: ["Spanò"],
        question: "Quali sono le incoerenze dello IASB e della sua impostazione contabile teorica?",
        answer: `
            Nonostante il Framework, esistono incongruenze tra i singoli standard:
            <ul>
                <li><strong>Rivalutazioni asimmetriche</strong>: gli incrementi vanno a PN (OCI), i decrementi a Conto Economico.</li>
                <li><strong>Costi di ricerca e sviluppo</strong>: la ricerca è sempre spesata, lo sviluppo capitalizzato, creando asimmetrie rispetto agli asset acquisiti (IFRS 3) in cui tutto viene valutato al Fair Value.</li>
                <li><strong>Fair Value parziale</strong>: l'utilizzo del Fair Value non è esteso a tutte le voci di bilancio, creando asimmetrie tra asset e liability.</li>
            </ul>
        `
    },
    {
        id: 28,
        standard: "IFRS 16",
        professors: ["Spagnuolo"],
        question: "Quali sono le implicazioni fiscali dell'IFRS 16 per il locatario (lessee)?",
        answer: `
            In Italia, l'applicazione dell'IFRS 16 ha rilevanza fiscale (derivazione rafforzata):
            <h5>1. Imposte Dirette (IRES)</h5>
            L'ammortamento del ROU Asset è deducibile nei limiti civilistici. Gli interessi passivi impliciti sulla Lease Liability sono deducibili nei limiti del **30% del ROL** (art. 96 TUIR).
            <h5>2. Imposte Regionali (IRAP)</h5>
            L'ammortamento del ROU non rileva ai fini IRAP; l'impresa deduce la quota finanziaria che sarebbe spettata secondo le regole del leasing tradizionale.
            <h5>3. Fiscalità Differita (IAS 12)</h5>
            La differenza temporanea tra valore civile (ROU/Lease Liability) e valore fiscale genera la rilevazione di imposte anticipate (DTA) e differite (DTL).
        `
    },
    {
        id: 29,
        standard: "IFRS 3",
        professors: ["Spanò"],
        question: "IFRS 3: Cos'è una reverse acquisition (acquisizione inversa) e come si contabilizza?",
        answer: `
            Si ha quando l'entità che emette i titoli (l'acquirente giuridico, es. una società quotata inattiva) è identificata come l'**acquisita contabile**, mentre la società non quotata operativa (l'acquisita giuridica) è l'**acquirente contabile**.
            <h5>Contabilizzazione:</h5>
            Il bilancio consolidato è la prosecuzione del bilancio della società operativa (acquirente contabile):
            <ul>
                <li>Le attività/passività dell'acquirente contabile rimangono al costo storico.</li>
                <li>Le attività/passività dell'acquisita contabile (quotata inattiva) sono iscritte al Fair Value alla data di acquisizione.</li>
            </ul>
        `
    },
    {
        id: 30,
        standard: "IAS 38",
        professors: ["Maffei"],
        question: "Ricerca e Sviluppo: ammortamento IASB vs OIC, svalutazioni e Fair Value dei costi di ricerca.",
        answer: `
            <h5>1. Ammortamento costi di Sviluppo</h5>
            <ul>
                <li><strong>IASB (IAS 38)</strong>: ammortizzato lungo la vita utile stimata. Se indefinita, non si ammortizza ma si effettua l'impairment test annuale.</li>
                <li><strong>OIC (OIC 24)</strong>: ammortamento obbligatorio entro un periodo massimo di 5 anni.</li>
            </ul>
            <h5>2. Ragioni della differenza</h5>
            Lo IASB segue la **vita utile reale** dell'asset controllato. L'OIC predilige la **prudenza del creditore** per evitare di mantenere a lungo nell'attivo costi capitalizzati intangibili rischiosi.
            <h5>3. Fair Value dei costi di ricerca in PPA (IFRS 3)</h5>
            I progetti di ricerca in corso acquistati sono capitalizzati al Fair Value (come attività a vita indefinita), anche se l'acquisita li aveva precedentemente spesati a CE.
        `
    },
    {
        id: 31,
        standard: "IFRS 9",
        professors: ["Maffei"],
        question: "Oneri finanziari (IAS 23): quando è obbligatorio capitalizzarli e cosa sono i qualifying assets?",
        answer: `
            Lo **IAS 23** disciplina la capitalizzazione degli oneri finanziari.
            <h5>Obbligo di capitalizzazione</h5>
            È obbligatorio capitalizzare gli oneri finanziari direttamente attribuibili alla costruzione/acquisizione di un **qualifying asset (bene qualificante)**.
            <h5>Cos'è un Qualifying Asset?</h5>
            Un asset che richiede un **periodo di tempo significativo** (di norma superiore a 12 mesi) per essere pronto all'uso o alla vendita (es. immobili in costruzione, navi, impianti industriali, rimanenze che necessitano di invecchiamento pluriennale).
        `
    },
    {
        id: 32,
        standard: "IFRS 13",
        professors: ["Maffei"],
        question: "IFRS 13: come si misura il Fair Value in caso di mercati attivi ma illiquidi?",
        answer: `
            In caso di mercato illiquido o inattivo, i prezzi delle transazioni recenti potrebbero non riflettere il Fair Value (transazioni forzate).
            <h5>Tecniche di Valutazione (IFRS 13):</h5>
            L'entità deve stimare il Fair Value utilizzando:
            <ol>
                <li><strong>Income Approach</strong>: attualizzazione dei flussi di cassa attesi (DCF) inserendo un premio per il rischio di illiquidità.</li>
                <li><strong>Market Approach</strong>: transazioni di elementi simili, applicando rettifiche per la differenza di liquidità.</li>
            </ol>
            Gli input passano da osservabili (Livello 1) a non osservabili (Livello 2 o 3).
        `
    },
    {
        id: 33,
        standard: "IFRS 9",
        professors: ["Zampella"],
        question: "Hedge con Swap: come avviene la contabilizzazione di un Interest Rate Swap (IRS)?",
        answer: `
            Copertura tramite **Interest Rate Swap (IRS)** per trasformare un debito a tasso variabile (Euribor) in tasso fisso:
            <h5>Contabilizzazione Cash Flow Hedge:</h5>
            <ul>
                <li>Alla stipula: lo swap ha Fair Value = 0 (nessuna scrittura).</li>
                <li>A fine anno: se i tassi scendono e il Fair Value dello swap è negativo (es. -€150), la quota efficace va in OCI:
                    <br><code>Riserva OCI (PN) a Strumenti Derivati (Passivo) €150</code>
                </li>
                <li>Al pagamento della rata del mutuo: si rileva il tasso a CE, compensando con il differenziale incassato/pagato dello swap.</li>
            </ul>
        `
    },
    {
        id: 34,
        standard: "Crypto & Sustainability",
        professors: ["Ginesti", "Zampella", "Allini"],
        question: "Come ha impattato la pandemia da Covid-19 sull'applicazione dei principi contabili?",
        answer: `
            La pandemia ha richiesto specifiche deroghe ed applicazioni:
            <ul>
                <li><strong>Impairment (IAS 36)</strong>: la crisi ha rappresentato un indicatore di svalutazione obbligando all'impairment test di molti asset.</li>
                <li><strong>IFRS 9 (ECL)</strong>: le banche hanno dovuto integrare scenari forward-looking negativi e spostare i crediti in Stage 2 (rischio aumentato).</li>
                <li><strong>Leasing (IFRS 16)</strong>: emendamento per consentire al lessee di contabilizzare i mancati pagamenti/sconti canone direttamente a CE (provento), senza ricalcolare il leasing.</li>
            </ul>
        `
    },
    {
        id: 35,
        standard: "Crypto & Sustainability",
        professors: ["Allini"],
        question: "Seminario Hitachi: quali sono gli aspetti contabili e gestionali emersi?",
        answer: `
            Il caso analizza la gestione contabile di una grande multinazionale:
            <ul>
                <li><strong>Cash Pooling</strong>: centralizzazione della tesoreria per ottimizzare la cassa di gruppo.</li>
                <li><strong>Hedge del rischio di cambio</strong>: utilizzo di contratti forward con regole di Cash Flow Hedge per coprire le vendite estere in valuta.</li>
                <li><strong>PPA (IFRS 3)</strong>: valutazione del Fair Value delle fabbriche europee acquisite e stima delle relative sinergie (Goodwill).</li>
            </ul>
        `
    },
    {
        id: 36,
        standard: "IAS 1",
        professors: ["Allini"],
        question: "Cos'è il Primary Financial Statements Project (IFRS 18) e le novità sul Conto Economico?",
        answer: `
            Il progetto dello IASB (standard **IFRS 18**) per migliorare la trasparenza del Conto Economico:
            <h5>Novità principali:</h5>
            <ol>
                <li><strong>Tre Categorie predefinite in CE</strong>: Operating (operativo tipico), Investing (investimenti in partecipazioni/immobili), Financing (interessi su debiti e leasing).</li>
                <li><strong>Subtotali Obbligatori</strong>: presentazione obbligatoria del Risultato Operativo (EBIT).</li>
                <li><strong>Riconciliazione MPMs</strong>: le misure alternative (come l'EBITDA rettificato) devono essere descritte e riconciliate in Nota.</li>
            </ol>
        `
    },
    {
        id: 37,
        standard: "IFRS 2",
        professors: ["Zampella"],
        question: "IFRS 2: contabilizzazione stock options e differenza tra Vesting Conditions di mercato e non.",
        answer: `
            Il costo delle stock options va ripartito a CE lungo il vesting period, con contropartita una riserva di PN.
            <h5>Differenza tra le Vesting Conditions:</h5>
            <ul>
                <li><strong>1. Non-Market Conditions (es. rimanere in azienda 3 anni, target di utile)</strong>: l'impresa deve rettificare la stima del numero di opzioni che matureranno ad ogni chiusura bilancio. Se i dipendenti se ne vanno, il costo si riduce.</li>
                <li><strong>2. Market Conditions (es. raggiungimento prezzo azione a €15)</strong>: la probabilità di successo è già inclusa nel Fair Value iniziale dell'opzione. Il costo **non deve mai essere rettificato**, anche se la condizione non si verifica alla scadenza.</li>
            </ul>
        `
    },
    {
        id: 38,
        standard: "IFRS 9",
        professors: ["Maffei", "Allini"],
        question: "IFRS 7: quali sono i principali obblighi di informativa (disclosure) per gli strumenti finanziari?",
        answer: `
            L'**IFRS 7** impone di indicare in Nota Integrativa:
            <ol>
                <li>Valori di bilancio di tutte le categorie di strumenti finanziari.</li>
                <li>Informativa qualitativa sulle politiche di copertura e gestione rischi.</li>
                <li>Informativa quantitativa sull'esposizione a:
                    <ul>
                        <li>*Credit Risk* (rischio default crediti e calcolo ECL).</li>
                        <li>*Liquidity Risk* (analisi delle scadenze dei pagamenti futuri dei debiti).</li>
                        <li>*Market Risk* (analisi di sensibilità del reddito a tassi di interesse e cambi).</li>
                    </ul>
                </li>
            </ol>
        `
    },
    {
        id: 39,
        standard: "Crypto & Sustainability",
        professors: ["Spagnuolo", "Zampella"],
        question: "Informativa Non Finanziaria (Direttiva 2014/95/UE) e il ruolo dell'ISSB.",
        answer: `
            Rendicontazione ESG (Environmental, Social, Governance):
            <h5>1. Direttiva 2014/95/UE (DNF)</h5>
            Obbligo per le grandi imprese (>500 dipendenti) di redigere la Dichiarazione Non Finanziaria su ambiente, personale, diritti umani e lotta alla corruzione.
            <h5>2. ISSB (International Sustainability Standards Board)</h5>
            Standard globali per la rendicontazione climatica e di sostenibilità:
            <ul>
                <li><strong>IFRS S1</strong>: requisiti generali di informativa finanziaria sulla sostenibilità.</li>
                <li><strong>IFRS S2</strong>: informativa finanziaria legata al cambiamento climatico.</li>
            </ul>
        `
    }
];
