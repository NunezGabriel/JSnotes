//PROGRAMACION ASINCRONA
/*
    Aca entenderemos sobre la programacion asincrona Callbaks, promises, Async - Away
    primero entender que JS comunmente funciona de manera sincrona osea digamos que tenemos 4 tareas pues primero se ejecuta la primera luego la segunda ... y asu hasta llegar a la cuarta tarea
    pero JS a diferncia de otros lenguajes es un lenguaje asincrono eso quiere decir que por ejm en python se ejecuta una funcion y esta demorea en ejecutarse pues no se va a ejecutar nada hasta que esa funcion no se ejecute PERO en JS si una funcion demorea en ejecutarse no la espera, pasa a la siguiente, asi funciona esto asi que sigamos con esos tres conceptos super importantes.

    IMPORTANTE: los tres conceptos que vamos a ver funcionan para lo mismo solo que estan en orden de efectividad: callbacks -> el menos usado/no muy efectivo, promises->muy usado/no tan practico, async-await -> muy usado/muy efectivo/mas moderno
*/

////////////////////////////////////////////

//Callbaks

/*
    Un callback es una función que se pasa como argumento a otra función y se invoca después de que se complete una operación asincrónica o determinada condición se cumpla. Los callbacks se utilizan para manejar la ejecución de código asíncrono en JavaScript. Al utilizar callbacks, se define una función que se ejecutará una vez que se haya completado una operación asincrónica, evitando bloquear la ejecución del código.
    Ejemplo de uso de callbacks:
*/

function operacionAsincrona(callback) {
  setTimeout(function () {
    // Simulando una operación asincrónica
    callback();
  }, 2000);
}

function callback() {
  console.log("Operación completada");
}

operacionAsincrona(callback);

////////////////////////////////////////////

//Promises
/*
  Metodo muy usado al aigual que async-await pero presenta ciertos problemas en algunas cosas especificas se usa de la sigiente manera: para este ejm usaremos el manejo de una API ya que este es un caso mas real que usar setInterval():
*/

const ditoUrl = "https://pokeapi.co/api/v2/pokemon/ditto"; // aca alamcenamos la url de los datos de la API esta url mayormente nos la da la API a la que accedemos

fetch(ditoUrl) //asi funcioan promesas aca hacemos el fetch para traer la API pero nos trae el estado de la API para traer los valores de los datos JSON
  .then((response) => response.json()) // usamos esta funcion la cual es asincrona y si no tiviesemos el then no funcionaria el then especifica los pasos que se van haciendo detro del fetch que seria nuestra funcion asincrona
  .then((result) => console.log(result))// aca imprimimos los datos de la API lo que va dentro de cada then es un callback que  especifica la funcion que querramos que se ejecute
  .catch((error) => console.log(error));//el catch lo tenemos para que agarre el error si lo hay // esto es lo que dijimos que esta relacionado en el modulo de handle errors

///////////////////////////////////////////

//Async-Await

/*
  Este metodo es muy usado y tmb es super fectivo a parte es el mas moderno de los 3, fue introducido en ECMAScript 8 y funciona de una manera relativamente sencilla ... usaremos un ejemplo parctico que es interactuando con una API que es mayormente para lo que se usan estos conceptos de asynchronous Programing
*/

const url = "https://pokeapi.co/api/v2/pokemon?limit=10"; // aca alamcenamos la url de los datos de la API esta url mayormente nos la da la API a la que accedemos

async function hitAPI() {
  //aca por sintaxis de async-await ponemos la keyword async al inicio de esta funcion para indicarle al programa de que esta va a ser una funcion asincrona
  let response = await fetch(url); // luego a cada uno de los metodos o funcioes que esten dentro del programa les ponemos al inicio await ... no es necesario ponerle await a todos los metodos que esten en la funcion si no solo a los que sabemos que van a demorar en este caso si ponemos prq fetch es un metodo que nos trae toda la API y demora
  let result = await response.json(); //lo mismo con .json comvierte toda la API y demora por eso ponemos await
  console.log(result); //esta funcion solo imprime la API que ya tenemos no demora por eso no le ponemos await
}

hitAPI();
// estamos usando console.log() dentro de la funcion por eso al llamarla funciona pero si en vez de hacer console.log() hacemos un return esto nos retornaria igualmente una promesa asi qeu para solucionarlo podemos meter el llamado de la funcion dentro otra funcion que sea async y ya dentro trabajar con el return de la funcion primera pero lo mas comun eds que al llamado de la fucion le hagamso un then con lo que querramos que imprima es ams facil seria asi:
async function golAPI(){
   let response = await fetch(url)
   let result = await response.json();
   return result
}
golAPI()
  .then((response) => console.log(response)) //sin el then es una promesa y como vimos para decirle 'aguanta' a una promesa usamos .then()
/*
    RECAPITULACION Y DATA EXTRA
    - Un callback es una funcion que llama a otra puede ser por parametro o simplemente llamarla dentro de la fucion
    - De las 3 la que mas me gusta es async-await y ultimamente es la mas usada
    - lo que hace async-await es darle la funcionalidad de otro lenguaje por ejemplo python a JS osea que hace que no sea asyncrono OSEA que al poner async a la funcion le decimos al programa que es una funcion asyncrona ya que sabemos que va a demorar y con await le damos esa funcion de otro lenguaje como dije arriba ya que le decimos al programa internamente: 'oye espera a que esta funcion se ejecute antes de que se ejecute otra' y asi solucionamos ese problema fetch nos van a retornar una promesa<loading>
    - una diferencia de promesa y async-await es que en promesas la funcion asincrona funciona como try por eso ponemos al final(si queremos) el catch y esto funcionaria normal pero en async-await si quisieramos atrapar un error debemos envolver toda la funcion async en una estructura trycatch ... esta estructura s la que vimos en el modulo de handlke error
*/
