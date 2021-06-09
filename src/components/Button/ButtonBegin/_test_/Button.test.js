import * as React from 'react';
import ReactDOM from "react-dom";
import ButtonBegin from "./../Button";

it("renderiza sem dar crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ButtonBegin></ButtonBegin>, div)
})