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
      {pageNumbers.length > 1
        ? pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => props.paginate(number)}>
                {number}
              </a>
            </li>
          ))
        : null}
    </nav>
  );
}
