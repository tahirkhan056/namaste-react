export function filterdata(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText?.toLowerCase());
  });
  return filteredData;
}

export const sum = (num1, num2) => {
  return num1 + num2;
};
