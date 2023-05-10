// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà: - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle;
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.


// Dichiaro e assegno una variabile al container nel DOM
const container = document.getElementById('container');

// Dichiaro e assegno variabile a bottone PLAY nel DOM
const play = document.getElementById("play");

// Aggiungo click bottone su play per creazione griglia in container
play.addEventListener("click",
    () => {
    // Svuoto container da vecchia griglia per poter cambiare difficoltà
    container.innerHTML = "";
    
    // Dichiaro e assegno a variabile valore livello nel DOM 
    const lvlDifficulty = document.getElementById('level').value;

    if(lvlDifficulty === "easy"){
        cycleElementsClass(1,100,"grid10x10",container);
    }else if (lvlDifficulty === "medium") {
        cycleElementsClass(1,81,"grid9x9",container);
    }else if(lvlDifficulty === "hard"){
        cycleElementsClass(1,49,"grid7x7",container);
    }
}
)

/*************************** SPECIFIC FUNCTIONS for this project *****************************/

// Cicla elementi con classe con condizioni in specifico container e numeri random per le bombe
function cycleElementsClass(min, max, typeOfGrid, container){
    
    // Dichiaro variabile vuota per le bombe
    const arrayBomb = [];

    // Ciclo 16 numeri e li inserisco nel container arrayBomb
    randomNumberArray(16, min, max, arrayBomb); 

    // Ciclo elementi con classe square, tipologia griglia
    for(let i = min; i <= max; i++){

        // Richiamo funzione crea elementi con classe
        const newSquare = createElementClass("span","square");
        newSquare.classList.add(typeOfGrid);
        container.append(newSquare);
        newSquare.append(i);
        
        //  Metto eventi in ascolto ad ogni cella per aggiungere classi bomb e good(senza bomba) 
        newSquare.addEventListener("click",
            () => {
                  
            const punteggio = document.getElementsByClassName('good').length;

            // Se arraybomb include quel numero inserisco la bomba in cella
            if(arrayBomb.includes(i)){
                newSquare.classList.add('bomb');
            }else{
                // altrimenti classe good
                newSquare.classList.add('good'); 
            }
            
            // Se la classe combacia al click, allora hai perso (da output punteggio)
            if(newSquare.className === `square ${typeOfGrid} bomb`){
                alert("Hai perso, il tuo punteggio è pari a " + punteggio);
            }
        } 
        )
    }
}

/*************************** GENERAL FUNCTIONS *****************************/

// Math random function from min included to max included
function mathRandomMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate tot random numbers(not the same) in a range(min max) and push in array
function randomNumberArray(totNum, min, max, array){
    while(array.length < totNum){
        const newNumber = mathRandomMinMax(min, max);
        if (!array.includes[newNumber]) {
            array.push(newNumber);
        }
    }
}

// Function to create new tag element with class
function createElementClass(elementTag, classToAdd){
    const newElement = document.createElement(elementTag);
    newElement.classList.add(classToAdd);
    return newElement;
}