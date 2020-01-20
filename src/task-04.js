"use strict";

const credits = 23580;

const pricePerDroid = 3000;

const valuePrompt = prompt("How many droids you want to buy?");

const amount = Number(valuePrompt);

const totalPrice = amount * pricePerDroid;

const creditsCurrentBalance = credits - amount * pricePerDroid;

if (valuePrompt === null) {
  alert("Canceled by user.");
}
 else if (totalPrice > credits) {
  alert("Not enough credits!");
} 
else if (totalPrice <= credits) {
  alert(
    `${amount} droids has been purchased, credits lost: ${totalPrice}. Now you have ${creditsCurrentBalance} credits left.`
  );
} else if (!amount) {
  alert("Please, fill the amount field correctly");
}