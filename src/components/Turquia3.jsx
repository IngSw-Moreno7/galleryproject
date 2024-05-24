import React from 'react';
import turquia3Image from '../images/turquia3.jpg';

const Turquia3 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={turquia3Image} alt="Mezquita azul en Estambul" className="image" />
      <div className="caption-container">
        <p className="image-caption">Mezquita azul en Estambul, Turquía</p>
      </div>
    </div>
  );
};

export default Turquia3;
