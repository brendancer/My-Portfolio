import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from './ProjectCard.js';
import DietWatchers from "../assets/diet-watchers-ss.png"
import EmpSort from "../assets/empSort.png"
import PetCetera from "../assets/petcetera.png"
import TimeBlock from "../assets/TimeBlock.png"
import WeatherApp from "../assets/WeatherApp.png"
import TypeCheck from "../assets/TypingTest.png"



function Projectdata() {
  const myProjects = {
    projects: [
      {
        id: 1,
        title: "DietWatchers",
        projectType: "Group Project",
        image: DietWatchers,
        description: "Diet Watchers was designed to be used by anyone who wants to be more health conscious when cooking. You can use the website to find nutrition facts for numerous food items and also search for tasty recipes that include the ingredients you search for. We've also included some random food facts!",
        github: "https://github.com/IsraaBeseiso/Diet-Watchers",
        livelink: " https://israabeseiso.github.io/Diet-Watchers/"

      },
      {
        id: 2,
        title: "TimeBlock",
        projectType: "Solo Project",
        image: TimeBlock,
        description: "TimeBlock is an app designed to enable the user to record their tasks and appointments during the typical work day on a daily basis. The blocks are color-coded to show past, present, and future hours. User entries will persist each time they visit the app, with an option to clear appointments to start the day fresh.",
        github: "https://github.com/brendancer/TimeBlock.git",
        livelink: "https://brendancer.github.io/TimeBlock/"

      },
      {
        id: 3,
        title: "AnyWhereWeather",
        projectType: "Solo Project",
        image: WeatherApp,
        description: "In this app, the user enters the name of a city in the search field, then clicks the search button. The Dashboard then displays the current weather conditions in that city. There is also 5-day forecast for that city showing showing similar information along with an icon to pictorially represent the general conditions.",
        github: "https://github.com/brendancer/AnyWhere-Weather.git",
        livelink: " https://brendancer.github.io/AnyWhere-Weather/"

      },
      {
        id: 4,
        title: "Petcetera",
        projectType: "Group Project",
        image: PetCetera,
        description: "Petcetera is a database designed to hold all information needed for pet owners to track the health of their pet. Owners are able to create a profile for each pet and save detailed information about them.",
        github: "https://github.com/brianneewell1/Petcetera.git",
        livelink: "https://petcetera.herokuapp.com/"

      },
      {
        id: 5,
        title: "EmpSort",
        projectType: "Solo Project",
        image: EmpSort,
        description: "An example of a searchable, filterable employee directory. I'm using random users from randomuser.me to seed my table. A reset button is included to start a new sort.",
        github: "https://github.com/brendancer/EmpSort.git",
        livelink: "https://brendancer.github.io/EmpSort/"

      },
      {
        id: 6,
        title: "TypeCheck",
        projectType: "Group Project",
        image: TypeCheck,
        description: "A full-stack typing test with a twist. Try your skill at Chaos Mode! Overall and personal high scores are persisted through a mongo db.",
        github: "https://github.com/IsraaBeseiso/TypeCheck.git",
        livelink: "https://brendancer.github.io/EmpSort/"
      },
    ]
  }

  console.log(Projectdata)

  let projectcard = myProjects.projects.map(project => {
    return (
      <Col sm="4" >
        <ProjectCard title={project.title} description={project.description} image={project.image} projectType={project.projectType} />
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