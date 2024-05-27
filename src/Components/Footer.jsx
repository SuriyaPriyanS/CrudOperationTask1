import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark mt-5 text-light text-center p-3">
      <div className="container">
        <p>© {currentYear} Suriyapriyan.s</p>
        <div className="social-icons">
          <a href="https://github.com/SuriyaPriyanS" className="me-3 text-light">
          <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/suriya-priyan-ab186721b/" className="text-light">
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;