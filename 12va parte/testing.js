// JS TESTING -> tema importante 😎
/*
    es una práctica fundamental para garantizar la calidad y fiabilidad de las aplicaciones y sitios web desarrollados con este lenguaje. algunas razones importantes para hacer testing son: Deteccion de errores y fallos, garantia de calidad, matenimiento y refactorizacion, mejora de la productividad, facilita la colaboracion.

    las pruebas/test de js funcionan a nivel de servidor de node osea en consola local pero esto es un poco contradictorio no? prq si hacemos frontend que es el principal accion de js como haria pruebas de frontend? ya que en la pag tenemos botones, formularios, etc. y esos elementos no los podemos manejar en consola local ya que esos elementos tienen funciones del navegador y mas cosas, pues eso es un prblema PERO para eso tenemos una herramienta que nos ayuda pero primero vemaos testing a nivel normal 

    las pruebas/tests se deben ejecutar en un servidor local osea en consola de node prq si mandamos las pruebas a que corran en el navegador pues no tiene sentido, estariamos mandando los test de nuesto codigo a los usuarios de la aplicacion web y no tiene logica que ellos vean eso hasta podria ser peligroso, por eso lo corremos en local
*/
////////////////////////////////////////////////////////////////////

// Primero veamos la logica del testing con tests hechos solo en JS, estos tests son simples

function sum(a,b){// creamos la funcion suma
    return a+b;
}

function rest(a,b){// creamos la funcion resta 
    return a-b;
}

// test sum
//📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
// let actual = sum(3,5) // aca ponemos el valor acutual (esto es dinamico pero nosotros los harcodeamos para fines dinamicos)

// let expected = 7 // este si es estatico y aca determinamos el valor esperado 

// if(actual!==expected){ //ponemos la condicion que se va a testear que es si actual no es igual al valor esperado lanzamos un error que nos indique el valor esperado
//     throw new Error(
//         `Err in sum, expected: ${expected} recived actual: ${actual}`
//     )
// }
//📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌

// Ahora nosotros tenemos una extencion de VScode que ejecuta el codigo qu escribimos haciendo click en la flechita de arriba ... Pero a nivel practico y sin intalar plugins debemos posicionarnos en consola en la ruta donde se encuente el archivo y poner node <nombre del archivo> y asi lo correremos, en este caso el resuiltado seria: Err in sum, expected: 7 recived actual: 8

// test rest
// Ahora veamos el test de rest

//📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
// actual = rest(3,5) // redefinimos el valor de actual    

// expected = 4// redefinimos el valor de expected

// if(actual!==expected){ // creamos otra condicional que va a duncionar como nuestro test igual que arriba

//     throw new Error(
//         `Err in rest, expected: ${expected} recived actual: ${actual}`
//     )
// }
//📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
// corremos la applicacion de nuevo ... por logica deberia ejecutarse el test de arriba y luego el de abajo PERO nosotros al lanzar un error hacemos que la aplicacion se detenga y no llega a nuestra segunda validacion solo llega al primer throw new Error asi que para resolver eso y se muestren todos los resultados de nuestros tests usamos los ya conocidos try y catch pero antes vamos a refatorizar nuestro codigo de arriba (exepto las funciones sum y rest prq las vamos a usar) y armarlo usando higOrderFunctions para que se vea mas "profecional" y tmb a larga sea mas dinamico Ejm:


