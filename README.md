# Guess Word

**Guess Word** è un semplice gioco dell'impiccato realizzato con **HTML**, **CSS** e **JavaScript**. Il progetto è nato durante le prime fasi del mio apprendimento del web per mettere in pratica le basi di markup, styling e programmazione client-side.

---

## Sommario
- [Descrizione](#descrizione)  
- [Come si gioca](#come-si-gioca)  
- [Caratteristiche implementate](#caratteristiche-implementate)  
- [Tecnologie](#tecnologie)  
- [Struttura del progetto](#struttura-del-progetto)  
- [Installazione e avvio](#installazione-e-avvio)  

---

## Descrizione
Il gioco presenta:
- Una **parola segreta** scelta casualmente da una lista interna.  
- Un set di **lettere cliccabili** sullo schermo; l'utente clicca le lettere per provare ad indovinare la parola.  
- Ad ogni errore viene mostrato un pezzo della figura stilizzata dell'impiccato; raggiunto l'ultimo pezzo si verifica il **game over**.  
- Se l'utente indovina tutte le lettere prima di completare la figura, vince la partita.

---

## Come si gioca
1. Apri la pagina `index.html`.  
2. Clicca sulle lettere che pensi facciano parte della parola segreta.  
3. Ogni lettera corretta viene mostrata nelle posizioni corrispondenti nella parola.  
4. Ogni lettera sbagliata fa comparire un nuovo pezzo del disegno dell'impiccato.  
5. Vinci se completi la parola; perdi se appare tutta la figura.

---

## Caratteristiche implementate
- Selezione casuale della parola segreta da un array locale.  
- Rendering dinamico della parola (underscore per lettere non ancora scoperte).  
- Griglia di lettere cliccabili che si disattivano dopo essere state usate.  
- Progressivo disegno dell'impiccato ad ogni errore (div/elementi SVG o canvas).  
- Messaggi di vittoria / sconfitta con possibilità di riavviare la partita.

---

## Tecnologie
- HTML5 — markup semantico
- CSS3 — layout e stili  
- JavaScript — logica di gioco  

---

## Struttura del progetto (esempio)
```
Guess_Word/
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  └─ img/
│     └─ (eventuali risorse grafiche)
├─ index.html
└─ README.md
```
> Ho visto `index.html` e la cartella `assets` nella root della repo. citeturn1view0

---

## Installazione e avvio
1. Clona la repository:
```bash
git clone https://github.com/Gianlu201/Guess_Word.git
cd Guess_Word
```
2. Apri `index.html` nel browser (doppio click) oppure usa un server statico:
```bash
npx http-server .   # o Live Server di VSCode
```

---
