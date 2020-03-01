// My first solution and the most common first solution to FizzBuzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// This is the best solution to the FizzBuzz challenge. It includes an output variable and a ternary operator.

// Start count from 1 to 100
for (i = 1; i <= 100; i++) {

    // Create empty string variable
    let output = "";

    // If divisible by 3 with no remainder, concatenate Fizz to output
    if (i % 3 === 0) {
        output += "Fizz";
    }

    // If divisible by 4 with no remainder, concatenate Spoon to output
    if (i % 4 === 0) {
        output += "Spoon";
    }

    // If divisible by 5 with no remainder, concatenate Buzz to output
    if (i % 5 === 0) {
        output += "Buzz";
    }

    // Use ternary operator to test value of output. If output equals empty string (true) then print empty number. If output does not equals empty string (false), then concatenate output string.
    console.log(output === "" ? i : output); // expression ? if true : if false

}
