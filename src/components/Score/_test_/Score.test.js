import * as React from 'react';
import ReactDOM from "react-dom";
import Score from "./../Score";

it ("verifica renderização sem crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Score></Score>, div)
})