let estudiantes = ['royer','mario','jose','diego']

function saludarEstudiantes(estudiante){
    console.log(`hola ${estudiante}`)
}

for(let i = 0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

// FORMA FOR ... OF 

let frutas = ['manzana', 'pera', 'papaya', 'fresa']

function comprarFruta(fruta){
    console.log(`hola ${fruta}`)
 }

for(let fruta of frutas){ 
    comprarFruta(fruta)
} /* para demostrar que tmb se puede hacer con el for of estamos redefiniendo la variable de la 
 pero no es recoimendable hacerlo asi para eso mejor usa el for normal reucerda que el for of es mas que todo para recorer 
 un array como el .foreach*/