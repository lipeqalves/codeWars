function strCount(str, letter){  
  const comparaStr = str;
  const comparaLetterr = letter;
  let cont = 0;
  for(let i = 0; i < comparaStr.length; i++){
    if(comparaStr[i] === comparaLetterr){
      cont = cont + 1
    }
    
  }
  return cont
  //code here
}