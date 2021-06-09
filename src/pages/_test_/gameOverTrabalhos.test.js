import * as React from 'react';
import ReactDOM from "react-dom";
import EndTrabalhos from "./../gameOverTrabalhos";

it ("renderiza os botões da função sem dar crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EndTrabalhos></EndTrabalhos>, div)
})

it ("verificação classe dentro de EndTrabalhos", () => {
    const div = document.createElement("class");
    ReactDOM.render(<EndTrabalhos></EndTrabalhos>, div)
})