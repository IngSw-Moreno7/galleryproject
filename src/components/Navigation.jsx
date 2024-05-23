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
    <div>
    <Link to="/Amsterdam1">
        <figure>
            <amsterdam1 />
            <figcaption>Amsterdam</figcaption>
        </figure>
    </Link>
    <Link to="/Bangkok1">
        <figure>
          <bangkok1 />
          <figcaption>Bangkok</figcaption>
        </figure>
    </Link>
    <Link to="/Espana1">
        <figure>
          <espana1 />
          <figcaption>España</figcaption>
        </figure>
    </Link>
    <Link to="/Francia1">
        <figure>
          <francia1 />
          <figcaption>Francia</figcaption>
        </figure>
    </Link>
    <Link to="/Munich1">
        <figure>
          <munich1 />
          <figcaption>Múnich</figcaption>
        </figure>
    </Link>
    <Link to="/Nuevayork1">
        <figure>
          <nuevayork1 />
          <figcaption>Nueva York</figcaption>
        </figure>
    </Link>
    <Link to="/Seul1">
        <figure>
          <seul1 />
          <figcaption>Seúl</figcaption>
        </figure>
    </Link>
    <Link to="/Turquia1">
        <figure>
          <turquia1 />
          <figcaption>Turquía 1</figcaption>
        </figure>
    </Link>
    <Link to="/Turquia2">
        <figure>
          <turquia2 />
          <figcaption>Turquía 2</figcaption>
        </figure>
    </Link>
    <Link to="/Turquia3">
        <figure>
          <turquia3 />
          <figcaption>Turquía 3</figcaption>
        </figure>
    </Link>
    <Link to="/Turquia4">
        <figure>
          <turquia4 />
          <figcaption>Turquía 4</figcaption>
        </figure>
    </Link>
    <Link to="/Turquia5">
        <figure>
          <turquia5 />
          <figcaption>Turquía 5</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default Navigation;
