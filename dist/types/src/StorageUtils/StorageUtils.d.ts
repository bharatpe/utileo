/**
 * @name get
 * @param {string} key
 * @description get value from localstorage by key name
 */
export declare const get: <T>(key: string) => string | T;
/**
 * @name set
 * @param {string} key
 * @param {string} value
 * @description set value to localstorage
 */
export declare const set: (key: string, value: any) => void;
/**
 * @name has
 * @param {string} key
 * @description check key available in localstorage
 */
export declare const has: (key: string) => boolean;
/**
 * @name remove
 * @param {string} key
 * @description remove key from localstorage
 */
export declare const remove: (key: string) => void;
/**
 * @name removeAll
 * @description remove all items from localstorage
 */
export declare const removeAll: () => void;
//# sourceMappingURL=StorageUtils.d.ts.map