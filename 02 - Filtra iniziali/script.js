/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const searchedLetter = "A"

// Dichiara la funzione qui.
const firstLetterSelect = ( searchedLetter ,names ) =>{
    console.log(searchedLetter, names);
    const searchedElement =[];
    for(let i= 0; i < names.length ; i++){
        const currentElement = names[i]; 
        if(currentElement.charAt(0) === searchedLetter){
        searchedElement.push(currentElement);
        }

    }

    return searchedElement; 
    
}




// Invoca la funzione qui e stampa il risultato in console
const result= firstLetterSelect(searchedLetter,names)
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]