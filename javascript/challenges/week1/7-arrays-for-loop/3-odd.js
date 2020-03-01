// Create a function, odd, that takes an array of numbers. Return an array containing only the odd numbers.

let isOdd = current => current % 2 !== 0;

let odd = values => {
    let odds = [];

    for (let i = 0; i < values.length; i += 1) {
        let current = values[i];

        if (isOdd(current)) {
            odds.push(current);
        }
    }
    return odds;
};

console.log(
    odd([1, 2, 3]), // [1, 3]
    odd([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);