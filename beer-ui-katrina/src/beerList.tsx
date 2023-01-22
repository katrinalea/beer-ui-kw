import { useState, useEffect } from "react";
import { IBeers } from "./utils/interfaces";

export default function BeerList(): JSX.Element {
  const [beerList, setBeerList] = useState<IBeers[]>();

  //----------------------------------------------------------------------- use effect, fetches beers from API and stores them in state
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const jsonBody: IBeers[] = await response.json();
      setBeerList(jsonBody);
    };
    fetchBeers();
  }, []);

//-----------------------------------------------------------------------
  return (
    <div>
      <p> Beers</p>
    </div>
  );
}
