// function betterThanAverage(classPoints, yourPoints) {
   
//     const soma = classPoints.reduce((prev, corrent) => {
//        return prev + corrent;
//        },0);
//       return yourPoints > soma/(classPoints.length)?true: false;
//    }
//    console.log(betterThanAverage([2, 10,3],5))

//Diferença de Volumes de Cubóides
//https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
   
// function findDifference(a, b) {
//       const arrA = a.reduce((prev, corrent) => {
//          return prev*corrent;
//          },1);
//       const arrB = b.reduce((prev, corrent) => {
      
//          return prev*corrent;
//          },1);
//          return arrB > arrA? arrB - arrA: arrA - arrB;
//     }
//     console.log(findDifference([3, 2, 5], [1, 4, 4]))
//     console.log(findDifference([9, 7, 2], [5, 2, 2]))
//     console.log(findDifference([15, 20, 25], [10, 30, 25]))

//Super super fácil
//https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
    
   function problem(x){
      //your code here
      return x === +x? (x*50 + 6): "Error";
    }
    console.log(problem("hello"));
    console.log(problem(1));
    console.log(problem(1.2));