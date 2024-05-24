import React from 'react';
import franciaImage from '../images/francia1.jpg';

const Francia1 = () => {
  return (
    <div className={'image-container {className}'}>
      <img src={franciaImage} alt="Rivera francesa" className="image" />
      <div className="caption-container">
        <p className="image-caption">Rivera francesa-Cote d'Azur</p>
      </div>
    </div>
  );
};

export default Francia1;