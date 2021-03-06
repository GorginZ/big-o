const SortMerge = (collection) => {
  return mergeSort(collection);
};
function mergeSort(collection) {
  if (collection.length === 1) {
    return collection;
  }
  const middle = Math.floor(collection.length / 2);
  const left = collection.slice(0, middle);
  const right = collection.slice(middle);
  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedItteration = [];

  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  sortedItteration.push([...left]);
  sortedItteration.push([...right]);

  }
 return sortedItteration; 
  // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
export default SortMerge;
