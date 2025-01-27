// ===================== Variable ===========================
// Input Variables
const GenderInput = document.getElementsByName("gender");
const BodyMassInput = document.getElementById("body-mass-input");
const AgeInput = document.getElementById("age-input");
const BodyHeightInput = document.getElementById("body-height-input");
// Button Variables
const SubmitButton = document.getElementById("submit-button");
const ResetButton = document.getElementById("reset-button");
// Output Variables
const DisplayResult = document.getElementById("result");
const DisplayType = document.getElementById("type-result");
const DisplayDescription = document.getElementById("description-result");

// ===================== Function ===========================
// Count BMI
function CountBMI(event) {
    // Prevent form submission behavior (page refresh)
    event.preventDefault();

    // Get the values from the inputs
    const mass = parseFloat(BodyMassInput.value);
    const height = parseFloat(BodyHeightInput.value) / 100; // Convert height to meters

    // Ensure the inputs are valid
    if (isNaN(mass) || isNaN(height)) {
        alert("Please provide valid inputs.");
        return;
    }

    // Count BMI
    var result = mass / (height ** 2);
    DisplayResult.innerHTML = result.toFixed(2); // Show BMI rounded to two decimal places

    // Result BMI
    var type;
    if (result < 18.5) {
        type = "Underweight!";
    } else if (result >= 18.5 && result <= 24.9) {
        type = "Normal";
    } else if (result >= 25.0 && result <= 29.9) {
        type = "Overweight!";
    } else {
        type = "Obesity";
    }

    DisplayType.innerHTML = type;
};

// ===================== Calling ===========================
// Attach event listener to the submit button
SubmitButton.addEventListener("click", function (event) {
    CountBMI(event);
});

// Reset functionality (optional, but helpful)
ResetButton.addEventListener("click", function () {
    // Clear the output when reset is clicked
    DisplayResult.innerHTML = "0";
    DisplayType.innerHTML = "-----";
    DisplayDescription.innerHTML = "-----";
});
