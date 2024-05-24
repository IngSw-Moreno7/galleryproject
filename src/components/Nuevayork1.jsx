import React from 'react';
import nuevayorkImage from '../images/nuevayork1.jpg';

const Nuevayork1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={nuevayorkImage} alt="Ciudad de Nueva York" className="image" />
      <div className="caption-container">
        <p className="image-caption">Ciudad de Nueva York</p>
      </div>
    </div>
  );
};

export default Nuevayork1;
