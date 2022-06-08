function XO(str) {
  //code here

let contX = 0;
let contO = 0;
console.log(str)
for (let i =0; i< str.length ; i++){
  if (str[i].toLowerCase() === 'x'){
    contX++;
    
  }
  if (str[i].toLowerCase() === 'o'){
    contO++;
    
  }
}
if (contX == contO){
  console.log(true) 
  console.log(contX) 
  console.log(contO)
  //return true;
  }else{
    console.log(false)
    console.log(contX) 
    console.log(contO)
    //return false;
  }
}