var randomNumbs = [];
// Creo una lista contenente 5 numeri casuali
createRandomInts();


// Un alert espone 5 numeri casuali diversi.
alert("Ricorda questi 5 numeri e inseriscili in seguito:\n" + showRandomNumbs(randomNumbs));

setTimeout(richiediNumeri, 30000);


// Funzione per generare 5 numeri casuali
function createRandomInts() {
    for (i = 0; i < 5; i++) {
        let randomNumb = Math.floor(Math.random() * 100);
        randomNumbs.push(randomNumb);
    }
}

// Funzione che trasforma i numeri contenuti in un array in stringhe e li unisce con spazi
function showRandomNumbs(lista) {
    let shownNumbs = "";
    for (i = 0; i < lista.length; i++) {
        if (i === (lista.length - 1)) {
            shownNumbs = shownNumbs + lista[i].toString() + ".";
        } else {
            shownNumbs = shownNumbs + lista[i].toString() + ", ";
        }
    }
    return shownNumbs;
}

// Funzione per richiedere 5 numeri all'utente tramite prompt e ne verifica la correttezza
function richiediNumeri() {
    let userNumbs = []
    let numeriIndovinati = [];
    let quantitaNumeriIndovinati = 0;
    // Richiedo 5 numeri e li inserisco in un'array
    for (i = 0; i < randomNumbs.length; i++) {
        let userNumb = prompt("Inserisci un numero che ricordi:");
        userNumbs.push(parseInt(userNumb));
    }
    
    // Verifico se i numeri inseriti sono presenti nell'array di numeri random
    for (i = 0; i < userNumbs.length; i++) {
        if (randomNumbs.includes(userNumbs[i])) {
            quantitaNumeriIndovinati++;
            numeriIndovinati.push(userNumbs[i]);
        }
    }

    // Alert per dire all'utente quanti e quali numeri ha indovinato
    alert("Hai indovinato " + quantitaNumeriIndovinati + " numeri:\n" + showRandomNumbs(numeriIndovinati));
}