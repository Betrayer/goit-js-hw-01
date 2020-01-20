"use strict";

const country = prompt("Wrote a country for delivery calculations");

const countryToLow = country.toLowerCase();

let deliveryPrice;

switch (countryToLow) {
  case "китай":
    deliveryPrice = 100;
    alert(`Shipping to ${country} will cost you ${deliveryPrice} credits`);
    break;

  case "чили":
    deliveryPrice = 100;
    alert(`Shipping to ${country} will cost you ${deliveryPrice} credits`);
    break;

  case "австралия":
    deliveryPrice = 100;
    alert(`Shipping to ${country} will cost you ${deliveryPrice} credits`);
    break;

  case "индия":
    deliveryPrice = 100;
    alert(`Shipping to ${country} will cost you ${deliveryPrice} credits`);
    break;

  case "ямайка":
    deliveryPrice = 100;
    alert(`Shipping to ${country} will cost you ${deliveryPrice} credits`);
    break;

  default:
    alert("We can`t ship to this location");
}
