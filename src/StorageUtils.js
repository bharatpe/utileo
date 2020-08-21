/**
 * @name StorageMap object used for when Local Storage quota exceeded
 */
let StorageMap = {};

/**
 * @name strToJson
 * @param {string} str 
 * @description string to JSON object conversation
 */
const strToJson = (str) => {
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
const _get = (key) => {
    let value = StorageMap[key] || window.localStorage.getItem(key);
    value = strToJson(value);
    return value;
}

/**
 * @name _set
 * @param {string} key 
 * @param {string} value 
 * @description set value to localstorage
 */
const _set = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    try {
        window.localStorage.setItem(key, value);
    } catch (e) {
        StorageMap[key] = value;
    }
}

/**
 * @name _has
 * @param {string} key 
 * @description check key available in localstorage
 */
const _has = (key) => {
 return (StorageMap.hasOwnProperty(key) || window.localStorage.getItem(key) !== null);  
}

/**
 * @name _remove
 * @param {string} key 
 * @description remove key from localstorage
 */
const _remove = (key) => {
    window.localStorage.removeItem(key);
    delete StorageMap[key];
}

/**
 * @name _removeAll
 * @description remove all items from localstorage
 */
const _removeAll = () => {
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