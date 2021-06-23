import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from "./list.js"
import Person from "./person.js"
import StartPage from "./startseite.js"
import {getItems} from "./controller";
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import './index.css';

//import Item from "./item"

function App() {
  return (
    <Router>
      <Container>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">Einkaufsliste</Navbar.Brand>
              <Nav.Link href="#/List" className="navlink">Liste</Nav.Link>
              <Nav.Link href="#/Person" className="navlink">Person</Nav.Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Navbar>

        <Switch>
          <Route exact path="/">
            <Startseite />
            <Row>
              <Col>


                {/*           <input className="form-control" value={item} onChange={e => text(e.target.value)}></input>
         <Button onChange={() => handler()}>add</Button>  */}
              </Col>
            </Row>
          </Route>
            <Route exact path="/List">
                <Liste></Liste>
            </Route>
            <Route exact path="/Person">
                <Personen></Personen>
            </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

function Liste(props) {

  return(
      <div>
        <List/>
      </div>
  );
}

function Startseite(props) {

    return(
        <div>
           <StartPage />
        </div>
    );
}
function Personen(props) {

    return(
        <div>
            <Person/>
        </div>
    );
}