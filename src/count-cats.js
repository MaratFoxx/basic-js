const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  throw new CustomError('Not implemented');
    for(i = 0; i < backyard.length; i++){
    if( i % 2) {
    backyard[i].reverse()
    }
    }
    let cat = backyard.join().split(',')
    let numberCat = 0;
    for(let i = 0; i < cat.length; ++i){
    if(cat[i] == '^^')
    numberCat++;
    }
    return numberCat
    }

