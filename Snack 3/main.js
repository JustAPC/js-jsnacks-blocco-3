let somma = 0;
let i = 5;

while (i>0){
    somma += parseInt (prompt("Aggiungi un numero"));
    i--; 
}

document.getElementById("risultato").innerHTML = `La somma è ${somma}`