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