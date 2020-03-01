((d) => {

    // 2.

    // Create a function addClassTo that takes two strings as arguments. The first argument represents an HTML class name and the second is a valid selector. When you run the function it should add the class to the element and return the element. Make sure it doesn't throw an error even if the selector given is invalid.

    let addClassTo = (className, selector) => {
        let element = d.querySelector(selector);

        if (element !== null) {
            element.classList.add(className);
        }

        return element;
    };


    let addedEl = addClassTo("col-md-12", ".js__first-list");
    console.log(addedEl); // the <ul> - should have the new class

    let addNoError = addClassTo("col-md-12", ".js__first-list-eek");
    console.log(addNoError); // null

    // 3.

    // Create a function removeClassFrom that takes two strings as arguments. The first argument represents an HTML class name and the second is a valid selector. When you run the function it should remove the class from the element and return the element. Make sure it doesn't throw an error even if the selector given is invalid.

    let removeClassFrom = (name, selector) => {
        let element = d.querySelector(selector);

        if (element !== null) {
            element.classList.remove(name);
        }

        return element;
    }

    let removedEl = removeClassFrom("col-md-12", ".js__first-list");
    console.log(removedEl); // the <ul> - should have removed the class

    let removeNoError = removeClassFrom("col-md-12", ".js__first-list-eek");
    console.log(removeNoError);
    null

    // Tricksy

    // 4

    // Create a function addClassesTo that takes two arrays as arguments. The first argument represents HTML class names and the second is valid selectors. When you run the function it should add all the class names to all the elements and return an array of the elements. Make sure it doesn't throw an error even if the selector given is invalid.

    let addClassesTo = (classNames, selectors) => {
        let elements = [];

        selectors.forEach(val => {
            let element = d.querySelector(val);

            if (element !== null) {
                classNames.forEach(name => {
                    element.classList.add(name)
                });

                elements.push(element);
            }
        });

        return elements;
    }

    let addedEls = addClassesTo(["col-md-12", "list-group"], [".js__first-list", ".js__second-list"]);
    console.log(addedEls); // the two <ul> elements - should have the new classes



})(document);