var intialPrice = document.querySelector("#initialPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currentPrice");
var output = document.querySelector("#output");
var btn = document.querySelector("#btn");

function clickhandler() {
  const intialTotalPrice = intialPrice.value * quantity.value;
  const currentTotalPrice = currentPrice.value * quantity.value;
  const profit = currentTotalPrice - intialTotalPrice;
  const profitPercnt = (profit / intialTotalPrice) * 100;
  const loss = intialTotalPrice - currentTotalPrice;

  if (currentTotalPrice > intialTotalPrice) {
    output.innerHTML =
      "Your total profit is " +
      profit +
      " and the percentage is " +
      profitPercnt +
      " %";
  } else if (currentTotalPrice === intialTotalPrice) {
    output.innerHTML = "No profit made yet!";
  } else {
    output.innerHTML =
      "You are suffering a loss of " +
      loss +
      " and the percentage is " +
      profitPercnt +
      " %";
  }
}

btn && btn.addEventListener("click", clickhandler);
