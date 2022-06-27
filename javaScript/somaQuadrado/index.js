function squareSum(numbers){
  let arr = numbers;
  let soma = 0;
  
  for (let i = 0; i < arr.length; i++){

    soma = soma + arr[i]*arr[i];
  
  }
  
  return soma;
}