// Example 1 Copy text from one box to another
// Get references to the HTML elements using their unique IDs
const inputBox1 = document.getElementById("inputBox1");
const inputBox2 = document.getElementById("inputBox2");
const copyButton = document.getElementById("copyButton");
 // Add a "click" event listener to the button
copyButton.addEventListener("click", function() {
    inputBox2.disabled = false;
    // Copy the value from the first input box to the second
    inputBox2.value = inputBox1.value;
});

//Example 2 Calculate a percentage
const numeratorInput = document.getElementById("numBox");
const denominatorInput = document.getElementById("demBox");
const percBox = document.getElementById("percBox"); 
const percButton = document.getElementById("percButton");
percButton.addEventListener("click", function() {

    // Enable the percentage text box
    percBox.disabled = false;

    // Get the value from the input fields and convert them to numbers
    let numerator = parseFloat(numeratorInput.value);
    let denominator = parseFloat(denominatorInput.value);

    // Check if the input fields are empty or not a valid number
    if (isNaN(numerator) || isNaN(denominator)) {
        percBox.value = "Invalid numerator or denominator.";
    // Check to make sure the denominator is not zero
    } else if (denominator !== 0) {
        // Perform the calculation and update the output box
        let percentage = (numerator / denominator) * 100;
        percBox.value = percentage.toFixed(2) + "%"; // toFixed(2) rounds the result to 2 decimal places
    } else {
        // Handle the case where the denominator is zero
        percBox.value = "Cannot divide by zero!";
    }
});

//Example 3 Reset the form
const resetButton = document.getElementById("resetButton");
//
resetButton.addEventListener("click", function() {
        // Reset the value of each element to an empty string
        inputBox1.value = "Start typing here...";
        inputBox2.value = "";
        numeratorInput.value = "1";
        denominatorInput.value = "100";
        percBox.value = "";

        percBox.disabled = true;
        inputBox2.disabled = true;

});
