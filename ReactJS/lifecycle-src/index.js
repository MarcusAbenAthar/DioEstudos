import React from "react"
import { createRoot } from "react-dom/client"
import './styles.css'

function soma(a, b) {
    alert(a + b)
}

function App() {

    return (
        <div className="App">
            Hello World!
        </div>
    )
}

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(<App />);