/**
 * Number Adder Web Application
 * 
 * Handles user input, validates numbers, and displays the sum.
 */

/**
 * Calculate the sum of two numbers from input fields and display the result.
 */
function calculateSum() {
    // Get input elements
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
    
    // Get values and convert to numbers
    const num1Str = num1Input.value.trim();
    const num2Str = num2Input.value.trim();
    
    // Validate inputs
    if (num1Str === '' || num2Str === '') {
        resultDiv.textContent = 'Please enter both numbers';
        resultDiv.className = 'result error';
        return;
    }
    
    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers';
        resultDiv.className = 'result error';
        return;
    }
    
    // Calculate sum
    const sum = num1 + num2;
    
    // Display result
    resultDiv.textContent = `Result: ${sum}`;
    resultDiv.className = 'result';
}

/**
 * Allow Enter key to trigger calculation
 */
document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    
    // Add event listeners for Enter key
    num1Input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateSum();
        }
    });
    
    num2Input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateSum();
        }
    });
    
    // Initialize result display
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Enter two numbers and click "Add Numbers"';
    resultDiv.className = 'result empty';
});

