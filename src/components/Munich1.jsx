import React from 'react';
import munichImage from '../images/munich1.jpg';

const Munich1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={munichImage} alt="Vista desde la catedral en Múnich" className="image" />
      <div className="caption-container">
        <p className="image-caption">Vista desde la catedral en Múnich</p>
      </div>
    </div>
  );
};

export default Munich1;
