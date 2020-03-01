// Write a function, longest, that takes an array of strings and returns the longest string:

let longest = words => words.reduce((longest, chars) => (longest.length > chars.length) ? longest : chars, words[0]);

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);
