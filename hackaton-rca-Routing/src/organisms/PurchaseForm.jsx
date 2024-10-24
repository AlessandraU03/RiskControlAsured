import React from 'react';
import TabSwitcher from '../molecules/TabSwitcher';
import Form from '../molecules/Form';

function PurchaseForm() {
    const tabs = ['Comprar', 'Vender'];

    function handleSubmit() {
        alert('Compra realizada');
    }

    return (
        <div className="border rounded p-4 w-[350px]">
            <TabSwitcher tabs={tabs} />
            <Form onSubmit={handleSubmit} />
        </div>
    );
}

export default PurchaseForm;
