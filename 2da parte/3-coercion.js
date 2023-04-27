//COERCION

/////////////////////////////////////////////////////////

/*
Como vimos antes js es un lenguaje debilmente tipado osea que a diferencia de .py u otros lenguajes fuertemente tipados al hacer operaciones con datos de distintos tipos como string con number no nos da error si no que en caso de string multiplicado por number el lenguaje convierte el string en numero para asi poder o operarlo ejmplos:
*/
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3

/////////////////////////////////////////////////////////
/*
Hay 2 tipos de coercion
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor como arriba.

Coerción explicita = es cuando obligamos a que cambie el tipo de valor. 

Para la coercion explicita podemos utilizar primero la funcion de JS typeof() para saber de que tipo de valor es una varibale luego viene lo importatne para convertir cualquier tipo de valor a string usamos la funcion String()  y lo mismo para convertir cualquier tipo de valor a number usamos la funcion Number()  tmb podemos usar la funcion Parseint() para convertir a number
*/
/////////////////////////////////////////////////////////
let x = 222;
let y = x + "hs"; //es string => "222hs"
let c = "32"
let z =  String(x) // esto convierte a x en string => "222"
let a = Number(z) // esto convierte a z en number => 222
let b = parseInt(c)// tmb podemos usar esto para convertir a number pero tiene un dato curioso
// Ultimamente lo mejor es usar los parse(int float string) prq los otros aveces dan error

//////////////////////////////////////////////////////////

/*
🔴 ParseInt vs Number

    ParseInt: Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado. Ejemplo:
        parseInt(“123hui”) //123

    Number: Busca convertir toda la cadena en un número, por lo que al  encontrarse con un elemento que no sea diginto nos dara como resultado NaN. Ejemplo:
        Number(“123hui”) //NaN

    Importante acotar que parseInt en este caso puede parsear“123” porque están empezando en el string , porque de otra manera si “123” está despues de “hui” el resultado sería NaN. Ej:
        parseInt(“123hui”) = 123
        parseInt(“hui123”) = NaN
*/