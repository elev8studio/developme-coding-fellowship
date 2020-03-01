// Write some code that outputs the first 15 times-tables:

// When looping around i, the next line of times tables is produced.
for (let i = 1; i <= 15; i += 1) {

    let line = "";

    // The first time the code runs, this generates the first line of multiples e.g. 1 * 1 = 1, 1 * 2 = 2 ... 1 * 15 = 15
    for (let j = 1; j <= 15; j += 1) {
        line += (i * j) + "\t";
    }

    console.log(multiple);

}
