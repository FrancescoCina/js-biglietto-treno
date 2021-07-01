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

// VARIABILI

var km = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log("Chilometri da percorrere", km);

var age = parseInt(prompt("Quanti anni hai?"));
console.log("Anni del passeggero", age);

var price = (km * 0.21).toFixed(2);
console.log("il prezzo pieno del biglietto è: ", price);

var underageDiscount = (price * 0.20).toFixed(2);
// console.log("Sconto da minorenne", underageDiscount);

var over65Discount = (price * 0.40).toFixed(2);
// console.log("Sconto per over 65", over65Discount);

// variabili con prezzo già calcolato

var underagePriceDiscount = (price - underageDiscount).toFixed(2);

var overPriceDiscount = (price - over65Discount).toFixed(2);


// CONDIZIONI

// condizione se minorenne

if (age < 18) {
    console.log("Prezzo biglietto scontato per minorenne", underagePriceDiscount, " €");
    document.getElementById("price").innerHTML = underagePriceDiscount + " €";

// condizione se over 65
} else if ((age >= 65)) {
    console.log("Prezzo scontato per gli over65", overPriceDiscount, " €");
    document.getElementById("price").innerHTML = overPriceDiscount + " €";

// prezzo per età compresa tra 18 e 64 anni
}   else {
    console.log("Prezzo biglietto intero", price, " €");
    document.getElementById("price").innerHTML = price + " €";
}


// VALIDATION

// validation km
if (km <= 0) {
    alert("Hai inserito dei chilometri non validi!")
}

// validation age
if (age <= 10) {
    alert("Sei troppo piccolo!! Il tuo biglietto deve essere prenotato da un maggiorenne!!")
}   

// validation number 
if (isNaN(km) || isNaN(age)) {
    alert("Nei campi compilati, non hai inserito un numero")
} 