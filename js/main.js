import { app } from './app.js';
import { move } from './move.js';
import { spriteBase } from './base.js';
import {container } from './container.js';

export const main = function() {
  app
    .loader
    .add(['/images/09.png', '/images/img1.png', '/json/pixi.json'])
    .load(function () {
      spriteBase();
      move();
      container();
    })
}