import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Navbar from "../Navbar";
import recipe from '../../Assets/Projects/recipe.png'
import booking from '../../Assets/Projects/booking.png'
import stuteach from '../../Assets/Projects/stu-teach.png'


function Projects() {
  return (
    <>
    <Navbar />
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple1">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Blog"
              description="Recipe Blog is a website where you can view recipes from different categories such as Spanish, Mexican, Indian and more. Not only can you browse through the different categories and find your favorite recipes, but you can also submit your own recipes and have them shared with others."
              ghLink="https://github.com/vlantonakos/Recipe-Blog"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Booking-Reservation App"
              description=" This app is designed to make it easy for travelers to search for and book hotels, while also providing hotel owners with the ability to manage their bookings and customers."
              ghLink="https://github.com/vlantonakos/Booking-Reservation_App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stuteach}
              isBlog={false}
              title="Teachers & Students"
              description="The provided code is a Java application with a graphical user interface (GUI) that facilitates the management of teachers and students. The application allows users to log in as either a teacher or a student, each with their respective set of functionalities."
              ghLink="https://github.com/vlantonakos/Teachers-Students.1.0.1"
              demoLink=""              
            />
          </Col>

        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;