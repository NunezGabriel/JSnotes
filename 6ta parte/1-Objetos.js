let persona = {
    altura: 180,
    peso: 70,
    cabello: 'castaño',
    piel: 'morena',

    saludar: function(nombre){
        console.log(`Hola, ${nombre} `)
    },

    decirPelo: function(){
        console.log(`El color de mi pelo es ${this.cabello}`) /*this hace referencia al objeto osea es lo mismo que poner
        persona.cabello pero con this es mas dinamico asi si tenemos que usar el mismo codigo en otro objeto no lo 
        cambiaremos manualmente (no ponemos simplemente cabello prq en objetos no funciona asi como una varibale normal) */
    }

}

persona.saludar('juan')
persona.decirPelo()