import './App.css';
import Pesquisa from './components/Pesquisa/Pesquisa';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="containner-logo">
          <span className="logo-item">Tsuki</span>
          <span className="logo-item">Fanfiction</span>
        </div>
        <nav className="nav">
          <a className="nav-item" href="#">Cadastrar História</a>
        </nav>

        <Pesquisa className="container-pesquisa"/>
        
      </header>
    </div>
  );
}

export default App;
