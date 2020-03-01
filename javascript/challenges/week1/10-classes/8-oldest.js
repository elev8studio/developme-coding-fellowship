// Using an object as a Map: create a function, oldest, that returns the name of the oldest person. Remember, the name is a key, not a property.

// ... your function here

(() => {
    // a map object
    // name as the key
    // ages as the value
    let folks = {
        "Alice": 29,
        "Bob": 45,
        "Carol": 67,
        "Dan": 32,
    };

    console.log(oldest(folks)); // "Carol"
})()
