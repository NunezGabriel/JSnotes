const h1Container = document.querySelector('h1')
/////////////////////////////////////////////////////

// FOMA 1 DESDE EL HTML NO ES LA MAS GOD

const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')

/*AHORA una de las formas de escuchar eventos(mas adelente veremos otra que es la mas god) es usar en el html el atributo 'onclick' 
si se trata de una etiqueta button y un 'onchange' si es una etiqueta input la sintaxis es igual para las dos ejm:
<button id="btnCalcular" onclick = '-funcion a ejecutar-' >Calcular</button>  ejm del ejm:
<button id="btnCalcular" onclick = 'console.log("hice click xd")' >Calcular</button> esto lo que hace es que 
cada vez que hagas click en button muestre ese mensaje en consola */

function onchangeFunction(){
    console.log('escribi algo usando mi funcion')
}
//aca hicimos una funcion que cada vez que hagamos click se sumen los valores de los 2 inputs y los muestren en el DOM no consola
function onclickFunction(){
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    result.innerText = `Resultado: ${sumaInputs}`
}
//-----------------------------------------------------
//FORMA 2 CON ADDEVENTLISTENER TODO DESDE JS
//esta forma es la mas recomendada prq con esta el html queda mas limpio
const number1 = document.querySelector('#mat1')
const number2 = document.querySelector('#mat2')
const btnCalculador = document.querySelector('#btnmat')
const answer = document.querySelector('#Answer')
btnCalculador.addEventListener('click', aelclickFunction)/*aca tenemos el poderoso addEventListener lo que hace es que al elemetno que le pongamos
le agreaga un "escuchador de eventos" osea que va a pasar algo cuando suceda un evento -> en terminos mas tecnicos es que va a
pasar una funcion cuando suceda un evento ambos (el evento y la funcion) son pasadas como parametros par el metodo addEventListener
osea tiene esta sintaxis: btnCalculador.addEventListener('evento' , -funcion-) a diferenfia del modo de html al poner la funcion
como parametro NO debemos poner los parentesis  */
function aelclickFunction(){
    let sumadats = parseInt(number1.value) + parseInt(number2.value)
    answer.innerText = `Resultado: ${sumadats}`
}