function positiveSum(arr) {
  
    var soma = 0;

    for (var i=0; i<arr.length; i++){
      if(arr[i] > 0){
        soma += arr[i];
        
      }
    }
    return soma;
  }