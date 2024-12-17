import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './Home.css';
import GitHub from '../../img/Github.png';
import Linkedin from '../../img/Linkedin.png';
import Send from '../../img/Send.png';

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
        
        
        <a className='fooster_link' href="https://github.com/LaiaraLeizer" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
          <h3>GITHUB ESCOLAR</h3>
        </a>

        <a className='fooster_link' href="https://github.com/Laiara-Leizer" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub_Novo" />
          <h3>GITHUB PROFICIONAL</h3>
        </a>






        <a className='fooster_link' href="https://www.linkedin.com/in/laiara-leizer-30b18a318/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn" />
          <h3>LINKEDIN</h3>
        </a>



        <a className='fooster_link' href="mailto:laiaraleizer06@gmail.com">
          <img src={Send} alt="Email" />
          <h3>EMAIL</h3>
        </a>



      </div>
    </div>
  );
}

