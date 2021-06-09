import * as React from 'react';
import ReactDOM from "react-dom";
import BlackBall from "./../BlackBall";

it ("verifica renderização sem crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlackBall></BlackBall>, div)
})