// JS MODULES
/*
    Hasta ahora, hemos estado trabajando con un solo archivo javascript grande para manejar todo el comportamiento de nuestras aplicaciones o llamando los archivos desde HTML con un orden especifico prq si no no funcionaba etc, osea todo un problema. Al principio, cuando javascript tenía la función complementaria de hacer que las páginas web fueran más interactivas, no era necesario dividir los scripts en muchos archivos, esos archivos no eran demasiado grandes. Pero en los últimos años, el papel de javascript ha crecido al igual que la cantidad de código. Entonces, la necesidad de organizar el código en archivos independientes (módulos) surge naturalmente.

    Si bien javascript no incluía una forma de cargar módulos de forma nativa, la comunidad creó bibliotecas para hacer el trabajo. Los más populares fueron:

    - Asynchronous Module Definition (AMD)
    - CommonJS (CJS)
    - Universal Module Definition (UMD)

    Pero ahora, JavaScript admite módulos de forma nativa con módulos ES6 (desde 2015). Nos centraremos en eso y dejaremos material adicional para conocer los sistemas no nativos que todavía se usan en muchas bibliotecas.
*/
/////////////////////////////////////////////////////////////

//ASI USAMOS MODULOS

// Primero creamos la logica del archivo osea lo qeuy hacermos siempre
const index = 'hola index'
const saludo = 'buenos dias'

//usamos export  al final 
export{index, saludo}

// vamos al archivo index js para seguir con la explicacion :)