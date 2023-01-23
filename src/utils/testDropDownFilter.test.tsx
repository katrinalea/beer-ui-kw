import { dropDownFilter } from "./dropDownFilter";

test("drop down filter", () => {
  expect(dropDownFilter(5, [1, 2, 3, 4, 5])).toEqual(
    expect.arrayContaining([1, 2, 3, 4])
  );
  expect(dropDownFilter(7, [1, 2, 3, 4, 5])).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 7])
  );
});
