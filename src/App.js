import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from "./list.js"
import { getItems } from "./controller";
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';

//import Item from "./item"

function App() {
  return (
    <Router>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Einkaufsliste</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="">Liste</Nav.Link>
              <Nav.Link href="#link">Item</Nav.Link>
            </Nav>
          </Navbar.Collapse>
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
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

function Startseite(props) {


  return (
    <div>
      <h2>Startseite</h2>
      <p>List:</p>
      <List />
    </div>

  );
}