/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var anno_corrente = 2019;
var anno_di_nascita = 1978;
var anni_mancanti_a_100 = 100;
var età;

console.log("anno corrente: " + anno_corrente);
console.log("anno di nascita: " + anno_di_nascita);


//Restituice la età.
function età(){
  età = anno_corrente - anno_di_nascita;
  return 'La tua Età: ' + età;
}
//Restituice gli anni mancanti per arrivare a 100.
function anni_da_raggiungere(){
  let anni_per_arrivare_a_100 = anni_mancanti_a_100 - età;
  return "Anni mancanti per arrivare a 100: " + anni_per_arrivare_a_100;
}
console.log(età());
console.log(anni_da_raggiungere());
