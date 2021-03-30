const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const ImageHelper = require('./ImageHelper');

const width = 256;
const height = 128;
const maxIterations = 260;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const imageHelper = new ImageHelper(width, height, maxIterations);

const pixelsMatrix = ctx.createImageData(width, height);
const coloursData = imageHelper.createBigColoursArray();
imageHelper.pushColoursIntoMatrix(pixelsMatrix, coloursData);

// imageHelper.fractalizeImage(width, height, pixelsMatrix);

ctx.putImageData(pixelsMatrix, 0, 0);

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'mandelbrotFractals.png')))
