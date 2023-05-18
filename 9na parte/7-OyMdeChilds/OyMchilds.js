//OBTENCION Y MODIFICACION DE CHILDS

/*
    Aca veremos metodos para obtener y modificar los elemtnos childs recordar que childs son los elemtnos hijos osea:
    <div>
        <p></p> ======> este es un child
    </div>
*/

const contenedor = document.querySelector('.contenedor')

contenedor.firstChild//devuelve el primer hijo
contenedor.lastChild//devuelve el ultimo hijo 

//hay un pequeño problema con los 2 de arriba y es que si al nosotros ponerle identacion a los elmentos hijos en el html el codigo lo interpreta como texto el espacio en blanco que dejamos y en vez de retornarnos objectHeadin si es un h1 no ta objectText para resolver ese problema solo debemos quitar la identacion y ya nos retornaria el elemnto deseado

contenedor.firstElementChild //devuelve el primer hijo PERO ahora si el que queremos osea el elemnto sin tener que quitar la identacion...este es mejor que firstChild
contenedor.lastElementChild // igual que firstElementChild pero da el ultimo

contenedor.childNodes //devuelve TODOS los nodos hijos hasta los textos de identacion de los que hablamos antes ... nos los retorna todos en una NODELSIT que OJO apresar de que se parecen una nodelist NO es lo mismo que un array asi que no le funcionan metodos como push pero si recorerlo prq es un objeto con forEach y otros

contenedor.children //al igual qeu arriab devuelve todos los hijos pero sin los elemtnos texto osea solo devuelve las etiquetas html lo que hace que sea mejor que childNodes...nos lo retorna en un HTMLcolecction que es diferente al nodelist, NO lo podemos recorrer con un forEach pero si con un for of 