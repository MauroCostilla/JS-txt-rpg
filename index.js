
//inventario

let espiritu = 0;

let inventario = [0,0,0,0,0,0];

let inventarioProduccion = [1,10,15,20,25,30];

let precioProduccion = [50,100,150,200,250,300];

let ayudantes = [0,0];

//ayudantes (objetos)

const orbe = {
    coste: (8000),
    produccion: (2),

}

const yokai = {
    coste: (15000),
    produccion: (3),
}

//botones de producción (Dom)





//Imagen principal

 // DOM


 
//funcion para  el evento onclick
  
    function comprar(objeto) {

        if(espiritu >= precioProduccion[objeto]){
            
            inventario[objeto]++;

            espiritu -= precioProduccion[objeto];
        }
        else{
            alert("no tenes suficiente espiritu")
        }
 
        
    }

//funcion para pruduccion automatica

function producir() {
    for(contador=0; contador < inventario.length;contador++){
        
        espiritu += inventario [contador] * inventarioProduccion[contador];
        espiritu += ayudantes [0] * orbe.produccion
        espiritu += ayudantes [1] * yokai.produccion
    }
}

//contador

function render(){
    //Dom
}


//-------------------------------------------------

let FPS = 30;

setInterval(function(){

    render();
    producir()

},1000/FPS);