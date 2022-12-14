import { useState } from "react";
import { Fragment } from "react";

import './ShoppingList.css'

function ShoppingList() {
    const items = [1, 2, 3, 4, 5]
    const [list, setlist] = useState(items);
    const [color, setColor] = useState('green')
    const [value, setValue] = useState('')


    function addItem() {
        setlist([...list, value]);
        setValue('')
    }

    function changeColor() {
        setColor(color === "red" ? "green" : "red")
    }

    function captureUserInput(event) {
        // console.log(event.target.value)
        setValue(event.target.value);
    }

    return (
        <Fragment>
            <h1 className="bold" style={{ color: color }} >Shopping List</h1>
            <button onClick={changeColor}>change color</button>
            <ul>{list.map(item => <li className="shopping" >{item}</li>)}</ul>
            <input
                onChange={captureUserInput}
                value={value}
                placeholder="Add Item" />
            <button onClick={addItem}>Add Item</button>
        </Fragment>
    )
}

export default ShoppingList