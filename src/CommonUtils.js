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

/**
 * @function _partition
 * @param {array} arr 
 * @param {function} criteria 
 * @description splits an array into two groups - one that match criteria and one that don't
 */
var _partition = function (arr, criteria) {
	return [
		arr.filter(function (item) {
			return criteria(item);
		}),
		arr.filter(function (item) {
			return !criteria(item);
		}),
	];
};

/**
 * @function _isArray
 * @param {*} arr 
 * @description Check for an Array
 */
const _isArray = arr => {
    return Array.isArray(arr); ;
};

/**
 * @function _isObject
 * @param {*} obj 
 * @description Check for an Object
 */
const _isObject = obj => {
    return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * @function _isFunction
 * @param {*} func 
 * @description Check for a function
 */
const _isFunction = func => {
    return typeof func === 'function';
};

export default {
    titleCase: _titleCase,
    camelize: _camelize,
    toNumber: _toNumber,
    partition: _partition,
    isArray: _isArray,
    isObject: _isObject,
    isFunction: _isFunction,
};