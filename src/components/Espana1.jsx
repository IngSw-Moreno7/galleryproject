import React from 'react';
import espanaImage from '../images/espana1.jpg';

const Espana1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={espanaImage} alt="descripcion lugar" className="image" />
    </div>
  );
};

export default Espana1;
