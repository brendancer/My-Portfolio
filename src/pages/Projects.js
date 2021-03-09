import React from "react";
import ProjectData from "../components/ProjectData"
import { Container, Row } from 'reactstrap';

const Projects = () => {

  return (
    <Container fluid className=" page">
      <Row className="title">
        <h3>Projects</h3>
      </Row>
      <Row>
        <ProjectData />
      </Row>
    </Container>
  )
}

export default Projects;