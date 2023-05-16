//forma de crear
//1
let user = new Object()
//2
let usuario ={}

//////////////////////////////////////////////
//KEY:VALUE

let persona ={
    name:'juan',
    edad:45
}

//podemos agragar un valor al poner el nombre del objeto.el valor no esxistente ejm

persona.isAdmin = true; //esto va a agregar el valor isAdmin al objeto persona si no existe

//sobreescribir una propiedad

persona.name = 'rodrigo' //sobreescribe el value de name si es que existe

//eliminar el elemento key.value

delete persona.age; //borra tanto valor como key

//buscar si un key existe

console.log('name' in persona) //imprime true

//iterar objetos

for(let key in persona){
    console.log(key)
    console.log(persona[key])
}
//obtener keys y values
Object.keys(persona)//retorna los keys de persona en un array
Object.values(persona)//retorna los keys de persona en un array
Object.entries(persona) // retorna la fusion de key y values en un array
////////////////////////////////////////////////

//OBJECT REFERENCES AND COPIES

//copia referencia del objeto original
let admin = persona //igualamos la variable admin a user PERO no solo igualamos valores si no que tmb igualamos las referencias osea que ambos apuntan a los mismos valores osea que si cambio de el name en admin tmb lo cambio en persona... para olucionarlo debemos clonar el objeto y hay 2 formas
//clona objeto original
let clone = Object.assign({},persona) //primera forma
let clone2 = {...persona} //segunda forma usando <destructuring>

//////////////////////////////////////////////////

//OBJECT METHODS, THIS

let avatar ={
    name:'spider',
    age: 32,
    sayHi(){
        console.log(`hello ${this.name}`)
    }
}

//////////////////////////////////////////////////

//🔴Destructuring assignment

//////// *En Arrays* ////////////
let names = ['juan', 'pepe']
//como siempre
let name1 = names[0] //aca asignamos los valores del array a variables como lo hariamos siempre
let name2 = names[1]
//con destructuring
let [fname,lname] = names // y aca lo asemos con destructuring asiigment

//*Destructuring
let roma = ['julius', 'caesar', 'consul', 'of the roman republic']
let [nombre,apellido,...rest] = roma//aca usamos destructuring para agregar los valores del array roma el primer valor va a nombre el segundo a apellido y los 2 restantes van a rest ya que usamos destructuring

//with default values
let [apodo = 'rata',chapa='mrpeet'] = ['adrian'] // si no le pasas valor a uno de los 2 toma el valor por default establecido ahi

////////En OBJETOS ////////////////

let options = {
    title: 'hola',
    width: 12,
    heigth: 11
}
let {title:t, heigth:h, width:w} = options // con eso de :t ponemos las propiedades de option sobre nuevas variables
let {title:ti = 'no title', ...restOptions} = options
