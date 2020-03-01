// With the help of functions you've already written, write a new function largestPrimeFactor which takes a number, n, and returns its largest prime factor (i.e. the largest prime number that n divides by with no remainder)

// the factorOf function from earlier
let factorOf = (a, b) => b % a === 0;

// the prime function from earlier
let prime = n => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i * i <= n; i += 1) {
        if (factorOf(i, n)) {
            return false;
        }
    }

    return true;
};

let largestPrimeFactor = n => {
    // go through all numbers and find factors
    for (let i = 2; i < n; i += 1) {
        if (factorOf(i, n)) {
            // if factor found, divide n by it to get its factor pair
            let pair = n / i;

            // if the pair is prime you've found it
            if (prime(pair)) {
                return pair;
            }
        }
    }

    return n;
};

console.log(
    largestPrimeFactor(2), // 2
    largestPrimeFactor(12), // 3
    largestPrimeFactor(257), // 257
    largestPrimeFactor(100), // 5
    largestPrimeFactor(3556), // 127
    largestPrimeFactor(123456789), // 3803
);

// Note: Math.sqrt(16) would give you the square root of 16 and Math.floor(10.5) would round down to give you 10
