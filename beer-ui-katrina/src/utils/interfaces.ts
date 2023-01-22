export interface IBeers {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ingredients: IIngredients;
  foodPairing: string;
}

export interface IIngredients {
  malt: IMalt[];
  hops: IHops[];
  yeast: string;
}
export interface IMalt {
  name: string;
  amount: { value: number; unit: string };
  add: string;
  attribute: string;
}
export interface IHops {
  name: string;
  amount: { value: number; unit: string };
  add: string;
  attribute: string;
}
