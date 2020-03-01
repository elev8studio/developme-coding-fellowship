# Challenges

Create a new file for each challenge. Copy the provided code and then add your own code in the `// ... your function here` bit.

## Object Spread Operator

- Copy the `person` object and update the value of the `name` property to be "Bob":

```js
let person = {
    name: "Alice",
    age: 38,
};

let copied = {
    // ... your code here
};

console.log("Expected: false\t Actual:", copied === person);
console.log("Expected: Bob\t Actual:", copied.name);
console.log("Expected: 38\t Actual:", copied.age);
```


## Classes

For the following challenges, **look at how the class is being used to work out what it needs to do**.

1) Create a class that represents a light switch

```javascript
// ... your code to create a lightswitch

let lightswitch = new Lightswitch();

// you can turn it on
lightswitch.turnOn();

// you can check whether it is on or not
console.log(lightswitch.isOn()); // true

// you can turn it off
lightswitch.turnOff();

console.log(lightswitch.isOn()); // false
```

2) Create a class that represents a car

```javascript
// ... your code to create a car

// you pass in a make and number plate
let car = new Car("Ford", "XY11 4TY");

// you can get various bits of information about it
console.log(car.getNumberplate()); // "XY11 4TY"
console.log(car.getMake()); // "Ford"
console.log(car.getMileage()); // 0

// you can add journey
car.addJourney(100);
console.log(car.getMileage()); // 100

car.addJourney(200);
console.log(car.getMileage()); // 300
```


3) Create a class that represents an address - use different properties for each part of the address. It should have a `fullAddress` method, which will return the full address as a nicely formatted string.

```javascript
// ... your object class here

let address = new Address("1 Made Up Street", "BS4 8TR", "Bristol");

console.log(
    address.postcode, // BS4 8TR
    address.town, // Bristol
    address.fullAddress(), // "1 Made Up Street, Bristol, BS4 8TR"
);
```


## Tricksy Challenges

1) Copy the `person` object and update the value of the `name` property to be "Bob" and the value of the `postcode` property to be `BS4 9EE`:

```js
let person = {
    name: "Alice",
    age: 38,
    address: {
        city: "Bristol",
        postcode: "BS7 3TG",
    },
};

let copied = {
    // ... your code here
};

console.log("Expected: false\t Actual:", copied === person);
console.log("Expected: Bob\t Actual:", copied.name);
console.log("Expected: 38\t Actual:", copied.age);
console.log("Expected: false\t Actual:", copied.address === person.address);
console.log("Expected: BS4 9EE\t Actual:", copied.address.postcode);
console.log("Expected: Bristol\t Actual:", copied.address.city);
```

2) Create a class that represents a shopping basket. It should have a property, `items`, that keeps track of the items in the basket. It should have an `add` method to add items to the basket. It should have a `total` method that returns the value of all the items' prices. It should have a `list` method that returns an array of item names.

**Hint**: basket items will need to be an class too

```javascript
// ... your code to create a Basket and BasketItem class here

let basket = new Basket();

let item1 = new BasketItem("coffee", 3.50);
let item2 = new BasketItem("tea", 2.50);

basket.add(item1);
basket.add(item2);

console.log(
    basket.total(), // £6.00
    basket.list(), // ["coffee", "tea"]
);
```

3) Copy the object and update the `numbers` property to only contain numbers bigger than 10:

```js
let ob = {
    name: "Wombat",
    numbers: [1, 45, 2, 58, 3],
};

let copy = {
    // your code here
};

console.log("Expected: false\t Actual:", copy === ob);
console.log("Expected: false\t Actual:", copy.numbers === ob.numbers);
console.log("Expected: [45, 58]\t Actual:", copy.numbers);
console.log("Expected: Wombat\t Actual:", copy.name);
```

4) Using an object as a **Map**: create a function `oldest` that returns the name of the oldest person. Remember, the name is a **key**, not a property.

```javascript
// ... your function here

(() => {
    // a map object
    // name as the key
    // ages as the value
    let folks = {
        "Alice": 29,
        "Bob": 45,
        "Carol": 67,
        "Dan": 32,
    };

    console.log(oldest(folks)); // "Carol"
})()
```

5) Create two classes, one that represents a recipe and one that represents an ingredient

**Hint**: you can use `"\n"` to add a line break to a string

```javascript
// your recipe and ingredient classes here


// ingredients take a name, followed by an array of dietary notes
let flour = new Ingredient("Flour", ["gluten"]);
let eggs = new Ingredient("Eggs", ["animal produce"]);
let sugar = new Ingredient("Sugar", []);
let butter = new Ingredient("Butter", ["dairy", "animal produce"]);

// a recipe takes a name
let cake = new Recipe("Cake");

// we can add ingredients plus amounts
cake.addIngredient(flour, "200g");
cake.addIngredient(butter, "100g");
cake.addIngredient(sugar, "50g");
cake.addIngredient(eggs, 2);

// we can add a method
cake.addMethod("Put them in a bowl, mix them together, cook for a bit. Job's a good'un");

// we can see the recipe
console.log(cake.display());

/*
    Cake

    Ingredients

    - 200g Flour
    - 100g Butter
    - 50g Sugar
    - 2 Eggs

    Method

    Put them in a bowl, mix them together, cook for a bit. Job's a good'un

*/

// we can list dietary information
console.log(cake.dietary()); "gluten, animal produce, dairy"


// is the recipe vegan? (i.e. contains animal produce)
console.log(cake.vegan()); // false
```

Try adding a few more ingredients/recipes to double check everything works.
