import { useState, useEffect } from "react";

import BeerMapFunction from "./utils/beerMapFunction";
import { IBeers } from "./utils/interfaces";
import SearchFunction from "./utils/searchFunction";

export default function BeerList(): JSX.Element {
  const [beerList, setBeerList] = useState<IBeers[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  //----------------------------------------------------------------------- use effect, fetches beers from API and stores them in state
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const jsonBody: IBeers[] = await response.json();
      console.log(jsonBody);
      setBeerList(jsonBody);
    };
    fetchBeers();
  }, []);

  const filteredBeers = beerList && SearchFunction(beerList, searchTerm);

  //-----------------------------------------------------------------------
  return (
    <div>
      <div>
        <p> Search for a beer:</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="beerContainer">
        {filteredBeers && BeerMapFunction(filteredBeers)}
      </div>
    </div>
  );
}
