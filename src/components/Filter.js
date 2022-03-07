
import { useCallback, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import { useMyContext } from '../context';
import '../styles/filter.scss';

const Filter = () => {
  const [form, setForm] = useState({});
  const { refetch } = useMyContext();

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value ?? '';
    
    setForm(prev => ({
      ...prev,
      gender: selectedGender
    }));

    refetch({
      ...form,
      gender: selectedGender
    });
  };

  const debounceChange = useCallback(
    debounce((value) => {
      refetch({
        ...form,
        name: value,
      });
    }, 3000), 
    []
  );

  const handleKeywordChange = (e) => {
    setForm(prev => ({
      ...prev,
      name: e.target.value,
    }));

    debounceChange(e.target.value);
  };

  const handleResetFilter = () => {
    setForm({});
    refetch();
  };

  return (
    <div className="filter-container mb-8">
      <Form>
        <Row>
          <Form.Group as={Col} lg={3} className="filter-wrapper">
            <Form.Label>Search by name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={form.name || ''} size="sm" onChange={handleKeywordChange} />
          </Form.Group>
          <Form.Group as={Col} lg={2} className="filter-wrapper">
            <Form.Label>Filter by gender</Form.Label>
            <Form.Select value={form.gender || 'all'} size="sm" onChange={handleGenderChange}>
              <option value="all">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} lg={2} className="filter-wrapper">
            <Button variant="outline-danger" size="sm" onClick={handleResetFilter}>Reset Filter</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default Filter;
