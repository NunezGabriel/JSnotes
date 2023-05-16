//METODOS DE ARRAYS
///////////////////////////////////////////////////
/*
    Estos metodos NO se pueden usar en strings
    solo en arrays a difierencia de los metodos de strings
    que si se pueden usar en arrays
    IMPORTANTE: aca no veremos todos los metodos ya que osn VARIOS pero
    si quieres verlos y es mejor que estas notas lee en la documentacion
    link aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let nombres = ['pedro', 'maria', 'jorge'];
let numbers = [2,4,6,7,4,5,1]
///////////////////////////////////////////////////
// * METODOS TRANSFORMADORES *  =>  Mofican al Array
nombres.pop() // elimina el ultimo elemento del array y lo devuelve
nombres.shift() // elimina el primer elemento del array y lo devuelve
nombres.push('rodrigo') // agrega un elemento al array al final y devuelve la nueva longitud del array
nombres.reverse() // invierte el orden de los elementos del array
nombres.unshift('juan','raul') // agrega uno o + elementos al inicio del array y devuelve la nueva longitud del array
numbers.sort()//ordena los elementos de un array localmente y lo devuelve ordenado esto basandolo en el orden lexicografico(orden alfabetico y numeral) => output: [1,2,4,4,5,6,7]

numbers.splice(1,3,'pez')//toma 3 parametros el primero el index donde comienza y el segundo cuantos elementos quieres que 'borre' y el tercero en adelante es por que quieres remplazar los elementos borrados ejemplo.. => output:[2,'pez',4,5,1] 🔴 si no pones el tercer parametro no agrega nada

///////////////////////////////////////////////////
// * METODOS ACCESORES * => Crean un nuevo Array o hacen algo con el array pero sin modificarlos

let resultado = nombres.join('-')//une los elemetnos del array con el separador que le pasemos por parametro en este caso los une con un '-'=> oputput: 'pedro-maria-jorge'

let resultado2 = nombres.slice(0,2)//devuelve un array que toma los elemetnos de nombre desde el elemento 0 al elemento 2 ... el elemento 2 como tal no esta incluido

///////////////////////////////////////////////////
// * METODOS DE REPETICION * 

numbers.filter((element,index,array) => element == 4) // filter es como un bucle que me va a traer el array con los elementos selecionados osea un array con puro 4 dependiendo cuantos 4 haya en el array original...el element,index,array son callbacks algo que veremos ams adelante

numbers.forEach((element,index,array) => console.log(`${element} sal`)) // hace lo mismo que filter pero filter es mas completo ya que filter si hay una CONDICION nos retorna los elementos filtrados en un array

numbers.map((element,index,array)=>element*2) // map nos retorna un array como tal de las instrucciones que esten dentro de la funcion ... el mas god de los 3

/////////////////////////////////////////////////

// RECAPITULACION

/*
    En resumen, la diferencia principal entre map() y filter() o forEach() es que map() crea un nuevo array con elementos transformados, mientras que filter() filtra los elementos según una condición y forEach() solo ejecuta una función en cada elemento sin modificar el array original.
*/