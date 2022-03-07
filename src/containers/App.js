import { Suspense, lazy } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import useGetUsers from '../hooks/useGetUsers';

import Provider from '../context';

const Filter = lazy(() => import('../components/Filter'));
const Table = lazy(() => import('../components/Table'));
const Pagination = lazy(() => import('../components/Pagination'));

const App = () => {
  const { response, loading, refetch } = useGetUsers();

  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
