import { IBeers } from "./interfaces";

export default function ShowMore(beerID: number, beerList: IBeers[]):JSX.Element {
    const singleBeer = beerList.filter(beer => beer.id === beerID)
    return (
        <div>
         <div>
            <p>Beer Description: {singleBeer[0].description}</p>
            <p>Recommended to pair this beer with: {singleBeer[0].foodPairing}</p>
            </div>
               
        </div>
    )
}