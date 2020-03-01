for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

let j = 1;
let total = 0;

while (total < 100) {
    j += 1;
    total += j;
    console.log(total);
}

console.log(`It's run ${j} times`);