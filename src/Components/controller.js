import React from "react";

export function getItems(fn) {
    fetch("http://localhost:8080/items")
        .then(r => r.json())
        .then(data => { fn(data) })
}
/*
export function postItem(fn, item) {
    fetch("http://localhost:8080/items", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify(item)
    })
        .then(r => r.json()).then(data => fn(data))
}
*/

//warum response?
export function deleteItem(fn, id) {
    fetch("http://localhost:8080/items/" + id, { method: 'delete' })
        .then(r => r.json())
        .then(data => fn(data))
}

export function getPeople(fn) {
    fetch("http://localhost:8080/person")
        .then(r => r.json())
        .then(data => { fn(data) })
}

export function deletePerson(fn, id) {
    fetch("http://localhost:8080/person/" + id, { method: 'delete' })
        .then(r => r.json())
        .then(data => fn(data))
}

export function updateItem(fn, obj) {
    fetch("http://localhost:8080/items/" + obj.id, {
        method: "put",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(obj)
    }).then(() => getItems(fn))
}


