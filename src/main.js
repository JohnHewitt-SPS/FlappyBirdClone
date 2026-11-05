'use strict';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;   // 400
const HEIGHT = canvas.height; // 600

let lastTime = null;

// Advance game state by dt seconds.
function update(dt) {
  // Game entities (bat, obstacles, etc.) will be updated here.
}

// Draw the current frame.
function render() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function loop(timestamp) {
  if (lastTime === null) {
    lastTime = timestamp;
  }
  // Clamp dt so a backgrounded tab doesn't produce a huge jump on return.
  const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
  lastTime = timestamp;

  update(dt);
  render();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
