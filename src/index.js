import validator from './validator.js';

//Declarando variables para enmascarar
let buttonTc = document.getElementById("buttonTc");
let contenedorTarjeta = document.getElementById("contenedorTarjeta");

//Declaracion de variables para crear evento de boton empresa
const companyButton = document.getElementById("buttonE");
const company = document.getElementById("empresaName");
const containerCompany = document.getElementById("containerCompany");

companyButton.addEventListener("click", () => {
    containerCompany.innerText = "Empresa: " + company.value;
    document.getElementById("primeraPagina").style.display = "none";
    document.getElementById("segundaPagina").style.display = "block";
}
);

//Función que evalua si el input del usuario es un numero de 16 caracteres. Informa al usuario qué debe hacer.
/*function evaluaNumero(numberTc) {
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
*/

//Evento de emascaramiento, toma la variable del numero de tarjeta en el click y enmascara los primeros digitos
buttonTc.addEventListener("click", () => {
    let resultado = validator.maskify(numberTc.value);
    let isValid = validator.isValid(numberTc.value);
    let textoValidacion = isValid ? "La tarjeta es Valida" : "La tarjeta es Invalida";

    contenedorTarjeta.innerText = "La tarjeta a validar es " + resultado;
    contenedorEvaluarTarjeta.innerText = textoValidacion;
    console.log("resultado", resultado);
        document.getElementById("segundaPagina").style.display = "none";
        document.getElementById("terceraPagina").style.display = "block";
}
);

//Validar otra Tc de la misma empresa
document.getElementById("buttonValidateNew").addEventListener("click", ()=>{
    document.getElementById("segundaPagina").style.display = "block";
    document.getElementById("terceraPagina").style.display = "none";
//aca debemos agregar como devolvernos a borrar los valores del input y los resultados reinicializarlos
numberTc.value ="";
}
);

//Reinicio de la App
document.getElementById("buttonInicio").addEventListener("click", ()=>{
   document.getElementById("primeraPagina").style.display = "block";
    document.getElementById("segundaPagina").style.display = "none";
    document.getElementById("terceraPagina").style.display = "none";
    document.getElementById("containerCompany").style.display = "none";
    //aca debemos agregar como eliminar el resultado de empresa y que no se muestre?
    company.value ="";
    numberTc.value ="";
}
);

//Borrar los elementos
document.getElementById("borrar").addEventListener("click", ()=>{
     numberTc.value ="";
}
);