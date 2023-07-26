export const searchFilter = (searchArray = [], searchText) => {
  //   console.log(searchArray, searchText);
  const search = !searchArray.length
    ? []
    : searchArray.filter((item) =>
        item.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
  //   console.log(search);
  return search;
};
