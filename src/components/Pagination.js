import { Pagination } from 'react-bootstrap';
import { useMyContext } from '../context';

const PaginationTable = () => {
  const { page, loading, refetch } = useMyContext();

  const handlePaginationChange = page => refetch({ page });

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