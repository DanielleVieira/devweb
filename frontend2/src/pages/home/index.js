import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import BannerItem from "../../components/BannerItem";

const Home = () => {
    const [fanfics, setFanfics] = useState([]);

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
            <main>
                <Filters setResult={setFanfics}/>
                <section>
                    <ul>
                        {
                            fanfics.slice(0,10).map((fic) => 
                                <li key={`bn-${fic.id}`}>
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
                 </section>
            </main>
            <Footer/>
        </>
    );
}

export default Home;