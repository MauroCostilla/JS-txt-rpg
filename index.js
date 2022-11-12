

let espiritu = 0;

let inventario = [0,0,0,0,0,0];

let inventarioProduccion = [1,10,15,20,25,30];

let precioProduccion = [50,100,150,200,250,300];

function click(){
    espiritu++;
};

function render(){
    document.getElementById("contador").innerHTML = espiritu;
}











//-------------------------------------------------

let FPS = 30;

setInterval(function(){

    render();

},1000/FPS);
