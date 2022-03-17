let utenteRegistrato = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];

let utenteInvitato = false

let i = 0;

let nomeUtente = prompt ("Scrivi il tuo nome");

while (i < utenteRegistrato.length){
    
    if (utenteRegistrato[i] == nomeUtente) {
        utenteInvitato = true;
    }
    
    if (utenteInvitato == true) {
        document.getElementById("risultato").innerHTML = "Puoi passare, sei stato invitato alla festa!";
    } else {
        document.getElementById("risultato").innerHTML = "Ci dispiace, ma non sei stato invitato :(";
    }

    i++
}
