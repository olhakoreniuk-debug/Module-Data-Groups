// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).
function compareNumbers(a, b) {
  return a - b;
}
function calculateMedian(list) {
  if (! Array.isArray(list)) {
    return null;
  }
  let filteredList = list.filter(element => typeof element === 'number');
 
  if (filteredList.length === 0) {
    return null;
}
  const middleIndex = Math.floor(filteredList.length / 2);
  let insideList = filteredList.toSorted(compareNumbers); // [1, 5, 40, 200]
  if (insideList.length === 0) {
    return null;
  }

  if (insideList.length % 2 === 0) {
    const median = (insideList[middleIndex - 1] + insideList[middleIndex]) / 2;
    return median;
  }
  else {
  const median = insideList.splice(middleIndex, 1)[0];
  return median;
}
}

module.exports = calculateMedian;
