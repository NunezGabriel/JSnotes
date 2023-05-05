//BUCLE FOR EN JS

/////////////////////////////////////////////////////

/*
    el for es exactamente igual que el while PERO
    el for es un bucle determinado ejm el while no le 
    ponemos cuantas vueltas van a dar por eso while
    es indeterminado pero al for si le decimos y se 
    va a ejecutar las veces que nosostros les digamos

    el for se compone de 3 partes:
    1. declaramos e inicializamos las variables
    2. planteamos la condicion
    3. iteramos(aumento o decremento)

    como es eso? pues asi en la sintaxis

    for(let i = 0; i<6; i++){
        console.log(i)
    }

    DATO: ese "i" solo existe dentro del bucle si nosotros afuera declaramos otra "i"
    no dara ningun problema incluso si creamos otro bucle for que use "i" tmpoco nos 
    dara error    
*/

/////////////////////////////////////////////////////

// * FOR *

let estudiantes = ['royer','mario','jose','diego']

function saludarEstudiantes(estudiante){
    console.log(`hola ${estudiante}`)
}

for(let i = 0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

////////////////////////////////////////////////////////

// * FOR IN *

/*
    for in mayormente se usa para arrays ya que la traduccion
    literal de este es por-en- .. a diferencia del for que ponemos 
    i = 0 .. etc aca nos lo ahorra como? 
*/
let animales = ['perro', 'gato', 'iguana', 'zebra']

for(let animal in animales){
    console.log(animal) 
}
// lo que haccemos con el for in es por cada animal en animales nos imprima animal
// siendo animal una variable creada en for PERO no nos imprime el animal como tal
// si no el indice que ocupa ese animal osea el output de este for seria
// 0 1 2 3
////////////////////////////////////////////////////////

// * FORMA FOR OF * 

/* 
    tmb se usa mas en arrays
    el for of es lo mismo que el for in PERO en vez de retornarnos el indice del animal
    nos retorna el animal en si ejm:
*/

for(let animal of animales){
    console.log(animal)
} // output: perro gato iguana zebra