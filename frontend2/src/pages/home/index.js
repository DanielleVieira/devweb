import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import BannerItem from "../../components/BannerItem";
import ThemaContext from "../../components/ThemaButtom/ThemaContext";
import './style.css';

const Home = () => {
    const [fanfics, setFanfics] = useState([]);
    const contextThema = useContext(ThemaContext);

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:5000/api/v1/historias');
            const fics  = await resp.json();
            setFanfics(fics);
        }
        fetchData();
      }, []);
    
    return (
        <>
            <Header/>
            <main className="main" style={{background: contextThema.thema}}>
                <section className="pres-container">
                    <h1 className="hm-title">Tsuki Fanfiction</h1>
                    <section>
                        <h3 className="hm-description">Comunidade dedicada à criação e compartilhamento de ficções criadas 
                        por fãs ou histórias originais.</h3>
                        <h3 className="hm-description">Junte-se a nós e solte sua imaginação!</h3>
                    </section>
                </section>
                <section className="hm-filters">
                    <Filters setResult={setFanfics}/>
                </section>
                <ul className="hm-list">
                    {
                        fanfics.slice(0,10).map((fic) => 
                            <li className="hm-list-item" key={`bn-${fic.id}`}>
                                <BannerItem 
                                    img={fic.img} 
                                    title={fic.titulo}
                                    resume={fic.resumo} 
                                    author={fic.autor}
                                    category={fic.categoria}
                                    fandom={fic.fandom}
                                    genres={fic.generos}
                                    status={fic.status}
                                    url={`http://localhost:5000/api/v1/historias/${fic.id}`}/>
                            </li> 
                        )        
                    } 
                </ul>
            </main>
            <Footer/>
        </>
    );
}

export default Home;