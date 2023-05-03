//FUNCIONES EN JS

/////////////////////////////////////////////////////////////////////////////////////
/*
En JS, las funciones se las declaran con la palabra reservada y propia de JS `function`no como en py que se usa def.
Las **funciones** son bloques de código osea un conjunto de sentencias que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.
Ambas pueden llevar parámetros. Cada parámetro va separado por una coma. Si queremos que una función nos dé un numero o dato tenemos que usar la keyword <return>: 
*/
/////////////////////////////////////////////////////////////////////////////////////

//Declarativas
/*
Las funciones declarativas tienen la siguiente sintaxis:

    function <Nombre de la función> (Parámetros de la función) {
        Instrucciones...
    } 
*/

function miFuncion(a,b){
    return a+b
}
//Llamado de funcion e impresion en consola 
console.log(miFuncion(3,9999))//10002
//El 3,99999 que ponemos al llamr la funcion  recibe el nombre de argumento

/////////////////////////////////////////////////////////////////////////////////////

//Expresiva
/*
Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:

    let <Nombre de la variable> = function (Parametros) {
        Instrucciones...
    }
*/
let mmiFuncion = function(c,d){
    return c+d
}

//Este tipo de funcion se llama igual que las Declarativas


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

////////////////////////////////////////////////////////////////////////////////

//MORE INFO

/*
Plantillas literales
También puedes utilizar las plantillas literales, una nueva característica del lenguaje para utilizar las variables dentro de texto `${variable}` entre las tildes invertidas ( `` ) esto tmb mas adelante sirve para conectar a bases de datos y automatizar tareas,
console.log ( ` Hola ${nombre} ` )
*/

/*
    En Js se usa el camellCase para definir funciones osea minusculaMayusculaMayuscula
*/