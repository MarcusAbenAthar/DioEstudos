import React, { StrictMode } from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import "./styles.css"

function sum(a, b) {
    return a + b
}

function primeiroJSX() {
    return (
        <div className="teste">
            Bruno Carneiro - Introdução ao ReactJS
            <h4>Soma = {sum(10, 200)}</h4>
        </div>
    )
}


const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const root = createRoot(document.getElementById("root"))

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);