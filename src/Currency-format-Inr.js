export const Currency = (value) => {
  return (
    "₹" +
    parseFloat(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")
  );
};
