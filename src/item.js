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
                    {/*Hässlich gecoded! Die Response von DeleItem wird ignoriert und es wird getItems geladen über props, sorry zukünftiges ich.*/}
                    <Button className="float-right" variant="danger" onClick={() => deleteItem(() => props.reload(), props.product.id)}>Delete</Button>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}