confirm("A continuación te preguntaremos los datos de tu domicilio. Gracias por ingresarlos siguiendo las indicaciones.");

//VARIABLES
let calle = prompt("Calle de tu domicilio:");
let altura = prompt("¿a qué altura?");
let dpto = prompt("piso y departamento:");
let CP = prompt("¿Cuál es el código postal?");
let ciudad = prompt("¿En qué ciudad?");
let país = prompt("¿En qué país?");

//ALERT
alert(`La dirección que ingresaste es:
${calle} ${altura} ${dpto}, ${CP}, ${ciudad}, ${país}.`);

//console.log
console.log(calle);
console.log(altura);
console.log(dpto);
console.log(CP);
console.log(ciudad);
console.log(país);




//comillas mágicas: ``````