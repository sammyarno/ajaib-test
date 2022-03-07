import { Col, Row, Spinner, Container } from 'react-bootstrap';
import moment from 'moment';
import { useMyContext } from '../context';
import '../styles/table.scss';

const Table = () => {
  const { data, loading } = useMyContext();

  return (
    <Container fluid className="table-container">
      <Row className="table-header">
        <Col lg={2} className="table-header_wrapper">
          <p>Username</p>
        </Col>
        <Col className="table-header_wrapper">
          <p>Name</p>
        </Col>
        <Col className="table-header_wrapper">
          <p>Email</p>
        </Col>
        <Col lg={1} className="table-header_wrapper">
          <p>Gender</p>
        </Col>
        <Col className="table-header_wrapper">
          <p>Registered Date</p>
        </Col>
      </Row>
      {
        loading && (
          <div className="text-center mt-4">
            <Spinner animation="border" />
          </div>
        )
      }
      {
        !loading && data.map(item => (
          <Row key={item.id} className="table-data">
            <Col lg={2} className="table-data_wrapper">
              <p>{item.username}</p>
            </Col>
            <Col className="table-data_wrapper">
              <p>{item.name}</p>
            </Col>
            <Col className="table-data_wrapper">
              <p>{item.email}</p>
            </Col>
            <Col lg={1} className="table-data_wrapper">
              <p className="text-capitalize">{item.gender}</p>
            </Col>
            <Col className="table-data_wrapper">
              <p>{moment(item.registeredData).format('DD-MM-YYYY hh:mm')}</p>
            </Col>
          </Row>
        ))
      }
    </Container>
  );
};

export default Table;
