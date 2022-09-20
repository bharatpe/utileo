/**
 * @name validateName
 * @param {string} str
 * @description Check if all character in the string are alphabets
 */
export declare const validateName: (str: string) => boolean;
/**
 * @name validateOnlyNumber
 * @param {string,number} str
 * @description Check if it is a number
 */
export declare const validateOnlyNumber: (str: string) => boolean;
/**
 * @name titleCase
 * @param {string} str
 * @description convert a string to title case
 */
export declare const titleCase: (str: string) => string;
/**
 * @name camelize
 * @param {string} str
 * @description Converting hello-world style strings to helloWorld style strings
 */
export declare const camelize: (str: string) => string;
/**
 * @name removeSpacesAndLowerCase
 * @param {string} str
 * @description Converting to lower case and remove spaces in a string
 */
export declare const removeSpacesAndLowerCase: (str: string) => string;
/**
 * @name replaceSpaceWithUnderscore
 * @param {string} str
 * @description Converting space to underscore in a string
 */
export declare const replaceSpaceWithUnderscore: (str: string) => string;
/**
 * @name replaceSpecialCharsWithUnderscore
 * @param {string} str
 * @description Replace special chars like @,$ to _
 */
export declare const replaceSpecialCharsWithUnderscore: (str: string) => string;
/**
 * @name getIndex
 * @param {Array} inputArr
 * @param {Object} needleObj
 * @description Returns index of needleObj in an array of objects inputArr
 */
export declare const getIndex: (inputArr: any, needleObj: any) => number;
/**
 * @name toNumber
 * @param {string} value
 * @description convert a string to number
 */
export declare const toNumber: (value: string) => number;
/**
 * @name partition
 * @param {array} arr
 * @param {function} criteria
 * @description splits an array into two groups - one that match criteria and one that don't
 */
export declare const partition: <T>(arr: T[], criteria: CallableFunction) => T[][];
/**
 * @name isArray
 * @param {*} arr
 * @description Check for an Array
 */
export declare const isArray: (arr: Array<any>) => boolean;
/**
 * @name isObject
 * @param {*} obj
 * @description Check for an Object
 */
export declare const isObject: (obj: any) => boolean;
/**
 * @name isFunction
 * @param {*} func
 * @description Check for a function
 */
export declare const isFunction: (func: Function) => boolean;
export declare const isIOS: () => boolean;
//# sourceMappingURL=CommonUtils.d.ts.map