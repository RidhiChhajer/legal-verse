
import './navbar.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState(null);


  return (
    <header className="hero">
      <nav className="navbar">
        <h1 className="logo">
          <Link to="/"><span style={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold' }}>LegalVerse</span></Link>
        </h1>
        <div>
          {/* Navigation Links */}
          <div className="nav-menu">
            <Link to="/" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Home</Link>
            <Link to="/ExploreLaws" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Explore Laws</Link>
            <Link to="/GenerateSummary" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>GenerateSummary</Link>
            <Link to="/GenerateTemplate" className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>GenerateTemplate</Link>
            {/* Document Simplify with dropdown */}
            {/* <div className="nav-link" style={{ fontFamily: 'Poppins', fontSize: '20px', position: 'relative' }}>
              <span onClick={toggleDocumentSimplify}>Document Simplify</span>
              {/* Dropdown content 
              {isDocumentSimplifyOpen && (
                <div className="dropdown-content">
                  <div><Link to="/GenerateSummary">Generate Summary</Link></div>
                  <div><Link to="/GenerateTemplate">Generate Template</Link></div>
                </div>
              )}
            </div> */}

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
