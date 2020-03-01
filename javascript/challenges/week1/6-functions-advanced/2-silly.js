// Create three functions:

// times2 should take one argument and multiply it by 2
// add4 should take one argument and add 4 to it
// divideBy6 should take one argument and divide it by 6

// Now, write a function silly that uses the three functions you've just created. It should take one argument and then times the value by 2, add 4 to it, and divide it by 6. The silly function shouldn't do any arithmetic itself.

let times2 = num => num *= 2;

let add4 = num => num += 4;

let divideBy6 = num => num / 6;

let silly = num => {
    let multiplied = times2(num);

    let added = add4(multiplied);

    let divided = divideBy6(added);

    return divided;
}

// Better solution:

// let silly = num => divideBy6(add4((times2(num))));

console.log(
    silly(10), // 4
    silly(22), // 8
);
