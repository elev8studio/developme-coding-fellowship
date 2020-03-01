// Create a function, merge, that takes two arrays as arguments. It should return a new array containing the elements of both arrays.

// Using the spread operator
let merge = (a, b) => [...a, ...b];

console.log(
    merge([2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12]), // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);

// Using .concat()
let merge2 = (a, b) => a.concat(b);

console.log(
    merge2([2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12]), // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);