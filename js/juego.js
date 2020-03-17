var canvas;
var ctx;
var FPS = 50;
var imgRex;

function inicializa(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  //CARGAR IMAGEN FRAN XD
  imgRex = new Image();
  imgRex.src = 'img/wolder.png';

  setInterval(function(){
    principal()
  },1000/FPS);
}
function choose(character){
  switch(character){
    case 1:
      imgRex.src = 'img/wolder1.png';
    break;
    case 2:
      imgRex.src = 'img/dracorfs.png';
    break;
    case 3:
      imgRex.src = 'img/fausto.png';
    break;
    case 4:
      imgRex.src = 'img/gonza.png';
    break;
}
}

var protagonista = function(x,y){
  this.x = x;
  this.y = y;
  this.velocidad = 3;

  this.dibuja = function(){
    ctx.drawImage(imgRex, this.x, this.y);
  }

  this.arriba = function(){
    this.y -= this.velocidad;
  }

  this.abajo = function(){
    this.y += this.velocidad;
  }

  this.izquierda = function(){
    this.x -= this.velocidad;
  }

  this.derecha = function(){
    this.x += this.velocidad;
  }
}

var personaje = function(x,y){
  this.x = x;
  this.y = y;
  this.derecha = true;

  this.dibuja = function(){
    ctx.fillStyle = '#800080';
    ctx.fillRect(this.x, this.y, 50,50);
  }

  this.mueve = function(velocidad){

    if (this.derecha == true) {
      if (this.x < 1250)
        this.x+=velocidad;
      else {
        this.derecha = false;
      }
    }
    else {
      if(this.x > 50)
      this.x-=velocidad;
      else {
        this.derecha = true;
      }
    }
  }
}

var per1 = new personaje(10,50);
var per2 = new personaje(10,120);
var per3 = new personaje(10,230);

var prota = new protagonista(630,300);

document.addEventListener('keydown', function(tecla){
  //ARRIBA
  if(tecla.keyCode ==38){
    prota.arriba();
  }
  //ABAJO
  if(tecla.keyCode ==40){
    prota.abajo();
  }
  //IZQUIERDA
  if(tecla.keyCode ==37){
    prota.izquierda();
  }
  //DERECHA
  if(tecla.keyCode ==39){
    prota.derecha();
  }

})

function principal(){
  borraCanvas();
  per1.dibuja();
  per2.dibuja();
  per3.dibuja();

  per1.mueve(10);
  per2.mueve(3);
  per3.mueve(7);

  prota.dibuja();
};

function borraCanvas() {
  canvas.width= 1345;
  canvas.height= 400;
}
