import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';


const projectCard = (props) => {

  console.log(props)
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.projectType}</CardSubtitle>
          <CardText className="h6">{props.description}</CardText>
          <CardLink href={props.livelink}>See it Live!</CardLink>
          <CardLink href={props.github}>GitHub Repository</CardLink>
        </CardBody>
      </Card>
    </div >
  );
};

export default projectCard;
