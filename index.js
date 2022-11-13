//inventario

let espiritu = 0;

let inventario = [0,0,0,0,0,0];

console.log(inventario)

let inventarioProduccion = [1,10,15,20,25,30];

let precioProduccion = [50,100,150,200,250,300];


//Imagen principal

 let clicker = document.getElementById("imagen");

 clicker.onclick = function(){
    espiritu++ ;
    };
 
//funcion para que el evento onclick
  
    function comprar(objeto) {
 
        inventario[objeto]++;
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

},1000/FPS);