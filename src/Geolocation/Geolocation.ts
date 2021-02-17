const GeolocationPositionErrorCode = {
    NOT_SUPPORTED: -1,
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
};

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
const checkGeolocationPermission = (): Promise<PermissionStatus> => {
    if (navigator && navigator.permissions) {
        return navigator.permissions.query({name:'geolocation'});
    }

    return Promise.reject();
}

/**
 * @function getCurrentLatLong
 * @param {number} timeout
 * @param {PositionOptions} positionOptions
 * @description request to get Lat long
 */
const getCurrentLatLong = (timeout: number = 20000, positionOptions: PositionOptions = {}): Promise<GeolocationPosition  | GeolocationPositionError> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        }, (err) => {
            reject(err)
        }, {
            timeout,
            ...positionOptions
        });
    });
}

/**
 * @name getGeolocation
 * @param {number} timeout
 * @description getting user Geolocation
 */
const getGeolocation = (timeout: number): Promise<GeolocationPosition  | GeolocationPositionError> => {
    if (!('geolocation' in navigator)) return Promise.reject({ code: GeolocationPositionErrorCode.NOT_SUPPORTED});

    try {
        return getCurrentLatLong(timeout);
    } catch (err) {
        return Promise.reject(err);
    }
}

export default {
    GeolocationPositionErrorCode,
    getGeolocation,
    checkGeolocationPermission,
};