import validator from "./validator.js";

//Declarando variables para enmascarar
let buttonTc = document.getElementById("buttonTc");
let contenedorTarjeta = document.getElementById("contenedorTarjeta");
let numberTc = document.getElementById("numberTc");

//Declaracion de variables para crear evento de boton empresa
const companyButton = document.getElementById("buttonE");
const company = document.getElementById("empresaName");
const containerCompany = document.getElementById("containerCompany");

companyButton.addEventListener("click", () => {
  containerCompany.innerText = "Empresa: " + company.value;
  //console.log(company.value);
  document.getElementById("primeraPagina").style.display = "none";
  document.getElementById("segundaPagina").style.display = "block";
  document.getElementById("containerCompany").style.display = "block";
});

//Evento de emascaramiento, toma la variable del numero de tarjeta en el click y enmascara los primeros digitos
buttonTc.addEventListener("click", () => {
  let condicion = document.getElementById("condicion");
  if (numberTc.value === "") {
    return (condicion.innerHTML = "Por favor ingresar datos");
  } else {
    condicion.innerHTML = "";
  }
  let resultado = validator.maskify(numberTc.value);
  let isValid = validator.isValid(numberTc.value);
  let valida = true;

  let textoValidacion = isValid
    ? "La tarjeta es Valida"
    : "La tarjeta es Invalida";
  let urlIcon = isValid ? "iconos/check.png" : "iconos/block.png";
  contenedorTarjeta.innerText = "La tarjeta a validar es " + resultado;
  let contenedorEvaluarTarjeta = document.getElementById(
    "contenedorEvaluarTarjeta"
  );
  contenedorEvaluarTarjeta.innerText = textoValidacion;
  document.getElementById("iconValido").setAttribute("src", urlIcon);
  //    iconoValidar.
  //console.log("resultado", resultado);
  if (isValid == valida) {
    document.getElementById("contenedorEvaluarTarjeta").style.color = "#89B0AE";
  } else {
    document.getElementById("contenedorEvaluarTarjeta").style.color = "#F35B5B";
  }
  document.getElementById("segundaPagina").style.display = "none";
  document.getElementById("containerCompany").style.display = "block";
  document.getElementById("terceraPagina").style.display = "block";
});

//Validar otra Tc de la misma empresa
document.getElementById("buttonValidateNew").addEventListener("click", () => {
  document.getElementById("segundaPagina").style.display = "block";
  document.getElementById("terceraPagina").style.display = "none";
  //aca debemos agregar como devolvernos a borrar los valores del input y los resultados reinicializarlos
  numberTc.value = "";
});

//Reinicio de la App
document.getElementById("buttonInicio").addEventListener("click", () => {
  document.getElementById("primeraPagina").style.display = "block";
  document.getElementById("segundaPagina").style.display = "none";
  document.getElementById("terceraPagina").style.display = "none";
  company.value = "";
  numberTc.value = "";
  document.getElementById("containerCompany").style.display = "none";
  document.getElementById("condicion").style.display = "block";
});

//Borrar los elementos
document.getElementById("borrar").addEventListener("click", () => {
  numberTc.value = "";
});
