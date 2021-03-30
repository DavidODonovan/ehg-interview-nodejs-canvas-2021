const BigO = require('./BigO');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas')

const data = BigO.createBigArray();

const width = 128;
const height = 56;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

let myData = ctx.createImageData(width, height);
console.log(myData.data.length)


// pipe stream to file on local hard drive
canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'text.png')))
