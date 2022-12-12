let estudiantes = [ 'monica', 'gerald', 'bruno', 'poul']

function saludarEstudiantes(estudiante){
    console.log(` Hola, ${estudiante}`)
}

let contador = 0;

while(contador < estudiantes.length ){
    saludarEstudiantes(estudiantes[contador])
    contador++
}

// OTRO EJEMPLO

let frutas = ['manzana', 'platano', 'pera', 'naranaja', 'fresa']

function mostrarFruta(fruta){
    console.log(` Frutas restantes: ${fruta}`)
}

function quitarFruta(){
    while(frutas.length > 0){
        let quitar = frutas.shift()
        mostrarFruta(frutas)
    }
}

quitarFruta();