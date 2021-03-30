const BigO = require('./BigO');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas')

const data = BigO.createBigArray();


const width = 256;
const height = 128;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

let myData = ctx.createImageData(width, height);
console.log(myData.data)//<----each pixel has 4 values for rgba

function createImage(offset) {
    // Loop over all of the pixels
    for (var x=0; x<width; x++) {
        for (var y=0; y<height; y++) {
            // Get the pixel index
            var pixelindex = (y * width + x) * 4;

            // Generate a xor pattern with some random noise
            var red = ((x+offset) % 256) ^ ((y+offset) % 256);
            var green = ((2*x+offset) % 256) ^ ((2*y+offset) % 256);
            var blue = 50 + Math.floor(Math.random()*100);

            // Rotate the colors
            blue = (blue + offset) % 256;

            // Set the pixel data
            myData.data[pixelindex] = red;     // Red
            myData.data[pixelindex+1] = green; // Green
            myData.data[pixelindex+2] = blue;  // Blue
            myData.data[pixelindex+3] = 255;   // Alpha
        }
    }
}
createImage(Math.floor(0 / 10));
ctx.putImageData(myData, 0, 0);


// pipe stream to file on local hard drive
canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'text.png')))
