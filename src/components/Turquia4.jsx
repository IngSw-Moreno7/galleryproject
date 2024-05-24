import React from 'react';
import turquia4Image from '../images/turquia4.jpg';

const Turquia4 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={turquia4Image} alt="Mezquita de Mevlana" className="image"/>
      <div className="caption-container">
        <p className="image-caption">Mezquita de Mevlana en Konya,Turquía</p>
      </div>
    </div>
  );
};

export default Turquia4;
