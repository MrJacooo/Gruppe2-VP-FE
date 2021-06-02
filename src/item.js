import { Card, Button } from "react-bootstrap"
import { deleteItem } from "./controller"

export default function Item(props) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.product.name} - {props.product.amount} {props.product.amountType}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Zuletzt verändert: {props.product.addedDate}</Card.Subtitle>
                <Card.Text>
                    <p>
                        {props.product.description}
                    </p>
                    <Button className="float-right" variant="danger" onClick={() => deleteItem(null, props.product.id)}>Delete</Button>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}