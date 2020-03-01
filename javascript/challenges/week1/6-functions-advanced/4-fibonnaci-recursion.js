// Create a recursive function that given a number, `n`, will output the `n`th Fibonacci number.

// the advantage of using a recursive function for this is that it expresses what the fibonacci sequence is
let fibonacci = n => n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

// however, the number of times it calls itself grows exponentially with higher values of n so it's awful from a performance perspective
// anything above n = 50 will take a very long time to complete
// n = 70 would take thousands of years to work out
// n = 100 would take billions of years

console.log(
    fibonacci(1), // 1
    fibonacci(2), // 1
    fibonacci(3), // 2
    fibonacci(4), // 3
    fibonacci(5), // 5
    fibonacci(6), // 8
    fibonacci(10), // 55
);
