import './App.css';
import Tooltip from './Tooltip'

function App() {
  return (
    <div className="App">
      <h1>Tooltip Project</h1>
      <Tooltip position="bottom" content="this is tooltip content">
        <button className='btn'>Hover on Me</button>
      </Tooltip>
    </div>
  );
}

export default App;
