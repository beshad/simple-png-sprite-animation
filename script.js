let x = window.innerWidth / 2
let r = 40
let step = 0
let vx = r * 0.2

const animate = () => {
  draw()
  update()
  requestAnimationFrame(animate)
}

let sprites = new Image()
sprites.onload = animate
sprites.src = 'sprite.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext("2d")

canvas.width = window.innerWidth * window.devicePixelRatio
canvas.height = window.innerHeight * window.devicePixelRatio
context.fillStyle = "#f66"

let draw = () => {
  context.fillRect(0, 0, window.innerWidth, window.innerHeight) // clear canvas
  drawShell(x, window.innerHeight, r, Math.floor(step))
}

let drawShell = (x, y, r, step) => {
  let s = r / 12
  context.drawImage(sprites, 32 * step, 0, 32, 32, x - 16 * s, y - 26 * s, 32 * s, 32 * s)
}

let update = () => {
  x += vx
  if(x < r || x > window.innerWidth - r) {
    vx *= -1
  }
  step += 0.3
  if(step >= 12) step -= 12
}
