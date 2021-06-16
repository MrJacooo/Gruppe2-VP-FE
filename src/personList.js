import React, {useEffect, useState} from "react";
import {getPeople} from "./controller.js";
import Person from "./person.js";
import { Col} from 'react-bootstrap';


export default function PersonList(){

    const [list, setList] = useState([]);
    const [list2, setList2] = useState([1,2,3])

    function reload() {
        getPeople((data) => setList(data))
    }


    useEffect(() => {
        getPeople((data) => setList(data))
    }, []);

    return (
        <ul>
            {list.map((e) =>
                <Col>
                <li>
                    <Person person={e} reload={reload()}></Person>
                </li>
                </Col>
            )}
        </ul>
    );

}