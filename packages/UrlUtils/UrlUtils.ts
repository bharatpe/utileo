/**
 * @name getURLParameter
 * @param {string} qrString 
 * @param {string} paramName 
 * @description get value of param from URL
 */
export const getURLParameter = (qrString: string, paramName: string): string => {
  if (typeof qrString === "string" && typeof paramName === "string") {
    qrString = qrString.replace(/[[]/,'\\[').replace(/[\]]/,'\\]');
    const regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
    const results = regex.exec(qrString);
  
    if (results && results.length > 0) {
      return decodeURIComponent(results[1].replace(/\+/g, ' '));
    } else {
      return '';
    }
  }
  return '';
}
