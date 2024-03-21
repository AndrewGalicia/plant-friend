// FilterComponent.js
import React from 'react';

const FilterComponent = ({ applyFilter }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    applyFilter(name, value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Filters</h5>
        <div className="form-group">
          <label>Edible:</label>
          <select className="form-control" name="edible" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1">Edible</option>
            <option value="0">Not Edible</option>
          </select>
        </div>
        <div className="form-group">
          <label>Poisonous:</label>
          <select className="form-control" name="poisonous" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1">Poisonous</option>
            <option value="0">Not Poisonous</option>
          </select>
        </div>
        <div className="form-group">
          <label>Cycle:</label>
          <select className="form-control" name="cycle" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="perennial">Perennial</option>
            <option value="annual">Annual</option>
            <option value="biennial">Biennial</option>
            <option value="biannual">Biannual</option>
          </select>
        </div>
        <div className="form-group">
          <label>Watering:</label>
          <select className="form-control" name="watering" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="frequent">Frequent</option>
            <option value="average">Average</option>
            <option value="minimum">Minimum</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="form-group">
          <label>Sunlight:</label>
          <select className="form-control" name="sunlight" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="full_shade">Full Shade</option>
            <option value="part_shade">Part Shade</option>
            <option value="sun-part_shade">Sun-Part Shade</option>
            <option value="full_sun">Full Sun</option>
          </select>
        </div>
        <div className="form-group">
          <label>Indoor:</label>
          <select className="form-control" name="indoor" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1">Indoor</option>
            <option value="0">Outdoor</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
