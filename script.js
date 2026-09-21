const billInput = document.getElementById("bill-input");
const tip5 = document.getElementById("tip-5");
const tip10 = document.getElementById("tip-10");
const tip15 = document.getElementById("tip-15");
const totalbill = document.getElementById("total");
const btn = document.getElementById("button");

let tipAmount = 0;

btn.addEventListener("click", function () {
  const billValue = Number(billInput.value);

  if (tip5.checked) {
    tipAmount = (billValue * 5) / 100;
  } else if (tip10.checked) {
    tipAmount = (billValue * 10) / 100;
  } else if (tip15.checked) {
    tipAmount = (billValue * 15) / 100;
  }

  totalbill.textContent += billValue + tipAmount;
});
