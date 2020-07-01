declare namespace Utileo {

    // declare interface for StorageUtils
    type StorageValue = string | object;

    export interface StorageUtilsInterface {
        get(key: string): StorageValue;
        set(key: string, value: StorageValue): void; 
        has(key: string): boolean;
        remove(key: string): void;
        removeAll(): void;
    }

    export let StorageUtils: StorageUtilsInterface;
}
export = Utileo;
export as namespace Utileo;
