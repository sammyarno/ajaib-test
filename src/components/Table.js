import { useEffect, useState } from 'react';
import { Col, Row, Spinner, Container } from 'react-bootstrap';
import moment from 'moment';
import { useMyContext } from '../context';
import '../styles/table.scss';

const Table = () => {
  const { data, loading } = useMyContext();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleHeaderClick = column => {
    const temp =[...tableData];
    setTableData(temp.sort((prev, next) => prev[column] > next[column] ? 1 : -1))
  };

  return (
    <Container fluid className="table-container mb-6">
      <Row className="table-header">
        <Col lg={2} className="table-header_wrapper" onClick={() => handleHeaderClick('username')}>
          <p>Username</p>
        </Col>
        <Col className="table-header_wrapper" onClick={() => handleHeaderClick('name')}>
          <p>Name</p>
        </Col>
        <Col className="table-header_wrapper" onClick={() => handleHeaderClick('email')}>
          <p>Email</p>
        </Col>
        <Col lg={1} className="table-header_wrapper" onClick={() => handleHeaderClick('gender')}>
          <p>Gender</p>
        </Col>
        <Col className="table-header_wrapper" onClick={() => handleHeaderClick('registeredDate')}>
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
        !loading && tableData.map(item => (
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
