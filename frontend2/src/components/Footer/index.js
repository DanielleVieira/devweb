import React from "react";
import './style.css';

const Footer = () => {
    return (
        <>
            <footer>
                <article className="foo-links">
                    <p>Obrigado pelo apoio!</p>
                    <ul className="foo-list">
                        <li><a href='https://github.com/DanielleVieira/devweb' 
                        target="_blank"
                        rel="noreferrer">GitHub</a></li>
                        <li><a href='https://www.youtube.com/' 
                        target="_blank"
                        rel="noreferrer">Youtube</a></li>
                    </ul>
                </article>
                <p>
                  &copy; {new Date().getFullYear()}{" "}
                  Danielle Vieira
                </p>
            </footer>
        </>
    );
}

export default Footer;