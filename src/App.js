// src/App.js
import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

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
    </div>
  );
};

export default App;
