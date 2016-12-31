var canvas, ctx;

window.onload = function main() {
  canvas = document.createElement("canvas");
  canvas.width = canvas.height = 200;
  ctx = canvas.getContext("2d");
  
  document.body.appendChild(canvas);
  
  init();
  tick();
  
}

function init() {
  
}

function tick() {
  window.requestAnimationFrame(tick);
  
  update();
  render();
}

function update() {
  
}

function render() {
  
}