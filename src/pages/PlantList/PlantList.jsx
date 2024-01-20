import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './PlantList.css';

const PERENUAL = process.env.REACT_APP_PERENUAL;

export default function PlantList() {
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
          <h1>API Data</h1>
          <pre>{JSON.stringify(data.origin[0], null, 2)}</pre>
      </div>
  );
}
