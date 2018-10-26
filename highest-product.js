const saveElement = (el) => el || 1;
const highestProductOfArray = (arr) => {
    if (!arr || arr.constructor !== Array) // check if arr is exist and array
        return 0
    arr = arr.slice(); //take shallow copy of this array
    arr.sort((a, b) => a < b); // sort array
    return arr.slice(0, 3).reduce((hp, al) => hp * al, 1) // take highest 3  elements
}

module.exports = highestProductOfArray