// Create a function, palindrome, that take a string as an argument. Return true if the given string is a palindrome (i.e. the same forwards as backwards).

// Hint: you turn a string into an array using str.split("") and back again using arr.join("")

let reverse = string => string.split("").reverse().join("");

let palindrome = string => string === reverse(string);

console.log(palindrome("fish")); // false
console.log(palindrome("madam")); // true
console.log(palindrome("bolton")); // false
console.log(palindrome("minim")); // true
