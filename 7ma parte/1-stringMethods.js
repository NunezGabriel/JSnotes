//METODOS DE LOS STRINGS
/* 
Estos son los metodos que podemos aplicar a los strings
tmb se pueden utilizar en arrays ya que los arrays son strings
pero estos son mas comunes para solo strings.

IMPORTANTE: aca no veremos todos los metodos ya que osn VARIOS pero
si quieres verlos y es mejor que estas notas lee en la documentacion
link aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
*/
////////////////////////////////////////////////////////////////

let mensaje = 'mensaje de prueba';
let mensaje2 = 'mensaje 2'
mensaje.concat('hola'); // va a agregarl a mensaje "hola" al final
mensaje.startsWith(mensaje2)  //si un string comienza con los carateres de otro devuelve string true
mensaje.endsWith(mensaje2) // lo mismo que stratsWith pero el final
mensaje.includes(mensaje2) // si una cadena se encuentra de otra cadena devuelve true
mensaje.indexOf('de') //devuelve el index de lo que pongamos en su inicio en este caso retorna 9
mensaje.lastIndexOf('de') //devuelve el index de lo que pongamos en su final en este caso retorna 10
mensaje.padStart(36,'e') //rellena la cadena al principio con los caracteres deseados
mensaje.padEnd(36,'e') //lo mismo que padstart pero al final
mensaje.repeat(2) //repite el string la cantidad de veces que se le indique
mensaje.split(',') //divide la cadena como le pidamos en este caso va a dividir cada caracter por comas
mensaje.substring(1,3) //desde que posicion hasta qye posicion  quieres que se vea tu string
mensaje.toLowerCase() // convierte el string a minuscula
mensaje.toUpperCase() //convierte el string a mayuscula
mensaje.toString() // convierte a string xd
mensaje.trim()//elimina los espacios en blanco
mensaje.trimEnd()//elimina los espacios del final
mensaje.trimStart()//lo mismo pero del comienzo