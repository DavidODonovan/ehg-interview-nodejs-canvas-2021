const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const { createBigArray, createImage, shuffle } = require('./BigO');

const width = 256;
const height = 128;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const coloursData = createBigArray();
const pixelsMatrix = ctx.createImageData(width, height);

createImage(pixelsMatrix, coloursData, width, height);
console.log(pixelsMatrix.data.length);
ctx.putImageData(pixelsMatrix, 0, 0);


canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'colours.png')))


// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);
