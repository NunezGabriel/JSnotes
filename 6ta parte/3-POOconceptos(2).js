//CONCEPTOS DE POO

// estas son conceptos de POO aplicables PERO SI con keywords(palabras reservadas)

////////////////////////////////////////////////////////

/*
    HERENCIA: supongamos que yo tengo la clase animal que engloba perros, gatos, iguanas, etc la clase animal va a tener atributos "generales" como color, edad, especia PERO en esos atributos yo no podria poner tamaño de cola prq no todos los animales tienen cola y en caso de metodos yo no podria poner ladrar prq no todos los animales ladran...osea de poder se puede pero no es nada optimo asi que para eso existe la herencia => tomar una clase con todo lo que puede hacer esta y agregarle cosas nuevas
    para nuestro problema podriamos crear otra clase llamada Perro que herede de animal se ahrai asi:
*/

class Animal{ // Aca tenemos nuestra clase Animal
    constructor(especie,edad,color){ 
        this.especie = especie;  
        this.edad = edad;        
        this.color = color;      
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    presentarse(){  
        console.log(this.info)
    }
}

class Perro extends Animal{ // y aca tenemos la clase Perro que hereda todo de Animal 
    constructor(especie,edad,color,raza){// a pesar de que heredamos igual debemos crear un cosntructor ya que como dijimos tadas las clases deben tener constructor
       super(especie,edad,color) // aca con la keyword "super" traemos los atributos que querramos de Animal
       this.raza = raza //tmb en el constructor podemos agregar nuevos atributos como este "raza"
    }
    ladrar(){
        console.log("Woow")
    }
} 

const perro = new Perro('perro', 12, 'blanco', 'pitbull');
const gato = new Animal('gato', 2, 'negro', 'egipcio')
perro.presentarse()//podemos usar el metodo presentarse ya que esta heredado de Animal
perro.ladrar()
// gato.ladrar()// da error prq es de clase animal no de clase perro

////////////////////////////////////////////////////////
/* 
METODOS ESTATICOS: Metodo que no necesita que la clase se instancie para poder ser creado ejm:
*/

class Mago{
    constructor(nombre, ap){
        this.nombre = nombre
        this.ap = ap;
    }
    stats(){ // aca el metodo USA los atributos del constructor por ende NO puede ser un metodo estatico
        console.log(`Mi hability power es de ${this.ap}`)
    }
    static maldecir(){// en cammbio aca no los usa entonces SI puede ser un metodo estatico asi que podemosagregar la keyword static al inicio para hacerlo estatico
        console.log(`Te lanzo un hechizo y te convierto en rana`)
    }
}

Mago.maldecir()//al usar un metodo estatico como dijimos no es necesario instanciar la clase ya que se puede usar con el mismo nombre de la clase y no con un objeto

////////////////////////////////////////////////////////
/* 
METODOS ACCESORES (GETTERS & SETTERS): los metodos getters son para obtener un valor y los setters son para modificarlo o definirlo
*/

class Player{
    constructor(name, type, damage){
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.speed = null;
    }

    set setSpeed(newSpeed){ //aca creamos el metodo modificar speed que lo que va a hacer es combiar el valor de speed podriamos ponerlo sin el set PERO no es recomendable ya que puede traer algunos bugs 
        this.speed = newSpeed
    }

    get getDamge(){
        return this.damage
    }
}

const guerrero = new Player('Estarosa', 'paladin', 300);
guerrero.setSpeed = 122;//aca a pesar de se un memtodo el parametro no lo pasamos entre parentesis si no que igualamos toda la aexpresion al parametro asi se hace cuando es set
console.log(guerrero.getDamge());

////////////////////////////////////////////////////////////

/*
    RECAP AND MORE INFO:
    - los objetos siempre definirlos usando const no let esto es por buenas practicas

    - los metodos de una clase heredada por otra se pueden usar sin ningun problema en la clase y sin tener que usar "super" commo se hace con los atributos

    - los metodos estaticos no necesitan que la clase este instanciada para poder usarse

    - los metodos accesores(get y set) como viste son algo que tu dirias mmm pero esto lo puedo hacer creando una funcion que lo cambie en vez de usar set y tmb poner guerrero.damage en vez dfe usar todo un metodo con get asi me ahorro lineas de codigo PEROOOO los metodos set y get en su mayoria se usan para acceder a propiedades privadas o en caso de JS datos encapsulados cosa que no se podria hacer asi de simple. por eso set y get es super util
*/