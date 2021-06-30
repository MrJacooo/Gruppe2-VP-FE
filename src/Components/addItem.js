import React, { useEffect, useState } from "react";
import { Col, Modal, Button, Form } from 'react-bootstrap';
import {addItem, getItems} from "./controller.js";
import List from "./Item/list.js";


export default function AddItem() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [amountType, setAmountType] = useState("");
    const [dringlichkeit, setDringlichkeit] = useState(0);
    const [list, setList] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect( () => {
        getItems((data) => setList(data))
    })

    const handleAdd = () => {
        addItem( window.location.reload(false), {
            name: name,
            description: description,
            amount: amount,
            amountType: amountType,
            dringlichkeit: dringlichkeit
        })
    }


    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add Item
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product To Your List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form>

                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Produkt Name"/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Beschreibung eingeben"/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group >
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Zahl"/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Amount Type</Form.Label>
                                    <Form.Control as="select" value={amountType} onChange={e => setAmountType(e.target.value)}>
                                        <option>Stücke</option>
                                        <option>kg</option>
                                        <option>Liter</option>
                                        <option>gr</option>
                                    </Form.Control>                           </Form.Group>
                            </Form.Row>
                            <Form.Group >
                                <Form.Label>Dringlichkeit</Form.Label>
                                <Form.Control type="number" value={dringlichkeit} onChange={e => setDringlichkeit(e.target.value)}/>
                                <Form.Text className="text-muted" >Temporär</Form.Text>
                            </Form.Group>

                        </Form>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="success" onClick={handleAdd} >
                        Add Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

