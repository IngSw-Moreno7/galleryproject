import React from 'react';
import { Link } from 'react-router-dom';
import Amsterdam1 from './Amsterdam1';
import Bangkok1 from './Bangkok1';
import Espana1 from './Espana1';
import Francia1 from './Francia1';
import Munich1 from './Munich1';
import Nuevayork1 from './Nuevayork1';
import Seul1 from './Seul1';
import Turquia1 from './Turquia1';
import Turquia2 from './Turquia2';
import Turquia3 from './Turquia3';
import Turquia4 from './Turquia4';
import Turquia5 from './Turquia5';

const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/amsterdam1" className="links">
        <figure className="image-size">
            <Amsterdam1 />
            <figcaption>Amsterdam</figcaption>
        </figure>
      </Link>
      <Link to="/bangkok1" className="links">
        <figure className="image-size">
          <Bangkok1 />
          <figcaption>Bangkok</figcaption>
        </figure>
      </Link>
      <Link to="/espana1" className="links">
        <figure className="image-size">
          <Espana1 />
          <figcaption>España</figcaption>
        </figure>
      </Link>
      <Link to="/francia1" className="links">
        <figure className="image-size">
          <Francia1 />
          <figcaption>Francia</figcaption>
        </figure>
      </Link>
      <Link to="/munich1" className="links">
        <figure className="image-size">
          <Munich1 />
          <figcaption>Múnich</figcaption>
        </figure>
      </Link>
      <Link to="/nuevayork1" className="links">
        <figure className="image-size">
          <Nuevayork1 />
          <figcaption>Nueva York</figcaption>
        </figure>
      </Link>
      <Link to="/seul1" className="links">
        <figure className="image-size">
          <Seul1 />
          <figcaption>Seúl</figcaption>
        </figure>
      </Link>
      <Link to="/turquia1" className="links">
        <figure className="image-size">
          <Turquia1 />
          <figcaption>Turquía 1</figcaption>
        </figure>
      </Link>
      <Link to="/turquia2" className="links">
        <figure className="image-size">
          <Turquia2 />
          <figcaption>Turquía 2</figcaption>
        </figure>
      </Link>
      <Link to="/turquia3" className="links">
        <figure className="image-size">
          <Turquia3 />
          <figcaption>Turquía 3</figcaption>
        </figure>
      </Link>
      <Link to="/turquia4" className="links">
        <figure className="image-size">
          <Turquia4 />
          <figcaption>Turquía 4</figcaption>
        </figure>
      </Link>
      <Link to="/turquia5" className="links">
        <figure className="image-size">
          <Turquia5 />
          <figcaption>Turquía 5</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default Navigation
