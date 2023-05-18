//Modificacion y obtencion de elementos html

/*
    Estos son metodos que nos van a ayudar a modificar y obtener elementos de nuestro html
*/

const titulo = document.querySelector('.titulo')

titulo.textContent()//nos devuelve lo que tiene adentro la etiqueta PERO si dentro de la etiqueta tenemos otra eetiqueta como puede ser un <b></b> no nos devuelve ese <b> osea no nos devuele el texto en negrita

titulo.innerText()//es igual que textContent pero si aplicamos el atributo visibility ='false' no muestra lo que tenga el visibility = 'false' en cambio textContent muestra TODO no importa el visibility // ya casi no se usa esta obsoleto y consume mas recursos al utilizarse
titulo.innerHTML()//devuelve todo el texto y el elemento html osea qeu si se va a ver en negrita
titulo.outerHTML()//devuelve TODO el elmento html

/*
    EN RESUMEN: 
    - textContent: devuelve el textp de cualquier nodo
    - innerHTML: devuelve el contenido html de un elemento
    - outerHTLM: devuelve el codigo HTML completo del elemento 
*/
