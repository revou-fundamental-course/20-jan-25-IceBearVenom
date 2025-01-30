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
const DisplayPrevention = document.getElementById("advice");
// Disease Possibility
const DiseasePossibility = {
    "Underweight!": {"Disease": "Being underweight can increase the risk of health problems such as malnutrition, decreased bone density, and problems with the immune system. It can also increase the risk of infection and slow wound healing.", "Prevention": "Increase calorie and protein intake. <br> Eat more often and choose nutritious foods. <br> Do strength training to gain muscle mass."},
    "Normal": {"Disease": "In general, this category is considered to have lower health risks. Maintaining a BMI in this range is likely to reduce the risk of heart disease, type 2 diabetes and metabolic disorders.", "Prevention": "Maintain a balanced diet. <br> Do regular exercise. <br> Manage stress and get enough sleep."},
    "Overweight!": {"Disease": "Being overweight increases the risk of heart disease, high blood pressure, type 2 diabetes, sleep disorders (such as sleep apnea), and joint disorders. It may also increase the risk of certain cancers.", "Prevention": "Reduce calories and consume healthy foods. <br> Increase exercise and portion control."},
    "Obesity!": {"Disease": "Obesity is linked to an increased risk of heart disease, stroke, type 2 diabetes, hypertension, liver disease, joint problems, sleep disorders and some cancers. Obesity can also reduce quality of life and increase the risk of premature death.", "Prevention": "Follow a low-calorie, high-fiber diet. <br> Increase cardio exercise and strength training. <br> Consult a doctor or nutritionist."}
}
// Styling Variable
const ResultSection = document.getElementById("result-section");

// ===================== Function =========================== 
// Count BMI
function CountBMI(event) {
    // Prevent form submission behavior (page refresh)
    event.preventDefault();

    // Get the values from the inputs
    const mass = parseFloat(BodyMassInput.value);
    const height = parseFloat(BodyHeightInput.value) / 100; // Convert height to meters
    const age = parseFloat(AgeInput.value);

    // Ensure the inputs are valid
    if (isNaN(mass) || isNaN(height) || isNaN(age)) {
        alert("Please provide valid inputs.");
    } else {
        // Count BMI
        let result = mass / (height ** 2);
        let ResultSectionColor;
    
        // Type Result BMI
        let type;
        if (result < 18.5) {
            type = "Underweight!";
            ResultSectionColor = "#C5665F"
        } else if (result >= 18.5 && result <= 24.9) {
            type = "Normal";
            ResultSectionColor = "#5FC563"
        } else if (result >= 25.0 && result <= 29.9) {
            type = "Overweight!";
            ResultSectionColor = "#C5665F"
        } else {
            type = "Obesity!";
            ResultSectionColor = "#B91A1A"
        }
    
        // Checking if The Result is Zero
        if (!isNaN(type) || !isNaN(result)){
            // Show BMI rounded to two decimal places
            DisplayResult.innerHTML = result.toFixed(2); 
            // Display Change
            DisplayType.innerHTML = type;
            DisplayDescription.innerHTML = DiseasePossibility[type]["Disease"];
            DisplayPrevention.innerHTML = DiseasePossibility[type]["Prevention"];
            ResultSection.style.backgroundColor = ResultSectionColor;
        }

        // Scroll to The Position of Result Section
        DisplayResult.scrollIntoView({
            behavior: "smooth"
        })
    }
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
