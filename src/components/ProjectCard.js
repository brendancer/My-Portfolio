import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const projectCard = (props) => {

  console.log(props)
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src={props.projectcard.image} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.projectcard.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{props.projectcard.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default projectCard;
