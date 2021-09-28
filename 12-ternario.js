/* Operador Ternario */

const edad = 20;

if(edad>=18){
    document.write('Eres mayor de edad');
}else{
    document.write('Eres menor de edad');
}

const msg= edad>18 ? 'Eres mayor de edad': 'Eres menor de edad';
document.write(`<p>${msg}</p>`);