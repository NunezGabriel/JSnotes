//HOISTING
////////////////////////////////////////////

//el hoisting solo sucede con con versiones antiguas de js( antes de ECMAscript6 )usando la keyword var si usas let o const nos saldra undefined saldra ERROR

console.log(nombre)
var nombre = "Andres"
// output: undefined

//Lo que JavaScript está haciendo sería lo siguiente:
// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"

console.log(name) // como dijimos antes esto sucedia mucho en old versions ya que solo aplica para el "var"
let name = "juan" // pero como aca/ahora se usa let y const el hoisting no aplica y envez de retornar
                  // "undefined" nos retorna un error 