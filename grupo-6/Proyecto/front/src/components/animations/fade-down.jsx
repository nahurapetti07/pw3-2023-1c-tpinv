import React, { useEffect, useState } from 'react';
import '../animations/animations.css';

const FadeDownAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-down ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeDownAnimation;