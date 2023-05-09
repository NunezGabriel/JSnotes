let h1Container = document.querySelector('h1') //con esto asignamos a la etiqueta html una variable del nombre que queramos
let pContainer = document.querySelector('p')
let spanContainer = document.querySelector('span')
let inputContainer = document.querySelector('input')

console.log({// y al imprimir como objeto las variables podemos ver lo que almacenan h1Container almacena la etiqueta h1
    h1Container,
    pContainer,
    spanContainer,
})
console.log(inputContainer.value)// esto imprime el valor que tiene el input que en este caso le pusimos valor secreto
/*
OUTPUT EN CONSOLA
-> {h1Container: h1, pContainer: p, spanContainer: span}[Prototype]]: Object
-> valorsecreto
*/