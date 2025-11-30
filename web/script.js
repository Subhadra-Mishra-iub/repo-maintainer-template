/**
 * Number Adder Web Application
 * 
 * Handles user input, validates numbers, and displays the sum.
 * Includes Python testing capabilities using Pyodide.
 */

let pyodide = null;
let pythonReady = false;

/**
 * Initialize Pyodide Python runtime
 */
async function initializePyodide() {
    const statusDiv = document.getElementById('pyodide-status');
    
    try {
        statusDiv.textContent = 'Loading Python runtime...';
        
        // Wait for Pyodide to be available
        let retries = 0;
        while (typeof loadPyodide === 'undefined' && retries < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            retries++;
        }
        
        if (typeof loadPyodide === 'undefined') {
            throw new Error('Pyodide library not loaded. Please check your internet connection and refresh the page.');
        }
        
        pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/" });
        
        // Define the Python function
        const pythonCode = `
def add_numbers(a, b):
    """
    Add two numbers and return the result.
    
    Args:
        a: First number to add
        b: Second number to add
    
    Returns:
        The sum of a and b
    """
    return a + b
`;
        
        pyodide.runPython(pythonCode);
        
        pythonReady = true;
        statusDiv.textContent = '✓ Python runtime ready!';
        statusDiv.className = 'status-message ready';
        
        // Enable buttons
        document.getElementById('testPythonBtn').disabled = false;
        document.getElementById('runTestsBtn').disabled = false;
    } catch (error) {
        statusDiv.textContent = `Error loading Python: ${error.message}`;
        statusDiv.className = 'status-message error';
        console.error('Pyodide loading error:', error);
    }
}

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
 * Test the Python add_numbers function
 */
function testPythonFunction() {
    if (!pythonReady) {
        alert('Python runtime is not ready yet. Please wait...');
        return;
    }
    
    const num1Input = document.getElementById('pyNum1');
    const num2Input = document.getElementById('pyNum2');
    const resultDiv = document.getElementById('pythonResult');
    
    const num1Str = num1Input.value.trim();
    const num2Str = num2Input.value.trim();
    
    if (num1Str === '' || num2Str === '') {
        resultDiv.textContent = 'Please enter both numbers';
        resultDiv.className = 'result error';
        return;
    }
    
    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers';
        resultDiv.className = 'result error';
        return;
    }
    
    try {
        // Call the Python function
        const result = pyodide.runPython(`add_numbers(${num1}, ${num2})`);
        resultDiv.textContent = `Python Result: add_numbers(${num1}, ${num2}) = ${result}`;
        resultDiv.className = 'result success';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
}

/**
 * Run Python tests
 */
function runPythonTests() {
    if (!pythonReady) {
        alert('Python runtime is not ready yet. Please wait...');
        return;
    }
    
    const resultDiv = document.getElementById('testResult');
    resultDiv.textContent = 'Running tests...';
    resultDiv.className = 'result';
    
    // Test code that mimics test_main.py
    const testCode = `
import sys
from io import StringIO

# Capture output
old_stdout = sys.stdout
sys.stdout = captured_output = StringIO()

test_results = []
test_passed = 0
test_failed = 0

try:
    # Test 1: Positive numbers
    result1 = add_numbers(5, 3)
    if result1 == 8.0:
        test_results.append("✓ test_add_positive_numbers: PASSED (5 + 3 = 8.0)")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_positive_numbers: FAILED (expected 8.0, got {result1})")
        test_failed += 1
    
    result2 = add_numbers(100, 200)
    if result2 == 300.0:
        test_results.append("✓ test_add_positive_numbers (100 + 200): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_positive_numbers: FAILED (expected 300.0, got {result2})")
        test_failed += 1
    
    # Test 2: With zero
    result3 = add_numbers(0, 5)
    if result3 == 5.0:
        test_results.append("✓ test_add_with_zero (0 + 5): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_with_zero: FAILED (expected 5.0, got {result3})")
        test_failed += 1
    
    result4 = add_numbers(10, 0)
    if result4 == 10.0:
        test_results.append("✓ test_add_with_zero (10 + 0): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_with_zero: FAILED (expected 10.0, got {result4})")
        test_failed += 1
    
    result5 = add_numbers(0, 0)
    if result5 == 0.0:
        test_results.append("✓ test_add_with_zero (0 + 0): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_with_zero: FAILED (expected 0.0, got {result5})")
        test_failed += 1
    
    # Test 3: Negative numbers
    result6 = add_numbers(-5, -3)
    if result6 == -8.0:
        test_results.append("✓ test_add_negative_numbers (-5 + -3): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_negative_numbers: FAILED (expected -8.0, got {result6})")
        test_failed += 1
    
    result7 = add_numbers(-10, 5)
    if result7 == -5.0:
        test_results.append("✓ test_add_negative_numbers (-10 + 5): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_negative_numbers: FAILED (expected -5.0, got {result7})")
        test_failed += 1
    
    result8 = add_numbers(10, -5)
    if result8 == 5.0:
        test_results.append("✓ test_add_negative_numbers (10 + -5): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_negative_numbers: FAILED (expected 5.0, got {result8})")
        test_failed += 1
    
    # Test 4: Floats
    result9 = add_numbers(2.5, 3.7)
    if abs(result9 - 6.2) < 0.0001:
        test_results.append("✓ test_add_floats (2.5 + 3.7): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_floats: FAILED (expected 6.2, got {result9})")
        test_failed += 1
    
    result10 = add_numbers(0.1, 0.2)
    if abs(result10 - 0.3) < 0.0001:
        test_results.append("✓ test_add_floats (0.1 + 0.2): PASSED")
        test_passed += 1
    else:
        test_results.append(f"✗ test_add_floats: FAILED (expected 0.3, got {result10})")
        test_failed += 1
    
    # Summary
    summary = f"\\n{'='*50}\\nTest Summary:\\n{'='*50}\\n"
    summary += f"Total tests: {test_passed + test_failed}\\n"
    summary += f"Passed: {test_passed}\\n"
    summary += f"Failed: {test_failed}\\n"
    summary += f"{'='*50}"
    
    test_results.append(summary)
    
except Exception as e:
    test_results.append(f"Error running tests: {str(e)}")
    test_failed += 1
finally:
    sys.stdout = old_stdout

"\\n".join(test_results)
`;
    
    try {
        const output = pyodide.runPython(testCode);
        resultDiv.textContent = output;
        resultDiv.className = 'result test-output';
        
        // Check if all tests passed
        if (output.includes('Failed: 0')) {
            resultDiv.classList.add('success');
        }
    } catch (error) {
        resultDiv.textContent = `Error running tests: ${error.message}`;
        resultDiv.className = 'result error';
    }
}

/**
 * Initialize the application
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
    
    // Initialize result displays
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Enter two numbers and click "Add Numbers"';
    resultDiv.className = 'result empty';
    
    const pythonResultDiv = document.getElementById('pythonResult');
    pythonResultDiv.textContent = 'Enter numbers and click "Test Python Function"';
    pythonResultDiv.className = 'result empty';
    
    const testResultDiv = document.getElementById('testResult');
    testResultDiv.textContent = 'Click "Run All Tests" to execute the test suite';
    testResultDiv.className = 'result empty';
    
    // Load Pyodide - wait for the script to be available
    // Pyodide script is loaded in the HTML head, so wait for it
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePyodide);
    } else {
        // DOM is already loaded, wait a bit for Pyodide script
        setTimeout(initializePyodide, 100);
    }
});
