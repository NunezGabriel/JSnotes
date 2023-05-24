//EVENTOS
///////////////////////////////////////////

const div = document.querySelector('.div')

//con addEventListener() podemos agregar eventos ...lo que hace esto es agregar un escuchador de eventos tiene 2 parametros que son (<el evento>,<la funcion que va a ejecutarse cuando ocurra ese evento>) ejm

div.addEventListener('click', ()=>{
    div.setAttribute('style', 'color:red;')
})

window.addEventListener('keydown', ()=>{ //esto hace que cuando una tecla haya sido precionada imprime hola
    console.log('hola')
})
