import React, { useContext, useState, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { Container } from 'react-bootstrap';
import './Home.css';

import GITHUB from "../../img/Github.png";
import GMAIL from "../../img/Send.png";
import LINKEDIN from "../../img/Linkedin.png";
import PROFILE from "../../img/Laiara.jpg"; // Add your profile image here

const Home = () => {
  const { translations } = useContext(LanguageContext);
  const [profileImage, setProfileImage] = useState(PROFILE);

  return (
    <Container fluid className="home">
      <div className="hero-section">
        <div className="profile-container">
          <div className="profile-image-wrapper" >
            <img 
              src={profileImage}
              alt="Profile" 
              className="profile-image"
            />
            
            <div className="profile-overlay">
              <div className="overlay-content">
                <h3>Laiara Leizer</h3>
                <p>Idade: 18 anos</p>
                <p>Status: Procurando Estágio</p>
              </div>
            </div>
          </div>
          <div className="content">
            <h1 className="title">{translations.title}</h1>
            <h2 className="name">Laiara Leizer</h2>
            <p className="description">{translations.greeting}</p>
            <p className="about">{translations.about}</p>
            <p className="cta">{translations.cta}</p>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/LaiaraLeizer" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={GITHUB} alt="GitHub School" />
            <span>GITHUB ESCOLAR</span>
            <span>https://github.com/LaiaraLeizer (Escola)</span>
          </a>

          <a href="https://github.com/Laiara-Leizer" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={GITHUB} alt="GitHub Professional" />
            <span>GITHUB PROFISSIONAL</span>
            <span>https://github.com/Laiara-Leizer (Profissional)</span>
          </a>

          <a href="https://www.linkedin.com/in/laiara-leizer-30b18a318/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={LINKEDIN} alt="LinkedIn" />
            <span>LINKEDIN</span>
            <span>https://www.linkedin.com/in/laiara-leizer-30b18a318/</span>
          </a>

          <a href="mailto:laiaraleizer06@gmail.com" className="social-link">
            <img src={GMAIL} alt="Email" />
            <span>EMAIL</span>
            <span>laiaraleizer06@gmail.com</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Home;