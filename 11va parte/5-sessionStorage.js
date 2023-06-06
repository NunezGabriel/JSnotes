//SESION STORAGE
/*
    Aca veremos y aprenderemos sobre esl session storage que en parte es muuuy similiar al local storage pero tiene una pequeña diferencia la cual veremos aqui:
*/
/////////////////////////////////////////////////////////////

/*
    La principal diferencia entre sessionStorage y localStorage en JavaScript es la duración de almacenamiento de los datos.

        sessionStorage: Es un objeto del navegador que permite almacenar datos de forma temporal durante la sesión del usuario. Los datos almacenados en sessionStorage están disponibles mientras la pestaña o ventana del navegador esté abierta y se mantienen incluso al recargar la página. Sin embargo, cuando se cierra la pestaña o ventana del navegador, los datos almacenados en sessionStorage se eliminan y ya no están disponibles.

        localStorage: Es otro objeto del navegador que permite almacenar datos de forma persistente en el dispositivo del usuario. Los datos almacenados en localStorage permanecen disponibles incluso después de cerrar y volver a abrir el navegador, reiniciar la computadora o realizar otras acciones. Los datos almacenados en localStorage no tienen una fecha de vencimiento y se mantienen hasta que se eliminan explícitamente o se borran mediante programación.

    En resumen, sessionStorage es adecuado para almacenar datos temporales que deben estar disponibles durante la sesión del usuario, pero no necesitan persistir más allá de eso. Por otro lado, localStorage es útil para almacenar datos que deben persistir y estar disponibles incluso en sesiones futuras del usuario.

    Ambos mecanismos de almacenamiento (sessionStorage y localStorage) proporcionan una interfaz similar para almacenar y acceder a los datos utilizando pares clave-valor, a través de los métodos setItem(), getItem(), removeItem(), etc. PERO el metodo qeu vimos antes osea el localStorage.clear() no se puede usar en session storage y si lo piensas tiene sentido que no se pueda usar ya que al cerrar la pagina ps se va a borrar todo igual 

*/

//EJEMPLO CON LAS MISMAS FUCIONES DE LOCALSTORAGE

function saveSessionStorage(){
    let person = {
        name: 'Fernando',
        age: 31,
        correo: 'fer@gmail.com',
        coords:{
            lat:10,
            long: -10
        }
    }
    sessionStorage.setItem('person',JSON.stringify(person))
}

saveSessionStorage()

function getSessionStorage(){
    let persona = sessionStorage.getItem('person')
    let personaParseada = JSON.parse(persona)
    console.log(personaParseada)
}
getSessionStorage()

//y como ves los metodos son los mismos que local storage la diferencia unica de estos dos es que local storage se queda siempre en la data de tu navegador pero session storage se borra una vez se haya cerrado/actualizado la pagina de la aplicacion web
