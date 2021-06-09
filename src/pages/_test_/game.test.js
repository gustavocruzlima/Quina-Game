import * as React from 'react';
import ReactDOM from "react-dom";
import Game from "./../begin";

it ("verifica renderização sem crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game></Game>, div)
})