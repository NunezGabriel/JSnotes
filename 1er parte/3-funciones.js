//declarativas

function mifuncion(a,b){
    return a+b
}
//llamado de funcion e impresion en consola 
console.log(mifuncion(3,9999))//10002

//expresion

let mmifuncion = function(c,d){
    return c+d
}
//////////////////////////////////MAS EJEMPLOS/////////////////////////////////////////

function saludar(nombre){
    console.log("hola", nombre);
}
saludar("Andre")//hola Andre

function calculadora(valor1, valor2){
    console.log(valor1+valor2)
    console.log(valor1-valor2)
    console.log(valor1*valor2)
    console.log(valor1/valor2)
}
calculadora(34,12)
/*
46
22
408
2.8333333333333335 */

function saludarCarreras(carrera){
    console.log(`Hola ${carrera}`)
}
saludarCarreras('medicina')// Hola medicina

function restar(x,y){
    return x-y;
}
let resultado = restar(12, 13)
console.log(resultado)//-1