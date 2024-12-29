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

        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Artificial Intelligence (IA)</Card.Title>
            <Card.Text>{k.ia}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Additional Skills</Card.Title>
            <Card.Text>{k.additional}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body>
            <Card.Title>In Progress</Card.Title>
            <Card.Text>{k.inProgress}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Future Learning</Card.Title>
            <Card.Text>{k.future}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Languages</Card.Title>
            <Card.Text>{k.languages}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Agile Methods</Card.Title>
            <Card.Text>{k.Agile}</Card.Text>
          </Card.Body>
        </Card>

      </div>
    </Container>
  );
};

export default Knowledge;

