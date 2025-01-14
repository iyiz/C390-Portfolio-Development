import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <footer>
        <p>© 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;