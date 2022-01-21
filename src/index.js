import validator from './validator.js';

//Evento preguntar tarjeta
let creditCardNumber = document.getElementById("numberTc");
let buttonTc = document.getElementById("buttonTc");
let contenedorTarjeta = document.getElementById("contenedorTarjeta");



buttonTc.addEventListener("click", () => {
    let resultado = validator(numberTc.value);
contenedorTarjeta.innerText = "La tarjeta a validar es " + resultado;

console.log("resultado",resultado);

}
);

