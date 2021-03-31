const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const Fractal = require('./Fractal');

const width = 16;
const height = 2048;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const pixelsMatrix = ctx.createImageData(width, height);

const fractal = new Fractal(width, height);
const coloursData = fractal.createBigColoursArray();

fractal.fractalizeImage(pixelsMatrix);

ctx.putImageData(pixelsMatrix, 0, 0);

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, '../frontend/src/allTheColours.png')))
