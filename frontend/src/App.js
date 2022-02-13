import './App.css';
import './layout.css';
import Pesquisa from './components/Pesquisa/Pesquisa';
import React, {useState, useEffect} from "react";

function App() {
  const [historias, setHistorias] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
        let resposta = await fetch('http://localhost:3001/api/v1/historias');
        console.log(resposta);
        let historias = await resposta.json();
        setHistorias(historias);
    }
    fetchData();
  }, []);
  

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

        <Pesquisa className="pesquisa" historias={historias}/>
        
      </header>
      <main className="main">
        
      </main>
      <div className="filter">
      
      </div>
      <aside className="aside">
        
      </aside>
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
