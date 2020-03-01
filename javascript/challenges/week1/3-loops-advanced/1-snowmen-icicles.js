// Write some code that outputs 50 lines, alternating between ☃☃☃ and ❄❄❄

for (i = 0; i < 50; i += 1) {
    if (i % 2 === 0) {
        console.log("☃☃☃");
    } else {
        console.log("❄❄❄");
    }
}