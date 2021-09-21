while(isNaN(anio)){
  var anio = parseInt(prompt("¿En que año naciste?"));
}while(isNaN(mes)){
    var mes = parseInt(prompt("¿En que mes naciste número?"));
}while(isNaN(dia)){
  var dia = parseInt(prompt("¿En que dia naciste número?"));
}
const fecha = new Date();
const mesActual = fecha.getMonth() + 1;
const hoy = fecha.getDate();
var edad=0;
if(dia==hoy && mes==mesActual){
  document.write("<h1><center>¡Feliz Cumpleaños!</center></h1>");
  edad=2021-anio; 
}
else{
  if(mes<=mesActual && dia<=hoy){
    edad=2021-anio;  
  }else{
    edad=2020-anio;
  }
}
const print = `<h2>Tu edad es ${edad} años <br></h2>`;
document.write(print);
