import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Create = () => {
    
    return (
        <>
            <Header/>
            <main>
                <section>
                    <form>  
                    <label>Insira a url da imagem</label>  
                    <input type="url" name="website" placeholder="http://example.com"/>   
                    </form>
                    <button>Enviar Imagem</button>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Create;


