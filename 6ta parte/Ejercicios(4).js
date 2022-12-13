
function autos(MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO
}

let autosContainer = []

for(let i = 0; i<30; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autosContainer.push(new autos (marca, modelo, annio));
}

for(let i = 0 ; i < autosContainer.length ; i++){
    console.log(`su auto es ${autosContainer[i]}`);
}