---
title: La Struttura Fondamentale di una pagina HTML
description: La Struttura Fondamentale di una pagina HTML
---

# 1. HTML

Il linguaggio HTML (Hyper-Text Markup Language) è un linguaggio **interpretato** e non compilato, il che significa che
per poter eseguire il suo "codice" è necessario un software che lo possa interpretare.

L'interprete in questione è il **Browser** e sono presenti vari tipi di browser come Google Chrome, Mozilla Firefox, Safari e Internet Explorer (estremamente datato).
Ogni browser interpreta in modo diverso il nostro codice, ma rispettando lo **standard HTML** più recente i browser lo interpreteranno tutti allo stesso modo.

# 2. Lo Standard

Attualmente non esiste uno standard HTML con delle versioni specifiche, HTML è in continua evoluzione e le versioni aggiornate
sono disponibili sul sito [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage).
L'ultima versione numerata è HTML 5.3 rilasciata il 28 gennaio 2021.

# 3. I tag HTML

I **tag HTML** (dall'inglese *"etichette"*) sono gli elementi sintattici fondamentali utilizzati per delimitare e strutturare i contenuti di una pagina web. Basati sull'approccio del markup semantico ereditato da SGML, i tag indicano al browser la **natura concettuale** di ciascun elemento — specificando se un blocco di testo è un titolo, un paragrafo, una lista o un collegamento ipertestuale.

Sintatticamente, i tag sono racchiusi tra **parentesi angolari** (`<` e `>`) e nella maggior parte dei casi operano in coppia:
* **Tag di apertura** (es. `<body>`): indica l'inizio dell'elemento.
* **Contenuto**: il testo o l'oggetto racchiuso all'interno.
* **Tag di chiusura** (es. `</body>`): caratterizzato dalla barra slash (`/`), segnala la fine dell'elemento.

L'insieme del tag di apertura, del contenuto e del tag di chiusura definisce un **elemento HTML**. Quando Tim Berners-Lee creò la prima specifica nel 1991, definì soltanto **18 tag essenziali**; oggi lo standard ne conta oltre 100 per gestire risorse multimediali, moduli interattivi e la struttura avanzata delle moderne applicazioni web.

# 4. La struttura di base

### 1. Il Codice HTML
Per avere una pagina web base standard è necessario utilizzare questi tag:

`!DOCYPE` `html` `head` `body` `meta` `title`

Ed è necessario che questi tag vengano messi in questo esatto ordine, a parte i tag all'interno del tag `head`.

```html
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8" />
        <title>Pagina HTML Base</title>
        <meta name="viewport" content="width=device-width" />
    </head>
    <body>
        
    </body>
</html>
```

### 2. Analisi Dettagliata dei Componenti

1. `<!DOCYPE html>`
   * È la **dichiarazione del tipo di documento**. In HTML5 è stata notevolmente semplificata rispetto alle estese dichiarazioni DTD presenti nelle versioni precedenti come HTML 4.01 o XHTML. Informa il browser che il file deve essere interpretato secondo lo standard HTML5 moderno.
2. `<html lang="it">`
   * È l'**elemento radice** (*root element*) che racchiude tutto il codice della pagina. L'attributo `lang="it"` definisce la lingua del documento, parametro fondamentale per i lettori di schermo usati dall'accessibilità e per l'indicizzazione dei motori di ricerca.
3. **La Sezione** `<head>` **(Istruzioni e Metadati)**
   * Contiene tutte le informazioni tecniche e i **metadati** necessarie al browser, ma non mostrate direttamente nell'area di lavoro della pagina:
       * `<meta charset="utf-8" />`: stabilisce la codifica dei caratteri universale UTF-8, garantendo la corretta resa di lettere accentate e caratteri speciali.
       * `<meta name="viewport" content="width=device-width" />`: regola la visualizzazione su schermi di diverse dimensioni, ponendo le basi per il **Responsive Web Design**.
       * `<title>`: definisce il titolo della pagina visualizzato sulla scheda del browser e nei risultati di ricerca.
       * In questa sezione si inseriscono solitamente anche i collegamenti ai file CSS esterni e agli script JavaScript.
4. **La Sezione** `<body>` **(Contenuto Visibile e Struttura Semantica)**