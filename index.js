
window.onload = load


//api para el trabajo final.-



//storage  

function load(){
    if (localStorage.getItem("espiritu")){
        espiritu = JSON.parse(localStorage.getItem("espiritu"))
        inventario= JSON.parse(localStorage.getItem("inventario"))
        precioProduccion= JSON.parse(localStorage.getItem("precioProduccion"))
    }
    else{
        espiritu = 0;
        
    }

}

//inventario

let espiritu = 0;

let inventario = [0,0,0,0,0,0];

let inventarioProduccion = [0.1,0.5,1,3,10,15];

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


//botones de produccion

document.getElementById("guardar").onclick = function() {
    localStorage.setItem("espiritu",JSON.stringify(espiritu) );
    localStorage.setItem("precioProduccion",JSON.stringify(precioProduccion) );
    localStorage.setItem("inventario",JSON.stringify(inventario) );
    Toastify({

        text: "Guardado con éxito",
        
        duration: 2000,

        style: {
            background: "blue",
          },
        
        }).showToast();
    
}


document.getElementById("elemento1").onclick = function() {
    comprar(0);
}
document.getElementById("elemento2").onclick = function() {
    comprar(1);
}
document.getElementById("elemento3").onclick = function() {
    comprar(2);
}
document.getElementById("elemento4").onclick = function() {
    comprar(3);
}


//Imagen principal

document.getElementById("imagen").onclick = function(){
    espiritu++;
    }

 
 
//funcion para  el evento onclick
  
    function comprar(objeto) {

        if(espiritu >= precioProduccion[objeto]){
            
            inventario[objeto]++;

            Toastify({

                text: "Compra realizada!",
                
                duration: 2000,

                style: {
                    background: "green",
                  },
                
                }).showToast();

            espiritu -= precioProduccion[objeto];

            precioProduccion[objeto] += precioProduccion[objeto]*(50/100);  
        }
        else{
            Toastify({

                text: "No tienes suficiente espiritu",
                
                duration: 2000,

                style: {
                    background: "red",
                  },
                
                }).showToast();
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
    document.getElementById("contador").innerHTML = Math.trunc(espiritu);
    document.getElementById("inventario").innerHTML = "Inventario "+inventario+""; 
    document.getElementById("elemento1").innerHTML= Math.trunc(precioProduccion[0])
    document.getElementById("elemento2").innerHTML= Math.trunc(precioProduccion[1])
    document.getElementById("elemento3").innerHTML= Math.trunc(precioProduccion[2])
    document.getElementById("elemento4").innerHTML= Math.trunc(precioProduccion[3])
    
}


//-------------------------------------------------

let FPS = 30;

setInterval(function(){

    render();
    producir()
fetch("https://criptoya.com/api/dolar")
    .then(response => response.json () )
    .then (({solidario,oficial,blue}) =>{
        document.getElementById('dolar').innerHTML = `oficial ${oficial} - Solidario: ${solidario} - blue: ${blue}`
    })
    
},1000/FPS);

//-----------


    





