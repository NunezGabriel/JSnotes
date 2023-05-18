//Métodos de childs (hijos) - Propiedades de parents (Padres) - Propiedades de siblings (Hermanos)

///////////////////////////////////////////////

//METODOS DE LOS CHILDS(hijos)

const contenedor = document.querySelector('.contenedor')

const h1nuevo = document.createElement('H1') //aca creamos un elemnto h1 que es nuevo
h1nuevo.innerHTML = 'soy un titulo nuevo' //como su valor

const h1antiguo = document.querySelector('.h1')//y aca traemos el valor y elemnto h1 ya existente

//ahora para remplazar el elemno hijo antiguo con el nuevo usamos el metodo:

contenedor.replaceChild(h1nuevo,h1antiguo)//remplazamos el elemnto nuevo por el antiguo

contenedor.removeChild(h1nuevo)//con esto removemos el elemento hijo que no querramos
contenedor.hasChildNodes()//esto verifica si tienen algun elemento hijo o no devuelve true o false

///////////////////////////////////////////////

//PROPIEDADES DE PARENTS(padres)

// hay varias propiedades de los padres pero estas son las mas comunes

h1antiguo.parentElement // retorna el elemento padre osea el elemnto html sin textnodes como vimos en el file anterior
h1antiguo.parentNode //este retorna el padre como tal osea si el primer pader que ve no es elemento html retornara unbn nodetext osea el espaciodo o cualquier otra cosa ///es muuuuucho menos usado de parentElement

//////////////////////////////////////////////

//PROPIEDADES DE LOS SIBLINGS(hermanos)

//propiedades entre hijos los que estan el el mismo rango

h1antiguo.nextSibling//retorna el nodo que le sigue a este recordar que nodo es todo no solo elemntos html en este caso nos da un node text ya que tenemos la identacions

h1antiguo.nextElementSibling // retonra el elemento html que le sigue NO nodo

h1antiguo.previousSibling //lo mismo que nextSibling pero el previo
h1antiguo.previousElementSibling //lo mismo que nextElementSibling pero previo

/*
    DATA EXTA SIOBRE NODOS
    - tenemos el metodo closest(): esto nos da el elemto ams cercano asendente que tenga la clase que pasamos como parametro al metodo closest ejm

    contenedo.closest('h1') //retorna el elemnto mas cercano desde arriba que contenga la clase 'h1'
*/