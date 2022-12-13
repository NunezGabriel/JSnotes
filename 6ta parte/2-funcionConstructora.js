function auto(MARCA, MODELO, ANNIO){   // esta es la fincion constructora y todo esto va aser el template para los demas carros
    this.marca = MARCA;         //en los parametros de la funcion vamos a poner las propiedades que queramos que tenga el objeto 
    this.modelo = MODELO;       //luego dentro de la funcion usamos el this para hacer referencia al objeto que en este caso es la funcion
    this.annio = ANNIO;         //y el atributo por ejemplo marca lo igualamos al parametro marca, en la funcion constructora al poner
                                //this.marca estamos asignando/creando un atributo y este lo igualamos al parametro que querramos de nuestra funcion
}

//Para construir un objeto nuevo con relacion al template de arriba osea a la funcion constructora hacemos esto

let autoNuevo = new auto('Tesla', 'model 3', '2020') // new es un operador que va agenerar una nueva istancia de nuestra funcion constructora
let autoNuevo2 = new auto('Hyundai', 'Elantra', '2020')

autoNuevo.marca // output: Tesla
autoNuevo2.modelo// output: Elantra




 