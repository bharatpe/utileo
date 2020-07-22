/**
 * @function _getURLParameter
 * @param {string} qrString 
 * @param {string} paramName 
 * @description get value of param from URL
 */
const _getURLParameter = (qrString, paramName) => {
  if (typeof qrString === "string" && typeof paramName === "string") {
    qrString = qrString.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');
    var regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
    var results = regex.exec(qrString);
  
  
    if (results && results.length > 0) {
      return decodeURIComponent(results[1].replace(/\+/g, ' '));
    } else {
      return '';
    }
  }
  else{
    return "enter string";
  }
}

export default {
  getURLParameter: _getURLParameter,
};