//CONDICIONALES EN JS

/////////////////////////////////////////////////////

/*
las condicionales son reglas que aplicamos nosotros para poder validar si algo es verdadero o falso y podamos nosotros generar ciertas acciones con eso: dentro de estas tenemos if - else - else if

if nos dice que si algo se cumple se ejecute tales acciones, else if dice que si no se cunple lo anterior ( if ) que se cumplan estas acciones y else que si no se cumple ninguna de las acciones anteriores (if y else if ) se cumpla estas acciones, ejmplos

🔴IMPORTANTE: en js NO puedes hacer eso que hacias en python osea esto: 0<=edad<5  aca tendras que hacerlo de la manera larga osea asi 0<=edad && edad <5

DATO: si pones if ( true ) la condicion si o si se va a cumplir lo mismo con if ( false ) la condicion si o si NO se va a cumplir 
*/

/////////////////////////////////////////////////////

// RETO = haz un juego de priedra papel o tijera 
let piedra = 'piedra'
let papel = 'papel'
let tijera = 'tijera'

function juego(P1, CPU){

    if (P1 === piedra && CPU === tijera){
        console.log('P1 gano')
    }
    else if (P1 === tijera && CPU === papel){
        console.log(' P1 gano')
    }
    else if (P1 === papel && CPU === piedra){
        console.log('P1 gano')
    }
    else if (P1 === CPU){
        console.log('es un empate')
    }
    else{
        console.log('CPU gano, tu perdiste')
    }
}
juego(papel, papel)

//Forma media interactiva

let stone = 'stone'
let papper = 'papper'
let scissors = 'scissors'

function game(PY1, PY2){

    if (PY1 === stone && PY2 === scissors){
        console.log('PY1 gano')
    }
    else if (PY1 === scissors && PY2 === papper){
        console.log(' PY1 gano')
    }
    else if (PY1 === papper && PY2 === stone){
        console.log('PY1 gano')
    }
    else if (PY1 === PY2){
        console.log('es un empate')
    }
    else{
        console.log('PY2 gano, tu perdiste')
    }
}

let a = prompt('PY1 elija una su simbolo, stone - papper - scissors: ')
let b = prompt('PY2 elija una su simbolo, stone - papper - scissors')

game(a, b)

/////////////////////////////////////////////////////

/*
OPERADOR TERNARIO
Tmb tenemos algo llamado operador ternario que sirve para generar un if y un else en una sola linea y fuciona asi 

-condicion- ? -la instruccion que tendra si es verdadero- : -la instruccion que tendra si es falso-  

ejmplo:
*/

let x = 3
let y = 4

x == 7? console.log('es verdadero') : console.log('es falso')
//output: es falso