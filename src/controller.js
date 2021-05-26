import React from "react";

export async function getItems(fn) {
    fetch("http://localhost:8080/items")
        .then(r => r.json)
        .then(data => { fn(data) })
}
