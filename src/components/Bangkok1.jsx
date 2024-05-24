import React from 'react';
import bangkokImage from '../images/bangkok1.jpg';

const Bangkok1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={bangkokImage} alt="Un atardecer en el río" className="image" />
      <div className="caption-container">
        <p className="image-caption">Bangkok-Río Chao</p>
      </div>
    </div>
  );
};

export default Bangkok1;
