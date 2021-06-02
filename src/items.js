import React from "react";
import { Jumbotron, Button} from 'react-bootstrap';


export function Items(props) {

  return (
  <Jumbotron>
    <h1>{props.product.name}</h1>
    <p>
      Beschreibung
    </p>
    <p>
      <Button variant="danger">Delete</Button>
    </p>
  </Jumbotron>
  );
}
