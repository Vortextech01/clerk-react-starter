import logo from "./logoepic.gif";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1>Sapiens IA Laboratories</h1>
      <img src={logo} alt="logo" />
      <a href="https://sapiens-ia.com/" target="_blank" rel="noopener noreferrer">
        Go back to Home Page
      </a>
    </div>
  );
}

export default App;
