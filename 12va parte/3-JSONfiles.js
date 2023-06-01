// INTERACCION CON JSON EN GENERAL EN JS
/*
    Aca veremos como podemos interactuar con archivos JSON que tengamos en local desde JS con metodos de parseo etc y para traerlos usaremos fetch y para trabajar en base a esos datos usaremos lo metodos que veremos a continuacion, JSON es el formato estandar para intercambio y almacenamiento de datos
*/
//////////////////////////////////////////
// Imaginemos que tenemos un archivo JSON afuera de nuestro archivo JS o un array con un JSON en su interior dentro del archivo JS, lo que queremos es interactuar con el archivo JSON y asi lo hacemos:

// PRIMER CASO(JSON en el mismo archivo) -> no es comun a nivel laboral

// en una aplicacion web los datos JSON se reciben como string

const cars = `[
    {
        "modelo": "Ford Mustang",
        "produccion": 2010,
        "millaje": 32000
    },
    {
        "modelo": "Tesla S Model",
        "produccion": 2019,
        "millaje": 15000
    },
    {
        "modelo": "Hyundai Elantra",
        "produccion": 2020,
        "millaje": 12000
    }
]`

// Para convertir el string en un objeto JS y asi poder trabajarlo desde aqui usamos el metodo parse

const jsonData = JSON.parse(cars) // aca ya lo tendriamos como un objeto JS y asi trabajarlo

// Despues ya como objeto podemos manipularlo como queramos

const carrosNuevos = jsonData.filter(carro => carro.produccion > 2010 && carro.millaje < 30000)
console.log(carrosNuevos)

// Ahora para convertir los datos en string con formato JSON usamos el metodo stringify

const newCars = JSON.stringify(carrosNuevos)

// y ya estaria ya sabriamos casi todo de JSON files

/*
    RECAPT AND MORE DATA

    - JSON.parse() al usar fecth no es necesario, si en el fecth estas aplicando un .json() ya que este metodo aparte de extraer los datos les hace un parse por default acercandodse a algo mas profecional ya que aca estamos trabajando con un JSON que esta  en el mismo JS pero con fetch lo traemos desde un archivo JSON 
    - recapituclaion rapida:
        . JSON.parse() convierte el JSON/string en un objeto de JS este se pude obviar al usar fetch y tener dentro el metodo .json() ya que este extrae los datos y hace un fetch por default
        . JSON.stringify() convierte el objeto JS en string con formato JSON osea que no es como hacerle un simple toString que eso lo hace string nomas con stringify aparte de hacerlo string lo hace un string con formato JSON 
        . la web solo acepta strings por eso usamos stringify y por eso el local storage(cosa que vemos en el siguiente modulo) solo hacepta strings
        . para traer datos del archivo JSON usamo fetch con el metodo GET y para meterle datos podemos usar POST lo mismo con los otros metodos DELETE y PUT
*/
