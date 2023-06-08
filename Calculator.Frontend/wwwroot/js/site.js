// Get references to the necessary elements
var calculatorContainer = document.getElementById("calculator-container");
var beginCalculationButton = document.getElementById("begin-calculation");
var startInput = document.getElementById("start");
var amountInput = document.getElementById("amount");
var addBtn = document.getElementById("calculate-add");
var subtractBtn = document.getElementById("calculate-subtract");
var resultSpan = document.getElementById("modal-result");

var modal = document.getElementById("modal");
var closeModalButton = document.getElementById("close-modal");

// Begin calculation button click event handler
beginCalculationButton.addEventListener("click", function () {
    // Display the modal popup
    modal.style.display = "block";
});

// Add button click event handler
addBtn.addEventListener("click", function () {
    // Display the modal popup
    modal.style.display = "block";
});

// Subtract button click event handler
subtractBtn.addEventListener("click", function () {
    // Display the modal popup
    modal.style.display = "block";
});

// Close modal button click event handler
closeModalButton.addEventListener("click", function () {
    // Hide the modal popup
    modal.style.display = "none";

    startInput.value = "";
    amountInput.value = "";
});

// Calculate button click event handler
function calculate(operation) {
    var start = parseInt(startInput.value);
    var amount = parseInt(amountInput.value);

    // Make the API request based on the operation
    fetch(`https://localhost:7098/api/calculator/${operation}?start=${start}&amount=${amount}`)
    .then(response => response.json())
    .then(data => {
        // Update the result
        resultSpan.textContent = data;
    })
    .catch(error => {
        console.log(error);
        resultSpan.textContent = "An error occurred.";
    });
}

// Add button click event handler inside the modal
document.getElementById("calculate-add").addEventListener("click", function () {
    calculate("add");
});

// Subtract button click event handler inside the modal
document.getElementById("calculate-subtract").addEventListener("click", function () {
    calculate("subtract");
});
