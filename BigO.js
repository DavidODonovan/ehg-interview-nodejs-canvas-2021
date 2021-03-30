class BigO {

  createBigArray=()=>{
    let newArr = [];
    for(let i=0; i<256; i+=8){
      for(let j=0; j<256; j+=8){
        for(let k=0; k<256; k+=8){
          newArr.push([i, j, k, 255]);
        };
      };
    };
    return newArr;
  };

};

module.exports = new BigO();
