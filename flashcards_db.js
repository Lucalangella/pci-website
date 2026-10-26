// Database delle Flashcards per Principi Contabili Internazionali (Prova Intercorso)
const flashcardsDatabase = [
  {
    "id": 1,
    "standard": "Conceptual Framework (GERARCHIA & STATUS)",
    "module": "Conceptual Framework",
    "tag": "GERARCHIA & STATUS",
    "question": "Qual è lo status giuridico del Conceptual Framework? Se entra in conflitto con una norma dello IAS 38 o dell'IFRS 9, quale prevale?",
    "title": "Concetto Chiave: GERARCHIA & STATUS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Il Framework NON è un principio contabile (IFRS/IAS) e NON prevale mai sugli standard specifici.</p><p style='text-align:left; margin:6px 0;'>In caso di contrasto PREVALE SEMPRE lo standard specifico.</p><p style='text-align:left; margin:6px 0;'>Diventa fonte di riferimento per i redattori solo in assenza di uno standard dedicato, secondo la gerarchia delle fonti di IAS 8.</p></div>"
  },
  {
    "id": 2,
    "standard": "Conceptual Framework (DESTINATARI & SCOPO)",
    "module": "Conceptual Framework",
    "tag": "DESTINATARI & SCOPO",
    "question": "Chi sono i Primary Users (destinatari primari) del bilancio IFRS e qual è il loro focus informativo?",
    "title": "Concetto Chiave: DESTINATARI & SCOPO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Sono gli INVESTITORI e i FINANZIATORI/CREDITORI (attuali e potenziali) che non possono esigere report personalizzati.</p><p style='text-align:left; margin:6px 0;'>Focus: stimare l'ammontare, la tempistica e il grado di incertezza dei flussi di cassa futuri netti (cash flow prospects).</p><p style='text-align:left; margin:6px 0;'>Il bilancio adotta la Entity Perspective e il Going Concern (continuità >= 12 mesi).</p></div>"
  },
  {
    "id": 3,
    "standard": "Conceptual Framework (REPORTING ENTITY)",
    "module": "Conceptual Framework",
    "tag": "REPORTING ENTITY",
    "question": "Che differenza c'è tra Reporting Entity e Legal Entity? Quali sono i tre casi fondamentali di disallineamento?",
    "title": "Concetto Chiave: REPORTING ENTITY",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>La Legal Entity è la persona giuridica formale di diritto societario; la Reporting Entity è un perimetro economico-sostanziale (substance over form).</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>RE > Legal Entity: BILANCIO CONSOLIDATO (gruppo controllante-controllate);</li><li>RE < Legal Entity: SEGMENT REPORTING o carve-out (singola divisione);</li><li>Controllo Comune: BILANCIO COMBINATO (società sorelle sotto comune proprietà senza capogruppo formale).</li></ul></div>"
  },
  {
    "id": 4,
    "standard": "Conceptual Framework (BILANCIO SEPARATO)",
    "module": "Conceptual Framework",
    "tag": "BILANCIO SEPARATO",
    "question": "Nel bilancio non consolidato (separato), come vengono trattate le società controllate nello Stato Patrimoniale?",
    "title": "Concetto Chiave: BILANCIO SEPARATO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>La Reporting Entity è LA SOLA SOCIETÀ MADRE.</p><p style='text-align:left; margin:6px 0;'>Le controllate restano soggetti terzi: i loro singoli asset e debiti NON compaiono.</p><p style='text-align:left; margin:6px 0;'>Nello SP della madre compare solo una riga nell'attivo: 'Partecipazioni in controllate' valutata ex IAS 27 (al costo, al fair value IFRS 9 o con il metodo del patrimonio netto).</p></div>"
  },
  {
    "id": 5,
    "standard": "Conceptual Framework (QUALITÀ FONDAMENTALI)",
    "module": "Conceptual Framework",
    "tag": "QUALITÀ FONDAMENTALI",
    "question": "Quali sono le due caratteristiche qualitative fondamentali dell'informazione finanziaria e da cosa sono composte?",
    "title": "Concetto Chiave: QUALITÀ FONDAMENTALI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>SIGNIFICATIVITÀ (Relevance): capacità di fare la differenza nelle decisioni (valore predittivo e confermativo), declinata nella Rilevanza (Materiality).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>RAPPRESENTAZIONE FEDELE (Faithful Representation): prevalenza della sostanza sulla forma, composta da Completezza, Assenza di errori procedurali e Neutralità.</li></ul></div>"
  },
  {
    "id": 6,
    "standard": "Conceptual Framework (MATERIALITY)",
    "module": "Conceptual Framework",
    "tag": "MATERIALITY",
    "question": "Qual è la soglia quantitativa benchmark della Materialità spiegata nel corso? E la dimensione qualitativa?",
    "title": "Concetto Chiave: MATERIALITY",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DIMENSIONE QUANTITATIVA: errore o scostamento pari o superiore al 5% nella stima dell'utile d'esercizio.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DIMENSIONE QUALITATIVA: natura intrinseca del fatto (effetto soglia utile/perdita, violazione di covenants bancari, parti correlate), rilevante anche se numericamente minima o pari a zero.</li></ul></div>"
  },
  {
    "id": 7,
    "standard": "Conceptual Framework (MATERIALITY PROCESS)",
    "module": "Conceptual Framework",
    "tag": "MATERIALITY PROCESS",
    "question": "Quali sono le 4 fasi del processo di valutazione della Materiality (IFRS Practice Statement 2)?",
    "title": "Concetto Chiave: MATERIALITY PROCESS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IDENTIFY: individuare le informazioni potenzialmente rilevanti da standard e business;</li><li>ASSESS: valutare l'impatto su base quantitativa (5% utile) e qualitativa;</li><li>ORGANISE: strutturare la bozza aggregando ed evitando l'oscuramento (anti-obscuring);</li><li>REVIEW: fare un passo indietro ed esaminare il bilancio d'insieme.</li></ul></div>"
  },
  {
    "id": 8,
    "standard": "Conceptual Framework (PRUDENZA VS NEUTRALITÀ)",
    "module": "Conceptual Framework",
    "tag": "PRUDENZA VS NEUTRALITÀ",
    "question": "Cos'è la Cautious Prudence nel Framework 2018 e perché lo IASB vieta la 'prudenza asimmetrica' del Codice Civile?",
    "title": "Concetto Chiave: PRUDENZA VS NEUTRALITÀ",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È l'esercizio di cautela nelle stime in condizioni di incertezza (no sovrastima asset/ricavi, no sottostima passività/costi).</p><p style='text-align:left; margin:6px 0;'>Lo IASB VIETA la prudenza asimmetrica e le riserve occulte perché sottostimare un asset oggi porta a sovrastimare artificialmente i margini di domani, violando la NEUTRALITÀ nel tempo.</p></div>"
  },
  {
    "id": 9,
    "standard": "Conceptual Framework (CAPITAL MAINTENANCE)",
    "module": "Conceptual Framework",
    "tag": "CAPITAL MAINTENANCE",
    "question": "Qual è la formula del profitto secondo il mantenimento del capitale finanziario? Perché i conferimenti dei soci non sono profitto?",
    "title": "Concetto Chiave: CAPITAL MAINTENANCE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Formula: Profitto = ΔPatrimonio Netto - Apporti soci + Distribuzioni dividendi.</p><p style='text-align:left; margin:6px 0;'>Il profitto si genera SOLO DOPO aver mantenuto intatto il capitale iniziale.</p><p style='text-align:left; margin:6px 0;'>I conferimenti aumentano il PN ma NON sono profitto perché le transazioni a titolo di capitale con i proprietari vanno rigorosamente escluse dal reddito.</p></div>"
  },
  {
    "id": 10,
    "standard": "Conceptual Framework (ESERCIZIO PROFITTO)",
    "module": "Conceptual Framework",
    "tag": "ESERCIZIO PROFITTO",
    "question": "Esercizio: PN iniziale €150.000, finale €185.000. Nell'anno i soci apportano €40.000 e ricevono dividendi per €15.000. Qual è il profitto nominale?",
    "title": "Concetto Chiave: ESERCIZIO PROFITTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>ΔPatrimonio Netto = 185.000 - 150.000 = +35.000 €</p><p style='text-align:left; margin:6px 0;'>Profitto = ΔPN - Apporti + Dividendi<br>Profitto = 35.000 - 40.000 + 15.000 = €10.000</p><p style='text-align:left; margin:6px 0;'>Risposta corretta: €10.000 (Quesito 05.3 del test ufficiale).</p></div>"
  },
  {
    "id": 11,
    "standard": "IAS 1 (SET COMPLETO)",
    "module": "IAS 1",
    "tag": "SET COMPLETO",
    "question": "Quali sono i documenti obbligatori che compongono il set completo di bilancio IFRS?",
    "title": "Concetto Chiave: SET COMPLETO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Stato Patrimoniale;</li><li>Conto Economico e OCI (Statement of Profit or Loss and Other Comprehensive Income);</li><li>Prospetto delle Variazioni di Patrimonio Netto;</li><li>Rendiconto Finanziario (IAS 7);</li><li>Note al bilancio;</li><li>(Se applicabile) Terzo SP all'inizio del periodo comparativo per restatement retrospettivo (IAS 8).</li></ul></div>"
  },
  {
    "id": 12,
    "standard": "IAS 1 (REGOLA TEMPORALE)",
    "module": "IAS 1",
    "tag": "REGOLA TEMPORALE",
    "question": "Una società redige il bilancio per l'esercizio 2026 e non adotta anticipatamente IFRS 18. Quale principio applica per la presentazione?",
    "title": "Concetto Chiave: REGOLA TEMPORALE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Applica obbligatoriamente IAS 1.</p><p style='text-align:left; margin:6px 0;'>L'obbligo di applicare IFRS 18 decorre formalmente solo dagli esercizi che iniziano dal 1° gennaio 2027 (Quesito 01.1 del test).</p></div>"
  },
  {
    "id": 13,
    "standard": "IAS 1 (ATTIVITÀ CORRENTI)",
    "module": "IAS 1",
    "tag": "ATTIVITÀ CORRENTI",
    "question": "Quali sono i 4 criteri alternativi affinché un'attività sia classificata come 'Corrente' nello Stato Patrimoniale?",
    "title": "Concetto Chiave: ATTIVITÀ CORRENTI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Si prevede di realizzarla, venderla o consumarla nel normale ciclo operativo (anche > 12 mesi, es. vino, navi);</li><li>Posseduta principalmente per finalità di trading;</li><li>Si prevede il realizzo entro 12 mesi dalla data di bilancio;</li><li>Cassa o disponibilità liquide senza vincoli per almeno 12 mesi.</li></ul></div>"
  },
  {
    "id": 14,
    "standard": "IAS 1 (CASO RIFINANZIAMENTO)",
    "module": "IAS 1",
    "tag": "CASO RIFINANZIAMENTO",
    "question": "Al 31/12 un debito scade a 9 mesi. A febbraio (prima dell'approvazione del bilancio) viene concordato il rifinanziamento a 5 anni. Al 31/12 il debito è corrente o non corrente?",
    "title": "Concetto Chiave: CASO RIFINANZIAMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È PASSIVITÀ CORRENTE.</p><p style='text-align:left; margin:6px 0;'>Al 31/12 la società non aveva il diritto incondizionato di differire il pagamento per almeno 12 mesi.</p><p style='text-align:left; margin:6px 0;'>L'accordo successivo di febbraio è un fatto non-adjusting ex IAS 10: richiede informativa in nota ma non sana la classificazione corrente al 31/12 (Quesito 01.2).</p></div>"
  },
  {
    "id": 15,
    "standard": "IAS 1 (TOTAL COMPREHENSIVE INCOME)",
    "module": "IAS 1",
    "tag": "TOTAL COMPREHENSIVE INCOME",
    "question": "Cos'è il Total Comprehensive Income (TCI) e qual è la differenza funzionale tra P&L e OCI?",
    "title": "Concetto Chiave: TOTAL COMPREHENSIVE INCOME",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>TCI = Profit or Loss (P&L) + Other Comprehensive Income (OCI).</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>P&L: misura la performance ordinaria e realizzata (base per dividendi, EPS IAS 33, bonus);</li><li>OCI: accoglie costi/ricavi non realizzati (variazioni di fair value) per sterilizzare la volatilità dal P&L operativo.</li></ul></div>"
  },
  {
    "id": 16,
    "standard": "IAS 1 (EFFETTO OCI RIVALUTAZIONE)",
    "module": "IAS 1",
    "tag": "EFFETTO OCI RIVALUTAZIONE",
    "question": "Un incremento da rivalutazione di un immobile (IAS 16) viene rilevato in OCI. Qual è il suo esatto effetto sul bilancio?",
    "title": "Concetto Chiave: EFFETTO OCI RIVALUTAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Aumenta il Risultato Complessivo (TCI) e aumenta il Patrimonio Netto (Riserva di rivalutazione), ma NON aumenta l'utile d'esercizio (P&L) (Quesito 01.3 del test).</p></div>"
  },
  {
    "id": 17,
    "standard": "IAS 1 (RECYCLING)",
    "module": "IAS 1",
    "tag": "RECYCLING",
    "question": "Cos'è il Recycling (Reclassification Adjustment)? Fai un esempio con recycling e uno con divieto di recycling.",
    "title": "Concetto Chiave: RECYCLING",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È il trasferimento al Conto Economico (P&L) di riserve OCI quando l'operazione giunge a compimento per evitare doppie imputazioni nel TCI.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>CON Recycling: titoli di debito FVOCI (IFRS 9), coperture Cash Flow Hedge, riserva cambi IAS 21;</li><li>SENZA Recycling: rivalutazione immobili IAS 16 (la riserva OCI residua va direttamente a utili portati a nuovo a PN, mai a P&L!).</li></ul></div>"
  },
  {
    "id": 18,
    "standard": "IAS 1 (COSTI OPERATIVI)",
    "module": "IAS 1",
    "tag": "COSTI OPERATIVI",
    "question": "Qual è il vincolo informativo se un'azienda sceglie di presentare il Conto Economico per destinazione (Costo del venduto)?",
    "title": "Concetto Chiave: COSTI OPERATIVI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Ha l'obbligo inderogabile di fornire nelle note al bilancio l'informativa aggiuntiva sui costi per natura, indicando espressamente almeno il totale delle spese per il personale e il totale di ammortamenti e svalutazioni.</p></div>"
  },
  {
    "id": 19,
    "standard": "IFRS 18 (RIVOLUZIONE 2027)",
    "module": "IFRS 18",
    "tag": "RIVOLUZIONE 2027",
    "question": "Perché lo IASB ha introdotto l'IFRS 18 in sostituzione dello IAS 1? Quando entra in vigore?",
    "title": "Concetto Chiave: RIVOLUZIONE 2027",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Entra in vigore obbligatoriamente il 1° gennaio 2027.</p><p style='text-align:left; margin:6px 0;'>Nasce per standardizzare la struttura del Conto Economico, eliminare l'incomparabilità dei conti economici e disciplinare le misure non-GAAP utilizzate dal management.</p></div>"
  },
  {
    "id": 20,
    "standard": "IFRS 18 (LE 3 CATEGORIE P&L)",
    "module": "IFRS 18",
    "tag": "LE 3 CATEGORIE P&L",
    "question": "Quali sono le 3 categorie obbligatorie in cui IFRS 18 suddivide tutti i ricavi e costi del Conto Economico?",
    "title": "Concetto Chiave: LE 3 CATEGORIE P&L",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>OPERATING: categoria residuale (accoglie tutto ciò che non è Investing, Financing, imposte o IFRS 5; include costi insoliti e ristrutturazioni);</li><li>INVESTING: rendimenti da asset indipendenti (immobili a reddito IAS 40, dividendi, collegate IAS 28);</li><li>FINANCING: passività da raccolta capitali (interessi mutui, bond, leasing IFRS 16) e oneri finanziari netti.</li></ul></div>"
  },
  {
    "id": 21,
    "standard": "IFRS 18 (2 SUB-TOTALI OBBLIGATORI)",
    "module": "IFRS 18",
    "tag": "2 SUB-TOTALI OBBLIGATORI",
    "question": "Quali sono i 2 nuovi subtotali obbligatori standardizzati introdotti da IFRS 18 nel Conto Economico e a cosa servono?",
    "title": "Concetto Chiave: 2 SUB-TOTALI OBBLIGATORI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Risultato Operativo (Operating Profit / EBIT standardizzato);</li><li>Utile prima dei finanziamenti e delle imposte (Profit before financing and income taxes).</li></ul><p style='text-align:left; margin:6px 0;'>Servono a offrire riferimenti oggettivi comuni per confrontare società che usano definizioni arbitrarie di EBITDA (Quesito 01.4).</p></div>"
  },
  {
    "id": 22,
    "standard": "IFRS 18 (MPMs)",
    "module": "IFRS 18",
    "tag": "MPMs",
    "question": "Cosa sono le MPMs (Management Performance Measures) sotto IFRS 18 e quali obblighi comportano?",
    "title": "Concetto Chiave: MPMs",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Sono indicatori non-GAAP di redditività usati dal management nei comunicati pubblici (es. Adjusted EBITDA).</p><p style='text-align:left; margin:6px 0;'>Obbligo di entrare nelle Note al bilancio con: motivazione, formula, riconciliazione analitica con subtotale IFRS, impatto fiscale/NCI e certificazione dei revisori (Audit).</p></div>"
  },
  {
    "id": 23,
    "standard": "IAS 7 (PRINCIPIO FONDANTE)",
    "module": "IAS 7",
    "tag": "PRINCIPIO FONDANTE",
    "question": "Qual è l'unico prospetto di bilancio redatto secondo il principio di cassa (Cash basis)? Perché 'Cash is King'?",
    "title": "Concetto Chiave: PRINCIPIO FONDANTE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Il Rendiconto Finanziario (IAS 7).</p><p style='text-align:left; margin:6px 0;'>Perché l'utile contabile applica stime e congetture e non garantisce la solvibilità. Un'azienda con utili positivi può fallire per crisi di liquidità; il rendiconto misura i movimenti monetari reali.</p></div>"
  },
  {
    "id": 24,
    "standard": "IAS 7 (CASH EQUIVALENTS)",
    "module": "IAS 7",
    "tag": "CASH EQUIVALENTS",
    "question": "Quali requisiti deve soddisfare un investimento per essere qualificato come 'Cash Equivalent' (Mezzo equivalente)?",
    "title": "Concetto Chiave: CASH EQUIVALENTS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Brevissimo termine e pronta conversione in cassa;</li><li>Rischio insignificante di variazione del valore;</li><li>Scadenza originaria non superiore a 3 mesi dalla data di acquisto.</li></ul><p style='text-align:left; margin:6px 0;'>Le azioni ordinarie sono ESCLUSE (troppo volatili).</p></div>"
  },
  {
    "id": 25,
    "standard": "IAS 7 (LE 3 GESTIONI)",
    "module": "IAS 7",
    "tag": "LE 3 GESTIONI",
    "question": "Quali sono le 3 macro-aree del Rendiconto Finanziario e cosa accolgono?",
    "title": "Concetto Chiave: LE 3 GESTIONI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>OPERATIVA: incassi e pagamenti del core business (motore caratteristico);</li><li>INVESTIMENTO: acquisto e vendita di immobilizzazioni materiali, immateriali e partecipazioni (CapEx);</li><li>FINANZIAMENTO: accensione/rimborso debiti finanziari, emissione azioni, dividendi pagati, canoni leasing quota capitale.</li></ul></div>"
  },
  {
    "id": 26,
    "standard": "IAS 7 (METODO INDIRETTO CCN)",
    "module": "IAS 7",
    "tag": "METODO INDIRETTO CCN",
    "question": "Nel metodo indiretto, come si rettifica l'Utile Netto per Ammortamenti, Plusvalenze da cessione e variazioni di Crediti e Fornitori?",
    "title": "Concetto Chiave: METODO INDIRETTO CCN",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Ammortamenti: si RISOMMANO (+, costo non monetario);</li><li>Plusvalenze cespiti: si SOTTRAGGONO (-, l'incasso totale va in Investing!);</li><li>Aumento Crediti: si SOTTRAE (-, vendite non ancora incassate);</li><li>Riduzione Fornitori: si SOTTRAE (-, pagamenti effettuati di fatture pregresse).</li></ul></div>"
  },
  {
    "id": 27,
    "standard": "IAS 7 (OPERAZIONI NON MONETARIE)",
    "module": "IAS 7",
    "tag": "OPERAZIONI NON MONETARIE",
    "question": "Come viene trattata nel Rendiconto Finanziario l'acquisizione iniziale di un macchinario mediante contratto di leasing IFRS 16 senza esborso?",
    "title": "Concetto Chiave: OPERAZIONI NON MONETARIE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È un'operazione non monetaria (non-cash transaction): NON genera alcun flusso iniziale nel prospetto.</p><p style='text-align:left; margin:6px 0;'>È fatto divieto di esporre flussi figurativi; l'operazione va illustrata separatamente in un'apposita nota esplicativa (Quesito 02.1 del test).</p></div>"
  },
  {
    "id": 28,
    "standard": "Note al Bilancio (DIVIETO SANATORIA)",
    "module": "Note al Bilancio",
    "tag": "DIVIETO SANATORIA",
    "question": "Se una società opera una compensazione non consentita nei prospetti primari esponendo i dati lordi nelle note, la violazione è sanata?",
    "title": "Concetto Chiave: DIVIETO SANATORIA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>NO, la disclosure in nota NON SANA una compensazione o trattamento errato nei prospetti primari (Quesito 03.3 del test).</p></div>"
  },
  {
    "id": 29,
    "standard": "Note al Bilancio (STIME & SENSIBILITÀ)",
    "module": "Note al Bilancio",
    "tag": "STIME & SENSIBILITÀ",
    "question": "Quale informazione sulle stime contabili è più utile nelle note secondo lo IAS 1 (Modulo 03)?",
    "title": "Concetto Chiave: STIME & SENSIBILITÀ",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Descrivere le principali ipotesi assunte sul futuro e, laddove appropriato, la relativa analisi di sensibilità (sensitivity analysis) a variazioni ragionevolmente possibili dei parametri (Quesito 03.2).</p></div>"
  },
  {
    "id": 30,
    "standard": "Management Commentary (PROSPETTIVA & CONTENUTI)",
    "module": "Management Commentary",
    "tag": "PROSPETTIVA & CONTENUTI",
    "question": "Cos'è il Management Commentary (Practice Statement 1) e come va commentata la crescita dell'utile dovuta alla sola vendita di un immobile?",
    "title": "Concetto Chiave: PROSPETTIVA & CONTENUTI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È la relazione narrativa della gestione vista 'attraverso gli occhi del management'.</p><p style='text-align:left; margin:6px 0;'>Se l'utile cresce solo per una cessione straordinaria mentre i margini operativi calano, il management deve distinguere il contributo dell'alienazione e spiegare cause e prospettive del core business (Quesito 04.1).</p></div>"
  },
  {
    "id": 31,
    "standard": "Sostenibilità (ISSB STANDARDS)",
    "module": "Sostenibilità",
    "tag": "ISSB STANDARDS",
    "question": "Quali sono i primi due standard emessi dall'ISSB e su quali pilastri si fondano?",
    "title": "Concetto Chiave: ISSB STANDARDS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IFRS S1: requisiti generali di sostenibilità su 4 pilastri TCFD (Governance, Strategia, Risk Management, Metriche e Target);</li><li>IFRS S2: standard specifico sul Clima (rischi fisici/transizione, emissioni Scope 1, 2 e 3).</li></ul></div>"
  },
  {
    "id": 32,
    "standard": "Sostenibilità (DOPPIA MATERIALITÀ)",
    "module": "Sostenibilità",
    "tag": "DOPPIA MATERIALITÀ",
    "question": "Qual è la differenza fondamentale tra la Materialità Finanziaria (ISSB) e la Doppia Materialità dell'Unione Europea (CSRD)?",
    "title": "Concetto Chiave: DOPPIA MATERIALITÀ",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Materialità Finanziaria (Outside-in / ISSB): impatto dei fattori ESG sul valore e sui flussi di cassa dell'impresa (per gli investitori);</li><li>Doppia Materialità (CSRD UE): Outside-in + Inside-out (l'impatto delle attività aziendali su persone e ambiente).</li></ul></div>"
  },
  {
    "id": 33,
    "standard": "Seminario Ferrari (MODELLO DI BUSINESS)",
    "module": "Seminario Ferrari",
    "tag": "MODELLO DI BUSINESS",
    "question": "Qual è la filosofia fondativa del modello Ferrari sintetizzata dalla frase di Enzo Ferrari?",
    "title": "Concetto Chiave: MODELLO DI BUSINESS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>'Ferrari will always deliver one car less than the market demands'.</p><p style='text-align:left; margin:6px 0;'>Priorità assoluta a Esclusività e Valore rispetto ai volumi: crescita dei ricavi guidata da personalizzazioni estreme e serie Icona (leva Price/Mix).</p></div>"
  },
  {
    "id": 34,
    "standard": "Seminario Ferrari (METRICHE FINANZIARIE)",
    "module": "Seminario Ferrari",
    "tag": "METRICHE FINANZIARIE",
    "question": "Quali sono i target finanziari 2020-2025 presentati nel seminario Ferrari per EBITDA e Cash Flow?",
    "title": "Concetto Chiave: METRICHE FINANZIARIE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Adjusted EBITDA Margin al 38.8% al 2025 (+580 bps rispetto al 2020);</li><li>Free Cash Flow Industriale cumulato 2020-25 di ~€5.1 miliardi con alto Cash Conversion Ratio per autofinanziare investimenti in R&D e ibrido.</li></ul></div>"
  },
  {
    "id": 35,
    "standard": "Seminario Ferrari (TRADE-OFFS & DECISIONI)",
    "module": "Seminario Ferrari",
    "tag": "TRADE-OFFS & DECISIONI",
    "question": "Quali sono i 4 trade-off strategici resi visibili dalla Finanza in Ferrari e le 5 fasi del processo decisionale?",
    "title": "Concetto Chiave: TRADE-OFFS & DECISIONI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Trade-off: 1. Growth vs Exclusivity; 2. Innovation vs Discipline; 3. Global vs Local; 4. Short-term vs Long-term.</p><p style='text-align:left; margin:6px 0;'>From Data to Decision: 01. Business Question -> 02. Data & Assumptions -> 03. Scenarios/Sensitivities -> 04. Risks & Opps -> 05. Decision.</p></div>"
  },
  {
    "id": 36,
    "standard": "IAS 16 (COSTO CAPITALIZZABILE)",
    "module": "IAS 16",
    "tag": "COSTO CAPITALIZZABILE",
    "question": "Quali componenti entrano nel costo iniziale di un impianto e quali sono tassativamente escluse?",
    "title": "Concetto Chiave: COSTO CAPITALIZZABILE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>ENTRANO: prezzo d'acquisto netto, dazi, trasporto, montaggio, collaudo (netto campioni venduti) e il valore attuale dei costi di smantellamento e bonifica (IAS 37).</p><p style='text-align:left; margin:6px 0;'>ESCLUSE (a P&L): spese di formazione del personale (manca il controllo giuridico), marketing, spese generali e costi di inaugurazione.</p></div>"
  },
  {
    "id": 37,
    "standard": "IAS 16 (COMPONENT APPROACH)",
    "module": "IAS 16",
    "tag": "COMPONENT APPROACH",
    "question": "Cos'è il Component Approach ex IAS 16? Fai l'esempio dell'aereo e del terreno/edificio.",
    "title": "Concetto Chiave: COMPONENT APPROACH",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Ogni parte di un cespite con costo significativo e vita utile o ritmo di consumo dissimile DEVE essere ammortizzata separatamente.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Aereo: fusoliera (25 anni), motori (10 anni), interni (5 anni);</li><li>Terreno vs Fabbricato: il terreno ha vita utile indefinita e non si ammortizza mai; l'edificio si ammortizza.</li></ul></div>"
  },
  {
    "id": 38,
    "standard": "IAS 16 (SCRITTURA RIVALUTAZIONE)",
    "module": "IAS 16",
    "tag": "SCRITTURA RIVALUTAZIONE",
    "question": "Esercizio: Un impianto passa da €80.000 a €95.000 nel Revaluation Model senza svalutazioni pregresse. Qual è la scrittura contabile?",
    "title": "Concetto Chiave: SCRITTURA RIVALUTAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Dare Impianti €15.000 / Avere Riserva di rivalutazione (OCI) €15.000.</p><p style='text-align:left; margin:6px 0;'>Nessun provento tocca il Conto Economico ordinario (Quesito 06.4 del test ufficiale).</p></div>"
  },
  {
    "id": 39,
    "standard": "IAS 16 (VENDITA CESPITE RIVALUTATO)",
    "module": "IAS 16",
    "tag": "VENDITA CESPITE RIVALUTATO",
    "question": "Cosa accade alla Riserva di Rivalutazione quando un bene rivalutato viene venduto a terzi?",
    "title": "Concetto Chiave: VENDITA CESPITE RIVALUTATO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>DIVIETO CATEGORICO DI RECYCLING.</p><p style='text-align:left; margin:6px 0;'>La riserva di rivalutazione accumulata in OCI a patrimonio netto NON transita mai per il Conto Economico (P&L); viene trasferita direttamente a 'Utili portati a nuovo' (Retained Earnings) a PN.</p></div>"
  },
  {
    "id": 40,
    "standard": "IAS 16 (REGOLE AMMORTAMENTO)",
    "module": "IAS 16",
    "tag": "REGOLE AMMORTAMENTO",
    "question": "Quando inizia l'ammortamento di un cespite e cosa succede se il bene rimane temporaneamente inutilizzato?",
    "title": "Concetto Chiave: REGOLE AMMORTAMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Inizia quando il bene è DISPONIBILE ALL'USO (nel luogo e nelle condizioni volute dal management), NON dal primo utilizzo effettivo.</p><p style='text-align:left; margin:6px 0;'>NON SI SOSPENDE se il bene rimane temporaneamente inattivo o sottoutilizzato.</p></div>"
  },
  {
    "id": 41,
    "standard": "IFRS 5 (CRITERI CLASSIFICAZIONE)",
    "module": "IFRS 5",
    "tag": "CRITERI CLASSIFICAZIONE",
    "question": "Quali sono le due condizioni tassative per classificare un cespite come 'Held for Sale' (Posseduto per la vendita)?",
    "title": "Concetto Chiave: CRITERI CLASSIFICAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Disponibilità immediata per la vendita nelle condizioni attuali;</li><li>Vendita ALTAMENTE PROBABILE entro 12 mesi (piano formale approvato dal management, ricerca attiva di acquirenti a prezzo congruo, scarse probabilità di revoca) (Quesito 07.1).</li></ul></div>"
  },
  {
    "id": 42,
    "standard": "IFRS 5 (STOP AMMORTAMENTO)",
    "module": "IFRS 5",
    "tag": "STOP AMMORTAMENTO",
    "question": "In quale momento esatto cessa l'ammortamento per un cespite nel campo di applicazione di IFRS 5?",
    "title": "Concetto Chiave: STOP AMMORTAMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Cessa alla data in cui sono SODDISFATTE TUTTE LE CONDIZIONI DI CLASSIFICAZIONE (non alla sola approvazione del piano dal CdA, né alla vendita finale!) (Quesito 07.2 del test ufficiale).</p></div>"
  },
  {
    "id": 43,
    "standard": "IFRS 5 (VALUTAZIONE & IMPAIRMENT)",
    "module": "IFRS 5",
    "tag": "VALUTAZIONE & IMPAIRMENT",
    "question": "Esercizio: Macchinario con valore contabile €240.000. Fair Value €230.000, costi stimati di vendita €10.000. Quali valore e perdita si rilevano?",
    "title": "Concetto Chiave: VALUTAZIONE & IMPAIRMENT",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Fair Value netto = 230.000 - 10.000 = €220.000.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Regola del minore tra valore contabile (€240k) e Fair Value netto (€220k):</li><li>Nuovo valore iscritto: €220.000;</li><li>Perdita da riduzione valore (Impairment): €20.000 a P&L (Quesito 07.3 del test).</li></ul></div>"
  },
  {
    "id": 44,
    "standard": "IFRS 5 (DISCONTINUED OPERATIONS)",
    "module": "IFRS 5",
    "tag": "DISCONTINUED OPERATIONS",
    "question": "Quale dismissione rappresenta una Discontinued Operation e come si espone nel Conto Economico?",
    "title": "Concetto Chiave: DISCONTINUED OPERATIONS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>La cessione di un'entità o componente che rappresenta un IMPORTANTE RAMO AUTONOMO DI ATTIVITÀ o un'area geografica significativa (Quesito 07.4).</p><p style='text-align:left; margin:6px 0;'>Nel P&L: tutti i suoi ricavi e costi sono rimossi dalle ordinarie categorie ed esposti in un'UNICA RIGA SINTETICA al netto delle imposte (Risultato netto delle discontinued operations).</p></div>"
  },
  {
    "id": 45,
    "standard": "IFRS 5 (MANCATA VENDITA)",
    "module": "IFRS 5",
    "tag": "MANCATA VENDITA",
    "question": "Cosa accade se la vendita sfuma e il bene cessa di essere classificato come Held for Sale?",
    "title": "Concetto Chiave: MANCATA VENDITA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Torna nelle Attività Non Correnti al MINORE tra:</li><li>Il valore contabile che avrebbe avuto se non fosse mai stato held for sale (dedotti tutti gli ammortamenti congelati nel frattempo);</li><li>Il valore recuperabile ex IAS 36 alla data di revoca.</li></ul><p style='text-align:left; margin:6px 0;'>La differenza viene imputata immediatamente a P&L.</p></div>"
  },
  {
    "id": 101,
    "standard": "IAS 16 - Scrittura",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA",
    "question": "Rivalutazione Impianto per €15.000 (nessuna svalutazione precedente). Qual è la scrittura in Partita Doppia?",
    "title": "Rivalutazione a Riserva OCI (IAS 16)",
    "html": "\n            <table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Impianti (Attivo SP)</td><td>15.000</td><td></td></tr>\n                <tr><td>Riserva di Rivalutazione (Patrimonio Netto - OCI)</td><td></td><td>15.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">L'incremento patrimoniale transita dall'OCI per non gonfiare l'utile d'esercizio realizzato. Alla vendita del bene: <strong>DIVIETO DI RECYCLING</strong> a P&L.</p>\n        "
  },
  {
    "id": 102,
    "standard": "IFRS 16 - Scrittura",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA",
    "question": "Stipula contratto di leasing: valore attuale dei canoni futuri €80.000. Qual è la scrittura contabile iniziale?",
    "title": "Rilevazione iniziale Diritto d'Uso (IFRS 16)",
    "html": "\n            <table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Diritto d'Uso (ROU Asset - Attivo SP)</td><td>80.000</td><td></td></tr>\n                <tr><td>Debito per Leasing (Lease Liability - Passivo)</td><td></td><td>80.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Si capitalizza il diritto d'uso iscrivendo in contropartita il debito finanziario attualizzato.</p>\n        "
  },
  {
    "id": 103,
    "standard": "IAS 36 - Scrittura",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA",
    "question": "Svalutazione per Impairment dell'Avviamento (Goodwill) per €10.000. Qual è la scrittura in Partita Doppia?",
    "title": "Svalutazione Definitiva Avviamento (IAS 36)",
    "html": "\n            <table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Perdite da Svalutazione (Conto Economico P&L)</td><td>10.000</td><td></td></tr>\n                <tr><td>Avviamento (Goodwill - Attivo SP)</td><td></td><td>10.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Il Goodwill viene ridotto direttamente. Questa svalutazione <strong>NON è mai ripristinabile</strong> in futuro.</p>\n        "
  },
  {
    "id": 104,
    "standard": "IFRS 2 - Scrittura",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA",
    "question": "Rilevazione annua del costo per stock options (equity-settled) assegnate ai dipendenti per €5.000.",
    "title": "Costo del Personale con contropartita Riserva Equity",
    "html": "\n            <table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Spese del Personale / Stock Options (P&L)</td><td>5.000</td><td></td></tr>\n                <tr><td>Riserva per Piani Azionari (Patrimonio Netto)</td><td></td><td>5.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Nelle operazioni equity-settled la contropartita è un incremento di riserve di patrimonio netto, non un debito.</p>\n        "
  },
  {
    "id": 105,
    "standard": "IAS 32 - Scrittura",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA",
    "question": "Emissione di obbligazioni convertibili: cassa incassata €1.000.000 (di cui valore attuale del debito €950.000). Scrittura di stipula.",
    "title": "Scorporo dello Strumento Composto (IAS 32)",
    "html": "\n            <table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Cassa / Banca (Attivo SP)</td><td>1.000.000</td><td></td></tr>\n                <tr><td>Prestiti Obbligazionari Convertibili (Passivo)</td><td></td><td>950.000</td></tr>\n                <tr><td>Riserva per Opzione Conversione (Equity)</td><td></td><td>50.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Lo IAS 32 impone di scindere lo strumento composto isolando la passività finanziaria dall'opzione di conversione (Patrimonio Netto).</p>\n        "
  },
  {
    "id": 51,
    "standard": "IAS 38 (IDENTIFICABILITÀ & DIRITTI)",
    "module": "IAS 38",
    "tag": "IDENTIFICABILITÀ & DIRITTI",
    "question": "Una licenza d'uso non è trasferibile separatamente a terzi, ma attribuisce diritti contrattuali controllati e benefici economici futuri con costo attendibile. La non trasferibilità impedisce da sola l'iscrizione secondo IAS 38?",
    "title": "Concetto Chiave: IDENTIFICABILITÀ & DIRITTI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>NO, l'iscrizione NON è impedita.</strong></p><p style='text-align:left; margin:6px 0;'>Secondo lo IAS 38, l'identificabilità sussiste se il bene è <em>separabile</em> OPPURE se deriva da <em>diritti contrattuali o legali</em>, indipendentemente dalla loro trasferibilità.</p><p style='text-align:left; margin:6px 0;'>Essendo un diritto contrattuale controllato con benefici futuri attendibili, si iscrive all'attivo.</p></div>"
  },
  {
    "id": 52,
    "standard": "IAS 38 (RICERCA & SVILUPPO)",
    "module": "IAS 38",
    "tag": "RICERCA & SVILUPPO",
    "question": "Un progetto comporta costi di Ricerca per €30.000, Sviluppo per €20.000 prima di soddisfare i 6 criteri di capitalizzazione, e Sviluppo direttamente attribuibile per €50.000 dopo tale data. Quali importi si rilevano a P&L e all'Attivo dello SP?",
    "title": "Concetto Chiave: RICERCA & SVILUPPO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Attività immateriale (SP): €50.000</strong></p><p style='text-align:left; margin:6px 0;'><strong>Costi di periodo (P&L): €50.000</strong> (€30.000 ricerca + €20.000 sviluppo preliminare).</p><p style='text-align:left; margin:6px 0;'>Solo lo sviluppo successivo al rispetto di tutti i 6 criteri si capitalizza. Vige il <em>divieto assoluto di ripristino retroattivo</em> dei costi precedentemente imputati a P&L.</p></div>"
  },
  {
    "id": 53,
    "standard": "IAS 38 (CRITERI PIRATE SVILUPPO)",
    "module": "IAS 38",
    "tag": "CRITERI PIRATE SVILUPPO",
    "question": "La fattibilità tecnica di un progetto è pienamente dimostrata, ma la società non riesce a dimostrare la disponibilità di risorse finanziarie e tecniche per completarlo. Può capitalizzare i costi di sviluppo sostenuti?",
    "title": "Concetto Chiave: CRITERI PIRATE SVILUPPO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>NO, non può capitalizzare.</strong></p><p style='text-align:left; margin:6px 0;'>I 6 criteri di capitalizzazione dello IAS 38 (PIRATE) sono <em>tassativi e cumulativi</em>.</p><p style='text-align:left; margin:6px 0;'>La fattibilità tecnica da sola non basta: se mancano le risorse finanziarie o tecniche certe per portare a termine l'opera, tutti i costi devono essere imputati a P&L.</p></div>"
  },
  {
    "id": 54,
    "standard": "IAS 38 (VITA UTILE INDEFINITA)",
    "module": "IAS 38",
    "tag": "VITA UTILE INDEFINITA",
    "question": "Qual è la combinazione di trattamenti contabili obbligatoria per un'attività immateriale a vita utile indefinita?",
    "title": "Concetto Chiave: VITA UTILE INDEFINITA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li><strong>Nessun ammortamento sistematico</strong>;</li><li><strong>Impairment test obbligatorio almeno annuale</strong> ex IAS 36 a prescindere da indicatori di perdita;</li><li><strong>Riesame annuale dello status di vita utile indefinita</strong> alla chiusura di ogni esercizio.</li></ul></div>"
  },
  {
    "id": 55,
    "standard": "IAS 38 (DIVIETI CAPITALIZZAZIONE)",
    "module": "IAS 38",
    "tag": "DIVIETI CAPITALIZZAZIONE",
    "question": "Quali elementi generati internamente non possono MAI essere iscritti all'Attivo dello Stato Patrimoniale ex IAS 38?",
    "title": "Concetto Chiave: DIVIETI CAPITALIZZAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Divieto assoluto di capitalizzazione interna per:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Avviamento generato internamente;</li><li>Marchi, liste clienti, testate generati internamente;</li><li>Spese di start-up e impianto;</li><li>Spese di formazione dipendenti;</li><li>Spese di pubblicità e marketing.</li></ul><p style='text-align:left; margin:6px 0;'>Tutti a P&L nell'esercizio di sostenimento.</p></div>"
  },
  {
    "id": 56,
    "standard": "IFRS 16 (DEFINIZIONE & CONTROLLO)",
    "module": "IFRS 16",
    "tag": "DEFINIZIONE & CONTROLLO",
    "question": "Un contratto dà accesso a un bene identificato. Quale ulteriore condizione è essenziale secondo IFRS 16 per concludere che contiene un leasing?",
    "title": "Concetto Chiave: DEFINIZIONE & CONTROLLO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Che il cliente controlli l'uso del bene.</strong></p><p style='text-align:left; margin:6px 0;'>Il controllo sussiste se il cliente ha simultaneamente:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Il diritto di ottenere <em>sostanzialmente tutti i benefici economici</em> dall'uso;</li><li>Il diritto di <em>dirigere l'utilizzo</em> del bene (come e per quale scopo usarlo).</li></ul></div>"
  },
  {
    "id": 57,
    "standard": "IFRS 16 (RILEVAZIONE INIZIALE)",
    "module": "IFRS 16",
    "tag": "RILEVAZIONE INIZIALE",
    "question": "Alla decorrenza di un leasing: Valore Attuale pagamenti residui = €90.000; Pagamento versato alla decorrenza = €6.000; Costi diretti iniziali sostenuti = €4.000; Incentivi ricevuti dal locatore = €2.000. Quali sono Diritto d'Uso (ROU Asset) e Debito iniziali?",
    "title": "Concetto Chiave: RILEVAZIONE INIZIALE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Diritto d'Uso: €98.000 | Debito iniziale: €90.000</strong></p><p style='text-align:left; margin:6px 0;'><em>Formula ROU:</em> Debito residuo (€90.000) + Pagamento decorrenza (€6.000) + Costi diretti (€4.000) - Incentivi (€2.000) = <strong>€98.000</strong>.</p><p style='text-align:left; margin:6px 0;'>Il debito è solo €90.000 poiché i €6.000 sono già stati saldati al momento zero.</p></div>"
  },
  {
    "id": 58,
    "standard": "IFRS 16 (SCRITTURA CANONE & INTERESSI)",
    "module": "IFRS 16",
    "tag": "SCRITTURA CANONE & INTERESSI",
    "question": "Debito leasing all'1/1 = €100.000, tasso annuo = 5%, canone fine anno = €25.000. Quale scrittura a libro giornale registra il pagamento del canone e l'interesse annuo di competenza?",
    "title": "Concetto Chiave: SCRITTURA CANONE & INTERESSI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Dare Interessi Passivi €5.000 e Dare Debito Leasing €20.000 / Avere Banca €25.000</strong></p><p style='text-align:left; margin:6px 0;'>Interessi: €100.000 x 5% = €5.000 (P&L).</p><p style='text-align:left; margin:6px 0;'>Quota capitale a rimborso debito: €25.000 - €5.000 = €20.000 (riduce il debito residuo a €80.000).</p></div>"
  },
  {
    "id": 59,
    "standard": "IFRS 16 (ESENZIONI LOCATARIO)",
    "module": "IFRS 16",
    "tag": "ESENZIONI LOCATARIO",
    "question": "Un contratto di leasing ha durata di 12 mesi e non contiene un'opzione di riscatto. Quale affermazione descrive la facoltà di esenzione per leasing a breve termine?",
    "title": "Concetto Chiave: ESENZIONI LOCATARIO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>È una scelta contabile facoltativa del locatario.</strong></p><p style='text-align:left; margin:6px 0;'>Il locatario può scegliere di non applicare il modello ROU/Debito, imputando i canoni a quote costanti a Conto Economico come costo d'esercizio.</p><p style='text-align:left; margin:6px 0;'>Si applica per contratti <= 12 mesi senza opzione d'acquisto e per beni di modico valore (< $5.000).</p></div>"
  },
  {
    "id": 60,
    "standard": "Criptovalute (BUSINESS MODEL & CLASSIFICAZIONE)",
    "module": "Criptovalute",
    "tag": "BUSINESS MODEL & CLASSIFICAZIONE",
    "question": "Due imprese detengono Bitcoin: una li compra per rivenderli abitualmente ai clienti, l'altra li conserva come investimento a lungo termine. Quale informazione è decisiva per il loro trattamento contabile?",
    "title": "Concetto Chiave: BUSINESS MODEL & CLASSIFICAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Lo scopo della detenzione e il modello di attività (Business Model).</strong></p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li><strong>Vendita ordinaria / intermediazione</strong>: IAS 2 (Rimanenze);</li><li><strong>Investimento a lungo termine</strong>: IAS 38 (Attività Immateriali a vita indefinita).</li></ul><p style='text-align:left; margin:6px 0;'>Detenere lo stesso asset non comporta lo stesso trattamento contabile.</p></div>"
  },
  {
    "id": 61,
    "standard": "Criptovalute (NON È CASSA NÉ CREDITO)",
    "module": "Criptovalute",
    "tag": "NON È CASSA NÉ CREDITO",
    "question": "La tesoreria propone di considerare Bitcoin equivalenti a un deposito bancario o a disponibilità liquide perché possono essere scambiati su una piattaforma online. Qual è l'obiezione contabile più fondata?",
    "title": "Concetto Chiave: NON È CASSA NÉ CREDITO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>La negoziabilità non garantisce un importo stabile né equivale a un credito bancario.</strong></p><p style='text-align:left; margin:6px 0;'>Bitcoin non è valuta sovrana né dà diritto contrattuale a ricevere cassa da una controparte. L'altissima volatilità esclude la qualifica di <em>Cash Equivalent</em> (IAS 7).</p></div>"
  },
  {
    "id": 62,
    "standard": "Criptovalute (VARIAZIONI DI PREZZO)",
    "module": "Criptovalute",
    "tag": "VARIAZIONI DI PREZZO",
    "question": "Il prezzo di mercato dei Bitcoin detenuti da un'impresa aumenta rispetto all'acquisto. Prima di concludere che l'aumento sia un utile da rilevare a Conto Economico, cosa occorre verificare?",
    "title": "Concetto Chiave: VARIAZIONI DI PREZZO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Occorre verificare il criterio contabile applicabile.</strong></p><p style='text-align:left; margin:6px 0;'>Un rialzo di prezzo non genera automaticamente utile a P&L:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IAS 38 Cost Model: nessun utile rilevato;</li><li>IAS 38 Revaluation Model: aumento a Riserva OCI;</li><li>IAS 2 Dealer: utile a P&L.</li></ul></div>"
  },
  {
    "id": 63,
    "standard": "IAS 36 (VALORE RECUPERABILE & PERDITA)",
    "module": "IAS 36",
    "tag": "VALORE RECUPERABILE & PERDITA",
    "question": "Un impianto ha valore contabile €200.000, Fair Value €175.000, costi di dismissione €5.000 e Valore d'Uso €180.000. Quale perdita di valore per impairment occorre rilevare secondo IAS 36?",
    "title": "Concetto Chiave: VALORE RECUPERABILE & PERDITA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Perdita da rilevare: €20.000 a P&L</strong></p><p style='text-align:left; margin:6px 0;'>1. FV Netto: €175.000 - €5.000 = €170.000;</p><p style='text-align:left; margin:6px 0;'>2. Valore Recuperabile: max(€170.000, €180.000) = <strong>€180.000</strong>;</p><p style='text-align:left; margin:6px 0;'>3. Impairment: €200.000 - €180.000 = <strong>€20.000</strong>.</p></div>"
  },
  {
    "id": 64,
    "standard": "IAS 36 (RIPRISTINO DI VALORE & CEILING)",
    "module": "IAS 36",
    "tag": "RIPRISTINO DI VALORE & CEILING",
    "question": "Un cespite valutato al costo ha valore contabile residuo di €64.000 dopo una precedente svalutazione. Il valore recuperabile sale a €95.000. Senza la svalutazione, il valore contabile ammortizzato alla stessa data sarebbe €84.000. Qual è il ripristino massimo rilevabile a P&L?",
    "title": "Concetto Chiave: RIPRISTINO DI VALORE & CEILING",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Ripristino massimo: €20.000 a P&L</strong></p><p style='text-align:left; margin:6px 0;'><em>Regola del Tetto Massimo:</em> il bene può salire solo fino a €84.000 (valore che avrebbe avuto senza svalutazione).</p><p style='text-align:left; margin:6px 0;'>Ripristino: €84.000 - €64.000 = <strong>€20.000</strong> (e non €31.000!).</p></div>"
  },
  {
    "id": 65,
    "standard": "IAS 36 (CASH-GENERATING UNIT)",
    "module": "IAS 36",
    "tag": "CASH-GENERATING UNIT",
    "question": "Una singola macchina in uno stabilimento produttivo non genera entrate finanziarie indipendenti. A quale livello deve essere condotto l'impairment test ex IAS 36?",
    "title": "Concetto Chiave: CASH-GENERATING UNIT",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>A livello di Cash-Generating Unit (CGU).</strong></p><p style='text-align:left; margin:6px 0;'>È il più piccolo gruppo identificabile di attività che genera entrate finanziarie ampiamente indipendenti.</p></div>"
  },
  {
    "id": 66,
    "standard": "IAS 36 (DIVIETO RIPRISTINO GOODWILL)",
    "module": "IAS 36",
    "tag": "DIVIETO RIPRISTINO GOODWILL",
    "question": "Le prospettive economiche di una CGU migliorano radicalmente dopo che l'anno precedente era stata rilevata una svalutazione dell'avviamento. Cosa accade alla perdita imputata all'avviamento?",
    "title": "Concetto Chiave: DIVIETO RIPRISTINO GOODWILL",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>NON si ripristina mai, divieto assoluto.</strong></p><p style='text-align:left; margin:6px 0;'>La perdita per svalutazione dell'avviamento è irreversibile ex IAS 36, perché qualsiasi ripristino equivarrebbe a rilevare avviamento generato internamente (vietato da IAS 38).</p></div>"
  },
  {
    "id": 67,
    "standard": "IAS 36 (VALUE IN USE & FLUSSI)",
    "module": "IAS 36",
    "tag": "VALUE IN USE & FLUSSI",
    "question": "Quali elementi devono essere RIGOROSAMENTE ESCLUSI dalla stima dei flussi di cassa per il calcolo del Valore d'Uso (Value in Use) ex IAS 36?",
    "title": "Concetto Chiave: VALUE IN USE & FLUSSI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Esclusioni tassative (Regola As-Is):</strong></p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Future ristrutturazioni non ancora deliberate e vincolanti;</li><li>Miglioramenti incrementali ed espansioni future dell'asset;</li><li>Flussi finanziari e imposte sul reddito (tasso WACC pre-tax).</li></ul></div>"
  },
  {
    "id": 68,
    "standard": "IAS 36 (ORDINE SVALUTAZIONE CGU)",
    "module": "IAS 36",
    "tag": "ORDINE SVALUTAZIONE CGU",
    "question": "In quale ordine si imputa una perdita per riduzione di valore accertata complessivamente su una Cash-Generating Unit (CGU)?",
    "title": "Concetto Chiave: ORDINE SVALUTAZIONE CGU",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ol style='text-align:left; margin:6px 0; padding-left:18px;'><li><strong>Prima interamente sull'Avviamento (Goodwill)</strong> fino ad azzeramento;</li><li><strong>Poi pro-quota sulle altre attività della CGU</strong> in base al carrying amount.</li></ol><p style='text-align:left; margin:6px 0;'>Salvaguardia: nessun asset scende sotto max(FV netto, VIU, 0).</p></div>"
  },
  {
    "id": 69,
    "standard": "IAS 36 (CORPORATE ASSETS)",
    "module": "IAS 36",
    "tag": "CORPORATE ASSETS",
    "question": "Cosa sono i Corporate Assets (es. sede centrale, IT di gruppo) e come vengono testati per impairment secondo le slide di aula?",
    "title": "Concetto Chiave: CORPORATE ASSETS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'><strong>Attività condivise (sede, IT, R&D) senza flussi autonomi.</strong></p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li><em>Bottom-up test:</em> allocazione pro-quota (es. vita utile ponderata) alle singole CGU;</li><li><em>Top-down test:</em> test prima della CGU autonoma e poi a livello aggregato con Corporate Asset.</li></ul></div>"
  }
];
