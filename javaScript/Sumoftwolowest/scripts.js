//Sum of two lowest positive integers
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function(a, b) {
    return  a - b;
  });
  return numbers[0]+numbers[1];
  }

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));