import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const translations = {
    pt: {
      title: 'Estudante de Informática',
      greeting: 'Olá! Prazer, me chamo Laiara Leizer e sou uma estudante da Escola Técnica Estadual Monteiro Lobato (Cimol), a qual faço o ensino médio integrado ao técnico de informática.',
      about: 'Sou uma pessoa que ama estudar novas coisas, aprimorar o conhecimento e ajudar as pessoas a conseguirem o mesmo.',
      cta: 'Fiquem a vontade para visualizar meu trabalho abaixo e contatar-me.',
      nav: {
        home: 'Início',
        behavior: 'Comportamentos',
        knowledge: 'Conhecimentos'
      },
      Knowledge: {
        title: 'Conhecimentos',
        passion: 'Minha maior paixão é a área de criação de sites no front end e o design gráfico.',
        currently: 'Entretanto, sou Full-Stack e as coisas que estou estudando são:',
        software: 'Softwares: VSCode, Figma, Xampp, Postman, Intellij, Photoshop, CorelDraw e Wordpress;',
        design: 'Área do Design: Tipografia, Psicologia das cores, UX, UI;',
        frontend: 'Front-end: HTML, CSS e JavaScript;',
        backend: 'Back-end: Java, JavaScript e Node;',
        databases: 'Databases: MongoDB e MySQL;',
        frameworks: 'Frameworks: Breves conhecimentos em Angular, React e Bootstrap.',
        additional: 'Adicionais: C, Redes, Manutenção básica de Computadores e Sistemas Operacionais.',
        inProgress: 'Em andamento em curso que faço: Illustrator, InDesign, Inglês.',
        future: 'Pretendo aprender: Cyber Segurança, Análise e Desenvolvimento de Sistemas, Gestão de Processos e Métodos Ágeis, mecatronica, engenharia da computação e/ou ciencia da computação.',
        languages: 'Idiomas: Português (nativa) e Inglês (Intermediário).'
      }
    },
    en: {
      title: 'Computer Science Student',
      greeting: 'Hi! Nice to meet you, I\'m Laiara Leizer and I\'m a student at Monteiro Lobato State Technical School (Cimol), where I take integrated high school with technical computer science.',
      about: 'I\'m someone who loves studying new things, improving knowledge and helping people achieve the same.',
      cta: 'Feel free to view my work below and contact me.',
      nav: {
        home: 'Home',
        behavior: 'Behavior',
        knowledge: 'Knowledge'
      },
      Knowledge: {
        title: 'Knowledge',
        passion: 'My biggest passion is frontend website creation and graphic design.',
        currently: 'However, I am Full-Stack and these are the things I am studying:',
        software: 'Software: VSCode, Figma, Xampp, Postman, Intellij, Photoshop, CorelDraw and Wordpress;',
        design: 'Design Area: Typography, Color Psychology, UX, UI;',
        frontend: 'Front-end: HTML, CSS and JavaScript;',
        backend: 'Back-end: Java, JavaScript and Node;',
        databases: 'Databases: MongoDB and MySQL;',
        frameworks: 'Frameworks: Basic knowledge in Angular, React and Bootstrap.',
        additional: 'Additional: C, Networks, Basic Computer Maintenance and Operating Systems.',
        inProgress: 'Currently learning: Illustrator, InDesign, English.',
        future: 'Planning to learn: Cyber Security, Systems Analysis and Development, Process Management and Agile Methods, Mechatronics, Computer Engineering and/or Computer Science.',
        languages: 'Languages: Portuguese (native) and English (Intermediate).'
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

