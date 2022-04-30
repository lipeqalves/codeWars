function validatePIN (pin) {

    if(pin.length == 4 || pin.length == 6  ){ 
      if(parseInt(pin) == pin && parseInt(pin) >= 0){
        for(var i = 0; i<pin.length; i++){
          if(pin[i] != '.' || pin[i] !='-'){
            
          }
          return true; 
        }
      }else{
            return false
          }
    }
    else if(pin == '.' || pin=='-'){
      return false;
    }else if(pin == '' ){
      return false;
    }else{
      return false;
    }
}

