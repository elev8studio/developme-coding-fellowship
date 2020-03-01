# Objects

## Challenges

Create a new file for each challenge.

- Create an object that represents you. Try and use at least one string, number, boolean, array, and object for the properties.

```javascript
let me = // your object here

console.log(me);
```

---

Copy the provided code and then add your own code in the `// ... your function here` bit. Don't worry about the weird `(() => { ... })()` notation - you'll learn about it next week. **Make sure you write a function for each challenge**.

1) Update `sameName` to return `true` if the objects have the same `name` property and `false` if they have different names.

```javascript
let sameName = (person1, person2) => {
    // your code here
};

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    console.log(sameName(a, b)); // false
    console.log(sameName(b, c)); // false
    console.log(sameName(c, d)); // false
    console.log(sameName(b, d)); // true
})();
```

2) Create a function, `oap`, that takes an object with an `age` property. It should return `true` if the `age` property is greater than `65` otherwise it should return `false`.

```javascript
// ... your function here

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 67 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    console.log(
        oap(a), // false
        oap(b), // true
        oap(c), // false
        oap(d), // true
    );
})();
```

3) Create a function, `total`, that takes an **array** of shopping item **objects** and adds their price together.

**Hint**: numbers have a `.toFixed(n)` method which rounds the number to the given number of decimal places and returns a string

```javascript
let total = items => {
    // your code here
};

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
```

4) Create a function, `names`, that takes an array of objects as an argument. Return a string containing all of the object `name`s separated by a comma.

```javascript
// ... your function here

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };

    let people = [a, b, c];

    console.log(
        names(people), // "Alice, Bob, Charlie"
    );
})();
```

5) Create a function, `oaps`, that takes an array of objects. It should return an array containing only those objects that have an `age` property greater than `65`

```javascript
// ... your function here

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    let folks = [a, b, c, d];

    console.log(
        oaps(folks), // [{ name: "Bob", age: 97 }]
    );
})();
```

6) Create an object literal that represents an address - use different properties for each part of the address. It should have a `fullAddress` method, which will return the full address as a nicely formatted string.

```javascript
// ... your object literal here

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"
```

7) Create a function, `daysSince`, that you pass a date. It should tell you how many days have passed since that date:

```javascript
// ... your function here

console.log(
    daysSince("1984-04-16"), // 12 thousand and something
);
```

8) Create a function, `roots`, that takes an array of numbers. The function should return an array of the square roots of each number:

```javascript
// ... your function here

console.log(
    roots([4, 16, 2500]), // [2, 4, 50]
);
```

9) Create a function, `hypotenuse`, that takes two numbers representing the "leg" sides of a right-angled triangle. Return the length of the hypotenuse. (ES6 added a `Math.hypot()` method, but try doing it without.)

**Hint**: [Pythagoras' Theorem](https://mathigon.org/course/triangles-and-trigonometry/pythagoras-theorem)

```javascript
// ... your function here

console.log(
    hypotenuse(3, 4), // 5
);
```


## Tricksy Challenges

1) Create a function, `titleCase`, that takes a string and converts it to title case.

```javascript
// ... your function here

console.log(
    titleCase("hello, my name is Jim"), // "Hello, My Name Is Jim"
);
```

2) Create a function called `frequency` that takes a string as an argument. It should return an object where each key represents a letter that appears in the string and the value is how many times that letter appears. It doesn't need to count spaces and it should ignore whether the letter is uppercase or lowercase.

```javascript
// your function here

console.log(frequency("The quick brown fox jumps over the lazy dog"));

/*
    {
        a: 1, b: 1, c: 1, d: 1, e: 3, f: 1, g: 1, h: 2, i: 1, j: 1, k: 1, l: 1, m: 1,
        n: 1, o: 4, p: 1, q: 1, r: 2, s: 1, t: 2, u: 2, v: 1, w: 1, x: 1, y: 1, z: 1
    }
*/

console.log(frequency("Wkh sdvvzrug lv vhyhq grqw whoo dqbrqh"))

/*
    {
        b: 1, d: 2, g: 2, h: 5, k: 1, l: 1, o: 2,
        q: 4, r: 3, s: 1, u: 1, v: 4, w: 3, y: 1, z: 1
    }
*/
```
