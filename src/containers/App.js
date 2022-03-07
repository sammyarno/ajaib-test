import Breadcrumb from "react-bootstrap/Breadcrumb";
import Filter from '../components/Filter';

const App = () => {
  return (
    <div className="app">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Example Page</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="mb-5">Example With Search and Filter</h2>
      <Filter />
    </div>
  );
}

export default App;
