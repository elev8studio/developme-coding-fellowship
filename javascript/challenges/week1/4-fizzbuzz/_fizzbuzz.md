# FizzBuzz

*a.k.a. Everyone's Favourite Job Interview Question*

The FizzBuzz challenge is as follows:

- write some code that will output the numbers 1 to 100 in the console
- *unless* the number is divisible by 3, in which case output "Fizz"
- *or* the number is divisible by 5, in which case output "Buzz"
- *if* the number is divisible by 3 *and* 5, output "FizzBuzz"

The first lines of output should look like this:

```bash
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
```

If you can solve FizzBuzz, then you understand the basic concepts of programming:

- Types: you have to work with numbers and strings
- Variables: more elegant solutions require variables
- Conditionals: you have to make decisions
- Loops: you'll need to use a loop


## Elegance & Changeability
You should try and write the most elegant code that you can. But how do you know if your code is elegant?

Many people associate elegance with brevity: if you have two pieces of code that do the same thing, generally the shorter of the two does it more elegantly. But this shouldn't be our key metric, as it can encourage people to write code that's so short as to be impossible to follow.

A better metric of elegance is "changeability": if we need to change the functionality of our code, how many lines of code would we need to update?

For example, if we wanted to update FizzBuzz so it outputs "Spoon" for lines divisible by 4 (so, for example, we'd get "Spoon" on line 4, "FizzSpoon" on line 12, and "SpoonBuzz" on line 20) we should only need to add an extra line or two to the code. If we need to add lots of additional code or make lots of changes to the existing code then the solution we've come across might not be the most elegant way to do it.

> Design is more the art of preserving changeability than it is the act of achieving perfection
- Sandi Metz, Practical Object-Oriented Design in Ruby



## Additional Resources

- [FizzBuzz in Almost Every Language](https://rosettacode.org/wiki/FizzBuzz)
- [FizzBuzz: One Simple Interview Question](https://www.youtube.com/watch?v=QPZ0pIK_wsc)

## The Solution!

```js
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
```
