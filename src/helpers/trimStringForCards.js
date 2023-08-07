export const trimStringForCards = (str, substring) => {
  const index = str.indexOf(substring);

  if (index !== -1) {
    return str.slice(0, index);
  }

  return str;
};
