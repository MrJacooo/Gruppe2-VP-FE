import { Card, Button } from "react-bootstrap"
import { deletePerson } from "../controller"
import { Col } from 'react-bootstrap';
import SmallItem from './smallItem';
import { useState } from "react";

export default function Person(props) {

    const [showItem, setShowItem] = useState(false)

    return (
        <Card>
            <Card.Body>
                <Card.Title><h3>User {props.person.id + 1} - {props.person.name}</h3></Card.Title>
                <Card.Text>
                    {showItem && <Col><h4>Their assigned items</h4></Col>}
                    {showItem && props.person.itemList.map((e) =>
                        <SmallItem product={e}></SmallItem>
                    )}
                    <br />
                    <Button className="float-right ml-3" variant="danger" onClick={() => deletePerson(() => props.reload(), props.person.id)}>Delete</Button>
                    <Button className="float-right" variant="secondary" onClick={() => setShowItem(!showItem)}>{(showItem) ? "Hide" : "Show"}</Button>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}