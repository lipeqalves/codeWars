function powersOfTwo(n){
   let arr = [];
   //if(n == 0) {arr = [1]};
    for(i=0; i<=n; i++){
      arr.push(Math.pow(2,i));
    }
    return arr
}
console.log(powersOfTwo(1));