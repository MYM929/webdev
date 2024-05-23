const myCheckbox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const paypalButton = document.getElementById("paypalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are not subscribed`;
  }

  if (visaButton.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardButton.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (paypalButton.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
};
