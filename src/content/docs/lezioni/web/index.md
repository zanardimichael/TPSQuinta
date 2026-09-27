---
title: Introduzione all'Architettura e alla Storia del Web
description: Introduzione all'Architettura e alla Storia del Web
---

## 1. La nascita del World Wide Web e dell'HTML
Il **World Wide Web** (WWW) e l'**HTML** (*HyperText Markup Language*) sono nati tra il **1989** e il **1990** presso il **CERN** di Ginevra. L'opera è merito dell'informatico britannico **Tim Berners-Lee**, con la collaborazione dell'ingegnere belga **Robert Cailliau**.

L'obiettivo originario non era la creazione di una rete commerciale o d'intrattenimento, ma la risoluzione di un problema di gestione della conoscenza: consentire a oltre 17.000 fisici e ricercatori di distribuire e consultare documenti scientifici in modo automatizzato, superando le incompatibilità tra i diversi sistemi operativi e computer dell'epoca.

Per realizzare questo ecosistema, Berners-Lee definì i tre pilastri architetturali fondamentali:
* **URI / URL** (*Uniform Resource Identifier / Locator*): un sistema di indirizzamento univoco per identificare qualsiasi risorsa in rete.
* **HTTP** (*HyperText Transfer Protocol*): un protocollo applicativo client-server per il trasferimento dei dati ipertestuali.
* **HTML** (*HyperText Markup Language*): un linguaggio di markup basato sul concetto di ipertesto per strutturare i documenti e creare collegamenti (link).

### Dalle origini al pubblico dominio
Sotto il profilo tecnico, l'HTML fu derivato dallo standard **SGML** (*Standard Generalized Markup Language*). La prima versione informale comprendeva soltanto **18 tag fondamentali** (come `<p>`, `<a>`, `<h1>`-`<h6>`) dedicati essenzialmente alla struttura del testo.

Verso la fine del 1990 venne installato il primo server web e sviluppato il primo browser/editor su una workstation **NeXTcube**. Sul computer fu applicata la celebre etichetta: *"This machine is a server. DO NOT POWER IT DOWN!!"*. Il primo sito web della storia fu **`info.cern.ch`**, reso accessibile al pubblico il **6 agosto 1991**.

La vera svolta globale arrivò il **30 aprile 1993**, quando il CERN rilasciò il codice sorgente del World Wide Web nel **pubblico dominio** e a titolo gratuito (*royalty-free*). Questo atto altruistico impedì la frammentazione della tecnologia e ne decretò l'esplosione su scala mondiale.

---

## 2. Distinzione concettuale: Internet vs World Wide Web
In ambito didattico è essenziale chiarire una frequente confusione terminologica tra due concetti distinti:

* **Internet**: È la **infrastruttura fisica e di rete globale** (composta da cavi, router, server e dai protocolli di instradamento della suite TCP/IP) nata nei decenni precedenti per connettere tra loro i nodi informatici.
* **World Wide Web**: È un **servizio applicativo** che opera *sopra* la rete Internet, consentendo la pubblicazione e la fruizione di documenti ipertestuali interconnessi tramite browser.

---

## 3. L'evoluzione estetica: La nascita dei CSS
Nei primi anni di vita del Web, l'HTML si occupava sia della struttura semantica sia dell'aspetto visivo. Per formattare i testi o impostare i colori si usavano tag proprietari e attributi grafici (come l'elemento `<FONT>`), rendendo il codice appesantito e difficile da manutenere.

Nel **1994**, l'informatico norvegese **Håkon Wium Lie**, mentre lavorava al CERN insieme a Tim Berners-Lee, propose il concetto di **Cascading Style Sheets (CSS)**. L'idea cardine era introdurre la **separazione delle responsabilità** (*Separation of Concerns*):
* L'**HTML** definisce *cosa* c'è nella pagina (struttura e contenuto semantico).
* I **CSS** definiscono *come* appare la pagina (layout, colori, tipografia e formattazione).

Sviluppato insieme a **Bert Bos**, il linguaggio divenne una raccomandazione ufficiale del **W3C** (*World Wide Web Consortium*) nel dicembre **1996** con le specifiche **CSS Level 1**.

---

## 4. L'evoluzione dinamica: La nascita di JavaScript
Nonostante l'introduzione dei fogli di stile, le pagine web rimase stabili e statiche: una volta scaricate dal server, non potevano reagire alle azioni dell'utente o modificare la pagina senza un ricaricamento completo (*full page reload*).

Nel **maggio 1995**, l'informatico **Brendan Eich**, operante presso **Netscape Communications**, sviluppò la prima versione di un linguaggio di scripting integrato nel browser Netscape Navigator 2.0 in soli **10 giorni**.

### Il nome e la standardizzazione
* **Mocha e LiveScript**: Il linguaggio fu inizialmente chiamato *Mocha*, poi *LiveScript*.
* **La scelta di "JavaScript"**: Nel dicembre 1995 il linguaggio fu ribattezzato **JavaScript** per una precisa strategia di marketing basata sulla travolgente popolarità che Java (sviluppato da Sun Microsystems) stava ottenendo in quel periodo. Tra i due linguaggi non vi è alcuna parentela strutturale.
* **La standardizzazione ECMAScript**: Per evitare che la concorrenza tra Netscape e Microsoft (che aveva creato la propria versione *JScript*) frammentasse la rete, Netscape affidò la specifica all'ente **ECMA International**. Nel **1997** nacque lo standard **ECMAScript (ECMA-262)**, di cui JavaScript rappresenta l'implementazione più famosa.

---

## 5. Sintesi: La Triade del Front-End
Nel moderno sviluppo web, le tre tecnologie operano in stretta sinergia all'interno del browser:

| Tecnologia | Ruolo Architetturale | Descrizione |
| :--- | :--- | :--- |
| **HTML** | **Struttura** | Fornisce lo scheletro della pagina e l'organizzazione semantica dei contenuti. |
| **CSS** | **Presentazione** | Gestisce lo stile grafico, l'estetica, la tipografia e l'adattamento ai dispositivi (*Responsive Web Design*). |
| **JavaScript** | **Comportamento** | Introduce la logica di programmazione lato client, l'interattività e la dinamicità. |
