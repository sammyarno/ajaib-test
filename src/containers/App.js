import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Filter from '../components/Filter';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import useGetUsers from '../hooks/useGetUsers';

const App = () => {
  const { response, loading, refetch } = useGetUsers();

  return (
    <div className="app">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Example Page</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="mb-5">Example With Search and Filter</h2>
      <Filter onRefetch={refetch} />
      <Table data={response.data} loading={loading} />
      <Pagination onRefetch={refetch} loading={loading} page={1} />
    </div>
  );
}

export default App;
