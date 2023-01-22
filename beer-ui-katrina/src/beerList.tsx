import { useState, useEffect } from "react";
import BeerMapFunction from "./utils/beerMapFunction";
import { IBeers } from "./utils/interfaces";
import { Pagination } from "./utils/pagination";
import SearchFunction from "./utils/searchFunction";

export default function BeerList(): JSX.Element {
  const [beerList, setBeerList] = useState<IBeers[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

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

  //----------------------------------------------------------------------- filtering beers via search term
  const filteredBeers = beerList && SearchFunction(beerList, searchTerm);

  //----------------------------------------------------------------------- pagenation implementation

  const indexOfLastBeer = currentPage * 5;
  const indexOfFirstBeer = indexOfLastBeer - 5; // slice the beer array so that only a certain no.beers are rendered per time
  const currentBeers =
    filteredBeers && filteredBeers.slice(indexOfFirstBeer, indexOfLastBeer);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        {currentBeers && BeerMapFunction(currentBeers)}
      </div>
      <br />
      <br />
      <Pagination
        beerListLength={filteredBeers ? filteredBeers.length : 0}
        paginate={paginate}
      />
    </div>
  );
}
