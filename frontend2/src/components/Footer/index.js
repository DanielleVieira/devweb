import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <p>Obrigado pelo apoio!</p>
                <ul>
                    <li><a href='https://github.com/DanielleVieira/devweb'>GitHub</a></li>
                </ul>
                <p>
                  &copy; {new Date().getFullYear()}{" "}
                  OTAKUS TECH
                </p>
            </footer>
        </>
    );
}

export default Footer;