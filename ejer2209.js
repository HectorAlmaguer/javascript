while (isNaN(num1)) {
    var num1 = parseInt(prompt("Dame un número"));
} while (isNaN(num2)) {
    var num2 = parseInt(prompt("Dame otro número"));
}
if (num1 != num2) {
    if (num1 > num2) {
        let suma, resta;
        suma = num1 + num2;
        resta = num1 - num2;
        const msg1 = `<h2>La suma de ${num1} + ${num2} = ${suma}<br></h2>`;
        const msg2 = `<h2>La resta de ${num1} - ${num2} = ${resta}<br></h2>`;
        document.write(msg1, msg2);
    } else {
        let mul, div;
        mul = num1 * num2;
        num2 != 0 ? div= num1/num2: document.write("No se puede dividir entre 0");
        const msg1 = `<h2>El producto de ${num1} * ${num2} = ${mul}<br></h2>`;
        const msg2 = `<h2>El cociente de ${num1} / ${num2} = ${div}<br></h2>`;
        document.write(msg1, msg2);
    }
}else{
    const msg2 = `<h2>Los numeros  son iguales ${num1} = ${num2}<br></h2>`;
        document.write(msg2);
}
