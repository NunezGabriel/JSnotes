//JEST 
/*
    JEST es un framework de testing que es el mas popular en el mundo de JS si habalmamos de testing del lado front habalamos de JEST siempre JEST
    aqui te dejo un enlace a la documentacion de JEST: https://jestjs.io/
    que es practicamente todo lo que vamos a ver en este archivo...osea vamos a seguir la documentacion
*/
///////////////////////////////////////

//Geting Started

//Primero debemos intalar JEST
/*
    Suponiendo que ya tenemos instalado npm ejecutamos el siguiente comando para isntalar jest:

    $ npm install --save-dev jest // esto consulta a una pagina oficial de npm y trae el paquete de jest lo mismo se haria con react, etc. dependiendo de lo que querramos instalar 

    Este comando debe ser ejecutado en el proyecto deseado.. cada vez que inicies otro proyecto y quieras usar JEST debes intalarlo con este comando... hay otro comando para tener JEST en general pero por ahora usaremos este que es por proyecto individual
*/

/*
    Una vez ejecutado el comando en nuestro proyecto, se crearan 2 archivos .json en el proyecto y una carpeta llamada node_modules, ahora supongamos que estamos trabajando con git es necesario que al momento de subir mi a mi repo suba la carpeta node_modules? PUES NO prq pesa un monton asi que por primera vez a fines practicos vamos/podemos usar el poderoso git ignore....solo creamos una carpeta llamada gitignore y dentro le cargamos el arvhivo node modules de esta manera: /node_modules...y ya estaria  ahora solo nos quedan nuestros archivos JSON 
*/
/*
    de los 2 archivos .json hay uno que se llama package.json ese archivo representa toda la informacioin de nuestro proyecto node disponible dentro ya hay una informacion por default que incluye JEST ya que para eso usamos el comando de arriba para traer el paquete de jest, pero si queremos hacerlo custom o de manera manual sin traer el paquete, como por ejemplo linkearle un repositorio de git pues podemos borrar la data que viene por default y poner en consola este comando

    $ npm init

    nos saldra un mensaje que diga algo como Hey! puedo ayudarte a hacer tu package.json file
    y comenzara a mostrarte topicos como:

        el nombre: ahi solo apreta enter ya que lo acomoda por defalut al nombre de la carpeta
        version: tmb apreta enter va agarrar la version que tengas intalada
        description: puedes llenarlo pero no es necesario asi que apreta enter
        entryPoint: por default agarra el index.js asi que apreta enter nomas
        test comand: apreta enter igual
        git repositori: si quieres likearlo a tu repo pues aqui copia el link del repo
        keywords: apreta enter
        autor: aca pon tu nombre el que quieras tmb puedes dejarlo en blanco
        licence: aca pon la licencia que quieras pero la mas comun es MIT

    ahora te va a mostrar todo lo que se construyo  y te va a preguntar si estas de acuerdo (y/n)?
    apretas Y y ya se escribe en el archivo, PERO ahora no tenemos lo de jest prq lo borramos recuerdas, borramos el codigo json que raia a jest.
    ahora que hacemos?? pues simple en el archivo package.json que ahora es custon buscamos la key que diga test: y esta va a tener como valor algo como "echo...etc" pues borramos eso y ponemos "jest" y luego volvemos a apretar el comando  $ npm install --save-dev jest para que se nos ponga nuestro devdependeci con la version actual  osea para volver a tener jest en nuestro package.json y asi ya tendriamos los datos custom que agregamos y el jest "RECUERDA que todo esto de hacerlo custom es opcional te puedes quedar con lo de JEST que hicimos al inicio y no pasa nada pero custom se ve mejor xd"
*/
/*
    Ahora ya tenemos instalado jest en nuestro proyecto pero como lo usamos?... pues para usarlo jest nos dice que para que tu puedas ejecutar archivos de jest sus comandos etc. entre el nombre del file y el .js del archivo donde vas a correr tur pruebas debes poner un .test osea si el archivo se llama "saludos" debes poner saludos.test.js pero naturalmente el archivo donde corres tus tests se llama tests asi que seria tests.test.js, poniendo eso jest va a detectar el archivo al que le pusimos el .test y lo va a reconocer como un evaluador y asi poder trabajar con jest en el. Puor buena practica puedes crear el para cada componente(archivos con funciones especificas) de tu proyecto un .test tipo si fuese una calculadora tienes el componente de operaciones que incluye funciones de sum,rest,mult.div
    pues a ese file de operations aparte del testing.tes.js puedes crear un operation.test.js...esto por buenas practicas !! 
*/
/*
    Ahora a diferencia de nosotros crear una funcion test, expected, equalTo y greater than .... pues JEST ya tiene esas funciones establecidas y solo debemos usarlas 🤙
    hagamos un ejemplo de testing con JEST
*/

