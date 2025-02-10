import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { LanguageContext } from '../../context/LanguageContext';
import './Knowledge.css';

const Knowledge = () => {
  const { translations } = useContext(LanguageContext);
  const k = translations.knowledge;

  return (
    <Container className="knowledge">
      <h2 className="text-center mb-4">{k.title}</h2>
      <p className="text-center mb-4">{k.passion}</p>
      <p className="text-center mb-4">{k.currently}</p>
      
      <div className="knowledge-cards">
        {Object.entries(k.categories).map(([key, category]) => (
          <Card key={key} className="mb-4">
            <Card.Body>
              <Card.Title>{category.title}</Card.Title>
              <Card.Text>{category.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}

      </div>
    </Container>
  );
};

export default Knowledge;

