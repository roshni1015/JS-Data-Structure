
let numArray = new Array();
for (let i = 1; i <= 10; i++) {
  let numbers = Math.floor(Math.random() * 900) + 100;
  numArray.push(numbers);
}
console.log("Input array : " + numArray);
let count = 0;
let max = numArray[0];
let min = numArray[0];

while (count < 10) {
  if (numArray[count] > max) {
    max = numArray[count];
  }
  if (numArray[count] < min) {
    min = numArray[count];
  }
  count++;
}
console.log("Min : " + min + " | Max : " + max);

let secondMin = max,
  mymin = max,
  secondMax = 1,
  counts = 0;
while (counts < 10) {
  if (numArray[counts] < max && numArray[counts] > secondMax) {
    secondMax = numArray[counts];
  }
  if (numArray[counts] < mymin) {
    secondMin = mymin;
    mymin = numArray[counts];
  }
  if (numArray[counts] < secondMin && numArray[counts] > mymin) {
    secondMin = numArray[counts];
  }
  counts++;
}
console.log("second Min : " + secondMin + " | second Max : " + secondMax);