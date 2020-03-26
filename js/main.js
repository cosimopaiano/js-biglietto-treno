// verifica corretto import script
console.log('my js is here');

/**
 * 1. Chiedere all'utente km da percorrere
 * 2 Chiedere all'utente l'età del passeggero
 * 3. Calcolare prezzo del viaggio
 * 4. Applicare sconto 20% per minorenni e del 40% per gli over 65)
 * 4. Stampare prezzo biglietto e indicare l'eventuale sconto
 */


// far inserire  all'utente i km da percorrere assicurandosi che siano valori numerici
var yourKm = parseInt(prompt("Quanti km dovrai percorrere?"));
console.log("Km inseriti: " + yourKm);

// far inserire  all'utente l'età del passeggero assicurandosi che siano valori numerici
var yourAge = parseInt(prompt("Qual è la tua età?"));
console.log("Età inserita: " + yourAge);

//calcolo costo del viaggio
var priceKm = 0.21;
var priceTot = yourKm * priceKm;

//calcolo scontistica 40%
var rebate40 = priceTot * .40;
var rebateTot40 = priceTot - rebate40;

//calcolo scontistica 20%
var rebate20 = priceTot * .20;
var rebateTot20 = priceTot - rebate20;

//stampare il prezzo del biglietto ed applicare l'eventiale scontistica

if (yourAge < 18) {
  console.log("Hai acquistato un biglietto con scontistica del 20% riservato agli under 18 al costo di € " + rebateTot20);
  document.getElementById('acquista').innerHTML = 'Hai acquistato un biglietto con scontistica del 20% riservato a gli under 18 al costo di € ' + rebateTot20.toFixed(2);

} else if (yourAge > 65) {
  console.log("Hai acquistato un biglietto con scontistica del 40% riservato agli over 65 al costo di € " + rebateTot40);
  document.getElementById('acquista').innerHTML = 'Hai acquistato un biglietto con scontistica del 40% riservato a gli over 65 al costo di € ' + rebateTot40.toFixed(2);

} else  {
  console.log("spiacente non hai diritto a nessuna scontistica " + priceTot);
  document.getElementById('acquista').innerHTML = 'Hai acquistato un biglietto al costo di € ' + priceTot.toFixed(2)  + ' Spiacente, non è possibile applicare nessuna scontistica';
}
