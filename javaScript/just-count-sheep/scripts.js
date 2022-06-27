      //just count sheep
      //let num = 0;
      function countSheep(num){
        //your code here
        arr = "";
        if(num == 0){
          arr = "";
        }
        for(i=1; i<= num; i++){
           arr = arr + `${i} sheep... `
        }
        return arr;
      }
      console.log(countSheep(0));
      console.log(countSheep(1));
      console.log(countSheep(2));
      console.log(countSheep(10));