import React from "react";
import { Container, Row, Col } from 'reactstrap';

const Resume = () => {
  return (
    <>
      <Container className="page">
        <Row>

          <Col className="col-md-10">
            <button className="resume-button">
              <a href="https://docs.google.com/document/d/e/2PACX-1vR5QPJtDjBZr0UY3WYcJ3HabD8Lw3cFmZ80XuBWHdXC3sErXZMKfgk8RpD5Pk5-zPNGMhO_F7oV0XLX/pub">
                Resume on Google Docs
          </a>
            </button>
          </Col>

        </Row>

        <Row className="md:flex justify-center items-center w-full mx-auto hidden">
          <iframe
            className="shadow-xl"
            height="900"
            width="1000"
            title="resume"
            src="https://docs.google.com/document/d/e/2PACX-1vR5QPJtDjBZr0UY3WYcJ3HabD8Lw3cFmZ80XuBWHdXC3sErXZMKfgk8RpD5Pk5-zPNGMhO_F7oV0XLX/pub"
          ></iframe>
        </Row>
      </Container>
    </>
  );
};

export default Resume;