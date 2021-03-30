const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const { createBigColoursArray, pushColoursIntoMatrix, fractalizeImage } = require('./ImageHelpers');

const width = 256;
const height = 128;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const coloursData = createBigColoursArray();
const pixelsMatrix = ctx.createImageData(width, height);

pushColoursIntoMatrix(pixelsMatrix, coloursData, width, height);

fractalizeImage(ctx, width, height, 120, 0);

ctx.putImageData(pixelsMatrix, 0, 0);

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'mandelbrotFractals.png')))
