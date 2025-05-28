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

      const x = margx + col * cellw;
      const y = margy + row * cellh;

      context.save();
      context.translate(x, y);

      context.fillStyle = "black";
      context.fillRect(x, y, cellw, cellh);

      context.fillStyle = "white";
      context.font = "bold 48px sans-serif";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(i + 1, x + cellw / 2, y + cellh / 2);
    }
  };
};

canvasSketch(sketch, settings);
