import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from '../../components/PlantCard/PlantCard';
import './PlantList.css';

export default function PlantList() {
  // State variables to manage plant data, loading state, error state, and current page number
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 12; // Number of plants to display per page

  // Fetch plant data from the API when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the API
        const response = await axios.get(`https://perenual.com/api/species-list?key=${process.env.REACT_APP_PERENNIAL}`);
        // Update state with fetched plant data
        setPlantData(response.data.data);
        // Set loading to false once data is fetched
        setLoading(false);
      } catch (error) {
        // If an error occurs during fetching, log the error and update error state
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    }

    // Call fetchData function when the component mounts
    fetchData();
  }, []);

  // Calculate index of the last plant to display on the current page
  const indexOfLastPlant = currentPage * plantsPerPage;
  // Calculate index of the first plant to display on the current page
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  // Get the subset of plant data to display on the current page
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

  // Generate an array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(plantData.length / plantsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Render the component
  return (
    <div className="plant-list">
      {loading ? (
        // Display loading message if data is being fetched
        <p>Loading...</p>
      ) : error ? (
        // Display error message if an error occurred during fetching
        <p>Error loading data. Please check the console for details.</p>
      ) : (
        // Render plant cards and pagination when data is loaded successfully
        <>
          {renderPlantCards()}
          {/* Pagination */}
          <ul className="pagination">
            {/* Previous button */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
            </li>
            {/* Page numbers */}
            {pageNumbers.map(number => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <button onClick={() => paginate(number)} className="page-link">
                  {number}
                </button>
              </li>
            ))}
            {/* Next button */}
            <li className={`page-item ${currentPage === Math.ceil(plantData.length / plantsPerPage) ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
