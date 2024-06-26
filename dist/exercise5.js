// Create a basic calculator class in TypeScript that can perform addition, subtraction,
// multiplication, and division. The class should include validation to ensure that the inputs are
// valid numbers and that division by zero is handled correctly.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Method to validate if the input is a number
    Calculator.prototype.isValidNumber = function (value) {
        return typeof value === "number" && !isNaN(value);
    };
    // Method to add two numbers
    Calculator.prototype.add = function (a, b) {
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            return a + b;
        }
        throw new Error("Invalid input");
    };
    // Method to subtract two numbers
    Calculator.prototype.subtract = function (a, b) {
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            return a - b;
        }
        throw new Error("Invalid input");
    };
    // Method to multiply two numbers
    Calculator.prototype.multiply = function (a, b) {
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            return a * b;
        }
        throw new Error("Invalid input");
    };
    // Method to divide two numbers
    Calculator.prototype.divide = function (a, b) {
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return a / b;
        }
        throw new Error("Invalid input");
    };
    return Calculator;
}());
