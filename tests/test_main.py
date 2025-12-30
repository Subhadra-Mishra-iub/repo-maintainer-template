import pytest
from src.main import add_numbers


def test_add_positive_numbers():
    assert add_numbers(5, 3) == 8.0
    assert add_numbers(100, 200) == 300.0


def test_add_with_zero():
    assert add_numbers(0, 5) == 5.0
    assert add_numbers(10, 0) == 10.0
    assert add_numbers(0, 0) == 0.0


def test_add_negative_numbers():
    assert add_numbers(-5, -3) == -8.0
    assert add_numbers(-10, 5) == -5.0
    assert add_numbers(10, -5) == 5.0


def test_add_floats():
    assert add_numbers(2.5, 3.7) == 6.2
    assert add_numbers(0.1, 0.2) == pytest.approx(0.3)

