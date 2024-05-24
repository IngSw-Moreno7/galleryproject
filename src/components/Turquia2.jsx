import React from 'react';
import turquia2Image  from '../images/turquia2.jpg';

const Turquia2 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={turquia2Image} alt="Colina de Camlica" className="image" />
      <div className="caption-container">
        <p className="image-caption">Colina de Camlica, Turquía</p>
      </div>
    </div>
  );
};

export default Turquia2;
