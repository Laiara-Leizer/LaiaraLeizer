import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './Home.css';

export default function Home() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="home">
      <div className="profile-section">
        <h1>{t.title}</h1>
        <div className="profile-image">
          <div className="circle" />
        </div>
        <p className="greeting">{t.greeting} {t.about} <p className="cta">{t.cta}</p> </p>
        {/* <p className="about"></p> */}
        
      </div>
      <div className="social-links">
        <a href="https://github.com/LaiaraLeizer" target="_blank" rel="noopener noreferrer">
          <img src="/github-icon.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/laiara-leizer-30b18a318/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="mailto:laiaraleizer06@gmail.com">
          <img src="/email-icon.png" alt="Email" />
        </a>
      </div>
    </div>
  );
}

