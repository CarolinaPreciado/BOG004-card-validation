const validator = {
  //Funcion para enmascarar tarjeta

  maskify: function (valorDeVariable) {
    if (valorDeVariable.length < 4) {
      return valorDeVariable;
    } else {
      let lastFourDigits = valorDeVariable.slice(-4);
      let maskSymbol = "#";
      let maskedFinal =
        maskSymbol.repeat(valorDeVariable.length - 4) + lastFourDigits;
      return maskedFinal;
    }
  },

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
