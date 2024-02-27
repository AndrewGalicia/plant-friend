import React from 'react';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  // Destructure properties from the plant object
  const { default_image, common_name, scientific_name } = plant;
  // Check if default_image exists, if not set thumbnail to null
  const thumbnail = default_image ? default_image.thumbnail : null;

  return (
    <div className="card" style={{ width: '12rem' }}>
      {/* Conditionally render the image if thumbnail exists */}
      {thumbnail && <img src={thumbnail} className="card-img-top" alt={common_name} />}
      <div className="card-body">
        <h5 className="card-title">{common_name}</h5>
        <p>{scientific_name}</p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
};

export default PlantCard;
