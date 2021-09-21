const nombre = prompt("¿Como te llamas?");
const edad = prompt("¿Cuantos años tienes?");
document.write("<h2>Hola " + nombre + " Saludos. Tu edad es " + edad + " años.</h2><br>");

const saludo = `<h2>Hola ${nombre} saludos. Tu edad es ${edad} años <br></h2>`;
document.write(saludo)
