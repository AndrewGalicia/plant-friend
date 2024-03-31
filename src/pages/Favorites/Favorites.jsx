// Favorites.js
import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';

const Favorites = ({ favoritePlants }) => {
  return (
    <div className="container">
      <h2>My Favorite Plants</h2>
      <div className="row">
        {favoritePlants.map((plant) => (
          <div key={plant.id} className="col-lg-3 mb-4">
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
