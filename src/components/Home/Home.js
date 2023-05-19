import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/insta-pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "../Navbar";

function Home() {

  useEffect(() => {
    document.title = "VLANTO | HOME"
 }, []);

    return (
      <>
      <Navbar />
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple1"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am fluent in classics like 
                <i>
                  <b className="purple">&nbsp;C, Java and Javascript. </b>
                </i>
                <br />
                <br />
                My main interests are web development, specifically in both &nbsp;
                <i>
                  <b className="purple">front-end and back-end technologies </b>
                </i>
                <br />
                <br />
                I find immense joy in harnessing the prowess of <b className="purple">Node.js, React.js, Next.js, and Vite.</b>
                <br />
                <br />
                Moreover, my journey in web development extends beyond the <b className="purple">front-end.</b> I delve into the realms of <b className="purple">back-end development</b>, drawing upon the capabilities of<b className="purple">&nbsp;Spring Boot and Hibernate.</b>
                <br />
                <br />
                I skillfully use <b className="purple">JDBC</b> to connect <b className="purple">Java</b> with <b className="purple">MySQL</b>, creating a strong and reliable connection between the two. Additionally, I connect <b className="purple">Node.js</b> applications with <b className="purple">MongoDB</b>, taking advantage of the flexibility and scalability offered by this type of database.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1><span className="purple1">FIND ME ON</span></h1>
              <p>
                Feel free to <span className="purple">connect </span> with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/vlantonakos"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/YoungVlanto"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/antonis-vlachavas/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/vl_anto"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      </>
    );
  }
  export default Home;