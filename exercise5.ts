// Create a basic calculator class in TypeScript that can perform addition, subtraction,
// multiplication, and division. The class should include validation to ensure that the inputs are
// valid numbers and that division by zero is handled correctly.

class Calculator {
  // Method to validate if the input is a number
  private isValidNumber(value: any): boolean {
    return typeof value === "number" && !isNaN(value);
  }

  // Method to add two numbers
  add(a: any, b: any): number {
    if (this.isValidNumber(a) && this.isValidNumber(b)) {
      return a + b;
    }
    throw new Error("Invalid input");
  }

  // Method to subtract two numbers
  subtract(a: any, b: any): number {
    if (this.isValidNumber(a) && this.isValidNumber(b)) {
      return a - b;
    }
    throw new Error("Invalid input");
  }

  // Method to multiply two numbers
  multiply(a: any, b: any): number {
    if (this.isValidNumber(a) && this.isValidNumber(b)) {
      return a * b;
    }
    throw new Error("Invalid input");
  }

  // Method to divide two numbers
  divide(a: any, b: any): number {
    if (this.isValidNumber(a) && this.isValidNumber(b)) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    }
    throw new Error("Invalid input");
  }
}
