'use strict';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;   // 400
const HEIGHT = canvas.height; // 600

let lastTime = null;

// Bat at a fixed x about 1/3 across; created by createBat() in bat.js.
const bat = createBat(Math.round(WIDTH / 3), HEIGHT / 2);

// Spacebar flaps. Ignore auto-repeat so holding space doesn't spam flaps.
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault(); // stop page scroll
    if (!e.repeat) {
      bat.flap();
    }
  }
});

// Advance game state by dt seconds.
function update(dt) {
  bat.update(dt, HEIGHT);
  // Obstacles, etc. will be updated here.
}

// Draw the current frame.
function render() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  // Background and obstacles will be drawn here, before the bat.
  bat.render(ctx);
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
