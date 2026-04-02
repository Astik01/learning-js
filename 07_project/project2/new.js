const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height.`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight.`;
    return;
  }

  // ✅ Declare bmi here so it's accessible below
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let message = '';
  if (bmi < 18.6) {
    message = "You're underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = "You're in the normal range";
  } else {
    message = "You're overweight";
  }

  results.innerHTML = `Your BMI is <span>${bmi}</span>. ${message}`;
});
