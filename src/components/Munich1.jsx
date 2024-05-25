import React from 'react';
import munichImage from '../images/munich1.jpg';

const Munich1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={munichImage} alt="descripcion lugar" className="image" />
    </div>
  );
};

export default Munich1;
