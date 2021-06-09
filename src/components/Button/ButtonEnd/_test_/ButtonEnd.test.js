import * as React from 'react';
import ReactDOM from "react-dom";
import ButtonEnd from "./../ButtonEnd";

it ("renderiza sem dar crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ButtonEnd></ButtonEnd>, div)
})


