// Create a class that represents a Wombat

// You should be able to give the wombat a name when you create it.
// The wombat should have a .getName() method that returns its name
// The wombat should have a .sayHelloTo(wombat) method that you pass another wombat to and it will return a greeting
// The wombat should have a .giveHug() method and a .howManyHugs() method. .howManyHugs() should return the number of hugs the wombat has been given

/*
 * Your Wombat creation code here
 */

let m1 = new Wombat("Seb");
let m2 = new Wombat("Mia");

let m1Name = m1.getName();
console.log("Expected: Seb, Actual: " + m1Name);

let greeting = m1.sayHelloTo(m2);
console.log("Expected: Hello Mia, Actual: " + greeting);

m1.giveHug();
console.log("Expected: 1, Actual: " + m1.howManyHugs());

m2.giveHug();
m2.giveHug();
m2.giveHug();
console.log("Expected: 3, Actual: " + m2.howManyHugs());
