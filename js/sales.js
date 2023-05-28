'use strict'

let hours =
    ['8am', '9am', '10am', '11am', '12noon', '1pm', '2pm', '3pm', '4pm']

let state = {
    stores: []
}
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customers = []
}
console.log(Store);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}
Store.prototype.render = function () {
    let firstRow = document.createElement('tr');
    let firstCityData = document.createElement('td');
    firstCityData.textContent = this.name;
    let table1Elm = document.getElementById("store");
    firstRow.appendChild(firstCityData);
    table1Elm.appendChild(firstRow);

    let firstHours = document.createElement('tr');
    
    for (let i = 0; i < this.customers.length; i++) {
        let secondData = document.createElement('td');
        secondData.textContent = this.customers[i];
        let secondElm = document.getElementById("store");
        storeRow.appendChild(secondData);
        secondElm.appendChild(firstHours);
    }
}
for (let i = 0; i < hours.length; i++) {
    let hoursNameTD = document.createElement('td');
    let table2Elm = document.getElementById("tables");
    hoursNameTD.textContent = hours[i];
    table2Elm.appendChild(hoursNameTD);
    console.log(hours[i]);
}
Store.prototype.calcuate = function () {
    for (let i = 0; i < 9; i++) {
        let newTown = getRandomInt(this.min, this.max);
        let totalTown = Math.round(this.avg * townXam);
        this.customers.push(totalTown);
        console.log(this.name, totalTown);
    }
}
let store1 = new Store("seattle", 23, 65, 6.3);
let store2 = new Store("toyko", 3, 24, 1.2);
let store3 = new Store("dubai", 11, 38, 3.7);
let store4 = new Store("paris", 20, 38, 2.3);
let store5 = new Store("lima", 2, 16, 4.8);
console.log(store, store2, store3, store4, store5);


state.stores.push(store1);
state.stores.push(store2);
state.stores.push(store3);
state.stores.push(store4);
state.stores.push(store5);
console.log(state.stores);

for (let store of state.stores) {
    store.calcuate();
    store.render();
}
console.log(state.stores);