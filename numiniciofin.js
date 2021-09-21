while (isNaN(num1)) {
    var num1 = parseInt(prompt("Dame un número de Inicio"));
}
while (isNaN(num2)) {
    var num2 = parseInt(prompt("Dame un número de Fin"));
}
var ini;
var fin;
if(num1>num2){
    ini=num2;
    fin=num1;
}else{
    ini=num1;
    fin=num2;
}
document.write(`<h1><center>Inicio ${ini}</h1></center>`);
for (let i = ini; i <= fin; i++) {
    if (i % 2 == 1) {
        const imp = `<center><h5> El número ${i} es impar<br></h5></br></center>`;
        document.write(imp);
    }
}
document.write(`<h1><center>Fin ${fin}</h1></center>`);

