import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container, Nav, Row, Col, Card, CardDeck, Carousel, Form, Button, Image, Alert, Modal } from 'react-bootstrap';
import {List} from "./list.js"


function App() {
  return (
    <Router>
      <Container>
        <h1>Einkaufsliste</h1>

        <Switch>
          <Route exact path="/">
            <Startseite/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

function Startseite(props)  {

  return(
      <div>
        <List/>
      </div>
  );
}