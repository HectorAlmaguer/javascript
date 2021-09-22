
const arreglo=[];
const arreglo2=new Array();

let lenguajes = ['Javascript','Java', 'PHP','Python','C#','C++', 'Scala', 'Rust', 'Ruby', 'Cobol',];

/* forEach sirve para recorrer elementos de un arreglo */
document.write('<ul>')
lenguajes.forEach(function(lenguaje, index) {
    document.write(`<li>${index} - ${lenguaje} </li>`);
});
document.write('</ul>')

/* Map, crea un arreglo nuevo conteniendo los resultados */

let numeros=Array(2,3,4,27,19,12);
let numeros2=numeros.map(function(numero){
    return numero*2;
});
document.write(numeros);
document.write("</br>",numeros2);

/* Includes revisa si un arreglo tiene un elemento */
document.write("</br>")
document.write(lenguajes.includes('PHP'));
document.write("</br>")
document.write(lenguajes.includes('Go'));

/* Filter crea un arreglo nuevo con los filtros de la condicion */
document.write("</br>")
let filtrados=numeros.filter(function(numero)
{
    if(numero>10){
        return numero;
    }
});
document.write(filtrados);