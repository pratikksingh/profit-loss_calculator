var intialPrice = document.querySelector("#initialPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currentPrice");
var output = document.querySelector("#output");
var btn = document.querySelector("#btn");

function clickhandler() {
  const intialTotalPrice = intialPrice.value * quantity.value;
  const currentTotalPrice = currentPrice.value * quantity.value;
  // const profit = currentPrice.value - intialPrice.value;
  // const profitPercnt = (profit / (intialPrice.value * quantity.value)) * 100;
  // const loss = intialPrice.value - currentPrice.value;
  const profit = currentTotalPrice - intialTotalPrice;
  const profitPercnt = (profit / intialTotalPrice) * 100;
  const loss = intialTotalPrice - currentTotalPrice;
  if (
    intialPrice.value <= 0 ||
    currentPrice.value <= 0 ||
    quantity.value <= 0
  ) {
    output.innerHTML = "Value entered must be greater than 0!";
  } else if (
    currentTotalPrice > intialTotalPrice &&
    intialPrice.value > 0 &&
    currentPrice.value > 0
  ) {
    output.innerHTML =
      "Your total profit is " +
      profit +
      " and the percentage is " +
      Math.round(profitPercnt * 100) / 100 +
      " %";
  } else if (currentTotalPrice === intialTotalPrice) {
    output.innerHTML = "No profit made yet!";
  } else {
    output.innerHTML =
      "You are suffering a loss of " +
      loss +
      " and the percentage is " +
      Math.round(profitPercnt * 100) / 100 +
      " %";
  }
}

btn && btn.addEventListener("click", clickhandler);
