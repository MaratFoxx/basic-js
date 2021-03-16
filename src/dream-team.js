const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
    if (Array.isArray(members)) {
    let result = members.filter(value => (typeof (value) === 'string')).map(value => value.trim()[0])
    let nameTeam = result.join('').toUpperCase().split('').sort()
    return nameTeam.join('')
    }
    return false
    };

