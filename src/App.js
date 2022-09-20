import './App.css';
import Mobile from './Pages/Mobile/Mobile';
import useHooks from './Pages/Hooks/useHooks';
import Tab from './Pages/Tablet/Tab';

function App() {
  const displaySize = useHooks(768);
  return (
    <div className="App">
      <header className="App-header">
        {
          displaySize
            ? <Mobile />
            : <Tab />
        }
      </header>
    </div>
  );
}

export default App;
