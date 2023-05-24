//FUNCIONES 2 
/*
    Aca veremos mas cosas y a nivel mas profund sobre funciones
*/
////////////////////////////////////////////////////////////////////////////////
//RECURSIVIDAD
//la funcion se llama asi misma por un numero indefinido de veces (no se usa en el dia a dia) ya que sobrecarga la memoria del proyecto mas que todo lo usan los tryhards

function pow(x,n){
    if (n==1){
        
    }
    return x
}

////////////////////////////////////////////
//REST PARAMS AND SPREAD SINTAX

/*
    esto es para agarrar varios parametros y los convierte en un arr osea hace como que espera un arr pero en ningun momento se le pasa un array como argumento ejm 
*/

function suma(...rest){
    let sum = 0
    for(let element of rest) sum+=element
    return sum
}

suma(1,2,3,4,54,56,6,7,7,)
/*
    otras cosas de rest ... nunca debe estar en el medio siempre al final y tmn podriamos poner (a,b,...rest) y encapsula en un array el resto de elementos menos el primero y el segundo
*/

///////////////////////////////////////////////
//VARIABLE SCOPE
/*
    se refiere al scope de vaibles declaradas osea que si declaras una variable llamada jugar dentro del scope de una funcion solo aplica dentro de esa funcion pero si la creas afuera(en el scope global) no pasa nada ni genera errores
*/
////////////////////////////////////////////////

//SET TIMEOUT AND SET INTERVAL

/*
    set timeout: acepta 2 parametros el primero la funcion que vamos a pasar por parametro y el tiempo que se va a demorar en ejecutar la funcion en miliseguindos ejm: 
*/
function hola(){
    console.log('hola')
}
setTimeout(hola, 1000)

//si la funcion tiene parametros seria asi: (hola, 1000, (nombre,apellido)) primero se pasa el nombre de la funcion luego el tiempo y luego los argumetos

//la funcion setTimeout retorna un timeID

let timeid = setTimeout(hola, 1000);

console.log(timeid) // output: 2 //el numero puede ser cualquiera no es algo fijo 

//para reestablecer el valor de timeid tenemos que usar la funcion

clearTimeout(timeid)

/*
    setInterval: aepta los mismoa parametros que setTimeout pero lo que hace es llamar la funcion cada sierto tiempo en miliseguindos ejm  
*/

let interval = setInterval(hola, 3000)//esto va a jecutar la funcion hola cada 3 segundos infinatamente hasta que usemos una funcion:

clearInterval(interval)

//a set interval tmb se le puede pasar como argumento envez del nombre de una funcion ya creada, una arrow function ejm:

setInterval(()=>{
    console.log('hola')
}, 4000)


