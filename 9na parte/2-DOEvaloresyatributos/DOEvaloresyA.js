//DEFINIR OBTENER Y ELIMINAR VALORES Y ATRIBUTOS
/*
    Estos son metodos que nos van aa ayudar a obtener eliminar y modificar valores y atributos de nuestros elementos html y entre esos metodos tenemos
    
    - setAttribute() => modifica el valor de un atributo
    - getAttribute => obtiene el valor de un atributo
    - removeAttribute => remueve el valor de un atributo
*/
////////////////////////////////////////////////
//Ejemplos porcticos

const rango = document.querySelector('.rango')
rango.setAttribute('type', 'text')//se le pasan dos parametros el primero es el atributo que queremos modificar y el segundo al cual vamos a modificar y asi cambiamos de type = range a type = text

document.write(rango.getAttribute('type')) //aca con el metodo getAttribute obtenemos el valor del atributo type de nuestra etiqueta

rango.removeAttribute('type')//elimina el atributo type de nuestra etiqueta html

//RECAP Y DATA EXTRA
/*
    - setAttribute: no solo modifica los atributos ya que si nuestra etiqueta no tuviera el atributo pasado como parametro este metodo lo crea y le da el valor paraso com segundo parametro
    
    - estos metodos no alteran visualmente nuestro html en local pero el html del browser elque sale al apretar inspect ese si se altera de manera visual
*/