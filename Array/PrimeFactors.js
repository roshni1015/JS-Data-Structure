const prompt = require("prompt-sync")();

let inputnum = prompt("Enter a number : ");
let primesArray = new Array();

let index = 0;
for (let i = 2; i <= inputnum; i++) {
  if (inputnum % i == 0) {
    let isPrime = 1;
    for (let d = 2; d <= i / 2; d++) {
      if (i % d == 0) {
        isPrime = 0;
      }
    }
    if (isPrime == 1) {
      primesArray[index] = i;
      index++;
    }
  }
}
console.log("Prime factors : "+primesArray);