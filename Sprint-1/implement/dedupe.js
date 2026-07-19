function dedupe(array) {
  const result = [];
  for (const element of array) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
}

module.exports = dedupe;
