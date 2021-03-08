import React, { Component, useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import ProjectCard from './ProjectCard.js';

function Projectdata() {
  const myProjects = {
    projects: [
      {
        id: 1,
        title: "Myproject1",
        image: "../assets/banner.png",
        description: " great project"

      },
      {
        id: 2,
        title: "Myproject2",
        image: "../assets/profile-pic-3.jpeg",
        description: "really great project"

      },
      {
        id: 3,
        title: "Myproject3",
        image: "../assets/banner.png",
        description: "really great project"

      },
    ]
  }

  console.log(Projectdata)
  let projectcard = myProjects.projects.map(person => {

    return (
      <Col sm="4">
        <ProjectCard projects={myProjects.projects} />
      </Col>
    )
  })

  return (
    <>
      <Container fluid>
        <Row>
          {projectcard}
        </Row>
      </Container>
    </>
  )
}

export default Projectdata;