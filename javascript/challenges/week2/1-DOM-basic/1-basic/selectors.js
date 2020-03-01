((d) => {

// Add a class `container` to the <body> tag
let body = d.body;
body.classList.add("container");

// Add a class `col-md-12` to the header
let header = d.getElementById("header");
header.classList.add("col-md-12");

// Add a class `col-md-4` to the sidebar
let sidebar = d.getElementById("sidebar");
sidebar.classList.add("col-md-4");

// Add a class `col-md-8` to the main block
let main = d.getElementById("main");
main.classList.add("col-md-8");

// Add a class `lead` to the first paragraph of the main block
let firstPara = d.querySelector("#main p:nth-of-type(1)");
firstPara.classList.add("lead");

// Add a class `list-group` to the first list in the main block
// let firstList = d.querySelector(".js__first-list");
let firstList = main.getElementsByClassName(".js__first-list")[0];
firstList.classList.add("list-group");

// Add a class `pagination` to the second list in the main block
let secondList = d.querySelector(".js__second-list");
secondList.classList.add("pagination");

// Add a class `list-group-item` to each item in the first list in the main block
let listItems = Array.from(firstList.children);
listItems.forEach(li => {
    li.classList.add("list-group-item");
});

})(document);
