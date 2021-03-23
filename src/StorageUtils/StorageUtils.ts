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
 * @name get
 * @param {string} key 
 * @description get value from localstorage by key name
 */
export const get = <T>(key: string): T|string => {
    let jsonValue = null;
    try {
        const value = (key in StorageMap) ? StorageMap[key] : window.localStorage.getItem(key);
        jsonValue = strToJson<T>(value);
    } catch (error) {
        console.error(error);
    }
    return jsonValue;
}

/**
 * @name set
 * @param {string} key 
 * @param {string} value 
 * @description set value to localstorage
 */
export const set = (key: string, value: any): void => {
    let stringVal = value;
    if (typeof value === 'object') {
        stringVal = JSON.stringify(value);
    }

    try {
        window.localStorage.setItem(key, stringVal);
    } catch (error) {
        StorageMap[key] = stringVal;
        console.log(error);
    }
}

/**
 * @name has
 * @param {string} key 
 * @description check key available in localstorage
 */
export const has = (key: string): boolean => {
    try {
        return (key in StorageMap) || window.localStorage.getItem(key) !== null
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * @name remove
 * @param {string} key 
 * @description remove key from localstorage
 */
export const remove = (key: string): void => {
    try {
        delete StorageMap[key];
        window.localStorage.removeItem(key);
    } catch (err) {
        console.error(err);
    }
}

/**
 * @name removeAll
 * @description remove all items from localstorage
 */
export const removeAll = (): void => {
    try {
        StorageMap = {};
        window.localStorage.clear();
    } catch (error) {
        console.error(error);
    }
}
