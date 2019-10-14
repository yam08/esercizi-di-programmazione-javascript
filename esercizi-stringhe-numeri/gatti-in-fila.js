/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero
    di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero
   superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

var num_Gatti = 100 ;
var num_Gatti_per_Fila = 6;
var round_file_Risultante;

//Questa funzione restituice le file di gatti con arrotondamento.
function num_file_risultante() {
  let fileRisultante  = num_Gatti / num_Gatti_per_Fila
  //return fileRisultante;
  round_file_Risultante = Math.ceil(fileRisultante);
  return round_file_Risultante;
}
//questa funzione restituice i gatti che potrebbero avanzare nell'ultima fila.
function gatti_Restanti_Ultima_Fila(){
let gatti_Restanti_Ultima_Fila = (round_file_Risultante * num_Gatti_per_Fila) - num_Gatti;
if(gatti_Restanti_Ultima_Fila === 0){
  return 'Tutte le file sono al completo.'
}else{
  return `Nell'ultima fila sono ancora vacanti ${gatti_Restanti_Ultima_Fila} posti per completare la fila.`;
}
}


console.log(`Numero di gatti disponibili: ${num_Gatti}`);
console.log(`Numero di gatti per fila: ${num_Gatti_per_Fila}`);
console.log(`Il numero di file disponibile per gatti è: ${num_file_risultante()}`);
console.log(gatti_Restanti_Ultima_Fila());
