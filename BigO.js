module.exports = {

  createBigArray: function(){
    let newArr = [];
    for(let r=0; r<256; r+=8){
      for(let g=0; g<256; g+=8){
        for(let b=0; b<256; b+=8){
          newArr.push([r, g, b, 255]);
        };
      };
    };
    return newArr;
  },

  createImage: function(pixelsMatrix, coloursData, width, height) {
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
          };
      };
  },


};
