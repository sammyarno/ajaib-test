import Breadcrumb from 'react-bootstrap/Breadcrumb';
import useGetUsers from '../hooks/useGetUsers';

import Provider from '../context';

import Filter from '../components/Filter';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

const App = () => {
  const { response, loading, refetch } = useGetUsers();

  return (
    <Provider 
      data={response.data || []} 
      loading={loading} 
      refetch={refetch} 
      page={(response.meta || {}).page || 1} 
      limit={(response.meta || {}).results || 5}
    >
      <div className="app">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Example Page</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="mb-5">Example With Search and Filter</h2>
        <Filter />
        <Table />
        <Pagination />
      </div>
    </Provider>
  );
}

export default App;
