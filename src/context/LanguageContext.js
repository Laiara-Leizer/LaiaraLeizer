import React, { createContext, useState } from 'react';
import Curriculo from '../pages/Curriculo/Curriculo';

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
      projects: 'Projetos',
      designs: 'Designs',
      Curriculo: 'Curriculo'
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
        designs: {
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
        },
        ia: {
          title: 'Inteligência Artificial (IA)',
          description: 'Conhecimentos básicos de inteligência artificial, neste caso a sua utilização para a criação de sites Web. Além disso, em busca de conhecimentos para criar uma no futuro (para fins de aprendizagem);',
        },
        additional: {
          title: 'Adicional',
          description: 'C, Redes, Manutenção de Computadores e Sistemas Operacionais',
        },
        inProgress: {
          title: 'Em progresso',
          description: 'Illustrator, InDesign, Inglês',
        },
        future: {
          title: 'Futuro Aprendizado',
          description: 'Pretendo aprofundar meus conehcimentos em pelo menos um dos itens ao lado: Cyber Segurança, Análise e Desenvolvimento de Sistemas, Gestão de Processos e Métodos Ágeis, Mecatrônica, Engenharia da Computação e/ou Ciência da Computação',
        },
        languages: {
          title: 'Línguas',
          description: 'Português (nativa) e Inglês (Intermediário)',
        },
        Agile: {
          title: 'Métodologias Agéis',
          description: 'Entendimento do funcionamento de metodologias ágeis como Kanban, Scrum, ScrunBan e Xp. Mas entendimento prático apenas de Kanban.',
        }
      },
   },
    projects: {
      title: 'Meus Projetos',
      items: [
        {
          title: "PSICDA",
          description: "Site feito para meu Trabalho de Conclusão de Curso, além disso, feito com o intuito de ser transformado em uma mini empresa, ou ao menos, uma pequena organização para realmente auxiliar crianças.",
          commits: 26,
          github: "https://github.com/Laiara-Leizer/PSICDA_01",
          siteUrl: "https://psicda.onrender.com/"
        },
        {
          title: "Devs_Chat",
          description: "Trabalho feito para consumir uma API fake, criada por mim. O trabalho em questão são varias salas de bate-papo, as quais Desenvolvedores podem conversar entre si para trocar ideias e interagir, como um discord, mas expecífico para Devs.",
          commits: 9,
          github: "https://github.com/Laiara-Leizer/Devs_Chat",
          siteUrl: "https://devs-chat-iota.vercel.app/"
        },
        {
          title: "Devs_Chat_API",
          description: "A API, a qual foi consumida no trabalho Devs_Chat. Esse trabalho foi expecifícadamente a api, demorou muito, mas com o mesmo, aprendi a criar APIs REST e que utilizem o banco de dados MongoDB.",
          commits: 46,
          github: "https://github.com/Laiara-Leizer/Devs_Chat_API",
          siteUrl: "https://devs-chat-api.onrender.com/"
        },
        {
          title: "RestLux",
          description: "Site fictício feito com uma API fake. O site tem como objetivo ser um site de restaurantes \"de luxo\", sendo predominantemente restaurantes de Taquara-RS.",
          commits: 14,
          github: "https://github.com/Laiara-Leizer/RestLux",
          siteUrl: "https://restlux.vercel.app/"
        },
        {
          title: "Java",
          description: "Minha pasta com todos os projetinhos em java de forma organizada - EM ANDAMENTO - Já que estou organizando mais ou menos um ano de trabalhos escolares.",
          commits: 0,
          github: "https://github.com/Laiara-Leizer/Trabalhos_em_java",
          siteUrl: "/"
        }
      ]
    },
    designs: {
      title: 'Meus Designs',
      description: 'Aqui estão alguns dos meus projetos de design.',
      categories: {
        delivery: {
          title: 'App de Delivery',
          description: 'Design de um aplicativo de delivery feito no Figma.'
        },
        psicda: {
          title: 'PSICDA',
          description: 'Site para auxiliar crianças com TDAH.'
        },
        armarios: {
          title: 'Armários Inteligentes',
          description: 'Projeto de design para armários inteligentes.'
        },
        varios: {
          title: 'Meus Designs',
          description: 'Todos os meus designs (2021 para 2024)'
        }
      },
    },

    Curriculo: {
      title: 'Meu Curiculo',
      description: "Aqui está meu curriculo, fique a vontade para baixa-lo!",
      curses: "Aqui está minha pasta de cursos",
      pdf: "Aqui está meu Curriculo caso queira baixa-lo!",
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
      projects: 'Projects',
      designs: 'Designs',
      Curriculo: 'curriculum'
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
        },
        ia: {
          title: 'Artificial Intelligence (IA)',
          description: 'Basic understanding of artificial intelligence, in this case its use for creating websites. Also, in search of knowledge to create one in the future (for learning purposes);',
        },
        
        additional: {
          title: 'additional',
          description: 'C, Networks, Computer Maintenance and Operating Systems',
        },
        inProgress: {
          title: 'In Progress',
          description: 'Illustrator, InDesign, English',
        },
        future: {
          title: 'future Learn',
          description: 'Cyber Security, Systems Analysis and Development, Process Management and Agile Methods, Mechatronics, Computer Engineering and/or Computer Science',
        },
        languages: {
          title: 'languages',
          description: 'Portuguese (native) and English (Intermediate)',
        },
        Agile: {
          title: 'Agile',
          description: 'Understanding of how agile methodologies such as Kanban, Scrum, ScrunBan and XP work. But only a practical understanding of Kanban.',
        }
      },
    },

    projects: {
      title: 'My Projects',
      items: [
        {
          title: "PSICDA",
          description: "Website made for my Course Conclusion Work, additionally, made with the intention of being transformed into a mini company, or at least, a small organization to really help children.",
          commits: 26,
          github: "https://github.com/Laiara-Leizer/PSICDA_01",
          siteUrl: "https://psicda.onrender.com/"
        },
        {
          title: "Devs_Chat",
          description: "Work done to consume a fake API, created by me. The work in question consists of various chat rooms where Developers can chat among themselves to exchange ideas and interact, like discord, but specific for Devs.",
          commits: 9,
          github: "https://github.com/Laiara-Leizer/Devs_Chat",
          siteUrl: "https://devs-chat-iota.vercel.app/"
        },
        {
          title: "Devs_Chat_API",
          description: "The API that was consumed in the Devs_Chat work. This work was specifically the API, it took a long time, but with it, I learned to create REST APIs that use MongoDB database.",
          commits: 46,
          github: "https://github.com/Laiara-Leizer/Devs_Chat_API",
          siteUrl: "https://devs-chat-api.onrender.com/"
        },
        {
          title: "RestLux",
          description: "Fictional website made with a fake API. The site aims to be a \"luxury\" restaurant site, predominantly featuring restaurants from Taquara-RS.",
          commits: 14,
          github: "https://github.com/Laiara-Leizer/RestLux",
          siteUrl: "https://restlux.vercel.app/"
        },
        {
          title: "Java",
          description: "My folder with all Java projects organized - IN PROGRESS - As I am organizing about a year of school work.",
          commits: 0,
          github: "https://github.com/Laiara-Leizer/Trabalhos_em_java",
          siteUrl: "/"
        }
      ]
    },



    designs: {
      title: 'designs',
      description: 'My biggest passion is frontend website creation and graphic design.',


      categories: {
        delivery: {
          title: 'Delivery App',
          description: 'Design of a delivery app made in Figma.'
        },
        psicda: {
          title: 'PSICDA',
          description: 'Website to help children with ADHD.'
        },
        armarios: {
          title: 'Smart Lockers',
          description: 'Design project for smart lockers.'
        },
        varios: {
          title: 'My designs',
          description: 'All of my designs (2021 to 2024)'
        }
      },
    },

    Curriculo: {
      title: 'My curriculum',
      description: "Here is my curriculum, fique a vontade para baixa-lo!",
      curses: "Here some cuorses",
      pdf: "Here my PDF! :D",
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