import React from 'react';

const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;
const hasCustomer = true;

const App = () => {
    function showHistory() {
        return <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            < br />
            {buttonA}
        </div>;
    }
    function addCustomer() {
        return <div>
            Clique no botão abaixo para cadastrar um cliente
            <br />
            {buttonB}
        </div>;
    }

    const customer = 'Marcus Aben-Athar';

    const showCustomer = () => {
        if (!hasCustomer) return null;
        return (
            <div>
                O nome do cliente é {customer}
            </div>
        );
    };

    console.log('hasCustomer', hasCustomer);

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer ? showHistory() : addCustomer()}
            <div>
                {showCustomer()}
            </div>

        </div>
    );
};

export default App;