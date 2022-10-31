//Nombre del jugador.
let nombreJugador = prompt("Hola aventurero, los dioses solicitan su nombre.")
alert("asi que...  " + nombreJugador)
alert("los dioses se preguntan si al fin lo encontraron...")
alert("los dioses solicitan algunos datos para determinar el camino que recorrera su espiritu a lo largo de la travesia.")
let edad = parseInt(prompt("Empezemos por su edad. (El dios de las mentiras observa sonrriente)(El dios de la verdad observa con intriga)"))
let nacimiento = parseInt(prompt("El dia de nacimiento es importante para determinar la fuerza lunar y/o solar sobre su destino. Por favor diganos su dia de nacimiento. "))

//clase del jugador
const numero = edad + nacimiento

if (numero > 50){
    alert("Impresionante. Aventurero, fuiste bendecido por la luna. Tu alma cargada de mana, seguira el camino de la magia")
    alert("Antes de comenzar su viaje, debe aprender lo basico")
    let entrenar = prompt("un libro antiguo y pesado se acerca hasta estar justo frente tuyo. En sus hojas, las intrucciones de como absorver manar se asoman ¿desea intentarlo? (ponga 2 para continuar) ")
    while(entrenar == 2){
    alert("poco a poco, el mana se va arremolinando en tu interior. Te sientes mas fuerte")
     entrenar = prompt ("seguir entrenando? ponga 2 para continuar")
    }
}


else{alert("interesante. aventurero, su alma fue bendecida por el sol. El sendero del guerrero es el mas adecuado para usted")
    alert("Antes de comenzar su viaje, debe aprender lo basico")
    let entrenar = prompt("una espada brota desde el suelo, con ella una sombra que la sostiene. Inmediatamente, la sombra comienza a agitar la espada haciendo cortes en el aire. Pronto te das cuenta que te esta enseñando. ¿desea intentarlo? (ponga 1 para continuar) ")
    while(entrenar == 1){
    alert("poco a poco, tu cuerpo se adapta a los movimientos. Te sientes mas fuerte")
    entrenar = prompt ("seguir entrenando? ponga 1 para continuar")
    }
}
    
