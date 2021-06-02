import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getItems } from "./controller"
import Item from "./item"

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
        <div>
          <h1>Item Testing</h1>
          <Button onClick={() => getItems(data => console.log(data))}>Get Items</Button>
          <Item props={{ id: 2, name: "Biscuit", description: "ein keks der mit einem herrvoragenden Geschmack und absoluter Leistung überzeugt, vieln dank Obama", amount: 10, amountType: "pieces", alreadyBought: false, addedDate: null }} />
        </div>
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