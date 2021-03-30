class Thing {
  constructor(){
    this.redChannel = this.create32ValArray();
    this.greenChannel = this.create32ValArray();
    this.blueChannel = this.create32ValArray();
  };

  create32ValArray=()=>{
    let arr =[];
    for(let i=1; i<=32; i++){
      arr.push(i*8);
    };
    return arr;
  };

  nestedForLoop=()=>{
    let newArr = [];
    for(let i=0; i<32; i++){
      console.log("i:",i);
      for(let j =0; j<32; j++){
        console.log("j:",j);
        for(let k =0; k<32; k++){
          console.log(`rgb(${i}, ${j}, ${k})`)
          newArr.push(`rgb(${i}, ${j}, ${k})`)
        }
      }
    };
   console.log(newArr.length)
  };

};

module.exports = new Thing();
