import React from "react";
import { Container, Row } from 'reactstrap';

const Contact = () => {

  return (
    <Container className="p-5">
      <h2>Contact Me!</h2>
      <br></br>
      <Row>
        <span><h4>Email address</h4><h5>brendanced@gmail.com</h5></span>
      </Row>
      <Row>
        <a href="mailto: brendanced@gmail.com" target="_blank" rel="noreferrer" >Click to send email now!</a>
      </Row>
      <br></br>
      <Row>
        <h4>Linked In</h4>
      </Row>
      <Row>
        <a href="https://www.linkedin.com/in/brendagoodwin23?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4Fr3OXkLQqqezegaBSTsBA%3D%3D" target="_blank" rel="noreferrer">www.linkedin.com/in/BrendaGoodwin23</a>
      </Row>
      <br></br>
      <Row>
        <h4>GitHub</h4>
      </Row>
      <Row>
        <a href="https://github.com/brendancer" target="_blank" rel="noreferrer">hhttps://github.com/brendancer</a>
      </Row>
      <br></br>
      <Row>
        <h4>Cell Phone</h4>
      </Row>
      <Row>
        <a href="tel:8012322348" target="_blank" rel="noreferrer">
          Click to give me a call at (801)232-2348
  </a>
      </Row>
      <br></br>
      <Row>
        <h5><em>Based in Salt Lake City, Utah</em></h5>
      </Row>
    </Container >


  )
}

export default Contact;