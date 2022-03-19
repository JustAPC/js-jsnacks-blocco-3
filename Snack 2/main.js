let n = parseInt(prompt("Inserisci il numero di array"));

let i = 0;

while ( i < n ) {
    
    let nuovoArray = [];
    
    for (let y = 0; y < 10; y++){
        nuovoArray.push (Math.floor(Math.random() * 100) + 1)
    }
    i++
    console.log(nuovoArray)
}