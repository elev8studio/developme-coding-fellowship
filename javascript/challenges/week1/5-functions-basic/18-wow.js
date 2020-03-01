// Create a function, wow, that takes a number, n, as an argument. The function should return the word "Wo...ow", where there are n "o"s.

// Note: only use things that you've been taught to solve this

let repeat = (n, string) => {
    let output = "";

    for (let i = 1; i <= n; i++) {
        output += string;
    }

    return output;
}

let wow = (num) => {

    let output = repeat(num, "o");

    return `W${output}w`
}

console.log(wow(12)); // "Woooooooooooow"
console.log(wow(4)); // "Woooow"