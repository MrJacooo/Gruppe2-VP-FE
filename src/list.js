import React, {useEffect, useState} from "react";
import {getItems} from "./controller.js"

export function List(){

    const [list, setList] = useState([]);


    useEffect(() => {
        getItems((data) => setList(data))
    }, []);

    return (
        <ul>
        {list.map((e) => <li>{e}</li>)}
        </ul>
    );
}