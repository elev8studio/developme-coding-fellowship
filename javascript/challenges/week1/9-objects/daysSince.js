// Create a function, daysSince, that you pass a date. It should tell you how many days have passed since that date:

let daysSince = (date) => {
    const msPerDay = 8.64e7; // In a larger project, this const variable could be positioned outside the function so that other functions could access it too. 
    let now = new Date(), then = new Date(date);
    return Math.floor((now - then) / msPerDay);
}

console.log(
    daysSince("1984-04-16"), // 12,913
);
