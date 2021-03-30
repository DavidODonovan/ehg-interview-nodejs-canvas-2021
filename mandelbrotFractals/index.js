const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const Fractal = require('./Fractal');

const width = 256;
const height = 128;
const maxIterations = 260;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const pixelsMatrix = ctx.createImageData(width, height);

const fractal = new Fractal(width, height, maxIterations);
const coloursData = fractal.createBigColoursArray();
// fractal.pushColoursIntoMatrix(pixelsMatrix, coloursData);
fractal.fractalizeImage(pixelsMatrix);

ctx.putImageData(pixelsMatrix, 0, 0);

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'mandelbrotFractals.png')))
