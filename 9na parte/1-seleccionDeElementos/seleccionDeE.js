//METODOS DE SELECCION DE ELEMENTOS
/*
    Son todos los metodos  que nos van a premitir obtener los elementos o los grupos de elementos que vamos a querer seleccionar tenemos
    
    - document.getElementById() =>Selecciona un elemento por su ID
    - getElementByTagName() =>Selecciona todos los elementos que tengan el nombre de la etiqueta escrita
    - querySelector() => devuelve el primer elemento que coincida con el grupo especificado de selectores
    - querrySelectorAll() => devuelve todos los elementos que coincida con el grupo especificado de selectores.
*/
//////////////////////////////////////

//PRUEBAS
let parrafo = document.getElementById('parrafo'); //selecciona el elemento con el id parrafo y devuelve un objeto
let parrafoTAG= document.getElementsByTagName('p')//selecciona una coleccion de elementos(todos los <p>) y devuelve una coleccion de objetos
let parrafoQS = document.querySelector('.parrafo')//selecciona un elemento y devuelve un objeto
let parrafoQSA = document.querySelectorAll('.parrafo')//selecciona una coleccion de elementos(todos los que tengan la clase parrafo) y devuelve una coleccion de objetos
document.write(parrafo);
document.write(parrafoTAG[0]);
document.write(parrafoQS);
document.write(parrafoQSA)

//RECAPITULACION Y DATA EXTRA
/*
    - los metodos que vimos son para obtener los elementos del html
    - podemos usar todos pero getElementsByTagName no es nada recomendado
    - mi favorito entre todos es querySelector ya que usa la nomenclatura de css 
    - getElementById solo funciona para traer elementos por su id si el elemento tiene una clase y no un id no funcionara
    - getElementById al hablar de IDs es mas rapido(efectivo) que querySelector
    - todos estos metodos al 'imprimirlos' nos retornan un objeto mas no el valor del elemento osea que si tenemos un <p>hola</p> no nos va dar holanos va a dar un [object HTMLParagraphElement] para que obtener ese hola usaremos otro metodo que lo vemos en el siguiente archivo
*/