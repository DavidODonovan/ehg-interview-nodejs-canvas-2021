const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')



// pipe stream to file on local hard drive
canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'text.png')))
