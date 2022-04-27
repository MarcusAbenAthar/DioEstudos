import React from "react"
import { createRoot } from "react-dom/client"
import './styles.css'
//aula DOM \/
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
//fim da aula DOM /\
const element = 'Digital Innovation One'
const element2 = <h1>Olá, turma!</h1>

const rootElement = createRoot(document.getElementById("root"))

function App() {
    return (
        <div>
            {primeiroJSX()} {/*DOM*/}
            {element}
            {element2}
        </div>
    )
}

rootElement.render(<App />)
