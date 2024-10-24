import React from 'react';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

function CryptoListItem({ iconSrc, name, price }) {
    return (
        <div className="w-[600px] flex justify-between items-center mb-4">
            <div className="flex items-center">
                <Icon src={iconSrc} alt={name} />
                <Text className="ml-2">{name}</Text>
            </div>
            <Text>{price}</Text>
        </div>
    );
}

export default CryptoListItem;
