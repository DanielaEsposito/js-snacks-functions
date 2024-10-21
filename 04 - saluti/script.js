/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

const greeting =(stringa) => {
    return "ciao" + " " + stringa ;
} 
 


// Invoca la funzione qui e stampa il risultato in console

const myName = greeting("Mario");
console.log(myName);


//Risultato atteso se si passa 'Mario': // ciao Mario