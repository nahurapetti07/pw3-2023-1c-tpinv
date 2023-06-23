import React, { useEffect, useState } from 'react';
import '../animations/animations.css';

const FadeUpAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeUpAnimation;