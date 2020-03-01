// let animals = ["kangaroo", "koalo", "platypus", "wombat"];
//
// // Log all the items in the array
// for (let i = 0; i < animals.length; i += 1) {
//     console.log(animals[i]);
// }
//
//
// let numbers = [938, 342, 343, 344, 5, 6];
// let total = 0;
//
// // Add together all the values of the array
// for (let i = 0; i < numbers.length; i += 1) {
//     let current = numbers[i];
//     total += current;
// }
//
// console.log(total);
//
//
// let numbers2 = [938, 342, 343, 344, 5, 6];
// let evens = [];
//
// // Create a new array, evens, with only the even numbers from the array, numbers2.
// for (let i = 0; i < numbers2.length; i += 1) {
//     let current = numbers2[i];
//
//     if (current % 2 === 0) {
//         evens.push(current);
//     }
// }
//
// console.log(numbers2);
// console.log(evens);


// Create a function to filter odd values and create new array.
let filterOdd = (numbers3) => {
    let odds = [];

    for (let i = 0; i < numbers3.length; i += 1) {
        let current = numbers3[i];

        if (current % 2 !== 0) {
            odds.push(current);
        }
    }

    return odds;
}

let nos = [937, 342, 343, 341, 5, 6];
console.log(filterOdd(nos));