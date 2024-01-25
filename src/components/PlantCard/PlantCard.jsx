import './PlantCard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PERENUAL = process.env.REACT_APP_PERENUAL;

export default function PlantCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://perenual.com/api/species/details/1?key=${PERENUAL}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [PERENUAL]);

  return (
    <div>
      {data ? (
        <div className="card" style={{ width: '18rem' }}>
          <img src={data.default_image.thumbnail} className="card-img-top" alt={data.common_name} />
          <div className="card-body">
            <h5 className="card-title">{data.common_name}</h5>
            <p className="card-text">{data.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
