class BigO {

  createBigArray=()=>{
    let newArr = [];
    for(let i=0; i<32; i++){
      for(let j =0; j<32; j++){
        for(let k =0; k<32; k++){
          newArr.push([i, j, k, 255]);
        }
      }
    };
    return newArr;
  };

};

module.exports = new BigO();
