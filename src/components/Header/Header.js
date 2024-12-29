import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">{translations.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{translations.nav.home}</Nav.Link>
            <Nav.Link as={Link} to="/behavior">{translations.nav.behavior}</Nav.Link>
            <Nav.Link as={Link} to="/knowledge">{translations.nav.knowledge}</Nav.Link>
            <Nav.Link as={Link} to="/projects">{translations.nav.projects}</Nav.Link>
          </Nav>
          <div className="language-buttons">
            <Button 
              variant={language === 'pt' ? 'primary' : 'outline-light'} 
              onClick={() => setLanguage('pt')}
              className="me-2"
            >
              PT
            </Button>
            <Button 
              variant={language === 'en' ? 'primary' : 'outline-light'} 
              onClick={() => setLanguage('en')}
            >
              EN
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

