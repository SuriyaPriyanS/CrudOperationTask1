import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bundle.bootstrap.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/logoimg.svg" alt="Brand Logo" width="80" height="60" className="d-inline-block align-text-top me-2" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h4 className='fw-bold'><Link to="/" className="nav-link" aria-current="page">Home</Link></h4>
            </li>
            <li className="nav-item">
              <h4 className='fw-bold'><Link to="/addcontact" className="nav-link">Add Contact</Link></h4>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;