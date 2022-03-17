let array = []

let somma = 0

let i = 0

do {
    let numero = parseInt (prompt ("Inserisci un numero"));
    array.push (numero)
    while (i < array.length){
        somma += (array[i]);
        i++
    }
    
} while (somma < 50)

console.log (somma)