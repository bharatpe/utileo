/**
 * use this method to display any and all amount-values
 * @param  {[number, boolean]} amount [200000]
 * @return {[string]}                [2,00,000]
 */
export const formatCurrency = (amount: String | Number, isFloat = true): String => {
  if (typeof amount === "string" || typeof amount === "number") {
    if (isFloat) {
      const num = Number(Number(amount).toFixed(2)).toString();
      const floatFormatted = num.indexOf('.') > -1 ? num.replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,') : null;

      if (floatFormatted !== null) {
        return floatFormatted.slice(0, floatFormatted.length);
      }
    }

    const formatted = parseInt(amount.toString()).toFixed(1).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    return formatted.slice(0, formatted.length - 2);
  }
  return amount.toString();
};

/**
 * use this method to parse amount-value back to number-only
 * @param  {[string]} amount [2,00,000]
 * @return {[number]}        [200000]
 */
export const parseCurrency =  (amount: String): Number => {
  if (typeof amount === "string") {
    return Number(amount.split(",").join(""));
  }
  return Number(amount);
};
