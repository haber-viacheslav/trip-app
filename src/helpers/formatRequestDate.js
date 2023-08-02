/**
 *
 * @param {*number} unixMs
 * @param {*'toPoints' - string} format
 * @returns
 */

export const formatRequestDate = (unixMs, format) => {
  const date = new Date(unixMs);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return format === 'toPoints'
    ? `${day}.${month}.${year}`
    : `${year}-${month}-${day}`;
};
