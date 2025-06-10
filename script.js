// if-else condition

let number = 7;

if (number > 0) {
  console.log(`${number} is a positive number`);
} else if (number < 0) {
  console.log(`${number} is a negative number`);
} else {
  console.log("The number is 0");
}
// output: 7 is a positive number

// Step 3 Switch Statement
var day = 5;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}

//Step 4: Loops(for, while, Do..while)

// for loop. loop until 5 starting from 1.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop to increcement until 5

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while loop.
// print the number first while j is still less than or equal to 5.
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//Step 5 Control Flow with break and continue

// Contorl flow using break
for (var num = 1; num <= 3; num++) {
  if (num == 3) {
    break;
  }
  console.log(num);
}
console.log("The number has reached 3");

// Control flow using continue
for (var k = 1; k <= 10; k++) {
  if (k == 3) {
    continue;
  }
  console.log(k);
}
console.log("The number has skipped 3 and continued");

// Step 6: Scope and Context

let globalVar = "Hi I'm Global"; // Can access inside and outside the function

function scope() {
  let localVar = "Hi I'm Local"; // can only access this inside the function
  console.log(localVar);
  //let globalVar = "wow i changed";
  console.log(globalVar);
}

//console.log(localVar); // I get an outpout saying localVar is not defined

scope();
console.log(globalVar);

// i was also experimenting and seeing how you can change the global variable inside the function and when you come out of the function its still the orginal value.
