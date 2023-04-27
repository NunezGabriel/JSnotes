//BUCLE WHILE EN JS

///////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////

/*
Control de variables con el bucle while

Otro ejemplo, tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18 (y mayor que 0 porque no existe edades negativas). **Entonces utilizamos `while` debido a que no conocemos cuántas veces se equivocará el usuario.

Ejm: Al cambiar la variable `edad` evitamos el ciclo infinito.
*/

let edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")