/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

let myNumbers = [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
console.log('array 5 numeri', myNumbers);

document.querySelector('.box').innerHTML = myNumbers;







//estraggo numero random dalla funzione relativa per cinque volte
//con un ciclo pusho 5 numeri dentro l'array finche la sua lunghezza è uguale a 5
/*function fillArray(){
  let number = getRandomInt(1, 100);
  console.log(number);
  myNumbers.push(number);
  
  console.log('array 5 numeri', myNumbers);
}*/
  




function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}