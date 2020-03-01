// Create a function, reverse, that takes an array of strings. Return a new array where each string is reversed.

// Hint: arrays have a reverse() method and you can turn a string into an array of letters using str.split("") and turn it back into a string using arr.join("")

let reverse = values => values.map(word => word.split("").reverse().join(""));

console.log(
    reverse(["fish", "bolton", "green"]), // ["hsif", "notlob", "neerg"]
);