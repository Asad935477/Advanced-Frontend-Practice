const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");
const ControlKit = require("controlkit");

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

const params = {
  cols: 10,
  rows: 10,
  scaleMin: 0.1,
  scaleMax: 30,
  freq: 0.001,
  amp: 0.5,
  frame: 0,
  speed: 10,
  animate: true,
  lineCap: "round",
};

const sketch = () => {
  createGUI();
  return ({ context, width, height, frame }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const cols = params.cols;
    const rows = params.rows;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) / 2;
    const margy = (height - gridh) / 2;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;

      const f = params.animate ? frame : params.frame;
      const n = random.noise3D(x, y, f * params.speed, params.freq);
      const angle = n * Math.PI * params.amp;
      const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

      context.save();
      context.translate(x + margx + cellw / 2, y + margy + cellh / 2);
      context.rotate(angle);
      context.lineWidth = scale;
      context.lineCap = params.lineCap;

      context.beginPath();
      context.moveTo(-cellw * 0.4, 0);
      context.lineTo(cellw * 0.4, 0);
      context.stroke();
      context.restore();
    }
  };
};

const createGUI = () => {
  const gui = new ControlKit();
  gui
    .addPanel({ label: "Grid Controls" })
    .addGroup({ label: "Grid" })
    .addSelector(params, "lineCap", ["butt", "round", "square"])
    .addSlider(params, "cols", "range", { min: 5, max: 50, step: 1 })
    .addSlider(params, "rows", "range", { min: 5, max: 50, step: 1 })
    .addSlider(params, "scaleMin", "range", { min: 0.1, max: 100 })
    .addSlider(params, "scaleMax", "range", { min: 1, max: 100 })
    .addGroup({ label: "Noise" })
    .addSlider(params, "freq", "range", {
      min: 0.0001,
      max: 0.01,
      step: 0.0001,
    })
    .addSlider(params, "amp", "range", { min: 0, max: 1, step: 0.01 })
    .addSlider(params, "frame", "range", { min: 0, max: 999, step: 1 })
    .addSlider(params, "speed", "range", { min: 1, max: 100, step: 1 })
    .addCheckbox(params, "animate");
};

canvasSketch(sketch, settings);
