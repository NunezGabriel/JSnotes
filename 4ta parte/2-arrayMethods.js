// * METODOS PARA MUTAR EL CONTENIDO DE UN ARRAY *

//Puedes ver la lista entera de metodos de arrays de una mejor maneta aqui: ⬇️
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

let masFrutas = frutas.push('mango')//--> agrega un elemento al final del array

let menosFrutas = frutas.pop()//--> elimina el ultimo elemento del array

let masFrutasInicio = frutas.unshift('durazno')//--> agrega un elemento al inicio del array

let menosFrutasInicio = frutas.shift()//--> elimina el primer elemento del array

let masFrutaspFuncion = frutas.forEach(agregar)/*esto lo que hace es que por cada elemento del array se ejecute la funcion pasada como parametro 
en este caso hay cuatro elementos en el array osea se va a ejecutar 4 veces la funcion xd*/

function agregar()
{
    frutas.push("sandia")
}

// * INFORMACION DE UN ARRAY *

let posicionFrutas = frutas.indexOf('platano')// 2 --> muestra que posicion ocupa en el array el elemetno que pasaste como parametro

let tamanho = frutas.length()// .length es para obtener la cantidad de elementos de un array

// * METODOS DE RECORRIDOS DE ARRAY *   

// Usaremos como ejemplo un array de objetos no de strings no de numbers de OBJETOS 

let articulos = [    // Esto es un array de objetos 
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

let articulosFiltrados = articulos.filter(filtradorDeArticulos) /* Esto lo que hace es filtrar elementos de un array y ponerlos en otro array "imaginario" (esto
NO modifica el array principal ). Pero que elementos filtra? filtra los elemntos que indique una funcion la cual es pasada como parametro en .filter */

function filtradorDeArticulos(articulo){  // Aca esta la funcion que pasamos como parametro en .filter ⬆️ 
    return articulo.costo <= 500 // tenemos que pasarle un parametro a esta funcion para que este guarde el valor de .costo 
                                 // lo que hace esta funcion es retornar los articulos que tengan costo mayor o igual a 500
}                                 // y con .filter los almacena en ese array "imaginario" para mostrarlos cuando se lo pidamos 


let nombreArticulos = articulos.map(mapeadorArticulos) // esta funcion sirve para mapear osea almacenar todos los elemtos que se piden en un array 

function mapeadorArticulos(Articulo){ // aca esta la funcion  igual que la funcion de arriba tenemos quue ponerle un parametro (tmpoco modifica el array principal)
    return Articulo.nombre      // lo que hace esto es almacenar todos los nombres de los articulos en un array "imaginario"
}

let encontrarArticulo = articulos.find(encontrador) // esta funcion nos ayuda a encontrar un elemto en el array en caso el elemto buscado este en el array
// y lo almacena en otro array (tmpoco modifica el array principal) podemos pasarle como parametro un nombre o una funcion 

function encontrador(AArticulo){
    return AArticulo.nombre === 'Laptop'
}

let articulosBaratos = articulos.some(barato) //Comprueba si al menos un elemento del array cumple con la condición que le damos si es asi
// a diferencia del fillter no nos regresa exactamente el articulo o los articulos este metodo solo nos dice si hay un articulo que cumpla con 
//la condicion o si no hay osea true o false 

function barato(AAArticulo){
    return AAArticulo.costo <= 700
}

/*
A modo de recopilación:

    find() : Devuelve el primer elemento del array que cumpla con la condición dada
    foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
    some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
    filter() : Devuelve todos los elementos del array que cumplan con la condición dada
*/