//NO corras el codigo prq no va a funcionar ya que en este arfchivo no intalamaos jest
function sum(a,b){
    return a+b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
    Y literalmente eso seria todo a diferencia de testing en JS vanilla ... aca creamos la funcion sum que retorna la suma de 2 valores luego lllamamos a la funcion test que ya esta establecida en jest asi que solo debemos usarla que recbe 2 parametros un title/texto y un callback el callback va a llamr a la funcion expect que le pasamos como parametro la el llamado de sum osea 3 y este debe ser igual a 3 osea que este test si pasa asi qeu el output seria:

    PASS  ./sum.test.js
    ✓ adds 1 + 2 to equal 3 (5ms)

    Todo ese texto ya lo genera jest automaticamente por eso jest es una herramienta tan funcional y muy util
    - En el ejemplo podemos usar una funcion en el mismo archivo de testing o  podemos importar una funcion de una archivo que no sea de testing(esto es mas practico) y lo importariamos con import{}from() como vimos PERO esto da un pequeño problema ya que node tiene otra forma de importar asi que o podemos usar la forma de importar de node o para que import{} de js no nos de problema podemos hacer lo siguiente:

    irnos al package.json y remplazar la key/value de "test":jest con 
    "test":node --experimental-vm-modules node_modules/jest/bin/jest.js //como dice el nombre esto es experimental y seguro mas adelante lo hacen de una mejor manera asi que atento a la documentacion 📄
    
    con eso el script al ser de type module que ponemos en el html no nos va a dar ningun problema.
    y si estuvieramos usando el framework de node.js osea la forma de importar node hariamos la importacion con require(./RutaDelArchivo)
*/

/*
    Jest proporciona muchas más funciones además de test, expect, toBe y toEqual. A continuación, te mencionaré algunas de las funciones más comunes y útiles que ofrece Jest:

        Matchers: Además de toBe y toEqual, Jest proporciona una amplia gama de "matchers" (comparadores) para realizar afirmaciones más específicas sobre los valores. Algunos ejemplos son: not.toBe, toBeNull, toBeDefined, toBeGreaterThan, toContain, toMatch, entre otros. Puedes consultar la documentación oficial de Jest para ver la lista completa de matchers disponibles.

        beforeEach y afterEach: Estas funciones te permiten definir acciones que se ejecutan antes (beforeEach) o después (afterEach) de cada prueba, respectivamente. Puedes utilizarlas para configurar y limpiar el estado necesario para cada prueba.

        beforeAll y afterAll: Estas funciones te permiten definir acciones que se ejecutan antes (beforeAll) o después (afterAll) de todas las pruebas en un bloque. Puedes utilizarlas para realizar configuraciones o tareas que solo necesitan ejecutarse una vez, en lugar de repetirse para cada prueba.

        describe: Permite agrupar pruebas relacionadas en bloques descriptivos. Puedes utilizar describe para organizar tus pruebas de manera más estructurada y legible.

        Mock Functions: Jest proporciona funciones de simulación (mock functions) que te permiten simular el comportamiento de funciones y objetos para realizar pruebas más controladas. Algunas funciones relacionadas son: jest.fn(), jest.spyOn(), jest.mock(), entre otras.

        Snapshots: Jest tiene una funcionalidad de "snapshots" que te permite capturar el resultado actual de una salida (por ejemplo, un componente de React) y compararla automáticamente con una versión anterior. Esto facilita la detección de cambios inesperados en la salida de tus componentes.
*/

/*
    - Recordar que todas estas funciones de testing tmb nos van a ayudar a validar/testear cosas de frontend ya tienes que tu crear la logica para hacerlo
    - Hago incapie en ver la documentacion ahi esta muy bien explicado y de una manera mas "sencilla" a parte de que siemopre va a estar actualizada y estas notas no
    aqui te vuelvo a deajr la documentacion: https://jestjs.io/docs/getting-started
*/