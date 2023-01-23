import { IBeers } from "./interfaces";
import { useState } from "react";

interface mapProps {
  beerListToMap: IBeers[];
}

export default function BeerMapFunction(props: mapProps): JSX.Element {
  const [dropDown, setDropDown] = useState<number[]>([]);
 //---------------------------------------------------------------------- function to allow drop down implementation
  const handleDropDown = (id: number) => {
    if (!dropDown.includes(id)) {
      setDropDown([...dropDown, id]);
    } else {
      setDropDown([...dropDown.filter((num) => num !== id)]);
    }
  };

  return (
    <div>
      {props.beerListToMap &&
        props.beerListToMap.map((beer) => (
          <div
            className={
              !dropDown.includes(beer.id)
                ? "singleBeer"
                : "singleBeerDroppedDown"
            }
            key={beer.id}
          >
            <h2 className="beerTitle">Beer Name: {beer.name}</h2>
            <div>
              <p>Abv: {beer.abv}</p>
              <p>Volume: {beer.volume.value + beer.volume.unit}</p>
              {beer.ingredients.malt && (
                <p>Malt: {beer.ingredients.malt[0].name}</p>
              )}
              {beer.ingredients.hops && (
                <p>Hops: {beer.ingredients.hops[0].name}</p>
              )}
              {beer.ingredients.yeast && <p>Yeast: {beer.ingredients.yeast}</p>}
              {!dropDown.includes(beer.id) ? (
                <button
                  className="button-drop-down"
                  onClick={() => handleDropDown(beer.id)}
                >
                  Show More
                </button>
              ) : (
                <div>
                  <p>Beer Description: {beer.description}</p>
                  <p>Recommended to pair this beer with: {beer.foodPairing}</p>
                  <button
                    className="button-drop-down"
                    onClick={() => handleDropDown(beer.id)}
                  >
                    {" "}
                    Show less{" "}
                  </button>
                </div>
              )}
            </div>
            <div className="beerImg">
              {beer.image_url && <img src={beer.image_url} alt="" />}
            </div>
          </div>
        ))}
    </div>
  );
}
