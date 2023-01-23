export interface IBeers {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ingredients: IIngredients;
  foodPairing: string;
  volume: IVolume;
}

export interface IIngredients {
  malt: IMalt[];
  hops: IHops[];
  yeast: string;
}
export interface IVolume {
  value: number;
  unit: string;
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
