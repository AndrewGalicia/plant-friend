import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNav from '../../components/TopNav/TopNav';
import PlantList from '../PlantList/PlantList';
import Favorites from '../Favorites/Favorites';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <TopNav onSearch={handleSearch} />
      <Container>
        <Row className="mt-5">
          <Col md={3}></Col>
          <Col md={9}>
            <Routes>
              <Route path="/" element={<PlantList searchQuery={searchQuery} />} />
              <Route path="/Favorites" element={<Favorites />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
