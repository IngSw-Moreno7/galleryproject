import React from 'react';
import nuevayorkImage from '../images/nuevayork1.jpg';

const Nuevayork1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={nuevayorkImage} alt="descripcion lugar" className="image" />
    </div>
  );
};

export default Nuevayork1;
