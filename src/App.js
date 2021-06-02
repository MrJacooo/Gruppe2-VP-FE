import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from "./list.js"
import {getItems} from "./controller";
import { Container, Row, Col, Button } from 'react-bootstrap';

//import Item from "./item"

function App() {
  return (
    <Router>
      <Container>
        <h1>Einkaufsliste</h1>



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

  return(
      <div>
          <h2>Startseite</h2>
          <p>List:</p>
        <List/>
      </div>
  );
}