import "./Pagination.css";

const Pagination = ({ totalItems, imagePerPage, paginate }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / imagePerPage); i++) pages.push(i);

  return (
    <ul className="pagination">
      {pages.map((page) => {
        return (
          <li key={page} onClick={() => paginate(page)}>
            <a href="/#">{page}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
