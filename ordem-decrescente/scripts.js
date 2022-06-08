function descendingOrder(n){
  let newNumbers = n.toString().split('');//transforma o numero em string e separa
  return parseInt(newNumbers.sort((a,b) =>{ //ordena o numero em ordem decrescente
    if(a>b){
        return -1;
    }else if(a<b){
        return 1;
    }else{
        return 0;
    }
}).join(''));// junta a string e retorna como numero
}

descendingOrder(13456);
