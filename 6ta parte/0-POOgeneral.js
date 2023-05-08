//POO conceptos genrales(indice de este modulo)

/*
    la programacion orientada a objetos es un paradigma de la programacion
    mmejorando nuestra fora de programar y haciendo que podaos programar
    objetos de la misma manera que lo hacemos en la vida real.
    Conceptos:

    Clase: esto es como una receta o un molde, es la plantilla que creamos para que con eso podamos crear objetos, en terminos mas ordenados es como crear una fabrica de objetos si queremos que esta fabrica haga otra cosa pues creamos otra clase y otra y otra depende del objeto que querramos que cree.
    
    Objetos: Son los resultados de la clase lo que se creo en esta el resltado del molde

    Atributos: carateristicas, cualidades del objeto si es feo bonito alto bajo etc.

    Metodo: funciones del objeto cosas/acciones que este puede hacer

    Constructor: es un funcion Obligatoria de nuestra clase cuando creamos una clase debemos crear un constructor que va a construir las propiedades del objeto

    Instanciacion: Es el proceso de generarun ejemplar de la clase osea en nuestro ejemplo un crear un carro de nuestra fabrica y decimos que la clase esta instanciada cuando se genero el objeto
*/

// Sintaxis General

class Animal{ // Aca definimos la clase
    constructor(especie,edad,color){ // este es el constructor al que le pasamos los parametros que va 
                                     // a tener al crear un objeto se podria decir parametros de la clase
        this.especie = especie;  //this.especie es un parametro del objeto usamos this. como usabamos @
        this.edad = edad;        // en ruby especie != this.especie ya que especie es el parametro y 
        this.color = color;      // this.especie es el atributo del objeto. no es necesario que tengan el
                                 // mismo nombre puede ser this.esp = especie y no pasa nada.
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }

    // esto de aca abajo es un metodo no se pone ni function ni se hace como
    // una arrow function ... no se puede, aca(en la clase) solo 
    //se pone asi:

    presentarse(){  
        console.log(this.info)
    }
}

let perro = new Animal("perro", 12, "blanco") // aca creamos el objeto usando el molde(clase) Animaly agregando los parammetros del constructor, aca la clase esta instanciada

console.log(perro.especie);
console.log(perro.edad);
console.log(perro.color);
console.log(perro.info);
perro.presentarse();
console.log(perro);

//////////RECAPITULACION & MORE INFO/////////////////////

/*
    - Dentro de la clase tenemos el constructor donde se crean/establecen los atributos estos se ponen con un this. al inicio
    - Dentro de las clases a las funciones se les llama metodos
    - los metodos de una clase no se creaun usando function o con array functions,
    solo se ponen con el nombre y parentesis asi: correr(){}
    - Los atributos que estan dentro del constructor pueden ser utilizados
    en cualqier parte de la clase 
*/
