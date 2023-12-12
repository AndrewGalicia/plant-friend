import React from 'react';
import './PlantList.css';

export default function PlantList() {
  // Example list of plants (replace with your data)
  const plants = [
    { id: 1, name: 'Plant 1' },
    { id: 2, name: 'Plant 2' },
    { id: 3, name: 'Plant 3' },
  ];

  return (
    <div>
      <h2>Plant List</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}
