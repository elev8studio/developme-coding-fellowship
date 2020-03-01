((d) => {

// Use JavaScript to add a class of redacted to every paragraph that contains the phrase "secret moon base" in redacted.html

// Hint: if you get the .textContent property of an element you'll get back its text as a string. You can search a string to see if it contains another string by using the string .search("find this") method - it will return -1 if it isn't found

let allParas = Array.from(d.getElementsByTagName("p"));

// allParas.forEach(para => {
//     if (para.textContent.search("secret moon base") !== -1) {
//         para.classList.add("redacted");
//     }
// });

let secretParas = allParas.filter(para => para.textContent.search("secret moon base") !== -1);

secretParas.forEach(para => para.classList.add("redacted"));

})(document);
