const h1Container = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')//aca como siempre detectamos los elementos del html con querry selector
const result = document.querySelector('#result')
/*AHORA una de las formas de escuchar eventos(mas adelente veremos otra que es la mas god) es usar en el html el atributo 'onclick' 
si se trata de una etiqueta button y un 'onchange' si es una etiqueta input la sintaxis es igual para las dos ejm:

// FOMA 1 DESDE EL HTML NO ES LA MAS GOD
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
//FORMA 2 CON ADDEVENTLISTENER TODO DESDE JS    s