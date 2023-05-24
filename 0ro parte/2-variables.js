// VARIABLES EN JS

//////////////////////////////////////////////////////////////////////////////////////////////

//LAS 2 FASES DE USO DE UNA VARIABLE

//declarar la variable
let altura;

//inicializar la variable
altura = 200

//////////////////////////////////////////////////////////////////////////////////////////////

let nombre = "Oscar"
let nombre2 = "juan"
console.log(nombre, "y", nombre2, "van a jugar Dota2" ) //Oscar y juan van a jugar Dota2

const x = 12
const y = 15
console.log(x + y + (x*y))//207

let apodo = "cabezon"
let edad = 20
console.log(nombre, "el", apodo, "tiene", edad, "años") //Oscar el cabezon tiene 20 años

let frutas = ['mazana', 'pera', 'platanao', 'arandano'] //una variable de tipo array
console.log(frutas[1])

let persona = { //variable de tipo objeto
    nombre: 'diego',
    edad: 30
}
console.log(persona.nombre)

let numero1, numero2, numero3; // Tmb como vemos aca se puede declarar varias variables 

let nume1 = 12,  num2 = 10; // tmb se puede dar valores a varias variables en one line
///////////////////////////////////////////////////////////////////////////////////////////////

/* 

VAR: Era la forma en que se declaraban las variables hasta ECMAScript 5. Quedo obsoleta despues de ECMAScript 6 (ya no se usa)
----------------------------------------------------------------------------------------------

CONST: sirve para declarar variables que nunca van a ser modificadas:**o	No se puede reinicilizar:** es una const única no puede haber otra inicializada con el mismo nombre.
    const pokemonType = ‘electric’ no puede haber:
    const pokemonType = ‘grass’
No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: 
   const pokemonType = ‘electric’ no puede ejecutarse:
   const pokemonType = ‘grass’
No es inmutable: osea no puede cambiar con objetos:
----------------------------------------------------------------------------------------------
    
Let: Son variables que pueden ser modificadas, se pueden cambiar
    let pokemonType = ‘grass’
    let pokemonType = ‘fire’
Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: 
    inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
Su contexto es de bloque:
     Solo funciona dentro de un bloque {}, fuera de ello no. 

*/