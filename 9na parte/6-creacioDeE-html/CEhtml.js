//CREACION DE ELEMENTOS HTML

/*
    Aca veremos metodos que nos ayudan a la creacion de elementos html desde JS 
*/

const contenedor = document.querySelector('.contenedor')

const item = document.createElement('LI') //con esto creamos un elemento html mas concretamentele una etiqueta li, SI o SI lo debemos poner en mayuscula ya que esa es la forma en que createElement reconoce los elemntos html

// nice tenemos el elemnto pero queremos meterle un texto como hariamos? bueno pues asi

const textoDelItem = document.createTextNode('este es un texto')//aca creamos primeo el texto que vamos a introducir al elmento PERO aun no lo tenemos dentro solo esta creado

item.appendChild(textoDelItem)//y con este METODO DE LOS CHILDS lo introducimos en la etiqueta

//hay mas metodos de los childs pero eso lo veremos en el siguiente archivo

// y asi creariamos un elemento

//ahora otro problema que pasa si quiero agregar varios elementos no solo uno ... deberia hacaer varios createTextNode y tmb varios appendChild ? pues la respuesta es NO para eso tenemos:

const fragmento = document.createDocumentFragment() // aca creamos un fragmento

for(let i = 0; i<20; i++){ //con este for tendriamos 20 elementos li con un texto en su interior
    const item  = document.createElement('LI')
    item.innerHTML = 'este es un texto'//esto funciona envez de text node ... se usa mas esta forma
    fragmento.appendChild(item)
}
//ahora vamos a meter los li al divv de nuestro html y lo hacemos asi

contenedor.appendChild(fragmento)


/*
    RECAPITULACION
    - Hay varias formas de crear elemntos html esta es de las mas comunes 
    - tu diras y prq envez de poner createTextNode solo pongo un string y lo meto...pues si funcionaria y daria el mismo resultado que esperamos en el ejemplo anterior PEROOOO al hacerlo asi solo meteriamos un string sin mas sin embargo al nosotros usar createTextNode le metemos un objeto texto lo que indica que va a tener ciertos metodos y propiedades que no tendriamos si metemos solo un string
*/