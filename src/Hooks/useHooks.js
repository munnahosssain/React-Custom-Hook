import { useEffect, useState } from "react";


const useHooks = (screenSize) => {

    const [small, setSmall] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setSmall(window.innerWidth < screenSize);
        }
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [screenSize]);

    return small;
};

export default useHooks;