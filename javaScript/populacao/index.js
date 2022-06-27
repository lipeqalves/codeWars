function nbYear(p0, percent, aug, p) {
    // your code
  let ano = 0; 
  let habitante = p0;
  let termo = (percent/100);

  while(habitante < p){

   
    habitante = parseInt(habitante + (habitante*termo) + aug);
    ano = ano + 1;
    //console.log(ano + '  ' + habitante + '  ' + termo);
    
    }
    return ano;    
 
    //console.log(ano + '  ' + habitante + '  ' + termo);
}