import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/apropos' element ={<About />} />
        <Route path='/projets' element ={<Projects />} />
        <Route path='/contact' element ={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
