import React from 'react';
import franciaImage from '../images/francia1.jpg';

const Francia1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={franciaImage} alt="descripcion lugar" className="image" />
    </div>
  );
};

export default Francia1;