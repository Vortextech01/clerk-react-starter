import logo from "./logoepic.gif";
import "./styles/App.css";
import { Button } from '@material-ui/core';

import ClerkLoginButton from './components/ClerkLoginButton';

function App() {
  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Sapiens IA Laboratories</Typography>
          <ClerkLoginButton />
        </Toolbar>
      </AppBar>
      <img src={logo} alt="Sapiens IA Laboratories Logo" className="logo" />
      <h1 className="title">¡Bienvenido a Sapiens IA Laboratories!</h1>
      <p className="description">Aquí podrás encontrar algunos demos y modelos de Inteligencia Artificial desarrollados por nuestro equipo de científicos. Inicia sesión para probarlos y experimentar con ellos.</p>
      <Button variant="contained" color="primary" className="cta" href="/demos">
        Ver Demos
      </Button>
      <a href="https://sapiens-ia.com/" target="_blank" rel="noopener noreferrer" className="back-home">
        Volver a la página principal de Sapiens IA
      </a>
    </div>
  );
}

export default App;

