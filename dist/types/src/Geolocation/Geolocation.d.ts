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
export declare const checkGeolocationPermission: () => Promise<PermissionStatus>;
/**
 * @function getCurrentLatLong
 * @param {number} timeout
 * @param {PositionOptions} positionOptions
 * @description request to get Lat long
 */
export declare const getCurrentLatLong: (timeout?: number, positionOptions?: PositionOptions) => Promise<GeolocationPosition | GeolocationPositionError>;
/**
 * @name getGeolocation
 * @param {number} timeout
 * @description getting user Geolocation
 */
export declare const getGeolocation: (timeout: number) => Promise<GeolocationPosition | GeolocationPositionError>;
//# sourceMappingURL=Geolocation.d.ts.map