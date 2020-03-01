// Create a function, total, that takes an array of shopping item objects and adds their price together.

// Hint: numbers have a .toFixed(n) method which rounds the number to the given number of decimal places and returns a string

let add = (a, b) => a + b;

let total = items => items.map(item => item.price).reduce(add, 0).toFixed(2);

(() => {
    let shoppingList = [{
        name: "coffee",
        price: 3.50,
    }, {
        name: "tea",
        price: 2.50,
    }, {
        name: "toblerone",
        price: 3.20,
    }, {
        name: "newspaper",
        price: 0.10,
    }];

    console.log(
        total(shoppingList), // "9.30"
    );
})();
