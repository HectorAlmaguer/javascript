/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";
switch (edad) {
    case 18:
        mensaje = "Acaba de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Valor no encontrado";
        break;
}
document.write(`<p>${mensaje}</p>`); */

const nombre = prompt("¿Como te llamas?");
let mensaje ='';
switch(nombre.toLowerCase()){
    case 'hector':
        mensaje='Eres Administrador';
        break;
    case 'juan':
        mensaje='Eres Usuario';
        break;
    default:
        mensaje= 'No tienes permisos para el sistema';
        break;
}
document.write(`<p>${mensaje}</p>`);