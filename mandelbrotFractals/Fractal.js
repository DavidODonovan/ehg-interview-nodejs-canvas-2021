module.exports = class Fractal {
  constructor(width, height, maxIterations){
    this.width = width;
    this.height = height;
    this.maxiterations = maxIterations;
    this.palette = [];
    this.counter = 0;
    this.coloursData = [];
    this.generatePalette();
    this.createBigColoursArray();
  }

  createBigColoursArray=()=>{
    let newArr = [];
    for(let r=0; r<256; r+=8){
      for(let g=0; g<256; g+=8){
        for(let b=0; b<256; b+=8){
          newArr.push([r, g, b, 255]);
        };
      };
    };
    this.coloursData = newArr;
    return newArr;
  };

  pushColoursIntoMatrix=(pixelsMatrix, coloursData)=>{
    // Loop over all of the pixels
    for (var x=0; x<this.width; x++) {
      for (var y=0; y<this.height; y++) {
        // Get the pixel index
        var pixelIndex = (y * this.width + x) * 4;
        var colourIndex = (y * this.width + x);
        // Set the pixel data
        pixelsMatrix.data[pixelIndex] = coloursData[colourIndex][0];
        pixelsMatrix.data[pixelIndex+1] = coloursData[colourIndex][1];
        pixelsMatrix.data[pixelIndex+2] = coloursData[colourIndex][2];
        pixelsMatrix.data[pixelIndex+3] = coloursData[colourIndex][3];
      };
    };
  };

  generatePalette=()=>{
    // Calculate a gradient
    var roffset = 24;
    var goffset = 16;
    var boffset = 0;
    for (var i=0; i<256; i++) {
      this.palette[i] = { r:roffset, g:goffset, b:boffset};

      if (i < 64) {
          roffset += 3;
      } else if (i<128) {
          goffset += 3;
      } else if (i<192) {
          boffset += 3;
      }
    };
  };

  fractalizeImage=(pixelsMatrix)=>{
    // Iterate over the pixels
    for (var y=0; y<this.height; y++) {
      for (var x=0; x<this.width; x++) {
        this.iterate(x, y, pixelsMatrix);
      }
    }
  };

  iterate=(x, y, pixelsMatrix)=>{
    this.counter++;
    // Iteration variables
    var a = 0;
    var b = 0;
    var rx = 0;
    var ry = 0;
    var iterations = 0;

    while (iterations < this.maxIterations && (rx * rx + ry * ry <= 4)) {
      rx = a * a - b * b;
      ry = 2 * a * b;

      // Next iteration
      a = rx;
      b = ry;
      iterations++;
    };

    var pixelIndex = (y * this.width + x) * 4;
    this.pushColours(pixelIndex, pixelsMatrix);
  };

  pushColours=( pixelIndex, pixelsMatrix)=>{
    var colourIndex = pixelIndex/4;
    let colour;
    if(colourIndex % 2){
      colour = this.coloursData.pop()
    } else {
      colour = this.coloursData.shift()
    };

    console.log(this.coloursData.length);
    pixelsMatrix.data[pixelIndex] = colour[0];
    pixelsMatrix.data[pixelIndex+1] = colour[1];
    pixelsMatrix.data[pixelIndex+2] = colour[2];
    pixelsMatrix.data[pixelIndex+3] = colour[3];
  };

};
