let i = 1, prom, suma = 0;
let num = parseInt(prompt("Ingresa un número"));
while(num >= 0) {
    suma += num;
    prom=suma/i;
    i++;
    document.write("num es ",num);
    document.write("</br>");
    document.write("suma es ",suma);
    document.write("</br>");
    document.write("prom es ",prom);
    document.write("</br>");
    num = parseInt(prompt("Ingresa un número"));
}
prom = suma / (i-1);
let msg = `<h1>La suma de los numeros es <strong>${suma}</strong> y el promedio es ${prom}</br></h1>`;
    document.write(msg);