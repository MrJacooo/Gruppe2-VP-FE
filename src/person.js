import { Card, Button } from "react-bootstrap"
import { deletePerson } from "./controller"
import { Col } from 'react-bootstrap';
import SmallItem from './smallItem';

export default function Person(props) {

    return (
        <Card>
            <Card.Body>
                <Card.Title><h3>User {props.person.id + 1} - {props.person.name}</h3></Card.Title>
                <Card.Text>
                    <Col><h4>Their assigned items</h4></Col>
                    {props.person.itemList.map((e) =>
                        <SmallItem product={e}></SmallItem>
                    )}
                    <br/>
                    <Button className="float-right" variant="danger" onClick={() => deletePerson(() => props.reload(), props.person.id)}>Delete</Button>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}