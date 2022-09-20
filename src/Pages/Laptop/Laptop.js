import React from 'react';
import useHooks from '../Hooks/useHooks';
import LaptopLarge from './LaptopLarge';
import LaptopRegular from './LaptopRegular';

const Laptop = () => {
    const displaySize = useHooks(1440);
    return (
        <div>
            {
                displaySize ? <LaptopRegular /> : <LaptopLarge />
            }
        </div>
    );
};

export default Laptop;