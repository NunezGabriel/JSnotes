//MAS CONCEPTOS SOBRE FUNCIONES!!   

////////////////////////////////////////////////

/*
    EL CURRYNG:
    es una técnica en programación funcional que consiste en convertir una función que toma varios argumentos en una secuencia de funciones más pequeñas, cada una de las cuales toma un solo argumento.

    El objetivo principal del currying es permitirte crear funciones más especializadas y reutilizables. A través del currying, puedes crear nuevas funciones a partir de una función existente al proporcionar solo algunos de los argumentos esperados. Estas nuevas funciones pueden ser utilizadas más adelante con los argumentos restantes o con otros argumentos adicionales.

    Aquí hay un ejemplo sencillo para ilustrar cómo funciona el currying:
*/

function sum(a) {
    return function(b) {
      return a + b;
    }
  }
  
  const addTwo = sum(2); // Creamos una nueva función a partir de 'sum' con el argumento 'a' igual a 2
  console.log(addTwo(3)); // Resultado: 5 (2 + 3)

// otro ejm

function multiply(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      }
    }
  }
  
  const result = multiply(3)(2)(4);
  console.log(result); // Resultado: 24 (3 * 2 * 4)

////////////////////////////////////////////////

/*
  HIGH ORDER FUNCTIONS
  Estas son funciones que retornan otras funciones como vimos con el ejemplo de los worksops de la funcion DOM Handler
*/

function DOMHandler(parentSelector) {
    let parent = document.querySelector(parentSelector);//trae un elemento dependiendo el selctor que le pasemos a la funcion DOMHandler
  
    if (!parent) throw new Error("Parent not found");//lanza un error si no se encuentraa el selector
  
    return { 
      load(module) { // retorna la funcion load
        parent.innerHTML = module;//esta fucion lo que hace es meter un contenido html al selector pasado por argumento de la funcion DOMHandler

      },
    };
}
//Asi seria el llamado a la funcion

const container = DOMHandler(".container")
let content = 
`
    <h1>hola</h1>
    <p>este es un</p>
    <p>texto</p>
`
container.load(content)

////////////////////////////////////////////////

/*
    IIFE FUNCTIONS

    IIFE (Immediately Invoked Function Expression) es una expresión de función que se invoca inmediatamente después de su declaración. Es una forma de encapsular el código dentro de un ámbito local para evitar la contaminación del ámbito global y mantener la privacidad de las variables.

    La sintaxis básica de una IIFE es la siguiente:
*/

(function() {
    // Código aquí
  })();
 
/*
  En este caso, se define una función anónima y se la invoca inmediatamente mediante los paréntesis finales () al final de la declaración de la función. Al envolver la función entre paréntesis, se convierte en una expresión y luego se invoca.

    Una IIFE es útil cuando se desea ejecutar un bloque de código de forma inmediata sin necesidad de llamar a la función explícitamente en otro lugar. Además, la IIFE crea un ámbito local para el código dentro de ella, lo que ayuda a evitar colisiones de nombres de variables con otros scripts y mantiene el código más limpio.

    Aquí tienes un ejemplo que ilustra cómo se utiliza una IIFE:
*/

(function() {
    let message = "Hola desde una IIFE";
    console.log(message);
  })();
  
/*
    En este ejemplo, se declara una IIFE que muestra el mensaje "Hola desde una IIFE" en la consola. La variable message está definida dentro de la IIFE y no está accesible fuera de ella, lo que evita la contaminación del ámbito global.

    Las IIFE también se pueden utilizar para crear módulos en JavaScript, al permitir la encapsulación de variables y funciones dentro del ámbito de la IIFE y exponer solo las partes necesarias a través de un objeto de retorno.

    Es importante destacar que con la introducción de los módulos en JavaScript (ES6 y versiones posteriores), el uso de IIFE para encapsulamiento y modularidad ha disminuido. Sin embargo, aún puedes encontrarte con código que utiliza IIFE en proyectos más antiguos o en contextos específicos donde se requiere este enfoque.

    Espero que esta explicación aclare tus dudas sobre las IIFE (Immediately Invoked Function Expressions).
*/