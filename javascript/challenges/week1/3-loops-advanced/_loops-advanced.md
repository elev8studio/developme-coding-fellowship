# Programming Fundamentals

---

## Challenges

1) Write some code that outputs 50 lines, alternating between ☃☃☃ and ❄❄❄

2) Write some code that outputs a cumulative total of the current line number for 1 to 50:

    ```javascript
    1  // lines 1
    3  // lines 1 + 2
    6  // lines 1 + 2 + 3
    10 // lines 1 + 2 + 3 + 4
    ...
    ```

3) Write some code that outputs the sum of the first 117 multiples of either 3 or 7 (e.g. 3 + 6 + 7 + 9 + 12 + 14 + ...)

---

## Tricksy Challenges

1) Every character on the keyboard has a "Character Code" associated with it: e.g. "A" is 65. We can use `String.fromCharCode(65)` to get back the letter "A".

    Write some code that outputs the letters A-Z.

2) Write some code that outputs 50 lines so that, if the current line number is *n*, the output is the total of the first *n* odd numbers:

    ```javascript
    1  // 1
    4  // 1 + 3
    9  // 1 + 3 + 5
    16 // 1 + 3 + 5 + 7
    ...
    ```

3) Write some code that outputs the first 15 times-tables:

    ```javascript
    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15
    2    4    6    8    10   12   14   16   18   20   22   24   26   28   30
    3    6    9    12   15   18   21   24   27   30   33   36   39   42   45
    ...
    15   30   45   60   75   90   105  120  135  150  165  180  195  210  225
    ```

    **Hint**: if you use a tab character, `"\t"`, between your "columns" it will look nice in the command line
