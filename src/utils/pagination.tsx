interface PagProps {
  beerListLength: number;
  paginate: (paginate: number) => void;
  currentPage: number;
}
export function Pagination(props: PagProps): JSX.Element {
  const pageNumbers = [];
  //ideally want to do beerListLength/15 so that pagination updates as api lengthens/is filtered, however in my case of fetching I only
  //store 15 beers per time unsure how to access whole api at a time
  for (let i = 1; i <= Math.ceil(325 / 15); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            className={
              props.currentPage === number ? "pag-active" : "pag-inactive"
            }
            onClick={() => props.paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </nav>
  );
}

// returns buttons at the bottom of the page to change pages
