import React, { Component, useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import ProjectCard from './ProjectCard.js';
import Banner from "../assets/banner.png"
import ProfilePic from "../assets/profile-pic-3.jpeg"


function Projectdata() {
  const myProjects = {
    projects: [
      {
        id: 1,
        title: "Myproject1",
        image: { Banner },
        description: " great project"

      },
      {
        id: 2,
        title: "Myproject2",
        image: { ProfilePic },
        description: "really great project"

      },
      {
        id: 3,
        title: "Myproject3",
        image: { Banner },
        description: "really great project"

      },
    ]
  }

  console.log(Projectdata)

  let projectcard = myProjects.projects.map(project => {
    return (
      <Col sm="4">
        <ProjectCard project_id={project.id} title={project.title} description={project.description} image={project.image} />
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