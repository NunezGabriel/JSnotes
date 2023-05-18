//CLASES, CLASSLIST Y METODOS DE CLASSLIST
/*
    estos son metodos para poder trabajar con las clases de toda la vida de html estos metodos son para añadir, borrar, etc 
*/

const titulo = document.querySelector('.titulo');

titulo.classList.add('grande') // agrega la clase grande al alemento html
titulo.classList.remove('grande')//remueve la clase grande del elemnto html
titulo.classList.item(2)//devuelve el valor de la clase que tenga el indice pasado como argumento osea que si tenemos class = 'hola como estas' al poner 2 devuelve estas
titulo.classList.contains('grande')// este metodo verifica algo ese algo es el parametro pasado osea que verifica si el elemento tiene la clase grande si es asi devuelve true si no devuelve false
titulo.classList.toggle('luminoso')//esto lo que hace es que en caso de que el elemento no tenga la clase luminoso la agrega y si si la tiene la saca
titulo.classList.replace('luminoso', 'oscuro')//remplaza una clase por otra en este caso remplaza luminoso por oscuro