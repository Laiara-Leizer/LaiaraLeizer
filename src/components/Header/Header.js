import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import './Header.css';
import br from '../../img/Brasil.png';
import eua from '../../img/Estados Unidos.png';

export default function Header() {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">{translations[language].nav.home}</Link>
        <Link to="/behavior">{translations[language].nav.behavior}</Link>
        <Link to="/knowledge">{translations[language].nav.knowledge}</Link>
      </nav>
      <div className="language-flags">
        <img 
          src={eua} 
          alt="English"
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        />
        <img 
          src={br} 
          alt="Português"
          onClick={() => setLanguage('pt')}
          className={language === 'pt' ? 'active' : ''}
        />
      </div>
    </header>
  );
}

