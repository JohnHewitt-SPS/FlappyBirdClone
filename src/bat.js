'use strict';

// Bat physics tuning (pixels, seconds).
const BAT_GRAVITY = 1500;         // px/s^2, downward
const BAT_FLAP_VELOCITY = -450;   // px/s, set (not added) on flap

// Bat hitbox size (axis-aligned box centered on bat.x, bat.y).
const BAT_WIDTH = 34;
const BAT_HEIGHT = 24;

// Create a bat centered at (x, y). x stays fixed; only y moves.
function createBat(x, y) {
  return {
    x: x,
    y: y,
    vy: 0,
    width: BAT_WIDTH,
    height: BAT_HEIGHT,

    flap() {
      this.vy = BAT_FLAP_VELOCITY;
    },

    // Apply gravity, move, and clamp inside [0, worldHeight].
    update(dt, worldHeight) {
      this.vy += BAT_GRAVITY * dt;
      this.y += this.vy * dt;

      const halfH = this.height / 2;
      if (this.y - halfH < 0) {
        this.y = halfH;
        this.vy = 0;
      } else if (this.y + halfH > worldHeight) {
        this.y = worldHeight - halfH;
        this.vy = 0;
      }
    },

    // Placeholder art: dark body with two wing triangles and eyes.
    render(ctx) {
      const { x, y, width: w, height: h } = this;

      // Wings (drawn first, behind the body).
      ctx.fillStyle = '#3a2f4a';
      ctx.beginPath();
      ctx.moveTo(x - w * 0.15, y - h * 0.1);
      ctx.lineTo(x - w * 0.5, y - h * 0.5);
      ctx.lineTo(x - w * 0.4, y + h * 0.3);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x + w * 0.15, y - h * 0.1);
      ctx.lineTo(x + w * 0.5, y - h * 0.5);
      ctx.lineTo(x + w * 0.4, y + h * 0.3);
      ctx.closePath();
      ctx.fill();

      // Body.
      ctx.fillStyle = '#5a4a6e';
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.2, h * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Eyes.
      ctx.fillStyle = '#ffdd55';
      ctx.fillRect(x - 4, y - 4, 2, 2);
      ctx.fillRect(x + 2, y - 4, 2, 2);
    },
  };
}
