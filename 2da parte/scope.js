//Ejemplo llamando a una varible global desde el scope local 

// el scope global es tooooodo esto donde escribimos codigo aca podemos declarar variables globales como esta:
let nombree = 'Gabriel'

function user(){ // todo lo que esta dentro de esta funcion pertenece a scope local 
    apellidoo = 'Nuñez Arenas'
    console.log( nombree +' '+ apellido0)
}
user()
//output: Gabriel Nuñez Arenas✅

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejemplo llamando a una variable local desde el scope global 
let nombre = 'Gabriel'

function user(){ 
    apellido = 'Nuñez Arenas'
}

console.log( nombre +' '+ apellido)

//output: ReferenceError: apellido is not defined ⛔
