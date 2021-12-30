import React from "react";
import { Col, Carosuel, row, Card } from "react-bootstrap";

const Movies = (dil) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {realsedDate}
          </Card.Text>
          <Button variant="primary">Show Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movies;
