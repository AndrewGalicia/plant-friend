import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from '../../components/PlantCard/PlantCard';
import './PlantList.css';

export default function PlantList() {
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 30; // Number of plants to display per page
  const cardsPerRow = 4; // Number of cards per row

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://perenual.com/api/species-list?key=${process.env.REACT_APP_PERENNIAL}`);
        setPlantData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plantData.slice(indexOfFirstPlant, indexOfLastPlant);

  const renderPlantCards = () => {
    return (
      <div className="row">
        {currentPlants.map((plant, index) => (
          <div key={index} className={`col-lg-${12 / cardsPerRow} mb-4`}>
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(plantData.length / plantsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="plant-list">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data. Please check the console for details.</p>
      ) : (
        <>
          {renderPlantCards()}
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <button onClick={() => paginate(number)} className="page-link">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
