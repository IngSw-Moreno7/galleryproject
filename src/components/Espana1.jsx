import React from 'react';
import espanaImage from '../images/espana1.jpg';

const Espana1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={espanaImage} alt="Segovia, España" className="image" />
      <div className="caption-container">
        <p className="image-caption">Segovia, España</p>
      </div>
    </div>
  );
};

export default Espana1;
