import React, { useEffect, useState } from "react";
import { getItems, updateItem } from "../controller.js";
import Item from "./item.js";
import { Col, Modal, Button, Form } from 'react-bootstrap';


export default function List() {

    const [list, setList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(0);

    function reload() {
        getItems((data) => setList(data))
    }

    function openEdit(id) {

        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                setCurrentEdit(list[i])
            }
        }

        setModalShow(true)
    }

    function closeEdit() {
        console.log(currentEdit)
        setModalShow(false)
        updateItem(data => setList(data), currentEdit)
    }

    function updateCheckbox(id) {

    }

    useEffect(() => {
        reload()
        console.log(list)
    }, []);

    return (
        <ul>
            {list.map((e) =>
                <Col>
                    <li>
                        {/*Hässlich gecoded!*/}
                        <Item product={e} reload={reload} edit={e => openEdit(e)} updateCheckbox={e => updateCheckbox(e)}></Item>
                    </li>
                </Col>
            )}

            {list.length > 0 && <Modal show={modalShow} onHide={closeEdit} centered>
                <Modal.Header>
                    <h3>
                        Editing: {currentEdit.name}
                    </h3>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={currentEdit.name} onChange={e => setCurrentEdit({ ...currentEdit, name: e.target.value })} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={currentEdit.description} onChange={e => setCurrentEdit({ ...currentEdit, description: e.target.value })} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group >
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" value={currentEdit.amount} onChange={e => setCurrentEdit({ ...currentEdit, amount: e.target.value })} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Amount Type</Form.Label>
                                <Form.Control type="text" value={currentEdit.amountType} onChange={e => setCurrentEdit({ ...currentEdit, amountType: e.target.value })} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group >
                            <Form.Label>Dringlichkeit</Form.Label>
                            <Form.Control type="number" value={currentEdit.dringlichkeit} onChange={e => setCurrentEdit({ ...currentEdit, dringlichkeit: e.target.value })} />
                            <Form.Text className="text-muted" >Temporär</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeEdit}>Close</Button>

                </Modal.Footer>
            </Modal>}

        </ul>
    );

}