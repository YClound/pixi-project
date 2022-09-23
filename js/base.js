import { app } from './app.js';

export const spriteBase = function () {
  const texture = app.loader.resources['/images/img1.png'].texture;
  const image = new PIXI.Sprite(texture)
  // image.x=10;
  // image.y=10;
  image.position.set(10, 500);

  image.scale.set(0.1)
  // image.width = window.innerWidth;
  // image.height = window.innerHeight;

  image.anchor.set(0.5, 0.5);
  image.rotation = 0.5;
  image.pivot.set(32, 32)

  app.stage.addChild(image)
}