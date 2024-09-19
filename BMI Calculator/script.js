const forms = document.querySelector("form");

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  //Checking for invalid inputs
  if (height <= 0 || height === "" || isNaN(height)) {
    result.innerHTML = `Please Enter Valid Height ${height}`;
  } else if (weight <= 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = `Please Enter valid weight ${weight}`;
  }
  //Else Calculating the BMI
  else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    if (bmi <= 18.5) {
      result.innerHTML = `<span>BMI = ${bmi} <br> You are UnderWait</br></span>`;
    } else if (18.5 < bmi && bmi <= 24.9) {
      result.innerHTML = `<span>BMI = ${bmi} <br>You are Healthy</br></span>`;
    } else if (25 <= bmi) {
      result.innerHTML = `<span>BMI = ${bmi} <br>You are Overweight </br></span>`;
    } else {
      result.innerHTML = `<span>BMI = ${bmi} <br>You are Not Healthy </br></span>`;
    }
  }
});
