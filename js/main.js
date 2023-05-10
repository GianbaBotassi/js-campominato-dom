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
        cycleElementsClass(1,100,"grid10x10");
    }else if (lvlDifficulty === "medium") {
        cycleElementsClass(1,81,"grid9x9");
    }else if(lvlDifficulty === "hard"){
        cycleElementsClass(1,49,"grid7x7");
    }
}
);

/*************************** FUNCTIONS *****************************/

// Function to create new tag element with class
function createElementClass(elementTag, classToAdd){
    const newElement = document.createElement(elementTag);
    newElement.classList.add(classToAdd);
    return newElement;
}


// Function to cycle more elements with class (need createElementClass function) to a element with id="container"  (choose type of grid: grid10x10, gridx99, grid7x7)
function cycleElementsClass(min, max, typeOfGrid){
    
    for(let i = min; i <= max; i++){

        // Richiamo funzione crea elementi con classe
        const newSquare = createElementClass("span","square");
        newSquare.classList.add(typeOfGrid);
        container.append(newSquare);
        newSquare.append(i);

        // Aggiunto cambio bg color al click (add blue class)
        newSquare.addEventListener("click",
            function(){
                this.classList.add("blue");
                console.log(i);
            }
        )
    }
}
