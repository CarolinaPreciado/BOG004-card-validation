import validator from './validator.js';

//Evento preguntar tarjeta
let creditCardNumber = document.getElementById("numberTc");
let buttonTc = document.getElementById("buttonTc");
let contenedorTarjeta = document.getElementById("contenedorTarjeta");

//Función que evalua si el input del usuario es un numero de 16 caracteres
/*function esNumero



*/


//Guarda la variable del numero de tarjeta en el click y realiza la validación en el click
buttonTc.addEventListener("click", () => {
    let resultado = validator(numberTc.value);
contenedorTarjeta.innerText = "La tarjeta a validar es " + resultado;

console.log("resultado",resultado);
}
);





