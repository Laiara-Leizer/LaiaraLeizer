import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  pt: {
    title: 'Estudante de Informática',
    greeting: 'Olá! Prazer, me chamo Laiara Leizer e sou uma estudante da Escola Técnica Estadual Monteiro Lobato (Cimol), a qual faço o ensino médio integrado ao técnico de informática.',
    about: 'Sou uma pessoa que ama estudar novas coisas, aprimorar o conhecimento e ajudar as pessoas a conseguirem o mesmo.',
    cta: 'Fiquem a vontade para visualizar meu trabalho abaixo e contatar-me.',
    nav: {
      behavior: 'Comportamentos',
      knowledge: 'Conhecimentos',
      projects: 'Projetos'
    },
    behavior: {
      title: 'Comportamentos',
      intro: 'Meus maiores benefícios à empresa em nível de soft-skills são:',
      teamwork: {
        title: 'Trabalho em equipe, adaptabilidade e produtividade',
        description: 'Gosto de trabalhar tanto em equipe, tanto sozinha. Consigo me adaptar bem ao ambiente no qual estou. Entretanto, com pessoas mais amigáveis, minha produtividade em trabalho aumenta.'
      },
      determination: {
        title: 'Força de vontade e esforço',
        description: 'Como falado anteriormente, gosto muito de aprender. Quando algo acontece fora dos conformes ou não funciona, dou o meu melhor para analisar o erro, o entender, e resolvê-lo.'
      },
      travel: {
        title: 'Viagens e Negócios',
        description: 'Se necessário, já que tenho maior facilidade na adaptabilidade, tenho disponibilidade para viajar.'
      },
      leadership: {
        title: 'Liderança',
        description: 'Mesmo não estando no cargo de gerência, gosto de auxiliar as pessoas e a liderança, colocando minha visão junto à do pessoal, tornando o ambiente mais inclusivo e amigável.'
      }
    },
    knowledge: {
      title: 'Conhecimentos',
      passion: 'Minha maior paixão é a área de criação de sites no front end e o design gráfico.',
      currently: 'Entretanto, sou Full-Stack e as coisas que estou estudando são:',
      categories: {
        software: {
          title: 'Softwares',
          description: 'VSCode, Figma, Xampp, Postman, Intellij, Photoshop, CorelDraw e Wordpress'
        },
        design: {
          title: 'Design',
          description: 'Tipografia, Psicologia das cores, UX, UI'
        },
        frontend: {
          title: 'Front-end',
          description: 'HTML, CSS e JavaScript'
        },
        backend: {
          title: 'Back-end',
          description: 'Java, JavaScript e Node'
        },
        databases: {
          title: 'Bancos de Dados',
          description: 'MongoDB e MySQL'
        },
        frameworks: {
          title: 'Frameworks',
          description: 'Angular, React e Bootstrap'
        }
      },
      ia: 'Conhecimentos básicos de inteligência artificial, neste caso a sua utilização para a criação de sites Web. Além disso, em busca de conhecimentos para criar um no futuro (para fins de aprendizagem);',
      additional: 'C, Redes, Manutenção básica de Computadores e Sistemas Operacionais',
      inProgress: 'Illustrator, InDesign, Inglês',
      future: 'Cyber Segurança, Análise e Desenvolvimento de Sistemas, Gestão de Processos e Métodos Ágeis, Mecatrônica, Engenharia da Computação e/ou Ciência da Computação',
      languages: 'Português (nativa) e Inglês (Intermediário)',
      Agile: 'Entendimento do funcionamento de metodologias ágeis como Kanban, Scrum, ScrunBan e Xp. Mas entendimento prático apenas de Kanban.'
    },
    projects: {
      title: 'Meus Projetos',
      viewGithub: 'Ver no GitHub',
      viewSite: 'Ver Site',
      viewCode: 'Ver Código',
      items: {
        psicda: {
          title: 'PSICDA',
          description: 'Site feito para meu Trabalho de Conclusão de Curso, além disso, feito com o intuito de ser transformado em uma mini empresa, ou ao menos, uma pequena organização para realmente auxiliar crianças.'
        },
        devsChat: {
          title: 'Devs_Chat',
          description: 'Trabalho feito para consumir uma API fake, criada por mim.'
        },
        devsChatApi: {
          title: 'Devs_Chat_API',
          description: 'A API, a qual foi consumida no trabalho Devs_Chat.'
        },
        restlux: {
          title: 'RestLux',
          description: 'Site fictício feito com uma API fake. O site tem como objetivo ser um site de restaurantes "de luxo", sendo predominantemente restaurantes de Taquara-RS.'
        }
      }
    }
  },
  en: {
    title: 'Computer Science Student',
    greeting: 'Hi! Nice to meet you, I\'m Laiara Leizer and I\'m a student at Monteiro Lobato State Technical School (Cimol), where I take integrated high school with technical computer science.',
    about: 'I\'m someone who loves studying new things, improving knowledge and helping people achieve the same.',
    cta: 'Feel free to view my work below and contact me.',
    nav: {
      behavior: 'Behavior',
      knowledge: 'Knowledge',
      projects: 'Projects'
    },
    behavior: {
      title: 'Behavior',
      intro: 'My greatest benefits to the company in terms of soft skills are:',
      teamwork: {
        title: 'Teamwork, adaptability, and productivity',
        description: 'I enjoy working both in a team and independently. I can adapt well to the environment I\'m in. However, with friendlier people, my work productivity increases.'
      },
      determination: {
        title: 'Willpower and effort',
        description: 'As mentioned before, I really enjoy learning. When something happens out of the ordinary or doesn\'t work, I do my best to analyze the error, understand it, and solve it.'
      },
      travel: {
        title: 'Travel and Business',
        description: 'If necessary, since I have greater ease in adaptability, I am available to travel.'
      },
      leadership: {
        title: 'Leadership',
        description: 'Even when not in a management position, I like to assist people and leadership, bringing my vision together with the team\'s, making the environment more inclusive and friendly.'
      }
    },
    knowledge: {
      title: 'Knowledge',
      passion: 'My biggest passion is frontend website creation and graphic design.',
      currently: 'However, I am Full-Stack and these are the things I am studying:',
      categories: {
        software: {
          title: 'Software',
          description: 'VSCode, Figma, Xampp, Postman, Intellij, Photoshop, CorelDraw and Wordpress'
        },
        design: {
          title: 'Design',
          description: 'Typography, Color Psychology, UX, UI'
        },
        frontend: {
          title: 'Front-end',
          description: 'HTML, CSS and JavaScript'
        },
        backend: {
          title: 'Back-end',
          description: 'Java, JavaScript and Node'
        },
        databases: {
          title: 'Databases',
          description: 'MongoDB and MySQL'
        },
        frameworks: {
          title: 'Frameworks',
          description: 'Angular, React and Bootstrap'
        }
      },
      ia: 'Basic understanding of artificial intelligence, in this case its use for creating websites. Also, in search of knowledge to create one in the future (for learning purposes);',
      additional: 'C, Networks, Basic Computer Maintenance and Operating Systems',
      inProgress: 'Illustrator, InDesign, English',
      future: 'Cyber Security, Systems Analysis and Development, Process Management and Agile Methods, Mechatronics, Computer Engineering and/or Computer Science',
      languages: 'Portuguese (native) and English (Intermediate)',
      Agile: 'Understanding of how agile methodologies such as Kanban, Scrum, ScrunBan and XP work. But only a practical understanding of Kanban.'
    },
    projects: {
      title: 'My Projects',
      viewGithub: 'View on GitHub',
      viewSite: 'View Site',
      viewCode: 'View Code',
      items: {
        psicda: {
          title: 'PSICDA',
          description: 'Website made for my Course Conclusion Work, furthermore, made with the intention of being transformed into a mini company, or at least, a small organization to really help children.'
        },
        devsChat: {
          title: 'Devs_Chat',
          description: 'Work done to consume a fake API, created by me.'
        },
        devsChatApi: {
          title: 'Devs_Chat_API',
          description: 'The API, which was consumed in the Devs_Chat work.'
        },
        restlux: {
          title: 'RestLux',
          description: 'Fictional website made with a fake API. The site aims to be a "luxury" restaurant site, predominantly restaurants in Taquara-RS.'
        }
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

