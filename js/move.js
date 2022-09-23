import { app } from './app.js'
import { keyboard } from './keyboard.js';

export const move = function () {
  let rocket, state, box;

  function gameLoop(delta) {
    state(delta);
  }

  function play() {
    rocket.x += rocket.vx;
    rocket.y += rocket.vy;

    if (hitTestRectangle(rocket, box)) {
      message.text = 'hit';
      box.tint = 0xff3300;
    } else {
      message.text = 'not hit ...';
      box.tint = 0xccff99;
    }
  }

  function keyInit() {
    const left = keyboard('ArrowLeft');
    const right = keyboard('ArrowRight');
    const up = keyboard('ArrowUp');
    const down = keyboard('ArrowDown');

    left.release = right.release = up.release = down.release = () => {
      rocket.vx = 0;
      rocket.vy = 0;
    }

    left.press = () => {
      rocket.vx = -1;
    }

    right.press = () => {
      rocket.vx = 1;
    }

    up.press = () => {
      rocket.vy = -1;
    }

    down.press = () => {
      rocket.vy = 1;
    }
  }

  function hitTestRectangle(r1, r2) {
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
    hit = false;

    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.x + r2.height / 2;


    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    if (Math.abs(vx) < combinedHalfWidths) {
      if (Math.abs(vy) < combinedHalfHeights) {
        hit = true;
      } else {
        hit = false
      }
    } else {
      hit = false;
    }

    return hit;
  }

  box = new PIXI.Graphics();
  box.beginFill(0x66CCFF);
  box.lineStyle(4, 0xFF3300, 1);
  box.drawRect(0, 0, 100, 50);
  box.endFill();
  app.stage.addChild(box);


  const message = new PIXI.Text('not hit...');
  message.position.set((window.innerWidth / 2) - (message.width / 2), 0);
  app.stage.addChild(message);

  const rocketTexture = app.loader.resources['/images/09.png'].texture;
  const rectangle = new PIXI.Rectangle(96, 0, 32, 32);
  rocketTexture.frame = rectangle;

  rocket = new PIXI.Sprite(rocketTexture);
  rocket.vx = 0;
  rocket.vy = 0;

  rocket.position.set(window.innerWidth / 2, window.innerHeight / 2);
  app.stage.addChild(rocket);

  keyInit();

  state = play;

  app.ticker.add(delta => gameLoop(delta));
}