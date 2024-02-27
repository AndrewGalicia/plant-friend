// import './PlantCard.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PERENUAL = process.env.REACT_APP_PERENUAL;

// export default function PlantCard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`https://perenual.com/api/species-list?key=${PERENUAL}`);
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, [PERENUAL]);

//   return (
//     <div>
//       {data ? (
//         <div className="card" style={{ width: '12rem' }}>
//           <img src={data.data[0].default_image.thumbnail} className="card-img-top" alt={data.data[0].common_name} />
//           <div className="card-body">
//             <h5 className="card-title">{data.data[0].common_name}</h5>
//             <a href="#" className="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

import './PlantCard.css';
import React from 'react';

export default function PlantCard({ plant }) {
  return (
    
    <div className="card" style={{ width: '12rem' }}>
      <img src={plant.default_image.thumbnail} className="card-img-top" alt={plant.common_name} />
      <div className="card-body">
        <h5 className="card-title">{plant.common_name}</h5>
        <p>{plant.scientific_name}</p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
}
