import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { deleteItem } from "../controller"

export default function Item(props) {

    return (
        <Card className="mb-2">
            <Card.Body>
                <Card.Title>{props.product.name} - {props.product.amount} {props.product.amountType}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Zuletzt verändert: {props.product.addedDate}</Card.Subtitle>
                <Card.Text>

                    {props.product.description}

                    {/*Hässlich gecoded! Die Response von DeleItem wird ignoriert und es wird getItems geladen über props, sorry zukünftiges ich.*/}
                    <Button className="float-right" variant="danger" onClick={() => deleteItem(() => props.reload(), props.product.id)}>Delete</Button>
                    <Button className="float-right mr-3" onClick={() => props.edit(props.product.id)}>Edit</Button>
                </Card.Text>
            </Card.Body>

        </Card >
    )
}