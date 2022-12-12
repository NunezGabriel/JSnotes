/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.*/

let WordContainer = [];
let keyword;

function mostrarPalabra(palabra){
    console.log(`- ${palabra}`);
}

while(keyword != 'cancelar'){
    let Word = prompt('escriba una frase: ')
    WordContainer.push(Word);
    keyword = prompt('si quieres dejar de escribir palabras escibe aqui "cancelar" si no pon cualquier cosa:  ')
}

for(let i = 0; i < WordContainer.length; i++ ){
    mostrarPalabra(WordContainer[i])
}

/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

/////////////////////// FORMA CON AYUDA DE INTERNET MAS SIMPLE XD//////////////////////////////////////////
let numberContainer = [];
let keyword2;

function sumar(){
    let total = 0;
    for(let i = 0; i < numberContainer.length; i++){
        total += numberContainer[i]
    }
    console.log(total)
}

while(keyword2 != 'cancelar'){
    let Number = parseInt(prompt('escriba un numero: '))
    numberContainer.push(Number);
    keyword2 = prompt('si quieres dejar de escribir palabras escibe aqui "cancelar" si no pon cualquier cosa:  ')
}

sumar()


/////////////////////// FORMA HECHAN POR MI MAS COMPLICADA PRQ SOY TONTO XD //////////////////////////////////////////

// let numberContainer = [];
// let keyword2;

// function sumar(resultado){
//     for(let i = 0; i < numberContainer.length; i++){
//         for(let j = -1 ; j < i; j++){
//           resultado = numberContainer[i] + numberContainer[j]
//         }
//     }
//     console.log(resultado)
// }

// while(keyword2 != 'cancelar'){
//     let Number = parseInt(prompt('escriba un numero: '))
//     numberContainer.push(Number);
//     keyword2 = prompt('si quieres dejar de escribir palabras escibe aqui "cancelar" si no pon cualquier cosa:  ')
// }

// sumar();