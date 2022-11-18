
//inventario

let espiritu = 0;

let inventario = [0,0,0,0,0,0];

let inventarioProduccion = [1,10,15,20,25,30];

let precioProduccion = [50,100,150,200,250,300];


//botones de producción

let prueba1 = document.getElementById("elemento1");


prueba1.addEventListener("click",comprar(0))



//Imagen principal

 let clicker = document.getElementById("imagen");

 clicker.onclick = function(){
    espiritu++ ;
    }
 
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
    }
}

//contador

function render(){
    document.getElementById("contador").innerHTML = espiritu;
    document.getElementById("inventario").innerHTML = inventario;
}


//-------------------------------------------------

let FPS = 30;

setInterval(function(){

    render();
    producir()

},1000/FPS);