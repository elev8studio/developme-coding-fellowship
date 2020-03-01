// Write some code that outputs 50 lines so that, if the current line number is n, the output is the total of the first n odd numbers:

let n = 1,
    total = 0,
    odds = 0;

while (odds < 50) {
    if (n % 2 !== 0) {
        total += n;
        odds += 1;
        console.log(total);
    }
    n +=1;
}


// 1  // 1
// 4  // 1 + 3
// 9  // 1 + 3 + 5
// 16 // 1 + 3 + 5 + 7
// ...
