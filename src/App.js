// src/App.js
import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import VisitorCounter from './components/VisitorCounter';

const App = () => {
  return (
    <div className="container">
      <Header />                           
      <Summary />
      <Skills />
      <Certifications />
      <Education />
      <Experience />
      <Projects />
      <VisitorCounter />
      {/* Footer with image credits */}
      <footer className="footer">
        <p>Images courtesy of 
          <a href="https://www.pexels.com/photo/photo-of-golden-cogwheel-on-black-background-3785930/" target="_blank" rel="noopener noreferrer"> Miguel Á. Padriñán on Pexels</a>,
          <a href="https://www.pexels.com/photo/gray-and-gold-steel-gears-159275/" target="_blank" rel="noopener noreferrer"> Pixabay on Pexels</a>,
          and <a href="https://unsplash.com/photos/a-close-up-of-a-watch-face-with-the-gears-missing-3dyDozzCORw" target="_blank" rel="noopener noreferrer">Lukas Tennie on Unsplash</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;
