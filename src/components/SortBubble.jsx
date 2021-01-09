const SortBubble = (collection) => {
  const temp = 0;
  const sortedItterations = [];

  sortedItterations.push([...collection]);
  for (var j = 0; j <= collection.length - 2; j++) {
    for (var i = 0; i <= collection.length - 2; i++) {
      if (collection[i] > collection[i + 1]) {
        const temp = collection[i + 1];
        collection[i + 1] = collection[i];
        collection[i] = temp;
        sortedItterations.push([...collection]);
      }
    }
  }
  return sortedItterations;
};

export default SortBubble;
