/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const firstLetter = [];

// Dichiara la funzione qui.
const firstLetterSelect = ( firstLetter ,names ) =>{
    console.log(firstLetter, names);
    for(let i= 0; i < names.length ; i++){
        const currentElement = names[i];      
        firstLetter.push(currentElement.charAt(0));

    }
    return firstLetter;
}



// Invoca la funzione qui e stampa il risultato in console
const result= firstLetterSelect(firstLetter,names)
console.log(result);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]