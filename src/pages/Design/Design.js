import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { LanguageContext } from '../../context/LanguageContext';
import './Design.css';

const Design = () => {
  const { translations } = useContext(LanguageContext);
  const d = translations.designs;

  return (
    <Container className="designs">
      <h2 className="text-center mb-4">{d.title}</h2>
      <p className="text-center mb-4">{d.description}</p>


        






    </Container>
  );
};

export default Design;

