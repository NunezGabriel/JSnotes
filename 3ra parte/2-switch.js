//SWITCH EN JS

//////////////////////////////////////////////////////
/*
Es otra forma de validar una condicion funciona como if, else y else if con diferente sintaxis funcionando por casos se valida el primer caso si no es vrdd pasa al segundo caso  y si ninguno de los casos son verdad entramos a la etapa default que funciona como nuestro else. Dentro de cada caso tenemos que poner break para que si se cumple no pase al siguiente caso asi es como va la sintaxis: (si no ponemos ese break se valida todo y seria como imprimir todos los mensajes osea no sirve de nada ) 

IMPORTANTE: en switch NO se pueden usar operadores de compracion(=. ===, !=, < > ≤)
*/

//////////////////////////////////////////////////////

//reto mio: tienda de frutas
let TipoDeFruta = prompt('ingrese el tipo de fruta: ')

switch(TipoDeFruta){
    case 'naranja':
        console.log(`la naranja cuesta $3.99 el kilo`)
        break;
    case 'manzana':
        console.log(`la manzana cuesta $4.50 el kilo`)
        break;    
    case 'platano':
        console.log(`el platano cuesta $6.00 el kilo`)
        break;       
    case 'pera':
        console.log(`la pera cuesta $2.50 el kilo`)
        break;
    case 'sandia':
        console.log(`la sandia cuesta $9.00 el kilo`)
        break;  

    default:
        console.log('la fruta ingresada no esta disponible')
}

///////////////////////////////////////////////////////////////////

function solution(article) {
    switch (article) {
      case 'computadora':
        console.log('Con mi computadora puedo programar usando JavaScript')
        break;
      case 'celular':
        console.log('En mi celular puedo aprender usando la app de Platzi')
        break;
      case 'cable':
        console.log('¡Hay un cable en mi bota!')
        break;
      default:
        console.log('Artículo no encontrado')
    }
}

solution('computadora')
solution('celular')
solution('cable')
solution('ornitorrinco')