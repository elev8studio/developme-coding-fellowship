# Arrays

## Challenges

Copy the provided code and then add your own code in the `// ... your function here` bit. **Make sure you write a function for each challenge**.

You might be able to reuse functions you've written already for some of these challenges.

1) Create a function, `squares`, that takes an array of numbers as an argument. Using `.map()` return a new array containing the square of each number.

```javascript
let squares = values => {
return values.map(/* your code here */);
};

console.log(
squares([2, 3, 4]), // [4, 9, 16]
squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);
```

2) Create a function, `odd`, that takes an array of numbers. Using `.filter()` return an array containing only the odd numbers.

```javascript
let odd = values => {
    // your code here
};

console.log(
    odd([1, 2, 3]), // [1, 3]
    odd([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);
```

3) Create a function, `max`, that takes an array of numbers. Using `.reduce()` return the largest number.

**Hint**: don't try and use `.sort()` (it won't do what you think) or `Math.max()` (that's cheating)

```javascript
// ... your function here

console.log(
    max([2, 4, 6, 4, 7, 5]), // 7
    max([-2, 4, 6, 4, -7, 5]), // 6
    max([-2, -4, -6, -4, -7, -5]), // -2
);
```

4) Create a function, `average`, that takes an array of numbers as an argument. Using `.reduce()` return the average value of all the numbers.

```javascript
// ... your function here

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
    average([10, 30]), // 20
    average([-4, -8, -9]), // -7
);
```

5) Create a function, `oddSquares`, that takes an array of numbers as an argument. Using `.map()` *and* `.filter()` return a new array containing the squares of each number, but only if the square is odd.

```javascript
// ... your function here

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);
```

6) Create a function, `double`, that takes an array of numbers as an argument. Using `.map()` Return a new array containing each number doubled.

```javascript
// ... your function here

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);
```

7) Create a function, `timesBy`, that takes an array of numbers and a number as arguments. Using `.map()` return a new array containing each number in the array multiplied by the value of the second argument.

```javascript
// ... your function here

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4, 5, 6], 5), // [10, 15, 20, 25, 30]
    timesBy([2, 3, 4, 5, 6], -5), // [-10, -15, -20, -25, -30]
    timesBy([-2, -3, -4, -5, -6], -5), // [10, 15, 20, 25, 30]
);
```

8) Create a function, `divisibleBy3`, that takes an array of numbers. Using `.filter()` return an array containing only the numbers that are divisible by 3.

```javascript
// ... your function here

console.log(
    divisibleBy3([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3([3, 4, 5, 9]), // [3, 9]
);
```

9) Create a function, `min`, that takes an array of numbers. Using `.reduce()` return the smallest number.

**Hint**: don't try and use `.sort()` - it won't do what you think

```javascript
// ... your function here

console.log(
    min([2, 4, 6, 4, 7, 5]), // 2
    min([-2, 4, 6, 4, -7, 5]), // -7
    min([-2, -4, -11, -4, -7, -5]), // -11
);
```

10) Create a function, `sumBoth`, that takes two arrays of numbers as arguments. Using `.reduce()` return the sum of all the numbers from both arrays.

```javascript
// ... your function here

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);
```

11) Create a function, `squaresDivisbleBy3`, that takes an array of numbers as an argument. Using `.map()` *and* `.filter()` return a new array containing the squares of each number, but only if the square is divisible by 3.

```javascript
// ... your function here

console.log(
    squaresDivisbleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);
```

12) Create a function, `merge`, that takes two arrays as arguments. It should return a new array containing the elements of both arrays.

1. Try doing it using the spread operator
2. Trying doing it *without* using the spread operator or `.concat()`

```javascript
// ... your function here

console.log(
    merge([2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12]), // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);
```

## Tricksy Challenges

1) Create a function, `reverse`, that takes an array of strings. Return a new array where each string is reversed.

**Hint**: arrays have a `reverse()` method and you can turn a string into an array of letters using `str.split("")` and turn it back into a string using `arr.join("")`

```javascript
// ... your function here

console.log(
    reverse(["fish", "bolton", "green"]), // ["hsif", "notlob", "neerg"]
);
```

2) Create a function, `both`, that takes two arrays. Return a new array containing any value that is in both arrays.

1. Try doing it with `.indexOf()`
2. Try doing it *without* `.indexOf()`

```javascript
// ... your function here

console.log(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);
```

3) Create a function, `sortNumbers`, that takes an array of numbers. Return an array so that the values are ordered numerically.

**Hint**: look at the [documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for the the array `sort()` method

```javascript
// ... your function here

console.log(
    sortNumbers([1, 11, 3, 4, 34, 58, 9, 7]), // [1, 3, 4, 7, 9, 11, 34, 58]
);
```

4) Create a function, `palindrome`, that take a string as an argument. Return `true` if the given string is a palindrome (i.e. the same forwards as backwards).

**Hint**: you turn a string into an array using `str.split("")` and back again using `arr.join("")`

```javascript
// ... your function here

console.log(palindrome("fish")); // false
console.log(palindrome("madam")); // true
console.log(palindrome("bolton")); // false
console.log(palindrome("minim")); // true
```

## Über Tricksy Challenges

1) Create a function, `flatten`, that takes an array containing a mix of values and arrays. It should return an array containing all the values from all the arrays. It should cope with arrays containing other arrays to any level. **Don't use the `.flat()` or `.flatMap()` array methods**

**Hint**: you can use `Array.isArray(val)` to check if a value is an array or not... and you might need recursion

```javascript
// ... your function here

console.log(
    // ["a", "b", "c", "d", "e", "f", "g", "h"]
    flatten(["a", "b", ["c", "d"], [["e", "f"], ["g", "h"]]]),
);
```
