//LOCAL STORAGE
/*
    Es un lugfar donde nosotros podemos guardar inforamcion antes de que existiera esto usabamos las cookies de JS pero ahora esto mas practico y que podemos guardar mayor cantidad de informcacion y es sumamente facil de grabar y leer, veamos como funciona esto:
*/

function guardarEnLocalStorage(){//creamos esta funcion llamada guardar en local storage
    let nombre = 'juan' // creamos esto por fines didacticos

    //ahora como usamos el local storage? supongamos que esta info ustedes la quieren almacenar para que cuando el usuario vuelva ya tenga todo eso cargado previamente o ustedes lo puedan volver a utilizar. asi que usamos lo siguente:

    localStorage.setItem('nombre',nombre)// De parametros pasamos primero un identificador que va a hacer referencia a lo que querramos guardar en el local storage y de segundo parametro ponemos eso que queremos guardar y que va a ser referenciado por el identificador que en este caso es la variable nombre 
}

guardarEnLocalStorage()//llamamos la funcion y nuestra variable ya esta en el local storage :D podemos verla con sus datos, asi aparecera en el local storage: nombre | juan

//Veamos algo importante creemos otra funcion pero ahora vamos a guardar algo mas complejo en el localstorage

function saveLocalStorage(){
    let person = { //vamos a crear dentro un objeto
        name: 'Fernando',
        age: 31,
        correo: 'fer@gmail.com',
        coords:{
            lat:10,
            long: -10
        }
    }
    localStorage.setItem('persona', person)//y con esto lo guardamos igual en el local storage :D PERO una cosa asi se va a ver el el localS: persona | [object Object] , muchos dirian a bueno pues se grabo bien prq lo que estoy guardando es un objeto PERO la unica condicion qeu ustedes tienen que tener en el local storage es que solo almacena strings asi que haciendolo asi ustedes literal van a obtener [object Object] y no van a poder trabajar con ese objeto, Asi que ustedes diran "vaya entonces el localStroga es inutil" Pero hay una manera de que podamos grabar ese objeto y es asi 

    localStorage.setItem('person', JSON.stringify(person)) //para grabaer el objeto debemos usar la funcion de JSON stringify() y con esto el [object Object] se convierte en string con formato JSON, mostrando todos los datos del objeto, y esa el la forma en la que puedes trabajar objetos grandes con local storage, vista del localS: person | {name: "Fernando", age: 31, correo: "fer@gmail.com", coords: {lat: 10, long: -10}}
}
saveLocalStorage()

// Listo! pero ahora como obtenemos la informacion del local storage pues pogamos otro ejemplo

function obtenerLocalStorage(){ //creamos otra funcion xd

    let nombre = localStorage.getItem('nombre') //con esta funcion del local storage traemos el elemento que querramos y tengamos guardado del localS, de parametro ponemos la llave/identificador con el que guardamos el elemento en el localS.

    let persona = localStorage.getItem('person')//ahora obtendremos el obejto al hacer solo esto obtenemos el JSON que guardamos en el local storage pero recuerda que un JSON no es lo mismo que un objeto por lo tanto no se puede trabajar directamente en JS asi que tenemos que, como vimos anteriormente en e modulo de JSON, parsearlo con el metodo parse  de JSON, asi:
    let personaParseada = JSON.parse(persona)

    console.log(nombre) // mostrara 'juan' en la consola
    console.log(personaParseada) // y ahora si tenemos el objeto metido dentro de nestra variable personaParseada y no un string JSON :D

}
obtenerLocalStorage()

//siempre es bueno hacer una clausula (un if) para verificar si existe eso(el valor que vamos a obtener)prq si nosotros tratamos de jalar u item que no existe en el localS va a regresar null y seria bueno tener eso controlado ejm:

function obtainLS(){ 
    if( localStorage.getItem('nombre')){
        //se que existe nombre en el localS
        let nombre = localStorage.getItem('nombre')
        let persona = localStorage.getItem('person')
        let personaParseada = JSON.parse(persona)
    
        console.log(nombre)
        console.log(personaParseada)
    }else{
        console.log('nombre no existe en el LocalStorage')
    }

}

obtainLS()
// y con eso tendriamos todo lo que hay que saber del localStorage ... mira este video por si tienes dudas: https://www.youtube.com/watch?v=hb8O0qRqiSk&t=6s&ab_channel=FernandoH  o tmb mira este si quieres: https://www.youtube.com/watch?v=ZlpA2hez92Y&ab_channel=UskoKruM2010


/*
    Recapt and Extra Data
    
    -El local storage no se ve aca en la consola de JS ya que es un metodo del navegador por ene solo se puede ver en las chromeDevTools osea en la consola del navegador haces click a las >> que estan a lado de sourses que esta alado de console y ya vas a ver la opcion para mirar el local storage
    - hay otros metodos y formas de usar metodos anteriores ejm:

        . Para nosotros mandar un elemento al local storage ponemos localStorage.setItem('<identificador>',<lo que vamos a mandar>) pero tmb podemos mandarlo asi:
        localStorage.<identificador> = '<lo que vamos a mandar>'
        . Tenemos tmb un metodo para eliminar un elemnto del localStorage que es:
        localStorage.removeItem('<identificador de lo que vamos a borrar>')
        . tmb tenemos otro metodo pero este es para limpiar el local storage osea eliminar todos los datos de nuestro localS y asi tenerlo limpio y es:
        localStorage.clear()
*/
