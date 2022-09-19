import useHooks from "../Hooks/useHooks";

const LayoutComponent = () => {
  const small = useHooks(768);

  return (
    <div>
      <h1>You are brows on {small ? "small" : "large"} device</h1>
    </div>
  );
};

export default LayoutComponent;
