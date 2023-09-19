import React from 'react'
import Click from '../../assets/click.jpeg';
import aimIcon from '../../assets/aim-icon.jpeg';
import visionIcon from '../../assets/vision-icon.jpeg';
import missionIcon from '../../assets/mission-icon.jpeg';
import './landing.css';
const LandingPage = () => {
  return (
    <div className='myBg'>
      <header>
        <div class="header-text">

          <h1>LegalVerse</h1>
          <div className="subLV">
            <p> "Revolutionizing the Legal Landscape: Crafting Easy-to-Understand Legal Documents for You."</p>
          </div>

          <button id="login"> Login </button>
          <button id="signup"> SignUp </button>
        </div>
      </header>
      <div class="container">
        <div class="card">
          <div class="card1">
            <h1>50+</h1>
            <h6>Legal docs generated within a click</h6>
          </div>
          <div class="card2">
            <h1>100+</h1>
            <h6>Legislative texts simplified</h6>
          </div>
          <div class="card3">
            <h1>47</h1>
            <h6>Lawyers to choose from to schedule call/appointment</h6>
          </div>
        </div>
        <div class="flex-partition">
          <div class="partition-card1">
            <img src={Click} alt="Click Image" />
            <p style={{ fontWeight: '500', color: 'black', fontFamily: 'Poppins, sans-serif', fontSize: '20px' }}>We are simplifying the Legal Journey for you: </p><p style={{ fontWeight: '700', color: 'black', fontFamily: 'Poppins, sans-serif', fontSize: '20px' }}>Accessible, Understandable AI-Generated Legal Documents Tailored in just a click.</p>
          </div>
          <div class="partition-card2">
            <h1 id="aboutus">About Us</h1>

            <div class="flex-icon">
              <div class="image-container">
                <img src={missionIcon} alt="Image" />
              </div>
              <div class="text-container">
                <h2>Mission</h2>
              </div>
            </div>

            <h4>Demystifying legal complexities for all</h4>
            <br />
            <div class="flex-icon">
              <div class="image-container">
                <img src={visionIcon} alt="Image" />
              </div>
              <div class="text-container">
                <h2>Vision</h2>
              </div>
            </div>

            <h4>Solution to all your diverse legal issues</h4>
            <br />
            <div class="flex-icon">
              <div class="image-container">
                <img src={aimIcon} alt="Image" />
              </div>
              <div class="text-container">
                <h2>Aim</h2>
              </div>
            </div>
            <h4>We aim to simplify legal information in the form of documents as well as texts in the best possible manner out there.</h4>

          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage