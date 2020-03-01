# Quiz

## Rules

- If you get stuck on one for more than 15 minutes, try a different one and come back to it later.
- Feel free to vent any frustration using interpretive dance.

---

## Brain Code


1. Why do these yield different results?

    ```javascript
    "1" + 2 +  3 ; // Equals "123"
     3  + 2 + "1"; // Equals "51"
     3  + 2 +  1 ; // Equals 6
    ```

    **JavaScript runs the expression from left to right. The first expression begins with a string, which converts the other 2 values to a string as well. The second expression begins with 2 numbers so adds them together, but ends with a string, so concatenates the string value onto the result of the initial addition.The last expression is a straightforward numerical addition.**


Work out the answers to the following without running the code. Once you've worked out the answer, run the code in node to check that you're right.

2. What does `foo` equal?

    ```javascript
    let bar = 12;
    let foo = bar > 10 ? bar : 15;

    console.log(foo); // ??
    ```
    **foo equals 12 because bar (12) is greater than 10, which in the case of this ternary operator, returns foo = bar**

3. What does `x` equal?

    ```javascript
    let x  = 12;

    let add = function (x) {
            x += 12;
            return x;
        };

    add(x);

    console.log(x); // ??
    ```

    **x equals 12 - the function is parsing x which is defined in block scope, and therefore has no value. x += 12 translates to 0 + 12 = 12.**


4. What does `x` equal?

    ```javascript
    let x  = 12;

    let add = function () {
            x += 12;
            return x;
        };

    add(x);

    console.log(x); // ??
    ```

    **x equals 24 - the function is referencing the global variable x = 12, and the function translates to 12 + 12 = 24.**

---
