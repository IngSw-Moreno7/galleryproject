import React from 'react';
import seulImage from '../images/seul1.jpg';

const Seul1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={seulImage} alt="descripcion lugar" className="image" />
    </div>
  );
};

export default Seul1;
