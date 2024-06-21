// 1. Write a function that takes two numbers as parameters and returns their sum
function sum(a: number, b: number): number {
  return a + b;
}

// 2Write a function that returns a fixed number
function fixedNumber(): number {
  return 42;
}

// 3. Write a function that takes a string and an optional boolean parameter.
// If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.
function formatString(str: string, toUpperCase?: boolean): string {
  return toUpperCase ? str.toUpperCase() : str.toLowerCase();
}
