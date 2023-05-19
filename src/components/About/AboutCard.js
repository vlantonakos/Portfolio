import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Antonis Vlachavas</span>
            &nbsp;from <span className="purple"> Thessaloniki, Greece.</span>
            <br />I have a degree in <span className="purple">Applied Informatics</span> from the University of Macedonia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Running</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Boxing</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Travelling</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The happiness of your life depends upon the quality of your thoughts."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;