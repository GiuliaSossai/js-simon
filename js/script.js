/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

* 1. prendo un array vuoto
* 2. faccio ciclo per riempire l'array con 5 numeri random
* 3. pusho i 5 numeri nell'array che era vuoto
*
 */

/*****************
  inizializzo variabili
*****************/

let myNumbers = [];
console.log('array da riempire', myNumbers);

const boxText = document.querySelector('.text');
let numeriIndovinati = [];
//inizializzo countdown
let tempoSecondi = 5;


/*****************
  logica e funzioni
*****************/

//arrow function per countdown
const countdown = setInterval(function() {
  console.log('dentro set interval 1');
  //stampo l'array di 5 numeri random
  document.querySelector('.box').innerHTML = myNumbers;
  boxText.innerHTML = `memorizza questi numeri, hai ${tempoSecondi} secondi`;
  tempoSecondi--;
  console.log(tempoSecondi);  
}, 1000);



//ciclo per formare array di 5 numeri random
for (let i = 0; i < 5; i++){
  console.log ('i', i);
  let number = getRandomInt(1, 100);
  //controllo unicità numero da pushare nell'array
  if(!myNumbers.includes(number)){
    myNumbers.push(number);
  }
  console.log('array - ciclo', myNumbers);
}
console.log('array riempito con 5 numeri', myNumbers);


/* TIMING FUNCTIONS
 * 1. quando stampo l'array, devo far partire il countdown
 * 2. finito il countdown deve esserci un prompt che chiede all'utente di inserire i numeri visti 
 */

//passati 5 secondi faccio interrompere il countdown
setTimeout(function() {
  boxText.innerHTML = `ti ricordi tutti i numeri?`;
  document.querySelector('.box').innerHTML = '';
  clearInterval(countdown);
  console.log('dentro stop countdown 2');
}, tempoSecondi * 1000);

//passati 6 secondi (per sicurezza) chiedo all'utente di scrivere i numeri che ricorda
setTimeout(function() {
    console.log('dentro funzione per prompt 3');
    boxText.innerHTML = `scrivi i numeri che ti ricordi`;
    
    let userNumbers = prompt('scrivi i numeri che ricordi!');
    console.log('numeri scritti da utente:', userNumbers);

    /**
     * 1. ordine non è importante
     * 2. devo fconfrontare userNumbers con myNumbers per vedere se e quanti numeri sono presenti in entrambi
     * stampo i numeri indovinati e quanti sono
     */

    //converto stringa userNumbers in array
    let arrUser = JSON.parse("[" + userNumbers + "]");
    console.log('array da stringa', arrUser);

    let counter = 0; 
    //confronto i due array usando ciclo
    /*se myNumbers include elementi di arrUser:
     1. aumento il counter
     2. stampo messaggio diverso a seconda del counter
    */

    for (let i = 0; i < arrUser.length; i++){
      //se myNumbers include un elemento di arrUser, aumento il contatore
      if (myNumbers.includes(arrUser[i])){
        console.log('indice', arrUser[i]);
        counter++;
        console.log('contatore', counter);
        numeriIndovinati.push(arrUser[i]);  
      }
    }
   console.log('numeri indovinati', numeriIndovinati);

    //stampo messaggio output
    if(counter == 0){
      boxText.innerHTML = `
      <p>hai indovinato ${counter} numeri! ritenta</p>
      `;
    } else {
      document.querySelector('.box').innerHTML = myNumbers;
      boxText.innerHTML = `
        <p>hai indovinato ${counter} numeri! ${numeriIndovinati}</p>
        `;
    }
  
},(tempoSecondi + 1) * 1000);


//funzione per numeri random
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}