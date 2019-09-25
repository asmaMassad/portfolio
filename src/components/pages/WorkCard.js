import React from "react";
import { Card } from "react-bootstrap";

const WorkCard = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={require("../../assets/img/placeholder.jpg")}
        />
        <Card.Body>
          <Card.Title className="orange">Project title</Card.Title>
          <Card.Text className="darkgray">
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            #js #React #Express.js #fullstack #MongoDb
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default WorkCard;
