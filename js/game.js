let canvas
let ctx
let FPS = 50
let imgPlayer = new Image
let imgEnemy = [new Image, new Image, new Image]

function initialize() {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  // enemy images loading
  imgEnemy[0].src = 'img/murloc0.png'
  imgEnemy[1].src = 'img/murloc1.png'
  imgEnemy[2].src = 'img/murloc2.png'
  
  swal('DEIOZ-head', 'Seleccione uno de los personajes en la parte superior para comenzar a jugar :D', 'info')

  setInterval( () => main(), 1000/FPS )
}

function choose(character) {
  switch(character){
    case 1:
      imgPlayer.src = 'img/wolder.png'
    break
    case 2:
      imgPlayer.src = 'img/dracorfs.png'
    break
    case 3:
      imgPlayer.src = 'img/fausto.png'
    break
    case 4:
      imgPlayer.src = 'img/gonza.png'
    break
  }
  swal('DEIOZ-head', 'Muevete con las flechas del teclado (o WASD) para llegar al cofre esquivando los murlocs!', 'info')
}

const player = function(x,y) {
  this.x = x
  this.y = y
  this.speed = 6

  this.draw = () => ctx.drawImage(imgPlayer, this.x, this.y)

  this.up = () => this.y -= this.speed

  this.down = () => this.y += this.speed

  this.left = () => this.x -= this.speed

  this.right = () => this.x += this.speed
}

const character = function(num, x, y) {
  this.x = x
  this.y = y
  this.right = true

  this.draw = () => ctx.drawImage( imgEnemy[num], this.x, this.y)

  this.move = (speed) => {
    (this.down === true)
      ? (this.y < 280)
          ? this.y += speed
          : this.down = false
      : (this.y > 1)
          ? this.y -= speed
          : this.down = true
  }
}

const char1 = new character(0, 300, 50)
const char2 = new character(1, 700, 120)
const char3 = new character(2, 1000, 230)

const currentPlayer = new player(10,160)

// player movement
document.addEventListener('keydown', (key) => {
  switch(key.keyCode){
    case 38:
      currentPlayer.up()
      break
    case 87:
      currentPlayer.up()
      break
    case 40:
      currentPlayer.down()
      break
    case 83:
      currentPlayer.down()
      break
    case 37:
      currentPlayer.left()
      break
    case 65:
      currentPlayer.left()
      break
    case 39:
      currentPlayer.right()
      break
    case 68:
      currentPlayer.right()
      break
  }
})

function clearCanvas() {
  canvas.width = 1345
  canvas.height = 420
}

function main() {
  clearCanvas()
  char1.draw()
  char2.draw()
  char3.draw()

  char1.move(6)
  char2.move(4)
  char3.move(7)

  currentPlayer.draw()
}