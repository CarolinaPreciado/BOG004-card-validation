const validator = {
  //Funcion para enmascarar tarjeta

  maskify: function (valorDeVariable) {
    if (valorDeVariable.length < 4){
      return valorDeVariable;
    } else{
    let lastFourDigits = valorDeVariable.slice(-4);
    //let maskedNumbers = valorDeVariable.slice(0, valorDeVariable.length - 4);
    //console.log(maskedNumbers);
    let maskSymbol ="#";
    let maskedFinal = maskSymbol.repeat(valorDeVariable.length - 4)+ lastFourDigits;
    return maskedFinal;
  }
  },
    //let mascaraFinal = Array.from(maskedNumbers);
    /*for (let i = 0; i < mascaraFinal.length; i++) {
      mascaraFinal[i].replace("#");
    }
    console.log(mascaraFinal);
  }*/
  /* let lastFourDigits =
      valorDeVariable[12] +
      valorDeVariable[13] +
      valorDeVariable[14] +
      valorDeVariable[15];
    let maskedNumbers = "############";
    let finalMasking = maskedNumbers + lastFourDigits;
    console.log(finalMasking);
    return finalMasking;
  },
*/

  //Funcion para validar tarjeta

  isValid: function (numberTc) {
    let valid = false;
    let validateCard = Array.from(numberTc).reverse();
    let suma = 0;
    for (let i = 0; i < validateCard.length; i++) {
      if ((i + 1) % 2 === 0) {
        validateCard[i] = validateCard[i] * 2;
        if (validateCard[i] >= 10) {
          validateCard[i] = validateCard[i] - 9;
        }
      }
      suma += parseInt(validateCard[i]);
    }
    let resultado = suma % 10;
    if (resultado === 0) {
      valid = true;
      console.log("La tarjeta es valida");
    } else {
      valid = false;
      console.log("La tarjeta es invalida");
      console.log(valid);
    }
    return valid;
  },
};

export default validator;

/* Creacion de objeto con nombres y valores y declaracion de funcion dentro de un objeto
var casa = {
    numeroDePuertas: 4,
    numeroDeEdificio: 2,
    numeroDePiso: 3,
    numeroDeCuartos: 2,
    abrirPuertaPrincipal: function(){
        console.log("La puerta principal esta abierta y el numero de piso es "+this.numeroDePiso)
    }
};*/
