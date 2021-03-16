const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

if (date === 0 || date === undefined) {
return 'Unable to determine the time of year!';
}
if (!(date instanceof Date) || date == null) {
throw new Error();
}
if (date.getMonth !== Date.prototype.getMonth) {
throw new Error();
}
let season = date.getMonth();
if (season === 2 || season === 3 || season === 4) {
return 'spring';
}
if (season === 5 || season === 6 || season === 7) {
return 'summer';
}
if (season === 8 || season === 9 || season === 10) {
return 'autumn ';
}
if (season === 0 || season === 1 || season === 11) {
return 'winter';
}
};