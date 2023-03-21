## 1. getContext 创建上下文
* beginPath(); 开启新路径
* closePath(); 用来关闭一条路径

## 基础绘制形状
* 矩形
  1. rect(x,y, width, height)
  2. strokeRect(x, y, width, height)
  3. fillRect(x,y, width, height)
* 圆弧和圆
  > ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  > x，y 为圆弧中心或圆的圆心坐标、
  > radius 为圆弧的半径或圆的半径、
  > startAngle 为圆弧或圆的起始点，从x轴方向开始计算，且单位为弧度; 弧度 = 角度 * Math.PI / 180
  > endAngle 为圆弧或圆的终点，单位也是为弧度
  > anticlockwise 是一个可选参数，可选值为Boolean类型，用它来表示圆弧或圆的绘制方向，默认为false，顺时针绘制圆弧或圆。
* 椭圆
  > ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
  > x、y：椭圆的圆心坐标
  > radiusX：x轴的半径大小
  > radiusY：y轴的半径大小
  > rotation：椭圆的旋转角度，也是以弧度表示
  > startAngle：开始绘制点
  > endAngle：结束绘制点
  > anticlockwise：可选参数，表示绘制的方向（默认顺时针）。

* 直线
  > moveTo(x,y) 设置初始位置，参数为初始位置x和y的坐标点
  > lineTo(x,y) 设置指定位置，参数为指定位置x和y的坐标点
  1. 样式
  > lineWidth 设置直线的粗细，默认值为1，且属性值必须为正数
  > lineCap 设置直线端点显示的样式。可选值为：butt，round 和 square。默认是 butt
  > lineJoin 设置两线段连接处所显示的样子。可选值为：round, bevel 和 miter。默认是 miter
  > miterLimit 设置当两条线相交时交接处最大长度
  > setLineDash([2, 4]) 设置虚线样式 设置虚线实线的长度 2-实线长 4-虚线长（一组描述交替绘制线段和间距（坐标空间单位）长度的数字 长度是偶数）。
  > getLineDash 返回虚线设置的样式，长度为非负偶数的数组。
  > lineDashOffset 设置虚线样式的起始偏移量

* 二次贝塞尔曲线
  > quadraticCurveTo(cp1x, cp1y, x, y)
  > cp1x和cp1y为控制点坐标
  > x和y为结束点坐标
