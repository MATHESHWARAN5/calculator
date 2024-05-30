// Function to display numbers on the calculator
function inputNumber(num) {
    document.getElementById('display').value += num;
}

// Function to display operations on the calculator
function inputOperation(op) {
    document.getElementById('display').value += op;
}

// Function to evaluate the expression and display the result
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Event listener for keyboard events
document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Check if the pressed key is a number
    if (!isNaN(parseInt(key))) {
        inputNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        inputOperation(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else {
        alert("Only numbers and arithmetic operations are allowed");
    }
});
