const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1072 * 6, 1338 * 6], //1072x1338
};

let debugCase1 = 0;
let debugCase2 = 0;
let debugCase3 = 0;

let manager, image;

let emptySpaces = 0.01;
const sizeOfCells = 9 / 4; //The bigger, the fewer characters.
const blur = 150;
const minimumBlack = 0;
let fontSize = 1.4;
let fontFamily = "monospace";

const typeCanvas = document.createElement("canvas");
const typeContext = typeCanvas.getContext("2d");

const sketch = ({ context, width, height }) => {
  const cell = 25 * sizeOfCells;
  const cols = Math.floor(width / cell);
  const rows = Math.floor(height / cell);
  const numCells = cols * rows;

  typeCanvas.width = cols;
  typeCanvas.height = rows;

  return ({ context, width, height }) => {
    typeContext.fillStyle = "black";
    typeContext.fillRect(0, 0, cols, rows);

    typeContext.save();
    typeContext.drawImage(image, 0, 0, cols, rows); // draw image
    typeContext.restore();

    const typeData = typeContext.getImageData(0, 0, cols, rows).data;

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.textBaseline = "middle";
    context.textAlign = "center";

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cell + random.range(-cell, cell) * 0.5;
      const y = row * cell + random.range(-cell, cell) * 0.5;

      const r = typeData[i * 4 + 0];
      const g = typeData[i * 4 + 1];
      const b = typeData[i * 4 + 2];
      const a = typeData[i * 4 + 3];

      const value = (r + g + b) / 3;

      const glyph = getGlyph(r);

      let randomChances = Math.random();
      let calculatedFontSize = cell * fontSize * (cols / 100) * 1.5;

      switch (true) {
        case randomChances <= 0.01:
          context.font = `${
            calculatedFontSize * random.range(3, 10)
          }px ${fontFamily}`;
          context.fillStyle = `rgba(${r + minimumBlack}, ${g + minimumBlack}, ${
            b + minimumBlack
          }, ${value / 255})`;
          context.filter = `blur(${random.range(0, blur)}px)`;
          debugCase1++;
          console.log("🟩 if 0.01: " + debugCase1);
          break;
        case randomChances <= 0.1:
          context.font = `${
            calculatedFontSize * random.range(1, 2)
          }px ${fontFamily}`;
          context.fillStyle = `rgba(${r + minimumBlack}, ${g + minimumBlack}, ${
            b + minimumBlack
          }, ${value / (255 / 2)})`;
          context.filter = `blur(${random.range(0, blur / 10)}px)`;
          debugCase2++;
          console.log("🟨 if 0.1: " + debugCase2);
          break;
        default:
          context.font = `${
            calculatedFontSize / random.range(1, 4)
          }px ${fontFamily}`;
          context.fillStyle = `rgba(${r + minimumBlack}, ${g + minimumBlack}, ${
            b + minimumBlack
          }, ${value / (255 / 4)})`;
          context.filter = `blur(${random.range(0, blur / (blur / 2))}px)`;
          debugCase3++;
          console.log("🟥 else: " + debugCase3);
      }
      context.save();
      context.translate(x, y);
      context.translate(cell * 0.5, cell * 0.5);

      // context.fillRect(0, 0, cell, cell);

      context.fillText(glyph, 0, 0);

      context.restore();
    }
    // console.log("🟩 if 0.01: " + debugCase1);
    // console.log("🟨 if 0.1: " + debugCase2);
    // console.log("🟥 else: " + debugCase3);
    // context.drawImage(typeCanvas, 0, 0);
  };
};

