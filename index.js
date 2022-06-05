// variables and constents

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasSize = 500;
canvas.height = canvasSize;
canvas.width = canvasSize;
const homeSize = 180;
const longGape = (
  Math.round((canvasSize - homeSize * 2) / 3)
);
const smallGape = (homeSize / 5);
const whiteCellAddress = [
  [smallGape / 13, homeSize + (longGape / 5)],
  [smallGape + (smallGape / 15), homeSize + (longGape / 5)]
  ,[smallGape*2+(smallGape / 15),homeSize + (longGape / 5)],
  [smallGape*3+(smallGape / 15),homeSize + (longGape / 5)],
  [smallGape*4+(smallGape / 15),homeSize + (longGape / 5)],
  // Cell_4
  // Cell_5
  // Cell_6
  // Cell_7
  // Cell_8
  // Cell_9
  // Cell_10
  // Cell_11
  // Cell_12
  // Cell_13
  // Cell_14
  // Cell_15
  // Cell_16
  // Cell_17
  // Cell_18
  // Cell_19
  // Cell_20
  // Cell_21
  // Cell_22
  // Cell_23
  // Cell_24
  // Cell_25
  // Cell_26
  // Cell_27
  // Cell_28
  // Cell_29
  // Cell_30
  // Cell_31
  // Cell_32
  // Cell_33
  // Cell_34
  // Cell_35
  // Cell_36
  // Cell_37
  // Cell_38
  // Cell_39
  // Cell_40

];

///////////////////////////////////////////////////////////////////////
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

class RestCell {
  drawRestIcon(xPos = new Number, yPos = new Number) {
    const img = new Image(smallGape / 2, smallGape / 2);
    img.addEventListener('load', () => {
      ctx.drawImage(img, xPos, yPos);
    });
    img.src = './assets/stop.png';
  }
}

class Button {
  constructor(xPos, yPos, memberOf = new String) {
    this.position = [xPos, yPos];
    this.memberOf = memberOf;
    this.isResting = false;
    this.img = new Image(smallGape / 2, smallGape / 2);
  }
  
  update(pos = []) {
    this.position = pos;
    console.log('called')
  }
  drawRestIcon(src = new String) {
    this.img.addEventListener('load', () => {
      ctx.drawImage(this.img, ...this.position);
    });
    this.img.src = src;
    return { pos: this.position, member: this.memberOf };
  }

}



//////////////////////////////////////////////////////////////////////

//  functions
function rollDice() {
  const src = [
    "./assets/dice/one.png",
    "./assets/dice/two.png",
    "./assets/dice/three.png",
    "./assets/dice/four.png",
    "./assets/dice/five.png",
    "./assets/dice/six.png",
  ];
  const img = new Image();
  img.addEventListener('load', (e, pos = homeSize + smallGape + 5) => {
    ctx.drawImage(img, pos, pos);
  });
  let randomSrc = Math.round(Math.random() * 5)
  img.src = src[randomSrc];

  return randomSrc + 1;
};
rollDice();
//////////////////////////////////////////////////////////////////////

// fixing resting points

const restPoint = new RestCell();

restPoint.drawRestIcon(smallGape + (smallGape / 6), homeSize + (longGape / 5));

restPoint.drawRestIcon((canvasSize - homeSize) - (longGape - 10), smallGape + (smallGape / 10));

restPoint.drawRestIcon(canvasSize - (smallGape * 2 - 5),
  canvasSize - homeSize - (longGape - 10));

restPoint.drawRestIcon(homeSize + (longGape / 5),
  canvasSize - (smallGape * 1.9));

restPoint.drawRestIcon(smallGape * 2 + (smallGape / 6), canvasSize - homeSize - (longGape * .8));

restPoint.drawRestIcon(homeSize + (longGape * .3), smallGape * 2 + (smallGape / 10));

restPoint.drawRestIcon(canvasSize - (smallGape * 3 - 5),
  canvasSize - homeSize - (longGape * 3 - 10));

restPoint.drawRestIcon(homeSize + (longGape * 2.2),
  canvasSize - (smallGape * 2.9));
//////////////////////////////////////////////////////////////////////
// making of grids

const line = new Shape();
const homePath = new Shape();

homePath.draw([smallGape, homeSize], [[smallGape * 2, homeSize], [smallGape * 2, homeSize + longGape], [homeSize, homeSize + longGape], [homeSize, homeSize + (longGape * 2)], [smallGape, homeSize + (longGape * 2)]], 'crimson', 0);

homePath.draw([canvasSize - homeSize, smallGape], [[longGape + homeSize, smallGape], [longGape + homeSize, homeSize], [homeSize + (longGape * 2), homeSize], [homeSize + (longGape * 2), smallGape * 2], [canvasSize - homeSize, smallGape * 2]], 'limegreen', 0);

homePath.draw([canvasSize - homeSize, homeSize + longGape], [[canvasSize - smallGape, homeSize + longGape], [canvasSize - smallGape, canvasSize - homeSize], [canvasSize - (smallGape * 2), canvasSize - homeSize], [canvasSize - (smallGape * 2), homeSize + (longGape * 2)], [canvasSize - homeSize, homeSize + (longGape * 2)]], 'yellow', 0);

homePath.draw([homeSize, canvasSize - (smallGape * 2)], [[homeSize + longGape, canvasSize - (smallGape * 2)], [homeSize + longGape, canvasSize - homeSize], [homeSize + (longGape * 2), canvasSize - homeSize], [homeSize + (longGape * 2), canvasSize - smallGape], [homeSize, canvasSize - smallGape]], '#3a3acc', 0);


line.drawLine([
  [
    [0, longGape + homeSize],
    [canvasSize, longGape + homeSize]
  ],
  [
    [0, longGape * 2 + homeSize],
    [canvasSize, longGape * 2 + homeSize]
  ],
  [
    [longGape * 2 + homeSize, 0],
    [longGape * 2 + homeSize, canvasSize]
  ],
  [
    [longGape + homeSize, 0],
    [longGape + homeSize, canvasSize]
  ]
]);

const blocks = new Shape();
let i = 1;
while (i < 6) {
  blocks.drawLine([[[smallGape * i, homeSize], [smallGape * i, canvasSize - homeSize]]]);
  blocks.drawLine([[[canvasSize - (smallGape * i), homeSize], [canvasSize - (smallGape * i), canvasSize - homeSize]]]);
  blocks.drawLine([[[homeSize, smallGape * i], [canvasSize - homeSize, smallGape * i]]]);
  blocks.drawLine([[[homeSize, (canvasSize + (smallGape * i)) - homeSize], [canvasSize - homeSize, (canvasSize + (smallGape * i)) - homeSize]]]);
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
  "#3a3acc"
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

const b = new Button(...whiteCellAddress[0], 'home1')
b.drawRestIcon('./assets/button/button_red.png');
// console.log('position after keypress', b.position);

function roll(e) {
   if (e.code == 'Space') {
    const i=rollDice();
    b.update(whiteCellAddress[i]);
    console.log(whiteCellAddress[i])
    b.drawRestIcon('./assets/button/button_red.png');
    
  }
}

addEventListener('keyup', (e) =>roll(e));
// b.position = whiteCellAddress.Cell_2;