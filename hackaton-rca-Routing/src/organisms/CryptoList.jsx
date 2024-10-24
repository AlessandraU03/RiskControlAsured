import React, { useState } from 'react';
import CryptoListItem from '../molecules/CryptoListenItem';
import Form from '../molecules/Form';
import Opciones from '../molecules/Opcione';

function CryptoList() {
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [purchasedCryptos, setPurchasedCryptos] = useState([]); // Estado para las criptomonedas compradas
    const [sellAmount, setSellAmount] = useState(0); // Estado para la cantidad a vender
    const [cryptoToSell, setCryptoToSell] = useState(null); // Estado para la criptomoneda seleccionada para vender

    const cryptoData = [
        { name: 'BNB', price: '$591.30', iconSrc: '/image 3.png' },
        { name: 'BTC', price: '$67.53K', iconSrc: '/image 4.png' },
        { name: 'ETH', price: '$2.63K', iconSrc: '/image 5.png' },
        { name: 'SOL', price: '$166.99', iconSrc: '/image 6.png' },
        { name: 'DOGE', price: '$0.13', iconSrc: '/image 7.png' },
    ];

    const handleSelectCrypto = (crypto) => {
        setSelectedCrypto(crypto);
    };

    const handlePurchase = (crypto, amount) => {
        setPurchasedCryptos([...purchasedCryptos, { ...crypto, amount }]); // Agregar criptomoneda comprada a la lista
    };

    const handleSell = () => {
        // Verificar que se ha seleccionado una criptomoneda y una cantidad válida
        if (cryptoToSell && sellAmount > 0) {
            const updatedCryptos = purchasedCryptos.map(crypto => {
                if (crypto.name === cryptoToSell.name) {
                    const newAmount = crypto.amount - sellAmount;
                    return newAmount > 0 ? { ...crypto, amount: newAmount } : null; // Actualizar o eliminar
                }
                return crypto;
            }).filter(crypto => crypto !== null); // Eliminar criptomonedas con cantidad cero

            setPurchasedCryptos(updatedCryptos); // Actualizar el estado
            setSellAmount(0); // Reiniciar la cantidad a vender
            setCryptoToSell(null); // Reiniciar la criptomoneda seleccionada
        }
    };

    return (
        <>
                    <div className="flex space-x-4">
            <div className="border rounded p-4 flex-1">
                {cryptoData.map((crypto, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                        <CryptoListItem iconSrc={crypto.iconSrc} name={crypto.name} price={crypto.price} />
                        <button 
                            className="bg-green-700 text-white p-2 rounded" 
                            onClick={() => handleSelectCrypto(crypto)}
                        >
                            Seleccionar
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex-1">
                <Form 
                    selectedCrypto={selectedCrypto} 
                    onPurchase={handlePurchase} // Pasar función de compra
                />
            </div>

            <div className="flex-1">
                <h2 className="text-xl font-bold">Mis Criptomonedas</h2>
                {purchasedCryptos.map((crypto, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                        <span>{crypto.name} - Cantidad: {crypto.amount}</span>
                        <button 
                            className="bg-red-500 text-white p-2 rounded" 
                            onClick={() => {
                                setCryptoToSell(crypto); // Establecer la criptomoneda a vender
                                setSellAmount(0); // Reiniciar cantidad a vender
                            }}
                        >
                            Vender
                        </button>
                    </div>
                ))}
                
                {cryptoToSell && (
                    <div className="mt-4">
                        <h3 className="text-lg">Vender {cryptoToSell.name}</h3>
                        <input 
                            type="number" 
                            placeholder="Cantidad a vender"
                            value={sellAmount}
                            onChange={(e) => setSellAmount(Number(e.target.value))}
                            className="border p-2 rounded w-full"
                            max={cryptoToSell.amount} // Limitar el máximo a la cantidad disponible
                        />
                        <button 
                            className="bg-green-700 text-white p-2 rounded mt-2"
                            onClick={handleSell}
                        >
                            Confirmar Venta
                        </button>
                    </div>
                )}
            </div>
        </div>

        
        </>
     
    );
}

export default CryptoList;
