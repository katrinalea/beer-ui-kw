export const dropDownFilter = (id: number, numArray: number[]) => {
  const numberArray = [...numArray];
  if (!numberArray.includes(id)) {
    return [...numArray, id];
  } else {
    return [...numberArray].filter((num) => num !== id);
  }
};
