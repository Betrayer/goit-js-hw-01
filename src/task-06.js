"use strict";

let input;

let total = 0;

while (true) {
  input = prompt("Write any value");

  if (input === null) {
    break;
  } else if ((input = Number(input))) {
    total += input;
  } else 
  alert("Wasn't a number!");
}
alert(`Total sum is ${total}`);