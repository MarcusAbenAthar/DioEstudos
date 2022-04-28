import React, { Component } from "react"
import { createRoot } from "react-dom/client"
import './styles.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'Suco'
            })
        }, 2000)
    }

    alterarCopo = () => {
        this.setState({
            copo: 'Refrigerante'
        })
    }

    render() {
        const { clock, copo } = this.state
        return (
            <div>
                <h1>{this.state.clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(<App />);