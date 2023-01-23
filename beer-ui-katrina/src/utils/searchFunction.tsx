import { IBeers } from "./interfaces";

export function SearchFunction(beerList: IBeers[], searchTerm: string) {
  const searchList: IBeers[] = [];
  for (const beer of beerList) {
    const lowerBeerName = beer.name.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (lowerBeerName.includes(lowerSearchTerm)) {
      searchList.push(beer);
    }
  }
  return searchList;
}

// function to filter beers via search term
