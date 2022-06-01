function openOrSenior(data){
  // ...
  let saida = [];
  
  for (i = 0; i < data.length; i++ ){
    
      if(data[i][0] >= 55 && data[i][1] > 7){
        
        saida.push('Senior');

      }else{

        saida.push('Open');
      
      }
  }
  return saida;
}
