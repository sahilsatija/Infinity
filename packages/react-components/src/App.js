import logo from './logo.svg';
import './App.css';

function App(props){
  const { history } = props;

  const handleClick = () => {
    history.push("/home");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
      <button onClick={handleClick}>Click here to navigate</button>
      </header>
    </div>
  );
}

export default App;
