import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {List} from "./list.js"
import {getItems} from "./controller";
import { Container, Row, Col, Button } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container>
        <h1>Einkaufsliste</h1>



        <Switch>
          <Route exact path="/">

            <Startseite/>
            <Row>
       
      </Row>

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
          <h2>Startseite</h2>
        <List/>
      </div>
  );
}