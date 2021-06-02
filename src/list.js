import React, {useEffect, useState} from "react";
import {getItems} from "./controller.js";
import {Items} from "./items";
import { Col} from 'react-bootstrap';


export function List(){

    const [list, setList] = useState([]);
    const [list2, setList2] = useState([1,2,3])


    useEffect(() => {
        getItems((data) => setList(data))
    }, []);

    return (
        <ul>
            {list.map((e) =>
                <Col>
                <li>
                    <Items product={e}></Items>
                </li>
                </Col>
            )}
        </ul>
    );
}