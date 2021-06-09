import * as React from 'react';
import ReactDOM from "react-dom";
import Begin from "./../begin";

it ("verifica renderização sem crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Begin></Begin>, div)
})

it ("verificação classe dentro de Begin", () => {
    const div = document.createElement("className");
    ReactDOM.render(<Begin></Begin>, div)
})