import { useState, useEffect } from "react";
import BeerMapFunction from "./utils/beerMapFunction";
import { IBeers } from "./utils/interfaces";
import { Pagination } from "./utils/pagination";
import SearchFunction from "./utils/searchFunction";

export default function BeerList(): JSX.Element {
  const [currentBeerList, setCurrentBeerList] = useState<IBeers[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  //----------------------------------------------------------------------- use effect, fetches beers from API and stores them in state
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=15`
      );
      const jsonBody: IBeers[] = await response.json();
      console.log(jsonBody);
      setCurrentBeerList(jsonBody);
    };
    fetchBeers();
  }, [currentPage, setCurrentPage]);

  //----------------------------------------------------------------------- filtering beers via search term
  const filteredBeers =
    currentBeerList && SearchFunction([...currentBeerList], searchTerm);

  //----------------------------------------------------------------------- pagenation implementation

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
        {filteredBeers && (
          <BeerMapFunction beerListToMap={[...filteredBeers]} />
        )}
      </div>
      <br />
      <br />
      <Pagination
        beerListLength={filteredBeers ? filteredBeers.length : 325}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
