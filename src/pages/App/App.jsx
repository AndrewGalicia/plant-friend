import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Filter from '../../components/Filter/Filter';
import TopNav from '../../components/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import PlantList from '../PlantList/PlantList';
import Favorites from '../Favorites/Favorites';

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  // Modify handleToggleSidebar to always set isSidebarCollapsed to false
  const handleToggleSidebar = () => {
    setSidebarCollapsed(false);
  };

  return (
    <>
      <TopNav />
      <Container>
        <Row>
          {/* ... (existing code) */}
          <Col md={3} className={`mt-5 ${isSidebarCollapsed ? 'd-none' : ''}`}>
            {/* Remove the arrow and onClick from the collapse-arrow div */}
            <Filter />
          </Col>
          <Col
            md={isSidebarCollapsed ? 12 : 9}
            className={`${
              isSidebarCollapsed ? 'd-md-block' : 'border-left border-right'
            } border-gray mt-5`}
          >
            <Routes>
              <Route path="/" element={<PlantList />} />
              <Route path="/Favorites" element={<Favorites />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
