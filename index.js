const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasSize = 500;
canvas.height = canvasSize;
canvas.width = canvasSize;
const homeSize = 180;
//  classes and constructors

class Shape {
  draw(
    pen = [200, 200],
    points = [
      [100, 75],
      [100, 25],
      [200, 200],
    ],
    fillColor = "red",
    strokeSize = 0
  ) {
    ctx.beginPath();
    ctx.moveTo(...pen);
    points.forEach((val) => ctx.lineTo(...val));
    ctx.fillStyle = fillColor;
    ctx.lineWidth = strokeSize;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  drawLine(
    points = [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]) {
    points.forEach((val, i) => {
      ctx.beginPath();
      val.forEach((val, i) => {
        if (i == 0) {
          ctx.moveTo(...val);
        }
        if (i == 1) {
          ctx.lineTo(...val);
        }
      })
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.closePath();
    });
  }
}

class CreateBox {
  constructor(x, y, width, height, color) {
    this.position = {
      x,
      y,
    };
    (this.width = width), (this.height = height);
    this.color = color;
  }
  drawBox() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
    ctx.stroke();
    ctx.closePath();
  }
}

// making of grids
const gapeLong = (
  Math.round((canvasSize - homeSize * 2) / 3)
);
const gapeSmall = (homeSize / 5);
const line = new Shape();
const homePath = new Shape();

homePath.draw([gapeSmall, homeSize], [[gapeSmall * 2, homeSize], [gapeSmall * 2, homeSize + gapeLong], [homeSize, homeSize + gapeLong], [homeSize, homeSize + (gapeLong * 2)], [gapeSmall, homeSize + (gapeLong * 2)]], 'crimson', 0);

homePath.draw([canvasSize - homeSize, gapeSmall], [[gapeLong + homeSize, gapeSmall], [gapeLong + homeSize, homeSize], [homeSize + (gapeLong * 2), homeSize], [homeSize + (gapeLong * 2), gapeSmall * 2], [canvasSize - homeSize, gapeSmall * 2]], 'limegreen', 0);

line.drawLine([
  [
    [0, gapeLong + homeSize],
    [canvasSize, gapeLong + homeSize]
  ],
  [
    [0, gapeLong * 2 + homeSize],
    [canvasSize, gapeLong * 2 + homeSize]
  ],
  [
    [gapeLong * 2 + homeSize, 0],
    [gapeLong * 2 + homeSize, canvasSize]
  ],
  [
    [gapeLong + homeSize, 0],
    [gapeLong + homeSize, canvasSize]
  ]
]);

const blocks = new Shape();
let i = 1;
while (i < 6) {
  blocks.drawLine([[[gapeSmall * i, homeSize], [gapeSmall * i, canvasSize - homeSize]]]);
  blocks.drawLine([[[canvasSize - (gapeSmall * i), homeSize], [canvasSize - (gapeSmall * i), canvasSize - homeSize]]]);
  blocks.drawLine([[[homeSize, gapeSmall * i], [canvasSize - homeSize, gapeSmall * i]]]);
  blocks.drawLine([[[homeSize, (canvasSize + (gapeSmall * i)) - homeSize], [canvasSize - homeSize, (canvasSize + (gapeSmall * i)) - homeSize]]]);
  i = i + 1;
};





const home1 = new CreateBox(0, 0, homeSize, homeSize, "crimson");

home1.drawBox();
const home2 = new CreateBox(
  canvasSize - homeSize,
  0,
  homeSize,
  homeSize,
  "limegreen"
);
home2.drawBox();
const home3 = new CreateBox(
  canvasSize - homeSize,
  canvasSize - homeSize,
  homeSize,
  homeSize,
  "yellow"
);
home3.drawBox();

const home4 = new CreateBox(
  0,
  canvasSize - homeSize,
  homeSize,
  homeSize,
  "blue"
);
home4.drawBox();

// Home area

const homeShape = new Shape();
homeShape.draw(
  [homeSize, homeSize],
  [
    [180, 180],
    [320, 180],
    [320, 320],
    [180, 320],
  ],
  "#fc01ef"
);

const gridsLine = new Shape();
gridsLine.draw(
  [0, homeSize],
  [
    [homeSize, homeSize],
    [homeSize, 0],
    [canvasSize - homeSize, 0],
    [canvasSize - homeSize, homeSize],
    [canvasSize, homeSize],
    [canvasSize, canvasSize - homeSize],
    [canvasSize - homeSize, canvasSize - homeSize],
    [canvasSize - homeSize, canvasSize],
    [homeSize, canvasSize],
    [homeSize, canvasSize - homeSize],
    [0, canvasSize - homeSize],
    [0, homeSize],
  ],
  "transparent"
);
