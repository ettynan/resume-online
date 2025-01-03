import React, { useState, useEffect } from 'react';
import '../styles/VisitorCounter.css';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate fetching visitor count from an API
    const savedCount = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(savedCount, 10) + 1;
    localStorage.setItem('visitorCount', newCount);
    setCount(newCount);
  }, []);

  return (
    <div className="visitor-counter">
      <h3>Visitor Counter</h3>
      <p>You're visitor number: {count}</p>
    </div>
  );
};

export default VisitorCounter;