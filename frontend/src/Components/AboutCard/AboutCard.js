import React from "react";
import { Card, Container, Button, Dropdown } from "react-bootstrap";
import "./AboutCard.css"; // import your CSS file

const AboutCard = (props) => {
  return (
    <Container className="about-card-container">
      <Card style={{ width: "33rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">More Info</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={"https://www.linkedin.com/in/rahulkodate/"} target="_blank">
                LinkedIn
              </Dropdown.Item>
              <Dropdown.Item href={"https://github.com/RahulKodate"} target="_blank">
                Github
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutCard;