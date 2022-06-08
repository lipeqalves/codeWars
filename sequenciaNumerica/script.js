function SeriesSum(n)
{
  // Happy Coding ^_^
  var soma = 0;
  for(i=0; i<n; i++){
    soma = soma + 1/(1+(i*3));      
  }
  //return Math.floor(soma)
  return soma.toFixed(2);
}
