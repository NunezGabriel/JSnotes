//FUNCIONES EN JS

/////////////////////////////////////////////////////////////////////////////////////
/*
Las **funciones** son bloques de código osea un conjunto de sentencias que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.
Ambas pueden llevar parámetros. Cada parámetro va separado por una coma. Si queremos que una función nos dé un numero o dato tenemos que usar la keyword <return>: 
*/
/////////////////////////////////////////////////////////////////////////////////////

//Declarativas
function miFuncion(a,b){
    return a+b
}
//Llamado de funcion e impresion en consola 
console.log(miFuncion(3,9999))//10002
//El 3,99999 que ponemos al llamr la funcion  recibe el nombre de argumento

/////////////////////////////////////////////////////////////////////////////////////

//Expresiva
let mmiFuncion = function(c,d){
    return c+d
}

//Este tipo de funcion se llama igual que las Declarativas

/////////////////////////////////////////////////////////////////////////////////////
//* RETURN *

/*
    El return es lo que una funcion o un bloque va a retornar/devolver un valor .. a diferencia de 
    rubyu aca no te retorna la ultima linea si no usas return aca si o si debes usar return
    para devolver un valor 
*/
/////////////////////////////////////////////////////////////////////////////////////

//🔴 * ARROW FUNCTIONS *

/*
    esto que vemos abajo es una funcion flecha en vez de usar el function creamos
    una variable que va a tener el nombre y ponemos ()=> de ahi su nombre arrow function
    Osea el "function" se convierte en una flechita y se pone despues 
*/
const saludar = (nombre)=>{
    console.log(`hola ${nombre}`)
}
/*
    Esta es la 3ra formma de crear funcione y funciona exactamente igual y de hecho 
    esta es la mejor forma de crearlas ya que tiene veneficios como:

    . si solo estamos usando un parametro NO hace falta ponerle "()"
        const saludar = nombre =>{
            console.log(`hola ${nombre}`)
        }

    . si solo tenemos una exprecion podemos simplificarlo en una linea osea no es necesario usar "{}"
        const saludar = nombre => console.log(`hola ${nombre}`)
       aparte tmb aca la expresion se retorna automaticamente no tenemos que usar return...como ruby
    
    . Tiene mas veneficios PERO eso lo veremos en un apartado PROPIO de arrow functions mas adelante 
*/

////////////////////////////////////////////////////////////////////////////////

//MORE INFO

/*
    Plantillas literales
    También puedes utilizar las plantillas literales, una nueva característica del lenguaje para utilizar las variables dentro de texto `${variable}` entre las tildes invertidas ( `` ) esto tmb mas adelante sirve para conectar a bases de datos y automatizar tareas,
    console.log ( ` Hola ${nombre} ` )
*/

/*
    En Js se usa el camellCase para definir funciones osea minusculaMayusculaMayuscula
*/

