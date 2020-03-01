// With the help of your prime function, write a function that tells you the nth prime number:

let factorOf = (a, b) => b % a === 0;

let prime = n => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (factorOf(i, n)) {
            return false;
        }
    }

    return true;
};


let nthPrime = n => {
    let i = 1;

    let counter = 0;

    while (counter < n) {
        i += 1;

        if (prime(i)) {
            counter += 1;
        }
    }

    return i;
};

console.log(
    nthPrime(1), // 2
    nthPrime(2), // 3
    nthPrime(10), // 29
    nthPrime(100), // 541
    nthPrime(1000), // 7919
);