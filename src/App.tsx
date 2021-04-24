import logo from "./logo.svg";
import "./App.css";
import { Button, AlertBox } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button>Test</Button>
        <AlertBox isOpen title="Alert Header" toggle={() => {}}>
          Body Text Notification
        </AlertBox>
      </header>
    </div>
  );
}

export default App;
