import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Amsterdam1 from './components/Amsterdam1';
import Bangkok1 from './components/Bangkok1';
import Espana1 from './components/Espana1';
import Francia1 from './components/Francia1';
import Munich1 from './components/Munich1';
import Nuevayork1 from './components/Nuevayork1';
import Seul1 from './components/Seul1';
import Turquia1 from './components/Turquia1';
import Turquia2 from './components/Turquia2';
import Turquia3 from './components/Turquia3';
import Turquia4 from './components/Turquia4';
import Turquia5 from './components/Turquia5';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
        <Route path="/amsterdamImage" element={<Amsterdam1 className="image-size" /> }  />
        <Route path="/bangkokImage" element={<Bangkok1  className="image-size" />} />
        <Route path="/espanaImage" element={<Espana1 className="image-size"/>} />
        <Route path="/franciaImage" element={<Francia1 className="image-size" />} />
        <Route path="/munichImage" element={<Munich1 className="image-size" />} />
        <Route path="/nuevayorkImage" element={<Nuevayork1 className="image-size" />} />
        <Route path="/seulImage" element={<Seul1 className="image-size" />} />
        <Route path="/turquia1Image}" element={<Turquia1 className="image-size" />} />
        <Route path="/turquia2Image}" element={<Turquia2 className="image-size" />} />
        <Route path="/turquia3Image}" element={<Turquia3 className="image-size"  />} />
        <Route path="/turquia4Image}" element={<Turquia4 className="image-size" />} />
        <Route path="/turquia5Image}" element={<Turquia5 className="image-size"/>} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App
