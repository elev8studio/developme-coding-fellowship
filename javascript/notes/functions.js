let add = function(a, b) {
    return a + b;
}

let result = add(5, 6);
let result2 = add(56, 10);

console.log(result, result2);

// Multiple ways to write functions
let join = (one, two) => one + two;
let joined = join(10, 36);
console.log(joined);