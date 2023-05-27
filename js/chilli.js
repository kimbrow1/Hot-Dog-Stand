'use strict';

let salesPrice = 3.99;
let discount = 10;
let saleTax = 5.2;


let qty = prompt("How many Hot Dogs?");
let price = salesPrice - (salesPrice * discount / 100);
let totalPrice = (price * qty)
let finalPrice = totalPrice + (totalPrice * saleTax / 100) 

alert (`The final price is ${finalPrice}`);

let salesPageElm = document.getElementById('sale-page');

let saleTaxElm = document.createElement('i')
saleTaxElm.textContent = saleTax;
salesPageElm.appendChild(saleTaxElm);

document.getElementById("Cost").textContent = totalPrice;
document.getElementById("tax");
document.getElementById("Cost");





