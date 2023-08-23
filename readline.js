const { log } = require('console');
const readline = require('readline');
// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Ask the user for their age
rl.question('enter age: ', (age) => {
 let  amount = 18000
if (age <= 18) {
    if (amount <= 18000) {
      console.log("Here is your menu.");
    } else {
      console.log("Your amount is below 18k.");
    }
  } else {
    console.log("You are a child.");
  }
})

// Close the interface
