const g = 9.8;
console.log(g);

try{
    g = 10.1;
}catch(error){
    //se ejecuta si el try tiene error
    console.log(error)
}finally{
    //se ejecuta en cualquier caso
    console.log('Finally')
}

console.log(g);