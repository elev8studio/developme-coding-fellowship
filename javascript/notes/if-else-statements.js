let username = "jonathan";
let password = "password";

if (username === "admin" && password === "secret") {
    console.log("Hello, Admin");
} else if (username === "jonathan") {
    console.log("Welcome, Jonathan!")
} else {
    console.log("Intruder alert!");
}

// ternary operator

let x = 10;
let y = 20;

let z = x > y ? 30 : 50;

console.log(z);