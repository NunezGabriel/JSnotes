//ARRAYS EN JS

////////////////////////////////////////////////////////////////

/*
Es un elememto de tipo objeto,  es de tipo objeto prq dentro de un array va a tener otros elementos un array puede contener strings, numbers, otros arrays, clases, etc. y su sintaxis es asi:

let frutas = [ ’pera’, ‘manzana’,  ‘platano’, ‘fresa’ ] 

al declarar un array lo hacemos con una varible para poder acceder a los elementos de ese array 

los elemento en un array se numeran desde el cero por lo que pero seria el elemento nro 0, manzana el elemento nro 1 y asi, esto sirve para que al querer acceder a un elemto del array ya sabemos que nro es y asi podremos acceder a el ejmplo: 

console.log ( frutas[2] )  //output: platano
*/

////////////////////////////////////////////////////////////////
let frutas = ['pera', 'manzana',  'platano', 'fresa']
console.log(frutas) // [ 'pera', 'manzana', 'platano', 'fresa' ]
console.log(frutas[2]) // platano

let arrayDEarrays = [[1,2,3],[5,8,9],[4,9,7],5]
console.log(arrayDEarrays[2][1])/*aca es cuando queremos entrar en un elmento exacto de un array de arrays. En este caso el primer [2] es para acceder 
al elemnto del array general y el segundo [1] es para acceder al elemento dentro del array al que se accedio antes --> entonces b[2][1] = 9 */

let arrayTriple = [1, 2, [ 3, 8, 4, [5,6,7] ]]
console.log(arrayTriple[2][3][1])/*lo mismo que arriba pero aca estamos accediendo a un elemento de un array dentro de un array dentro de otro array, osea tres veces
--> esto imprime 6*/

////////////////////////////////////////////////////////////////

// * OTRAS FORMAS DE DECLARAR ARRAYS *

let forma2 =Array.of("h","j", 2, 3)//es otra forma de crear un array

let foram3 =Array(10).fill(":D")/*esto lo que hace es crear un array de 10 elemntos y 
con el .fill hacer que los 10 elemntos sean lo que se ponga adentro en este caso :D*/

let forma4 = new Array(1,2,3,4)//esta es otra forma de crear un array pero ya no se usa ES UNA MANERA ANTIGUA/OBSOLETA

////////////////////////////////////////////////////////////////

/* 
* ARRAY ASOCIATIVOS(objetos) * -> ya veremos a detalle mas adelante que son objetos
aca en js no existen los array asociativos como tal PERO podemos usar objetos para "simularlos"
como vemmos aca abajo para acceder a un elemento en un array normal usamos array[1] pero 
con "array asociativos" seria asi pc["nombre"] y esto nos hace recordar a lo que vimmos en ruby
dos fomras para acceder al valor de una key pc[:name] o pc["name"] PERO aca en JS es con pc["name"] o 
pc.name
*/

let pc = {
    name:"gabrielPC",
    procesador: "IntelCore I9",
    ram: "16GB",
    rom: "1TB"
}

console.log(pc["name"]) // esto es como acceder al valor de uin "array asociativo" 

/*
🔴IMPORTANTE: como dijimos arriba en JS no existen los arrays asociativos, en si son OBJETOS
y dentro de un objeto hay atributos(keys) y esos atributos tienen valores(values) para acceder aellos
tenemos 2 formas con pc["name"] y pc.name la segunda es la mejor
*/