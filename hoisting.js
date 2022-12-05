//el hoisting solo sucede con con versiones antiguas de js usando la keyword var si usas let o const no saldra undefined saldra ERROR

console.log(nombre)
var nombre = "Andres"
// output: undefined

//Lo que JavaScript está haciendo sería lo siguiente:
// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"