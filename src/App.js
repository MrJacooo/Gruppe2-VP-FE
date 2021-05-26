import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Nav, Row, Col, Card, CardDeck, Carousel, Form, Button, Image, Alert, Modal } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container>


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

function Startseite()  {
  return(
      <p>Startseite</p>
  );
}