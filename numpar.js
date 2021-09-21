alert("¿Quieres saber si es par o impar?");
while(isNaN(num)){
var num = parseInt(prompt("Dame un número"));
}
document.write("<h1><center>Numeros Par o Impar</center></h1>");

if(num%2==0){
    var par="Par"
}else{
    var par="Impar"
}

const paroimp = `<h2>El número ${num} es ${par}<br></h2>`;

document.write(paroimp);