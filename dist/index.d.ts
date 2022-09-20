/**
 * @name validateName
 * @param {string} str
 * @description Check if all character in the string are alphabets
 */
declare const validateName: (str: string) => boolean;
/**
 * @name validateOnlyNumber
 * @param {string,number} str
 * @description Check if it is a number
 */
declare const validateOnlyNumber: (str: string) => boolean;
/**
 * @name titleCase
 * @param {string} str
 * @description convert a string to title case
 */
declare const titleCase: (str: string) => string;
/**
 * @name camelize
 * @param {string} str
 * @description Converting hello-world style strings to helloWorld style strings
 */
declare const camelize: (str: string) => string;
/**
 * @name removeSpacesAndLowerCase
 * @param {string} str
 * @description Converting to lower case and remove spaces in a string
 */
declare const removeSpacesAndLowerCase: (str: string) => string;
/**
 * @name replaceSpaceWithUnderscore
 * @param {string} str
 * @description Converting space to underscore in a string
 */
declare const replaceSpaceWithUnderscore: (str: string) => string;
/**
 * @name replaceSpecialCharsWithUnderscore
 * @param {string} str
 * @description Replace special chars like @,$ to _
 */
declare const replaceSpecialCharsWithUnderscore: (str: string) => string;
/**
 * @name getIndex
 * @param {Array} inputArr
 * @param {Object} needleObj
 * @description Returns index of needleObj in an array of objects inputArr
 */
declare const getIndex: (inputArr: any, needleObj: any) => number;
/**
 * @name toNumber
 * @param {string} value
 * @description convert a string to number
 */
declare const toNumber: (value: string) => number;
/**
 * @name partition
 * @param {array} arr
 * @param {function} criteria
 * @description splits an array into two groups - one that match criteria and one that don't
 */
declare const partition: <T>(arr: T[], criteria: CallableFunction) => T[][];
/**
 * @name isArray
 * @param {*} arr
 * @description Check for an Array
 */
declare const isArray: (arr: Array<any>) => boolean;
/**
 * @name isObject
 * @param {*} obj
 * @description Check for an Object
 */
declare const isObject: (obj: any) => boolean;
/**
 * @name isFunction
 * @param {*} func
 * @description Check for a function
 */
declare const isFunction: (func: Function) => boolean;
declare const isIOS: () => boolean;

/**
 * @name get
 * @param {string} key
 * @description get value from localstorage by key name
 */
declare const get: <T>(key: string) => string | T;
/**
 * @name set
 * @param {string} key
 * @param {string} value
 * @description set value to localstorage
 */
declare const set: (key: string, value: any) => void;
/**
 * @name has
 * @param {string} key
 * @description check key available in localstorage
 */
declare const has: (key: string) => boolean;
/**
 * @name remove
 * @param {string} key
 * @description remove key from localstorage
 */
declare const remove: (key: string) => void;
/**
 * @name removeAll
 * @description remove all items from localstorage
 */
declare const removeAll: () => void;

/**
 * @function checkGeolocationPermission
 * @returns { Promise }
 * @example
 * ```
 *  checkGeolocationPermission()
 *   .then(result => {
 *      switch (result.state) {
 *          case 'granted':
 *              // permission state granted
 *              break;
 *          case 'prompt':
 *              // permission state yet to be decided
 *              break;
 *          case 'denied':
 *              // permission state denied
 *              break;
 *       }
 *    })
 *   .catch((err) => {
 *       // geolocation permission check not supported
 *    })
 * ```
 */
declare const checkGeolocationPermission: () => Promise<PermissionStatus>;
/**
 * @function getCurrentLatLong
 * @param {number} timeout
 * @param {PositionOptions} positionOptions
 * @description request to get Lat long
 */
declare const getCurrentLatLong: (timeout?: number, positionOptions?: PositionOptions) => Promise<GeolocationPosition | GeolocationPositionError>;
/**
 * @name getGeolocation
 * @param {number} timeout
 * @description getting user Geolocation
 */
declare const getGeolocation: (timeout: number) => Promise<GeolocationPosition | GeolocationPositionError>;

/**
 * use this method to display any and all amount-values
 * @param  {[number, boolean]} amount [200000]
 * @return {[string]}                [2,00,000]
 */
declare const formatCurrency: (amount: String | Number, isFloat?: boolean) => String;
/**
 * use this method to parse amount-value back to number-only
 * @param  {[string]} amount [2,00,000]
 * @return {[number]}        [200000]
 */
declare const parseCurrency: (amount: String) => Number;

/**
 * @name getURLParameter
 * @param {string} qrString
 * @param {string} paramName
 * @description get value of param from URL
 */
declare const getURLParameter: (qrString: string, paramName: string) => string;

export { camelize, checkGeolocationPermission, formatCurrency, get, getCurrentLatLong, getGeolocation, getIndex, getURLParameter, has, isArray, isFunction, isIOS, isObject, parseCurrency, partition, remove, removeAll, removeSpacesAndLowerCase, replaceSpaceWithUnderscore, replaceSpecialCharsWithUnderscore, set, titleCase, toNumber, validateName, validateOnlyNumber };
