// =======================================================================
// Adding Big Numbers
/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers 
are strings and the function must return a string.

Example:
add("123", "321"); -> "444"
add("11", "99");   -> "110"
*/

// Solution

function add(a, b){
  const number1 = BigInt(a)
  const number2 = BigInt(b)
  const finalNum = number1 + number2
  return finalNum.toString()
}

// =======================================================================
// Adding Big Numbers