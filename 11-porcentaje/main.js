//VARIABLES
let numero = prompt("Ingresa el número sobre el que querés calcular el porcentaje:");
let porcentaje = prompt("Ingresa el porcentaje que queres calcularle al número ingresado:");

let number = Number(numero)
let porciento = Number(porcentaje)

let calcular = ( 100 * numero ) / porcentaje;

//MENSAJE
alert(`El ${porcentaje}% de ${numero} es ${calcular}`)

//comillas mágicas: ``````