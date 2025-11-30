"""
Simple utility module for basic mathematical operations.

This module provides a function to add two numbers together.
"""


def add_numbers(a: float, b: float) -> float:
    """
    Add two numbers and return the result.
    
    Args:
        a: First number to add
        b: Second number to add
    
    Returns:
        The sum of a and b
    
    Example:
        >>> add_numbers(2, 3)
        5.0
        >>> add_numbers(-1, 1)
        0.0
    """
    return a + b


if __name__ == "__main__":
    # Sample calculation to demonstrate the function
    result = add_numbers(10, 20)
    print(f"Sample calculation: add_numbers(10, 20) = {result}")

