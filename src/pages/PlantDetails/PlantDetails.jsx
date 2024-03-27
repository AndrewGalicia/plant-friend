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
    <div>
      <h2>Plant Details</h2>
      {plantDetails ? (
        <pre>{JSON.stringify(plantDetails, null, 2)}</pre>
      ) : (
        <p>Loading plant details...</p>
      )}
    </div>
  );
};

export default PlantDetails;