* 三次贝塞尔曲线
  > ctx.bezierCurveTo(cp1x,cp1y, cp2x,cp2y, x, y
  > cp1x和cp1y为第一个控制点坐标
  > cp2x和cp2y为第二个控制点坐标
  > x和y为结束点坐标

## 绘制方式
1. stroke() 描边
* strokeStyle 描边的样式

2. fill() 填充
* fillStyle() 填充样式

## 透明度
  > globalAlpha

## 渐变
1. 线性渐变
  > createLinearGradient(x1, y1, x2, y2) x1, y1为起点的坐标 x2, y2为终点的坐标
  > gradient.addColorStop(offset, color)，其中color就是颜色，offset 则是颜色的偏移值，只为0到1之间的数。
2. 径向渐变
  > ctx.createRadialGradient(x0, y0, r0, x1, y1, r1) x0, y0为开始圆的坐标 r0为开始圆的半径 x1, y1为结束圆的坐标 r1为结束圆的半径

## 文本
1. strokeText(text, x, y, maxWidth)
2. fillText(text, x, y, maxWidth)
  >txt：是绘制的文本内容 x、y：为绘制文本的起始位置坐标 maxWidth：可选参数，为文本绘制的最大宽度。
3. font
4. textAlign
  > 默认值是 start，可选值有：left、right、center、start和end。
5. direction
  > 默认值是 inherit， 可选值为：ltr（文本方向从左向右）、rtl（文本方向从右向左）、inherit（根据情况继承 Canvas元素或者 Document 。）
6. textBaseline
  > textBaseline属性设置基于基线对齐的文字垂直方向的对齐方式。默认值是alphabetic，可选值为：top、hanging、middle、alphabetic、ideographic和bottom。
7. 阴影
  > shadowOffsetX 用于设置阴影在 X轴 上的延伸距离，默认值为0，如设置为10，则表示延 X轴 向右延伸10像素的阴影，也可以为负值，负值表示阴影会往反方向（向左）延伸。
  > shadowOffsetY 用于设置阴影在 Y轴 上的延伸距离，默认值为0，如设置为10，则表示延 Y轴 向下延伸10像素的阴影，也可以为负值，负值表示阴影会往反方向（向上）延伸。
  > shadowBlur 用于设置阴影的模糊程度，默认为 0。
  > shadowColor 用于设置阴影的颜色，默认为全透明的黑色。
8. measureText
  > width 用于基于当前上下文字号和字体来计算内联字符串的宽度
  > actualBoundingBoxLeft：从 textAlign 属性确定的对齐点到文本矩形边界左侧的距离，使用 CSS 像素计算；正值表示文本矩形边界左侧在该对齐点的左侧
  > actualBoundingBoxRight：从 textAlign 属性确定的对齐点到文本矩形边界右侧的距离
  > fontBoundingBoxAscent：从 textBaseline 属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离。
  > fontBoundingBoxDescent：从 textBaseline 属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离。
  > actualBoundingBoxAscent：从 textBaseline 属性标明的水平线到渲染文本的矩形边界顶部的距离。
  > actualBoundingBoxDescent：从 textBaseline 属性标明的水平线到渲染文本的矩形边界底部的距离。
  > emHeightAscent：从 textBaseline 属性标明的水平线到线框中 em 方块顶部的距离。
  > emHeightDescent：从 textBaseline 属性标明的水平线到线框中 em 方块底部的距离。
  > hangingBaseline：从 textBaseline 属性标明的水平线到线框的 hanging 基线的距离。
  > alphabeticBaseline：从 textBaseline 属性标明的水平线到线框的 alphabetic 基线的距离。
  > ideographicBaseline：从 textBaseline 属性标明的水平线到线框的 ideographic 基线的距离。

## 图像
1. createPattern(img, type)
  > Image 参数可以是一个 Image 对象，也可以是一个 canvas 对象。
  > Type 为图案绘制的类型，可用的类型分别有：repeat，repeat-x，repeat-y 和 no-repeat。
2. drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  > image：绘制的元素（图像）。
  > sx、sy：裁剪框在图片左上角的坐标。
  > sWidth、sHeight：图像的宽度 高度。
  > dx、dy：绘制元素（图像）时左上角的坐标。
  > dWidth、dHeight：绘制元素（图像）的宽度和高度。

## 动画
1. translate(x, y) 移动
2. rotate(deg) 旋转
3. scale(x, y) 缩放
4. save restore
  > 应用的变形：移动、旋转、缩放、strokeStyle、fillStyle、globalAlpha、lineWidth、lineCap、lineJoin、miterLimit、lineDashOffset、shadowOffsetX、shadowOffsetY、shadowBlur、shadowColor、globalCompositeOperation、font、textAlign、textBaseline、direction、imageSmoothingEnabled等。
  > 应用的裁切路径（clipping path）
5. 定时器
  > setInterval(function, delay) ：定时器，当设定好间隔时间后，function 会定期执行。
  > setTimeout(function, delay)：延时器，在设定好的时间之后执行函数
  > requestAnimationFrame(callback)：告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。
6. globalCompositeOperation 属性设置或返回如何将一个源（新的）图像绘制到目标（已有的）的图像上。
7. transform(a, b, c, d, e, f)
  ````
  a：水平缩放，不缩放为1
  b：水平倾斜，不倾斜为0
  c：垂直倾斜，不倾斜为0
  d：垂直缩放，不缩放为1
  e：水平移动，不移动为0
  f：垂直移动，不移动为0
  因此不设置参数的时候，默认参数为transform(1, 0, 0, 1, 0, 0)
  ````

## 事件
> Canvas支持所有的鼠标事件，但是并不支持键盘事件
1. 为 canvas 添加键盘监听事件需要注意什么：
  * 给 <canvas> 标签添加 tabindex=“0” 属性。
  * 获取 canvas 元素之后，canvas 调用 focus() 方法让自动获取焦点。
  * 获取焦点之后，如果鼠标点击了其他的元素，canvas 元素会失去焦点， 从而失去键盘监听事件。
2. isPointInPath()方法，此方法可以把坐标传入，然后判断是否在路径之内

## 应用
1. 图片保存：toDataURL(type, encoderOptions)
  > type：type为图片格式，默认为image/png，也可指定为：image/jpeg、image/webp等格式
  > encoderOptions：encoderOptions为图片的质量，默认值 0.92。在指定图片格式为 image/jpeg 或 image/webp 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果不在这个范围内，则使用默认值 0.92。
2. 主题（滤镜）
  * getImageData(sx, sy, sw, sh): 返回一个ImageData对象。
    > ImageData对象用来描述canvas区域隐含的像素数据，此区域通过矩形表示，起始点为(sx, sy)、宽为sw、高为sh
    > sx：将要被提取的图像数据矩形区域的左上角 x 坐标。
    > sy：将要被提取的图像数据矩形区域的左上角 y 坐标。
    > sw：将要被提取的图像数据矩形区域的宽度。
    > sh：将要被提取的图像数据矩形区域的高度。
  * putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight): 将数据从已有的ImageData对象绘制为位图。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。
    > ImageData：包含像素值的数组对象。
    > dx：源图像数据在目标画布中 x 轴方向的偏移量。
    > dy：源图像数据在目标画布中 y 轴方向的偏移量。
    > dirtyX：可选参数，在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）。
    > dirtyY：可选参数，在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）。
    > dirtyWidth：可选参数，在源图像数据中，矩形区域的宽度。默认是图像数据的宽度。
    > dirtyHeight：可选参数，在源图像数据中，矩形区域的高度。默认是图像数据的高度。
3. globalCompositeOperation: 设置在绘制新形状时应用的合成操作的类型。
  > source-over 在目标图像上显示源图像
  > source-atop 在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
  > source-in 在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
  > source-out 在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
  > destination-over 在源图像上方显示目标图像。
  > destination-atop 在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
  > destination-in 在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
  > destination-out 在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
  > lighter	显示源图像 + 目标图像。
  > copy	显示源图像。忽略目标图像。
  > xor	使用异或操作对源图像与目标图像进行组合。