const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    context.font = "400px serif";
    context.textBaseline = "middle";
    context.textAlign = "center";

    context.save();
    context.translate(width * 0.5, height * 0.5);

    context.fillText("Asad", 0, 0);
    context.restore();
  };
};

canvasSketch(sketch, settings);
