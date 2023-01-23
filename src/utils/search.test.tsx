import { SearchFunction } from "./searchFunction";

const exampleObj = {
  id: 1,
  name: "Tasty",
  tagline: "",
  description: "",
  image_url: "",
  abv: 10,
  ingredients: {
    malt: [
      {
        name: "",
        amount: { value: 10, unit: "" },
        add: "",
        attribute: "",
      },
    ],
    hops: [
      {
        name: "",
        amount: { value: 10, unit: "" },
        add: "",
        attribute: "",
      },
    ],
    yeast: "",
  },
  foodPairing: "",
  volume: { value: 10, unit: "" },
};
test("search bar function", () => {
  const obj = exampleObj;
  expect(SearchFunction([obj], "T")).toEqual(
    expect.arrayContaining([exampleObj])
  );
  expect(SearchFunction([obj], "health")).toEqual(expect.arrayContaining([]));
});
