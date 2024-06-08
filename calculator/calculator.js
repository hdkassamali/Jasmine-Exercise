window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");
const monthlyPayment = document.getElementById('monthly-payment');


function setupIntialValues() {
  loanAmount.value = 1000;
  loanYears.value = 20;
  loanRate.value = 5;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if (!Number.isFinite(values.amount) || !Number.isFinite(values.years) || !Number.isFinite(values.rate)) {
    throw new Error('Invalid Values!');
  }
  const loanAmount = values.amount;
  const loanYears = values.years;
  const loanRate = (values.rate) / 100;

  const calculation = (loanAmount * (loanRate/12))/(1-(1+(loanRate/12))**-(loanYears*12));

  const roundedCalculation = (Math.round(calculation * 100) / 100).toFixed(2);
  return roundedCalculation;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPayment.innerText = `$${monthly}`;
}

setupIntialValues();
update();