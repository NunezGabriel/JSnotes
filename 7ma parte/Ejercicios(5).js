//calculadora con metodos y arrow functions

let potencia = (primerV,segundoV) => console.log(primerV**segundoV)
let raizCuadrada = (valor) => console.log(Math.sqrt(valor))
let raizCubica = (valor) => console.log(Math.cbrt(valor))

potencia(2,3)
raizCuadrada(25)
raizCubica(8)


//vendedor de fruta

let frutas = ['pera', 'naranja' , 'manzana', 'durazno', 'sandia']
let carrito = []
if(frutas.includes('piña')){carrito.push('piña')}
if(frutas.includes('naranja')){carrito.push('naranja')}
if(frutas.includes('sandia')){carrito.push('sandia')}
