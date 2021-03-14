const CustomError = require("../extensions/custom-error");

const chainMaker = {
array: [],
getLength() {
throw new CustomError('Not implemented');

return this.array.length;
},
addLink(value) {
throw new CustomError('Not implemented');
this.array.push(value === undefined ? '( )' : `( ${value} )`);

return this;
},
removeLink(position) {
throw new CustomError('Not implemented');
if (isNaN(position) || !Number.isInteger(position) || position < 0 || position > this.array.length) {
this.array = [];

throw new Error('error');
}

this.array.splice(position - 1, 1);
return this;
},
reverseChain() {
throw new CustomError('Not implemented');
this.array.reverse();

return this;
},

finishChain() {
let b = [...this.array];
this.array = [];

return b.join('~~');

}
};

module.exports = chainMaker;