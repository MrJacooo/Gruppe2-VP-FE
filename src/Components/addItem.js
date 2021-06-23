import React, { useEffect, useState } from "react";
import { Col, Modal, Button, Form } from 'react-bootstrap';


export default function AddItem() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <Form.Control type="text"  placeholder="Produkt Name"/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text"  placeholder="Beschreibung eingeben"/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group >
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="text"  placeholder="Zahl"/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Amount Type</Form.Label>
                                    <Form.Control as="select">
                                        <option>Stücke</option>
                                        <option>kg</option>
                                        <option>Liter</option>
                                        <option>gr</option>
                                    </Form.Control>                           </Form.Group>
                            </Form.Row>

                        </Form>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Add Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

