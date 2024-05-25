import React from 'react';
import bangkokImage from '../images/bangkok1.jpg';

const Bangkok1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={bangkokImage} alt="descripcion lugar" className="image" />
    </div>
  );
};

export default Bangkok1;
