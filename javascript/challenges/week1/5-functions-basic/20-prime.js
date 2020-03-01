// Create a function, prime, that takes a number as an argument. The function should return true if the number is prime and false if it is not.

let prime = n => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(
    prime(1), // false
    prime(2), // true
    prime(3), // true
    prime(4), // false
    prime(7), // true
    prime(15), // false
    prime(85), // false
    prime(257), // true
    prime(5119), // true
    prime(5121), // false
    prime(17523), // false
    prime(15487319), // true
);