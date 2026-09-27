---
title: I tag h1, p e br
description: I primi tag per la gestione del testo
---

## I Tag di Testo Fondamentali: `<h1>`, `<p>` e `<br/>`

Nell'architettura HTML, questi tre tag rappresentano gli strumenti primari per organizzare e presentare il testo all'interno del `<body>` di un documento.

### 1\. Il Tag `<h1>` (Heading 1)

* **Funzione**: Definisce il **titolo principale di primo livello** della pagina.
  * Possono esserci fino a 6 livelli diversi a partire dal primo `<h1>` fino al sesto `<h6>`, ogni livello a salire possiede un font di dimensioni sempre minori.
* **Natura**: È un elemento **block-level** (di blocco), il che significa che occupa l'intera larghezza disponibile e forza un a capo prima e dopo il suo contenuto.
* **Uso corretto**: In un documento web ben strutturato dovrebbe esserci di norma un solo tag `<h1>`, riservato all'argomento principale della pagina.
* **Sintassi**: Richiede sia il tag di apertura `<h1>` che quello di chiusura `</h1>` per racchiudere il testo.

---

### 2\. Il Tag `<p>` (Paragraph)

* **Funzione**: Delimita un **paragrafo di testo**.
* **Natura**: È un elemento **block-level**. Quando il browser incontra un elemento `<p>`, crea un nuovo blocco di contenuto inserendo automaticamente dei margini verticali di spaziatura prima e dopo di esso.
* **Sintassi**: Richiede sia il tag di apertura `<p>` che quello di chiusura `</p>` per racchiudere il testo.

---

### 3\. Il Tag `<br/>` (Line Break)

* **Funzione**: Forza un **a capo manuale** (interruzione di riga) all'interno del testo.
* **Natura**: È un tag vuoto (**void element** o *self-closing*). Non contiene testo al suo interno e non richiede un tag di chiusura autonomo.
* **Comportamento**: Sposta il testo immediatamente alla riga successiva senza interrompere il blocco corrente e senza aggiungere la spaziatura tipica di un nuovo paragrafo.

---

### Differenza Chiave tra `<p>` e `<br/>` nella Gestione del Testo

È fondamentale comprendere che la scelta tra `<p></p>` e `<br/>` non è una decisione estetica casuale, ma una scelta di **struttura semantica** e di **layout**:

| Caratteristica                   | Tag `<p></p>` (Paragrafo)                                                 | Tag `<br/>` (Interruzione di riga)                                                                     |
|----------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **Ruolo Semantico**              | Definisce una **nuova unità concettuale e logica** di testo.              | Cambia semplicemente **riga visiva** all'interno dello *stesso* blocco.                                |
| **Comportamento di Blocco**      | Genera un nuovo **elemento di blocco** (*block-level*).                   | Rimane un'interruzione **inline** senza spezzare la struttura del blocco padre.                        |
| **Spaziatura (Margini)**         | Il browser applica **margini verticali** (spazio bianco) tra i paragrafi. | Non aggiunge margini verticali; va a capo mantenendo l'interlinea normale.                             |
| **Caso d'Uso Tipico**            | Separare paragrafi distinti di un articolo, saggio o spiegazione.         | Indirizzi postali, versi di una poesia o formule in cui il testo appartiene allo stesso blocco logico. |
| **Errore Comune / Bad Practice** | Usare paragrafi vuoti (`<p></p><p></p>`) per creare spaziatura visiva.    | Inserire più tag `<br/><br/>` consecutivi per simulare un paragrafo o distanziare gli elementi.        |