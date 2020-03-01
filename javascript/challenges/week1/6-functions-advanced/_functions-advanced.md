# Functions

---

## Challenges

1) Create a function, `even`, that takes a number as an argument. The function should return `true` if the number is even and `false` if it is odd. *Use the `odd` function that you've previously written.*

```javascript
let odd = number => number % 2 !== 0;

// ... your function here

console.log(even(1)); // false
console.log(even(2)); // true
```

2) Finish the tricksy challenges from earlier if you haven't already. Then, use function composition to break them up into smaller functions. You may find you've written some of them already!

## Tricksy Challenges

Create a new file for each challenge. Copy the provided code and then add your own code in the `// ... your function here` bit.

1) Create three functions:

- `times2` should take one argument and multiply it by 2
- `add4` should take one argument and add 4 to it
- `divideBy6` should take one argument and divide it by 6

Now, write a function `silly` that uses the three functions you've just created. It should take one argument and then times the value by 2, add 4 to it, and divide it by 6. The `silly` function shouldn't do any arithmetic itself.

```javascript
// ... your functions here

console.log(
    silly(10), // 4
    silly(22), // 8
);
```

2) With the help of your `prime` function, write a function that tells you the `n`th prime number:

```javascript
// ... your function here

console.log(
    nthPrime(1), // 2
    nthPrime(2), // 3
    nthPrime(10), // 29
    nthPrime(100), // 541
    nthPrime(1000), // 7919
);
```

3) Create a recursive function that given a number, `n`, will output the `n`th Fibonacci number.

```javascript
// ... your function here

console.log(
    fibonacci(1), // 1
    fibonacci(2), // 1
    fibonacci(3), // 2
    fibonacci(4), // 3
    fibonacci(5), // 5
    fibonacci(6), // 8
    fibonacci(10), // 55
);
```

4) Now try writing the `fibonacci` function *without* using recursion. Which is more elegant? Which is more efficient? (Try finding the 100th Fibonacci number with each version)

5) With the help of functions you've already written, write a new function `largestPrimeFactor` which takes a number, `n`, and returns its largest prime factor (i.e. the largest prime number that `n` divides by with no remainder)

```javascript
// ... your function here

console.log(
    largestPrimeFactor(2), // 2
    largestPrimeFactor(12), // 3
    largestPrimeFactor(257), // 257
    largestPrimeFactor(100), // 5
    largestPrimeFactor(3556), // 127
    largestPrimeFactor(123456789), // 3803
);
```

**Note**: `Math.sqrt(16)` would give you the square root of 16 and `Math.floor(10.5)` would round down to give you 10
