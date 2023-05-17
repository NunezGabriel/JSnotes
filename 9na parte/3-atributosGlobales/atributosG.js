//ATRIBUTOS GLOBALES
/*
    Son los atributos que continen todos los elmentos en comun TODOS los eleentos html TODOS tienen estos atributos TODOS osea que en cualquier elemento vamos a poder aplicar estos atributos prq son globales, estos son los atributos globales:

    - class => lista de clases de elementos separadas por espacios
    - contentediable => indica si el elmeneto puede ser modificado por el usuario(boolean)
    - dir => indica la direccionalidad del texto
    - hidden => indica si el elemento aun no es, o ya no es, relevante
    - id => define un identificador unico
    - styte => contiene declaraciones de estilos css aplicadas a un elemento
    - tabinex => indica si el elemento puede obtener un focus de input
    - title => contiene un texto con informacion relacionada al elemento que pertenece

*/

const titulo = document.querySelector('.titulo')
const titulo1 = document.querySelector('.titulo1')
const titulo2 = document.querySelector('.titulo2')
const titulo3 = document.querySelector('.titulo3')
const titulo4 = document.querySelector('.titulo4')
const titulo5 = document.querySelector('.titulo5')

titulo.setAttribute('contenteditable', true) // usando este atibuto podemos editar el texto de la etiqueta en la pagina web se PUEDE
titulo1.setAttribute('dir', 'rtl')//aca editamos la direccion de texto con los valores ltr y rtl 
titulo2.setAttribute('hidden', true)//si le damos valor true o false igual desaparece
titulo3.setAttribute('tabinex', true) //nos indica si lo podemos seleccionar o no osea lo que hacemos para copiarlo, tmb se le puede pasar como valor numeros para determinar el orden que que se seleccionan al apretar la tecla tab
titulo4.setAttribute('title', 'este es un titulo good')//esto al poner el mouse encima (al hacer hover) nos tira la data que pasamos como valor a title 
titulo5.setAttribute('style', 'color:red; font-size:40px;')//con este atributo podemos cambiar los estilos del elemento html