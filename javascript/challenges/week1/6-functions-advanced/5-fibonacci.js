// Now try writing the `fibonacci` function *without* using recursion

let fibonacci = n => {
    // keep track of previous two values
    let p1 = 1;
    let p2 = 1;

    // won't run for n = 1 or n = 2
    // for other values of n, work out each number in turn
    for (let i = 2; i < n; i += 1) {
        // keep track of old p2 value
        let temp = p2;

        // add the last two value and store in p2
        p2 = p1 + p2;

        // set p1 to the previous value of p2
        p1 = temp;
    }

    return p2;
};

console.log(
    fibonacci(1), // 1
    fibonacci(2), // 1
    fibonacci(3), // 2
    fibonacci(4), // 3
    fibonacci(5), // 5
    fibonacci(6), // 8
    fibonacci(7), // 13
    fibonacci(8), // 21
    fibonacci(9), // 34
    fibonacci(10), // 55
    fibonacci(100), // works with non-recursive version almost instantly
);
