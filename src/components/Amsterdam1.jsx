import React from 'react';
import amsterdamImage from '../images/amsterdam1.jpg'; 

const Amsterdam1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={amsterdamImage} alt="descripcion lugar" className="image" /> 
    </div>
  );
};

export default Amsterdam1;
