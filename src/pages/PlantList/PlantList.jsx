import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from '../../components/PlantCard/PlantCard';
import './PlantList.css';

export default function PlantList() {
  // State variables to store plant data, loading status, error, and current page number
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 12; // Number of plants to display per page

  // Fetch plant data from API when the component mounts
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

  // Calculate index of the last and first plant to display based on current page
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  // Slice the plant data array to get plants for the current page
  const currentPlants = plantData.slice(indexOfFirstPlant, indexOfLastPlant);

  // Render plant cards for the current page
  const renderPlantCards = () => {
    return (
      <div className="row">
        {currentPlants.map((plant, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
    );
  };

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages for pagination
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
          {/* Pagination buttons */}
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
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
