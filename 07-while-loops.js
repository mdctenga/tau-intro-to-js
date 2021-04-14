// have a user continually input a password until they provide the correct password
let password = "tomorrow";
let userGuess = "";

// while (userGuess !== password) {
//   userGuess = prompt ("Please enter your password");
// }

// alert("Login Successful");

// 5 * 4 * 3 * 2 * 1
let factorial = 1;
let number = 5;
let original = number;

do {
  factorial = factorial * number;
  number--
} while (number > 0);

console.log(original + " factorial is " + factorial);