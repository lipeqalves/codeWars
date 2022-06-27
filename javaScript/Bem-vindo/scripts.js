function greet(language) {
 
    const  paisSaudacao = new Map<String>(
    ['english', 'Welcome'],
    ['danish',  'Velkomst'],
    ['dutch' , 'Welkom'],
    ['estonian' , 'Tere tulemast'],
    ['finnish', 'Tervetuloa'],
    ['czech' , 'Vitejte'],
    ['flemish' ,'Welgekomen'],
    ['french' , 'Bienvenue'],
    ['german', 'Willkommen'],
    ['irish' , 'Failte'],
    ['italian' ,'Benvenuto'],
    ['latvian' ,'Gaidits'],
    ['lithuanian' ,'Laukiamas'],
    ['polish' , 'Witamy'],
    ['spanish' , 'Bienvenido'],
    ['swedish' ,'Valkommen'],
    ['welsh' , 'Croeso']);
        
    
   // console.table(paisSaudacao);
  /* return paisSaudacao.map((item) => {
        if(item.keys === language){
           return item.values;
        }else{
            return 'Welcome';
            } 
        });*/
        
        for (const pais in paisSaudacao){
            console.log(pais.keys);
            if(pais.keys === language){
                console.log(pais.values);
                return pais.values;
            }
        }
        
}
console.log(greet('spanish'));
