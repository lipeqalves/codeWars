// Sum Numbers
function sum (numbers) {
    "use strict";
  let soma = 0;  
  for(let i= 0; i<numbers.length;i++){
    soma = soma + numbers[i];
  }
    console.log(soma);
};
let num = [1,3,5,6]
sum(num);