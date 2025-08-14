import React, { useContext, useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import "./Curriculo.css";
import { Document, Page, pdfjs } from "react-pdf";

const pdfPublic = "/Laiara Leizer Curriculo.pdf"; // PDF do 'public'

// 🔹 Configuração correta do worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Curriculo = () => {
  const { translations } = useContext(LanguageContext);
  const c = translations.Curriculo;

  // Estado para armazenar o número total de páginas
  const [numPages, setNumPages] = useState(null);

  // Estado e referência para tornar o PDF responsivo
  const containerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Define a largura do PDF com base na largura do contêiner (ex.: 90% da largura)
        setPageWidth(containerRef.current.offsetWidth * 0.9);
      }
    };

    // Atualiza a largura ao montar o componente e ao redimensionar a janela
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Link da pasta no Google Drive
  // const googleDriveLink = "https://drive.google.com/drive/folders/1M5w8XUWFMqHlcyGEgJjQpOZFpulJBvGX?usp=sharing";
  const googleDriveLink = "https://drive.google.com/file/d/126uj3VGpjBJscqCQeKFdL-HXTpRB9eFz/view?usp=sharing";

  return (
    <Container className="Curriculo" ref={containerRef}>
      <h1 className="text-center mb-4">{c.title}</h1>

      {/* Link para a pasta do Google Drive */}
      <p className="text-center mb-4">{c.description}</p>

      <div className="Curriculo_Lai">
     
        <Document
          file={pdfPublic}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            console.log("Total de páginas:", numPages);
          }}
        >
          {/* O componente <Page> utiliza a largura definida dinamicamente */}
          <Page pageNumber={1} width={pageWidth} />
        </Document>
      </div>

      <p className="text-center mb-4">   
        <a className="a_curses" href={googleDriveLink} target="_blank" rel="noopener noreferrer">
          {c.curses}
        </a>
      </p>

      {/* Link para baixar o PDF */}
      <a className="a_pdf" href={pdfPublic} download="Laiara-Leizer-Curriculo.pdf">
        <p className="text-center mb-4" id="pdf">{c.pdf}</p>
      </a>
    </Container>
  );
};

export default Curriculo;
