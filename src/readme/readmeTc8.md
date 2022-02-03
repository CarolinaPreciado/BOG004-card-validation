# Card validator

## Función de la aplicación 

Es una aplicación que ayuda a empresas con venta digital a validar las tarjetas de sus clientes antes de realizarles el cobro.

## Quiénes son los principales usuarios de producto?

La persona encargada de la seguridad digital de la tienda.

## Objetivo de los usuarios:

Validar la tarjeta antes de realizar el cobro al cliente.

Ejemplo: Nos contacta una empresa de membrecías y suscripciones periódicas, con nuestra app ellos pueden revisar si la tarjeta es valida antes de realizar el cobro al cliente en caso de no ser valida pueden tomar la decisión pertinente de acuerdo a las políticas de la empresa.

### Definición de pasos de usuario:

Pasos pensados inicialmente para estructurar la maquetación del proyecto:

- Definir título de app
- Bienvenida al usuario
- Preguntar tarjeta a validar 
- Dar respuesta si es válida o no 
- validar de nuevo o validar otra tarjeta

## Prototipos: 

1) ![Propuesta de maquetación Paola] (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/Pao.jpg)

2)	![Propuesta de maquetación Carolina] (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/Caro.jpg)


## Pasos definidos luego de ambos prototipos:

-	Título de la app
-	Bienvenida al usuario 
-	Empresa
-	Preguntar tarjeta a validar 
-	Alertas rechazando la validación (si hay espacios en blanco o si se ingresaron letras)
-	Dar respuesta si es válida o no 
-	validar de nuevo o validar otra tarjeta
-	Volver al inicio 

## Prototipo final: 

[Primera pantalla] (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/1.png)

[Segunda pantalla] (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/2.png)

[Tercera pantalla versión 1] (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/3.png)

[Tercera pantalla versión 2] (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/4.png)


Creamos la app para ayudar a las empresas a validar las tarjetas antes de generar los cobros en las tarjetas de los clientes, por ejemplo cuando un usuario se inscribe ingresa su tarjeta de credito pero no se le hace ningún cobro inicial y cuando se va a realizar el cobro la tarjeta no pasa entonces la empresa quiere rectificar de todas esas tarjetas de credito que estan su base de datos, cuales son validas y cuales no. 


## Proceso de trabajo

Inicialmente cuando empezamos a trabajar en el validator.js tuvimos una confusión y transformamos el objeto en una función lo cual nos estaba arrojando un problema. Luego de leer y investigar sobre objetos y funciones dentro de objetos aprendimos y modificamos lo que teniamos, dejamos validator como un objeto y le agregamos las dos funciones isValid y maskify dentro.

- Primera función para IsValid (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/funcion%20de%20validar.JPG) (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/funcion%20validar%20segunda%20parte.JPG)

- Primera función para maskify (https://github.com/CarolinaPreciado/BOG004-card-validation/blob/main/src/img/funcion%20enmascarar.JPG)


Como inicialmente no tomamos en cuenta los test y nos preocupamos por hacer que las funciones funcionaran al correrlos al final nos dimos cuenta que debiamos cumplir ciertas condiciones que no tuvimos en cuenta y nos toco modificar de nuevo las funciones isValidy y maskify hasta que pasaron al 100% las pruebas.





