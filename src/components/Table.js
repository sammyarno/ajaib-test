import { Col, Row, Spinner, Container } from 'react-bootstrap';
import moment from 'moment';
import '../styles/table.scss';

const Table = props => {
  const { data = [], loading } = props;

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

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
        data.map(item => (
          <Row className="table-data">
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
              <p>{item.gender}</p>
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
