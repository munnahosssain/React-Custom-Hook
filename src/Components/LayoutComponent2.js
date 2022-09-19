import useHooks from "../Hooks/useHooks";

const LayoutComponent2 = () => {
    const small = useHooks(768);
    return (
        <div className={small ? "small" : "large"}>
            <h1>You are brows on another device</h1>
        </div>
    );
};

export default LayoutComponent2;