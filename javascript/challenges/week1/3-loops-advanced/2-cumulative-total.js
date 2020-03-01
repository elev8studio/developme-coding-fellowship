// Write some code that outputs a cumulative total of the current line number for 1 to 50:

let total = 0;

for (let i = 1; i <= 50; i += 1) {
    total += i;

    console.log(total);
}

// 1  // lines 1
// 3  // lines 1 + 2
// 6  // lines 1 + 2 + 3
// 10 // lines 1 + 2 + 3 + 4
// ...
