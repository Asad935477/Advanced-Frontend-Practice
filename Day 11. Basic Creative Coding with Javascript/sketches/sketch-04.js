const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const cols = 4;
    const rows = 4;
    const numCells = cols * rows;

    const gridw = width / 0.8;
    const gridh = height / 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;

    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const h = cellh * 0.8;
      const w = cellw * 0.8;

      context.save();
      context.translate(x, y);
      context.translate(margx, margy);

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();

      context.restore();

      context.fillRect(x, y, cellw, cellh);

      context.fillStyle = "white";
    }
  };
};

canvasSketch(sketch, settings);
