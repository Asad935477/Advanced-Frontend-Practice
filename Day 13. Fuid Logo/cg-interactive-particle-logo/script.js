import { vertexShader, fragmentShader } from "./shaders.js";

const config = {
  logoPath: "/logo.png",
  logoSize: 800,
  logoColor: "#e2e2e2ff",
  canvasBg: "#141414",
  distortionRadius: 800,
  forceStrength: 0.0055,
  maxDisplacement: 100,
  returnForce: 0.025,
};

let canvas, gl, program;
let particles = [];
let positionArray, colorArray;
let positionBuffer, colorBuffer;
let mouse = { x: 0, y: 0 };
let animationCount = 0;

function setupCanvas() {
  canvas = document.getElementById("canvas");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
}

function setupWebGL() {
  gl = canvas.getContext("webgl", {
    alpha: true,
    depth: false,
    stencil: false,
    antialias: true,
    powerPreference: "high-performance",
    premultipliedAlpha: false,
  });

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
}

function setupShaders() {
  const vs = compileShader(gl.VERTEX_SHADER, vertexShader);
  const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShader);
  program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
}

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function loadLogo() {
  const image = new Image();
  image.onload = function () {
    const tempCanvas = document.createElement("canvas");
    const ctx = tempCanvas.getContext("2d");
    tempCanvas.width = config.logoSize;
    tempCanvas.height = config.logoSize;

    const scale = 0.9;
    const size = config.logoSize * scale;
    const offset = (config.logoSize - size) / 2;
    ctx.drawImage(image, offset, offset, size, size);

    const imageData = ctx.getImageData(0, 0, config.logoSize, config.logoSize);
    createParticles(imageData.data);
  };
  image.src = config.logoPath;
}

function createParticles(pixels) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const positions = [];
  const colors = [];

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : { r: 1, g: 1, b: 1 };
  }

  const logoTint = hexToRgb(config.logoColor);

  for (let i = 0; i < config.logoSize; i++) {
    for (let j = 0; j < config.logoSize; j++) {
      const pixelIndex = (i * config.logoSize + j) * 4;
      const alpha = pixels[pixelIndex + 3];

      if (alpha > 10) {
        const particleX = centerX + (j - config.logoSize / 2) * 1.0;
        const particleY = centerY + (i - config.logoSize / 2) * 1.0;

        positions.push(particleX, particleY);

        const originalR = pixels[pixelIndex] / 255;
        const originalG = pixels[pixelIndex + 1] / 255;
        const originalB = pixels[pixelIndex + 2] / 255;
        const originalA = pixels[pixelIndex + 3] / 255;

        colors.push(
          originalR * logoTint.r,
          originalG * logoTint.g,
          originalB * logoTint.b,
          originalA
        );

        particles.push({
          originalX: particleX,
          originalY: particleY,
          velocityX: 0,
          velocityY: 0,
        });
      }
    }
  }

  positionArray = new Float32Array(positions);
  colorArray = new Float32Array(colors);
  createBuffers();
  animate();
}

function createBuffers() {
  positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positionArray, gl.DYNAMIC_DRAW);

  colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colorArray, gl.STATIC_DRAW);
}

function animate() {
  updatePhysics();
  render();
  requestAnimationFrame(animate);
}

function updatePhysics() {
  if (animationCount <= 0) return;

  animationCount--;
  const radiusSquared = config.distortionRadius * config.distortionRadius;

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    const currentX = positionArray[i * 2];
    const currentY = positionArray[i * 2 + 1];

    const deltaX = mouse.x - currentX;
    const deltaY = mouse.y - currentY;
    const distanceSquared = deltaX * deltaX + deltaY * deltaY;

    if (distanceSquared < radiusSquared && distanceSquared > 0) {
      const force = -radiusSquared / distanceSquared;
      const angle = Math.atan2(deltaY, deltaX);

      const distFromOrigin = Math.sqrt(
        (currentX - particle.originalX) ** 2 +
          (currentY - particle.originalY) ** 2
      );
      const forceMultiplier = Math.max(
        0.1,
        1 - distFromOrigin / (config.maxDisplacement * 2)
      );

      particle.velocityX +=
        force * Math.cos(angle) * config.forceStrength * forceMultiplier;
      particle.velocityY +=
        force * Math.sin(angle) * config.forceStrength * forceMultiplier;
    }

    particle.velocityX *= 0.82;
    particle.velocityY *= 0.82;

    const targetX =
      currentX +
      particle.velocityX +
      (particle.originalX - currentX) * config.returnForce;
    const targetY =
      currentY +
      particle.velocityY +
      (particle.originalY - currentY) * config.returnForce;

    const offsetX = targetX - particle.originalX;
    const offsetY = targetY - particle.originalY;
    const distFromOrigin = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

    if (distFromOrigin > config.maxDisplacement) {
      const excess = distFromOrigin - config.maxDisplacement;
      const scale = config.maxDisplacement / distFromOrigin;
      const dampedScale = scale + (1 - scale) * Math.exp(-excess * 0.02);

      positionArray[i * 2] = particle.originalX + offsetX * dampedScale;
      positionArray[i * 2 + 1] = particle.originalY + offsetY * dampedScale;

      particle.velocityX *= 0.7;
      particle.velocityY *= 0.7;
    } else {
      positionArray[i * 2] = targetX;
      positionArray[i * 2 + 1] = targetY;
    }
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferSubData(gl.ARRAY_BUFFER, 0, positionArray);
}

function render() {
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : { r: 0, g: 0, b: 0 };
  }

  gl.viewport(0, 0, canvas.width, canvas.height);
  const bgColor = hexToRgb(config.canvasBg);
  gl.clearColor(bgColor.r, bgColor.g, bgColor.b, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  if (particles.length === 0) return;

  gl.useProgram(program);

  const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
  gl.uniform2f(resolutionLoc, canvas.width, canvas.height);

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positionLoc = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(positionLoc);
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  const colorLoc = gl.getAttribLocation(program, "a_color");
  gl.enableVertexAttribArray(colorLoc);
  gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.POINTS, 0, particles.length);
}

function setupEvents() {
  document.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    mouse.x = (event.clientX - rect.left) * dpr;
    mouse.y = (event.clientY - rect.top) * dpr;
    animationCount = 300;
  });

  window.addEventListener("resize", () => {
    setupCanvas();

    if (particles.length > 0) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const dim = Math.sqrt(particles.length);

      for (let i = 0; i < particles.length; i++) {
        const row = Math.floor(i / dim);
        const col = i % dim;
        const repositionX = centerX + (col - dim / 2) * 1.0;
        const repositionY = centerY + (row - dim / 2) * 1.0;

        particles[i].originalX = repositionX;
        particles[i].originalY = repositionY;
        positionArray[i * 2] = repositionX;
        positionArray[i * 2 + 1] = repositionY;
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, positionArray);
    }
  });
}

function init() {
  setupCanvas();
  setupWebGL();
  setupShaders();
  loadLogo();
  setupEvents();
}

init();
