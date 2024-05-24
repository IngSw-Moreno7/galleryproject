import React from 'react';
import turquia1Image  from '../images/turquia1.jpg';

const Turquia1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={turquia1Image} alt="Ciudad de Éfeso en Izmir, Turquía" className="image" />
      <div className="caption-container">
        <p className="image-caption">Biblioteca de Celso en la antigua ciudad de Éfeso en Izmir, Turquía</p>
      </div>
    </div>
  );
};

export default Turquia1;
