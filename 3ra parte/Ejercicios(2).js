//indicador de edad concuccion
function RequestConducir(){
    let edad = Number(prompt('ingrese su edad: '))

    if(edad < 18){
        document.write('Usted No tiene edad para conducir')
    }
    else if(edad === 18){
        document.write('Usted tiene edad conducir')
    }
    else{
        document.write('Que espera que no conduce')
    }
}
RequestConducir();

//Interprete de Notas
function InterpreteDeNotas(nota){
    if (0<=nota && nota<3){
        document.write('Su nota es muy deficiente')
    }
    else if (3<=nota && nota<5){
        document.write('Su nota es insuficiente')
    }
    else if (5<=nota && nota<6){
        document.write('Su nota es suficiente')
    }
    else if (6<=nota && nota<7){
        document.write('Su nota esta bien')
    }
    else if (7<=nota && nota<9){
        document.write('Su nota es notable')
    }
    else if (9<=nota && nota<=10){
        document.write('Su nota es sobresaliente')
    }
    else{
        document.write('La nota ingresada no es correcta por favor ingresela de nuevo')
    }
}
InterpreteDeNotas(Number(prompt('Ingrese su nota: ')))



