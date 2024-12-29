import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { LanguageContext } from '../../context/LanguageContext';
import './Behavior.css';

const Behavior = () => {
  const { translations } = useContext(LanguageContext);
  const b = translations.behavior;

  return (
    <Container className="behavior">
      <h2 className="text-center mb-4">{b.title}</h2>
      <p className="text-center mb-4">{b.intro}</p>
      <div className="behavior-cards">
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>{b.teamwork.title}</Card.Title>
            <Card.Text>{b.teamwork.description}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>{b.determination.title}</Card.Title>
            <Card.Text>{b.determination.description}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>{b.travel.title}</Card.Title>
            <Card.Text>{b.travel.description}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>{b.leadership.title}</Card.Title>
            <Card.Text>{b.leadership.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Behavior;

