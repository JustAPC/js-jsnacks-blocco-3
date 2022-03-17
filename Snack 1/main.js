let array = []

let somma = 0

let i = 0

do {
    let numero = parseInt (prompt ("Inserisci un numero"));
    array.push (numero)
    i= 0;
    somma = 0;
    while (i < array.length){
        somma += (array[i]);
        i++
    }
    
} while (somma < 50)

console.log (somma)

document.getElementById("risultato").innerHTML = `La somma dei numeri è ${somma}`