// Create a class that represents a shopping basket. It should have a property, items, that keeps track of the items in the basket. It should have an add method to add items to the basket. It should have a total method that returns the value of all the items' prices. It should have a list method that returns an array of item names.

// Hint: basket items will need to be a class too

let add = (a, b) => a + b;

class Basket {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items = [
            ...this.items,
            item,
        ]
    }

    total() {
        let total = this.items.reduce((items, item) => items + item.getPrice(), 0);
        
        return '£' + total.toFixed(2);
    }

    list() {
        return this.items.map(item => item.getName());
    }
}

class BasketItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }
}

let basket = new Basket();

let item1 = new BasketItem("coffee", 3.50);
let item2 = new BasketItem("tea", 2.50);

basket.add(item1);
basket.add(item2);

console.log(
    basket.total(), // £6.00
    basket.list(), // ["coffee", "tea"]
);
