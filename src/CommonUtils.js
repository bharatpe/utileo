/**
 * @function _trim
 * @param {string} str 
 * @description trim a string
 */
const _trim = (str) => {
    return str.toString().replace(/^\s+|\s+$/g, '');
};

/**
 * @function _titleCase
 * @param {string} str 
 * @description convert a string to title case
 */
const _titleCase = str => {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

/**
 * @function _camelize
 * @param {string} str 
 * @description Converting hello-world style strings to helloWorld style strings 
 */
const _camelize = str => {
    const camelizeRE = /-(\w)/g;
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
}

/**
 * @function _toNumber
 * @param {string} value 
 * @description convert a string to number
 */
const _toNumber = value => {
    return Number(value);
};

export default {
    trim: _trim,
    titleCase: _titleCase,
    camelize: _camelize,
    toNumber: _toNumber,
};