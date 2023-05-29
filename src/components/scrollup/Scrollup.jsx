import React, { useState, useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default ScrollUp;
