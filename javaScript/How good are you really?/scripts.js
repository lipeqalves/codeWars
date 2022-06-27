function betterThanAverage(classPoints, yourPoints) {
   
    const soma = classPoints.reduce((prev, corrent) => {
       return prev + corrent;
       },0);
      return yourPoints > soma/(classPoints.length)?true: false;
   }
   console.log(betterThanAverage([2, 10,3],5))