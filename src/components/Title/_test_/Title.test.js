import * as React from 'react';
import ReactDOM from "react-dom";
import Title from "./../Title";

it ("verificação classe dentro de Title", () => {
    const div = document.createElement("className");
    ReactDOM.render(<Title></Title>, div)
})

it ("verificação de retorno dentro de Title", () => {
    const h1 = document.createElement("h1");
    ReactDOM.render(<Title></Title>, h1)
})