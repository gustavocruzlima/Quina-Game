import * as React from 'react';
import ReactDOM from "react-dom";
import EndEstudantes from "./../gameOverEstudantes";

it ("renderiza os botões da função sem dar crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EndEstudantes></EndEstudantes>, div)
})

it ("verificação classe dentro de EndEstudantes", () => {
    const div = document.createElement("className");
    ReactDOM.render(<EndEstudantes></EndEstudantes>, div)
})