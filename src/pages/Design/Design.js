import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { LanguageContext } from '../../context/LanguageContext';
import './Design.css';
import DELIVERY from '../../img/App Delivery.png';
import ARMARIOS from '../../img/Armários.png';
import PSICDA from '../../img/PSICDA.png';
import VARIOS from '../../img/Varios Sites.png';

const images = {
  delivery: DELIVERY,
  psicda: PSICDA,
  armarios: ARMARIOS,
  varios: VARIOS
};

const links = {
  psicda: 'https://www.figma.com/design/83gxahVVDjkIi98lPRkFOi/Meu-TCC?node-id=75-304&t=upP0Ydl4q3DpKE1q-1',
  armarios: 'https://www.figma.com/design/uaIOB61EMYyCxXnojvnBMK/Armarios-do-Cimol?node-id=32-57&t=6noah0CKJACQUZob-1',
  varios: 'https://www.figma.com/design/bBIFQmePxoafnf2x70ICHG/Varios-Sites?node-id=0-1&t=TKcKpBROqJwP65jI-1',
  default: 'https://www.figma.com/design/Xq6c9RTsmTjQ9qGYKmkaZD/Layout-de-app-de-delivery?node-id=26-58&t=JEeQzumsO1mY0OAU-1',
  default2: 'https://www.figma.com/file/EXAMPLE_DEFAULT'
};

const Design = () => {
  const { translations } = useContext(LanguageContext);
  const d = translations.designs;

  return (
    <Container className="designs">
      <h2 className="text-center mb-4">{d.title}</h2>
      <p className="text-center mb-4">{d.description}</p>

      <div className='designs-cards'>
        {Object.entries(d.categories).map(([key, category]) => (
          <Card key={key} className="mb-4">
            <Card.Body>
              <Card.Title>{category.title}</Card.Title>
              {images[key] && (
                <img className="img-designs" src={images[key]} alt={`Imagem representativa de ${category.title}`} />
              )}

              <a href={links[key] || links.default} target="_blank" rel="noopener noreferrer" className="project-link">
                <span>
                  {key === 'psicda' ? 'Clique aqui para ver o Figma de PSICDA' : 
                   key === 'armarios' ? 'Clique aqui para ver o Figma dos armários' : 
                   key === 'varios' ? 'Clique aqui para ver o Figma de TODOS os meus projetos' :
                   'Clique aqui para visualizar'}
                </span>
              </a>

              <Card.Text className="Card-Text">{category.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Design;
