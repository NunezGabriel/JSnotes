//CALCULAR IMC(indice de masa corporal - ponderacion de peso y altura de una persona
function IMC (peso, altura){
    altmet= altura/100
    cuadrado_altura= altmet * altmet;
    IMC = peso / cuadrado_altura;
    return `el IMC de ${nombre()} es ${Math.round(`${IMC}`)}`
}
function nombre(nombre){
    nombre = "juan";
    return nombre
}

console.log(IMC(100, 170))

//CALCULAR LOS PUNTOS DE UN EQUIPO DE FOOTBALL

function imprimir (frase){
    console.log(frase)
}
function salto_de_linea(){
    console.log()
    console.log()
}

let victorias = parseInt(prompt('ingrese las victorias: '))//parseInt convierte de string a number
let empates = parseInt(prompt('ingrese los empates: '))
puntos_totales = (victorias *3) +  empates;

imprimir(`el total de puntos del equipo es: ${puntos_totales}`)

//PREGUNTAR DIA 10 VECES (ONLY WEB)

function pregunta(name){
    for(let i =0; i<10;i++){
        let answer = prompt(`hola ${name}, como fue tu dia`);
        if(answer === "bien"){
            alert("Que bien");
        }
        else{
            alert("Que mal");
        }
    }
}

pregunta("pepe")