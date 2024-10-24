import React from 'react';

function Input({ placeholder, value, onChange }) {
    return (
        <input 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bg-gray-200 rounded p-2 w-full" 
        />
    );
}

export default Input;
