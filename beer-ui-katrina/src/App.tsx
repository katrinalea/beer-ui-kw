import BeerList from "./beerList";
import NavBar from "./navBar";


export default function App(): JSX.Element {
  return (
    <div>
      <NavBar />
     
      <BeerList />
    </div>
  );
}
