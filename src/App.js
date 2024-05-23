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
      <Navigation />
      <Routes>
        <Route path="/Amsterdam1" element={<Amsterdam1 />} />
        <Route path="/Bangkok1" element={<Bangkok1 />} />
        <Route path="/Espana1" element={<Espana1 />} />
        <Route path="/Francia1" element={<Francia1 />} />
        <Route path="/Munich1" element={<Munich1 />} />
        <Route path="/Nuevayork1" element={<Nuevayork1 />} />
        <Route path="/Seul1" element={<Seul1 />} />
        <Route path="/Turquia1" element={<Turquia1 />} />
        <Route path="/Turquia2" element={<Turquia2 />} />
        <Route path="/Turquia3" element={<Turquia3 />} />
        <Route path="/Turquia4" element={<Turquia4 />} />
        <Route path="/Turquia5" element={<Turquia5 />} />
      </Routes>
    </Router>
  );
}

export default App;
