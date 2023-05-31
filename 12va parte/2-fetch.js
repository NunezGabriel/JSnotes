//FETCH JS
/*
    Aca veremos el tema de fetch osea el tema de interaciones con API'S usando fetch POST GET ... etclo de fecth ya lo vimos en unos ejemplos de async-await y promises ya que lo hicimos para entender mejor ya que este es un caso mas real para usar programacion asincrona :) pero aqui lo veremos a mas profundidad
*/
/////////////////////////////////////////////////////////

const baseUri = 'https://rickandmortyapi.com/api/character/2' // aca almacenamos el link de los datos traidos de la API para poder trabajar con el 

async function getPokemon(){
    let response = await fetch(baseUri) // usamos la palabra fetch para traer los datos de la API pero OJO lo que trae lo trae en un formato texto sin procesar, esto quiere decir que no vas a ver los datos como tal si no veras texto que contenga cosas asi [obetoHead],etc. Para mirar los datos como tal debemos usar el metoso json() asi:
    let result = await response.json()
    console.log(result)

}
getPokemon()

// recuerda al momento de hacer fetch para poder interactuar con la API debemos si o si trabajar con los conceptos de programacion asincronica los cuales vimos antes en este caso estoy usando la forma de async await pero sin problemas podrias usar promises o callbacks, yo uso este prq es el que mas me gusta :) con esto tendriamos la sintaxis basica. => video para aterrizar fetch hasta ahora: https://www.youtube.com/watch?v=cjrt3NilcNw&ab_channel=ProCodeTv

//RECUERDA el fetch es para poder interactuar con la API en general usando GET, POST, etc ... y eso es lo que vamos a ver ahora. asi que vamos a complicarnos un poco mas 

/////////////////////////////////////////////////////////

/*
    ahora veremos fetch un poco mas profundo, primero fetch soporta 2 parametros es primero que es requerido es la url, el segundo no es requerido es opcional dependiendo de que quieras hacer, el parametro seria extra sobre que tipo de peticion vas a hacer que datos vas a mandar si quieres enviar datos, etc tiene esta sintaxis
*/

// si quiero enviar dato

fetch(baseUri, {
    method: 'POST', // aca le decimos que la interaccion que vamos a tener con la API va a ser para enviar datos
    headers: { //tenemos que especificar si o si los headers ya sea el metodo post o get si es que usamos este parametro de fetch
        'Content-type': 'aplication/json' //este es el encabezado que se le va aponer a la solicitud, Content-type en especifico es el mas usado lo que hace es que le dice a la solicitud HTTP que los datos manejados son de tipo JSON, solo le dice, NO es que los convierta ej JSON. Hay muchos mas headers pero en este caso solo usaremos este.
    },
    body: JSON.stringify({//el body solo va cuando quieres mandar un dato a la API si fuese de metodo get no seria necesario poner body.... aca lo que hacemos es convertir en JSON el objeto javascript que estamos mandando esto lo hacemos para que la API o archivo JSON recivan correctamente los datos 
        name: 'messi',// y bueno dentro ponemos los datos que vamos a mandar a la API
        age: 35
    })
})

//por defecto esa estructura que usamos no es requerida mucho ya que comunmente solo se usa el GET pero y bueno si es GET no es necesario poner tanta estructura... para aterrizar mejor lo visto anterior de la estructura fecth chequea este video: https://www.youtube.com/watch?v=aKPcs-EIzZI&ab_channel=LeonidasEsteban

/*
    REACAPITULACION AND EXTRA DATA

    - recuerda la forma de la estructura es para hacer POST, PUT y creo que DELETE oeri si es GET no es necesaria en lo absoluto
    - la url que le pasamos a fetch no necesariamente siempre va a ser una API puede ser nu archivo json que tengas en tu local host como ./localSotrage.js 
    - los metodo que puedes usar en method: son varios pero lo mas comunes son: GET,POST,PUT,DELETE
    - el metodo que JSON.stringify y otros mas los veremos mejor en el modulo de JSON que justo es el que sigue :)
    -json() lo que hace es que se utiliza para extraer los datos de una respuesta en formato JSON a su vez tmb hace un parse por defecto asi que ya no seria necesario hacer el metodo JSON.parse() hay funciones distintas aparte de .json() que hacen otras cosas pero esas depende de que archivo es con es que estas interactuando por ejemplo si le hago fetch a una imagen no usraia .json() ya que la imagen no es uin archivo json si no usaria este metodo .blob() para extrar los datos de la imagen pero estos metodos extra no son muy usados.
*/



