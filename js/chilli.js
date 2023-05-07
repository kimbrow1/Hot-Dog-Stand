'use strict';

let price = 6.99;

let salesTax = 5.2;

let discount = 10;

let discount2 = 5;

let shippingCost = 3.99;



let dog1 = prompt("How many Hot Dogs?");

let subtotal = price * dog1;

alert(subtotal);


let tax =  price * saleTax / 100;

let total = subtotal + tax;

alert(total);


let discount1 = price * salesTax / discount;

let discountedPrice1 = total * salesTax / discount;

alert(discountedPrice1);


let discounts2 = price * salesTax / discount2;

let discountedPrice2 = total * salesTax / discount2;

alert(discountedPrice2);



let shippingCost;

if (total >= 25) {
   alert( "Your shipping will be free")
    shippingCost = 0;
}else {
    alert("The cost of shipping is 3.99")

    shippingCost= 3.99
}






