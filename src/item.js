import { Card, Button } from "react-bootstrap"
import { deleteItem } from "./controller"

export default function Item({ props }) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.name} - {props.amount} {props.amountType}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Zuletzt verändert: {props.addedDate}</Card.Subtitle>
                <Card.Text>
                    <p>
                        {props.description}
                    </p>
                    <Button className="float-right" variant="danger" onClick={() => deleteItem(null, props.id)}>Delete</Button>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}