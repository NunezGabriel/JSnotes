let frutas = ['pera', 'manzana',  'platano', 'fresa']
console.log(frutas) // [ 'pera', 'manzana', 'platano', 'fresa' ]
console.log(frutas[2]) // platano

let arrayDEarrays = [[1,2,3],[5,8,9],[4,9,7],5]
console.log(b[2][1])/*aca es cuando queremos entrar en un elmento exacto de un array de arrays. En este caso el primer [2] es para acceder 
al elemnto del array general y el segundo [1] es para acceder al elemento dentro del array al que se accedio antes --> entonces b[2][1] = 9 */

let arrayTriple = [1, 2, [ 3, 8, 4, [5,6,7] ]]
console.log(c[2][3][1])/*lo mismo que arriba pero aca estamos accediendo a un elemento de un array dentro de un array dentro de otro array, osea tres veces
--> esto imprime 6*/

// * OTRAS FORMAS DE DECLARAR ARRAYS *

let forma2 =Array.of("h","j", 2, 3)//es otra forma de crear un array

let foram3 =Array(10).fill(":D")/*esto lo que hace es crear un array de 10 elemntos y 
con el .fill hacer que los 10 elemntos sean lo que se ponga adentro en este caso :D*/

let forma4 = new Array(1,2,3,4)//esta es otra forma de crear un array pero ya no se usa ES UNA MANERA ANTIGUA/OBSOLETA

// * METODOS PARA MUTAR EL CONTENIDO DE UN ARRAY *

let masFrutas = frutas.push('mango')//--> agrega un elemento al final del array

let menosFrutas = frutas.pop()//--> elimina el ultimo elemento del array

let masFrutasInicio = frutas.unshift('durazno')//--> agrega un elemento al inicio del array

let menosFrutasInicio = frutas.shift()//--> elimina el primer elemento del array

let masFrutaspFuncion = frutas.forEach(agregar)/*esto lo que hace es que por cada elemento del array se ejecute la funcion pasada como parametro 
en este caso hay cuatro lementos en el array osea se va a ejecutar 4 veces la funcion xd*/
function agregar()
{
    frutas.push("sandia")
}

// * INFORMACION DE UN ARRAY *

let posicionFrutas = frutas.indexOf('platano')// 2 --> muestra que posicion ocupa en el array el elemetno que pasaste como parametro

let tamanho = frutas.length()// .length es para obtener la cantidad de elementos de un array

console.log()