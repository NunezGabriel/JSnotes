//SENTENCIAS ESPECIALES MUY USADAS EN BUCLES

// BREAK
//Break termina la sentencia en seco myormente se usa con una condicion ejem

number = 0;
while(number<1000){
    number++
    console.log(number)
    if(number == 10){
        break
    }
}
// aca el break romperia el bucle cuando number sea igual a 10

// CONTINUE
//Continue lo que hace es "saltarse" una iteracion del bucle es lo mismo que el break pero no rompe el 
//bucle ejemplo:

for(let i = 0;i<10;i++){
    console.log(i)
    if(i == 4){
        continue // aca va a skipear el 4 cuando i == 4 
    }
} // output: 1 2 3 5 6 7 8 9 10

// LABEL

/*
    label nos permite asociar un bucle a un nombre para poder terminarlo cuando queramos ejm:
*/
let array1 = ['maria', 'roberta']
let array2 = ['pedro', 'marcelo', array1, 'juan'] // aca tenemos 2 arrays

Gamer:
for(let array in array2){
    console.log(array)
    if(array == 2){
        for(let array of array1){
            console.log(array)
            break Gamer
        }
    }
}

/*
    aca entiende primero es codigo primero se itera el array 1
    llega al elemnto 2 que es un array y lo itera una vez y se ejecuta un break 
    pero ese break tiene algo especial no? pues si lo que tiene es un label 
    que es ese label pues es el label que le pusimos a nuestro for principal 
    el que encierra al for dentro del if  y pues lo que hace es que 
    despues de recorer una vez el array2 se corte el for grande o mejor dicho
    el for que tenga el label Gamer 
*/