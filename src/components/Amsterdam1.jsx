import React from 'react';
import amsterdamImage from '../images/amsterdam1.jpg'; 

const Amsterdam1 = ( {className}) => {
  return (
    <div className={'image-container ${className}'}>
      <img src={amsterdamImage} alt="Calles de amsterdam" className="image" /> 
    </div>
  );
};

export default Amsterdam1;
