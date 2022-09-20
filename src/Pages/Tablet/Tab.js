import React from 'react';
import useHooks from '../Hooks/useHooks';
import Laptop from '../Laptop/Laptop';
import Tablet from '../Tablet/Tablet';

const Tab = () => {
    const displaySize = useHooks(786);
    return (
        <div>
            {
                displaySize
                    ? <Tablet />
                    : <Laptop />
            }
        </div>
    );
};

export default Tab;