function mergeSortRecursive (array) {
    // base case
    if (array.length <= 1) return array;
  
    // divide and conquer!!
    var leftHalf = array.slice(0, array.length/2);
    var rightHalf = array.slice(array.length/2);
    var leftSorted = mergeSortRecursive(leftHalf);
    var rightSorted = mergeSortRecursive(rightHalf);
  
    // merge subarrays
    return merge(leftSorted, rightSorted);
};
  
  
function merge(left, right) {
    var result = [],
        iLeft = 0,
        iRight = 0;
  
    // while result is not fully populated
    while (result.length < (left.length + right.length)) {
      // if all elements in left have been added, then add remaining right elements
      if (iLeft === left.length) result = result.concat(right.slice(iRight));
      // if all elements in right have been added, then add remaining left elements
      else if (iRight === right.length) result = result.concat(left.slice(iLeft));
      // compare elements in subarrays and add lower of the two to result
      else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
      else result.push(right[iRight++]);
    }
    return result;
}

console.log(mergeSortRecursive([10, 21, 4, 83, 1, 5, 8]));

