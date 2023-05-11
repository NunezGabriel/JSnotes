//CONSOLA
/*
    Es de las herramientas mas importantes que tenemos nosotros como desarrolladores
    ya que nos sirve para hallar nuestros errores y poder darles solucion osea nos sirve para debuguear.. esta se pued encontrar en algun interprete de JS o mas que todo en el navegador ya que recuerda JS es interpretado
    recuerda aqui esta la documentacion: https://developer.mozilla.org/es/docs/Web/API/console
*/

///////////////////////////////////////////////
//METODOS DE CONSOLE

// DE REGISTRO

console.assert(2 === 3)//aparece un mensaje de error en la consola si la afirmacion es falsa pero si la afirmacion es verdadera no aparecera nada
console.clear()//limpia la consola 
console.error('pero que hiciste?')//muestra el mesaje por parametro como error 
console.log("hola")//muestra un mensaje en la consola
console.table([1,2,3,4,4,5,6,7])//toma como parametro un array o un objeto y nos muestra una tabla con esos elementos
console.warn('ten cuidado aqui bro')//es como el error pero en vez de tirar un error tira una advertencia
console.dir([1,2,3,4,5])//despliega una lista interactiva de las propiedades del objeto JS especificado...es mejor cuando le pasas como parametro un array o un objeto pero tmb se puede un string o number

// DE CONTEO

console.count() //registra cuantas veces se ejecuto esta funcion
console.countReset()//resetea el conteo de la funcion anterior

// DE AGRUPACION
console.group()//crea un grupo en la consola donde puedes ejecutar funciones, crear variables objetos etc dentro de ese grupo
console.groupEnd()//cierra el grupo para que vuelvas a donde estabas escribiendo
console.groupCollapsed()//es igual al group solo que comienza con la flecita cerrada

// DE TEMPORIZACION

console.time()//inicia un temporizador que no se ve
console.timeLog()//muestra la cantidad de tiempo que paso desde que ejecutamos  console.time hasta ahora que ejecutamos timelog PERO no corta el temporizador
console.timeEnd()//termina el temporizador

//OTRA COSA INTERESANTE
//podemos cambiar los estilos de lo mostrado en consola (no es nada util pero se pued xd)

console.log("%hola", "color:green;background:black")

//com el % iniciamos que ese string va a poder ser cambiado por estilos y ahora ponemos , y entre comillas ponemos los estilos

