const BigO = require('./BigO');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas')

const width = 256;
const height = 128;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const coloursData = BigO.createBigArray();
const pixelsMatrix = ctx.createImageData(width, height);


console.log(coloursData[1]);
console.log(coloursData.length);
console.log(pixelsMatrix.data.length);

function createImage() {
    // Loop over all of the pixels
    for (var x=0; x<width; x++) {
        for (var y=0; y<height; y++) {
            // Get the pixel index
            var pixelIndex = (y * width + x) * 4;
            var colourIndex = (y * width + x);
            // Set the pixel data
            pixelsMatrix.data[pixelIndex] = coloursData[colourIndex][0];
            pixelsMatrix.data[pixelIndex+1] = coloursData[colourIndex][1];
            pixelsMatrix.data[pixelIndex+2] = coloursData[colourIndex][2];
            pixelsMatrix.data[pixelIndex+3] = coloursData[colourIndex][3];
        }
    }
}
createImage();
ctx.putImageData(pixelsMatrix, 0, 0);


// pipe stream to file on local hard drive
canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'colours.png')))
