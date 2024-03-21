import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from '../../components/PlantCard/PlantCard';
import './PlantList.css';

export default function PlantList({searchQuery}) {
  // State variables to manage plant data, loading state, error state, and current page number
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 30; // Number of plants to display per page
  const totalPages = 405; // Total number of pages
  const pagesToShow = 5; // Number of page links to show in pagination
  const pages = Math.ceil(totalPages / plantsPerPage); // Total number of pages

  // Fetch plant data from the API based on the current page
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://perenual.com/api/species-list?key=${process.env.REACT_APP_PERENNIAL}&page=${currentPage}`);
        setPlantData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    }

    fetchData(); // Call the fetchData function when the currentPage changes
  }, [currentPage]);
  // Function to filter plant data based on search query
  const filterPlants = (plants, query) => {
    return plants.filter(plant =>
      plant.common_name.includes(query) ||
      plant.scientific_name.includes(query)
    );
  };

  // Render plant cards based on the fetched plant data
  const renderPlantCards = () => {
    const filteredPlants = filterPlants(plantData, searchQuery);
    return (
      <div className="row">
        {filteredPlants.map((plant, index) => (
          <div key={index} className="col-lg-3 mb-4">
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
    );
  };


  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render page numbers for pagination
  const renderPageNumbers = () => {
    const lastPage = Math.ceil(totalPages / plantsPerPage); // Calculate the last page
    const currentInterval = Math.ceil(currentPage / pagesToShow); // Calculate the current interval of page links
    const start = (currentInterval - 1) * pagesToShow + 1; // Calculate the start page number for the current interval
    const end = Math.min(start + pagesToShow - 1, lastPage); // Calculate the end page number for the current interval

    const pageNumbers = [];
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i); // Populate the pageNumbers array with page numbers for the current interval
    }

    // Render the pagination UI
    return (
      <ul className="pagination">
        {/* Previous button */}
        <li className={`page-item ${currentInterval === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate((currentInterval - 1) * pagesToShow)}>Previous</button>
        </li>
        {/* Render page numbers */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        {/* Next button */}
        <li className={`page-item ${currentInterval === Math.ceil(totalPages / pagesToShow) ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentInterval * pagesToShow + 1)}>Next</button>
        </li>
      </ul>
    );
  };

  // Render the PlantList component
  return (
    <div className="plant-list">
      {loading ? (
        // Display loading message while data is being fetched
        <p>Loading...</p>
      ) : error ? (
        // Display error message if an error occurred during fetching
        <p>Error loading data. Please check the console for details.</p>
      ) : (
        // Render plant cards and pagination when data is loaded successfully
        <>
          {renderPlantCards()}
          {renderPageNumbers()}
        </>
      )}
    </div>
  );
}
