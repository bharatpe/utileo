var CurrencyUtils = {
  /**
   * use this method to display any and all amount-values
   * @param  {[number, boolean]} amount [200000]
   * @return {[string]}                [2,00,000]
   */
  format: function (amount, isFloat) {
    if (typeof amount === "string" || typeof amount === "number") {
      if (isFloat) {
        const num = Number(Number(amount).toFixed(2)).toString();
        const floatFormatted = num.indexOf('.') > -1 ? num.replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,') : null;

        if (floatFormatted !== null) {
          return floatFormatted.slice(0, floatFormatted.length);
        }
      }

      const formatted = parseInt(amount).toFixed(1).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
      return formatted.slice(0, formatted.length - 2);
    }
    else {
      return amount;
    }

  },

  /**
   * use this method to parse amount-value back to number-only
   * @param  {[string]} amount [2,00,000]
   * @return {[number]}        [200000]
   */
  parse: function (amount) {
    if (typeof amount === "string") {
      return parseInt(amount.split(",").join(""));
    }
    else {
      return amount;
    }
  },

  /**
   * use this method before-submitting on any API-requests
   * @param  {[string]} amount
   * @return {[number]}
   */
  beforeAPIRequest: function (amount) {
    if (typeof amount === "string") {
      return this.parse(amount);
    }
    else {
      return amount;
    }
  }
};

export default CurrencyUtils;