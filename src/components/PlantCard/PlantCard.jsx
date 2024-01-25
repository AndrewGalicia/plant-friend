import './PlantCard.css';
import React, { useState, useEffect} from 'react';
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
      <h1>API Data</h1>
        {data ? (
            <pre>{JSON.stringify(data.origin, null, 2)}</pre>
        ) : (
        <p>Loading...</p>
      )}
    </div>
    );
      
}
