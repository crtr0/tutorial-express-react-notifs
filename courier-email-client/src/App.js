import logo from "./logo.svg";
import "./App.css";
import EmailButton from "./Components/EmailButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmailButton />
      </header>
    </div>
  );
}

export default App;
