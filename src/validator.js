const validator = (valorDeVariable) => {
    console.log(valorDeVariable)
    console.log(typeof(valorDeVariable));
    let lastFourDigits = valorDeVariable[12]+valorDeVariable[13]+valorDeVariable[14]+valorDeVariable[15];
    let maskedNumbers = '############';
    let finalMasking = maskedNumbers + lastFourDigits;
    console.log(finalMasking);
    return finalMasking;
};

function isValid() {
    let validateCard = Array.from(numberTc);
    let suma =0;
    for (let i=0; i<validateCard.length; i++) {
        if (i%2===0) {
            validateCard[i] = validateCard[i]*2;
            if (validateCard[i]>=10) {
                validateCard[i]=validateCard[i]-9;
            }
        }
        suma += parseInt(validateCard[i]);
    }
    let resultado = suma % 10;
      if (resultado === 0){
        console.log("La tarjeta es valida");
      }
    else {
        console.log("La tarjeta es invalida");
    }
};

export default validator;
