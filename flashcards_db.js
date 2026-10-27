// Database completo delle Flashcards per Principi Contabili Internazionali (Prova Intercorso - 12 Moduli)
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
    "standard": "Conceptual Framework (CAPITALE FINANZIARIO VS FISICO)",
    "module": "Conceptual Framework",
    "tag": "CAPITALE FINANZIARIO VS FISICO",
    "question": "In un periodo di aumento dei prezzi (inflazione), quale differenza fondamentale distingue il mantenimento del capitale finanziario nominale dal mantenimento del capitale fisico (Domanda 05.2)?",
    "title": "Concetto Chiave: CAPITALE FINANZIARIO VS FISICO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>MANTENIMENTO DEL CAPITALE FINANZIARIO NOMINALE: riguarda la conservazione dell'importo monetario iniziale investito dai soci (c'è profitto se l'importo monetario del PN finale supera quello iniziale, al netto di apporti e dividendi).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>MANTENIMENTO DEL CAPITALE FISICO: riguarda la conservazione della CAPACITÀ PRODUTTIVA OPERATIVA dell'impresa.</li></ul><p style='text-align:left; margin:6px 0;'>Nel modello fisico, gli aumenti di prezzo delle attività non sono profitto ma 'rettifiche di mantenimento del capitale' iscritte in una Riserva di Patrimonio Netto (Quesito 05.2).</p></div>"
  },
  {
    "id": 12,
    "standard": "IAS 1 (SET COMPLETO)",
    "module": "IAS 1",
    "tag": "SET COMPLETO",
    "question": "Quali sono i documenti obbligatori che compongono il set completo di bilancio IFRS?",
    "title": "Concetto Chiave: SET COMPLETO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Stato Patrimoniale;</li><li>Conto Economico e OCI (Statement of Profit or Loss and Other Comprehensive Income);</li><li>Prospetto delle Variazioni di Patrimonio Netto;</li><li>Rendiconto Finanziario (IAS 7);</li><li>Note al bilancio;</li><li>(Se applicabile) Terzo SP all'inizio del periodo comparativo per restatement retrospettivo (IAS 8).</li></ul></div>"
  },
  {
    "id": 13,
    "standard": "IAS 1 (REGOLA TEMPORALE)",
    "module": "IAS 1",
    "tag": "REGOLA TEMPORALE",
    "question": "Una società redige il bilancio per l'esercizio 2026 e non adotta anticipatamente IFRS 18. Quale principio applica per la presentazione?",
    "title": "Concetto Chiave: REGOLA TEMPORALE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Applica obbligatoriamente IAS 1.</p><p style='text-align:left; margin:6px 0;'>L'obbligo di applicare IFRS 18 decorre formalmente solo dagli esercizi che iniziano dal 1° gennaio 2027 (Quesito 01.1 del test).</p></div>"
  },
  {
    "id": 14,
    "standard": "IAS 1 (ATTIVITÀ CORRENTI)",
    "module": "IAS 1",
    "tag": "ATTIVITÀ CORRENTI",
    "question": "Quali sono i 4 criteri alternativi affinché un'attività sia classificata come 'Corrente' nello Stato Patrimoniale?",
    "title": "Concetto Chiave: ATTIVITÀ CORRENTI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Si prevede di realizzarla, venderla o consumarla nel normale ciclo operativo (anche > 12 mesi, es. vino, navi);</li><li>Posseduta principalmente per finalità di trading;</li><li>Si prevede il realizzo entro 12 mesi dalla data di bilancio;</li><li>Cassa o disponibilità liquide senza vincoli per almeno 12 mesi.</li></ul></div>"
  },
  {
    "id": 15,
    "standard": "IAS 1 (CASO RIFINANZIAMENTO)",
    "module": "IAS 1",
    "tag": "CASO RIFINANZIAMENTO",
    "question": "Al 31/12 un debito scade a 9 mesi. A febbraio (prima dell'approvazione del bilancio) viene concordato il rifinanziamento a 5 anni. Al 31/12 il debito è corrente o non corrente?",
    "title": "Concetto Chiave: CASO RIFINANZIAMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È PASSIVITÀ CORRENTE.</p><p style='text-align:left; margin:6px 0;'>Al 31/12 la società non aveva il diritto incondizionato di differire il pagamento per almeno 12 mesi.</p><p style='text-align:left; margin:6px 0;'>L'accordo successivo di febbraio è un fatto non-adjusting ex IAS 10: richiede informativa in nota ma non sana la classificazione corrente al 31/12 (Quesito 01.2).</p></div>"
  },
  {
    "id": 16,
    "standard": "IAS 1 (TOTAL COMPREHENSIVE INCOME)",
    "module": "IAS 1",
    "tag": "TOTAL COMPREHENSIVE INCOME",
    "question": "Cos'è il Total Comprehensive Income (TCI) e qual è la differenza funzionale tra P&L e OCI?",
    "title": "Concetto Chiave: TOTAL COMPREHENSIVE INCOME",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>TCI = Profit or Loss (P&L) + Other Comprehensive Income (OCI).</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>P&L: misura la performance ordinaria e realizzata (base per dividendi, EPS IAS 33, bonus);</li><li>OCI: accoglie costi/ricavi non realizzati (variazioni di fair value) per sterilizzare la volatilità dal P&L operativo.</li></ul></div>"
  },
  {
    "id": 17,
    "standard": "IAS 1 (EFFETTO OCI RIVALUTAZIONE)",
    "module": "IAS 1",
    "tag": "EFFETTO OCI RIVALUTAZIONE",
    "question": "Un incremento da rivalutazione di un immobile (IAS 16) viene rilevato in OCI. Qual è il suo esatto effetto sul bilancio?",
    "title": "Concetto Chiave: EFFETTO OCI RIVALUTAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Aumenta il Risultato Complessivo (TCI) e aumenta il Patrimonio Netto (Riserva di rivalutazione), ma NON aumenta l'utile d'esercizio (P&L) (Quesito 01.3 del test).</p></div>"
  },
  {
    "id": 18,
    "standard": "IAS 1 (RECYCLING)",
    "module": "IAS 1",
    "tag": "RECYCLING",
    "question": "Cos'è il Recycling (Reclassification Adjustment)? Fai un esempio con recycling e uno con divieto di recycling.",
    "title": "Concetto Chiave: RECYCLING",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È il trasferimento al Conto Economico (P&L) di riserve OCI quando l'operazione giunge a compimento per evitare doppie imputazioni nel TCI.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>CON Recycling: titoli di debito FVOCI (IFRS 9), coperture Cash Flow Hedge, riserva cambi IAS 21;</li><li>SENZA Recycling: rivalutazione immobili IAS 16 (la riserva OCI residua va direttamente a utili portati a nuovo a PN, mai a P&L!).</li></ul></div>"
  },
  {
    "id": 19,
    "standard": "IAS 1 (COSTI OPERATIVI)",
    "module": "IAS 1",
    "tag": "COSTI OPERATIVI",
    "question": "Qual è il vincolo informativo se un'azienda sceglie di presentare il Conto Economico per destinazione (Costo del venduto)?",
    "title": "Concetto Chiave: COSTI OPERATIVI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Ha l'obbligo inderogabile di fornire nelle note al bilancio l'informativa aggiuntiva sui costi per natura, indicando espressamente almeno il totale delle spese per il personale e il totale di ammortamenti e svalutazioni.</p></div>"
  },
  {
    "id": 20,
    "standard": "IFRS 18 (RIVOLUZIONE 2027)",
    "module": "IFRS 18",
    "tag": "RIVOLUZIONE 2027",
    "question": "Perché lo IASB ha introdotto l'IFRS 18 in sostituzione dello IAS 1? Quando entra in vigore?",
    "title": "Concetto Chiave: RIVOLUZIONE 2027",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Entra in vigore obbligatoriamente il 1° gennaio 2027.</p><p style='text-align:left; margin:6px 0;'>Nasce per standardizzare la struttura del Conto Economico, eliminare l'incomparabilità dei conti economici e disciplinare le misure non-GAAP utilizzate dal management.</p></div>"
  },
  {
    "id": 21,
    "standard": "IFRS 18 (LE 3 CATEGORIE P&L)",
    "module": "IFRS 18",
    "tag": "LE 3 CATEGORIE P&L",
    "question": "Quali sono le 3 categorie obbligatorie in cui IFRS 18 suddivide tutti i ricavi e costi del Conto Economico?",
    "title": "Concetto Chiave: LE 3 CATEGORIE P&L",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>OPERATING: categoria residuale (accoglie tutto ciò che non è Investing, Financing, imposte o IFRS 5; include costi insoliti e ristrutturazioni);</li><li>INVESTING: rendimenti da asset indipendenti (immobili a reddito IAS 40, dividendi, collegate IAS 28);</li><li>FINANCING: passività da raccolta capitali (interessi mutui, bond, leasing IFRS 16) e oneri finanziari netti.</li></ul></div>"
  },
  {
    "id": 22,
    "standard": "IFRS 18 (2 SUB-TOTALI OBBLIGATORI)",
    "module": "IFRS 18",
    "tag": "2 SUB-TOTALI OBBLIGATORI",
    "question": "Quali sono i 2 nuovi subtotali obbligatori standardizzati introdotti da IFRS 18 nel Conto Economico e a cosa servono?",
    "title": "Concetto Chiave: 2 SUB-TOTALI OBBLIGATORI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Risultato Operativo (Operating Profit / EBIT standardizzato);</li><li>Utile prima dei finanziamenti e delle imposte (Profit before financing and income taxes).</li></ul><p style='text-align:left; margin:6px 0;'>Servono a offrire riferimenti oggettivi comuni per confrontare società che usano definizioni arbitrarie di EBITDA (Quesito 01.4).</p></div>"
  },
  {
    "id": 23,
    "standard": "IFRS 18 (MPMs)",
    "module": "IFRS 18",
    "tag": "MPMs",
    "question": "Cosa sono le MPMs (Management Performance Measures) sotto IFRS 18 e quali obblighi comportano?",
    "title": "Concetto Chiave: MPMs",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Sono indicatori non-GAAP di redditività usati dal management nei comunicati pubblici (es. Adjusted EBITDA).</p><p style='text-align:left; margin:6px 0;'>Obbligo di entrare nelle Note al bilancio con: motivazione, formula, riconciliazione analitica con subtotale IFRS, impatto fiscale/NCI e certificazione dei revisori (Audit).</p></div>"
  },
  {
    "id": 24,
    "standard": "IAS 7 (PRINCIPIO FONDANTE)",
    "module": "IAS 7",
    "tag": "PRINCIPIO FONDANTE",
    "question": "Qual è l'unico prospetto di bilancio redatto secondo il principio di cassa (Cash basis)? Perché 'Cash is King'?",
    "title": "Concetto Chiave: PRINCIPIO FONDANTE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Il Rendiconto Finanziario (IAS 7).</p><p style='text-align:left; margin:6px 0;'>Perché l'utile contabile applica stime e congetture e non garantisce la solvibilità. Un'azienda con utili positivi può fallire per crisi di liquidità; il rendiconto misura i movimenti monetari reali.</p></div>"
  },
  {
    "id": 25,
    "standard": "IAS 7 (CASH EQUIVALENTS)",
    "module": "IAS 7",
    "tag": "CASH EQUIVALENTS",
    "question": "Quali requisiti deve soddisfare un investimento per essere qualificato come 'Cash Equivalent' (Mezzo equivalente)?",
    "title": "Concetto Chiave: CASH EQUIVALENTS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Brevissimo termine e pronta conversione in cassa;</li><li>Rischio insignificante di variazione del valore;</li><li>Scadenza originaria non superiore a 3 mesi dalla data di acquisto.</li></ul><p style='text-align:left; margin:6px 0;'>Le azioni ordinarie sono ESCLUSE (troppo volatili).</p></div>"
  },
  {
    "id": 26,
    "standard": "IAS 7 (LE 3 GESTIONI)",
    "module": "IAS 7",
    "tag": "LE 3 GESTIONI",
    "question": "Quali sono le 3 macro-aree del Rendiconto Finanziario e cosa accolgono?",
    "title": "Concetto Chiave: LE 3 GESTIONI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>OPERATIVA: incassi e pagamenti del core business (motore caratteristico);</li><li>INVESTIMENTO: acquisto e vendita di immobilizzazioni materiali, immateriali e partecipazioni (CapEx);</li><li>FINANZIAMENTO: accensione/rimborso debiti finanziari, emissione azioni, dividendi pagati, canoni leasing quota capitale.</li></ul></div>"
  },
  {
    "id": 27,
    "standard": "IAS 7 (METODO INDIRETTO CCN)",
    "module": "IAS 7",
    "tag": "METODO INDIRETTO CCN",
    "question": "Nel metodo indiretto, come si rettifica l'Utile Netto per Ammortamenti, Plusvalenze da cessione e variazioni di Crediti e Fornitori?",
    "title": "Concetto Chiave: METODO INDIRETTO CCN",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Ammortamenti: si RISOMMANO (+, costo non monetario);</li><li>Plusvalenze cespiti: si SOTTRAGGONO (-, l'incasso totale va in Investing!);</li><li>Aumento Crediti: si SOTTRAE (-, vendite non ancora incassate);</li><li>Riduzione Fornitori: si SOTTRAE (-, pagamenti effettuati di fatture pregresse).</li></ul></div>"
  },
  {
    "id": 28,
    "standard": "IAS 7 (OPERAZIONI NON MONETARIE)",
    "module": "IAS 7",
    "tag": "OPERAZIONI NON MONETARIE",
    "question": "Come viene trattata nel Rendiconto Finanziario l'acquisizione iniziale di un macchinario mediante contratto di leasing IFRS 16 senza esborso?",
    "title": "Concetto Chiave: OPERAZIONI NON MONETARIE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È un'operazione non monetaria (non-cash transaction): NON genera alcun flusso iniziale nel prospetto.</p><p style='text-align:left; margin:6px 0;'>È fatto divieto di esporre flussi figurativi; l'operazione va illustrata separatamente in un'apposita nota esplicativa (Quesito 02.1 del test).</p></div>"
  },
  {
    "id": 29,
    "standard": "IAS 7 (ESERCIZIO METODO INDIRETTO)",
    "module": "IAS 7",
    "tag": "ESERCIZIO METODO INDIRETTO",
    "question": "Esercizio (Domanda 02.2): Utile netto €85.000, ammortamenti €20.000, plusvalenza da cessione €5.000. I crediti commerciali aumentano di €15.000, le rimanenze aumentano di €8.000 e i debiti commerciali aumentano di €10.000. Qual è il flusso di cassa operativo?",
    "title": "Concetto Chiave: ESERCIZIO METODO INDIRETTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Flusso Operativo = €87.000.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Passaggi di calcolo (Metodo Indiretto):<br>(= Flusso prima del ΔCCN: €100.000)</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Utile netto: €85.000</li><li>+ Ammortamenti (costo non-cash): +€20.000</li><li>- Plusvalenza da cessione (va in Investing): -€5.000</li><li>- Aumento crediti commerciali (non incassati): -€15.000</li><li>- Aumento rimanenze (assorbimento cassa): -€8.000</li><li>+ Aumento debiti verso fornitori (dilazione ottenuta): +€10.000</li></ul><p style='text-align:left; margin:6px 0;'>Totale = 85.000 + 20.000 - 5.000 - 15.000 - 8.000 + 10.000 = €87.000 (Quesito 02.2).</p></div>"
  },
  {
    "id": 30,
    "standard": "IAS 7 (ESERCIZIO FLUSSO INVESTIMENTO)",
    "module": "IAS 7",
    "tag": "ESERCIZIO FLUSSO INVESTIMENTO",
    "question": "Esercizio (Domanda 02.3): Nell'anno si pagano €50.000 per l'acquisto di un impianto, si incassano €8.000 dalla cessione di un vecchio macchinario e si incassano €30.000 da un nuovo prestito bancario. Qual è il flusso netto dell'attività di investimento?",
    "title": "Concetto Chiave: ESERCIZIO FLUSSO INVESTIMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Flusso netto dell'attività di investimento = -€42.000.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Calcolo:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Esborso acquisto impianto (CapEx): -€50.000</li><li>Incasso effettivo cessione macchinario: +€8.000</li><li>Saldo Investing = -50.000 + 8.000 = -€42.000.</li></ul><p style='text-align:left; margin:6px 0;'>Attenzione al trabocchetto: l'incasso di €30.000 per il nuovo prestito bancario appartiene all'attività di FINANZIAMENTO (Financing), non di investimento! (Quesito 02.3).</p></div>"
  },
  {
    "id": 31,
    "standard": "IAS 7 (INTERESSI, DIVIDENDI & IFRS 18)",
    "module": "IAS 7",
    "tag": "INTERESSI, DIVIDENDI & IFRS 18",
    "question": "Come vengono classificati interessi e dividendi nello IAS 7 tradizionale e cosa cambia dal 2027 con l'entrata in vigore dell'IFRS 18?",
    "title": "Concetto Chiave: INTERESSI, DIVIDENDI & IFRS 18",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IAS 7 TRADIZIONALE (fino al 2026): lascia scelta contabile (con obbligo di costanza): Interessi/dividendi pagati in Operating o Financing; Interessi/dividendi incassati in Operating o Investing.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>NOVITÀ CON IFRS 18 (dal 2027 - imprese non finanziarie):</li><li>Il metodo indiretto parte obbligatoriamente dall'Operating Profit (non più dall'Utile Netto);</li><li>Eliminata l'opzionalità: Interessi e dividendi INCASSATI vanno in INVESTING; Interessi e dividendi PAGATI vanno in FINANCING.</li></ul></div>"
  },
  {
    "id": 32,
    "standard": "Note al Bilancio (DIVIETO SANATORIA)",
    "module": "Note al Bilancio",
    "tag": "DIVIETO SANATORIA",
    "question": "Se una società opera una compensazione non consentita nei prospetti primari esponendo i dati lordi nelle note, la violazione è sanata?",
    "title": "Concetto Chiave: DIVIETO SANATORIA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>NO, la disclosure in nota NON SANA una compensazione o trattamento errato nei prospetti primari (Quesito 03.3 del test).</p></div>"
  },
  {
    "id": 33,
    "standard": "Note al Bilancio (STIME & SENSIBILITÀ)",
    "module": "Note al Bilancio",
    "tag": "STIME & SENSIBILITÀ",
    "question": "Quale informazione sulle stime contabili è più utile nelle note secondo lo IAS 1 (Modulo 03)?",
    "title": "Concetto Chiave: STIME & SENSIBILITÀ",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Descrivere le principali ipotesi assunte sul futuro e, laddove appropriato, la relativa analisi di sensibilità (sensitivity analysis) a variazioni ragionevolmente possibili dei parametri (Quesito 03.2).</p></div>"
  },
  {
    "id": 34,
    "standard": "Note al Bilancio (POLITICHE CONTABILI & GIUDIZI (§122 vs §125))",
    "module": "Note al Bilancio",
    "tag": "POLITICHE CONTABILI & GIUDIZI (§122 vs §125)",
    "question": "Una società sviluppa un software rilevante (Domanda 03.1): quale informativa sulle politiche contabili è richiesta nelle Note? E che differenza c'è tra IAS 1 §122 e §125?",
    "title": "Concetto Chiave: POLITICHE CONTABILI & GIUDIZI (§122 vs §125)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>POLITICHE CONTABILI RILEVANTI (Material Accounting Policy Info - Q. 03.1): non bisogna copiare il testo dello IAS 38 (boilerplate), ma spiegare concretamente COME la società applica i criteri di capitalizzazione ai propri progetti software.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IAS 1 §122 (Giudizi Critici / Judgements): scelte qualificatorie discrezionali del management (es. stabilire se c'è controllo IFRS 10 o se si agisce da Principal o Agent).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IAS 1 §125 (Incertezze nelle Stime): ipotesi sul futuro con rischio significativo di rettifica materiale entro i successivi 12 mesi (es. vita utile, VIU IAS 36).</li></ul></div>"
  },
  {
    "id": 35,
    "standard": "Management Commentary (PROSPETTIVA & CONTENUTI)",
    "module": "Management Commentary",
    "tag": "PROSPETTIVA & CONTENUTI",
    "question": "Cos'è il Management Commentary (Practice Statement 1) e come va commentata la crescita dell'utile dovuta alla sola vendita di un immobile?",
    "title": "Concetto Chiave: PROSPETTIVA & CONTENUTI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>È la relazione narrativa della gestione vista 'attraverso gli occhi del management'.</p><p style='text-align:left; margin:6px 0;'>Se l'utile cresce solo per una cessione straordinaria mentre i margini operativi calano, il management deve distinguere il contributo dell'alienazione e spiegare cause e prospettive del core business (Quesito 04.1).</p></div>"
  },
  {
    "id": 36,
    "standard": "Management Commentary (PERDITA CLIENTE & CONCENTRAZIONE)",
    "module": "Management Commentary",
    "tag": "PERDITA CLIENTE & CONCENTRAZIONE",
    "question": "La perdita di un cliente importante riduce significativamente i ricavi dell'esercizio (Domanda 04.2). Quale contenuto del Management Commentary è più informativo per gli investitori?",
    "title": "Concetto Chiave: PERDITA CLIENTE & CONCENTRAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Collegare esplicitamente il calo dei ricavi al grado di CONCENTRAZIONE DEI CLIENTI, illustrando le azioni correttive intraprese dal management e i RISCHI RESIDUI per gli esercizi futuri (Quesito 04.2).</p><p style='text-align:left; margin:6px 0;'>Ripetere solo i numeri dei due esercizi o presentare gli obiettivi di recupero come già acquisiti viola i principi di completezza, neutralità e trasparenza del Practice Statement 1.</p></div>"
  },
  {
    "id": 37,
    "standard": "Management Commentary (INFORMAZIONI FORWARD-LOOKING)",
    "module": "Management Commentary",
    "tag": "INFORMAZIONI FORWARD-LOOKING",
    "question": "Il management prevede una ripresa dei ricavi, ma questa dipende dall'ottenimento incerto di nuovi contratti (Domanda 04.3). Come deve essere presentata la previsione nel Management Commentary?",
    "title": "Concetto Chiave: INFORMAZIONI FORWARD-LOOKING",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Deve spiegare in modo trasparente le IPOTESI sottostanti (assumptions), le EVIDENZE disponibili a supporto e le INCERTEZZE che possono modificare l'esito finale (Quesito 04.3).</p><p style='text-align:left; margin:6px 0;'>Le informazioni prospettiche (forward-looking) non vanno né omesse per timore dell'incertezza né presentate come risultati certi garantiti.</p></div>"
  },
  {
    "id": 38,
    "standard": "Sostenibilità (ISSB STANDARDS)",
    "module": "Sostenibilità",
    "tag": "ISSB STANDARDS",
    "question": "Quali sono i primi due standard emessi dall'ISSB e su quali pilastri si fondano?",
    "title": "Concetto Chiave: ISSB STANDARDS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IFRS S1: requisiti generali di sostenibilità su 4 pilastri TCFD (Governance, Strategia, Risk Management, Metriche e Target);</li><li>IFRS S2: standard specifico sul Clima (rischi fisici/transizione, emissioni Scope 1, 2 e 3).</li></ul></div>"
  },
  {
    "id": 39,
    "standard": "Sostenibilità (DOPPIA MATERIALITÀ)",
    "module": "Sostenibilità",
    "tag": "DOPPIA MATERIALITÀ",
    "question": "Qual è la differenza fondamentale tra la Materialità Finanziaria (ISSB) e la Doppia Materialità dell'Unione Europea (CSRD)?",
    "title": "Concetto Chiave: DOPPIA MATERIALITÀ",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Materialità Finanziaria (Outside-in / ISSB): impatto dei fattori ESG sul valore e sui flussi di cassa dell'impresa (per gli investitori);</li><li>Doppia Materialità (CSRD UE): Outside-in + Inside-out (l'impatto delle attività aziendali su persone e ambiente).</li></ul></div>"
  },
  {
    "id": 40,
    "standard": "Seminario Ferrari (MODELLO DI BUSINESS)",
    "module": "Seminario Ferrari",
    "tag": "MODELLO DI BUSINESS",
    "question": "Qual è la filosofia fondativa del modello Ferrari sintetizzata dalla frase di Enzo Ferrari?",
    "title": "Concetto Chiave: MODELLO DI BUSINESS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>'Ferrari will always deliver one car less than the market demands'.</p><p style='text-align:left; margin:6px 0;'>Priorità assoluta a Esclusività e Valore rispetto ai volumi: crescita dei ricavi guidata da personalizzazioni estreme e serie Icona (leva Price/Mix).</p></div>"
  },
  {
    "id": 41,
    "standard": "Seminario Ferrari (METRICHE FINANZIARIE)",
    "module": "Seminario Ferrari",
    "tag": "METRICHE FINANZIARIE",
    "question": "Quali sono i target finanziari 2020-2025 presentati nel seminario Ferrari per EBITDA e Cash Flow?",
    "title": "Concetto Chiave: METRICHE FINANZIARIE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Adjusted EBITDA Margin al 38.8% al 2025 (+580 bps rispetto al 2020);</li><li>Free Cash Flow Industriale cumulato 2020-25 di ~€5.1 miliardi con alto Cash Conversion Ratio per autofinanziare investimenti in R&D e ibrido.</li></ul></div>"
  },
  {
    "id": 42,
    "standard": "Seminario Ferrari (TRADE-OFFS & DECISIONI)",
    "module": "Seminario Ferrari",
    "tag": "TRADE-OFFS & DECISIONI",
    "question": "Quali sono i 4 trade-off strategici resi visibili dalla Finanza in Ferrari e le 5 fasi del processo decisionale?",
    "title": "Concetto Chiave: TRADE-OFFS & DECISIONI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Trade-off: 1. Growth vs Exclusivity; 2. Innovation vs Discipline; 3. Global vs Local; 4. Short-term vs Long-term.</p><p style='text-align:left; margin:6px 0;'>From Data to Decision: 01. Business Question -> 02. Data & Assumptions -> 03. Scenarios/Sensitivities -> 04. Risks & Opps -> 05. Decision.</p></div>"
  },
  {
    "id": 43,
    "standard": "Seminario Ferrari (4 PILASTRI RICAVI & R&S IAS 38)",
    "module": "Seminario Ferrari",
    "tag": "4 PILASTRI RICAVI & R&S IAS 38",
    "question": "Quali sono i 4 pilastri dei ricavi di Ferrari, quanto pesano le personalizzazioni e come vengono contabilizzati i costi di Ricerca & Sviluppo (stradale vs Formula 1) secondo lo IAS 38?",
    "title": "Concetto Chiave: 4 PILASTRI RICAVI & R&S IAS 38",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>I 4 PILASTRI DEI RICAVI:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Cars and Spare Parts (~85%): modelli Range, Special Series, Icona (Daytona SP3) e Supercar (F80);</li><li>Personalizzazioni (~19-20% dei ricavi auto): programmi Atelier e Tailor Made ad altissimo margine incrementale;</li><li>Sponsorship, Commercial and Brand (F1 + Lifestyle);</li><li>Financial Services.</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>TRATTAMENTO R&S (IAS 38):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Sviluppo tecnologico vetture stradali: CAPITALIZZATO nell'attivo immateriale (soddisfa i 6 criteri PIRATE) e ammortizzato lungo il ciclo di vita del modello (4-5 anni);</li><li>Ricerca di base e costi di sviluppo della Scuderia Formula 1: SPESATI INTERAMENTE A CONTO ECONOMICO nell'esercizio di sostenimento.</li></ul></div>"
  },
  {
    "id": 44,
    "standard": "IAS 16 (COSTO CAPITALIZZABILE)",
    "module": "IAS 16",
    "tag": "COSTO CAPITALIZZABILE",
    "question": "Quali componenti entrano nel costo iniziale di un impianto e quali sono tassativamente escluse?",
    "title": "Concetto Chiave: COSTO CAPITALIZZABILE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>ENTRANO: prezzo d'acquisto netto, dazi, trasporto, montaggio, collaudo (netto campioni venduti) e il valore attuale dei costi di smantellamento e bonifica (IAS 37).</p><p style='text-align:left; margin:6px 0;'>ESCLUSE (a P&L): spese di formazione del personale (manca il controllo giuridico), marketing, spese generali e costi di inaugurazione.</p></div>"
  },
  {
    "id": 45,
    "standard": "IAS 16 (COMPONENT APPROACH)",
    "module": "IAS 16",
    "tag": "COMPONENT APPROACH",
    "question": "Cos'è il Component Approach ex IAS 16? Fai l'esempio dell'aereo e del terreno/edificio.",
    "title": "Concetto Chiave: COMPONENT APPROACH",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Ogni parte di un cespite con costo significativo e vita utile o ritmo di consumo dissimile DEVE essere ammortizzata separatamente.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Aereo: fusoliera (25 anni), motori (10 anni), interni (5 anni);</li><li>Terreno vs Fabbricato: il terreno ha vita utile indefinita e non si ammortizza mai; l'edificio si ammortizza.</li></ul></div>"
  },
  {
    "id": 46,
    "standard": "IAS 16 (SCRITTURA RIVALUTAZIONE)",
    "module": "IAS 16",
    "tag": "SCRITTURA RIVALUTAZIONE",
    "question": "Esercizio: Un impianto passa da €80.000 a €95.000 nel Revaluation Model senza svalutazioni pregresse. Qual è la scrittura contabile?",
    "title": "Concetto Chiave: SCRITTURA RIVALUTAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Dare Impianti €15.000 / Avere Riserva di rivalutazione (OCI) €15.000.</p><p style='text-align:left; margin:6px 0;'>Nessun provento tocca il Conto Economico ordinario (Quesito 06.4 del test ufficiale).</p></div>"
  },
  {
    "id": 47,
    "standard": "IAS 16 (VENDITA CESPITE RIVALUTATO)",
    "module": "IAS 16",
    "tag": "VENDITA CESPITE RIVALUTATO",
    "question": "Cosa accade alla Riserva di Rivalutazione quando un bene rivalutato viene venduto a terzi?",
    "title": "Concetto Chiave: VENDITA CESPITE RIVALUTATO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>DIVIETO CATEGORICO DI RECYCLING.</p><p style='text-align:left; margin:6px 0;'>La riserva di rivalutazione accumulata in OCI a patrimonio netto NON transita mai per il Conto Economico (P&L); viene trasferita direttamente a 'Utili portati a nuovo' (Retained Earnings) a PN.</p></div>"
  },
  {
    "id": 48,
    "standard": "IAS 16 (REGOLE AMMORTAMENTO)",
    "module": "IAS 16",
    "tag": "REGOLE AMMORTAMENTO",
    "question": "Quando inizia l'ammortamento di un cespite e cosa succede se il bene rimane temporaneamente inutilizzato?",
    "title": "Concetto Chiave: REGOLE AMMORTAMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Inizia quando il bene è DISPONIBILE ALL'USO (nel luogo e nelle condizioni volute dal management), NON dal primo utilizzo effettivo.</p><p style='text-align:left; margin:6px 0;'>NON SI SOSPENDE se il bene rimane temporaneamente inattivo o sottoutilizzato.</p></div>"
  },
  {
    "id": 49,
    "standard": "IAS 16 (ESERCIZIO COSTO INIZIALE)",
    "module": "IAS 16",
    "tag": "ESERCIZIO COSTO INIZIALE",
    "question": "Esercizio (Domanda 06.2): Macchinario con prezzo di listino €100.000, sconto commerciale €5.000, trasporto €4.000, installazione necessaria €6.000, formazione del personale €3.000 e spese amministrative generali €2.000. Qual è il costo iniziale capitalizzabile ex IAS 16?",
    "title": "Concetto Chiave: ESERCIZIO COSTO INIZIALE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Costo iniziale capitalizzabile = €105.000.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Calcolo:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Prezzo al netto dello sconto commerciale: €100.000 - €5.000 = €95.000</li><li>+ Trasporto direttamente attribuibile: +€4.000</li><li>+ Installazione necessaria al funzionamento: +€6.000</li><li>Totale Attivo SP = €105.000.</li></ul><p style='text-align:left; margin:6px 0;'>Esclusi (imputati a Conto Economico): formazione del personale (€3.000) e spese amministrative generali (€2.000) (Quesito 06.2).</p></div>"
  },
  {
    "id": 50,
    "standard": "IAS 16 (ESERCIZIO AMMORTAMENTO PRO-RATA)",
    "module": "IAS 16",
    "tag": "ESERCIZIO AMMORTAMENTO PRO-RATA",
    "question": "Esercizio (Domanda 06.3): Un impianto costa €132.000, ha valore residuo stimato di €12.000 e vita utile di 5 anni. È disponibile per l'uso dal 1° luglio. Con quote costanti e ripartizione mensile, quale ammortamento si rileva al 31 dicembre?",
    "title": "Concetto Chiave: ESERCIZIO AMMORTAMENTO PRO-RATA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Ammortamento al 31 dicembre = €12.000.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Passaggi di calcolo:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Valore da ammortizzare = Costo (€132.000) - Valore Residuo (€12.000) = €120.000;</li><li>Quota annua intera = €120.000 / 5 anni = €24.000;</li><li>Pro-rata temporis dal 1° luglio al 31 dicembre (6 mesi su 12) = €24.000 × (6 / 12) = €12.000 (Quesito 06.3).</li></ul></div>"
  },
  {
    "id": 51,
    "standard": "IFRS 5 (CRITERI CLASSIFICAZIONE)",
    "module": "IFRS 5",
    "tag": "CRITERI CLASSIFICAZIONE",
    "question": "Quali sono le due condizioni tassative per classificare un cespite come 'Held for Sale' (Posseduto per la vendita)?",
    "title": "Concetto Chiave: CRITERI CLASSIFICAZIONE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Disponibilità immediata per la vendita nelle condizioni attuali;</li><li>Vendita ALTAMENTE PROBABILE entro 12 mesi (piano formale approvato dal management, ricerca attiva di acquirenti a prezzo congruo, scarse probabilità di revoca) (Quesito 07.1).</li></ul></div>"
  },
  {
    "id": 52,
    "standard": "IFRS 5 (STOP AMMORTAMENTO)",
    "module": "IFRS 5",
    "tag": "STOP AMMORTAMENTO",
    "question": "In quale momento esatto cessa l'ammortamento per un cespite nel campo di applicazione di IFRS 5?",
    "title": "Concetto Chiave: STOP AMMORTAMENTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Cessa alla data in cui sono SODDISFATTE TUTTE LE CONDIZIONI DI CLASSIFICAZIONE (non alla sola approvazione del piano dal CdA, né alla vendita finale!) (Quesito 07.2 del test ufficiale).</p></div>"
  },
  {
    "id": 53,
    "standard": "IFRS 5 (VALUTAZIONE & IMPAIRMENT)",
    "module": "IFRS 5",
    "tag": "VALUTAZIONE & IMPAIRMENT",
    "question": "Esercizio: Macchinario con valore contabile €240.000. Fair Value €230.000, costi stimati di vendita €10.000. Quali valore e perdita si rilevano?",
    "title": "Concetto Chiave: VALUTAZIONE & IMPAIRMENT",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Fair Value netto = 230.000 - 10.000 = €220.000.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Regola del minore tra valore contabile (€240k) e Fair Value netto (€220k):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Nuovo valore iscritto: €220.000;</li><li>Perdita da riduzione valore (Impairment): €20.000 a P&L (Quesito 07.3 del test).</li></ul></div>"
  },
  {
    "id": 54,
    "standard": "IFRS 5 (DISCONTINUED OPERATIONS)",
    "module": "IFRS 5",
    "tag": "DISCONTINUED OPERATIONS",
    "question": "Quale dismissione rappresenta una Discontinued Operation e come si espone nel Conto Economico?",
    "title": "Concetto Chiave: DISCONTINUED OPERATIONS",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>La cessione di un'entità o componente che rappresenta un IMPORTANTE RAMO AUTONOMO DI ATTIVITÀ o un'area geografica significativa (Quesito 07.4).</p><p style='text-align:left; margin:6px 0;'>Nel P&L: tutti i suoi ricavi e costi sono rimossi dalle ordinarie categorie ed esposti in un'UNICA RIGA SINTETICA al netto delle imposte (Risultato netto delle discontinued operations).</p></div>"
  },
  {
    "id": 55,
    "standard": "IFRS 5 (MANCATA VENDITA)",
    "module": "IFRS 5",
    "tag": "MANCATA VENDITA",
    "question": "Cosa accade se la vendita sfuma e il bene cessa di essere classificato come Held for Sale?",
    "title": "Concetto Chiave: MANCATA VENDITA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>Torna nelle Attività Non Correnti al MINORE tra:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Il valore contabile che avrebbe avuto se non fosse mai stato held for sale (dedotti tutti gli ammortamenti congelati nel frattempo);</li><li>Il valore recuperabile ex IAS 36 alla data di revoca.</li></ul><p style='text-align:left; margin:6px 0;'>La differenza viene imputata immediatamente a P&L.</p></div>"
  },
  {
    "id": 56,
    "standard": "IAS 38 (IDENTIFICABILITÀ & DIRITTI)",
    "module": "IAS 38",
    "tag": "IDENTIFICABILITÀ & DIRITTI",
    "question": "Una licenza d'uso non è trasferibile separatamente a terzi, ma attribuisce diritti contrattuali controllati e benefici economici futuri con costo attendibile (Domanda 08.1). La non trasferibilità impedisce da sola l'iscrizione secondo IAS 38?",
    "title": "Concetto Chiave: IDENTIFICABILITÀ & DIRITTI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>NO, non impedisce l'iscrizione.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Secondo lo IAS 38 (§12), il requisito dell'IDENTIFICABILITÀ è soddisfatto se sussiste almeno una di due condizioni alternative:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Il bene è SEPARABILE (può essere scorporato e venduto/locato autonomamente); OPPURE</li><li>Deriva da DIRITTI CONTRATTUALI O ALTRI DIRITTI LEGALI, indipendentemente dal fatto che tali diritti siano trasferibili o separabili dall'entità (Quesito 08.1).</li></ul></div>"
  },
  {
    "id": 57,
    "standard": "IAS 38 (CASO PHARMABIO (CONTROLLO & FORMAZIONE))",
    "module": "IAS 38",
    "tag": "CASO PHARMABIO (CONTROLLO & FORMAZIONE)",
    "question": "Caso PharmaBio: la società acquista una licenza governativa non cedibile e spende €400.000 in un master di alta formazione per i propri ricercatori. Come si contabilizzano le due operazioni secondo IAS 38?",
    "title": "Concetto Chiave: CASO PHARMABIO (CONTROLLO & FORMAZIONE)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>Anche se non separabile, soddisfa l'identificabilità poiché nasce da un diritto legale/contrattuale ed è controllata dall'impresa.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LICENZA GOVERNATIVA NON CEDIBILE: SI ISCRIVE ALL'ATTIVO (SP).</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Manca il requisito del CONTROLLO (IAS 38 §15): i dipendenti possono dimettersi in qualsiasi momento portando con sé il know-how acquisito.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>FORMAZIONE DEI RICERCATORI (€400.000): SPESATA INTERAMENTE A CONTO ECONOMICO (P&L).</li></ul></div>"
  },
  {
    "id": 58,
    "standard": "IAS 38 (5 MODALITÀ DI ACQUISIZIONE & IFRS 3)",
    "module": "IAS 38",
    "tag": "5 MODALITÀ DI ACQUISIZIONE & IFRS 3",
    "question": "Quali sono le 5 modalità di acquisizione di un'attività immateriale e perché in un'aggregazione aziendale (IFRS 3) si iscrivono al Fair Value anche marchi o liste clienti non presenti nel bilancio dell'acquisita?",
    "title": "Concetto Chiave: 5 MODALITÀ DI ACQUISIZIONE & IFRS 3",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>LE 5 MODALITÀ:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Acquisto separato (prezzo + costi diretti; esclusi lancio/formazione);</li><li>Aggregazione aziendale (Business Combination ex IFRS 3);</li><li>Contributo pubblico (IAS 20: al Fair Value o valore nominale);</li><li>Permuta di attività (al Fair Value se ha sostanza commerciale);</li><li>Generazione interna (Ricerca & Sviluppo).</li></ul><p style='text-align:left; margin:6px 0;'>CASO IFRS 3: l'acquirente acquista dall'esterno e deve riconoscere al FAIR VALUE alla data di acquisizione tutti gli intangibili identificabili della target (marchi, brevetti, relazioni clienti) separandoli dall'Avviamento, anche se la target non poteva iscriverli perché generati internamente!</p></div>"
  },
  {
    "id": 59,
    "standard": "IAS 38 (ESERCIZIO RICERCA & SVILUPPO)",
    "module": "IAS 38",
    "tag": "ESERCIZIO RICERCA & SVILUPPO",
    "question": "Esercizio (Domanda 08.2): Un progetto comporta spese di Ricerca per €30.000, Sviluppo per €20.000 prima di soddisfare tutti i 6 criteri di capitalizzazione, e Sviluppo direttamente attribuibile per €50.000 dopo tale data. Quali importi si rilevano in SP e a Conto Economico?",
    "title": "Concetto Chiave: ESERCIZIO RICERCA & SVILUPPO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Attività Immateriale nello Stato Patrimoniale (SP): €50.000</li><li>Costi di periodo a Conto Economico (P&L): €50.000 (€30.000 ricerca + €20.000 sviluppo pre-criteri).</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Regola d'oro IAS 38 (§54, §57, §71):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>La Ricerca va SEMPRE a P&L;</li><li>Lo Sviluppo si capitalizza SOLO dalla data in cui tutti i 6 criteri sono soddisfatti;</li><li>DIVIETO DI CAPITALIZZAZIONE RETROATTIVA: i €20.000 di sviluppo sostenuti prima del rispetto dei 6 criteri non possono mai più essere recuperati nell'attivo (Quesito 08.2).</li></ul></div>"
  },
  {
    "id": 60,
    "standard": "IAS 38 (6 CRITERI PIRATE & RISORSE FINANZIARIE)",
    "module": "IAS 38",
    "tag": "6 CRITERI PIRATE & RISORSE FINANZIARIE",
    "question": "La fattibilità tecnica di un progetto è dimostrata, ma la società non riesce a dimostrare la disponibilità di risorse finanziarie per completarlo (Domanda 08.3). Può capitalizzare i costi di sviluppo? Quali sono i 6 criteri PIRATE?",
    "title": "Concetto Chiave: 6 CRITERI PIRATE & RISORSE FINANZIARIE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>NO, non può capitalizzare: tutti i costi vanno a Conto Economico (Quesito 08.3).</p><p style='text-align:left; margin:6px 0; font-weight:600;'>I 6 CRITERI CUMULATIVI E TASSATIVI (acronimo PIRATE):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Fattibilità TECNICA del completamento;</li><li>INTENZIONE del management di completare il bene;</li><li>CAPACITÀ di utilizzare o vendere l'attività;</li><li>Dimostrazione dei BENEFICI economici futuri (mercato o utilità interna);</li><li>Disponibilità di RISORSE tecniche, finanziarie e di altro tipo adeguate per completare lo sviluppo;</li><li>Capacità di valutare ATTENDIBILMENTE il costo attribuibile.</li></ul></div>"
  },
  {
    "id": 61,
    "standard": "IAS 38 (DIVIETI CAPITALIZZAZIONE INTERNA)",
    "module": "IAS 38",
    "tag": "DIVIETI CAPITALIZZAZIONE INTERNA",
    "question": "Quali elementi generati internamente non possono MAI essere iscritti all'Attivo dello Stato Patrimoniale secondo lo IAS 38?",
    "title": "Concetto Chiave: DIVIETI CAPITALIZZAZIONE INTERNA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>Vige il DIVIETO ASSOLUTO di capitalizzazione interna per:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Avviamento generato internamente (Internally generated goodwill - §48);</li><li>Marchi, testate giornalistiche, titoli editoriali e liste clienti generati internamente (§63: non sono distinguibili dai costi generali di sviluppo dell'impresa nel suo complesso);</li><li>Spese di impianto e ampliamento (start-up costs);</li><li>Spese di formazione e addestramento del personale;</li><li>Spese di pubblicità, promozione e ricollocazione.</li></ul><p style='text-align:left; margin:6px 0;'>Vanno tutti spesati immediatamente a Conto Economico.</p></div>"
  },
  {
    "id": 62,
    "standard": "IAS 38 (VITA UTILE INDEFINITA)",
    "module": "IAS 38",
    "tag": "VITA UTILE INDEFINITA",
    "question": "Per un'attività immateriale a vita utile indefinita, quale combinazione di trattamenti contabili è obbligatoria secondo lo IAS 38 (Domanda 08.4)?",
    "title": "Concetto Chiave: VITA UTILE INDEFINITA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>NESSUN AMMORTAMENTO sistematico ('indefinita' significa assenza di un limite prevedibile al periodo di generazione dei flussi, NON 'infinita');</li><li>IMPAIRMENT TEST OBBLIGATORIO ALMENO ANNUALE (ex IAS 36) e ogni volta che vi siano indicatori di perdita;</li><li>RIESAME ANNUALE della qualifica di vita utile indefinita (Quesito 08.4).</li></ul><p style='text-align:left; margin:6px 0;'>Se al riesame annuale la vita diventa definita, il cambiamento si tratta come cambio di stima contabile prospettico (IAS 8) ed è un trigger event che obbliga a un impairment test immediato.</p></div>"
  },
  {
    "id": 63,
    "standard": "IAS 38 (REVALUATION MODEL & MERCATO ATTIVO)",
    "module": "IAS 38",
    "tag": "REVALUATION MODEL & MERCATO ATTIVO",
    "question": "Perché nello IAS 38 il Modello della Rideterminazione del Valore (Revaluation Model) è un'eccezione rarissima rispetto allo IAS 16?",
    "title": "Concetto Chiave: REVALUATION MODEL & MERCATO ATTIVO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>Perché lo IAS 38 (§75) consente il Revaluation Model SOLO se il Fair Value può essere determinato facendo riferimento a un MERCATO ATTIVO (Active Market), ossia un mercato in cui:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Gli elementi negoziati sono OMOGENEI;</li><li>Acquirenti e venditori disponibili si trovano in qualsiasi momento;</li><li>I prezzi sono pubblici.</li></ul><p style='text-align:left; margin:6px 0;'>Per marchi, brevetti, testate e software un mercato attivo NON PUÒ MAI ESISTERE per definizione (sono beni unici!). Esiste solo in casi rarissimi come quote di emissione CO2 (EEX) o licenze taxi/pesca omogenee.</p></div>"
  },
  {
    "id": 64,
    "standard": "IFRS 16 (DA IAS 17 AL MODELLO UNICO LOCATARIO)",
    "module": "IFRS 16",
    "tag": "DA IAS 17 AL MODELLO UNICO LOCATARIO",
    "question": "Qual è la ratio del passaggio dallo IAS 17 all'IFRS 16 per il locatario (Lessee) e quale differenza permane invece per il locatore (Lessor)?",
    "title": "Concetto Chiave: DA IAS 17 AL MODELLO UNICO LOCATARIO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LOCATARIO (Lessee - Modello Unico): sotto lo IAS 17 i leasing operativi non comparivano nello SP (off-balance sheet financing). L'IFRS 16 elimina per il locatario la distinzione tra leasing operativo e finanziario: ogni leasing (> 12m e non low-value) comporta l'iscrizione nello SP del Diritto d'Uso (ROU Asset) e della Passività per Leasing (Lease Liability).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LOCATORE (Lessor - Modello Duale): mantiene la distinzione tradizionale tra Leasing Finanziario (storna il bene e iscrive un credito pari all'investimento netto) e Leasing Operativo (mantiene il bene nello SP, lo ammortizza e rileva i canoni attivi a CE).</li></ul></div>"
  },
  {
    "id": 65,
    "standard": "IFRS 16 (DEFINIZIONE & CONTROLLO D'USO)",
    "module": "IFRS 16",
    "tag": "DEFINIZIONE & CONTROLLO D'USO",
    "question": "Un contratto dà accesso a un bene identificato (Domanda 09.1). Quale ulteriore condizione è essenziale secondo l'IFRS 16 per concludere che il contratto contiene un leasing?",
    "title": "Concetto Chiave: DEFINIZIONE & CONTROLLO D'USO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>Che il cliente CONTROLLI L'USO del bene identificato per l'intero periodo di utilizzo, ossia goda cumulativamente di due diritti (Quesito 09.1):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>BENEFIT ELEMENT: il diritto di ottenere sostanzialmente TUTTI I BENEFICI ECONOMICI derivanti dall'uso dell'attività;</li><li>POWER ELEMENT: il diritto di DIRIGERE L'UTILIZZO dell'attività (decidere 'come e per quale scopo' il bene viene impiegato).</li></ul><p style='text-align:left; margin:6px 0;'>Non serve il passaggio della proprietà legale né che il contratto copra l'intera vita economica del bene.</p></div>"
  },
  {
    "id": 66,
    "standard": "IFRS 16 (DIRITTO DI SOSTITUZIONE (CASO RESORT VAN))",
    "module": "IFRS 16",
    "tag": "DIRITTO DI SOSTITUZIONE (CASO RESORT VAN)",
    "question": "Caso Resort Grand Blue: un hotel noleggia per 3 anni 5 van elettrici, ma il fornitore può sostituirli in qualsiasi momento con altri veicoli del proprio parco mezzi traendone vantaggio logistico. È un leasing ex IFRS 16?",
    "title": "Concetto Chiave: DIRITTO DI SOSTITUZIONE (CASO RESORT VAN)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>NO, è un CONTRATTO DI PRESTAZIONE DI SERVIZI (canoni spesati a Conto Economico).</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Secondo l'IFRS 16 (§B14), non esiste un 'bene identificato' se il fornitore possiede un DIRITTO SOSTANZIALE DI SOSTITUZIONE, che si verifica quando:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Il fornitore ha la capacità pratica di sostituire il bene durante l'intero periodo d'uso senza chiedere il consenso del cliente; E</li><li>Il fornitore trarrebbe un beneficio economico dall'esercizio di tale sostituzione.</li></ul><p style='text-align:left; margin:6px 0;'>Nota: la sostituzione solo per guasto/manutenzione ordinaria NON è un diritto sostanziale!</p></div>"
  },
  {
    "id": 67,
    "standard": "IFRS 16 (ESERCIZIO ROU ASSET & DEBITO INIZIALE)",
    "module": "IFRS 16",
    "tag": "ESERCIZIO ROU ASSET & DEBITO INIZIALE",
    "question": "Esercizio (Domanda 09.2): Alla decorrenza di un leasing: Valore Attuale pagamenti ancora dovuti = €90.000; Pagamento versato alla decorrenza = €6.000; Costi diretti iniziali = €4.000; Incentivi ricevuti dal locatore = €2.000. Quali sono Diritto d'Uso (ROU) e Debito iniziali?",
    "title": "Concetto Chiave: ESERCIZIO ROU ASSET & DEBITO INIZIALE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Debito di Leasing iniziale (Lease Liability): €90.000</li><li>Diritto d'Uso iniziale (ROU Asset): €98.000 (Quesito 09.2).</li></ul><p style='text-align:left; margin:6px 0;'>Formula del costo iniziale del ROU Asset:<br>ROU = Lease Liability (€90.000) + Pagamenti anticipati alla decorrenza (€6.000) + Costi diretti iniziali (€4.000) - Incentivi ricevuti (€2.000) = €98.000.</p><p style='text-align:left; margin:6px 0;'>Il debito è pari ai soli €90.000 perché i €6.000 sono già stati pagati per cassa al tempo t = 0.</p></div>"
  },
  {
    "id": 68,
    "standard": "IFRS 16 (CASO BETA S.P.A. (ROU CON SMANTELLAMENTO IAS 37))",
    "module": "IFRS 16",
    "tag": "CASO BETA S.P.A. (ROU CON SMANTELLAMENTO IAS 37)",
    "question": "Caso Beta S.p.A.: VA dei canoni futuri €150.000, maxicanone pagato alla firma €15.000, commissioni legali dirette €5.000, incentivo rimborso dal locatore €5.000 e stima attuale degli oneri di smantellamento a fine contratto (IAS 37) €12.000. Quali sono ROU e Passività?",
    "title": "Concetto Chiave: CASO BETA S.P.A. (ROU CON SMANTELLAMENTO IAS 37)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Passività per Leasing iniziale (Lease Liability): €150.000</li><li>Diritto d'Uso iniziale (ROU Asset): €177.000.</li></ul><p style='text-align:left; margin:6px 0;'>Calcolo analitico del ROU Asset:<br>€150.000 (Lease Liability) + €15.000 (maxicanone anticipato) + €5.000 (costi diretti) - €5.000 (incentivo locatore) + €12.000 (Fondo smantellamento e ripristino IAS 37) = €177.000.</p><p style='text-align:left; margin:6px 0;'>I €12.000 di smantellamento hanno come contropartita un Fondo Rischi e Oneri ex IAS 37 (non la Lease Liability!).</p></div>"
  },
  {
    "id": 69,
    "standard": "IFRS 16 (LEASE LIABILITY & TASSI DI SCONTO)",
    "module": "IFRS 16",
    "tag": "LEASE LIABILITY & TASSI DI SCONTO",
    "question": "Quali pagamenti entrano nel calcolo della Lease Liability iniziale, quali restano esclusi e quale tasso di attualizzazione si utilizza?",
    "title": "Concetto Chiave: LEASE LIABILITY & TASSI DI SCONTO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>ENTRANO NEL VALORE ATTUALE DEL DEBITO:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Canoni fissi (al netto di incentivi da ricevere);</li><li>Canoni variabili che dipendono da un INDICE o TASSO (es. ISTAT, EURIBOR);</li><li>Importi attesi per garanzie sul valore residuo;</li><li>Prezzo dell'opzione di acquisto (riscatto) se c'è ragionevole certezza di esercizio;</li><li>Penali di risoluzione anticipata (se la durata riflette il recesso).</li></ul><p style='text-align:left; margin:6px 0;'>ESCLUSI (vanno a CE): canoni variabili legati a fatturato o km percorsi.</p><p style='text-align:left; margin:6px 0;'>TASSO DI SCONTO: Tasso di interesse implicito del leasing (IRR); se non determinabile, Tasso di finanziamento marginale del locatario (IBR).</p></div>"
  },
  {
    "id": 70,
    "standard": "IFRS 16 (ESERCIZIO SCRITTURA CANONE & INTERESSI)",
    "module": "IFRS 16",
    "tag": "ESERCIZIO SCRITTURA CANONE & INTERESSI",
    "question": "Esercizio (Domanda 09.3): Debito di leasing all'1/1 = €100.000, tasso annuo = 5%, canone pagato a fine anno = €25.000. Quale scrittura contabile registra il pagamento del canone e l'interesse annuo?",
    "title": "Concetto Chiave: ESERCIZIO SCRITTURA CANONE & INTERESSI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>Scrittura in Partita Doppia (Quesito 09.3):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Dare Interessi passivi su leasing (CE): €5.000</li><li>Dare Debito per leasing (SP): €20.000</li><li>Avere Banca c/c (SP): €25.000</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Calcolo:<br>A fine anno si rileva inoltre la quota di ammortamento del ROU Asset a CE.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Interesse di competenza = €100.000 × 5% = €5.000 (onere finanziario a CE);</li><li>Quota capitale rimborsata = €25.000 - €5.000 = €20.000 (riduce il debito residuo nello SP a €80.000).</li></ul></div>"
  },
  {
    "id": 71,
    "standard": "IFRS 16 (IMPATTO SUI KPI & FRONT-LOADING)",
    "module": "IFRS 16",
    "tag": "IMPATTO SUI KPI & FRONT-LOADING",
    "question": "Qual è l'impatto dell'IFRS 16 su EBITDA, EBIT, Posizione Finanziaria Netta (PFN) e Utile Netto nei primi anni del contratto (effetto Front-Loading)?",
    "title": "Concetto Chiave: IMPATTO SUI KPI & FRONT-LOADING",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>EBITDA: AUMENTA significativamente (scompaiono i canoni di locazione operativi dal calcolo dell'EBITDA);</li><li>EBIT: aumenta leggermente (sostituisce l'intero canone con il solo ammortamento del ROU, scorporando gli interessi);</li><li>PFN / Indebitamento Finanziario: PEGGIORA (aumenta per l'iscrizione della Lease Liability al passivo);</li><li>EFFETTO FRONT-LOADING SULL'UTILE NETTO: nei primi anni del leasing il costo totale a CE (Ammortamento costante del ROU + Interessi passivi calcolati su un debito ancora alto) è MAGGIORE rispetto al vecchio canone lineare IAS 17, riducendo l'utile netto iniziale.</li></ul></div>"
  },
  {
    "id": 72,
    "standard": "IFRS 16 (ESENZIONI LOCATARIO (SHORT-TERM & LOW-VALUE))",
    "module": "IFRS 16",
    "tag": "ESENZIONI LOCATARIO (SHORT-TERM & LOW-VALUE)",
    "question": "Un leasing del locatario ha durata di 12 mesi e non contiene un'opzione di acquisto (Domanda 09.4). Quale regola disciplina le 2 esenzioni per il locatario nell'IFRS 16?",
    "title": "Concetto Chiave: ESENZIONI LOCATARIO (SHORT-TERM & LOW-VALUE)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Sono ESENZIONI FACOLTATIVE (scelte di politica contabile del locatario, non obblighi! - Quesito 09.4):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>SHORT-TERM LEASES: durata ≤ 12 mesi e senza opzione di acquisto (la scelta va applicata per classe omogenea di attività sottostante);</li><li>LOW-VALUE ASSETS: beni di modico valore quando NUOVI (soglia indicativa IASB ≤ $5.000 USD, es. tablet, PC, stampanti, telefoni), anche se noleggiati in grandi quantità (scelta applicabile contratto per contratto).</li></ul><p style='text-align:left; margin:6px 0;'>Se esercitata l'esenzione: non si iscrivono né ROU né Debito e i canoni vanno a CE a quote costanti.</p></div>"
  },
  {
    "id": 73,
    "standard": "Criptovalute (ORIGINI & 3 CRITICITÀ CONTABILI)",
    "module": "Criptovalute",
    "tag": "ORIGINI & 3 CRITICITÀ CONTABILI",
    "question": "Secondo le slide d'aula (Lezione Crypto Assets), da dove nasce il fenomeno Bitcoin e quali sono i 3 ostacoli strutturali che rendono complessa la contabilizzazione dei crypto-assets?",
    "title": "Concetto Chiave: ORIGINI & 3 CRITICITÀ CONTABILI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>ORIGINE: White Paper di Satoshi Nakamoto (31 ottobre 2008) e blocco genesi sulla rete peer-to-peer (3 gennaio 2009), con oltre 899 milioni di transazioni storiche validate.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LE 3 CRITICITÀ CONTABILI:</li><li>NOMENCLATURA E CLASSIFICAZIONE: assenza di una tassonomia univoca (payment token, utility token, security token, stablecoin, NFT);</li><li>INCERTEZZA GIURIDICA: assenza di status di corso legale (legal tender) nella maggior parte degli ordinamenti;</li><li>ACCOUNTABILITY E CUSTODIA: pseudonimato degli indirizzi DLT, rischio di perdita irreversibile delle chiavi private e separazione patrimoniale presso gli exchange.</li></ul></div>"
  },
  {
    "id": 74,
    "standard": "Criptovalute (DEFINIZIONI UFFICIALI BCE ED EFRAG)",
    "module": "Criptovalute",
    "tag": "DEFINIZIONI UFFICIALI BCE ED EFRAG",
    "question": "Quali sono le definizioni ufficiali di Crypto-Asset formulate dalla Crypto-Assets Task Force della BCE e dall'EFRAG nelle slide del corso?",
    "title": "Concetto Chiave: DEFINIZIONI UFFICIALI BCE ED EFRAG",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DEFINIZIONE BCE (Crypto-Assets Task Force): 'Un nuovo tipo di attività registrata in forma digitale e abilitata dall'uso della crittografia che NON È e NON RAPPRESENTA un diritto finanziario (financial claim) su, o una passività di, alcuna entità identificabile'.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DEFINIZIONE EFRAG: 'Una rappresentazione digitale di valore o di diritti che può essere trasferita e memorizzata elettronicamente utilizzando la tecnologia a registro distribuito (DLT / Blockchain) o tecnologia analoga'.</li></ul><p style='text-align:left; margin:6px 0;'>L'assenza di una controparte debitrice obbligata è la chiave che esclude lo IAS 32 / IFRS 9 per le criptovalute native come Bitcoin!</p></div>"
  },
  {
    "id": 75,
    "standard": "Criptovalute (NON È CASSA NÉ DEPOSITO BANCARIO)",
    "module": "Criptovalute",
    "tag": "NON È CASSA NÉ DEPOSITO BANCARIO",
    "question": "La tesoreria propone di considerare Bitcoin equivalenti a un deposito bancario o a disponibilità liquide perché possono essere venduti su una piattaforma online (Domanda 10.2). Qual è l'obiezione più fondata?",
    "title": "Concetto Chiave: NON È CASSA NÉ DEPOSITO BANCARIO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>La negoziabilità su una piattaforma NON garantisce un importo monetario stabile né equivale a un diritto di credito verso una banca (Quesito 10.2).</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>NON è Moneta (Cash): non ha corso legale forzoso né funge da unità di conto universale;</li><li>NON è Cash Equivalent (IAS 7): è soggetto a un'elevatissima volatilità di prezzo (viola il requisito del 'rischio irrilevante di variazione del valore');</li><li>NON è Attività Finanziaria (IAS 32): non attribuisce alcun diritto contrattuale a ricevere disponibilità liquide da un emittente o da una banca.</li></ul></div>"
  },
  {
    "id": 76,
    "standard": "Criptovalute (ALBERO DECISIONALE IFRS (I 4 CASI))",
    "module": "Criptovalute",
    "tag": "ALBERO DECISIONALE IFRS (I 4 CASI)",
    "question": "Due imprese detengono crypto-assets con finalità diverse (Domanda 10.1). Illustra l'albero decisionale completo IFRS (i 4 casi in base al Business Model e alla natura del token).",
    "title": "Concetto Chiave: ALBERO DECISIONALE IFRS (I 4 CASI)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Il trattamento dipende dallo SCOPO DELLA DETENZIONE (Business Model) e dai diritti del token (Quesito 10.1):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DETENZIONE PER INVESTIMENTO / MEDIO-LUNGO TERMINE -> IAS 38: Attività immateriale a vita utile indefinita (Cost Model o, se esiste mercato attivo, Revaluation Model a OCI);</li><li>DETENZIONE PER LA VENDITA NEL NORMALE SVOLGIMENTO DELL'ATTIVITÀ -> IAS 2 (Rimanenze ordinarie): valutate al minore tra Costo (FIFO/CMP) e Valore Netto di Realizzo (NRV);</li><li>INTERMEDIARIO / COMMODITY BROKER-TRADER -> IAS 2 §3(b): valutate al Fair Value less Costs to Sell con variazioni direttamente a Conto Economico (FVTPL);</li><li>SECURITY TOKEN / ASSET-BACKED TOKEN (con diritto contrattuale a flussi di cassa o equity) -> IFRS 9: Test SPPI (Costo Ammortizzato, FVTOCI o FVTPL).</li></ul></div>"
  },
  {
    "id": 77,
    "standard": "Criptovalute (VARIAZIONI DI PREZZO & CONTO ECONOMICO)",
    "module": "Criptovalute",
    "tag": "VARIAZIONI DI PREZZO & CONTO ECONOMICO",
    "question": "Il prezzo di mercato dei Bitcoin detenuti da un'impresa aumenta rispetto all'acquisto (Domanda 10.3). Prima di concludere che l'aumento sia un utile da rilevare a Conto Economico, cosa occorre verificare?",
    "title": "Concetto Chiave: VARIAZIONI DI PREZZO & CONTO ECONOMICO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Occorre conoscere il CRITERIO CONTABILE APPLICABILE e le condizioni per rilevare la variazione (Quesito 10.3):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Sotto IAS 38 Cost Model: l'aumento di prezzo NON si rileva affatto in bilancio (tetto del costo storico);</li><li>Sotto IAS 38 Revaluation Model (solo in presenza di mercato attivo): l'aumento oltre il costo storico va a Riserva di Rivalutazione in OCI (Patrimonio Netto) senza mai transitare per il Conto Economico (P&L);</li><li>Sotto IAS 2 ordinario: nessun utile sopra il costo finché non avviene la vendita;</li><li>SOLO per un Broker-Trader (IAS 2 §3b) o sotto gli US GAAP (FASB Subtopic 350-60) l'aumento di fair value transita direttamente a Conto Economico (P&L)!</li></ul></div>"
  },
  {
    "id": 78,
    "standard": "Criptovalute (SVOLTA USA: FASB SUBTOPIC 350-60 VS IASB)",
    "module": "Criptovalute",
    "tag": "SVOLTA USA: FASB SUBTOPIC 350-60 VS IASB",
    "question": "Qual è la svolta storica introdotta negli USA dal FASB con l'ASU 2023-08 (Subtopic 350-60) rispetto al modello IASB / IFRIC 2019?",
    "title": "Concetto Chiave: SVOLTA USA: FASB SUBTOPIC 350-60 VS IASB",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>IL LIMITE DEL MODELLO STORICO: valutare le crypto al costo meno impairment irreversibile creava una forte asimmetria informativa (registrava subito i crolli a CE ma ignorava le successive risalite di mercato).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LA RIFORMA FASB (Subtopic 350-60, dic. 2023): per i crypto-assets fungibili (es. BTC, ETH) impone obbligatoriamente:</li><li>Valutazione al FAIR VALUE ad ogni chiusura con tutte le variazioni (utili e perdite non realizzati) imputate DIRETTAMENTE A CONTO ECONOMICO (Net Income - FVTPL), NON ad OCI!</li><li>Esposizione in una VOCE SEPARATA dello Stato Patrimoniale ('Digital Assets'), distinta dagli altri intangibili.</li></ul></div>"
  },
  {
    "id": 79,
    "standard": "Criptovalute (CASO NUMERICO 1.500 BITCOIN (COST MODEL VS FASB))",
    "module": "Criptovalute",
    "tag": "CASO NUMERICO 1.500 BITCOIN (COST MODEL VS FASB)",
    "question": "Caso d'aula: una società acquista 1.500 Bitcoin a $60.000 ciascuno ($90M). A fine Anno 1 BTC sale a $64.000 ($96M); nell'Anno 2 tocca un minimo di $45.333 ($68M); nell'Anno 3 vende tutto. Quali valori espone nello SP sotto il Cost Model con Impairment vs FASB FVTPL?",
    "title": "Concetto Chiave: CASO NUMERICO 1.500 BITCOIN (COST MODEL VS FASB)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>SOTTO IL COST MODEL CON IMPAIRMENT (esempio slide):</li><li>Anno 1: il rialzo a $96M è ignorato -> resta iscritto al costo di $90.000.000;</li><li>Anno 2: il calo a $68M obbliga a rilevare un Impairment Loss di -$22.000.000 a CE -> nuovo valore nello SP = $68.000.000;</li><li>Anno 3: vendita totale dei 1.500 BTC -> saldo finale nello SP = $0.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>SOTTO IL NUOVO FASB SUBTOPIC 350-60 (FVTPL):</li><li>Anno 1: iscritto a $96.000.000 con utile non realizzato di +$6M a Net Income;</li><li>Anno 2: riflette il Fair Value puntuale di fine anno con variazione a Net Income.</li></ul></div>"
  },
  {
    "id": 80,
    "standard": "Criptovalute (REGOLAMENTAZIONE UE: MiCA, DORA & DLT REGIME)",
    "module": "Criptovalute",
    "tag": "REGOLAMENTAZIONE UE: MiCA, DORA & DLT REGIME",
    "question": "Quali sono i 3 pilastri del Digital Finance Package europeo (2020) illustrati a lezione (MiCA, DORA e DLT Pilot Regime)?",
    "title": "Concetto Chiave: REGOLAMENTAZIONE UE: MiCA, DORA & DLT REGIME",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>MiCA (Markets in Crypto-Assets Regulation - Reg. UE 2023/1114): disciplina gli emittenti e i fornitori di servizi (CASP / Exchange) su tre categorie:</li><li>ART (Asset-Referenced Tokens, ancorati a panieri di valute/commodity);</li><li>EMT (E-Money Tokens, ancorati a una singola valuta fiat);</li><li>Utility Tokens e altri crypto-assets (con obbligo di White Paper).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DORA (Digital Operational Resilience Act - Reg. UE 2022/2554): impone standard di sicurezza informatica, gestione del rischio ICT/cyber e controllo dei fornitori cloud/tecnologici.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DLT PILOT REGIME (Reg. UE 2022/858): sandbox per negoziare e regolare Security Token (strumenti finanziari MiFID II) su infrastrutture blockchain.</li></ul></div>"
  },
  {
    "id": 81,
    "standard": "Criptovalute (RACCOMANDAZIONI FSB (LUGLIO 2023))",
    "module": "Criptovalute",
    "tag": "RACCOMANDAZIONI FSB (LUGLIO 2023)",
    "question": "Qual è il principio guida e quali sono le 2 serie di raccomandazioni emanate dal Financial Stability Board (FSB) nel luglio 2023?",
    "title": "Concetto Chiave: RACCOMANDAZIONI FSB (LUGLIO 2023)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>PRINCIPIO CARDINE: 'Same activity, same risk, same regulation' (stessa attività, stesso rischio, stessa regolamentazione tra finanza tradizionale e cripto-finanza).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LE 2 SERIE DI RACCOMANDAZIONI FSB (Luglio 2023):</li><li>High-level recommendations per le attività e i mercati dei Crypto-Assets: segregazione patrimoniale degli asset dei clienti, divieto di commistione di funzioni in conflitto di interessi e cooperazione transfrontaliera;</li><li>High-level recommendations per le GLOBAL STABLECOIN (GSC): obbligo di riserve liquide 1:1 ad altissima qualità, diritto di rimborso tempestivo al valore nominale e divieto di stablecoin algoritmiche pure.</li></ul></div>"
  },
  {
    "id": 82,
    "standard": "IAS 36 (AMBITO, TRIGGER EVENTS & 3 ECCEZIONI ANNUALI)",
    "module": "IAS 36",
    "tag": "AMBITO, TRIGGER EVENTS & 3 ECCEZIONI ANNUALI",
    "question": "Quando scatta l'obbligo di effettuare l'Impairment Test secondo lo IAS 36 e quali sono le 3 categorie di attività che devono essere testate obbligatoriamente OGNI ANNO anche senza indicatori?",
    "title": "Concetto Chiave: AMBITO, TRIGGER EVENTS & 3 ECCEZIONI ANNUALI",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>REGOLA GENERALE (Impairment su Trigger Event): a fine esercizio si verifica se esistono indicatori ESTERNI (crollo prezzi mercato, rialzo tassi di interesse/WACC, valore di borsa < Patrimonio Netto contabile) o INTERNI (obsolescenza/danni fisici, ristrutturazioni, performance economiche inferiori ai budget). Se c'è anche un solo indicatore, si calcola il Valore Recuperabile.</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>LE 3 ECCEZIONI CON TEST ANNUALE OBBLIGATORIO (anche senza trigger events):</li><li>Avviamento (Goodwill) acquisito in una Business Combination (IFRS 3);</li><li>Attività immateriali a vita utile INDEFINITA (IAS 38);</li><li>Attività immateriali NON ANCORA DISPONIBILI ALL'USO (progetti di Sviluppo in corso).</li></ul></div>"
  },
  {
    "id": 83,
    "standard": "IAS 36 (ESERCIZIO DETERMINAZIONE PERDITA)",
    "module": "IAS 36",
    "tag": "ESERCIZIO DETERMINAZIONE PERDITA",
    "question": "Esercizio (Domanda 11.1): Un impianto ha valore contabile €200.000, Fair Value €175.000, costi di dismissione €5.000 e Valore d'Uso €180.000. Quale perdita di valore occorre rilevare secondo IAS 36?",
    "title": "Concetto Chiave: ESERCIZIO DETERMINAZIONE PERDITA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Perdita di valore (Impairment Loss) = €20.000 a Conto Economico (Quesito 11.1).</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Passaggi di calcolo:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Fair Value less Costs of Disposal = €175.000 - €5.000 = €170.000;</li><li>Valore Recuperabile = max(Fair Value netto €170.000 ; Value in Use €180.000) = €180.000;</li><li>Impairment Loss = Valore Contabile (€200.000) - Valore Recuperabile (€180.000) = €20.000.</li></ul><p style='text-align:left; margin:6px 0;'>Regola importante: basta che UNO SOLO tra Fair Value netto e Valore d'Uso superi il Valore Contabile perché il bene non sia svalutato!</p></div>"
  },
  {
    "id": 84,
    "standard": "IAS 36 (VALUE IN USE & REGOLE FLUSSI 'AS-IS')",
    "module": "IAS 36",
    "tag": "VALUE IN USE & REGOLE FLUSSI 'AS-IS'",
    "question": "Quali sono le regole per la stima dei flussi di cassa nel calcolo del Valore d'Uso (Value in Use) e quali elementi devono essere RIGOROSAMENTE ESCLUSI?",
    "title": "Concetto Chiave: VALUE IN USE & REGOLE FLUSSI 'AS-IS'",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>ORIZZONTE: proiezioni approvate dal management per massimo 5 anni + Terminal Value con tasso di crescita g costante o decrescente (non superiore alla crescita di lungo periodo del settore/Paese).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>REGOLA DELLO STATO ATTUALE ('AS-IS CONDITION') — ESCLUSIONI TASSATIVE:</li><li>Flussi da RISTRUTTURAZIONI FUTURE per le quali l'impresa non ha ancora assunto un impegno formale ex IAS 37;</li><li>Flussi da INVESTIMENTI FUTURI DI MIGLIORAMENTO o potenziamento (sono ammesse solo le spese di manutenzione ordinaria per mantenere l'efficienza attuale);</li><li>Flussi della GESTIONE FINANZIARIA (interessi/rimborsi);</li><li>Flussi per IMPOSTE SUL REDDITO (si usano flussi operativi al lordo delle imposte).</li></ul></div>"
  },
  {
    "id": 85,
    "standard": "IAS 36 (CASO D'AULA LISTA CLIENTI (VIU & IAS 38))",
    "module": "IAS 36",
    "tag": "CASO D'AULA LISTA CLIENTI (VIU & IAS 38)",
    "question": "Caso d'aula (Value in use.pdf): Una società acquista una lista clienti con 1.000 indirizzi. Nel tempo 500 clienti vengono cancellati e la società aggiunge internamente 800 nuovi clienti (totale attuale: 1.300). Su quanti clienti va calcolato il Value in Use?",
    "title": "Concetto Chiave: CASO D'AULA LISTA CLIENTI (VIU & IAS 38)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Il Value in Use va calcolato ESCLUSIVAMENTE SUI 500 CLIENTI ORIGINARI RESIDUI!</p><p style='text-align:left; margin:6px 0; font-weight:600;'>Motivazione contabile fondamentale:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Secondo lo IAS 38 (§63), le liste clienti generate internamente NON possono mai essere rilevate come attività immateriali;</li><li>Di conseguenza, i flussi di cassa generati dagli 800 nuovi clienti acquisiti internamente rappresentano ricchezza generata internamente che NON può compensare la perdita di valore dell'asset originariamente acquistato;</li><li>Il test di impairment verifica solo il recupero del bene originario nello stato attuale (i 500 clienti rimasti della lista comprata).</li></ul></div>"
  },
  {
    "id": 86,
    "standard": "IAS 36 (TASSO WACC PRE-TAX & 2 ERRORI DA EVITARE)",
    "module": "IAS 36",
    "tag": "TASSO WACC PRE-TAX & 2 ERRORI DA EVITARE",
    "question": "Quali caratteristiche deve avere il tasso di attualizzazione (WACC) nello IAS 36, qual è la sua formula e quali sono i 2 errori metodologici da evitare secondo le slide?",
    "title": "Concetto Chiave: TASSO WACC PRE-TAX & 2 ERRORI DA EVITARE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>CARATTERISTICHE: deve essere un tasso al LORDO DELLE IMPOSTE (Pre-Tax Rate) che riflette il valore temporale del denaro e i rischi specifici dell'attività. È INDIPENDENTE dalla struttura finanziaria (rapporto D/E) specifica dell'impresa.</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>WACC = Ke × [E / (D + E)] + Kd × [D / (D + E)]<br>(con Ke = Rf + Beta × ERP calcolato col CAPM).</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>FORMULA WACC:</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>I 2 ERRORI DA EVITARE (No Double Counting):</li><li>NON DUPLICARE I RISCHI: se i flussi futuri sono già stati ridotti per tenere conto del rischio, il tasso non va maggiorato per lo stesso rischio;</li><li>NON SOTTOVALUTARE I RISCHI: non usare un tasso privo di rischio su flussi nominali ottimistici.</li></ul></div>"
  },
  {
    "id": 87,
    "standard": "IAS 36 (CGU & CASO FERROVIA PRIVATA / MINIERA)",
    "module": "IAS 36",
    "tag": "CGU & CASO FERROVIA PRIVATA / MINIERA",
    "question": "Come si definisce una Cash-Generating Unit (Domanda 11.3) e come si applica al caso d'aula della Ferrovia Privata a servizio di una Miniera?",
    "title": "Concetto Chiave: CGU & CASO FERROVIA PRIVATA / MINIERA",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>DEFINIZIONE CGU (Quesito 11.3): il più piccolo gruppo identificabile di attività che genera flussi finanziari in entrata AMPIAMENTE INDIPENDENTI dai flussi generati da altre attività.</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Un'impresa mineraria possiede una ferrovia privata utilizzata esclusivamente per trasportare il minerale estratto dalla propria miniera.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>CASO FERROVIA PRIVATA E MINIERA (slide d'aula):</li><li>La ferrovia da sola NON genera flussi di cassa in entrata indipendenti e il suo Fair Value autonomo coincide solo col valore di rottame;</li><li>Pertanto, non si può calcolare il Value in Use della sola ferrovia: l'impairment test deve essere eseguito a livello dell'intera CGU MINIERA.</li></ul></div>"
  },
  {
    "id": 88,
    "standard": "IAS 36 (ESERCIZIO 1 D'AULA: ALLOCAZIONE SEDE CENTRALE)",
    "module": "IAS 36",
    "tag": "ESERCIZIO 1 D'AULA: ALLOCAZIONE SEDE CENTRALE",
    "question": "Esercizio 1 d'aula (Corporate Assets): Sede Centrale = 150. Tre CGU: CGU A (VC 100, vita utile 10 anni), CGU B (VC 150, vita 20 anni), CGU C (VC 200, vita 20 anni). Come si alloca la Sede Centrale con ponderazione per vita utile?",
    "title": "Concetto Chiave: ESERCIZIO 1 D'AULA: ALLOCAZIONE SEDE CENTRALE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Pesi per vita utile residua: CGU A (10a) = peso 1; CGU B (20a) = peso 2; CGU C (20a) = peso 2.</li><li>Valori contabili ponderati:</li><li>CGU A: 100 × 1 = 100 (12,5%)</li><li>CGU B: 150 × 2 = 300 (37,5%)</li><li>CGU C: 200 × 2 = 400 (50,0%)</li><li>Totale ponderato = 800.</li><li>Allocazione della Sede Centrale (150) e nuovi valori contabili da testare:</li><li>CGU A: +18,75 -> Nuovo VC = 118,75</li><li>CGU B: +56,25 -> Nuovo VC = 206,25</li><li>CGU C: +75,00 -> Nuovo VC = 275,00 (Totale = 600).</li></ul></div>"
  },
  {
    "id": 89,
    "standard": "IAS 36 (CASO CENTRO RICERCA (BOTTOM-UP + TOP-DOWN))",
    "module": "IAS 36",
    "tag": "CASO CENTRO RICERCA (BOTTOM-UP + TOP-DOWN)",
    "question": "Caso d'aula (Corporate Asset NON allocabile): Divisione X composta da BU A (VC 100, RA 120), BU B (VC 150, RA 115) e Centro di Ricerca non allocabile (VC 70). Il Valore Recuperabile dell'intera Divisione X è 235. Come si svolge il doppio test?",
    "title": "Concetto Chiave: CASO CENTRO RICERCA (BOTTOM-UP + TOP-DOWN)",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Quando un Corporate Asset (Centro di Ricerca = 70) NON è allocabile su base ragionevole, si applica il test a due livelli:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>FASE 1 — TEST BOTTOM-UP (sulle singole BU senza il Centro di Ricerca):</li><li>BU A: VC 100 < RA 120 -> nessuna svalutazione;</li><li>BU B: VC 150 > RA 115 -> Svalutazione immediata di 35 su BU B (il cui VC scende a 115).</li></ul><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>FASE 2 — TEST TOP-DOWN (sull'intera Divisione X inclusa il Centro di Ricerca):</li><li>Nuovo VC aggregato Divisione X = 100 (BU A) + 115 (BU B post-svalutazione) + 70 (Centro Ricerca) = 285;</li><li>Confronto con RA Divisione X (235): 285 - 235 = ulteriore perdita di valore di 50 da ripartire pro-rata!</li></ul></div>"
  },
  {
    "id": 90,
    "standard": "IAS 36 (ESERCIZIO 2 D'AULA: SVALUTAZIONE CGU BETA S.P.A.)",
    "module": "IAS 36",
    "tag": "ESERCIZIO 2 D'AULA: SVALUTAZIONE CGU BETA S.P.A.",
    "question": "Esercizio 2 d'aula (CGU Beta S.p.A.): Fabbricato 30.000, Impianti 20.000, Avviamento 14.000, Rimanenze 10.000 (VC netto = 64.000). Il Valore d'Uso della CGU è 40.000. Come si alloca la perdita di 24.000 e quali sono i nuovi valori in bilancio?",
    "title": "Concetto Chiave: ESERCIZIO 2 D'AULA: SVALUTAZIONE CGU BETA S.P.A.",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Perdita totale della CGU = 64.000 - 40.000 = 24.000.</p><p style='text-align:left; margin:6px 0; font-weight:600;'>1° LIVELLO — AZZERAMENTO AVVIAMENTO:</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>L'Avviamento (14.000) assorbe i primi 14.000 di perdita -> nuovo valore Avviamento = 0.</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>2° LIVELLO — RIPARTO PRO-RATA DELLA PERDITA RESIDUA (10.000):</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>ATTENZIONE AL TRABOCCHETTO: le Rimanenze di magazzino (10.000) sono disciplinate dallo IAS 2 e sono ESCLUSE dalla svalutazione IAS 36!</li><li>Base di riparto = Fabbricato (30.000, pari al 60%) + Impianti (20.000, pari al 40%) = 50.000:</li><li>Svalutazione Fabbricato (60% di 10.000) = -6.000 -> nuovo valore = 24.000;</li><li>Svalutazione Impianti (40% di 10.000) = -4.000 -> nuovo valore = 16.000;</li><li>Rimanenze = 10.000 (invariate).</li></ul></div>"
  },
  {
    "id": 91,
    "standard": "IAS 36 (DIVIETO RIPRISTINO GOODWILL)",
    "module": "IAS 36",
    "tag": "DIVIETO RIPRISTINO GOODWILL",
    "question": "Un miglioramento delle prospettive porta a riesaminare una CGU dopo una svalutazione dell'avviamento rilevata l'anno precedente (Domanda 11.4). Che cosa accade alla perdita già imputata all'avviamento?",
    "title": "Concetto Chiave: DIVIETO RIPRISTINO GOODWILL",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>NON SI RIPRISTINA MAI, anche se il valore recuperabile della CGU è aumentato (Quesito 11.4).</p><p style='text-align:left; margin:6px 0;'>Lo IAS 36 (§124) vieta categoricamente il ripristino di valore dell'avviamento (Goodwill) in esercizi successivi.</p><p style='text-align:left; margin:6px 0;'>Ratio: qualsiasi incremento del valore recuperabile della CGU nei periodi successivi alla svalutazione costituisce di fatto un aumento di avviamento generato internamente, la cui iscrizione è tassativamente vietata dallo IAS 38.</p></div>"
  },
  {
    "id": 92,
    "standard": "IAS 36 (ESERCIZIO RIPRISTINO MASSIMO & CEILING)",
    "module": "IAS 36",
    "tag": "ESERCIZIO RIPRISTINO MASSIMO & CEILING",
    "question": "Esercizio (Domanda 11.2): Un'attività valutata al costo (diversa dall'avviamento) ha valore contabile €64.000 dopo una precedente svalutazione. Il valore recuperabile sale a €95.000. Senza la svalutazione, il valore netto ammortizzato alla stessa data sarebbe €84.000. Qual è il ripristino massimo?",
    "title": "Concetto Chiave: ESERCIZIO RIPRISTINO MASSIMO & CEILING",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0;'>Ripristino massimo rilevabile a Conto Economico = €20.000 (Quesito 11.2).</p><p style='text-align:left; margin:6px 0;'>Regola del Tetto Massimo (Ceiling Rule - IAS 36 §117):<br>Il valore contabile aumentato a seguito di un ripristino di valore NON può mai superare il valore contabile (al netto degli ammortamenti storici) che l'attività avrebbe avuto se non fosse mai stata rilevata alcuna svalutazione negli anni precedenti (€84.000).</p><p style='text-align:left; margin:6px 0;'>Pertanto: €84.000 (Ceiling storico) - €64.000 (VC attuale) = €20.000. L'eccedenza fino a €95.000 non può essere rilevata (salvo adozione del Revaluation Model).</p></div>"
  },
  {
    "id": 93,
    "standard": "IAS 36 (CASO D'AULA RIPRISTINO E ADEGUAMENTO FONDO AMM.TO)",
    "module": "IAS 36",
    "tag": "CASO D'AULA RIPRISTINO E ADEGUAMENTO FONDO AMM.TO",
    "question": "Caso d'aula (Value in use.pdf): Immobile acquistato a 2.000 (vita 20 anni, quota 100). A fine Anno 3 (VNC 1.700) viene svalutato di 200 (scende a 1.500, nuova quota 88,24 su 17 anni). A fine Anno 5 (VNC 1.323,52) il valore recuperabile sale a 1.600. Come si contabilizza il ripristino?",
    "title": "Concetto Chiave: CASO D'AULA RIPRISTINO E ADEGUAMENTO FONDO AMM.TO",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><p style='text-align:left; margin:6px 0; font-weight:600;'>VNC storico senza svalutazione = 2.000 - (100 × 5 anni) = 1.500 (il valore recuperabile 1.600 supera il tetto, quindi ci si ferma a 1.500!).</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Calcolo del Tetto Massimo (Ceiling) a fine Anno 5:</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Ceiling (1.500) - VNC effettivo fine Anno 5 (1.323,52) = +176,48 a Conto Economico.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Calcolo del Ripristino netto a Conto Economico:</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Per riportare il costo lordo a 2.000 e il Fondo Amm.to al livello storico di 500 (da 476,48), si integra il fondo per 200 - 176,48 = 23,52.<br>Scrittura: Dare Immobile 200 / Avere Ripristino di valore (CE) 176,48 e Avere Fondo Amm.to 23,52.</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Adeguamento del Fondo Ammortamento:</li></ul></div>"
  },
  {
    "id": 94,
    "standard": "IAS 36 (CASO CESPITE €36.000 & NEUTRALITÀ TRIENNALE CE)",
    "module": "IAS 36",
    "tag": "CASO CESPITE €36.000 & NEUTRALITÀ TRIENNALE CE",
    "question": "Caso d'aula: Cespite costo €36.000, vita utile 6 anni (quota €6.000). Fine Anno 1 (VNC €30.000) svalutato di €5.400 a €24.600 (nuova quota €4.920 su 5 anni). A fine Anno 3 il valore recuperabile sale a €20.000. Dimostra come il ripristino azzeri l'effetto netto nel triennio.",
    "title": "Concetto Chiave: CASO CESPITE €36.000 & NEUTRALITÀ TRIENNALE CE",
    "html": "<div style='font-size:0.92rem; line-height:1.55; color:var(--text-primary);'><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Situazione a fine Anno 3:</li><li>VNC effettivo dopo 2 quote da €4.920 = €24.600 - €9.840 = €14.760;</li><li>Ceiling storico a fine Anno 3 = €36.000 - (€6.000 × 3 anni) = €18.000;</li><li>Ripristino effettivo sul VNC = €18.000 - €14.760 = +€3.240 (ottenuto nella slide tramite Ripristino lordo a CE di +€4.200 e adeguamento F.do Amm.to di €1.200).</li></ul><p style='text-align:left; margin:6px 0; font-weight:600;'>Totale costi netti a CE nei 3 anni = -€18.000, identico a 3 quote storiche da €6.000!</p><ul style='text-align:left; margin:6px 0; padding-left:18px;'><li>Verifica della neutralità sul Conto Economico complessivo del triennio:</li><li>Anno 1: Amm.to (-€6.000) + Svalutazione (-€5.400) = -€11.400;</li><li>Anno 2: Amm.to = -€4.920;</li><li>Anno 3: Amm.to (-€4.920) + Ripristino netto (+€3.240) = -€1.680;</li></ul></div>"
  },
  {
    "id": 95,
    "standard": "Scritture Contabili (PARTITA DOPPIA IAS 16)",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IAS 16",
    "question": "Scrittura Contabile (IAS 16): Rivalutazione di un impianto da €80.000 a €95.000 (+€15.000) nel Revaluation Model (senza svalutazioni pregresse). Qual è la registrazione in Partita Doppia?",
    "title": "Concetto Chiave: PARTITA DOPPIA IAS 16",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Impianti (Attivo SP)</td><td>15.000</td><td></td></tr>\n                <tr><td>Riserva di Rivalutazione (Patrimonio Netto - OCI)</td><td></td><td>15.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">L'incremento transita dall'OCI senza toccare il P&L. Alla futura vendita del bene: <strong>DIVIETO DI RECYCLING</strong> a Conto Economico (va direttamente a Utili portati a nuovo).</p>"
  },
  {
    "id": 96,
    "standard": "Scritture Contabili (PARTITA DOPPIA IFRS 5)",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IFRS 5",
    "question": "Scrittura Contabile (IFRS 5): Classificazione di un macchinario (VNC €240.000) come Held for Sale con Fair Value less Costs to Sell pari a €220.000. Quali sono le scritture in Partita Doppia?",
    "title": "Concetto Chiave: PARTITA DOPPIA IFRS 5",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Attività possedute per la vendita - HFS (SP Corrente)</td><td>220.000</td><td></td></tr>\n                <tr><td>Perdita da valutazione ex IFRS 5 (Conto Economico)</td><td>20.000</td><td></td></tr>\n                <tr><td>Macchinari (SP Non Corrente)</td><td></td><td>240.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Valutazione al minore tra Valore Contabile (€240k) e Fair Value netto (€220k) con <strong>immediata sospensione dell'ammortamento</strong>.</p>"
  },
  {
    "id": 97,
    "standard": "Scritture Contabili (PARTITA DOPPIA IAS 38)",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IAS 38",
    "question": "Scrittura Contabile (IAS 38): Capitalizzazione di spese di sviluppo per €50.000 sostenute dopo il soddisfacimento cumulativo dei 6 criteri PIRATE. Qual è la scrittura in Partita Doppia?",
    "title": "Concetto Chiave: PARTITA DOPPIA IAS 38",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Attività Immateriali — Costi di Sviluppo (Attivo SP)</td><td>50.000</td><td></td></tr>\n                <tr><td>Banca c/c / Costi capitalizzati</td><td></td><td>50.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Si capitalizzano solo i costi sostenuti <strong>dopo</strong> il rispetto di tutti i 6 criteri PIRATE. L'ammortamento inizia solo quando lo sviluppo è completato e disponibile all'uso.</p>"
  },
  {
    "id": 98,
    "standard": "Scritture Contabili (PARTITA DOPPIA IFRS 16 (INIZIALE))",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IFRS 16 (INIZIALE)",
    "question": "Scrittura Contabile (IFRS 16): Rilevazione iniziale a t=0 di un leasing con VA canoni futuri €90.000, pagamento anticipato €6.000 e costi diretti €4.000 (al netto di €2.000 di incentivi = €2.000 netti). Qual è la scrittura?",
    "title": "Concetto Chiave: PARTITA DOPPIA IFRS 16 (INIZIALE)",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Diritto d'Uso — ROU Asset (Attivo SP)</td><td>98.000</td><td></td></tr>\n                <tr><td>Passività per Leasing — Lease Liability (Passivo SP)</td><td></td><td>90.000</td></tr>\n                <tr><td>Banca c/c (esborsi netti alla decorrenza)</td><td></td><td>8.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">ROU (€98k) = Passività (€90k) + Anticipi (€6k) + Costi diretti (€4k) - Incentivi (€2k).</p>"
  },
  {
    "id": 99,
    "standard": "Scritture Contabili (PARTITA DOPPIA IFRS 16 (CANONE))",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IFRS 16 (CANONE)",
    "question": "Scrittura Contabile (IFRS 16): Pagamento del canone annuo di €25.000 su un debito iniziale di €100.000 al tasso del 5% annuo. Qual è la scrittura in Partita Doppia?",
    "title": "Concetto Chiave: PARTITA DOPPIA IFRS 16 (CANONE)",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Interessi Passivi su Leasing (Conto Economico)</td><td>5.000</td><td></td></tr>\n                <tr><td>Passività per Leasing (Stato Patrimoniale)</td><td>20.000</td><td></td></tr>\n                <tr><td>Banca c/c (Stato Patrimoniale)</td><td></td><td>25.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Interessi = €100.000 × 5% = €5.000. La quota capitale di €20.000 riduce il debito nello SP e va nel <strong>Financing</strong> in IAS 7.</p>"
  },
  {
    "id": 100,
    "standard": "Scritture Contabili (PARTITA DOPPIA IAS 36 (CGU BETA))",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IAS 36 (CGU BETA)",
    "question": "Scrittura Contabile (IAS 36 - Esercizio CGU Beta): Rilevazione della perdita d'impairment complessiva di €24.000 sulla CGU (Avviamento €14.000, Fabbricato €30.000, Impianti €20.000, Rimanenze €10.000). Qual è la scrittura?",
    "title": "Concetto Chiave: PARTITA DOPPIA IAS 36 (CGU BETA)",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Perdita per riduzione di valore — Impairment (CE)</td><td>24.000</td><td></td></tr>\n                <tr><td>Avviamento / Goodwill (Attivo SP — azzerato)</td><td></td><td>14.000</td></tr>\n                <tr><td>Fabbricati / Fondo svalutazione Fabbricati (60%)</td><td></td><td>6.000</td></tr>\n                <tr><td>Impianti / Fondo svalutazione Impianti (40%)</td><td></td><td>4.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">1° Si azzera l'Avviamento (€14k); 2° Si ripartisce il residuo (€10k) pro-rata sugli asset IAS 36, escludendo le Rimanenze IAS 2.</p>"
  },
  {
    "id": 101,
    "standard": "Scritture Contabili (PARTITA DOPPIA IAS 36 (RIPRISTINO))",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA IAS 36 (RIPRISTINO)",
    "question": "Scrittura Contabile (IAS 36 - Caso d'aula): Ripristino di valore a fine Anno 5 dell'immobile (Costo 2.000, VNC post-svalutazione 1.323,52, Ceiling storico 1.500, precedente svalutazione 200). Qual è la scrittura?",
    "title": "Concetto Chiave: PARTITA DOPPIA IAS 36 (RIPRISTINO)",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare (€)</th><th>Avere (€)</th></tr>\n                <tr><td>Immobile (Attivo SP)</td><td>200,00</td><td></td></tr>\n                <tr><td>Ripristino di valore — Reversal of Impairment (CE)</td><td></td><td>176,48</td></tr>\n                <tr><td>Fondo Ammortamento Immobile (rettifica SP)</td><td></td><td>23,52</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Il VNC sale da 1.323,52 al <strong>Ceiling storico di 1.500</strong> (+176,48 a CE) riallineando il Fondo Ammortamento (+23,52) a 500.</p>"
  },
  {
    "id": 102,
    "standard": "Scritture Contabili (PARTITA DOPPIA CRYPTO (IASB VS FASB))",
    "module": "Scritture Contabili",
    "tag": "PARTITA DOPPIA CRYPTO (IASB VS FASB)",
    "question": "Scrittura Contabile (Crypto-Assets - Caso 1.500 BTC): A fine Anno 2 il valore dei 1.500 Bitcoin scende da $90.000.000 a $68.000.000 (-$22.000.000). Qual è la scrittura di fine anno?",
    "title": "Concetto Chiave: PARTITA DOPPIA CRYPTO (IASB VS FASB)",
    "html": "<table class=\"journal-table\">\n                <tr><th>Conto</th><th>Dare ($)</th><th>Avere ($)</th></tr>\n                <tr><td>Perdita da svalutazione / FV Loss su Crypto (CE)</td><td>22.000.000</td><td></td></tr>\n                <tr><td>Crypto-Assets / Digital Assets (Attivo SP)</td><td></td><td>22.000.000</td></tr>\n            </table>\n            <p style=\"font-size:0.85rem; color:var(--text-secondary); text-align:left; margin-top:8px;\">Sotto il nuovo <strong>FASB Subtopic 350-60 (FVTPL)</strong> anche i rialzi di Fair Value vanno direttamente a <em>Net Income</em>, mentre sotto IAS 38 Cost Model i rialzi non sono rilevati.</p>"
  }
];
