import React from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import AboutCard from './AboutCard'
import '../../style.css'
import Github from "./Github";

function About() {

    return (
    <>
        <Navbar />
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                    <Col
                        md={7}
                        style={{
                        justifyContent: "center",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        }}
                    >
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Know Who <strong className="purple1">I'M</strong>
                    </h1>
                    <AboutCard /> 
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "80px", paddingBottom: "60px" }}
                        className="about-img"
                    >
                    <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <Github />
            </Container>
        </Container>
    </>
    )
}


export default About;