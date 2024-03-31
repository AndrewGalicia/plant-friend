import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlantDetails = () => {
  const { id } = useParams(); // Use useParams hook to get route parameters
  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    async function fetchPlantDetails() {
      try {
        const response = await axios.get(`https://perenual.com/api/species/details/${id}?key=${process.env.REACT_APP_PERENNIAL}`);
        setPlantDetails(response.data);
      } catch (error) {
        console.error("Error fetching plant details:", error);
      }
    }

    fetchPlantDetails();
  }, [id]); // Include id in the dependency array

  return (
    <div className="container mt-5">
      {plantDetails ? (
        <div className="row">
          <div className="col-md-6">
            <img src={plantDetails.default_image.thumbnail} className="img-fluid" alt={plantDetails.common_name} />
          </div>
          <div className="col-md-6">
            <h3>{plantDetails.common_name}</h3>
            <p> {plantDetails.description}</p>
            <p><strong>Scientific Name:</strong> {plantDetails.scientific_name}</p>
            <p><strong>Type:</strong> {plantDetails.type}</p>
            <p><strong>Cycle:</strong> {plantDetails.cycle}</p>
            <p><strong>Watering:</strong> {plantDetails.frequent}</p>
            <p><strong>Sunlight:</strong> {plantDetails.sunlight}</p>
            <p><strong>Pruning:</strong> {plantDetails.sunlight}</p>
            <p><strong>Sunlight:</strong> {plantDetails.pruning_month}</p>
            <p><strong>Flowering Season:</strong> {plantDetails.flowering_season}</p>
            <p><strong>Care Level:</strong> {plantDetails.care_level}</p>
          </div>
        </div>
      ) : (
        <p>Loading plant details...</p>
      )}
    </div>
  );
};

export default PlantDetails;
