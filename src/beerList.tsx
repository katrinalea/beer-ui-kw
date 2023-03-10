import { useState, useEffect } from "react";
import { BeerMapFunction } from "./utils/beerMapFunction";
import { IBeers } from "./utils/interfaces";
import { Pagination } from "./utils/pagination";
import { SearchFunction } from "./utils/searchFunction";

export default function BeerList(): JSX.Element {
  const [currentBeerList, setCurrentBeerList] = useState<IBeers[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  //----------------------------------------------------------------------- use effect, fetches beers from API according to page number
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=15`
      );
      const jsonBody: IBeers[] = await response.json();
      console.log(jsonBody);
      const filteredBody = SearchFunction(jsonBody, searchTerm);
      setCurrentBeerList(filteredBody);
    };
    fetchBeers();
  }, [currentPage, searchTerm, setCurrentPage]);

  //----------------------------------------------------------------------- pagenation implementation

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  //----------------------------------------------------------------------- rendered return
  return (
    <div>
      <div className="beerDisplayPage">
        <input
          className="searchBar"
          type="text"
          value={searchTerm}
          placeholder="Search for a beer..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="beerContainer">
        {currentBeerList && (
          <BeerMapFunction beerListToMap={[...currentBeerList]} />
        )}
      </div>
      <div className="pagenation">
        <Pagination
          beerListLength={currentBeerList ? currentBeerList.length : 325}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
