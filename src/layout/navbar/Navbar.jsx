import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Navbar = () => {
  return (
      <header className="hero">
        <nav className="navbar">
          <h1 className="logo">
            <Link to="/"><span style={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold' }}>LegalVerse</span></Link>
          </h1>
          <div>
            {/* Navigation Links */}
            <div className="nav-menu">
              {/* Header icons */}
              <Link to="/" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Home</Link>
              <Link to="/ExploreLaws" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Explore Laws</Link>
              <Link to="/DocumentSimplify" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Document Simplify</Link>
              <Link to="/ScheduleCall" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Schedule a Call</Link>
            </div>

            {/* Hamburger button */}
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </header>
  );
}

export default Navbar;