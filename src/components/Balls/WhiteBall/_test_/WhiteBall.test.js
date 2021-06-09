import * as React from 'react';
import ReactDOM from "react-dom";
import WhiteBall from "./../WhiteBall";

it ("verifica renderização sem crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WhiteBall></WhiteBall>, div)
})