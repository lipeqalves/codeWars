var number=function(array){
    //your awesome code here
    let num = 1;
    let arr = [];
    for( let i = 0; i< array.length; i++){
      arr.push(`${num}: ${array[i]}`); 
      num++;
    }
    return arr;
  }