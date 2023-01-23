interface PagProps {
  beerListLength: number;
  paginate: (paginate: number) => void;
}
export function Pagination(props: PagProps): JSX.Element {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.beerListLength / 5); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => props.paginate(number)}>{number}</button>
        </li>
      ))}
    </nav>
  );
}
