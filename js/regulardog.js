'use strict';
let salePrice = 1.99;

let saleTax = 5.2;

let discount = 10;

let qty = prompt('Would you like an Regular dog?');
let price = salePrice - (salePrice * discount / 100);
let totalPrice = price * qty;
let finalPrice = totalPrice + (totalPrice * saleTax / 100)

alert (`Your total is ${finalPrice}`);

let salesPageElm = document.getElementById('sale-page')
 saleTaxElm.textContent = saleTax;
 salesPageElm.appendChild(saleTaxElm);

 document.getElementById("Cost").textContent('i');
 document.getElementById("tax").textContent = saleTax;
 document.getElementById("Cost").textContent = finalPrice;
