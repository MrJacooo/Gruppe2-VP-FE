import { Card, Button } from "react-bootstrap"
import { deleteItem } from "../controller"

export default function Item(props) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.product.name} - {props.product.amount} {props.product.amountType}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Zuletzt verändert: {props.product.addedDate}</Card.Subtitle>
            </Card.Body>

        </Card>
    )
}