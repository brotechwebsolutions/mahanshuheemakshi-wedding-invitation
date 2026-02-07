
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-floral">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rsvp" element={<RSVP />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
