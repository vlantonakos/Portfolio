import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/cv.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NavBar from "../Navbar";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const resumeLink =
  "https://vlantonakos.github.io/BuildingMyPortfolio.v1/portfolio/public/Antonis%20Vlachavas%20-%20CV.pdf";

function Resume() {

    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(900);
    }, []);

    return (
        <>
        <NavBar />
          <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
    
            <Row className="resume">
              <Document file={resumeLink} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 0.76 : 0.6} />
              </Document>
            </Row>
    
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </Container>
        </>
      );
}


export default Resume