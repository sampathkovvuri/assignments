/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add (a) {
    this.result += a;
  }

  subtract (a) {
    this.result -= a;
  }

  multiply (a) {
    this.result *= a;
  }

  divide (a) {
    if(a==0) throw new Error('Cannot divide with 0')
    this.result /= a;
  }
  
  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  
  calculate(str) {
    str = str.replace(/\s/g, '')
    let validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '.', '-']
    for( let i=0; i<str.length; i++) {
      if(!validValues.includes(str[i])) throw new Error('Invalid Input'); 
    }
    if(eval(str) == Infinity) throw new Error('divide by O error');
    this.result = eval(str);

  }
}

module.exports = Calculator;
