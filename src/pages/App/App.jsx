import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNav from '../../components/TopNav/TopNav';
import PlantList from '../PlantList/PlantList';
import Favorites from '../Favorites/Favorites';
import PlantDetails from '../PlantDetails/PlantDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritePlants, setFavoritePlants] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to add a plant to favorites
  const addToFavorites = (plant) => {
    if (!favoritePlants.find((p) => p.id === plant.id)) {
      setFavoritePlants([...favoritePlants, plant]);
    }
  };

  return (
    <>
      <TopNav onSearch={handleSearch} />
      <Container className="offwhite-background">
        <Row className="mt-5">
          <Col md={10}>
            <Routes>
              <Route path="/" element={<PlantList searchQuery={searchQuery} addToFavorites={addToFavorites} />} />
              <Route path="/Favorites" element={<Favorites favoritePlants={favoritePlants} />} />
              <Route path="/plant/:id" element={<PlantDetails />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;





