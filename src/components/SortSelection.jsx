const SortSelection = (collection) => {
  let temp = 0;
  const sortedItterations = [];
  const n = collection.length;
  for (let i = 0; i < n - 1; i++) {
    sortedItterations.push([...collection]);
    // Find the minimum element in unsorted array
    let min_idx = i;
    for (let j = i + 1; j < n; j++)
      if (collection[j] < collection[min_idx]) min_idx = j;

    // Swap the found minimum element with the first
    // element
  let temp = collection[min_idx];
    collection[min_idx] = collection[i];
    collection[i] = temp;
  sortedItterations.push([...collection]);

  }

  return sortedItterations;
};

export default SortSelection;
