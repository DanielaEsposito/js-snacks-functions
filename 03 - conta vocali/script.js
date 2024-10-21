/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vowelsNumber = (word)=>{
    const wordSplit =[];
    wordSplit.push(word.split("")) 
    const vowels =["a", "e", "i","o","u"];
    for(let i= 0; i < vowels.length ; i ++){
        currentElementvowels = vowels[i]
    }
    for (let i = 0; i < wordSplit.length; i ++) {
        currentElementword = wordSplit[i]   
    }
    if(wordSplit[i].inculdes( vowels[i])){
        
    }
    // console.log("wordsplit ",wordSplit);
    //console.log(word);
    //console.log(vowels);
    

}

// Invoca la funzione qui e stampa il risultato in console

const result = vowelsNumber(word)
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)