function expect(actual){ // creamos nuestra highOrderFunction 
    return{//creamos tmb los metodos que retorna nuestra fucncion
        equalTo(expected){ 
            if(actual!==expected){ //aca va a validar si el valor actual no es igual al esperado
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        greaterThan(expected){// aca va a validar si el valor actual no es maayor al esperado
            if(actual<=expected){
                throw new Error(`${actual} is not greater than ${expected}`)
            }
        }

    }
}
// una ves creada nuesta HOF tenemos un pequeño diccionario de validaciones ahora solo quedaria llamarla para hacer el test 

//📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
// expect(sum(4,5)).equalTo(8)//aca llamaos la funcion y le pasamos de parametro la funcion sum con sus valores y a ese resultado le pasamos la funcion equalTo y esto es un test de si 4+5 es igual a 8 si es verdadero no muestra el mensaje de error, si es falso muestra el mensaje de error
// expect(rest(6,3)).greaterThan(2)//lo mismo aca pero con rest y con greater than
//📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌

// Ya esta refactorizada y funcional pero pasa lo mismo que la forma de arriba aun solo se muestra el primer error y no el siguiente asi que como dijimos debemos usar un try-catch ... podriamos meter cada una de las funciones dentro de un trycatch para cada una y funcionaria, asi:
/* 
 try {
     expect(sumar(4,5)).equalTo(8)
 } catch (error) {
     console.log(error)
 }

 try {
     expect(restar(6,3)).greaterThan(2)
 } catch (error) {
     console.log(error)
 }
*/

//PERO de esa manera ocupamos mucho codigo asi que podemos refactorizarlo asi:

function test(title, callback){ // aca creamos la funcion test que va a recibir 2 parametros uno va a recibir un titulo para la accion y el otro la funcion que en este caso seria expect
    try {
        callback() //aca atrapamos la funcion como callback
        console.log(`PASS: ${title}`)// y si pasa con exito muestra este msge
    } catch (error) {
        console.error(`FAIL: ${title}`) // si ocurre un error muestra este msge
        console.log(error) // e imprime el error
    }
}
//ahora llamamos la funcion osea nuestros tests
test('suma de 2 numeros',()=>{ // pasamos los 2 parametros antes vistos pero te preguntaras prq no solo paso la funcion expect como parametro en vez de pasar una arrow function y dentro recien pasar expect ... pues si lo hacemos asi no funciona ya que arriba le indicamos que debe ser callback() osea pasamos una funcion y con esto de expect pasamos la funcion y a esa funcion le hacemos un .equalTo asi que si lo hacemos como mencione no agarra el .equalTo y no sale el resultado esperado
    expect(sum(3,4)).equalTo(8)
})
test('resta de 2 numeros', ()=>{ // lo mismo aca con resta
    expect(rest(5,4)).greaterThan(9)
})

// el output es:
/*
    FAIL: suma de 2 numeros
    Error: 7 is not equal to 8

    FAIL: resta de 2 numeros
    Error: 1 is not greater than 9
*/

//////////////////////////////////////////////////

/*
    RECAPT AND MORE DATA 🔴🔴

    - El tema de testing a nivel laboral es muuuuy importante osea lo de contruir codigo a base de tests es bien valorado en las empresas
    
    - La ultima funcion que creamos osea test usa la funcion expect y la funcion sum y rest ese flujo seria el resultado final de tooooodo lo que vimos en este modulo osea que esa es la manera mas good de trabajar con testing para ese caso, el flujo resumido seria asi:
        . primero creamos las funciones sum y rest las cuales van a ser evaluadas dependiendo sus valores asociados a unas condiciones ahi entra la fuincion expect que va a validar las condiciones si se cumplen no muestra nada pero si no se cumplen va a enviar un mensaje de error que lo va atrapar la funcion test con el trycatch depaso de atraparlo ya es el ultimo paso osea test ejecuta los test y muestra los mensajes adecuados asi funciona este flujo y es muy replicable y se puede agregar mas coasas y dificultarlo mass como que valide si es un objeto, mas resultados, etc
    
    - siguiendo lo ultimo mencionado osea eso de que valide si es objeto, etc. seria hacer muuuuuuuchos test y agregar varias lineas de codigo y tmb pensar mucho en que se va validar no es tan complejo de hacer pero para que complicarnos la cabeza  para eso podemos usar un framework que aparte nos ayuda hacer test para el frontend como comentamos arriba esta es la herramienta que nos va a ayudar con los tests, es la mas popular para testing en JS y su nombre es: ⭐️JEST⭐️ -> vamos a ver como usar JEST en el sigueinte modulo ya que es extenso

    - Con todo lo que vimos en el archivo ya sabes como hacer testing a nivel de JS puro osea que al momento de hacer una entrevista puedes hacer testing de esta maner .. lo que vamos a ver de JEST ya es a nivel laboral osea cuando estes trabajando pero para ejercicios de entrevista e impresionar al reclutador sobra con que hagas testing solo de esta manera.

    - DATO IMPORTANTE DEL ARCHIVO: los bloques de codigo que estan dentro de las filas de "📌" puedes descomentarlos para probarlos ... estan comentados prq malogran el flujo de las ultimas funciones ya que lanzan errores con throw y paran el programa ... lo que no esta descomentado son las funciones que dijimos que ya son el flujo correcto y goooood de testing...solo 3 bloques de codigo estan comentados con el  "📌" 
*/