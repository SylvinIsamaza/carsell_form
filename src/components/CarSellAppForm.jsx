import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarSellForm = () => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: 0,
    contactNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({ ...formData, features: [...formData.features, name] });
    } else {
      setFormData({
        ...formData,
        features: formData.features.filter((feature) => feature !== name),
      });
    }
  };

  const handleSliderChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, priceRange: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Perform further actions here (e.g., submit the data to a server)
  };

  return (
<>
<h1 className='mb-5 mt-3'>car sell form</h1>
    <form onSubmit={handleSubmit}>
    
      <div className="mb-3 ">
        <label htmlFor="carMake" className="form-label">Car Make:</label>
        <input
          type="text"
          className="form-control"
          id="carMake"
          name="carMake"
          value={formData.carMake}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="carModel" >Car Model:</label>
        <input
          type="text"
          className="form-control"
          id="carModel"
          name="carModel"
          value={formData.carModel}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="year" className="form-label">Year:</label>
        <input
          type="date"
          className="form-control"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="mileage" className="form-label">Mileage:</label>
        <input
          type="number"
          className="form-control"
          id="mileage"
          name="mileage"
          value={formData.mileage}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Condition:</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="excellent"
            name="condition"
            value="Excellent"
            checked={formData.condition === 'Excellent'}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="excellent" className="form-check-label">Excellent</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="good"
            name="condition"
            value="Good"
            checked={formData.condition === 'Good'}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="good" className="form-check-label">Good</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="fair"
            name="condition"
            value="Fair"
            checked={formData.condition === 'Fair'}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="fair" className="form-check-label">Fair</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="poor"
            name="condition"
            value="Poor"
            checked={formData.condition === 'Poor'}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="poor" className="form-check-label">Poor</label>
        </div>
      </div>
      <div className="mb-3 ">
        <label className="form-label">Features:</label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="airConditioning"
            name="Air Conditioning"
            checked={formData.features.includes('Air Conditioning')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="airConditioning" className="form-check-label">Air Conditioning</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="powerSteering"
            name="Power Steering"
            checked={formData.features.includes('Power Steering')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="powerSteering" className="form-check-label">Power Steering</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="powerWindows"
            name="Power Windows"
            checked={formData.features.includes('Power Windows')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="powerWindows" className="form-check-label">Power Windows</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="abs"
            name="ABS"
            checked={formData.features.includes('ABS')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="abs" className="form-check-label">ABS</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="navigationSystem"
            name="Navigation System"
            checked={formData.features.includes('Navigation System')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="navigationSystem" className="form-check-label">Navigation System</label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="transmission" className="form-label">Transmission:</label>
        <select
          className="form-select"
          id="transmission"
          name="transmission"
          value={formData.transmission}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="priceRange" className="form-label">Price Range:</label>
        <input
          type="range"
          className="form-range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="100000"
          step="1000"
          value={formData.priceRange}
          onChange={handleSliderChange}
        />
        <span>${formData.priceRange}</span>
      </div>
      <div className="mb-3  ">
        <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
        <input
          type="text"
          className="form-control"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  );
};

export default CarSellForm;
