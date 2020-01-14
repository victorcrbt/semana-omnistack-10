export default (string, separator) => {
  return string.split(separator).map(current => current.trim());
};
