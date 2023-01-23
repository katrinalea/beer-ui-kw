export const dropDownFilter = (id: number, numArray: number []) => {
const numberArray = [...numArray]
    if (!numberArray.includes(id)) {
     numArray = [...numArray, id]
    } else {
      [...numberArray].filter((num) => num !== id);
    }
    return numberArray
  };
