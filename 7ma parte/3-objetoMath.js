//OBJETO MATH
/*
    Metodos y propiedades matematicos propias de js que se pueden usar, nos ayuda bastante a 
    resolver problemas y tmb son super usados asi que vamos con ello
    
    IMPORTANTE: aca no veremos todos los metodos ya que osn VARIOS pero
    si quieres verlos y es mejor que estas notas lee en la documentacion
    link aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
////////////////////////////////
// METODOS
let number = 25;

Math.sqrt(number) // devuelve la reaiz cuadrada positiva 
Math.cbrt(number)// devuelve la reaiz cubica positiva 
Math.max(12,3,4,45,32)//devuelve el numero mas grande(trabaja extrictamente con numero->no recive arrays)
Math.min(12,3,4,45,32)//lo mismo que max pero el minimo
Math.random()//te retorna un numero psudoaleatorio(aleatorio si no quieres ser tan purista) entre 0 y 1...pero si quisiera un numero aleatorio entre 0 y 100 como haria? pues asi:
Math.random()*100//ahi seria entre 0 y 100 (solo multiplicamos por el numero que queramos para poner rango)
Math.round(3.21)//devuelve un numero redondeado al numero entero mas cercano
Math.floor(3.21)//devuleve un numero redondeado hacia abajo
Math.trunc(3.21)//es como round PERO no redondea simplemente te saca el decimal

// PROPIEDADES

console.log(Math.PI)//imprime el valor de PI osea 3.14159...
console.log(Math.SQRT1_2)//imprime la raiz cuadrada de un 1/2
console.log(Math.SQRT1_2)//imprime la raiz cuadrada de 2
console.log(Math.E)//imprmime la constante de euler
console.log(Math.LN2)//imprime el logaritmo natural de 2
console.log(Math.LN10)//imprime el logaritmo natural de 10
console.log(Math.LOG2E)//imprime el logaritmo de E con base 2
console.log(Math.LOG10E)//imprime el logaritmo de E con base 10




