//SCOPE EN JS

//////////////////////////////////////////////////////////////////////////

/* 🔴 Es el alcance que tiene una varible!

Al momento de que nosotros hacemos un programa podemos declarar varibles en lo global a eso se le llama scope global y al momento de digamos declarar varibles en una funcion que esta en lo global a eso le llamamos scope local no podemos  acceder a una varible local desde el scope global nos soltaria error pero al acceder a una varible global desde el scope local NO nos da error se ejecuta normal, vamos al codigo para entenderlo mejor
*/

//////////////////////////////////////////////////////////////////////////

//Ejemplo llamando a una varible global desde el scope local 

// el scope global es tooooodo esto donde escribimos codigo aca podemos declarar variables globales como esta:
let nombree = 'Gabriel'

function user(){ // todo lo que esta dentro de esta funcion pertenece a scope local 
    apellidoo = 'Nuñez Arenas'
    console.log( nombree +' '+ apellido0)
}
user()
//output: Gabriel Nuñez Arenas✅

///////////////////////////////////////////////////////////////////////////
//Ejemplo llamando a una variable local desde el scope global 
let nombre = 'Gabriel'

function user(){ 
    apellido = 'Nuñez Arenas'
}

console.log( nombre +' '+ apellido)

//output: ReferenceError: apellido is not defined ⛔
