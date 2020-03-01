# Functions

---

## Challenges

Create a new file for each challenge. Copy the provided code and then add your own code in the `// ... your function here` bit.

1) Create a function, `concat`, that takes two strings as arguments. The function should return the two strings joined together with a space in between.

    ```javascript
    let concat = (firstWord, secondWord) => {
        // your code here
    };

    console.log(concat("fish", "sticks")); // "fish sticks"
    console.log(concat("hello", "world")); // "hello world"
    ```

2) Create a function, `hello`, that takes a string as an argument. The function should return the string "hello *name*".

    ```javascript
    // ... your function here

    console.log(hello("alice")); // "hello alice"
    console.log(hello("bob")); // "hello bob"
    ```

3) Create a function, `divide`, that takes two numbers as arguments. The function should return the first number divided by the second number.

    ```javascript
    // ... your function here

    console.log(divide(4, 2)); // 2
    console.log(divide(20, 2)); // 10
    ```

4) Create a function, `product`, that takes two numbers as arguments. The function should return the first number multiplied by the second number.

    ```javascript
    // ... your function here

    console.log(product(8, 2)); // 16
    console.log(product(100, 5)); // 500
    ```

5) Create a function, `divide3`, that takes three numbers as arguments. The function should return the first number divided by the second number divided by the third number.

    ```javascript
    // ... your function here

    console.log(divide3(8, 2, 2)); // 2
    console.log(divide3(100, 20, 5)); // 1
    ```

6) Create a function, `helloYouTwo`, that takes two strings as arguments. The function should return the string "Hello *first-name* and *last-name*".

    ```javascript
    // ... your function here

    console.log(helloYouTwo("Alice", "Bob")); // "Hello Alice and Bob"
    console.log(helloYouTwo("Carol", "Dylan")); // "Hello Carol and Dylan"
    ```

7) Create a function, `helloU2`, that doesn't take any arguments. The function should return the string "Hello Bono and the Edge".

    ```javascript
    // ... your function here

    console.log(helloU2()); // "Hello Bono and the Edge"
    ```

8) Create a function, `stone`, that takes a weight in kg and converts it to stone

    ```javascript
    // ... your function here

    console.log(
        stone(74), // 11.653
        stone(50), // 7.87365
    );
    ```

9) Create a function, `fahrenheit`, that takes a temperature in Celsius and converts it to Fahrenheit

    ```javascript
    // ... your function here

    console.log(
        fahrenheit(12), // 53.6
    );
    ```

10) Create a function, `average3`, that takes three numbers as arguments. The function should return the average of the numbers.

    **Hint**: to work out the average of three numbers, just add them all together and divide by 3. You'll need to make sure you add the numbers first and *then* divide them by 3 - you can use a variable or brackets to do this.

    ```javascript
    // ... your function here

    console.log(
        average3(1, 2, 3), // 2
    );
    ```

11) Create a function, `average5`, that takes five numbers as arguments. The function should return the average of the numbers.


    ```javascript
    // ... your function here

    console.log(
        average5(1, 2, 3, 4, 5), // 3
    );
    ```

12) Create a function, `divisibleBy3`, that takes a number as an argument. The function should return `true` if the number is divisible by 3 and `false` if it isn't.

    ```javascript
    // ... your function here

    console.log(divisibleBy3(3)); // true
    console.log(divisibleBy3(4)); // false
    ```

13) Create a function, `odd`, that takes a number as an argument. The function should return `true` if the number is odd and `false` if it is even.

    ```javascript
    // ... your function here

    console.log(odd(1)); // true
    console.log(odd(2)); // false
    ```

14) Create a function, `even`, that takes a number as an argument. The function should return `true` if the number is even and `false` if it is odd.

    ```javascript
    // ... your function here

    console.log(even(1)); // false
    console.log(even(2)); // true
    ```

15) Create a function `max`, that takes two numbers as arguments. The function should return the highest of the numbers.

    ```javascript
    // ... your function here

    console.log(
        max(1, 2), // 2
        max(3, -2), // 3
        max(-3, -5), // -3
    );
    ```

16) Create a function `min`, that takes two numbers as arguments. The function should return the smallest of the numbers.

    ```javascript
    // ... your function here

    console.log(
        min(1, 2), // 1
        min(3, -2), // -2
        min(-3, -5), // -5
    );
    ```

17) Create a function, `factorOf`, that takes two numbers as arguments. The function should return `true` if the first number is a factor of the second number (i.e. the second number divided by the first has no remainder) and `false` if not.

    ```javascript
    // ... your function here

    console.log(factorOf(2, 16)); // true
    console.log(factorOf(3, 16)); // false
    ```

---

## Tricksy Challenges

1) Create a function, `wow`, that takes a number, `n`, as an argument. The function should return the word "Wo...ow", where there are `n` "o"s.

    **Note**: only use things that you've been taught to solve this (i.e. don't use `.repeat()`)

    ```javaScript
    // ... your function here

    console.log(wow(12)); // "Woooooooooooow"
    console.log(wow(4)); // "Woooow"
    ```

2) Create a function, `skip`, that takes two numbers, `skip` and `max`. The function should return the total of the numbers from 1 to `max` excluding any numbers divisible by `skip`.

    ```javascript
    // ... your function here

    console.log(
        skip(4, 20), // 150
    );
    ```

3) Create a function, `prime`, that takes a number as an argument. The function should return `true` if the number is prime and `false` if it is not.

    ```javascript
    // ... your function here

    console.log(
        prime(1), // false
        prime(2), // true
        prime(3), // true
        prime(4), // false
        prime(7), // true
        prime(15), // false
        prime(85), // false
        prime(257), // true
        prime(5119), // true
        prime(5121), // false
        prime(17523), // false
        prime(15487319), // true
    );
    ```
