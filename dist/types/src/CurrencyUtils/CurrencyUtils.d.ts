/**
 * use this method to display any and all amount-values
 * @param  {[number, boolean]} amount [200000]
 * @return {[string]}                [2,00,000]
 */
export declare const formatCurrency: (amount: String | Number, isFloat?: boolean) => String;
/**
 * use this method to parse amount-value back to number-only
 * @param  {[string]} amount [2,00,000]
 * @return {[number]}        [200000]
 */
export declare const parseCurrency: (amount: String) => Number;
//# sourceMappingURL=CurrencyUtils.d.ts.map