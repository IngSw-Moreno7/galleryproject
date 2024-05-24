import React from 'react';
import turquia5Image from '../images/turquia5.jpg';

const Turquia5 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={turquia5Image} alt="Mezquita" className="image" />
      <div className="caption-container">
        <p className="image-caption">Mezquita-Buyuk Mecidiye</p>
      </div>
    </div>
  );
};

export default Turquia5;
