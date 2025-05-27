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

    for(i=0; i < numCells; i++) {
      
  };
};

canvasSketch(sketch, settings);
