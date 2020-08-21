const ONLY_APLHABETS_REGEX = /^[A-Za-z ]+$/;
const ONLY_NUMBER_REGEX = /^[0-9\b]+$/;

/**
 * @name _validateName
 * @param {string} str 
 * @description Check if all character in the string are alphabets
 */
const _validateName = str => {
    if (typeof str === "string") {
        return ONLY_APLHABETS_REGEX.test(str);
    }
    return str;
};

/**
 * @name _validateOnlyNumber
 * @param {string,number} str 
 * @description Check if it is a number
 */
const _validateOnlyNumber = str => {
    if (typeof str === "string" || typeof str === "number") {
        return ONLY_NUMBER_REGEX.test(str);
    }
    return str;
};

/**
 * @name _titleCase
 * @param {string} str 
 * @description convert a string to title case
 */
const _titleCase = str => {
    if (typeof str === "string") {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
    return str;
};

/**
 * @name _camelize
 * @param {string} str 
 * @description Converting hello-world style strings to helloWorld style strings 
 */
const _camelize = str => {
    const camelizeRE = /-(\w)/g;
    if (typeof str === "string") {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
    }
    return str;
};

/**
 * @name _removeSpacesAndLowerCase
 * @param {string} str 
 * @description Converting to lower case and remove spaces in a string 
 */
const _removeSpacesAndLowerCase = str => {
    if (typeof str === "string") {
        return str.toLowerCase().replace(' ', '');
    }
    return str;
  };

/**
 * @name _replaceSpaceWithUnderscore
 * @param {string} str 
 * @description Converting space to underscore in a string 
 */
const _replaceSpaceWithUnderscore = str => {
    if (typeof str === "string") {
        return str && str.replace(' ', '_').toLowerCase();
    }
    return str;
};

/**
 * @name _replaceSpecialCharsWithUnderscore
 * @param {string} str 
 * @description Replace special chars like @,$ to _ 
 */
const _replaceSpecialCharsWithUnderscore = str => {
    if (typeof str === "string") {
        return str && str.replace(/[^A-Z0-9]+/gi, '_').toLowerCase();
    }
    return str;
};

/**
 * @name _addKeyToObject
 * @param {*} object 
 * @description Add type key to objects
 */
const _addKeyToObject = object => {
    if (!object) {
      return [];
    }
  
    const keys = Object.keys(object);
  
    return keys.map(item => {
      return {
        type: item,
        ...object[item],
      };
    });
};

/**
 * @name _getIndex
 * @param {Array} inputArr
 * @param {Object} needleObj 
 * @description Returns index of needleObj in an array of objects inputArr
 */
const _getIndex = (inputArr, needleObj) => {
	if (Object.prototype.toString.call(needleObj) !== '[object Object]') {
		return "Not a valid needle(object)"
	}
	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}
	let idx = -1;
	let needleKey = Object.keys(needleObj)[0];
	let needleValue = needleObj[needleKey];
	for (let i = 0; i < inputArr.length; i++) {
		const val = inputArr[i];
		if (val[needleKey] == needleValue) {
			idx = i;
			break;
		}
	}
	return idx;
}

/**
 * @name _toNumber
 * @param {string} value 
 * @description convert a string to number
 */
const _toNumber = value => {
    if(value != undefined){
        return Number(value);
    }
    return value;
};

/**
 * @name _partition
 * @param {array} arr 
 * @param {function} criteria 
 * @description splits an array into two groups - one that match criteria and one that don't
 */
var _partition = function (arr, criteria) {
    if (_isArray(arr)) {
        return [
            arr.filter(function (item) {
                return criteria(item);
            }),
            arr.filter(function (item) {
                return !criteria(item);
            }),
        ];
    }
    return arr;
};

/**
 * @name _isArray
 * @param {*} arr 
 * @description Check for an Array
 */
const _isArray = arr => {
    return Array.isArray(arr); ;
};

/**
 * @name _isObject
 * @param {*} obj 
 * @description Check for an Object
 */
const _isObject = obj => {
    return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * @name _isFunction
 * @param {*} func 
 * @description Check for a function
 */
const _isFunction = func => {
    return typeof func === 'function';
};

/*
 * @name isIOS
 * @description To check the device is IOS or not
 * @return {boolean}
 */
const _isIOS = () => {
    return (
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  };

export default {
    validateName: _validateName,
    validateOnlyNumber: _validateOnlyNumber,
    titleCase: _titleCase,
    camelize: _camelize,
    removeSpacesAndLowerCase: _removeSpacesAndLowerCase,
    replaceSpaceWithUnderscore: _replaceSpaceWithUnderscore,
    replaceSpecialCharsWithUnderscore: _replaceSpecialCharsWithUnderscore,
    addKeyToObject: _addKeyToObject,
    getIndex: _getIndex,
    toNumber: _toNumber,
    partition: _partition,
    isArray: _isArray,
    isObject: _isObject,
    isFunction: _isFunction,
    isIOS: _isIOS,
};