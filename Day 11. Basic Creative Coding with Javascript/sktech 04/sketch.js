import canvasSketch from "https://cdn.skypack.dev/canvas-sketch";
import { noise3D } from "https://cdn.skypack.dev/canvas-sketch-util/random";
import { mapRange } from "https://cdn.skypack.dev/canvas-sketch-util/math";

// canvas-sketch settings
const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

// GUI params
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

// sketch function
const sketch = () => {
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
      const w = cellw * 0.8;

      const f = params.animate ? frame : params.frame;
      const n = noise3D(x, y, f * params.speed, params.freq);

      const angle = n * Math.PI * params.amp;
      const scale = mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

      context.save();
      context.translate(x + margx + cellw / 2, y + margy + cellh / 2);
      context.rotate(angle);
      context.lineWidth = scale;
      context.lineCap = params.lineCap;

      context.beginPath();
      context.moveTo(-w / 2, 0);
      context.lineTo(w / 2, 0);
      context.stroke();
      context.restore();
    }
  };
};

// controlKit GUI (global from script tag)
const initControlKit = () => {
  const gui = new ControlKit();

  gui
    .addPanel({ label: "Grid", width: 300 })
    .addGroup()
    .addSelect(params, "lineCap", ["butt", "round", "square"], {
      label: "Line Cap",
    })
    .addSlider(params, "cols", "cols", { min: 5, max: 50, step: 1 })
    .addSlider(params, "rows", "rows", { min: 5, max: 50, step: 1 })
    .addSlider(params, "scaleMin", "scaleMin", { min: 0.1, max: 100 })
    .addSlider(params, "scaleMax", "scaleMax", { min: 1, max: 100 });

  gui
    .addPanel({ label: "Noise", width: 300 })
    .addGroup()
    .addSlider(params, "freq", "freq", { min: -0.01, max: 0.01, step: 0.0001 })
    .addSlider(params, "amp", "amp", { min: 0, max: 0.5 })
    .addSlider(params, "frame", "frame", { min: 0, max: 999 })
    .addSlider(params, "speed", "speed", { min: 1, max: 100 })
    .addCheckbox(params, "animate", { label: "Animate" });
};

initControlKit();
canvasSketch(sketch, settings);
