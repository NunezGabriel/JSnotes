
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

matematicas.notifyMe()

//////////////////////////////////////////////////////