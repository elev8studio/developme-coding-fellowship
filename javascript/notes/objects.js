let me = {
    name: "Jonathan",
    favouriteColor: "orange",
    age: 29,
    hasChildren: false,
    saysHello: () => console.log("Hello " + name),
    address: {
        name: "Trinity College",
        street: "Stoke Hill",
        town: "Bristol",
        postcode: "BS9 1JP",
    },
    add: (a, b) => a + b,
    minus(a, b) {
        return a - b;
    },
    sayYourName() {
        console.log(this.name);
        this.name = "Jonas";
    }
};

// Add new object property
me.legs = 2;

let age = me.age;
let town = me.address.town;
let postcode = me.address["postcode"];

console.log(town);


let selected = me.favouriteColor;
console.log(selected);

console.log(me.add(1, 2));
console.log(me.minus(5, 2));

let x = me;
me.sayYourName();
me = 10;
x.sayYourName();

let empty = {};