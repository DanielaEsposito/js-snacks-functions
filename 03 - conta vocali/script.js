/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vowelsNumber = (word)=>{
     let numberVowels = 0;
     const vowels = "aeiou"
     const vowelsString =[];
    for(let i= 0; i < word.length ; i ++){
        
        currentElementvowels = word[i]
        if(vowels.includes(word[i])){
        numberVowels++;
        vowelsString.push(word[i]);
        
        
        }
        
        
        
    }
   
    return `${numberVowels}  (${vowelsString.join(",")})`; 
    
    
    

}

// Invoca la funzione qui e stampa il risultato in console

const result = vowelsNumber(word)
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)