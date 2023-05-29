//en este que es otro archivo importamos lo que necesitamos
// import solo funciona si el archivo es de tipo module lo cual ponemos en el html asi:
//<script type = 'module' src = './index.js'></script>

import { index, saludo} from "./1-jsModules.js";

//como estamos importando esas dos variables de modules pues funcionan con normalidad (podemos importar todo funciones clases etc.)

console.log(index)
console.log(saludo)

//la logica es que al index en html se le pone typer = "module" !!!solo a un archivo se lo puede poner como modulo!!!  ... osea que el objetivo es que siempre este importado algo en index por ejemplo puedes tener un archivo que exporta algo a otro archivo y ese exporta algo a otro y ese otro ya importa a index y como index es el que esta siendo llmado en html y es de type = "module" ya lo 'convierte' por default a todo en modulo y corre el programa :) 

// recordar que siempre el script que vayas a llamar en html osea el que sea index debe ser de tipo module si no te va adar error ya que eso de export e import son propios de los modulos y al no ser modulo no lo reconoceria 

// tmb recordar que el archivo que vas a llamar en html (que comunmente se llama index pero puede llamarse como sea ) es el que debe estar trayendo los demas index como pusimos el ejemplo arriba tenemos un archivo que exporta una funcion a otro y este otro exporta la funcion del primer archivo y otro popia a index asi que index es el que tiene todo en ese caso llamamos index prq si llamaramos el primer archivo el programa no correria ya que le faltan funciones 