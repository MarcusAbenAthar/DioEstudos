import React from "react";

const customer = [
    {
        id: 1,
        name: 'Marcus Aben-Athar'
    },
    {
        id: 2,
        name: 'Pamela Nascimento'
    },
    {
        id: 3,
        name: 'Miguel Aben-Athar'
    },
    {
        id: 4,
        name: 'Micaela Aben-Athar'
    }
];

const App = () => {

    const renderCustomers = (customer, index) => {
        <li>{customer.name}</li>;
    };

    return (
        <div>
            <p>
                Nome do cliente:
            </p>
            <div>
                <ul>
                    {customer.map(renderCustomers(customer, 4))}
                </ul>
            </div>
        </div>
    );
};

export default App;