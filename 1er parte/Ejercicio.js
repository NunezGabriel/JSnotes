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