const ONLY_ALPHABETS_REGEX = /^[A-Za-z ]+$/;
const ONLY_NUMBER_REGEX = /^[0-9\b]+$/;

/**
 * @name validateName
 * @param {string} str 
 * @description Check if all character in the string are alphabets
 */
export const validateName = (str: string): boolean => {
    if (typeof str === "string") {
        return ONLY_ALPHABETS_REGEX.test(str);
    }
    return false;
};

/**
 * @name validateOnlyNumber
 * @param {string,number} str 
 * @description Check if it is a number
 */
export const validateOnlyNumber = (str: string): boolean => {
    if (typeof str === "string" || typeof str === "number") {
        return ONLY_NUMBER_REGEX.test(str);
    }
    return false;
};

/**
 * @name titleCase
 * @param {string} str 
 * @description convert a string to title case
 */
export const titleCase = (str: string): string => {
    if (typeof str === "string") {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
    return str;
};

/**
 * @name camelize
 * @param {string} str 
 * @description Converting hello-world style strings to helloWorld style strings 
 */
export const camelize = (str: string): string => {
    const camelizeRE = /-(\w)/g;
    if (typeof str === "string") {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
    }
    return str;
};

/**
 * @name removeSpacesAndLowerCase
 * @param {string} str 
 * @description Converting to lower case and remove spaces in a string 
 */
export const removeSpacesAndLowerCase = (str: string): string => {
    if (typeof str === "string") {
        return str.toLowerCase().replace(' ', '');
    }
    return str;
  };

/**
 * @name replaceSpaceWithUnderscore
 * @param {string} str 
 * @description Converting space to underscore in a string 
 */
export const replaceSpaceWithUnderscore = (str: string): string => {
    if (typeof str === "string") {
        return str && str.replace(' ', '_').toLowerCase();
    }
    return str;
};

/**
 * @name replaceSpecialCharsWithUnderscore
 * @param {string} str 
 * @description Replace special chars like @,$ to _ 
 */
export const replaceSpecialCharsWithUnderscore = (str: string): string => {
    if (typeof str === "string") {
        return str && str.replace(/[^A-Z0-9]+/gi, '_').toLowerCase();
    }
    return str;
};

/**
 * @name getIndex
 * @param {Array} inputArr
 * @param {Object} needleObj 
 * @description Returns index of needleObj in an array of objects inputArr
 */
export const getIndex = (inputArr: any, needleObj: any): number => {
	if (Object.prototype.toString.call(needleObj) !== '[object Object]') {
		return -1;
	}
	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return -1;
	}
	let idx = -1;
	const needleKey = Object.keys(needleObj)[0];
	const needleValue = needleObj[needleKey];
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
 * @name toNumber
 * @param {string} value 
 * @description convert a string to number
 */
export const toNumber = (value: string): number => {
    return Number(value);
};

/**
 * @name partition
 * @param {array} arr 
 * @param {function} criteria 
 * @description splits an array into two groups - one that match criteria and one that don't
 */
export const partition = <T>(arr: Array<T>, criteria: CallableFunction): Array<Array<T>> => {
    if (isArray(arr)) {
        const arr1 = arr.filter((item: T) => criteria(item));
        const arr2 = arr.filter((item: T) => !criteria(item));
        return [arr1, arr2];
    }
    return [[], []];
};

/**
 * @name isArray
 * @param {*} arr 
 * @description Check for an Array
 */
export const isArray = (arr: Array<any>): boolean => {
    return Array.isArray(arr);
};

/**
 * @name isObject
 * @param {*} obj 
 * @description Check for an Object
 */
export const isObject = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * @name isFunction
 * @param {*} func 
 * @description Check for a function
 */
export const isFunction = (func: Function): boolean => {
    return typeof func === 'function';
};

/*
 * @name isIOS
 * @description To check the device is IOS or not
 * @return {boolean}
 */
export const isIOS = (): boolean => {
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
