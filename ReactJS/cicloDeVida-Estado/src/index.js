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
            <Btn1 onClick={() => soma(10, 252)} name="Somar">Clique Aqui</Btn1>
            <ComponentA>
                <ComponentB>
                    <Btn1 onClick={() => soma(100, 252)} name="Componentes">Clique Aqui</Btn1>
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(<App />);