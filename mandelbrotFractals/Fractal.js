module.exports = class Fractal {
  constructor(width, height, maxIterations){
    this.width = width;
    this.height = height;
    this.maxiterations = maxIterations;
    this.counter = 0;
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

  fractalizeImage=(imagew, imageh, imageData)=>{
    // Iterate over the pixels
    for (var y=0; y<imageh; y++) {
      for (var x=0; x<imagew; x++) {
        this.iterate(x, y, imageData);
      }
    }
  };

  iterate=(x, y, imageData)=>{
    this.counter++;
    console.log(this.counter);
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
    }
  };
};
