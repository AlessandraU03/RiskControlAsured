import React, { useState } from 'react';
import Button from '../atoms/Button';

function TabSwitcher({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex justify-center w-full mb-4"> 
            <div className="flex w-full max-w-md "> 
                {tabs.map((tab, index) => (
                    <Button
                        key={index}
                        className={`w-full p-2 ${activeTab === index ? 'bg-green-600 text-white' : 'bg-white text-green-600'} rounded`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default TabSwitcher;
