/* eslint-disable no-case-declarations */
// check permissions
function checkPermission() {
    if (navigator && navigator.permissions) {
        return navigator.permissions.query({name:'geolocation'});
    } else {
        return {
            state: 'prompt'
        }
    }
}

// return timeout promise
function getTimeoutPromise(timeout = 10000, rejectParams = {}) {
    let timeoutRef = null;
    const timeoutPromise = new Promise((resolve, reject) => {
        timeoutRef = setTimeout(() => {
            resolve({...{
                status: 'timeout',
                value: timeout
            }, ...rejectParams});
            console.error('timeout on fetch User Latitude and Longitude');
        }, timeout);
    });

    // bind method for cancel existing timeout
    timeoutPromise.cancelTimeout = function() {
        clearTimeout(timeoutRef);
    }
    return timeoutPromise;
}

// get current geo lat long
function getCurrentLatLong(timeout) {
    const racePromiseList = [];
    let timeoutPromise = null;

    // check need of timeout promise or not
    if (timeout !== undefined) {
        timeoutPromise = getTimeoutPromise(timeout, {latitude: null, longitude: null});
        racePromiseList.push(timeoutPromise);
    }

    // create lag long promise
    const langLongPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const { coords } = position;
            // cancel timeout of timeout promise
            if (timeoutPromise) {
                timeoutPromise.cancelTimeout();
            }
            resolve({
                latitude: coords.latitude.toFixed(2),
                longitude: coords.longitude.toFixed(2)
            });
        }, function() {
            // cancel timeout of timeout promise
            if (timeoutPromise) {
                timeoutPromise.cancelTimeout();
            }

            resolve({
                latitude: null,
                longitude: null
            });
        });
    });

    racePromiseList.push(langLongPromise);    
    return Promise.race(racePromiseList);
}

/**
 * @name _getLatLong
 * @param {number} timeout
 * @description get lat and long
 */
async function _getLatLong(timeout) {
    const latLong = {
        lat: 0,
        long: 0
    };
    if (navigator.geolocation) {
        const result = await checkPermission();
        switch (result.state) {
            case 'granted':
            case 'prompt':
                const { latitude, longitude } = await getCurrentLatLong(timeout);
                latLong.lat = latitude;
                latLong.long = longitude;
                break;
            case 'denied':
                latLong.lat = null;
                latLong.long = null;
                break;
        }
    } else {
        console.log('geolocation not supported!!!!');
    }
    return latLong;
}

export default {
    getLatLong: _getLatLong,
  };