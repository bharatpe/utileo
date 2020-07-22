/**
 * @name _formatDate
 * @param {*} date 
 * @returns {Object}
 * @description Date formatting and sending an object of day, month, year
 */
const _formatDate = date => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
        return {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        };
    }
    else{
        return date;
    }
};

/**
 * @name _getCurrentDate
 * @returns {date}
 * @description Sending current date
 */
const _getCurrentDate = () => new Date();

/**
 * @name _getDateByDashFormat
 * @param {*} date 
 * @returns {string}
 * @description Converting date to DD-MM-YYYY format Ex : 18-11-2020 
 */
const _getDateByDashFormat = date => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
        const formatDate = new Date(date);
        var day = formatDate.getDate();
        day = day < 10 ? (`0${day}`) : day;
        var month = formatDate.getMonth() + 1;
        month = month < 10 ? (`0${month}`) : month;
        return `${day}-${month}-${formatDate.getFullYear()}`;
    }
    else{
        return date;
    }
};

/**
 * @name _getDateBySlashFormat
 * @param {*} date 
 * @returns {string}
 * @description Converting date to DD/MM/YYYY format Ex : 18/11/2020 
 */
const _getDateBySlashFormat = date => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
        const formatDate = new Date(date);
        var day = formatDate.getDate();
        day = day < 10 ? (`0${day}`) : day;
        var month = formatDate.getMonth() + 1;
        month = month < 10 ? (`0${month}`) : month;
        return `${day}/${month}/${formatDate.getFullYear()}`;
    }
    else{
        return date;
    }
};

/**
 * @name _timestampToDate
 * @param {number} timestamp 
 * @returns {date}
 * @description Converting timestamp to date Ex : 1560211200000 to 
 * Tue Jun 11 2019 05:30:00 GMT+0530 (India Standard Time)
 */
const _timestampToDate = timestamp => {
    if (typeof timestamp === "number") {
        return new Date(timestamp);
    }
    else{
        return timestamp;
    }
};

export default {
    formatDate: _formatDate,
    getCurrentDate: _getCurrentDate,
    getDateByDashFormat: _getDateByDashFormat,
    getDateBySlashFormat: _getDateBySlashFormat,
    timestampToDate: _timestampToDate,
};