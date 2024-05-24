import React from 'react';
import seulImage from '../images/seul1.jpg';

const Seul1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={seulImage} alt="Ciudad de Seúl" className="image" />
      <div className="caption-container">
        <p className="image-caption">Ciudad de Seúl</p>
      </div>
    </div>
  );
};

export default Seul1;
