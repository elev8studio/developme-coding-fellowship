// Create a function, double, that takes an array of numbers as an argument. Return a new array containing each number doubled.


let double = values => {

    let doubled = [];

    for (let i = 0; i < values.length; i += 1) {
        let current = values[i];

        doubled.push(current * 2);
    }

    return doubled;
}

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);