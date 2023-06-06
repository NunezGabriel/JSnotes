//HANDLE ERRORS
/*
    Aca veremos como atrapar/obtener excepciones(problemas o errores de nuestra aplicacion) en JS usando las keywords try y catch, asi podremos evitar que toda nuestra aplicacion se rompa si se detecta alguna excepcion
*/

//Ejm

const holaMundo =()=>{
    const result = 'hola mundo'
    return result
}

console.log(holaMundo())

//ahi arriba tenemos la funcion holaMundo que como se ve funciona tod super bien, hagamos un cambio ... vamos a hacer que nuestra funcion tire una excepcion poniendo una funcion no definida

const holamundo =()=>{
    const result = 'hola mundo'
    procesarMsg()
    return result
}

console.log(holamundo())

//aca al imprimir nuestra funcion nos dara una excepcion hay diferentes tipos de exepciones dependiedno del problema que tenga nuestro codigo la primera que vamos a ver es ReferenceError: esta hace referencia a cuando mandamos a llamar a un elemnto que no existe...vamos a resolverlo para que nuestra aplicacion no se rompa asi que usaremos try y catch:
const hola_mundo =()=>{
    const result = 'hola mundo'
    try {
        procesarMsg() //aca con try lo que hacemos es detectar el error
    } catch (error) { // y catch atrapa ese error en su parametro llamado 'error'
    }
    return result
}
//todo eso hace que la funcion no crashee y la aplicacion se muestre como tal
console.log(hola_mundo())

//////////////////////////////////////////////////////////////

//podemos usar la keyword instanceof para saber que error es el que se lanza y que hacer si es ese ejm
/*
    try{
        posfunction() //no existe
    }catch(error){
        if(error instanceof SyntaxError){console.log('es un error de sintaxis')}
        else{console.log('es otro error :(')}
    }
*/

//podemos lanzar una excepcion/error custom usando la keyword throw ejm

// Ejemplo de lanzamiento de una excepción personalizada
function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }
  
  try {
    const resultado = dividir(10, 0);
    console.log(resultado);
  } catch (error) {
    console.log(error.message); // Muestra el mensaje de error personalizado
  }
  
//////////////////////////////////////////////////////////////

//Recapt and extra data
/*
    - El tema como tal de try y catch no se trata de poner todo tu codigo en su extructura solamente debemos usarlo en ecenarios donde creamos que se puedea generar una excepcion si tu codigo no maneja datos o objetos que tengan propiedades dinamicas ps probablemente no lo vas a necesitar

    - Try y catch fucniona como un switch con la diferencia que si o si todos los casos se van a ejecutar osea primero se ejecuta el try para detectar el error luego el catch para atrapar el error y al final el finally si se desea

    - Hablando de finally que es eso te preguntaras pues es un paso extra de la estructura que es opcional de poner y ahi dentro puedes poner lo que quieras que pase depues de que se ejcute try y catch ya que como dijimos igual se va a ejcutar ejm:

        try {
           //detecte el error
        } catch (error) {
           //atrape el error
        }finally{
           //consol.log('eres el mejor :)')
        }
    
    - El ejemplo donde mas se encuentran execpciones y donde es mas comun usar try y catch es cuando se realizan peticiones http ahi veremos mas util try y cath, tmb veremos que try y cath - http request - Asyncronic programming .... van MUCHO de la mano pero ntp veremos http request y A. programming mas adelante a mas detalle

    -hablado de nuevo con lo comun de errores en http request ese error comun seria que no estas seguro que del backend|API|Database te regrese un archivo.json o otro tipo de archivo asi que te al no estar seguro que tipo de archivo es pues puedes usar el try y catch para atrapar el error, este error seria un SyntaxError 
*/

/*
    TIPOS DE EXCEPCIONES/ERRORES MAS COMUNES

    - Error de referencia (ReferenceError): Ocurre cuando intentas acceder a una variable que no está definida o a una función que no existe.

    - Error de tipo (TypeError): Sucede cuando se intenta realizar una operación en un tipo de dato incorrecto. Por ejemplo, tratar de llamar a una función en un objeto que no es una función.

    - Error de sintaxis (SyntaxError): Ocurre cuando el código no sigue las reglas gramaticales de JavaScript. Puede ser causado por una declaración mal escrita, un paréntesis sin cerrar, un punto y coma faltante, etc.

    - Error de rango (RangeError): Sucede cuando se pasa un argumento a una función que está fuera del rango válido. Por ejemplo, utilizar un índice negativo en un array.

    - Error de tiempo de ejecución (RuntimeError): Se produce cuando ocurre un error durante la ejecución del código. Esto puede ser causado por diversas situaciones, como división por cero, acceso a propiedades inexistentes en un objeto, entre otros.

    - Error de evaluación (EvalError): Este error se lanza cuando ocurre un error durante la evaluación de una función eval().

    - Error de URI (URIError): Ocurre cuando se produce un error al codificar o decodificar componentes URI con los métodos encodeURI(), encodeURIComponent(), decodeURI() o decodeURIComponent().

*/