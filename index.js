const BigO = require('./BigO');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas')

const data = BigO.createBigArray();

const width = 500;
const height = 500;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

let myData = ctx.createImageData(width, height);
console.log(myData)


// pipe stream to file on local hard drive
canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'text.png')))
