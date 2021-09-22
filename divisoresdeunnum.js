let num = parseInt(prompt("Ingresa un número"));
while (isNaN(num)) {
    num = parseInt(prompt("Ingresa un número"));
}
let i = 1;
while (i <= num) {
    if (num % i == 0) {
        document.write("Un divisor de " + num + " es: " + i + "</br>");
    }
    i++;
}

