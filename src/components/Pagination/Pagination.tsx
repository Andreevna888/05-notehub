import * as ReactPaginateExports from 'react-paginate';
import css from './Pagination.module.css';

const ReactPaginateModule =
  (ReactPaginateExports as any).default ?? ReactPaginateExports;
const ReactPaginate = ReactPaginateModule.default ?? ReactPaginateModule;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}

function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }: { selected: number }) =>
        onPageChange(selected + 1)
      }
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

export default Pagination;
