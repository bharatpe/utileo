export const getURLParameter = (qrString, paramName) => {
    qrString = qrString.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');
    var regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
    var results = regex.exec(qrString);
  
  
    if (results && results.length > 0) {
      return decodeURIComponent(results[1].replace(/\+/g, ' '));
    } else {
      return '';
    }
  }
