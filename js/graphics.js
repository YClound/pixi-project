import { app } from './app.js';

export const graphics = function () {
  // 正方形
  const rectangle = new PIXI.Graphics();
  rectangle.beginFill(0x66CCFF);
  rectangle.lineStyle(4, 0xFF3300, 1);
  rectangle.drawRect(0, 0, 100, 50);
  rectangle.endFill();
  rectangle.x = 120;
  rectangle.y = 0;
  app.stage.addChild(rectangle)

  // 圆形
  const circle = new PIXI.Graphics();
  circle.beginFill(0x9966FF);
  circle.drawCircle(0, 0, 50); // 半径
  circle.endFill();
  // 圆的x和y表示的是圆中心点
  circle.x = 175;
  circle.y = 105;
  app.stage.addChild(circle);

  // 椭圆形
  const ellipse = new PIXI.Graphics();
  ellipse.beginFill(0xFFFF00);
  ellipse.drawEllipse(170, 175, 50, 20); // 半径
  ellipse.endFill();
  // 椭圆的x和y表示的是圆中心点
  // ellipse.x = 170;
  // ellipse.y = 175;
  app.stage.addChild(ellipse);

  // 圆角矩形
  const roundBox = new PIXI.Graphics();
  roundBox.lineStyle(4, 0x99CCFF, 1);
  roundBox.beginFill(0xFF9933);
  roundBox.drawRoundedRect(0, 0, 100, 50, 10)
  roundBox.endFill();
  roundBox.x = 225;
  roundBox.y = 0;
  app.stage.addChild(roundBox);

  // 线条
  const line = new PIXI.Graphics();
  line.lineStyle(4, 0xFFFFFF, 1);
  line.moveTo(225, 100);
  line.lineTo(325, 100);
  // line.x = 32;
  // line.y = 32;
  app.stage.addChild(line);

  // 多边形
  const triangle = new PIXI.Graphics();
  triangle.beginFill(0x66FF33);
  triangle.drawPolygon([
    275, 125, // 第一个点
    325, 190, // 第二个点
    225, 190 // 第三个点
  ]);
  triangle.endFill();
  // x,y相对第一个点的位移
  triangle.x = -10;
  triangle.y = -10
  app.stage.addChild(triangle);

  // 文字
  const style = new PIXI.TextStyle({
    fontSize: 36,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  const message = new PIXI.Text('Hello PIXI!', style);
  message.position.set(325, 0);

  app.stage.addChild(message);
}