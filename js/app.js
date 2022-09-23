let type = 'WebGL';
if (!PIXI.utils.isWebGLSupported()) {
  type = 'Canvas';
}

PIXI.utils.sayHello(type)

export const app = new PIXI.Application({
  width: 360,
  height: 360,
  antialias: true,    // default: false 反锯齿
  transparent: false, // default: false 透明度
  resolution: 1,
});

app.renderer.backgroundColor = 0xFFF6DD;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);

export const loadTexture = function (path) {
  return new Promise((resolve) => {
    app.loader
      .add(path)
      .load(function () {
        const texture = app.loader.resources[path].texture;

        // 移除图片
        // image1.visible = false;
        // app.stage.removeChild(image1);
        resolve(texture);
      })
  })
}