const getGlyph = (v) => {
  const symbols = ".|-_=~:;,`^#-|_-".split("");
  //   const katakanas =
  //     "アイウエオカカカキクケコサスセタチテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ".split(
  //       ""
  //     );
  const Sheryians = "Sheryians".split("");
  //   const kanjis =
  //     "⼀⼁⼂⼃⼄⺃⼅⼆⼇⼈⺅𠆢⼉⼊⼋⼌⼍⼎⼏⺇⼐⼑⺉⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⺌⺐⼫⼬⼭⼮川⼯⼰⼱⼲⺓⼴⼵⼶⼷⼸⼹⺕⺔⼺⼻⺾⻌⻖⺍⺖⺘⺡⺨⼼⺗⼽⼾⼿⽀⽁⺙⽂⽃⽄⽅⽆⽇⽈⽉⺝⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⺣⽖⺤爫⽗⽘⽙⽚⽜⽝⺭㓁⺹⽞⽟⽡⽢⽣⽤⽥⽦⺪⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴氺⺫𦉰⻂⺛⽵⺮⽶⽷⽸⽹⽺⺷羽⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾌⾍⾎⾏⾐⾑⻃⽠⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⻊⾝⾞⾟⾠⾡⾢⾣⾤⾥⾂⻨⾦⻑⾨⾩⾪⾫⾬⻗⾭⻘⾮⻟⻫⾯⾰⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⾱⿂⿃⿄⿅⿆⿇⻩黒⻲⿈⿉⿊⿋⻭⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕".split(
  //       ""
  //     );
  const Name = "Harsh".split("");
  // console.log(kanjis);
  // if (v < 50) return "|";
  // if (v < 100) return "-";
  // if (Math.random() >= emptySpaces) return "";
  //   if (Math.random() <= 0.1) return random.pick(kanjis);
  if (Math.random() <= 0.1) return random.pick(Name);
  //   return random.pick(katakanas);
  return random.pick(Sheryians);
  // if (Math.random() >= 0.1) return "-";
  // if (Math.random() >= 0.005) return random.pick(symbols);
  // if (Math.random() >= 0.5) return "-";
  // if (v < 210) return "=";
};

// document.addEventListener('keyup', onKeyUp);

const loadMeSomeImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = url;
  });
};

const start = async () => {
  // const url = "avatar3.jpg"; //avatar neon
  // const url = "neon-avatar-abstract-500.jpg"; //avatar neon pintura
  // const url = "starry.jpg"; // 2728x2160
  // const url = "sunflowers.jpeg"; // 2289x3071
  // const url = "kiss.jpeg"; // 7376x7401
  // const url = "abaporu.jpg"; // 1720x2000
  const url = "Ankur Bhaiya.png"; // 1072x1338
  // const url = "dali2.jpeg"; // 1400x1064
  // const url = "scream.jpeg"; // 1518x1919
  // const url = "pearl.jpeg"; // 1861x2663
  image = await loadMeSomeImage(url);
  manager = await canvasSketch(sketch, settings);
};

start();

// ⼀⼁⼂⼃⼄⺃⼅⼆⼇⼈⺅𠆢⼉⼊⼋⼌⼍⼎⼏⺇⼐⼑⺉⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⺌⺐⼫⼬⼭⼮川⼯⼰⼱⼲⺓⼴⼵⼶⼷⼸⼹⺕⺔⼺⼻⺾⻌⻖⺍⺖⺘⺡⺨⼼⺗⼽⼾⼿⽀⽁⺙⽂⽃⽄⽅⽆⽇⽈⽉⺝⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⺣⽖⺤爫⽗⽘⽙⽚⽜⽝⺭㓁⺹⽞⽟⽡⽢⽣⽤⽥⽦⺪⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴氺⺫𦉰⻂⺛⽵⺮⽶⽷⽸⽹⽺⺷羽⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⻃⽠⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⻊⾝⾞⾟⾠⾡⾢⾣⾤⾥⾂⻨⾦⻑⾨⾩⾪⾫⾬⻗⾭⻘⾮⻟⻫⾯⾰⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⾱⿂⿃⿄⿅⿆⿇⻩黒⻲⿈⿉⿊⿋⻭⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕
// アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン
