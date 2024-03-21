// PlantList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from '../../components/PlantCard/PlantCard';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import './PlantList.css';

export default function PlantList({ searchQuery }) {
  // State variables for plant data, loading state, error state, current page number, and filters
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  const plantsPerPage = 30; // Number of plants to display per page
  const totalPages = 405; // Total number of pages

  useEffect(() => {
    fetchData();
  }, [currentPage, filters]); // Refetch data when currentPage or filters change

  // Fetch plant data from the API based on the current page and applied filters
  const fetchData = async () => {
    try {
      const filterParams = Object.entries(filters)
        .map(([key, value]) => (value !== '' ? `${key}=${value}` : ''))
        .filter(Boolean)
        .join('&');
      const response = await axios.get(
        `https://perenual.com/api/species-list?key=${process.env.REACT_APP_PERENNIAL}&page=${currentPage}&${filterParams}`
      );
      setPlantData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  // Apply filter
  const applyFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // Reset page to 1 when applying filters
  };

  // Function to filter plant data based on search query
  const filterPlants = (plants, query) => {
    return plants.filter((plant) =>
      plant.common_name.includes(query) || plant.scientific_name.includes(query)
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
    const currentInterval = Math.ceil(currentPage / 5); // Calculate the current interval of page links
    const start = (currentInterval - 1) * 5 + 1; // Calculate the start page number for the current interval
    const end = Math.min(start + 5 - 1, lastPage); // Calculate the end page number for the current interval

    const pageNumbers = [];
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i); // Populate the pageNumbers array with page numbers for the current interval
    }

    // Render the pagination UI
    return (
      <ul className="pagination">
        {/* Previous button */}
        <li className={`page-item ${currentInterval === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate((currentInterval - 1) * 5)}>
            Previous
          </button>
        </li>
        {/* Render page numbers */}
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        {/* Next button */}
        <li className={`page-item ${currentInterval === Math.ceil(totalPages / 5) ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentInterval * 5 + 1)}>Next</button>
        </li>
      </ul>
    );
  };

  // Render the PlantList component
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <FilterComponent applyFilter={applyFilter} />
        </div>
        <div className="col-md-9">
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
      </div>
    </div>
  );
}
