function abbrevName(name){
    
    return name.split(' ').map((item) => item.substring(1,0)).join('.').toUpperCase();
      // code away
  }
  
  console.log(abbrevName("f favuzzi"));