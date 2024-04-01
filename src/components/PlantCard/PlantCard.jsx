import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaStar } from 'react-icons/fa';

const PlantCard = ({ plant, addToFavorites }) => {
  const { default_image, common_name, scientific_name, id } = plant;
  const thumbnail = default_image ? default_image.thumbnail : null;

  // Function to toggle favorite status
  const toggleFavorite = () => {
    addToFavorites(plant);
  };

  return (
    <div className="card" style={{ width: '12rem' }}>
      {thumbnail && <img src={thumbnail} className="card-img-top" alt={common_name} />}
      <div className="card-body">
        <h5 className="card-title">{common_name}</h5>
        <p>{scientific_name}</p>
        {/* Link to the PlantDetails page */}
        <Link to={`/plant/${id}`} className="btn btn-success">Details</Link>
      </div>
    </div>
  );
};

export default PlantCard;
