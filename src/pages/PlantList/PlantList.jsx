import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from '../../components/PlantCard/PlantCard';
import './PlantList.css';

export default function PlantList() {
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const renderPlantCards = () => {
    return plantData.map((plant, index) => (
      <PlantCard key={index} plant={plant} />
    ));
  };

  return (
    <div className="plant-list">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data. Please check the console for details.</p>
      ) : (
        renderPlantCards().slice(0, 12)
      )}
    </div>
  );
}
