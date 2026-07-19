function findMax(elements) {
  let maximum = -Infinity;

  for (const element of elements) {
    if (typeof element === "number" && element > maximum) {
      maximum = element;
    }
  }

  return maximum;
}

module.exports = findMax;
