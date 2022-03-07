import { Pagination } from 'react-bootstrap';

const PaginationTable = ({ onRefetch, loading, page }) => {

  const handlePaginationChange = page => onRefetch({ page });

  return (
    <Pagination disabled={!loading} size="sm">
      <Pagination.Item active={page === 1} onClick={() => handlePaginationChange(1)}>
        1
      </Pagination.Item>
      <Pagination.Item active={page === 2} onClick={() => handlePaginationChange(2)}>
        2
      </Pagination.Item>
    </Pagination>
  );
};

export default PaginationTable;