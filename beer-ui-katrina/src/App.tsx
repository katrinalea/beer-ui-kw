import BeerList from "./beerList";
import Header from "./header";

export default function App(): JSX.Element {
  return (
    <div>
      <Header />
      <BeerList />
    </div>
  );
}
