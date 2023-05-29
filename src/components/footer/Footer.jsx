import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Original Lesson Plans & Academic Papers.</p>
      </div>
    </footer>
  );
};

export default Footer;
