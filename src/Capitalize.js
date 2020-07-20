// Auto Capitalization every string or after space
/**
   * use this method to auto Capitalize the String
   * @param  {string}  "hello world"
   * @return {string}   "Hello World"
   */
export const Capitalize = (text) => {
  let capitalizeText = "";

  if (typeof text === "string") {
    capitalizeText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return capitalizeText;
  } else {
    return text;
  }
};
