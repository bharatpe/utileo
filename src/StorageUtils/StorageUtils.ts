interface StorageMapType {
    [key: string]: string;
}

/**
 * @name StorageMap object used for when Local Storage quota exceeded
 */
let StorageMap: StorageMapType = {};

/**
 * @name strToJson
 * @param {string} str 
 * @description string to JSON object conversation
 */
const strToJson = <T>(str: string): T|string => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}

/**
 * @name _get
 * @param {string} key 
 * @description get value from localstorage by key name
 */
const _get = <T>(key: string): T|string => {
    const value = StorageMap[key] || window.localStorage.getItem(key);
    const jsonValue = strToJson<T>(value);
    return jsonValue;
}

/**
 * @name _set
 * @param {string} key 
 * @param {string} value 
 * @description set value to localstorage
 */
const _set = (key: string, value: any): void => {
    let stringVal = '';
    if (typeof value === 'object') {
        stringVal = JSON.stringify(value);
    }
    try {
        window.localStorage.setItem(key, stringVal);
    } catch (e) {
        StorageMap[key] = stringVal;
    }
}

/**
 * @name _has
 * @param {string} key 
 * @description check key available in localstorage
 */
const _has = (key: string): boolean => {
 return ((key in StorageMap) || window.localStorage.getItem(key) !== null);  
}

/**
 * @name _remove
 * @param {string} key 
 * @description remove key from localstorage
 */
const _remove = (key: string): void => {
    window.localStorage.removeItem(key);
    delete StorageMap[key];
}

/**
 * @name _removeAll
 * @description remove all items from localstorage
 */
const _removeAll = (): void => {
    StorageMap = {};
    window.localStorage.clear();
}

export default {
    get: _get,
    set: _set,
    has: _has,
    remove: _remove,
    removeAll: _removeAll
};