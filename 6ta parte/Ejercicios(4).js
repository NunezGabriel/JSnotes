
// MOSTRAR ALERTA DE UN CURSO

class Curso{
    constructor(profesor, horas, asignatura){
        this.profesor = profesor;
        this.horas = horas;
        this.asignatura = asignatura;
        this.reminder = `Mañana tiens la asignatura de ${this.asignatura} dictada por el profesor ${profesor} y esta durara ${horas} horas.`
    }
    notifyMe(){
        console.log(this.reminder)
    }
}
matematicas = new Curso("Juan", 2, "matematicas");

// matematicas.notifyMe()

//////////////////////////////////////////////////////
//First problem
class Celular{
    constructor(color, peso, rPantalla, camara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucion = rPantalla;
        this.camara = camara;
        this.ram = ram
    }
    mostrarCaracteristicas(){
        console.log(`Este modelo es de color ${this.color}, su peso es de ${this.peso} gramos, su resolucion es de ${this.resolucion} pixeles, su camara tiene ${this.camara} MPX y tiene ${this.ram} GB de ram `)
    }
    prender(){
        console.log(`
        prendiendo celular ....
        celular prendido 
        *aparece logo de la marca*`)
    }
    reiniciar(){
        console.log(`
        reiniciando espere ...
        ........
        ........
        *se reinicia*`)
    }
    tomarFoto(){
        console.log(`
        "click" 
        *se tomo la foto* 
        (@ _ @) <- your face`)
    }
    grabar(){
        console.log(`
        "click"
        *empieza a grabar* 
        <movimientos irreconocibles>`)
    }
}

motorola = new Celular('rojo', 930, 120, 12, 8)

motorola.mostrarCaracteristicas()
motorola.prender()
motorola.reiniciar()
motorola.tomarFoto()
motorola.grabar()

