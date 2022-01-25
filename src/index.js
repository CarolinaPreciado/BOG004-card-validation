import validator from './validator.js';

//Declarando variables para enmascarar
let creditCardNumber = document.getElementById("numberTc");
let buttonTc = document.getElementById("buttonTc");
let contenedorTarjeta = document.getElementById("contenedorTarjeta");

//Función que evalua si el input del usuario es un numero de 16 caracteres. Informa al usuario qué debe hacer.
function evaluaNumero(numberTc) {
    let evaluateNumber = isNan(numberTc.value);
    if (evaluateNumber == "false") {
        console.log(`Usted ingreso un número de tarjeta de crédito apto para validar. De Click en Validar.`);
    }
    else if (!numberTc) {
        console.warn("No ingresaste ninguna información");
    } else if (numberTc.length != 16) {
        console.warn(`Usted ingreso ${numberTc.length} números, no se puede realizar la validación. Click en borrar.`);
    }
    else {
        console.log(`Usted ingreso ${numberTc.length} números, se puede realizar el proceso de validación. De Click en Validar.`);
    }
}

//Evento de emascaramiento, toma la variable del numero de tarjeta en el click y enmascara los primeros digitos
buttonTc.addEventListener("click", () => {
    let resultado = validator.maskify(numberTc.value);
     let textoValidacion = validator.isValid(numberTc.value);
    contenedorTarjeta.innerText = "La tarjeta a validar es " + resultado;
    contenedorEvaluarTarjeta.innerText = "El resultado es " + textoValidacion;
    console.log("resultado", resultado);
}
);






