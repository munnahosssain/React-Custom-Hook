import React from 'react';
import useHooks from '../Hooks/useHooks';
import MobileLarge from './MobileLarge';
import MobileMedium from './MobileMedium';

const Mobile = () => {
    const displaySize = useHooks(425)
    return (
        <div>
            {
                displaySize
                    ? <MobileMedium />
                    : <MobileLarge />
            }
        </div>
    );
};

export default Mobile;