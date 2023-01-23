import BeerList from "./beerList";
import Header from "./header";
import "./style.css";

export default function App(): JSX.Element {
  return (
    <div>
      <Header />
      <BeerList />
    </div>
  );
}
