var rs = require('readline-sync');

var firstNum = rs.question('Please enter a number');
var secondNum = rs.question('Please enter anoter number');
var operator = rs.question('Please enter an operator');

var operation = firstNum + operator + secondNum

var result = eval(operation);

console.log(result);