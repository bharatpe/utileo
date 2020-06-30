// Auto Capitalization every string or after space

export const capitalize = (text) => {
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
