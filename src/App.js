import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container>


        <Switch>
          <Route exact path="/">
            <Startseite />
            <Row>
              <Col>
                <p>List:</p>
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

function Startseite() {
  return (
    <p>Startseite</p>
  );
}