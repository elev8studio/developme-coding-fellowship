# Quiz

## Rules

- Compare your result with the demo
- If you get stuck on one for more than 15 minutes, try a different one and come back to it later.
- Feel free to vent any frustration using Tuvan throat singing.

---

### 01

Create a page with a button that says "Catch Me!". When you click the button, it should move down the page by 50 pixels. Make sure you give the button positioning, otherwise it won't move.

Also, don't forget to add the "px" to style properties:

```javascript
let left = 40;

el.style.transform = `translateX(${left}px)`;
```

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/01.html)


### 02

Create a page with a list of animals. When you click on one of the animal names, it should be moved to the top of the list. Bonus points for interesting animals.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/02.html)

### 03

Create a page with an `<input type="number">` and a button on it. When the button is clicked, the total of all previously entered numbers should be displayed.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/03.html)


### 04

Create an `<input type="password" />` on a new page. If the length of the password is less than 10, the background colour of the input should be red. If the length of the password is between 10 and 18 the background colour should be orange. If the length is more than 18 characters it should go green. The background colour should update as the user is typing. Add some text to let the user know how they're doing.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/04.html)

### 05

Create a page including the following HTML code:

```html
<p>Your favourite search engine:</p>

<div id="links" class="list-group">
    <a class="list-group-item" href="http://google.com">Google</a>
    <a class="list-group-item" href="http://yahoo.com">Yahoo</a>
    <a class="list-group-item" href="http://bing.com">Bing</a>
    <a class="list-group-item" href="http://duckduckgo.com">DuckDuckGo</a>
</div>

<p class="well">You selected: <strong id="output">none selected</strong></p>
```

When a user clicks on one of the links, you should update the `#output` element to say the name of the chosen link. Use event delegation to make it totes efficient.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/05.html)


### 06

Add a `checkers.js` file so that `resources/checkers.html` turns into a checkers board. Don't edit the HTML file!

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/06.html)


### 07

Create a page with a `<div>` on it, that is 200px &times; 200px. It should have a black border and its background colour should be white. When you click on it, it should cycle background colour through the following list:

```html
#C14412
#EBB31A
#8F5318
#009EAD
#395967
```

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/07.html)


### 08

`Math.random()` generates a random number between 0 and 1. If you multiply the result by, say 100, and then use `Math.floor()`, you will get a number between 0 and 99.

```javascript
let random = Math.random(); // a number between 0 and 1
let number = Math.floor(random * 100); // a number between 0 and 99
```

Create an HTML page with a `<button>` that says "Roll the Dice!". Whenever it is clicked your page should display two numbers between 1 and 6. If you're feeling fancy and have time to spare, make it display an image of the side of a dice (you could find some images on [Creative Commons](https://search.creativecommons.org) ...or you could [use CSS](http://sampsonblog.com/289/of-dice-dabblet-and-css))

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/08.html)


### 09

The following code will run as close to 60 times per second as possible. We can use this to animate things smoothly (at 60 frames per second). This is an example of an infinite loop that's actually very useful.

```javascript
let last = 0;

let loop = time => {
    let dt = time - last;
    last = time;
    console.log("Total time:", time, "Time since last loop", dt);

    // animation code here

    requestAnimationFrame(loop);
};

loop(0);
```

Use the code above, along with JavaScript, to make the image in `resources/animate.html` bounce horizontally across the screen. Try and get it to move smoothly across the screen at exactly 500 pixels per second.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/quiz/answers/09.html)

---

If you have time at the end, why not try making everything look nice!
