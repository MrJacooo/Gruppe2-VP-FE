
import React, { useEffect, useState } from "react";
import { getItems } from "./controller.js";
import Item from "./item.js";
import { Col, Modal } from 'react-bootstrap';


export default function List() {

    const [list, setList] = useState([]);
    const [list2, setList2] = useState([1, 2, 3])

    function reload() {
        getItems((data) => setList(data))
    }

    useEffect(() => {
        reload()
    }, []);

    return (
        <ul>
            {list.map((e) =>
                <Col>
                    <li>
                        {/*Hässlich gecoded!*/}
                        <Item product={e} reload={reload}></Item>
                    </li>
                </Col>
            )}

            <Modal show={true}>
                <Modal.Body>
                    test
                </Modal.Body>
            </Modal>

        </ul>
    );

}