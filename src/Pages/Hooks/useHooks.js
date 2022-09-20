import { useEffect, useState } from 'react';

const useHooks = (displaySize) => {
    const [screenSize, setScreenSize] = useState(false);
    useEffect(() => {
        const deviceSize = () => {
            setScreenSize(window.innerWidth < displaySize)
        }
        deviceSize();
        window.addEventListener('resize', deviceSize);
        return () => window.removeEventListener('resize', deviceSize);
    }, [displaySize]);
    return screenSize;
};

export default useHooks;