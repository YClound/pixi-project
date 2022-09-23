import { app } from './app.js';

export const container = function() {
  const id = app.loader.resources['/json/pixi.json'].textures;
  const cat = new PIXI.Sprite(id['0.png']);
  cat.x = 16;
  cat.y = 16;
  // app.stage.addChild(cat);
  

  const hedgehog = new PIXI.Sprite(id['1.png']);
  hedgehog.x = 32;
  hedgehog.y = 32;
  // app.stage.addChild(hedgehog);

  const tiger = new PIXI.Sprite(id["6.png"]);
  tiger.position.set(48, 48);
  // app.stage.addChild(tiger);
  

  const animals = new PIXI.Container();
  animals.addChild(cat);
  animals.addChild(hedgehog);
  animals.addChild(tiger);

  animals.position.set(0, 0);
  // animals.width = 120;
  // animals.height = 120;

  console.log(animals.children, animals.width, animals.height);
  console.log('cat:', cat.x, cat.width, cat.height, animals.toGlobal(cat.position), cat.parent.toGlobal(cat.position));
  console.log('tiger:', tiger.getGlobalPosition(), tiger.toLocal(tiger.position, hedgehog))

  app.stage.addChild(animals);
}