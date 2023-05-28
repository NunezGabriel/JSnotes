// JS like a PRO

/*
    Acac veremos unos concpetos extra de cosas que ya vimos para que puedas escribir js en menos lineas o como dice el titulo like a PRO B)
*/

////////////////////////////////////////////////////

//En JS todos los bloques pueden escribirse en una linea si solo tienen una instruccion ejm
console.log('/////////////////////////////////////////')

if(true) console.log('hola') // como vez esta en una sola linea y sin {} 
else console.log('!hola')

let arr = [1,2,3,4,5]
for(let number of arr) console.log(number)

//Pero para conservar sentido y sea de lectura mas sencilla es ecomendable poner las {} asi sea de una sola linea 
console.log('/////////////////////////////////////////')

if(true) {console.log('adios')}
else{console.log('!adios')}

for(let number of arr) {console.log(number)}

console.log('/////////////////////////////////////////')

//Con funciones declarativas y expresativas tmb se pueden poner en una sola linea si solo hay una instruccion PERO si o si deben ir en llaves 

function sayHi() {console.log('hi!!!')}
sayHi()

const sayBye = function(){console.log('bye!!!')}
sayBye()

//Con Arrow Functions Cambian varias cosas con respecto a las 2 funciones anteriores.... Aca tmb puedes poner la funcion en una sola linea pero no es obligatorio poner {}

const sayWord = () => console.log('random word')
sayWord()

//tmb si solo hay un parametro podemos obviar los () 

const sayText = text => console.log(text)
sayText('this is a text')

console.log('/////////////////////////////////////////')

///////////////////////////////////////////////////////

//Los returns pueden retornar atributos/metodos ósea funcionan como objetos ejem de keepable proyect

// function DOMHandler(parentSelector) {
//     let parent = document.querySelector(parentSelector);
  
//     if (!parent) throw new Error("Parent not found");
  
//     return {
//       load(module) {
//         parent.innerHTML = module;
//       },
//     };
//   };

// const main = DOMHandler('.divDontainer')
// main.load('<h1>Hola soy un h1</h1>')

//Este ejm no funciona prq no esta conectado a ningun HTML asi que por eso lo comento pero si estuviera conectado y existiece la clase divContiner funcionaria al 100% asi que solo leelo para que lo entiendas si quieres descomentalo para ver mejor el codigo pero luego comentalo

//////////////////////////////////////////////////////

//Una variable puede tener toda una estructura html usando backticks eje

const estructura = 
	`
		<h1>Este es un titulo</h1>
		<p>este es un parrafo</p>
		<button> apretame</button>
	`

//Y luego con innerHTML lo podemos meter en otro sitio y este será un html y no string

////////////////////////////////////////////////////

//Pedes usar el || como una condicional muy simple que sirve para detectar valores falsy ejm

let x = undefined
let y = 12
let z = y||x

//esto lo que hace es darle a z el valor de 12 ya que lo que hace el || es detectar que ninguno de los 'parametros' que pasas (x , y) sea de tipo falsy (undefined) -> osea que si uno es falsy toma el que no lo sea no importa el orden de quien este primero , el orden solo importa si ambos son truthy o si ambos son falsy ahi en el caso truthy toma el primero y en el caso falsy toma el ultimo

//Esta es una técnica comúnmente utilizada en JavaScript para asignar un valor predeterminado a una variable en caso de que el valor original sea undefined o un valor falsy (como null, false, 0, NaN o una cadena vacía).

////////////////////////////////////////////////////
