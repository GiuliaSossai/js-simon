/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

* 1. prendo un array vuoto
* 2. faccio ciclo per riempire l'array con 5 numeri random
* 3. pusho i 5 numeri nell'array che era vuoto
*
 */

let myNumbers = [];
//[getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
console.log('array da riempire', myNumbers);

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

/**
 * 1. quando stampo l'array, devo far partire il countdown
 * 2. finito il countdown deve esserci un prompt che chiede all'utente di inserire i numeri visti 
 */

//inizializzo countdown
let tempoSecondi = 5;


const clock = setInterval(function() {
  //stampo l'array di 5 numeri random
  document.querySelector('.box').innerHTML = myNumbers;
  tempoSecondi--;
  console.log(tempoSecondi);

  if (tempoSecondi === 0){
    clearInterval(clock);
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
    //console.log('elemento', arrUser[0]);

    let counter = 0; 
    //confronto i due array usando ciclo
    /*se myNumbers include elementi di arrUser:
     1. aumento il counter
     2. stampo in pagina
     se nessun elemento è presente, counter = 0 e stampo msg 
    */
    
    const boxText = document.querySelector('.text');
    let numeriIndovinati = [];

    // myNumbers -> [1, 3, 5, 7, 9]
    // arrUser -> [1, 3, 5, 7, 10]

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

    if(counter == 0){
      boxText.innerHTML = `
      <p>hai indovinato ${counter} numeri! ritenta</p>
      `;
    } else {
      boxText.innerHTML = `
        <p>hai indovinato ${counter} numeri! ${numeriIndovinati}</p>
        `;
    }
     
  }
  
}, 1000);


function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}