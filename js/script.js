console.log("JS Ok");


/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* 
PASSAGGI:

1 - richiediamo numero di chilometri che l'utente deve percorrere (var = km + (parseint)prompt)
2 - richiediamo l'età del passeggero (var = age + parseint(prompt))
3 - definire il prezzo del biglietto seguendo le regole (var prezzo = alla variabile km * 0.21€/km)
4 - applicare sconto per minorenni (if minorenne la variabile price *20% di sconto)
5 - applicare sconto per over 65 - (if over65 la variabile price *40% di sconto)
6 - stampare prezzo con massimo due decimali --> console.log del price - max due numeri decimali -
*/


var km = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log("Chilometri da percorrere", km);

var age = parseInt(prompt("Quanti anni hai?"));
console.log("Anni del passeggero", age);

var price = (km * 0.21);

// console.log("Prezzo biglietto", price, " €");

var underageDiscount = (price / 100 * 20).toFixed(2);
// console.log("Sconto da minorenne", underageDiscount);

var over65Discount = (price / 100 * 40).toFixed(2);
// console.log("Sconto per over 65", over65Discount);


// condizione se minorenne

if (age < 18) {
    console.log("Prezzo biglietto scontato per minorenne", price - underageDiscount, " €");
    document.getElementById("price").innerHTML = price - underageDiscount + " €";

    
} else {
    console.log("Prezzo intero del biglietto", price);
    document.getElementById("price").innerHTML = price + " €";
}

// condizione se over 65

if (age >= 65) {
    console.log("Prezzo scontato per gli over65", price - over65Discount, " €");
    document.getElementById("price").innerHTML = price - over65Discount + " €";
} else {
    console.log("Prezzo intero del biglietto", price, " €");
    document.getElementById("price").innerHTML = price + " €";
}


// validation
// km 

if (km <= 0) {
    alert("Hai inserito dei chilometri non validi!")
}

