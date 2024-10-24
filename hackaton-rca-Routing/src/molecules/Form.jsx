import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

function Form({ selectedCrypto, onPurchase }) {
    const [amount, setAmount] = useState(0);
    const price = parseFloat(selectedCrypto?.price.replace(/[$,]/g, ''));

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const calculateTotal = () => {
        return price * amount;
    };

    const handleBuyClick = () => {
        if (amount > 0) {
            onPurchase(selectedCrypto, amount); // Llamar a la función de compra
            setAmount(0); // Reiniciar la cantidad después de la compra
        }
    };

    return (
        <div className="flex flex-col space-y-4"> 
            <div>
                <Label>Tipo</Label>
                <Input value={selectedCrypto?.name || ''} readOnly />
            </div>
            
            <div>
                <Label>Cantidad</Label>
                <Input 
                    type="number" 
                    placeholder="Ingrese cantidad" 
                    value={amount}
                    onChange={handleAmountChange} 
                />
            </div>

            <div>
                <Label>Total</Label>
                <Input value={`$${calculateTotal().toFixed(2)}`} readOnly />
            </div>

            <Button className="bg-green-700 text-white p-2 rounded" onClick={handleBuyClick}>
                Comprar
            </Button>
        </div>
    );
}

export default Form;
