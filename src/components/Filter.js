
import { Form, Row, Col, Button } from "react-bootstrap";
import "../styles/filter.scss";

const Filter = () => (
  <div className="filter-container mb-8">
    <Form>
      <Row>
        <Form.Group as={Col} lg={3} className="filter-wrapper">
          <Form.Label>Search by keyword</Form.Label>
          <Form.Control type="text" placeholder="Enter keyword" size="sm" />
        </Form.Group>
        <Form.Group as={Col} lg={2} className="filter-wrapper">
          <Form.Label>Filter by gender</Form.Label>
          <Form.Select defaultValue="All" size="sm">
            <option>All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} lg={2} className="filter-wrapper">
          <Button variant="outline-danger" size="sm">Reset Filter</Button>
        </Form.Group>
      </Row>
    </Form>
  </div>
);

export default Filter;
