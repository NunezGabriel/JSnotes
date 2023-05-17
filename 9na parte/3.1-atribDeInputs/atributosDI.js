//ATRIBUTOS DE LOS INPUTS
/*
    A diferencia de los globales lo atributos de los inputs son propios de los inputs osea que solo pueden se usado en inputs y aca veremos como cambiarlos desde JS igual que en A. globales, los atribbutos son:
    
    - className
    - value
    - type
    - accept
    - form
    - minlength
    - placeholder
    - required

    Para estos atributos vamos a acceder a ellos y modificarlos PERO de otra forma, sin el setAttribute
*/

const input = document.querySelector('.input_normal')

//primero motremos los distintos atributos que tiene input

document.write(input.className) // devuelve el nombre de la clase
document.write(input.value) // devuelve el valor del input
document.write(input.type)// devuelve el tipo de input tmb podemos modificarlo aca directamente poniendo input.type = 'number' ahora el tipo seria de numero
input.accept = 'image/png' //esto va de la mano con el input type file ya que con accept le podemos decir que acepte archivos pgn jpg etc.
input.form // esto va de la mano con los fomularios ya que si el input esta fuera del formulario no lo enviaria, pero con esto podemos pasarle el como valor al atributo form el nombre del id del formulario y ahi si lo conecta y lo envia
input.minLength = '43'; // esto hace que el input no tenga menos de 43 caracteres si no no deja enviar
input.placeholder = 'hola' // esto pone el mensaje ese de los inputs el que esta por detras
input.required = 'true'; //con esto especificamos que el input es un campo requerido osea que no se puede dejar en blanco