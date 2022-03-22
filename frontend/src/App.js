import './App.css';
import './layout.css';
import Pesquisa from './components/Pesquisa/Pesquisa';
import React, {useState, useEffect} from "react";
import ListagemBanner from './components/Listagem/ListagemBanner';


const temaContext = React.createContext();

function App() {
  const [historias, setHistorias] = useState([]);
  const [tema, setTema] = useState("white");

  
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
    <temaContext.Provider value={{"tema": tema}}>

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
        
        <button onClick={()=>setTema(tema === "white" ? "black" : "white")}>Tema</button>

        <div className='pesquisa-container'><Pesquisa className="pesquisa" historias={historias}/></div> 
        
      </header>
      <main className="main" style={{"background-color": tema}}>
        <section>
          <h2>Encontre as melhores Fanfics</h2>
          <ListagemBanner className="listagem-banner" listaItens={historias}/>
        </section>
      </main>
      <div className="filter">
      
      </div>
      <aside className="aside">
        
      </aside>
      <footer className="footer">
        
      </footer>
    </div>
    </temaContext.Provider>
  );
}

export default App;
export {temaContext};
