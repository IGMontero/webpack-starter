const p5 = require('p5');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Constants
const unitX = 5;
const unitY = 5;

// Variables
let mouseX;
let mouseY;

window.onload = init;

function init() {
  canvas.style.width = window.innerWidth;
  canvas.style.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  keyBindings();

  render();
}

function render() {
  ctx.fillStyle = '#fff';
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw next frame
  draw();

  setTimeout(() => {
    requestAnimationFrame(render);
  }, 10);
}

function keyBindings() {
  window.addEventListener('mousemove', evt => getMousePos(canvas, evt));
}

function draw() {
}

// Utility functions

function getMousePos(canvasEl, evt) {
  var rect = canvasEl.getBoundingClientRect();

  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;

  mouseX = x;
  mouseY = y;
}
