function getSum( a,b )
{
  let sumArr = [];
    if (a<b){
      for(let i = a; i<=b; i++ ){
        sumArr.push(i)
        }
      return sumArr.reduce((prev, corrent) => {
        return prev + corrent;
    });
    }else if(b<a){
      for(let i = b; i<=a; i++ ){
        sumArr.push(i)
      }
      return sumArr.reduce((prev, corrent) => {
        return prev + corrent;
    });
    }else{
      return a;
    }
}

console.log(getSum(-1,5 ))
console.log(getSum(1,-5 ))
console.log(getSum(1,5 ))
console.log(getSum(5,5 ))