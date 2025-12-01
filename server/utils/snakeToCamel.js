const changeKeys = require("change-case/keys");

function convertObject(object) {
    return changeKeys.camelCase(object);
}

function convertArrayOfObjects(array) {
    const convertedArray = [];
    array.forEach((elementObject) => {
        convertedArray.push(convertObject(elementObject));
    });
    return convertedArray;
}

module.exports = {
    convertObject,
    convertArrayOfObjects,
};
