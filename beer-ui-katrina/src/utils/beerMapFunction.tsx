import { IBeers } from "./interfaces";

export default function BeerMapFunction(beerList: IBeers[]): JSX.Element {
  return (
    <div>
      {beerList &&
        beerList.map((beer) => (
          <div key={beer.id} className="singleBeer">
            <p>Beer Name: {beer.name}</p>
            <p>Abv: {beer.abv}</p>
            <p>Volume: {beer.volume.value + beer.volume.unit}</p>
            {beer.ingredients.malt && (
              <p>Malt: {beer.ingredients.malt[0].name}</p>
            )}
            {beer.ingredients.hops && (
              <p>Hops: {beer.ingredients.hops[0].name}</p>
            )}
            {beer.ingredients.yeast && <p>Yeast: {beer.ingredients.yeast}</p>}
          </div>
        ))}
    </div>
  );
}
