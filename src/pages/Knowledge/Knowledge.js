import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './Knowledge.css';

export default function Knowledge() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language].Knowledge;

  return (
    <div className="knowledge-page">
      <div className="diagonal-line"></div>
      <div className="content">
        <h1>{t.title}</h1>

        <div className="knowledge-content">
          <p className="passion">{t.passion}</p>
          <p className="currently">{t.currently}</p>
          
          <div className="skills-list">
            <p>{t.software}</p>
            <p>{t.design}</p>
            <p>{t.frontend}</p>
            <p>{t.backend}</p>
            <p>{t.databases}</p>
            <p>{t.frameworks}</p>
            <p>{t.additional}</p>
            <p>{t.inProgress}</p>
            <p className="future">{t.future}</p>
            <p className="languages">{t.languages}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
