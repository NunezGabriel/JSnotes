let input1 = document.querySelector('.uno')
let input2 = document.querySelector('.dos')
let btn = document.querySelector('.btnC')
let result = document.querySelector('#result')

btn.addEventListener('click',porcent)

function porcent(){
    let porcent = (parseInt(input1.value)/100) * parseInt(input2.value)
    result.innerHTML = `Resultado: ${porcent}`
}
