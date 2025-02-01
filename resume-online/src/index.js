import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'; // Importing the external CSS file
import './styles/VisitorCounter.css'; // Import the VisitorCounter.css file
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import the AOS library
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialize AOS
AOS.init({
  duration: 1200, // Set animation duration (in milliseconds)
  easing: 'ease-in-out', // Set the animation easing
  once: true, // Whether animation should happen only once while scrolling
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure app performance
reportWebVitals();
