import './App.css';
import { Col, Row } from "react-bootstrap";


function App() {
  return (
    <div>
      <Row>
        <Col>
          <p>List:</p>
          {/* <input className="form-control" value={textfield} onChange={e => setTextfield(e.target.value)}></input>
         <Button onChange={() => handleAddTodo()}>add</Button>  */}
        </Col>
      </Row>
    </div>
  );
}

export default App;
