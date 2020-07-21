var Currency = {
  /**
   * use this method to display any and all amount-values
   * @param  {[number, string]} amount [200000]
   * @return {[string]}                [2,00,000]
   */
  format: function(amount, isFloat) {
    if (isFloat) {
      const floatFormatted = Number(amount).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
      return floatFormatted.slice(0, floatFormatted.length);
    }

    const formatted = parseInt(amount).toFixed(1).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    return formatted.slice(0, formatted.length - 2);
  },

  /**
   * use this method to parse amount-value back to number-only
   * @param  {[number, string]} amount [200000]
   * @return {[string]}                [2,00,000]
   */
  parse: function(amount) {
    return parseInt(amount.split(",").join(""));
  },

  /**
   * use this method before-submitting on any API-requests
   * @param  {[string]} amount
   * @return {[number]}
   */
  beforeAPIRequest: function(amount) {
    return this.parse(amount);
  }
};

export default Currency;