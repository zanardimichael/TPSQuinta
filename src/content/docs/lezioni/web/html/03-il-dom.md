---
title: Il DOM
description: Che cos'è il DOM
---

Il **DOM** (*Document Object Model*) è un'interfaccia di programmazione (API) fornita dai browser web che rappresenta un documento HTML sotto forma di una struttura ad albero composta da oggetti interconnessi[1].

Rappresenta il **ponte fondamentale** che consente a un linguaggio di programmazione lato client come JavaScript di interagire direttamente con la struttura, lo stile e il contenuto della pagina web[2].

---

## 1. Come funziona: L'Albero del DOM (*DOM Tree*)

Quando il browser riceve ed elabora un file HTML, analizza il codice sorgente e costruisce in memoria una rappresentazione gerarchica chiamata **albero del DOM** (*DOM Tree*):

* **Nodo Radice (`document`)**: È il punto di accesso principale che rappresenta l'intero documento caricato nella finestra.
* **Nodi Elemento**: Rappresentano i singoli tag HTML (`<html>`, `<body>`, `<h1>`, `<p>`, `<a>`).
  * **Testo**: Il contenuto testuale effettivo racchiuso all'interno dei tag.
  * **Attributo**: Gli attributi associati ai tag (come `src`, `href`, `class` o `id`).

---

## 2. Il Ruolo del DOM: Rendere l'HTML Dinamico

L'HTML da solo è un linguaggio di markup statico. Attraverso il DOM, il browser trasforma ogni elemento del documento in un **oggetto software manipolabile**.

Grazie a questo meccanismo, **JavaScript** può:

1. **Leggere eispezionare** i dati e i valori presenti nella pagina.
2. **Modificare** testo, attributi e stili CSS in tempo reale.
3. **Aggiungere o rimuovere** elementi HTML dinamici senza dover ricaricare la pagina dal server.
4. **Reagire agli eventi** dell'utente (come il click di un pulsante, il passaggio del mouse o l'invio di un modulo).

## 3. Esempio

Questo è il grafico di un DOM di una pagina HTML

![DOM](/html/DOM.jpg)

### Il codice

```html
<!DOCTYPE html>
<html lang="it">
    <head>
        <title>Pagina</title>
    </head>
    <body>
        <h1>H1 Titolo della pagina</h1>
        <div>
            Le pagine <span>HTML</span> sono strutturate a <span>tag</span>
            <img src="image2.jpg" alt="Albero">
        </div>
		<img src="image.jpg" alt="Foto">
    </body>
</html>

```

Per definire gli attributi di un tag HTML è necessario scrivere all'interno del tag di apertura, subito dopo il nome del tag.

#### Esempio:

Ho la necessità di aggiungere al tag `img` i seguenti attributi:
* `src` con il contenuto `url-immagine.jpg`
* `alt` con il contenuto `Testo Alternativo`

```html
<img src="url-immagine.jpg" alt="Testo Alternativo">
```
