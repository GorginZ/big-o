const SortInsertion = (collection) => {
  const sortedItterations = [];

  sortedItterations.push([...collection]);
  const n = collection.length;
  for (var i = 1; i < n; ++i) {
    let key = collection[i];
    let j = i - 1;

    while (j >= 0 && collection[j] > key) {
      collection[j + 1] = collection[j];
      j = j - 1;
    collection[j + 1] = key;
    sortedItterations.push([...collection]);
    }
  }
  return sortedItterations;
};

export default SortInsertion;
