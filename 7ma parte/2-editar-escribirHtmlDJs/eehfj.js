let h1Container = document.querySelector('h1')// aca aplicamos lo del archivo anterior 
let pContainer = document.querySelector('p')
h1Container.innerHTML = 'Me gusta el pollo' /*aca estamos aplicando una de las muchoooos 
metodos que tiene JS para poder editar/escribir cosas del HTML desde JS 
en este caso lo que hace innerHTML es cambiar el valor de la qtiqueta h1 con uno 
nuevo que le pasamos nosotros OJO no solo es texto lo que podemos cambiar 
ya q es inner.html no inner.text al ser html podemos tmb agregar html ejm*/
pContainer.innerHTML = "este es un parrafito <br> y este tmb " /*aca agragamos
al valor de la etiqueta p la etiqueta <br>*/
console.log(h1Container.getAttribute('src'))/*esto lo que hace es darnos/leer el valor
de un atributo de la etiqueta OUTPPUT: hola amiguitos */
h1Container.setAttribute('class','verde')/*esto cambia el valor del atributo a uno nuevo 
ambos pasados como parametro, NO lo escribe textualmente en el html*/
h1Container.classList.add('azul')//agrega la clase azul al h1, SI lo escribe textualmente
h1Container.classList.remove('azul')//elimina la clase azul de h1

//////////////////////////////////////////////////////////////////////////

let img = document.createElement('img')//con esto creamos una etiqueta img
img.setAttribute('src', 'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png')
//aca cambiamos el valor del atributo src al link de una imgen que querramos
pContainer.append(img)/*y para poder ver esa imagen la vamos a meter dentro de
una etiqueta que ya tenimaos que en este caso va a ser nuestro p y 
para meterlo usamos el metodo .append que es para insertar elementos en otros*/