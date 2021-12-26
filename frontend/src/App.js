import './App.css';
import './layout.css';
import Pesquisa from './components/Pesquisa/Pesquisa';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container-logo">
          <span className="logo-item">Tsuki</span>
          <span className="logo-item">Fanfiction</span>
        </div>
        <nav className="nav">
          <a className="nav-item" href="#">Cadastrar História</a>
          <a className="nav-item" href="#">Outro link</a>
          <a className="nav-item" href="#">Outro link</a>
          <a className="nav-item" href="#">Outro link</a>
        </nav>

        <Pesquisa className="pesquisa"/>
        
      </header>
      <main className="main">
        
      </main>
      <filter className="filter">
      
      </filter>
      <aside className="aside">
        
      </aside>
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
