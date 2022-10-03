var intialPrice = document.querySelector("#initialPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currentPrice");
var output = document.querySelector("#output");
var btn = document.querySelector("#btn");

function clickhandler() {
  const intialTotalPrice = intialPrice.value * quantity.value;
  const currentTotalPrice = currentPrice.value * quantity.value;
  const profit = currentPrice.value - intialPrice.value;
  const profitPercnt = (profit / (intialPrice.value * quantity.value)) * 100;
  const loss = intialPrice.value - currentPrice.value;

  if (currentTotalPrice > intialTotalPrice) {
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
